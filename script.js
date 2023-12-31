let currentThemeIndex = 0;

const themes = ['light-theme', 'blue-theme', 'green-theme', 'dark-theme', 'halloween-theme', 'christmas-theme'];

function toggleTheme() {
  const body = document.body;
  body.classList.remove(...themes);

  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  body.classList.add(themes[currentThemeIndex]);
}

// Set the initial theme to light-theme
document.body.classList.add(themes[currentThemeIndex]);

function toggleCard(card) {
  const cardContent = card.querySelector('.card-content');
  const expandText = card.querySelector('.expand-text');

  if (cardContent.style.display === 'none' || cardContent.style.display === '') {
    cardContent.style.display = 'block';
    if (expandText) {
      expandText.style.display = 'none';
    }
  } else {
    cardContent.style.display = 'none';
    if (expandText) {
      expandText.style.display = 'block';
    }
  }
}

function expandProject(card) {
  // Close all project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(function (projectCard) {
    projectCard.classList.remove('expanded');
  });

  // Toggle the 'expanded' class for the clicked project card
  card.classList.toggle('expanded');
}

function expandProfileCard(card) {
  // Toggle the 'expanded' class for the clicked profile card
  card.classList.toggle('expanded');
}

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video', {
    height: '100%',
    width: '100%',
    videoId: '86_HWIMd__k', // Replace with your video ID
    playerVars: {
      'autoplay': 0,
      'controls': 1,
      'rel': 0,
      'showinfo': 0
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  const videoContainer = document.getElementById('video-container');

  // Check if the device is a mobile and in portrait mode
  function isMobileAndPortrait() {
    return window.innerWidth < window.innerHeight && window.innerWidth <= 768;
  }

  videoContainer.addEventListener('click', () => {
    // Check if it's a mobile device in portrait mode
    if (isMobileAndPortrait()) {
      // Prompt the user to switch to landscape
      alert('Please switch to landscape mode to watch the video.');
    } else {
      // Play the video and set the size to full screen
      player.playVideo();
      player.setSize(window.innerWidth, window.innerHeight);
    }
  });
}
