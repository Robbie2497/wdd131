const lastModified = document.querySelector('#lastModified');
const currentYear = document.querySelector('#currentYear');
const reviewCount = document.getElementById('reviewCount');
reviewCount.textContent = localStorage.getItem('"review-count"') ?? 0;

if (currentYear) {
    const current = new Date();
    currentYear.textContent = current.getFullYear().toString();
}
if (lastModified) {
    lastModified.textContent = `Last lastModified: ${document.lastModified}`;
}