// PMOS Visual Editor evidence API - Phase 11.2.
// No identity provider or durable storage has been authorized/configured.
// Reject all write attempts. Never trust client-supplied identity or approval flags.
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, private');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Allow', 'GET, POST');
  const status = {
    module: 'PMOS-MOD-VISUAL-EDITOR-001',
    phase: '11.2',
    gate: 'LOCKED',
    authentication: 'NOT_CONFIGURED',
    evidenceStorage: 'NOT_CONFIGURED',
    writeEnabled: false,
    evidencePersisted: false,
    productionReleaseEnabled: false
  };
  if (req.method === 'GET') {
    res.statusCode = 200;
    return res.end(JSON.stringify(status));
  }
  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: 'METHOD_NOT_ALLOWED' }));
  }
  // An Authorization header is not authentication. Tokens must be verified
  // cryptographically against an approved issuer on the server before writing.
  const hasCredential = !!(req.headers.authorization || req.headers.cookie);
  if (!hasCredential) {
    res.statusCode = 401;
    return res.end(JSON.stringify({ ...status, error: 'AUTHENTICATION_REQUIRED' }));
  }
  res.statusCode = 503;
  return res.end(JSON.stringify({ ...status, error: 'VERIFIED_IDENTITY_AND_PERSISTENCE_NOT_CONFIGURED' }));
};
