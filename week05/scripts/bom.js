const input = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const list = document.querySelector('#list');

const getChapterList = () => {
    return JSON.parse(localStorage.getItem('Favorite Chapters List: '));
};

let chaptersArray = getChapterList() || [];

const setChapterList = () => {
    localStorage.setItem('Favorite Chapters List: ', JSON.stringify(chaptersArray));
};

const deleteChapter = (chapter) => {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
};

const displayList = (item) => {
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button');
    li.textContent = item;
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete');
    li.append(deleteBtn);
    list.append(li);
    deleteBtn.addEventListener('click', () => {
       list.removeChild(li);
       deleteChapter(li.textContent);
       input.focus();
    });
};

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

addButton.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    } else {
        alert('Please enter a value');
        input.focus();
    }
});
