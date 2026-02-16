const productsArry = [
    {
        id: '1',
        name: 'Phone Stand',
        filamentType: {
            id: 1,
            name: 'PLA',
        },
        category: {
            id: 1,
            name: 'Functional',
        },
        description: 'Minimalist angled smartphone stand with a sleek, triangular base. It holds phones at the perfect viewing angle and fits most smartphones, including large models like the iPhone 16 Pro Max. The stand prints easily without supports and measures roughly 8 cm wide, 11.5 cm deep and 16 cm tall:contentReference[oaicite:0]{index=0}.',
        imageUrl: 'https://media.printables.com/media/prints/250572/images/3383927_9d51e0a4-8c87-4f65-9e60-dc5aef6a4451/cover/1200x630.png'
    },
    {
        id: '2',
        name: 'Lego Darth Vader',
        filamentType: {
            id: 2,
            name: 'PETG',
        },
        category: {
            id: 1,
            name: 'Toy/Fidget',
        },
        description: 'Lego Darth Vader minifig at 10x scale.',
        imageUrl: 'images/products/lego.webp'
    },
    {
        id: '3',
        name: 'Succulent Planter',
        filamentType: {
            id: 1,
            name: 'PLA',
        },
        category: {
            id: 2,
            name: 'Decor',
        },
        description: 'Modern geometric plant pot with an inner pot and drainage holes. The inside pot (about 60–65 mm wide and 60 mm tall) has holes so excess water can drain, making it ideal for small succulents or cactus. Its faceted exterior gives the piece a contemporary look:contentReference[oaicite:2]{index=2}.',
        imageUrl: 'https://images.cults3d.com/2M4Qeww4d21mCJCB9TT_0qHfQfA=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/22697622/illustration-file/5e16d093-8d71-402d-ab9e-dd028c9b5da3/20210720_072155.jpg'
    },
    {
        id: '4',
        name: 'Articulated Flexi Dragon',
        filamentType: {
            id: 1,
            name: 'PLA',
        },
        category: {
            id: 3,
            name: 'Toy/Fidget',
        },
        description: 'Fully articulated print‑in‑place dragon. Linked segments allow the dragon to move freely right off the print bed—no assembly required. The finished model is about 55 cm long and can be posed. Recommended print settings include two walls, 15% infill and a 0.15 mm layer height:contentReference[oaicite:3]{index=3}.',
        imageUrl: 'https://dl2.myminifactory.com/object-assets/67e9b45fc59cd3.37763062/images/720X720-DragonFruit.png'
    },
    {
        id: '5',
        name: 'Infinity Cube Fidget',
        filamentType: {
            id: 1,
            name: 'PLA',
        },
        category: {
            id: 3,
            name: 'Toy/Fidget',
        },
        description: 'Set of three infinity cubes (curved‑edge, straight‑edge and indented designs). Each cube prints in place with low‑tolerance joints that require gentle breaking in; once freed, the joints move smoothly. Designed to be printed without supports at a 0.2 mm layer height and 15% infill (increase infill for a heavier feel):contentReference[oaicite:4]{index=4}.',
        imageUrl: 'https://dl2.myminifactory.com/object-assets/68397fcf04f192.42209323/images/720X720-Screenshot%202025-05-30%20at%2010.42.22.png'
    },
    {
        id: '6',
        name: 'Controller Wall Mount',
        filamentType: {
            id: 2,
            name: 'PETG',
        },
        category: {
            id: 4,
            name: 'Accessories',
        },
        description: 'Wall‑mounted holder that keeps your desk clear by storing an Xbox One, Nintendo Switch Pro or Steam controller—and even a phone—in a secure cradle. A screw hole lets you mount it with a wood screw, but it can also be attached with command strips or double‑sided tape. Suggested print settings use 15% infill; the finished mount weighs about 35 grams and prints in roughly 3.75 hours:contentReference[oaicite:5]{index=5}.',
        imageUrl: 'https://dl.myminifactory.com/object-assets/5df55c58a47b2/images/720X720-001.jpg'
    },
    {
        id: '7',
        name: 'Desk Organizer Tray',
        filamentType: {
            id: 2,
            name: 'PETG',
        },
        category: {
            id: 1,
            name: 'Functional',
        },
        description: '3D‑printed organizer tray with multiple compartments for pens, paper clips and other small essentials. Its sleek, durable and compact design keeps your workspace tidy. Recommended print settings are a 0.2 mm layer height, two outer wall loops and 15% infill:contentReference[oaicite:6]{index=6}:contentReference[oaicite:7]{index=7}.',
        imageUrl: 'https://dl2.myminifactory.com/object-assets/6427796485ebb7.22373282/images/720X720-01.jpg'
    },
    {
        id: '8',
        name: 'Lithophane Night Light Panel',
        filamentType: {
            id: 1,
            name: 'PLA',
        },
        category: {
            id: 2,
            name: 'Decor',
        },
        description: 'Customizable lithophane night light that turns your favourite photo into a glowing panel. Precision 3D printing creates a 3D illusion from your image; choose black‑and‑white or colour options. The light comes with a manual on/off switch and LED bulb and is marketed as a power‑saving, fully customizable gift:contentReference[oaicite:8]{index=8}.',
        imageUrl: 'https://be3dprintshop.com/cdn/shop/files/1000012267.jpg?v=1713738722'
    },
    {
        id: '9',
        name: 'Keychain Name Tag',
        filamentType: {
            id: 1,
            name: 'PLA',
        },
        category: {
            id: 4,
            name: 'Accessories',
        },
        description: 'Personalized 3D‑printed name tag keychain. Produced in PLA (often recycled) or PETG and supplied with a key ring and chain. Buyers can choose the colour and ring orientation (front or back) and enter a name up to nine characters. Each piece is unique; letters are about 1.2 cm tall (e.g., “Jenny” is roughly 7 cm long). Painted versions are lacquered for durability:contentReference[oaicite:9]{index=9}:contentReference[oaicite:10]{index=10}.',
        imageUrl: 'images/placeholder.webp'
    },
    {
        id: '10',
        name: 'Mini Resin Figurine Bust',
        filamentType: {
            id: 3,
            name: 'Resin',
        },
        category: {
            id: 3,
            name: 'Toy/Fidget',
        },
        description: 'Miniature resin bust depicting a stylized woman wearing a geometric mask. The detailed hair sculpt and textured mask make it ideal for high‑detail resin printing, display or painting practice:contentReference[oaicite:11]{index=11}.',
        imageUrl: 'https://wsrv.3dprinterfiles.com/?url=https://cdn.thingiverse.com/assets/2c/29/a5/1e/30/large_display_DECORATION_BUST_MASK_AHEGAO_MINIATURE_4.png&w=200&h=200&output=webp&q=100&n=40&default=https://cdn.thingiverse.com/assets/2c/29/a5/1e/30/large_display_DECORATION_BUST_MASK_AHEGAO_MINIATURE_4.png'
    },
    {
        id: '11',
        name: 'Mini D&D Figurine (Customizable)',
        filamentType: {
            id: 3,
            name: 'Resin',
        },
        category: {
            id: 3,
            name: 'Toy/Fidget',
        },
        description: 'Custom D&D miniatures printed in high‑detail gray resin. TitanCraft’s creator lets you design heroes, monsters or NPCs by swapping clothing and items, adjusting proportions and poses, and even kitbashing parts to build scenes. Each mini is printed without molds to capture intricate detail and can be shipped to your door or downloaded as an STL file:contentReference[oaicite:12]{index=12}:contentReference[oaicite:13]{index=13}. Printed minis typically ship in about 3–4 weeks in the US (longer internationally):contentReference[oaicite:14]{index=14}.',
        imageUrl: 'https://titancraft.com/static/titancraftweb/img/titancraft_editor_3.png'
    },
    {
        id: '12',
        name: 'Metal Gear Set',
        filamentType: {
            id: 4,
            name: 'Metal',
        },
        category: {
            id: 1,
            name: 'Functional',
        },
        description: 'Planetary (epicyclic) gear set designed for mechanical demonstrations. The model consists of six external gears and one internal gear; it illustrates how epicyclic gearing works. The creator recommends printing in resin for best results, but modifications can be made for ABS or PLA:contentReference[oaicite:15]{index=15}.',
        imageUrl: 'https://dl2.myminifactory.com/object-assets/60a2e63002f8f/images/720X720-planetary-gear-set-type-3-e.jpg'
    },
];
let currentView = [...productsArry];
const cardContainer = document.getElementById('model-container');
const filterBtns = document.querySelectorAll('.filter-btns');
const filterSelects = document.querySelectorAll('.filter-select');
const filterBtnClass = 'filter-btns filter-btn';
const activeFilterBtnClass = `${filterBtnClass} active-btn`;
const filterSelectClass = 'filter-select';
const activeFilterSelectClass = `${filterSelectClass} active-select`;
currentYear.textContent = `${today.getFullYear()}`;
lastModified.textContent = document.lastModified;

