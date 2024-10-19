const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav ul');
const barsIcon = document.querySelector('.fa-bars');
const xmarkIcon = document.querySelector('.fa-xmark');

hamburger.addEventListener('click', () => {
    // Toggle menu visibility
    nav.classList.toggle('active');

    // Toggle between bars and xmark icons
    barsIcon.style.display = barsIcon.style.display === 'none' ? 'block' : 'none';
    xmarkIcon.style.display = xmarkIcon.style.display === 'none' ? 'block' : 'none';
});
