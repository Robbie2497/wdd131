const productsArry = [
    {
        id: '1',
        name: 'Phone Stand',
        filamentType: 'PLA',
        category: 'Functional',
        description: '',
    },
    {
        id: '2',
        name: 'Cable Clip Set',
        filamentType: 'PETG',
        category: 'Functional',
        description: '',
    },
    {
        id: '3',
        name: 'Succulent Planter',
        filamentType: 'PLA',
        category: 'Decor',
        description: '',
    },
    {
        id: '4',
        name: 'Articulated Flexi Dragon',
        filamentType: 'PLA',
        category: 'Toy/Fidget',
        description: '',
    },
    {
        id: '5',
        name: 'Infinity Cube Fidget',
        filamentType: 'PLA',
        category: 'Toy/Fidget',
        description: '',
    },
    {
        id: '6',
        name: 'Controller Wall Mount',
        filamentType: 'PETG',
        category: 'Accessories',
        description: '',
    },
    {
        id: '7',
        name: 'Desk Organizer Tray',
        filamentType: 'PETG',
        category: 'Functional',
        description: '',
    },
    {
        id: '8',
        name: 'Lithophane Night Light Panel',
        filamentType: 'PLA',
        category: 'Decor',
        description: '',
    },
    {
        id: '9',
        name: 'Keychain Name Tag',
        filamentType: 'PLA',
        category: 'Accessories',
        description: '',
    },
    {
        id: '10',
        name: 'Mini Resin Figurine Bust',
        filamentType: 'Resin',
        category: 'Resin Detail',
        description: '',
    },
];
const cardContainer = document.getElementById('model-container');
const allBtn = document.getElementById('filter-all');
const ascBtn = document.getElementById('filter-name-asc');
const descBtn = document.getElementById('filter-name-desc');
const favoriteBtn = document.getElementById('favorite-btn');
const categorySelect = document.getElementById('filter-category');
const filamentTypeSelect = document.getElementById('filter-filament-type');



const renderProductCards = (productCards) => {
    cardContainer.innerHTML = productCards.map((p) => `
        <article class="model-card">
            <img src="${p.imageUrl}" alt="Picture of ${p.name} model" loading="lazy">
            <div class="model-card-body">
                <div class="featured-header">
                    <h3>${p.name}</h3>
                    <button class="filter-btn favorite-btn" data-id="${p.id}">
                        ${isFavorite(p.id) ? '♥' : '♡'} 
                    </button>
                </div>
                <p class="data">${p.filamentType} • ${p.category}</p>
                <p>${p.description}</p>
            </div>
        </article>`).join('');

const favoriteBtns = document.querySelectorAll('.favorite-btn');
favoriteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        toggleFavorite(id);
        applyFilters();
    });
});



    const toRender = [];
    productsArry.forEach((product) => {
        const productCard = [];

        const id = product.id;
        const name = product.name;
        const filamentType = product.filamentType;
        const category = product.category;
        const description = product.description;
        const productDataList = document.createElement('dl');
        const productId = document.createElement('dt');
        const productName = document.createElement('dt');
        const productFilamentType = document.createElement('dt');
        const productCategory = document.createElement('dt');
        const productDescription = document.createElement('dt');
        const favoriteBtn = document.createElement('button');

        productId.innerHTML = `${id}`;
        productName.innerHTML = `${name}`;
        productFilamentType.innerHTML = `${filamentType}`;
        productCategory.innerHTML = `${category}`;
        productDescription.innerHTML = `<textarea>${description}</textarea>`;

        productDataList.push(id, name, filamentType, category, description);
        productCard.push(productDataList);

        toRender.push(productCard);
        console.log(toRender);
    });
    return toRender;
};

// Filter Functions
const filterByNameAsc = () => {
    return productsArry.sort((a, b) => a.name.localeCompare(b.name));
};

const filterByNameDesc = () => {
    return productsArry.sort((a, b) => b.name.localeCompare(a.name));
};

const filterByCategory = (e) => {
    const category = e.target.category;
    return productsArry.sort((p) => p.category === category);
};

const filterByFilamentType = (e) => {
    const filamentType = e.target.filamentType;
    return productsArry.sort((p) => p.filamentType === filamentType);
};

const filterByFavorites = () => {
    return productsArry.sort((p) => isFavorite(p.id));
};

// Local Storage
const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites') || []);
};

const setFavorites = (productIds) => {
    localStorage.setItem('favorites', JSON.stringify(productIds));
};

const toggleFavorite = (id) => {
    const productIds = [];
    const favorites = getFavorites();
    const products = favorites.filter(productId => productId !== id);
    products.forEach((product) => {
        const productId = product.id;
        productIds.push(productId);
    });
    setFavorites(productIds);
};

const isFavorite = (favorite) => {
    return getFavorites().includes(favorite.id);
};

// Event Listeners
document.addEventListener('load', () => {
    renderProductCards();
});
document.addEventListener('click', (e) => {
    console.log(e.target.id || 0);
    getFilteredCards(e);
});
favoriteBtn.addEventListener('click', (e) => {
    const id = e.target.id;
    toggleFavorite(id);
});

