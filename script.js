let index = 0;
const typingText = "Hi, I'm Dave!";

function type() {
  const typingDiv = document.getElementById('typing-text');
  if (index < typingText.length) {
    typingDiv.innerHTML += typingText.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

function fadeInSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.style.opacity = 0;

  let sectionTop = section.offsetTop;
  let windowHeight = window.innerHeight;

  if (sectionTop < windowHeight) {
    section.style.opacity = 1;
  } else {
    window.addEventListener('scroll', () => {
      if (window.scrollY > sectionTop - windowHeight + 200) {
        section.style.opacity = 1;
      }
    });
  }
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  });
}

// Typing effect
type();

// Fade in effects for skills and projects
fadeInSection('skills');
fadeInSection('projects');

// Set up event listeners for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSectionId = link.getAttribute('href').substring(1);
    scrollToSection(targetSectionId);
  });
});
