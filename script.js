// Select all nav elements
const navElements = document.querySelectorAll('.nav-elements');

// Add event listeners to each nav element
navElements.forEach(navElement => {
  // Add mouseenter event listener
  navElement.addEventListener('mouseenter', () => {
    const underline = navElement.querySelector('.underline');
    underline.classList.add('active');
  });

  // Add mouseleave event listener
  navElement.addEventListener('mouseleave', () => {
    const underline = navElement.querySelector('.underline');
    underline.classList.remove('active');
  });
});

  