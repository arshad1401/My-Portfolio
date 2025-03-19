// JavaScript to handle modal functionality
const modals = document.querySelectorAll('.modal');
const viewDetailsButtons = document.querySelectorAll('.view-details');
const closeButtons = document.querySelectorAll('.close');

// Open modal when "View Project Details" is clicked
viewDetailsButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

// Close modal when close mark or outside the modal is clicked
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});