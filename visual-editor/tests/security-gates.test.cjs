// Run from repository root: node --test visual-editor/tests/security-gates.test.cjs
const test = require('node:test');
const assert = require('node:assert/strict');
const evidence = require('../../api/visual-editor/evidence.js');
const approval = require('../../api/visual-editor/approval.js');
const preflight = require('../../api/visual-editor/preflight.js');

function invoke(handler, method, headers = {}) {
  const req = { method, headers };
  const out = { statusCode: 200, headers: {}, body: null };
  const res = {
    setHeader(name, value) { out.headers[name.toLowerCase()] = value; return this; },
    end(body = '') { out.body = body ? JSON.parse(body) : null; return out; }
  };
  return Promise.resolve(handler(req, res)).then(() => out);
}

test('Evidence GET reports writes disabled', async () => {
  const r = await invoke(evidence, 'GET');
  assert.equal(r.statusCode, 200);
  assert.equal(r.body.writeEnabled, false);
  assert.equal(r.body.evidencePersisted, false);
});
test('Evidence anonymous POST must be rejected', async () => {
  const r = await invoke(evidence, 'POST');
  assert.equal(r.statusCode, 401);
  assert.equal(r.body.error, 'AUTHENTICATION_REQUIRED');
  assert.equal(r.body.evidencePersisted, false);
});
test('Fake credential never grants write access', async () => {
  const r = await invoke(evidence, 'POST', { authorization: 'Bearer unverified' });
  assert.equal(r.statusCode, 503);
  assert.equal(r.body.evidencePersisted, false);
});
test('Approval POST always rejects release', async () => {
  const r = await invoke(approval, 'POST');
  assert.equal(r.statusCode, 403);
  assert.equal(r.body.productionDeploymentEnabled, false);
});
test('Preflight GET remains blocked', async () => {
  const r = await invoke(preflight, 'GET');
  assert.equal(r.statusCode, 200);
  assert.equal(r.body.productionGate, 'LOCKED');
  assert.equal(r.body.canWriteEvidence, false);
});