const renderProductCards = (productCards) => {
    currentView = productCards;
    cardContainer.innerHTML = productCards.map((p) => `
        <article class="model-card">
            <img class="model-card-img" src="${p.imageUrl}" alt="Picture of ${p.name} model" loading="lazy">
            <div class="model-card-body">
                <div class="featured-header">
                    <h3>${p.name}</h3>
                    <button class="filter-btn favorite-btn" data-id="${p.id}">
                        ${isFavorite(p.id) ? '♥' : '♡'} 
                    </button>
                </div>
                <p class="data">${p.filamentType.name} • ${p.category.name}</p>
                <p>${p.description}</p>
            </div>
        </article>`).join('');
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    favoriteBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            toggleFavorite(id);
            renderProductCards(currentView);
        });
    });
};

// Filter Functions
const changeActiveFilterClass = (filter) => {
    const activeFilterBtn = document.querySelector('.active-btn');
    const activeFilterSelect = document.querySelector('.active-select');
    if (activeFilterBtn) activeFilterBtn.className = filterBtnClass;
    if (activeFilterSelect) activeFilterSelect.className = filterSelectClass;

    if (filter.classList.contains('filter-btn')) {
        filterSelects.forEach((s) => s.selectedIndex = 0);
        filter.className = activeFilterBtnClass;
    } else if (filter.classList.contains('filter-select')) {
        filter.className = activeFilterSelectClass;
    }
};

