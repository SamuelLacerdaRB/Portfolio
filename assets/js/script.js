// Animação fade-in ao rolar a página
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Menu: destacar link ativo no scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function activateMenuAtCurrentSection() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 80; 
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('underline', 'font-bold');
        if (link.getAttribute('href') === '#' + sectionId) {
          link.classList.add('underline', 'font-bold');
        }
      });
    }
  });
}

window.addEventListener('scroll', activateMenuAtCurrentSection);

// Scroll suave ao clicar nos links do menu
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Botão voltar ao topo
const btnTop = document.getElementById('btnTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
