let index = 0;
const typingText = "Welcome to Dave's Portfolio";

function type() {
  const typingDiv = document.getElementById('typing-text');
  if (index < typingText.length) {
    typingDiv.innerHTML += typingText.charAt(index);
    index++;
    setTimeout(type, 50); // Adjust the delay for faster typing effect
  }
}

function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById('toggle-button');
  body.classList.toggle('dark-mode');
  toggleButton.innerText = body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Set up event listener for the toggle button
const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', toggleDarkMode);

// Start typing effect after a short delay
setTimeout(type, 1000); // Adjust the delay before starting typing effect
