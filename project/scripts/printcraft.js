const today = new Date();
const currentYear = document.getElementById('current-year');
const lastModified = document.getElementById('last-modified');
const active = document.getElementsByClassName('active');
const learnMoreBtn = document.getElementById('learn-more-btn');
const modelBtn = document.querySelectorAll('.button-link');
learnMoreBtn.addEventListener('click', (e) => {
    console.log(e);
    window.location.href = 'contact.html';
});
modelBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
       window.location.href = `showcase.html`;
    });
});

currentYear.textContent = `${today.getFullYear()}`;
lastModified.textContent = document.lastModified;