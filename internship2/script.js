document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const formMessage = document.getElementById('formMessage');

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.className = 'error';
    formMessage.classList.remove('hidden');
    return;
  }

  if (!email.value.match(emailPattern)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.className = 'error';
    formMessage.classList.remove('hidden');
    return;
  }


  formMessage.textContent = 'Message sent successfully!';
  formMessage.className = 'success';
  formMessage.classList.remove('hidden');


  this.reset();
});
