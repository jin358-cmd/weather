const test = require('node:test');
const assert = require('node:assert/strict');
const Core = require('../editor-core.js');

test('default draft is valid local-only v3 data', () => {
  const value = Core.validateDraft(Core.defaultState());
  assert.equal(value.schema, Core.SCHEMA);
  assert.deepEqual(value.elements, {});
  assert.deepEqual(value.texts, {});
});

test('valid draft clamps layout values and strips unknown element keys', () => {
  const value = Core.validateDraft({
    ...Core.defaultState(), device: 'mobile', layout: { cardGap: 999 },
    elements: { weather: { x: 9999, y: -9999, width: 2000, height: 1 }, evil: { x: 1 } },
    texts: { 'text:weather:n0': 'Forecast', '__proto__': 'nope' }
  });
  assert.equal(value.device, 'mobile');
  assert.equal(value.layout.cardGap, 64);
  assert.deepEqual(value.elements.weather, { x: 600, y: -600, width: 1400, height: 32 });
  assert.equal(value.elements.evil, undefined);
  assert.equal(value.texts['text:weather:n0'], 'Forecast');
});

test('unsafe or malformed imports are rejected', () => {
  assert.throws(() => Core.validateDraft({ schema: 'old', elements: {}, texts: {} }), /v3/);
  assert.throws(() => Core.validateDraft({ ...Core.defaultState(), texts: [] }), /texts/);
  assert.throws(() => Core.validateDraft({ ...Core.defaultState(), logo: { dataUrl: 'data:image/svg+xml;base64,PHN2Zz4=' } }), /PNG/);
  assert.throws(() => Core.validateDraft({ ...Core.defaultState(), logo: { dataUrl: 'data:image/png;base64,not-base64' } }), /PNG/);
});

test('logo data URL is retained byte-for-byte with evidence fields', () => {
  const dataUrl = 'data:image/png;base64,iVBORw0KGgo=';
  const value = Core.validateDraft({ ...Core.defaultState(), logo: { dataUrl, name: 'logo.png', sha256: 'a'.repeat(64) } });
  assert.equal(value.logo.dataUrl, dataUrl);
  assert.equal(value.logo.sha256, 'a'.repeat(64));
});

test('undo history is bounded and excludes duplicate snapshots', () => {
  let stack = []; const initial = Core.defaultState();
  stack = Core.pushUndo(stack, initial, 2); stack = Core.pushUndo(stack, initial, 2);
  stack = Core.pushUndo(stack, { ...initial, device: 'mobile' }, 2);
  stack = Core.pushUndo(stack, { ...initial, layout: { cardGap: 20 } }, 2);
  assert.equal(stack.length, 2); assert.equal(stack[0].device, 'mobile');
});
