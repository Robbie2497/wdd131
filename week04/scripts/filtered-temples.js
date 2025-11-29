const header = document.querySelector("main h1");
let now = new Date();
document.getElementById('currentYear').innerHTML = `&copy;${now.getFullYear()}`;
document.getElementById('lastModified').textContent = `Last Modification ${document.lastModified}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/Aba Nigeria Temple.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/Manti Temple.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/Payson Temple.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/Yigo Guam Temple.webp"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/Washington DC Temple.webp"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/Lima Peru Temple.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/Mexico City Mexico Temple.webp"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
    "images/Provo City Center Temple.webp"
  },
  {
    templeName: "San Diego",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl:
    "images/San Diego Temple.webp"
  },
  {
    templeName: "Ribeirão Preto",
    location: "Ribeirão Preto, Brazil",
    dedicated: "2024, June, 22",
    area: 32000,
    imageUrl: 
    "images/Riberao Preto Brazil Temple.webp",
  }
];

const getDedicatedYear = (temples) => {
  const dedicatedYear = temples.dedicated.split(",")[0];
  return parseInt(dedicatedYear)
}

createTempleCard(temples);

const home = document.querySelector("#home");
const older = document.querySelector("#old");
const newer = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

home.addEventListener("click", () => {
  header.textContent = "Home";
  createTempleCard(temples.filter(temple => temple.area ));
});

newer.addEventListener("click", () => {
  header.textContent = "New";
  createTempleCard(temples.filter(temple => getDedicatedYear(temple) > 2000));
});

older.addEventListener("click", () => {
  header.textContent = "Old";
  createTempleCard(temples.filter(temple => getDedicatedYear(temple) < 2000));
});

large.addEventListener("click", () => {
  header.textContent = "Large";
  createTempleCard(temples.filter(temple => temple.area > 90000));
});

small.addEventListener("click", () => {
  header.textContent = "Small";
  createTempleCard(temples.filter(temple => temple.area < 10000));
});

function createTempleCard(filteredTemples) {
  const templeContainer = document.querySelector("#templesContainer");
  templeContainer.innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span>${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl)
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("width", "350");
        image.setAttribute("height", "400");
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector("#templesContainer").appendChild(card);
    });
}
