// Pitch Deck Brief Form - JavaScript

// Show/hide demo link field
function showDemoLink() {
document.getElementById(‘demo-link’).style.display = ‘block’;
}

function hideDemoLink() {
document.getElementById(‘demo-link’).style.display = ‘none’;
}

// Show/hide financial projections details
function showProjectionsUpload() {
document.getElementById(‘projections-details’).style.display = ‘block’;
}

function hideProjectionsUpload() {
document.getElementById(‘projections-details’).style.display = ‘none’;
}

// Form submission handling
document.addEventListener(‘DOMContentLoaded’, function() {
const form = document.getElementById(‘pitch-deck-form’);

```
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get email for thank you message
        const email = document.getElementById('email').value;
        
        // Submit form data to Netlify in background
        const formData = new FormData(form);
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            // Show thank you message
            document.querySelector('.pitch-deck-intro').style.display = 'none';
            document.querySelector('.pitch-deck-form-section').style.display = 'none';
            document.getElementById('thank-you-message').style.display = 'block';
            document.getElementById('submitted-email').textContent = email;
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch(error => {
            console.error('Form submission error:', error);
            alert('There was an error submitting the form. Please try again or email us directly at hello@indieco.in');
        });
    });
}
```

});

// Set minimum date for deadline picker (today)
document.addEventListener(‘DOMContentLoaded’, function() {
const deadlineInput = document.getElementById(‘deadline’);
if (deadlineInput) {
const today = new Date().toISOString().split(‘T’)[0];
deadlineInput.setAttribute(‘min’, today);
}
});
