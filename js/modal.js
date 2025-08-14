(() => {
    const openBtn = document.querySelector('[data-modal-open]');
    const closeBtn = document.querySelector('[data-modal-close]');
    const backdrop = document.querySelector('[data-modal]');
  
    const toggle = () => {
      backdrop.classList.toggle('is-open');
      document.body.classList.toggle('modal-open', backdrop.classList.contains('is-open'));
    };
  
    openBtn?.addEventListener('click', toggle);
    closeBtn?.addEventListener('click', toggle);
  
    backdrop?.addEventListener('click', e => {
      if (e.target === backdrop) toggle();
    });
  
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && backdrop.classList.contains('is-open')) toggle();
    });
  })();
  