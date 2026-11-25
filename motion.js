// motion.js
(function injectMotionStyles() {
  if (document.getElementById('motion-styles')) return;

  const css = `
    * {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    *::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
    html {
      scroll-behavior: smooth;
      scroll-padding-top: var(--hh, 0px);
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    html::-webkit-scrollbar,
    body::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
    body {
      scrollbar-width: none;
    }
    a, button, .btn, summary, input, select, textarea {
      transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
    }
    @media (prefers-reduced-motion: no-preference) {
      body {
        animation: pgin 0.5s ease-out both;
      }
      @keyframes pgin {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .js .rv {
        opacity: 0;
        transform: translateY(22px);
        transition: opacity 0.55s ease-out var(--d, 0s), transform 0.55s ease-out var(--d, 0s) !important;
      }
      .js .rv.in {
        opacity: 1;
        transform: none;
      }
      #cart.on {
        animation: sl 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
      }
      @keyframes sl {
        from { transform: translateX(100%); }
        to { transform: none; }
      }
      .cue i {
        animation: cue 1.8s ease-in-out infinite;
      }
      @keyframes cue {
        0% { transform: scaleY(0); }
        50% { transform: scaleY(1); }
        100% { transform: scaleY(1); opacity: 0; }
      }
    }
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      * { transition: none !important; }
    }
    @media print {
      .rv, .js .rv {
        opacity: 1 !important
