let index = 0;
const typingText = "Welcome to Dave's Portfolio";

function type() {
  const typingDiv = document.getElementById('typing-text');
  if (index < typingText.length) {
    typingDiv.innerHTML += typingText.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById('toggle-button');
  body.classList.toggle('dark-mode');
  toggleButton.innerText = body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';

  // Optionally, save the user's preference for future visits
  // localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
}

// Set up event listener for the toggle button
const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', toggleDarkMode);

// Start typing effect
type();
