
const navElements = document.querySelectorAll('.nav-elements');


navElements.forEach(navElement => {
 
  navElement.addEventListener('mouseenter', () => {
    const underline = navElement.querySelector('.underline');
    underline.classList.add('active');
  });

 
  navElement.addEventListener('mouseleave', () => {
    const underline = navElement.querySelector('.underline');
    underline.classList.remove('active');
  });
});

  