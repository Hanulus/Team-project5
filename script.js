// ========================================
// TASK 5: Display Current Date and Time
// ========================================
// Author: Chingiz
// This function displays current date and time in the footer

function updateDateTime() {
  const now = new Date();
  
  // Format options
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  
  const formattedDate = now.toLocaleString('en-US', options);
  
  const dateTimeElement = document.getElementById('current-datetime');
  if (dateTimeElement) {
    dateTimeElement.textContent = formattedDate;
  }
}

// Update time every second
if (document.getElementById('current-datetime')) {
  updateDateTime();
  setInterval(updateDateTime, 1000);
}

// ========================================
// TASK 4: Change Background Color
// ========================================
// Author: Chingiz
// This function changes the background color when button is clicked

function changeBackgroundColor() {
  const colors = [
    '#f5f5f0', // original beige
    '#e8f4f8', // light blue
    '#fff5e6', // light orange
    '#f0e6ff', // light purple
    '#e6ffe6', // light green
    '#ffe6f0', // light pink
    '#fff9e6'  // light yellow
  ];
  
  const currentColor = document.body.style.backgroundColor || '#f5f5f0';
  let newColor;
  
  do {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  } while (newColor === currentColor);
  
  document.body.style.backgroundColor = newColor;
  document.body.style.transition = 'background-color 0.5s ease';
}

// Add event listener for background color button
const bgButton = document.getElementById('bg-color-btn');
if (bgButton) {
  bgButton.addEventListener('click', changeBackgroundColor);
}

// ========================================
// TASK 1: Form Validation
// ========================================
// Author: Sultan
// This validates the reservation form

function validateReservationForm(event) {
  event.preventDefault();
  
  // Clear previous errors
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(el => el.remove());
  
  let isValid = true;
  
  // Get form fields
  const name = document.getElementById('guest-name');
  const email = document.getElementById('guest-email');
  const phone = document.getElementById('guest-phone');
  const partySize = document.getElementById('party-size');
  const date = document.getElementById('reservation-date');
  const time = document.getElementById('reservation-time');
  
  // Validate Name (required, min 2 characters)
  if (!name.value.trim() || name.value.trim().length < 2) {
    showError(name, 'Name must be at least 2 characters long');
    isValid = false;
  }
  
  // Validate Email (required, correct format)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailRegex.test(email.value)) {
    showError(email, 'Please enter a valid email address');
    isValid = false;
  }
  
  // Validate Phone (required, min 10 digits)
  const phoneRegex = /^\d{10,}$/;
  const phoneDigits = phone.value.replace(/\D/g, '');
  if (!phoneDigits || phoneDigits.length < 10) {
    showError(phone, 'Phone number must be at least 10 digits');
    isValid = false;
  }
  
  // Validate Party Size (required)
  if (!partySize.value) {
    showError(partySize, 'Please select party size');
    isValid = false;
  }
  
  // Validate Date (required, not in the past)
  if (!date.value) {
    showError(date, 'Please select a date');
    isValid = false;
  } else {
    const selectedDate = new Date(date.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      showError(date, 'Date cannot be in the past');
      isValid = false;
    }
  }
  
  // Validate Time (required)
  if (!time.value) {
    showError(time, 'Please select a time');
    isValid = false;
  }
  
  // If all valid, show success message
  if (isValid) {
    alert('Reservation submitted successfully! We will contact you shortly to confirm.');
    event.target.reset();
  }
}

function showError(inputElement, message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.color = '#d32f2f';
  errorDiv.style.fontSize = '0.875rem';
  errorDiv.style.marginTop = '5px';
  errorDiv.textContent = message;
  
  inputElement.style.borderColor = '#d32f2f';
  inputElement.parentElement.appendChild(errorDiv);
  
  // Remove error on input
  inputElement.addEventListener('input', function() {
    inputElement.style.borderColor = '';
    const error = inputElement.parentElement.querySelector('.error-message');
    if (error) error.remove();
  }, { once: true });
}

// Add event listener for reservation form
const reservationForm = document.querySelector('#booking-header + .about-content + .contact-form');
if (reservationForm) {
  reservationForm.addEventListener('submit', validateReservationForm);
}

// ========================================
// TASK 2: Accordion for FAQs
// ========================================
// Author: Kaisar
// This creates an accordion effect for FAQ sections

function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all accordion items
      accordionItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.accordion-content').style.maxHeight = null;
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// Initialize accordion when DOM is loaded
if (document.querySelector('.accordion-item')) {
  initAccordion();
}

// ========================================
// TASK 3: Popup Subscription Form
// ========================================
// Author: Kaisar
// This creates a popup subscription form

function openPopup() {
  const popup = document.getElementById('subscription-popup');
  if (popup) {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
}

function closePopup() {
  const popup = document.getElementById('subscription-popup');
  if (popup) {
    popup.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
  }
}

function handleSubscription(event) {
  event.preventDefault();
  
  const emailInput = document.getElementById('popup-email');
  const email = emailInput.value.trim();
  
  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }
  
  alert('Thank you for subscribing! You will receive our newsletter soon.');
  emailInput.value = '';
  closePopup();
}

// Add event listeners for popup
const subscribeBtn = document.getElementById('subscribe-btn');
const closeBtn = document.getElementById('close-popup');
const popupOverlay = document.getElementById('subscription-popup');
const popupForm = document.getElementById('subscription-form');

if (subscribeBtn) {
  subscribeBtn.addEventListener('click', openPopup);
}

if (closeBtn) {
  closeBtn.addEventListener('click', closePopup);
}

if (popupOverlay) {
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      closePopup();
    }
  });
}

if (popupForm) {
  popupForm.addEventListener('submit', handleSubscription);
}
