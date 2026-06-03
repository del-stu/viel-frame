(function() {
  'use strict';

  const basePath = new URL('.', import.meta.url).href;
  const link_css = document.createElement('link');
  link_css.rel = 'stylesheet';
  link_css.href = basePath + 'style.css';
  document.head.appendChild(link_css);

  function injectJS(src, callback) {
    if (document.querySelector(`script[src="${src}"]`)) {
      if (callback) callback();
      return;
    }
    var script = document.createElement('script');
    script.src = src;
    script.onload = callback || null;
    document.head.appendChild(script);
  }

  // ========== Prism ==========
  const link_prism = document.createElement('link');
  link_prism.rel = 'stylesheet';
  link_prism.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
  document.head.appendChild(link_prism);

  injectJS('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js', function() {
    injectJS('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js', function() {
      if (typeof Prism !== 'undefined' && Prism.plugins && Prism.plugins.autoloader) {
        Prism.plugins.autoloader.languages_path =
          'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/';
      }
      // 高亮所有代码块
      if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
      }
    });
  });

  // ========== 暴露 API ==========
  window.Viel = {
    injectJS: injectJS,
    highlightAll: function() {
      if (typeof Prism !== 'undefined') Prism.highlightAll();
    }
  };

  console.log('VIEL FRAME (ALSO PRISM AUTOLOADER)');
})();