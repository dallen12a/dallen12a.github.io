let currentThemeIndex = 0;

const themes = ['light-theme', 'blue-theme', 'green-theme', 'dark-theme', 'halloween-theme', 'christmas-theme'];

function toggleTheme() {
  const body = document.body;
  body.classList.remove(...themes);

  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  body.classList.add(themes[currentThemeIndex]);
}

function toggleCard(card) {
  const cardContent = card.querySelector('.card-content');
  cardContent.style.display = (cardContent.style.display === 'none' || cardContent.style.display === '') ? 'block' : 'none';
}

function expandProject(card) {
  // Close all project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(function (card) {
    card.classList.remove('expanded');
  });

  // Toggle the 'expanded' class for the clicked project card
  card.classList.toggle('expanded');
}

function expandProfileCard(card) {
  // Toggle the 'expanded' class for the clicked profile card
  card.classList.toggle('expanded');
}