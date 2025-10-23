// Toggle menu for mobile
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

// Contact form (demo only)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for contacting me! Your message has been sent.');
});
