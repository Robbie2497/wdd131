const input = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const list = document.querySelector('#list');
const entry = document.createElement('li');
const deleteBtn = document.createElement('button');

addButton.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        entry.textContent = input.value;
        deleteBtn.textContent = '❌';
        entry.append(deleteBtn);
        list.append(entry);
        input.value = '';
        input.focus();
    } else {
        alert('Please enter a value');
        input.focus();
        return;
    }
});

deleteBtn.addEventListener('click', function () {
    list.removeChild(entry);
    input.focus();
});
