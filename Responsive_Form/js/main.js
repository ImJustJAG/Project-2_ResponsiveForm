// The "actors" (aka the form and results screen)
const form = document.querySelector('#form');
const confirmation = document.querySelector('#submission-confirmation');

//form elements
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const userInfo = {
    // Watches the selected option on the radio options
    candidate: form.querySelector('input[name="candidate"]:checked').value,
    // And these look at what quote and name the user inputs
    name: form.querySelector('#name').value,
    message: form.querySelector('#message').value
    // I didn't put one for the email since it isn't dispalyed on the resuts screen. 
  };

  confirmation.querySelector('#confirmation-candidate').textContent = userInfo.candidate;
  confirmation.querySelector('#confirmation-name').textContent = userInfo.name;
  confirmation.querySelector('#confirmation-message').textContent = userInfo.message;
  confirmation.showModal();
});

// Watches the close button on the results pop-up and closes it when clicked
confirmation.querySelector('.confirmation-close').addEventListener('click', function() {
  confirmation.close();
});