const submitBtn = document.getElementById('submit-review');
const nameErrorWrapper = document.getElementById('name-error-wrapper') || '';
const dateErrorWrapper = document.getElementById('date-error-wrapper') || '';
const currentYear = document.querySelector('#currentYear');
const lastModified = document.querySelector('#lastModified');
const productSelect = document.querySelector('#products');
const ratingSelects = document.querySelectorAll('.rating-input');
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
if (currentYear) {
    const current = new Date();
    currentYear.textContent = current.getFullYear().toString();
}
if (lastModified) {
    lastModified.textContent = `Last lastModified: ${document.lastModified}`;
}
if (productSelect) {
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Helpers
const getLocalStorage = (item) => {
    return localStorage.getItem(item);
}

const setLocalStorage = (key, value) => {
    localStorage.setItem(JSON.stringify(key), JSON.stringify(value));
}

const setErrors = (err) => {
    err.setAttribute('aria-hidden', 'false');
    err.removeAttribute('hidden');
    err.setAttribute('class', 'required-red');
};

const clearErrors = (errs) => {
    errs.forEach((err) => {
        err.hidden = 'hidden';
        err.ariaHidden = 'true';
    });
}

// Event Listeners
ratingSelects.forEach((select) => {
    const ratingValue = select.value;
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clearErrors(errs = [nameErrorWrapper, dateErrorWrapper]);
    const id = document.getElementById('products');
    let selectedId = id.options['selectedIndex'] - 1;
    if (selectedId === -1) {
        setErrors(nameErrorWrapper);
        return;
    }
    const productId = products[selectedId]['id'];
    const name = document.getElementById('products');
    selectedId = name.options['selectedIndex'] - 1;
    const productName = products[selectedId]['name'];
    const rating = document.querySelector('input[name="rating"]:checked') || 0;
    const date = document.getElementById('install-date').value;
    if (!date) {
        setErrors(dateErrorWrapper);
        return;
    }
    const durability = document.querySelector('input[name="durability"]').checked;
    const ease = document.querySelector('input[name="ease"]').checked;
    const performance = document.querySelector('input[name="performance"]').checked;
    const design = document.querySelector('input[name="design"]').checked;
    const review = document.getElementById('written-review').value;
    const submitterName = document.getElementById('submitter-name').value;

    const reviewData = {
        id: productId,
        name: productName,
        rating: rating.value || 0,
        date: date,
        durability: durability,
        ease: ease,
        performance: performance,
        design: design,
        review: review,
        submitterName: submitterName,
    };

    const reviewNumber = Number(getLocalStorage(`Review #${localStorage.length}`)) + 1 || 1;
    console.log(`Review #${reviewNumber}`, reviewData);
    setLocalStorage(`Review #${reviewNumber}`, reviewData);
    window.location = 'review.html';
});
