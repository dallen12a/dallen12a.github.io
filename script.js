let currentThemeIndex = 0;
const themes = ['light-theme', 'dark-theme', 'blue-theme', 'green-theme', halloween-theme', 'christmas-theme'];

function toggleTheme() {
  const body = document.body;
  body.classList.remove(...themes);

  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  body.classList.add(themes[currentThemeIndex]);
}

function expandProject(card) {
  card.classList.toggle("expanded");
  const projectDetails = card.querySelector('.project-details');
  projectDetails.classList.toggle('visible');
}