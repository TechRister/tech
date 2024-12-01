// Smooth scroll to sections
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
      console.error(`Section with id "${id}" not found.`);
  }
}

// Contact form submission handler
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
          event.preventDefault(); // Prevent default form submission

          // Retrieve form field values
          const name = document.getElementById('name').value.trim();
          const email = document.getElementById('email').value.trim();
          const message = document.getElementById('message').value.trim();

          // Simple validation
          if (name && email && message) {
              // Display success message
              alert(`Thank you, ${name}! Your message has been sent.`);
              contactForm.reset(); // Reset the form fields
          } else {
              // Display error message
              alert('Please fill out all fields before submitting.');
          }
      });
  } else {
      console.error('Contact form element not found.');
  }
});
