// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
function submitForm(){
    let name = document.getElementById(`name`).value
    let surname = document.getElementById(`surname`).value
    let age = document.getElementById(`age`).value

    let person ={
        name:name,
        surname:surname,
        age:age
    }
    let outputDiv = document.getElementById('output')
    outputDiv.innerHTML = `<pre>${JSON.stringify(person, null, 2)}</pre>`
}
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let numberBlock = document.getElementById(`numberBlock`)
let changeNumber = localStorage.getItem(`number`);
if (changeNumber === null){
    changeNumber = 0
} else {
    changeNumber = parseInt(changeNumber, 10);
}
changeNumber += 1;
localStorage.setItem(`number`, changeNumber)
numberBlock.textContent = changeNumber
localStorage.clear()

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату
// та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а побудувати дом структуру під кожну сессію

function session(){
    let currentSession = new Date().toLocaleString()
    let sessions = localStorage.getItem(`sessions`)
    if (sessions === null){
        sessions = [];
    }else {
        sessions = JSON.parse(sessions)
    }
    sessions.push(currentSession)
    localStorage.setItem(`sessions`, JSON.stringify(sessions))
}
session()








