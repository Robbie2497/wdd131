const today = new Date();
const header = document.querySelector('main h1');
const lastModified = document.getElementById('last-modified');
const currentYear = document.getElementById('current-year');
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('ul');
const navItem = document.querySelectorAll('nav ul li a');
const home = document.querySelector('#home');
const older = document.querySelector('#old');
const newer = document.querySelector('#new');
const large = document.querySelector('#large');
const small = document.querySelector('#small');
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "images/aba-nigeria-temple.webp",
        link:
            "https://churchofjesuschristtemples.org/aba-nigeria-temple/"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "images/manti-temple.webp",
        link:
            "https://churchofjesuschristtemples.org/manti-utah-temple/"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "images/payson-temple.webp",
        link:
            "https://churchofjesuschristtemples.org/payson-utah-temple/"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "images/yigo-guam-temple.webp",
        link:
            "https://churchofjesuschristtemples.org/yigo-guam-temple/"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "images/washington-dc-temple.webp",
        link:
            "https://churchofjesuschristtemples.org/washington-d.c.-temple/"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "images/lima-peru-temple.webp",
        link:
            "https://churchofjesuschristtemples.org/lima-peru-temple/"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "images/mexico-city-mexico-temple.webp",
        link:
            "https://churchofjesuschristtemples.org/mexico-city-mexico-temple/"
    },
    {
        templeName: "Medford Oregon Temple",
        location: "Medford, Oregon",
        dedicated: "2000, April, 16",
        area: 10700,
        imageUrl:
            "images/medford-temple.webp",
        link:
            "https://churchofjesuschristtemples.org/medford-oregon-temple/"
    },
    {
        templeName: "Veracruz Mexico Temple",
        location: "Veracruz, Mexico",
        dedicated: "2000, July, 9",
        area: 10700,
        imageUrl:
            "images/veracruz-mexico-temple.webp",
        link:
            "https://churchofjesuschristtemples.org/veracruz-mexico-temple/"
    }, {
        templeName: "Sydney Australia Temple",
        location: "Sydney, Australia",
        dedicated: "1984, September, 20-23",
        area: 30067,
        imageUrl:
            "images/sydney-australia-temple.webp",
        link:
            "https://churchofjesuschristtemples.org/sydney-australia-temple/"
    },
];

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

createTempleCard(temples);

home.addEventListener('click', () => {
    header.textContent = 'Home';
    createTempleCard(temples);
});
older.addEventListener('click', () => {
    header.textContent = 'Older';
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) <= 1900));
});
newer.addEventListener('click', () => {
    header.textContent = 'Newer';
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) >= 2000));
});
large.addEventListener('click', () => {
    header.textContent = 'Large';
    createTempleCard(temples.filter(temple => temple.area >= 90000));
});
small.addEventListener('click', () => {
    header.textContent = 'Small';
    createTempleCard(temples.filter(temple => temple.area <= 10000));
});

function createTempleCard(filteredTemples) {
    const templeContainer = document.querySelector('.main-container');
    templeContainer.innerHTML = '';
    filteredTemples.forEach((temple) => {
        const card = document.createElement('section');
        const name = document.createElement('h3');
        const location = document.createElement('p');
        const dedication = document.createElement('p');
        const area = document.createElement('p');
        const img = document.createElement('img');

        card.setAttribute('id', `${temple.templeName}-temple-card`);
        card.setAttribute('class', 'temple-card');
        name.textContent = `${temple.templeName} Temple`;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;

        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName}`);
        img.setAttribute('width', '350');
        img.setAttribute('height', '400');
        img.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector('.main-container').appendChild(card);
    });
}


