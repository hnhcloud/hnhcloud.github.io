// Smooth scrolling and active nav
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll on nav click
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark/Light Mode Toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    const themeToggleSpan = themeToggle.querySelector('span');
    const themeToggleIcon = themeToggle.querySelector('i');
    
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button text and icon
    if (newTheme === 'light') {
        themeToggleIcon.className = 'fas fa-sun';
        themeToggleSpan.textContent = 'Light';
    } else {
        themeToggleIcon.className = 'fas fa-moon';
        themeToggleSpan.textContent = 'Dark';
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    
    const themeToggle = document.querySelector('.theme-toggle');
    const themeToggleSpan = themeToggle.querySelector('span');
    const themeToggleIcon = themeToggle.querySelector('i');
    
    if (savedTheme === 'light') {
        themeToggleIcon.className = 'fas fa-sun';
        themeToggleSpan.textContent = 'Light';
    } else {
        themeToggleIcon.className = 'fas fa-moon';
        themeToggleSpan.textContent = 'Dark';
    }
});
