// NOVATION — interactions (no dependencies)
(() => {
  const header = document.querySelector('.header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  const burger = document.querySelector('.burger');
  burger?.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.mobile-menu a').forEach(a =>
    a.addEventListener('click', () => document.body.classList.remove('menu-open'))
  );

  // Reveal on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, .process').forEach(el => io.observe(el));

  // Marquee: duplicate content for seamless loop
  document.querySelectorAll('.marquee-track').forEach(t => { t.innerHTML += t.innerHTML; });

  // Subtle parallax for hero orbit cards
  const orbit = document.querySelector('.orbit');
  if (orbit && matchMedia('(pointer: fine)').matches) {
    const cards = orbit.querySelectorAll('.float-card');
    window.addEventListener('mousemove', e => {
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      cards.forEach((c, i) => {
        const k = (i + 1) * 5;
        c.style.translate = `${x * k}px ${y * k}px`;
      });
    });
  }

  // Services sub-nav: highlight current section
  const subLinks = document.querySelectorAll('.subnav a');
  if (subLinks.length) {
    const map = new Map([...subLinks].map(a => [a.getAttribute('href').slice(1), a]));
    const so = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          subLinks.forEach(a => a.classList.remove('current'));
          const link = map.get(e.target.id);
          if (link) { link.classList.add('current'); link.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' }); }
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    map.forEach((_, id) => { const s = document.getElementById(id); s && so.observe(s); });
  }

  // Prototype form: no backend, show success state
  document.querySelectorAll('.form form').forEach(f => {
    f.addEventListener('submit', e => {
      e.preventDefault();
      f.closest('.form').classList.add('sent');
    });
  });
})();
