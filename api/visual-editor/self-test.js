// PMOS Visual Editor Phase 11.6 - read-only security self-test.
// Executes only rejection-path handlers with mock requests. Does not write data
// and cannot grant authority or trigger any deployment.
const evidence = require('./evidence.js');
const approval = require('./approval.js');
const preflight = require('./preflight.js');

async function invoke(handler, method, headers = {}) {
  const result = { statusCode: 200, body: null };
  const req = { method, headers };
  const res = {
    setHeader() { return this; },
    get statusCode() { return result.statusCode; },
    set statusCode(value) { result.statusCode = value; },
    end(value = '') {
      try { result.body = value ? JSON.parse(value) : null; }
      catch { result.body = null; }
      return this;
    }
  };
  await handler(req, res);
  return result;
}

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store, private, max-age=0');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: 'METHOD_NOT_ALLOWED' }));
  }
  const checks = [];
  async function check(id, endpoint, method, expectedStatus, predicate, headers) {
    try {
      const result = await invoke(endpoint, method, headers);
      checks.push({ id, status: result.statusCode === expectedStatus && predicate(result.body) ? 'PASS' : 'FAILED', observedHttpStatus: result.statusCode, expectedHttpStatus: expectedStatus });
    } catch (err) {
      checks.push({ id, status: 'FAILED', error: 'HANDLER_EXCEPTION' });
    }
  }
  await check('evidence_get_closed', evidence, 'GET', 200, b => b?.writeEnabled === false && b?.evidencePersisted === false);
  await check('anonymous_write_denied', evidence, 'POST', 401, b => b?.error === 'AUTHENTICATION_REQUIRED' && b?.evidencePersisted === false);
  await check('unverified_credential_denied', evidence, 'POST', 503, b => b?.evidencePersisted === false, { authorization: 'Bearer invalid-self-test-token' });
  await check('production_approval_denied', approval, 'POST', 403, b => b?.authorized === false && b?.productionDeploymentEnabled === false);
  await check('preflight_locked', preflight, 'GET', 200, b => b?.productionGate === 'LOCKED' && b?.canWriteEvidence === false);
  const passed = checks.filter(c => c.status === 'PASS').length;
  res.statusCode = passed === checks.length ? 200 : 503;
  return res.end(JSON.stringify({
    module: 'PMOS-MOD-VISUAL-EDITOR-001', phase: '11.6',
    scope: 'Server-runtime simulated request checks; NOT external HTTP or authentication acceptance',
    productionGate: 'LOCKED', evidenceWritePerformed: false,
    timestamp: new Date().toISOString(), passed, total: checks.length,
    result: passed === checks.length ? 'PASS' : 'FAILED', checks
  }));
};
