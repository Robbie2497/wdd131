// noinspection DuplicatedCode

const submitBtn = document.getElementById('submit-btn');
const nameErrWrapper = document.getElementById('name-error-wrapper');
const emailErrWrapper = document.getElementById('email-error-wrapper');
const name = document.querySelector('#name');
const email = document.getElementById('email');
const msg = document.getElementById('message');
const more = document.getElementById('more');
const currentYear = document.querySelector('#current-year');
const lastModified = document.querySelector('#last-modified');

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
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clearErrors([nameErrWrapper, emailErrWrapper]);
    if (!name.value) {
        setErrors(nameErrWrapper);
        name.focus();
        return;
    } else if (!email.value || !email.value.includes('@')) {
        setErrors(emailErrWrapper);
        email.focus();
        return;
    }

    const id = Number(getLocalStorage('"inquiry-count"')) + 1;
    const inquiryData = {
        id: id,
        name: name.value,
        email: email.value,
        message: msg.value,
        more: more.checked,
    };
    setLocalStorage(`inquiry-count`, id);
    setLocalStorage(`Inquiry #${id}`, inquiryData);
    alert('Thanks for your inquiry!');
    document.getElementById('contact-form').reset();
});

if (currentYear) {
    const current = new Date();
    currentYear.textContent = current.getFullYear().toString();
}
if (lastModified) {
    lastModified.textContent = `Last lastModified: ${document.lastModified}`;
}