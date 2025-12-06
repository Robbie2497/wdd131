const currentYear = document.querySelector('#currentYear');
const lastModified = document.querySelector('#lastModified');

if (currentYear) {
    const current = new Date();
    currentYear.textContent = current.getFullYear();
}

if (lastModified) {
    lastModified.textContent = document.lastModified;
}

