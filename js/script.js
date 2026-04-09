// COLLAPSIBLE TIMELINE
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const content = button.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// ANIMATE SKILLS ON SCROLL
const skills = document.querySelectorAll('.skill-level');

function animateSkills() {
  const triggerBottom = window.innerHeight * 0.8;
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if(skillTop < triggerBottom){
      skill.style.width = skill.style.width; // already set in HTML
    }
  });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
