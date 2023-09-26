function toggleTheme() {
  const themes = ['light-theme', 'dark-theme', 'blue-theme', 'green-theme'];
  const body = document.body;

  const currentThemeIndex = themes.indexOf(body.classList.value);
  const nextThemeIndex = (currentThemeIndex + 1) % themes.length;

  body.classList.remove(...themes);
  body.classList.add(themes[nextThemeIndex]);
}

function expandProject(card) {
  card.classList.toggle("expanded");

  const projectDetails = card.querySelector('.project-details');
  projectDetails.classList.toggle('visible');
}