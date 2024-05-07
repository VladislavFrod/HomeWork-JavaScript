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

// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] % 3 === 0){
        numbers[j] = 'okten';
    }
}
console.log(numbers);

console.log(' ');

// 8. вивести масив в зворотньому порядку.
for (let j = 10; j < numbers.length; j-=1) {
    const number = numbers[j];
    console.log(number)
}
