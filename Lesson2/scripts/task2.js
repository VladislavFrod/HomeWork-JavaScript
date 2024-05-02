// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x;

x = 1;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Не вірно');
}

x = -3
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Не вірно');
}


///////////////////
let space = ' ';
console.log(space)
console.log(space)


// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = parseInt(prompt('Введіть число від 0 до 59'));
if (time >= 0 && time <= 59) {
    if (time <= 15) {
        console.log(time + space + 'Попадає в першу частину години');
    } else if (time <= 30) {
        console.log(time + space + 'Попадає в другу частину години');
    } else if (time <= 45) {
        console.log(time + space + 'Попадає в третю частину години');
    } else {
        console.log(time + space + 'Попадає в четверту частину години');
    }
} else {
    console.log('Введіть число від 0 до 59');
}

//////////////////////////
console.log(space)
console.log(space)

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let number = parseFloat(prompt('Введіть число від 1 до 31'));
if (number >= 1 && number <= 31) {
    if (number <= 10) {
        console.log('Число ' + number + ' Потрапляє у першу частину місяця');
    } else if (number <= 20) {
        console.log('Число ' + number + ' Потрапляє у другу частину місяця');
    } else {
        console.log('Число ' + number + ' Потрапвляє у третю частину місяця');
    }
} else {
    console.log('Введіть число від 1 до 31')
}

//////////////////////////
console.log(space)
console.log(space)


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day = parseFloat(prompt('Enter day 1-7'));
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('wrong day')
}

//////////////////////////
console.log(space)
console.log(space)

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let number1 = parseFloat(prompt('Enter the first number'));
let number2 = parseFloat(prompt('Enter the second number'));
if (number1 && number2){
    if (number1 > number2){
        console.log('max number ' + number1)
    }else if(number1 < number2){
        console.log('max number ' + number2)
    }else{
        console.log(number1)
    }
}

//////////////////////////
console.log(space)
console.log(space)


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let y = 521;
if (!y){
    console.log('default')
}else {
    console.log('true')
}

//////////////////////////
console.log(space)
console.log(space)

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let javaScript= coursesAndDurationArray[0];
if (javaScript.monthDuration > 5){
    console.log('Супер');
}else {
    console.log('Менше або 5 місяців');
}

let java = coursesAndDurationArray[1];
if (java.monthDuration > 5){
    console.log('Супер');
}else {
    console.log('Менше 5 місяців');
}

let python = coursesAndDurationArray[2];
if (python.monthDuration > 5){
    console.log('Супер');
}else {
    console.log('Менше 5 місяців');
}

let qa = coursesAndDurationArray[3];
if (qa.monthDuration > 5){
    console.log('Супер');
}else {
    console.log('Менше 5 місяців');
}

let fullStack = coursesAndDurationArray[4];
if (fullStack.monthDuration > 5){
    console.log('Супер');
}else {
    console.log('Менше 5 місяців');
}

let frontend = coursesAndDurationArray[5];
if (frontend.monthDuration > 5){
    console.log('Супер');
}else {
    console.log('Менше 5 місяців');
}

