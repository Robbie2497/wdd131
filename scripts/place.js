const today = new Date();
const currentYear = document.getElementById('current-year');
const lastModified = document.getElementById('last-modified');
const weatherList = document.querySelector('#weather-data-list');
const temp = 5;
const windspeed = 10;

currentYear.textContent = `© ${today.getFullYear()} 💻`;
lastModified.textContent = `${document.lastModified}`;

const calculateWindChill = (tempF, windspeedMph) => {
    return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windspeedMph, 0.16) + 0.4275 * tempF * Math.pow(windspeedMph, 0.16);
}

if (temp <= 10 && windspeed > 4.8) {
    const tempF = (Number(temp) * (9/5)) + 32;
    const windspeedMph = (Number(windspeed) * 0.621371);
    const windChill = calculateWindChill(tempF, windspeedMph);
    const tempC = (windChill - 32) * (5/9);
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.classList = 'weather-data-label';
    dd.classList = 'weather-data-item';
    dt.textContent = 'Wind Chill:';
    dd.textContent = `${tempC.toFixed(2)}`;
    weatherList.appendChild(dt);
    weatherList.appendChild(dd);
} else {
    weatherList.append('Wind Chill: N/A');
}
