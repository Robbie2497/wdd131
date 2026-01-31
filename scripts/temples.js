const today = new Date();
const lastModified = document.getElementById('last-modified');
const currentYear = document.getElementById('current-year');
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('ul');
const navItem = document.querySelectorAll('nav ul li a');

lastModified.textContent = document.lastModified;
currentYear.textContent = today.getFullYear();

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

navItem.forEach((item) => {
    item.addEventListener('click', (e) => {
        const active = document.querySelector('.active');
        if (e.target !== active) {
            active.classList.remove('active');
            e.target.classList.add('active');
        }
    });
});
