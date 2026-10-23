const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..', '..');
const html = fs.readFileSync(path.join(root, 'visual-editor', 'live-layout.html'), 'utf8');
const app = fs.readFileSync(path.join(root, 'visual-editor', 'editor-app.js'), 'utf8');
const weather = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const qa = fs.readFileSync(path.join(root, 'visual-editor', 'qa.html'), 'utf8');

test('editor loads the real same-origin Weather page and all controls', () => {
  assert.match(html, /iframe id="site" src="\.\.\/index\.html"/);
  for (const id of ['editMode', 'device', 'target', 'undo', 'redo', 'saveDraft', 'restoreDraft', 'versions', 'export', 'import']) assert.match(html, new RegExp(`id="${id}"`));
});

test('editor targets actual Weather DOM selectors without modifying source features', () => {
  for (const selector of ['hero-brand img', 'closure-card', 'typhoon-card', 'weather-block', 'earthquake-card', 'map-card']) {
    assert.ok(app.includes(selector), `missing editor selector ${selector}`);
    assert.ok(weather.includes(selector), `missing Weather source hook ${selector}`);
  }
  assert.match(app, /pmos-editor-selection-overlay/);
  assert.match(app, /crypto\.subtle\.digest\('SHA-256'/);
  assert.match(app, /count < 40/);
  assert.match(app, /Weather DOM 載入逾時/);
  assert.match(app, /initializedDocument === d/);
});

test('touch scrolling is not disabled on content and production limits are explicit', () => {
  assert.doesNotMatch(app, /selectedNode\.style\.touchAction|node\.style\.touchAction/);
  assert.match(html, /本機草稿限制/); assert.match(html, /Production LOCKED/);
  assert.doesNotMatch(app, /\/api\/visual-editor\/(evidence|approval)/);
});

test('QA page is current, separates evidence levels, and its inline script parses', () => {
  assert.match(qa, /pmos\.visual-editor\.qa\.v3/);
  assert.match(qa, /AUTOMATED_BROWSER_EMULATION/);
  assert.match(qa, /physicalPhoneTest:'PENDING'/);
  const scripts = [...qa.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(match => match[1]).filter(Boolean);
  assert.equal(scripts.length, 1);
  assert.doesNotThrow(() => new Function(scripts[0]));
});
