// --створити масив з:
// - та вивести його в консоль

//     - з 5 числових значень
let a;
a = [1, 2, 3, 4, 5];

for (const aElement of a) {
    console.log(aElement);
}
console.log(' ');

// - з 5 стічкових значень
let b;
b = ['text 1', 'text 2', 'text 3', 'text 4', 'text 5'];
for (const bElement of b) {
    console.log(bElement);
}
console.log(' ')

// - з 5 значень стрічкового, числового та булевого типу
let c = [
    {name: 'text 1', num: 1, status: true},
    {name: 'text 2', num: 2, status: false},
    {name: 'text 3', num: 3, status: true},
    {name: 'text 4', num: 4, status: false},
    {name: 'text 5', num: 5, status: true}

]
for (let i = 0; i < c.length; i++) {
    const cElement = c[i];
    console.log(cElement)
}

console.log(' ');
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let f = []
f[0] = 1;
f[1] = 2;
f[2] = 'banan';
f[3] = 'kokos';
f[4] = true;
f[5] = false;
for (let i = 0; i < f.length; i++) {
    const fElement = f[i];
    console.log(fElement);
}

console.log(' ');

// - є масив
// 1. перебрати його циклом while
let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < numbers.length) {
    let number = numbers[i];
    console.log(number);
    i++;
}

console.log(' ');

// 2. перебрати його циклом for
for (let j = 0; j < numbers.length; j++) {
    const number = numbers[j];
    console.log(number)
}


console.log(' ');

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let wi = 1;
while (wi < numbers.length) {
    let number = numbers[wi];
    console.log(`${wi}; ${number}`);
    wi += 2;
}

console.log(' ');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 1; j < numbers.length; j += 2) {
    const number = numbers[j];
    console.log(`${j}; ${number}`);
}

console.log(' ');

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let ai = 0;
while (ai < numbers.length) {
    let number = numbers[ai];
    console.log(`${ai}; ${number}`)
    ai += 2;
}

console.log(' ');

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < numbers.length; j += 2) {
    const number = numbers[j];
    console.log(`${j}; ${number}`);
}


console.log('');

// 8. вивести масив в зворотньому порядку.
for (let j = numbers.length - 1; j >= 0; j--) {
    const number = numbers[j];
    console.log(number)
}
console.log(' ');


// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] % 3 === 0) {
        numbers[j] = 'okten';
    }
}
console.log(numbers);


console.log(' ');

let numbers2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// перебрати його циклом while
let ii = numbers2.length - 1;
while (ii >= 0) {
    let number = numbers2[ii];
    console.log(number)
    ii--;
}
console.log(' ');

// 2. перебрати його циклом for
for (let j = numbers2.length - 1; j >= 0; j--) {
    const number = numbers2[j];
    console.log(number);
}
console.log('');

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let si = numbers2.length - 1;
while (si >= 0) {
    let number = numbers2[si];
    console.log(`${si}; ${number}`);
    si -= 2;
}

console.log(' ');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = numbers2.length - 1; j >= 0; j -= 2) {
    const number2Element = numbers2[j];
    console.log(`${j}; ${number2Element}`)
}

console.log(' ');

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let ri = numbers2.length - 2;
while (ri >= 0) {
    let number = numbers2[ri];
    console.log(`${ri}; ${number}`)
    ri -= 2;
}

console.log(' ');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = numbers2.length - 2; j >= 0; j -= 2) {
    const number = numbers2[j];
    console.log(`${j}; ${number}`)
}
console.log(' ');

// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = numbers.length - 1; j >= 0; j--) {
    const numberElement = numbers[j];
    console.log(numberElement);
}
console.log('');

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let j = 0; j < arrn.length; j++) {
    const arrElement = arrn[j];
    console.log(arrElement);
}

console.log(' ');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
for (let j = 0; j < arrs.length; j++) {
    const arr = arrs[j];
    console.log(arr);
}

console.log('');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrb = [1, 2, 3, 'a', 'b', 'c', true, false, 'd', 10];
for (const arrbElement of arrb) {
}
console.log(arrb);

console.log('');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mixarr = [1, 2, 3, 'a', 'b', 'c', true, false, 'd', 10];
for (let j = 0; j < mixarr.length; j++) {
    if (typeof mixarr[j] === 'boolean') {
        console.log(mixarr[j]);
    }
}
console.log('');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let j = 0; j < mixarr.length; j++) {
    if (typeof mixarr[j] === 'number') {
        console.log(mixarr[j]);
    }
}
console.log(' ');
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let j = 0; j < mixarr.length; j++) {
    if (typeof mixarr[j] === 'string') {
        console.log(mixarr[j]);
    }
}
console.log(' ');

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let blank = [];
blank[0] = 1;
blank[1] = 2;
blank[2] = 3;
blank[3] = 4;
blank[4] = true;
blank[5] = false;
blank[6] = 'a';
blank[7] = 'b'
blank[8] = 'c'
blank[9] = 'd'
for (const blankElement of blank) {
    console.log(blankElement);
}
console.log(' ');
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

let listing;
listing = ['text', 'text', 'text'];
for (const listingElement of listing) {
    document.write(`
    <div><h1>${listingElement}</h1></div>
    `)
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 1; j <= 10; j++) {
    console.log(`text ${j}`)
    document.write(`
    <div style="border: 2px solid gray"><h1>text ${j}</h1></div>
    `)
}
console.log(' ');
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 1; j <= 100; j++) {
    console.log(`text ${j}`);
    document.write(`
    <div style="border: 2px solid blue"><h1>text ${j}</h1></div>
    `)
}
console.log(' ');
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 1; j <= 100; j += 2) {
    console.log(`text ${j}`);
    document.write(`<div style="border: 2px solid black"><h1>text ${j}</h1></div>`)
}
console.log('');
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 0; j < 100; j += 2) {
    console.log(`text ${j}`);
    document.write(`<div><h1>text ${j}</h1></div>`)
}
console.log(' ');

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: "The Great Gatsby",
        pageCount: 180,
        authors: ["F. Scott Fitzgerald"],
        genres: ["Fiction", "Classic"]
    },
    {
        title: "To Kill a Mockingbird",
        pageCount: 281,
        authors: ["Harper Lee"],
        genres: ["Fiction", "Classic", "Legal drama"]
    },
    {
        title: "1984",
        pageCount: 328,
        authors: ["George Orwell"],
        genres: ["Fiction", "Dystopian"]
    },
];
// -знайти наібльшу книжку.
let maxcount = 0;
let maxbookcount=  null;
for (let j = 0; j < books.length; j++) {
    if (books[j].pageCount > maxcount) {
        maxcount = books[j].pageCount;
        maxbookcount = books[j];
    }

}
console.log(maxbookcount)


document.write(`
<ul><li>${}</li></ul>
`)