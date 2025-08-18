(() => {
  const header = document.querySelector('.header');
  const btn = document.querySelector('[data-menu-toggle]');
  if (!header || !btn) return;

  const setOpen = (force) => {
    const willOpen = typeof force === 'boolean'
      ? force
      : !header.classList.contains('is-open');

    header.classList.toggle('is-open', willOpen);
    btn.setAttribute('aria-expanded', String(willOpen));
    document.body.style.overflow = willOpen ? 'hidden' : '';
  };

  btn.addEventListener('click', () => setOpen());

  const mq = window.matchMedia('(min-width: 768px)');
  if (mq.addEventListener) {
    mq.addEventListener('change', e => { if (e.matches) setOpen(false); });
  } else {
    mq.addListener(e => { if (e.matches) setOpen(false); });
  }
})();
