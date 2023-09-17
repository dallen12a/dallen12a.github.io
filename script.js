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
