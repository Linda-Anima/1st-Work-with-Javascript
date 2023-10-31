const form = document.querySelector('form');
const firstName = document.querySelector('input[type="text"][placeholder="First Name"]');
const lastName = document.querySelector('input[type="text"][placeholder="Last Name"]');
const password = document.querySelector('input[type="password"][placeholder="Password"]');
const confirmPassword = document.querySelector('input[type="password"][placeholder="Confirm Password"]');
const phoneNumber = document.querySelector('input[type="number"][placeholder="Phone Number"]');
const email = document.querySelector('input[type="email"][placeholder="Email"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (firstName.value === '' || lastName.value === '' || password.value === '' || confirmPassword.value === '' || phoneNumber.value === '' || email.value === '') {
    alert('Please fill in all fields.');
  } else if (password.value !== confirmPassword.value) {
    alert('Passwords do not match.');
  } else {
    alert('Thank you for signing up!');
    window.location.href = 'https://about.html';
  }
});

