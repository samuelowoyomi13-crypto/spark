// Select elements
const themeToggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

// 1. Check for saved user preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    bodyElement.classList.add('dark-theme');
    themeToggleButton.textContent = '☀️ Light Theme';
}

// 2. Listen for button clicks to toggle the theme
themeToggleButton.addEventListener('click', () => {
    // Toggle the CSS class
    bodyElement.classList.toggle('dark-theme');
    
    // Check if dark theme is currently active
    const isDarkMode = bodyElement.classList.contains('dark-theme');
    
    // Update button text and save preference to localStorage
    if (isDarkMode) {
        themeToggleButton.textContent = '☀️ Light Theme';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleButton.textContent = '🌙 Switch Theme';
        localStorage.setItem('theme', 'light');
    }
});