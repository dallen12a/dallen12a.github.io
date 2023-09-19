function toggleTheme() {
  const body = document.body;
  const container = document.querySelector('.container');
  const profile = document.querySelector('.profile');
  const projects = document.querySelector('.projects');
  const projectCards = document.querySelectorAll('.project-card');
  const projectLinks = document.querySelectorAll('.project-link');
  const profileLinks = document.querySelectorAll('.profile .contact-info a');

  body.classList.toggle('dark-theme');
  container.classList.toggle('dark-theme');
  profile.classList.toggle('dark-theme');
  projects.classList.toggle('dark-theme');

  projectCards.forEach(card => {
    card.classList.toggle('dark-theme');
  });

  projectLinks.forEach(link => {
    link.classList.toggle('dark-theme');
  });

  profileLinks.forEach(link => {
    link.classList.toggle('dark-theme');
  });
}

function scrollToElement(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetCardId = link.getAttribute('href').substring(1);
    const targetCard = document.getElementById(targetCardId);
    scrollToElement(targetCard);
  });
});