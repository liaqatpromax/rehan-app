const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form field values
  const name = document.getElementById('exampleInputEmail1').value;
  const number = document.getElementById('exampleInputPassword1').value;
  const email = document.getElementById('exampleInputEmail1').value;
  const message = document.getElementById('exampleFormControlTextarea1').value;

  // Validation check (you can extend this)
  if (!name || !number || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Prepare form data as an object
  const formData = {
    name,
    number,
    email,
    message,
  };

  // Send the form data to the live server
  fetch('https://9000-idx-rehan-app-1731767141242.cluster-a3grjzek65cxex762e4mwrzl46.cloudworkstations.dev/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      alert('Message sent successfully!'); // Display success message
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    });
});
