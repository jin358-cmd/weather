// Phase 11.3: non-sensitive readiness report. No credentials, no database writes.
// This endpoint is diagnostic only; it cannot grant release authority.
module.exports = function handler(req,res) {
  res.setHeader('Cache-Control','no-store, private, max-age=0');
  res.setHeader('Content-Type','application/json; charset=utf-8');
  res.setHeader('X-Content-Type-Options','nosniff');
  if(req.method!=='GET') {
    res.setHeader('Allow','GET');
    res.statusCode=405;
    return res.end(JSON.stringify({error:'METHOD_NOT_ALLOWED'}));
  }
  const checks=[
    {id:'approved_auth_provider',status:'PENDING',reason:'No approved PMOS Owner identity provider linked'},
    {id:'verified_owner_authorization',status:'PENDING',reason:'No server-side verified Owner permission mapping'},
    {id:'approved_evidence_store',status:'PENDING',reason:'No approved dedicated Evidence database and RLS policies'},
    {id:'durable_readback',status:'PENDING',reason:'No authenticated write/readback verification'},
    {id:'qa_acceptance',status:'PENDING',reason:'Browser and mobile interactive testing not independently verified'},
    {id:'release_approval',status:'PENDING',reason:'No authenticated deployment approval service'}
  ];
  res.statusCode=200;
  return res.end(JSON.stringify({
    module:'PMOS-MOD-VISUAL-EDITOR-001',
    phase:'11.3',
    environment:'preview-or-production-readonly',
    overall:'BLOCKED',
    productionGate:'LOCKED',
    canWriteEvidence:false,
    canApproveRelease:false,
    checks,
    guidance:'Keep PM-OS-Staging inactive pending Owner database alignment; do not reuse volunteer or NavPilot databases.'
  }));
};
