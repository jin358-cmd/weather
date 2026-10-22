// PMOS Visual Editor Phase 11: fail-closed release approval gate.
// Intentionally no authentication provider or persistence is configured.
// NEVER promote or deploy from this endpoint.
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, private, max-age=0');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Allow', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }
  if (!['GET', 'POST'].includes(req.method)) {
    res.statusCode = 405;
    return res.end(JSON.stringify({ status: 'METHOD_NOT_ALLOWED' }));
  }
  // Authentication, durable Evidence store, verified Owner approval
  // and a separate deployment service are mandatory before release can be enabled.
  const payload = {
    module: 'PMOS-MOD-VISUAL-EDITOR-001',
    phase: '11',
    gate: 'LOCKED',
    authorized: false,
    approvalRecorded: false,
    productionDeploymentEnabled: false,
    missing: ['owner_identity_verification','server_side_authorization','durable_evidence_storage','verified_qa_signoff','release_approval_service'],
    message: 'Release is disabled until server-side Owner verification and approval are implemented.'
  };
  res.statusCode = req.method === 'POST' ? 403 : 200;
  return res.end(JSON.stringify(payload));
};
