// Select the hamburger and the navigation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

// Add click event listener to toggle the nav
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // Toggle the icon between bars and X
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});
