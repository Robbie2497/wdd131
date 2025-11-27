const currentYear = document.getElementById('#current-year');
const lastModified = document.querySelector('#last-modified');

if (currentYear) {
    const current = new Date();
    currentYear.textContent = current.getFullYear();
}

if (lastModified) {
    lastModified.textContent = document.lastModified;
}

const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const windChill = document.querySelector('#windchill');

function calculateWindChill(degF, windSpeed) {
    return (35.74 + 0.6215 * degF - 35.75 * Math.pow(windSpeed, 0.16));
}

if (temp && wind && windChill) {
    const temperature = parseFloat(temp.textContent);
    const windSpeed = parseFloat(wind.textContent);

    let windChillText = 'N/A';

    if (temperature <= 50 && windSpeed > 3) {
        const chill = calculateWindChill(temperature, windSpeed);
        const roundedChill = Math.round(chill);
        windChillText = `${roundedChill} ℉`;
    }

    windChill.textContent = windChillText;
}