function expandProject(card) {
  card.classList.toggle("expanded");

  const projectDetails = card.querySelector('.project-details');
  projectDetails.classList.toggle('visible');
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const profile = document.querySelector('.profile');
  profile.classList.toggle('dark-theme');
  const profilePicture = document.querySelector('.profile-picture');
  profilePicture.classList.toggle('dark-theme');
  const projects = document.querySelector('.projects');
  projects.classList.toggle('dark-theme');

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.classList.toggle('dark-theme');
  });

  const projectHeaders = document.querySelectorAll('.project-card h3');
  projectHeaders.forEach(header => {
    header.classList.toggle('dark-theme');
  });

  const projectLinks = document.querySelectorAll('.project-link');
  projectLinks.forEach(link => {
    link.classList.toggle('dark-theme');
  });
}