const filterByNameAsc = () => {
    return renderProductCards([...currentView].sort((a, z) => a.name.localeCompare(z.name)));
};

const filterByNameDesc = () => {
    return renderProductCards([...currentView].sort((a, z) => z.name.localeCompare(a.name)));
};

const filterByCategory = (id) => {
    return renderProductCards(productsArry.filter((p) => p.category.id === Number(id)));
};

const filterByFilamentType = (id) => {
    return renderProductCards(productsArry.filter((p) => p.filamentType.id === Number(id)));
};

const filterByFavorites = () => {
    const ids = getFavorites();
    const products = productsArry.filter(p => ids.includes(p.id));
    renderProductCards(products);
}

const applyFilters = (id) => {
    switch (id.target.id) {
        case ('filter-name-asc'):
            filterByNameAsc();
            break;
        case ('filter-name-desc'):
            filterByNameDesc();
            break;
        case ('filter-category'):
            filterByCategory(id.target.value);
            break;
        case ('filter-filament-type'):
            filterByFilamentType(id.target.value);
            break;
        case ('filter-favorites'):
            filterByFavorites(id);
            break;
        case ('filter-all'):
            renderProductCards(productsArry);
            break;
        default:
            renderProductCards(currentView);
            break;
    }
};

// Local Storage
const getFavorites = () => {
    return JSON.parse(localStorage.getItem('Favorites') || '[]');
};

const setFavorites = (productIds) => {
    localStorage.setItem(`Favorites`, JSON.stringify(productIds));
};

const toggleFavorite = (id) => {
    const favorites = getFavorites();
    if (favorites.includes(id)) {
        const updatedFavorites = favorites.filter((productId) => productId !== id);
        setFavorites(updatedFavorites);
    } else {
        favorites.push(id);
        setFavorites(favorites);
    }
};

const isFavorite = (id) => {
    return getFavorites().includes(id);
};

// Event Listeners
filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        changeActiveFilterClass(e.currentTarget);
        applyFilters(e);
    });
});

filterSelects.forEach((select) => {
    select.addEventListener('change', (e) => {
        changeActiveFilterClass(e.currentTarget);
        applyFilters(e);
    });
});

renderProductCards(productsArry);