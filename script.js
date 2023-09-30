let currentThemeIndex = 0;

const themes = ['light-theme', 'blue-theme', 'green-theme', 'dark-theme', 'halloween-theme', 'christmas-theme'];

function toggleTheme() {
  const body = document.body;
  body.classList.remove(...themes);

  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  body.classList.add(themes[currentThemeIndex]);
}

function expandProject(card) {
  // Get all project cards
  var projectCards = document.querySelectorAll('.project-card');

  // Close all project cards
  projectCards.forEach(function (card) {
    card.classList.remove('expanded');
  });

function expandProfile(card) {
  // Get all project cards
  var projectCards = document.querySelectorAll('.project-card');

  // Close all profile cards
  profileCards.forEach(function (card) {
    card.classList.remove('expanded');
  });

  // Expand the clicked profile card
  card.classList.add('expanded');