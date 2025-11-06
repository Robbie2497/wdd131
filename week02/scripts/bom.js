let input = document.querySelector('#favchap');
let button = document.querySelector('button');
let list = document.getElementById('list');

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        li.textContent = input.value;
        deleteBtn.textContent = '❌';
        input.value = '';
        li.append(deleteBtn);
        list.append(li);
        input.focus;
    } else {
        input.focus();
    }
});

deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
    input.focus;
});