// Fade-in com Intersection Observer
const faders = document.querySelectorAll('.fade-in');
const appear = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });
faders.forEach(fader => appear.observe(fader));

// Menu ativo no scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
function activateMenu() {
  let scrollY = window.pageYOffset;
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY > top && scrollY <= top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', activateMenu);

// Voltar ao topo
const btnTop = document.getElementById('btnTop');
window.addEventListener('scroll', () => {
  btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Vanilla Tilt nos cards
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2
});
