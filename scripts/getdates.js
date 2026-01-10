const today = new Date();

const currentYear = document.querySelector('#current-year');
const lastModified = document.querySelector('#last-modified');

currentYear.textContent = today.getFullYear();
lastModified.textContent = 'Last Modified On: ' + document.lastModified;