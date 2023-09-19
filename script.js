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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
}
