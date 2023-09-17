function toggleSection(sectionId) {
  const sections = document.querySelectorAll('.content');

  sections.forEach(section => {
    section.style.display = 'none';
  });

  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = 'block';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

const typingText = "Hi, I am Dave!";
let charIndex = 0;

function type() {
  const span = document.getElementById('typing-text');
  if (charIndex < typingText.length) {
    span.textContent += typingText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Adjust typing speed (milliseconds)
  }
}

document.addEventListener('DOMContentLoaded', type);
