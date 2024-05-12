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
const user = (id, name, age) => {
    document.write(`
    <div><h1>Id:${id} Name:${name} Age:${age}</h1></div>
    `)
}
user(`1`, `Banan`, `18`);

// - створити функцію яка повертає найменьше число з масиву
let arrnumber = [52, 42, 12, 62]
const findminnumber = (arrnumber) => {
    let min = arrnumber[0];
    for (let i = 0; i < arrnumber.length; i++) {
        if (arrnumber[i] < min) {
            min = arrnumber[i]
        }
    }
    return min;
}
console.log(findminnumber(arrnumber));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arr2 = [52, 2, 10];

const sum = (arr2) => {
    let total = 0;
    for (let i = 0; i < arr2.length; i++) {
        total += arr2[i]
    }
    return total;
}
console.log(sum(arr2));
console.log(' ');


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));
console.log(' ');

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangeRate;
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            exchangeRate = currency.value;
            break;
        }
    }
    let exchangedSum = sumUAH / exchangeRate;
    return Math.round(exchangedSum * 100) / 100;
};

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
