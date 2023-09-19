function toggleTheme() {
  const body = document.body;
  const container = document.querySelector('.container');
  
  body.classList.toggle('dark-theme');
  container.classList.toggle('dark-theme');
}