let index = 0;
const typingText = "Hi, I'm Dave!";

function type() {
  const typingDiv = document.getElementById('typing-text');
  if (index < typingText.length) {
    typingDiv.innerHTML += typingText.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

// Toggle between light and dark mode
function toggleDarkMode() {
  console.log('Toggle button clicked');
  const body = document.body;
  body.classList.toggle('dark-mode');
  
  // Toggle the text on the button for dark and light mode
  const toggleButton = document.getElementById('toggle-button');
  toggleButton.innerText = body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';

  // Save the user's preference for future visits
  localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
}

// Smooth scrolling
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  });
}

// Set up event listener for the toggle button
const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', toggleDarkMode);

// Set up event listeners for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSectionId = link.getAttribute('href').substring(1);
    scrollToSection(targetSectionId);
  });
});

// Check the user's preference for dark mode
const darkModePref = localStorage.getItem('dark-mode');
if (darkModePref === 'true') {
  toggleDarkMode(); // Enable dark mode if the preference is set to true
}

// Start typing effect
type();