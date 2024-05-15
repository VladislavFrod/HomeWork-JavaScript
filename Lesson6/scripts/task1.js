// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
arr.forEach(function (string) {
    console.log(string, string.length);
})
console.log('')
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let uppercasearr = arr.map(function (item) {
    return item.toUpperCase()
})
console.log(uppercasearr);
console.log('')
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lowercasearr = arr.map(function (item) {
    return item.toLowerCase();
})
console.log(lowercasearr);
console.log('')
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log(' dirty string   '.trim());
console.log('')
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';

function splitstr(str) {
    return str.split(' ')
}

console.log(splitstr(str))

console.log('')

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let strings = numbers.map(function (number) {
    return number.toString()
})
console.log(strings);
console.log('');
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];

function sortnums(nums, direction) {
    return nums.sort((a, b) => direction === 'ascending' ? a - b : b - a)
}

console.log(sortnums(nums, 'ascending'))
console.log(sortnums(nums, 'descending'))
console.log('');

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((m1, m2) => {
    return m2.monthDuration - m1.monthDuration
})
console.log(coursesAndDurationArray);
console.log('');
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredcourses = coursesAndDurationArray.filter(function (value) {
    return value.monthDuration > 5
})
console.log(filteredcourses);
console.log('');
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapcours = coursesAndDurationArray.map(function (value, index) {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
})
console.log(mapcours)
console.log('');
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cardSuits = ['spades', 'diamonds', 'hearts', 'clubs'];
let cardValues = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

// let cards = cardSuits.reduce((acc, cardSuit) => {
//     cardValues.forEach((cardValue) => {
//         let color = (cardSuit === 'diamonds' || cardSuit === 'hearts') ? 'red' : 'black';
//
//         acc.push({
//             cardSuit: cardSuit,
//             cardValue: cardValue,
//             color: color
//         });
//     });
//     return acc;
// }, []);
//
// console.log(cards);

// знайти піковий туз
let allCards = [];
cardSuits.forEach(suit => {
    cardValues.forEach(value => {
        allCards.push({suit: suit, value: value})
    })
})
let spaceAce = allCards.filter(card => card.suit === 'spades' && card.value === 'ace');
console.log(spaceAce)
console.log('');

// всі шістки

let sdhc = allCards.filter(card => (card.suit === 'spades' || card.suit === 'diamonds' || card.suit === 'hearts' || card.suit === 'clubs') && card.value === 6);
console.log(sdhc);
console.log('')


// - всі червоні карти
let cards = cardSuits.reduce((acc, cardSuit) => {
    cardValues.forEach((cardValue) => {
        let color = (cardSuit === 'diamonds' || cardSuit === 'hearts') ? 'red' : 'black';
        acc.push({
            cardSuit: cardSuit,
            cardValue: cardValue,
            color: color
        });
    });
    return acc;
}, []);

let redCards = cards.filter(card => card.color === 'red');
console.log(redCards);
console.log('')

// - всі буби
let diamond = allCards.filter(card => card.suit === 'diamonds' && card.value === card.value)
console.log(diamond)
console.log('');

// - всі трефи від 9 та більше
let clubs = allCards.filter(card => card.suit === 'clubs' && cardValues.indexOf(card.value) >= cardValues.indexOf(9));
console.log(clubs);
console.log('');


// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = allCards.reduce((acc, card) => {
    if (!acc[card.suit]) {
        acc[card.suit] = [];
    }
    acc[card.suit].push(card);
    return acc;
}, {});

console.log(reduce);

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let findsass = coursesArray.filter(course => course.modules.includes('sass'))
console.log(findsass);
console.log(' ');
// --написати пошук всіх об'єктів, в який в modules є docker
let finddocker = coursesArray.filter(course => course.modules.includes('docker'))
console.log(finddocker)
