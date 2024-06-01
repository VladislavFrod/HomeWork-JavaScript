// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
function submitForm() {
    let name = document.getElementById(`name`).value
    let surname = document.getElementById(`surname`).value
    let age = document.getElementById(`age`).value

    let person = {
        name: name,
        surname: surname,
        age: age
    }
    let outputDiv = document.getElementById('output')
    outputDiv.innerHTML = `<pre>${JSON.stringify(person, null, 2)}</pre>`
}

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let numberBlock = document.getElementById(`numberBlock`)
let changeNumber = localStorage.getItem(`number`);
if (changeNumber === null) {
    changeNumber = 0
} else {
    changeNumber = parseInt(changeNumber, 10);
}
changeNumber += 1;
localStorage.setItem(`number`, changeNumber)
numberBlock.textContent = changeNumber
localStorage.clear()

// Є сторінка task1.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату
// та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки task1.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію

function session() {
    let currentSession = new Date().toLocaleString()
    let sessions = localStorage.getItem(`sessions`)
    if (sessions === null) {
        sessions = [];
    } else {
        sessions = JSON.parse(sessions)
    }
    sessions.push(currentSession)
    localStorage.setItem(`sessions`, JSON.stringify(sessions))
}

session()


const items = [];

for (let i = 0; i < 100; i++) {
    items.push({id: i + 1});
}
let currentPage = 0;
const ItemsPerPage = 10;

const container = document.getElementById(`container`);
const nextButton = document.getElementById('next');
const prevButton = document.getElementById(`prev`);

function renderPage(page) {
    container.innerHTML = '';
    const start = page * ItemsPerPage;
    const end = start + ItemsPerPage;
    const pageItems = items.slice(start, end);

    pageItems.forEach(item => {
        const div = document.createElement(`div`)
        div.className = 'item'
        div.textContent = `Item ${item.id}`
        container.appendChild(div);
    })
    prevButton.disable = page === 0;
    nextButton.disable = end >= items.length
}

prevButton.addEventListener(`click`, () => {
    if (currentPage > 0) {
        currentPage--;
        renderPage(currentPage)
    }
})
nextButton.addEventListener(`click`, () => {
    if ((currentPage + 1) * ItemsPerPage < items.length) {
        currentPage++;
        renderPage(currentPage)
    }
})
renderPage(currentPage)

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let idText = document.getElementById(`id-text`);
let deleteText = document.getElementById(`delete-text`);

deleteText.addEventListener(`click`, () => {
    if (idText) {
        idText.remove();
    }
})


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let ageVerif = document.getElementById(`ageVerif`);
let verif = document.getElementById(`check`);
let message = document.getElementById(`massage`)

verif.addEventListener(`click`, ()=>{
    event.preventDefault();
    let age = parseInt(ageVerif.value)
    if (age >= 18){
        message.innerText = 'Дивіться контент на здоровя'
    }else {
        message.innerText = 'Контент заборонено'
    }
})
