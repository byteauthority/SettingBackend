const {createUser} = require('./crud')

const form = document.getElementById('user-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Send a POST request to the server
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});