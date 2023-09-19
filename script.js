function hoverProject(element) {
  element.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
}

function unhoverProject(element) {
  element.style.boxShadow = 'none';
}

function toggleDescription(project) {
  const description = project.querySelector('.description');
  description.classList.toggle('show');
}

// Add waving hand animation
const profilePicture = document.querySelector('.profile-picture');
profilePicture.classList.add('waving-hand');
