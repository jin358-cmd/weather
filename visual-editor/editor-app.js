(function () {
  'use strict';
  const Core = window.PmosEditorCore;
  const $ = id => document.getElementById(id);
  const frame = $('site');
  const DRAFT_KEY = 'pmos-weather-visual-editor-v3-draft';
  const HISTORY_KEY = 'pmos-weather-visual-editor-v3-history';
  const registry = {
    logo: { label: 'Logo', selector: '.hero-brand img', kind: 'image' },
    closure: { label: '停班停課卡片', selector: '.closure-card', kind: 'card' },
    typhoon: { label: '颱風卡片', selector: '.typhoon-card', kind: 'card' },
    weather: { label: '天氣卡片', selector: '.weather-block', kind: 'card' },
    quake: { label: '地震卡片', selector: '.earthquake-card', kind: 'card' },
    map: { label: '災害地圖卡片', selector: '.map-card', kind: 'card' }
  };
  const textSelectors = 'h1,h2,h3,h4,p,strong,.card-title,.section-title,.hero-subtitle';
  let state = Core.defaultState();
  let selectedKey = 'logo', selectedNode = null, selectedKind = 'image';
  let undo = [], redo = [], overlay = null, drag = null, textSnapshotTaken = false;
  let initRun = 0, initializedDocument = null;

  function setStatus(message, tone = '') { $('state').textContent = message; $('state').dataset.tone = tone; }
  function report(message) { $('report').textContent = message; }
  function doc() {
    const value = frame.contentDocument;
    if (!value || !value.body) throw new Error('Weather 預覽尚未完成載入');
    return value;
  }
  function textKey(rootKey, node) {
    const root = doc().querySelector(registry[rootKey].selector);
    const index = [...root.querySelectorAll(textSelectors)].indexOf(node);
    return index < 0 ? null : `text:${rootKey}:n${index}`;
  }
  function nodeForKey(key) {
    const d = doc();
    if (registry[key]) return d.querySelector(registry[key].selector);
    const match = /^text:([a-z0-9_-]+):n(\d+)$/i.exec(key);
    if (!match || !registry[match[1]]) return null;
    const root = d.querySelector(registry[match[1]].selector);
    return root ? root.querySelectorAll(textSelectors)[Number(match[2])] || null : null;
  }
  function rootKeyFor(node) {
    for (const [key, item] of Object.entries(registry)) if (node.closest(item.selector)) return key;
    return null;
  }
  function snapshot() { undo = Core.pushUndo(undo, state); redo = []; updateUndoButtons(); }
  function updateUndoButtons() { $('undo').disabled = !undo.length; $('redo').disabled = !redo.length; }
  function currentTransform(key) { return state.elements[key] || { x: 0, y: 0 }; }
  function applyNode(key) {
    const node = nodeForKey(key); if (!node) return false;
    const value = currentTransform(key);
    node.style.setProperty('transform', `translate(${value.x || 0}px,${value.y || 0}px)`, 'important');
    node.style.setProperty('transform-origin', 'top left', 'important');
    if (value.width !== undefined) { node.style.setProperty('width', value.width + 'px', 'important'); node.style.setProperty('max-width', '100%', 'important'); }
    if (value.height !== undefined && !key.startsWith('text:') && key !== 'logo') {
      node.style.setProperty('height', value.height + 'px', 'important'); node.style.setProperty('min-height', '0', 'important'); node.style.setProperty('overflow', 'auto', 'important');
    }
    if (value.fontSize !== undefined && key.startsWith('text:')) node.style.setProperty('font-size', value.fontSize + 'px', 'important');
    return true;
  }
  function ensureStyle() {
    const d = doc(); let style = d.getElementById('pmos-visual-editor-runtime');
    if (!style) { style = d.createElement('style'); style.id = 'pmos-visual-editor-runtime'; d.head.appendChild(style); }
    style.textContent = `.app > .card,.app > section.card{margin-bottom:${state.layout.cardGap}px!important}`;
  }
  function applyAll() {
    const d = doc(); ensureStyle();
    if (state.logo) { const logo = d.querySelector(registry.logo.selector); if (logo) { logo.src = state.logo.dataUrl; logo.removeAttribute('srcset'); } }
    for (const [key, value] of Object.entries(state.texts)) { const node = nodeForKey(key); if (node) node.textContent = value; }
    for (const key of Object.keys(state.elements)) applyNode(key);
    setDevice(state.device, false); select(selectedKey, false);
  }
  function removeOverlay() { overlay?.remove(); overlay = null; }
  function createOverlay() {
    removeOverlay(); if (!$('editMode').checked || !selectedNode) return;
    const d = doc(), box = d.createElement('div'); box.id = 'pmos-editor-selection-overlay'; box.setAttribute('aria-hidden', 'true');
    Object.assign(box.style, { position: 'fixed', zIndex: '2147483646', border: '3px solid #f28b35', borderRadius: '5px', pointerEvents: 'none', boxSizing: 'border-box' });
    const move = d.createElement('button'); move.type = 'button'; move.textContent = '移動'; move.dataset.editorHandle = 'move';
    const resize = d.createElement('button'); resize.type = 'button'; resize.textContent = '↘'; resize.dataset.editorHandle = 'resize';
    for (const button of [move, resize]) Object.assign(button.style, { position: 'absolute', pointerEvents: 'auto', border: '0', background: '#f28b35', color: '#172231', font: '700 12px system-ui', padding: '6px 8px', borderRadius: '5px', touchAction: 'none', cursor: button === move ? 'move' : 'nwse-resize', boxShadow: '0 2px 8px #0008' });
    Object.assign(move.style, { left: '-3px', top: '-31px' }); Object.assign(resize.style, { right: '-3px', bottom: '-3px' });
    box.append(move, resize); d.body.appendChild(box); overlay = box;
    move.addEventListener('pointerdown', event => beginPointer(event, 'move'));
    resize.addEventListener('pointerdown', event => beginPointer(event, 'resize')); updateOverlay();
  }
  function updateOverlay() {
    if (!overlay || !selectedNode?.isConnected) return;
    const rect = selectedNode.getBoundingClientRect();
    Object.assign(overlay.style, { left: rect.left + 'px', top: rect.top + 'px', width: rect.width + 'px', height: rect.height + 'px' });
  }
  function beginPointer(event, mode) {
    event.preventDefault(); event.stopPropagation(); snapshot();
    const rect = selectedNode.getBoundingClientRect(), computed = frame.contentWindow.getComputedStyle(selectedNode), current = currentTransform(selectedKey);
    drag = { mode, pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, original: { ...current }, width: rect.width, height: rect.height, fontSize: parseFloat(computed.fontSize) || 18 };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }
  function pointerMove(event) {
    if (!drag) return;
    const dx = event.clientX - drag.startX, dy = event.clientY - drag.startY, value = { ...drag.original };
    if (drag.mode === 'move') { value.x = Math.round((drag.original.x || 0) + dx); value.y = Math.round((drag.original.y || 0) + dy); }
    else if (selectedKind === 'text') value.fontSize = Math.max(10, Math.min(96, Math.round(drag.fontSize + (dx + dy) / 5)));
    else { value.width = Math.max(40, Math.min(1400, Math.round(drag.width + dx))); if (selectedKind === 'card') value.height = Math.max(80, Math.min(1600, Math.round(drag.height + dy))); }
    state.elements[selectedKey] = value; applyNode(selectedKey); updateInspector(); updateOverlay(); setStatus('預覽已變更，尚未儲存', 'warn');
  }
  function pointerEnd() { if (!drag) return; drag = null; updateOverlay(); }
  function select(key, announce = true) {
    const node = nodeForKey(key); if (!node) { report(`找不到 ${key} 對應的真實頁面元素`); return false; }
    selectedKey = key; selectedNode = node; selectedKind = key.startsWith('text:') ? 'text' : registry[key].kind;
    $('target').value = registry[key] ? key : 'clicked-text'; updateInspector(); createOverlay();
    if (announce) report(`已選取真實頁面元素：${selectionLabel()}。使用橘色「移動」與右下角縮放控制點，避免干擾卡片內按鈕。`);
    return true;
  }
  function selectionLabel() {
    if (registry[selectedKey]) return registry[selectedKey].label;
    const root = /^text:([^:]+)/.exec(selectedKey)?.[1];
    return `${registry[root]?.label || '區塊'}內文字「${(selectedNode?.textContent || '').trim().slice(0, 28)}」`;
  }
  function updateInspector() {
    const value = currentTransform(selectedKey); $('selectionName').textContent = selectionLabel();
    $('x').value = Math.round(value.x || 0); $('y').value = Math.round(value.y || 0);
    $('width').value = value.width === undefined ? '' : Math.round(value.width); $('height').value = value.height === undefined ? '' : Math.round(value.height); $('fontSize').value = value.fontSize === undefined ? '' : Math.round(value.fontSize);
    $('widthRow').hidden = selectedKind === 'text'; $('heightRow').hidden = selectedKind !== 'card'; $('fontRow').hidden = selectedKind !== 'text'; $('textRow').hidden = selectedKind !== 'text';
    if (selectedKind === 'text') $('textValue').value = state.texts[selectedKey] ?? selectedNode.textContent;
  }
  function commitInspector() {
    const value = { ...currentTransform(selectedKey) };
    value.x = Math.max(-600, Math.min(600, Number($('x').value) || 0)); value.y = Math.max(-600, Math.min(600, Number($('y').value) || 0));
    if (selectedKind !== 'text' && $('width').value) value.width = Math.max(40, Math.min(1400, Number($('width').value)));
    if (selectedKind === 'card' && $('height').value) value.height = Math.max(80, Math.min(1600, Number($('height').value)));
    if (selectedKind === 'text' && $('fontSize').value) value.fontSize = Math.max(10, Math.min(96, Number($('fontSize').value)));
    state.elements[selectedKey] = value; applyNode(selectedKey); updateOverlay(); setStatus('預覽已變更，尚未儲存', 'warn');
  }
  function setDevice(device, update = true) {
    state.device = device === 'mobile' ? 'mobile' : 'desktop'; frame.closest('.device-frame').dataset.device = state.device; $('device').value = state.device;
    $('deviceLabel').textContent = state.device === 'mobile' ? '手機預覽 390px（瀏覽器模擬）' : '桌機預覽'; if (update) setStatus('已切換預覽尺寸，尚未儲存', 'warn'); requestAnimationFrame(updateOverlay);
  }
  function installDocumentEvents() {
    const d = doc();
    d.addEventListener('click', event => {
      if (!$('editMode').checked || event.target.closest('#pmos-editor-selection-overlay')) return;
      const rootKey = rootKeyFor(event.target); if (!rootKey) return;
      const textNode = event.target.closest(textSelectors), key = textNode && textNode.closest(registry[rootKey].selector) ? textKey(rootKey, textNode) : rootKey;
      if (!key) return; event.preventDefault(); event.stopPropagation(); select(key);
    }, true);
    d.addEventListener('pointermove', pointerMove, true); d.addEventListener('pointerup', pointerEnd, true); d.addEventListener('pointercancel', pointerEnd, true); d.addEventListener('scroll', updateOverlay, true);
    frame.contentWindow.addEventListener('resize', updateOverlay); d.querySelectorAll(textSelectors).forEach(node => node.dataset.pmosEditorText = 'true');
  }
  function inspect() {
    const d = doc(), found = Object.entries(registry).filter(([, item]) => d.querySelector(item.selector));
    installDocumentEvents(); applyAll();
    report(`實際 DOM 掃描完成：${found.length}/${Object.keys(registry).length} 個主要可編輯區塊；可點選各卡片內文字。編輯模式關閉時，Weather/Quake/Typhoon/Map 互動維持原樣。`);
    setStatus('真實 Weather 頁面已載入 · 本機草稿模式', 'ok');
  }
  function readHistory() {
    try { const value = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); return Array.isArray(value) ? value.map(Core.validateDraft).slice(0, 12) : []; } catch { return []; }
  }
  function saveDraft() {
    try { state = Core.buildBackup(state); localStorage.setItem(DRAFT_KEY, JSON.stringify(state)); const history = readHistory(); history.unshift(Core.clone(state)); localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 12))); setStatus('本機草稿與歷史快照已儲存', 'ok'); renderVersions(); }
    catch (error) { alert('本機儲存失敗：' + error.message); }
  }
  function restore(value, message) { snapshot(); state = Core.validateDraft(value); frame.contentWindow.location.reload(); setStatus(message, 'ok'); }
  function restoreDraft() {
    try { const value = JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null'); if (!value) throw new Error('尚無本機草稿'); restore(value, '正在重新載入本機草稿…'); }
    catch (error) { alert('讀取失敗：' + error.message); }
  }
  function renderVersions() {
    const versions = readHistory(), list = $('versionList'); list.replaceChildren();
    if (!versions.length) { const li = document.createElement('li'); li.textContent = '尚無歷史版本'; list.appendChild(li); return; }
    versions.forEach((version, index) => { const li = document.createElement('li'), button = document.createElement('button'); button.type = 'button'; button.className = 'secondary'; button.textContent = `${index + 1}. ${new Date(version.savedAt).toLocaleString()} · ${Object.keys(version.elements).length} 個版面變更`; button.onclick = () => { $('versionsDialog').close(); restore(version, '正在還原歷史版本…'); }; li.appendChild(button); list.appendChild(li); });
  }
  async function uploadLogo(file) {
    if (!file) return;
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type) || file.size > 3_000_000) { alert('Logo 僅支援 3 MB 內 PNG、JPEG、WebP'); return; }
    const dataUrl = await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(file); });
    const hash = await crypto.subtle.digest('SHA-256', await file.arrayBuffer()), sha256 = [...new Uint8Array(hash)].map(byte => byte.toString(16).padStart(2, '0')).join('');
    snapshot(); state.logo = Core.validateDraft({ ...state, schema: Core.SCHEMA, logo: { dataUrl, name: file.name, type: file.type, sha256 } }).logo;
    const logo = nodeForKey('logo'); logo.src = dataUrl; logo.removeAttribute('srcset'); select('logo'); $('logoEvidence').textContent = `保留原始上傳位元：${file.name} · ${file.size} bytes · SHA-256 ${sha256}`; setStatus('Logo 已載入預覽，尚未儲存', 'warn');
  }
  function downloadBackup() {
    const backup = Core.buildBackup(state), blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' }), url = URL.createObjectURL(blob), link = document.createElement('a');
    link.href = url; link.download = `pmos-weather-editor-${new Date().toISOString().slice(0, 10)}.json`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  async function importBackup(file) {
    if (!file) return; if (file.size > 4_500_000) { alert('備份檔不可超過 4.5 MB'); return; }
    try { const clean = Core.validateDraft(JSON.parse(await file.text())); restore(clean, 'JSON 驗證通過，正在套用…'); }
    catch (error) { alert('匯入失敗，未變更目前內容：' + error.message); }
    finally { $('importFile').value = ''; }
  }
  function undoAction() { const previous = undo.pop(); if (!previous) return; redo = Core.pushUndo(redo, state); state = previous; frame.contentWindow.location.reload(); updateUndoButtons(); setStatus('已復原上一步', 'ok'); }
  function redoAction() { const next = redo.pop(); if (!next) return; undo = Core.pushUndo(undo, state); state = next; frame.contentWindow.location.reload(); updateUndoButtons(); setStatus('已重做一步', 'ok'); }

  function initializeFrame() {
    const run = ++initRun;
    const attempt = count => {
      if (run !== initRun) return;
      try {
        const d = doc();
        const ready = Object.values(registry).some(item => d.querySelector(item.selector));
        if (!ready) {
          if (count < 40) { setStatus('正在等待 Weather DOM…'); setTimeout(() => attempt(count + 1), 100); return; }
          throw new Error('Weather DOM 載入逾時，未找到可編輯區塊');
        }
        if (initializedDocument === d) { applyAll(); return; }
        initializedDocument = d; removeOverlay(); selectedNode = null; inspect();
      } catch (error) { setStatus('Adapter 未就緒', 'bad'); report(error.message); }
    };
    attempt(0);
  }
  frame.addEventListener('load', initializeFrame);
  $('editMode').onchange = () => { if ($('editMode').checked) { select(selectedKey); setStatus('編輯模式開啟 · 請點選真實頁面元素', 'warn'); } else { removeOverlay(); setStatus('安全瀏覽模式 · 網站互動可正常操作', 'ok'); } };
  $('target').onchange = () => { if ($('target').value !== 'clicked-text') select($('target').value); };
  $('device').onchange = () => { snapshot(); setDevice($('device').value); };
  $('gap').oninput = () => { state.layout.cardGap = Number($('gap').value); $('gapValue').textContent = state.layout.cardGap; ensureStyle(); setStatus('預覽已變更，尚未儲存', 'warn'); }; $('gap').onpointerdown = snapshot;
  for (const id of ['x', 'y', 'width', 'height', 'fontSize']) { $(id).onfocus = snapshot; $(id).onchange = commitInspector; }
  $('textValue').onfocus = () => { if (!textSnapshotTaken) { snapshot(); textSnapshotTaken = true; } }; $('textValue').onblur = () => { textSnapshotTaken = false; };
  $('textValue').oninput = () => { if (selectedKind !== 'text') return; state.texts[selectedKey] = $('textValue').value.slice(0, 2000); selectedNode.textContent = state.texts[selectedKey]; updateOverlay(); setStatus('文字已變更，尚未儲存', 'warn'); };
  $('logo').onchange = event => uploadLogo(event.target.files[0]); $('saveDraft').onclick = saveDraft; $('restoreDraft').onclick = restoreDraft;
  $('export').onclick = downloadBackup; $('import').onclick = () => $('importFile').click(); $('importFile').onchange = event => importBackup(event.target.files[0]);
  $('undo').onclick = undoAction; $('redo').onclick = redoAction; $('versions').onclick = () => { renderVersions(); $('versionsDialog').showModal(); }; $('closeVersions').onclick = () => $('versionsDialog').close();
  $('reset').onclick = () => { if (!confirm('重設目前預覽？已儲存的本機草稿與歷史不會刪除。')) return; snapshot(); state = Core.defaultState(); frame.contentWindow.location.reload(); setStatus('目前預覽已重設；本機草稿仍保留', 'ok'); };
  window.addEventListener('resize', updateOverlay); window.addEventListener('keydown', event => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') { event.preventDefault(); event.shiftKey ? redoAction() : undoAction(); } });
  updateUndoButtons(); $('gapValue').textContent = state.layout.cardGap;
  try { const saved = JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null'); if (saved) { state = Core.validateDraft(saved); setStatus('已找到並自動開啟此瀏覽器的本機草稿', 'ok'); } }
  catch { setStatus('本機草稿無效，已使用原始版面', 'bad'); }
  // Start immediately for cached pages and retry until the actual Weather DOM replaces
  // the iframe's initial about:blank document. The load event starts a fresh run too.
  queueMicrotask(initializeFrame);
})();
