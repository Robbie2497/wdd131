const lastModified = document.getElementById('last-modified');
lastModified.textContent = document.lastModified;



const countries = [
    'Canada',
    'Chili',
    'Columbia',
    'Croatia',
    'Costa Rica'
];

const countriesLong = countries.filter((country) => country.length > 7);
console.log(countriesLong);