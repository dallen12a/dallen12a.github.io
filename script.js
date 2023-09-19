let index = 0;
const typingText = "Hi, I'm Dave!";
const typingDiv = document.getElementById('typing-text');

function type() {
  if (index < typingText.length) {
    typingDiv.innerHTML += typingText.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

function bounceOnScroll() {
  const elementsToAnimate = document.querySelectorAll('.bounce');
  elementsToAnimate.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight) {
      element.classList.add('bounce-animation');
    }
  });
}

// Typing effect
type();

// Bounce animation for skills and projects on scroll
window.addEventListener('scroll', bounceOnScroll);
