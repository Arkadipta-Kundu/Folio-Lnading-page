(() => {
  const config = window.FOLIO_CONFIG || {};
  const link = document.getElementById('installer-link');
  const unavailable = document.getElementById('download-unavailable');
  document.getElementById('version').textContent = `Version ${config.version || '0.1.1'}`;
  const raw = typeof config.downloadUrl === 'string' ? config.downloadUrl.trim() : '';
  if (!raw) return;
  try {
    const url = new URL(raw, location.href);
    if (!['http:', 'https:', 'file:'].includes(url.protocol)) return;
    if (url.username || url.password) return;
    if (url.protocol === 'file:' && location.protocol !== 'file:') return;
    link.href = url.href;
    link.hidden = false;
    unavailable.hidden = true;
  } catch { /* Keep the honest unavailable state when configuration is invalid. */ }
})();
