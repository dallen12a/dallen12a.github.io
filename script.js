let currentProfileIndex = 0;  // Add a separate index for profile themes
const profileThemes = ['light-theme', 'blue-theme', 'green-theme', 'dark-theme', 'halloween-theme', 'christmas-theme'];

function toggleProfileTheme() {
  const profile = document.querySelector('.profile-card');
  profile.classList.remove(...profileThemes);

  currentProfileIndex = (currentProfileIndex + 1) % profileThemes.length;
  profile.classList.add(profileThemes[currentProfileIndex]);
}

function expandProfile() {
  const profile = document.querySelector('.profile-card');
  profile.classList.toggle('expanded');
}

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

  // Expand the clicked project card
  card.classList.add('expanded');
}