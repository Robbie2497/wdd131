const today = new Date();
const currentYear = document.getElementById('current-year');
const lastModified = document.getElementById('last-modified');

currentYear.textContent = `© ${today.getFullYear()} 💻`;
lastModified.textContent = `${document.lastModified}`;


