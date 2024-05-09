// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let resultab;

function calcab(a, b) {
    resultab = a * b;
    return resultab;
}

let ab = calcab(10, 100);
console.log(ab);

console.log(' ');

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let area

function calcr(radius) {
    area = Math.PI * Math.pow(radius, 1);
    return area;
}

let r = 5;
let circle = calcr(r);
console.log('Радіус', r, 'Площа кола', circle);

console.log(' ');

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 2, 3, 'a', 'b', 'c', true, false];
printarr(arr);

function printarr(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

console.log(' ');

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function html(text1, text2) {
    document.write(`
    <h1>${text1}</h1>
    <p style="font-size: 20px">${text2}</p>
    `);
}

html('h1 text', 'p text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(text) {
    document.write(`
    <ul style="margin-left: -25px; font-size: 20px">
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
</ul>   
    `);
}

list('List');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list2(text, count) {
    document.write(`<ul style="margin-left: -25px">`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

list2('Three li', '3');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let elements = [1, 2, 3, 'a', 'b', 'c', true, false];
list3(elements);

function list3(items) {
    document.write(`<ul>`)
    items.forEach(item => {
        document.write(`<li>${item}</li>`)
    });
    document.write(`</ul>`);
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function userinvite(id, name, age) {
    let user = {
        id: id,
        name: name,
        age: age
    }
    document.write(`
    <div>id: ${user.id} name: ${user.name} age: ${user.age}</div>
    
    `)
}

userinvite(1, 'Makar', 32)
userinvite(2, 'Solomia', 18)
userinvite(3, 'Korela', 21)
userinvite(4, 'Elchapo', 35)

// - створити функцію яка повертає найменьше число з масиву
let number = [152, 35, 612, 643, 2156, 21, 632]

function minnumber(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(minnumber(number));

console.log(' ');

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}

console.log(sum([10, 20, 30, 40, 50]))

console.log(' ');


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


function swap(arr, index1, index2) {
    let newIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = newIndex;

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeA;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeA = currencyValues[i].value
            break;
        }
    }
    let exchangedSum = sumUAH / exchangeA;
    return Math.round(exchangedSum * 100) / 100;
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
