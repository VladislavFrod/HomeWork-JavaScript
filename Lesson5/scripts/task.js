// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const calc = (a, b) => a * b;
let ab = calc(12, 42)
console.log(ab);
console.log('');

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const calcr = (r) => Math.PI * r * r;
console.log(calcr(10));
console.log(' ');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const calcrh = (r, h) => 2 * Math.PI * r * (r + h);
console.log(calcrh(2, 4));
console.log('');

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 2, 3, 'a', 'b', 'c', true, false];
const printarr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])

    }
}
printarr(arr);
console.log('');
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraf = (text, text2) => {
    document.write(`
    <div><h1>${text}</h1>
    <p>${text2}</p>
    </div>
    `)
}
paragraf(`text`, `text2`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const list = (text) => {
    document.write(`
    <ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
</ul>

    `)
}
list(`text`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const list2 = (text, count) => {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`
        <li>${text}</li>
        `)
    }
    document.write(`</ul>`)
}
list2(`Text`, 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrel = [1, 2, 3, 'a', 'b', 'c', true, false];
const arrelement = (arrel) => {
    document.write(`<ul>`);
    for (let i = 0; i < arrel.length; i++) {
        document.write(`
        <li>${arrel[i]}</li>
        `)
    }
    document.write(`</ul>`);
}
arrelement(arrel);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arr2(id, name, age) {

    let user =
    {
        id: id,
        name: name,
        age: age
    }

    document.write(`
    <div>
    <h1>${user}</h1>
    </div>
    `)
}
arr2(`1`, `banan`, `24`);

// - створити функцію яка повертає найменьше число з масиву
let arrnumber=[52,42,12,62]
function findminnumber(arrnumber){
    let min = 0;
    for (let i = 0; i < arrnumber.length; i++) {
       if (arrnumber[i] < min){
           min = arrnumber[i];
       }
    }
    return min
}
console.log(findminnumber(arrnumber))





