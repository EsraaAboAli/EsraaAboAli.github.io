// Collapsible Timeline
function toggleTimeline(header) {
  const content = header.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Animated Skill Bars
const skillBars = document.querySelectorAll('.progress');
window.addEventListener('scroll', () => {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) {
      bar.style.width = bar.dataset.progress;
    }
  });
});

// Smooth Scroll Highlight (optional enhancement)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if(scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});
