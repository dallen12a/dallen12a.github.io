function toggleTheme() {
  const body = document.body;
  const container = document.querySelector('.container');
  const profile = document.querySelector('.profile');
  const projects = document.querySelector('.projects');
  const projectCards = document.querySelectorAll('.project-card');
  const projectLinks = document.querySelectorAll('.project-link');

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
}