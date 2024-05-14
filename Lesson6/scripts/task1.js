// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arr=['hello world', 'lorem ipsum', 'javascript is cool'];
arr.forEach(function (string){
    console.log(string, string.length);
})
console.log('')
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let uppercasearr = arr.map(function (item){
    return item.toUpperCase()
})
console.log(uppercasearr);
console.log('')
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lowercasearr = arr.map(function (item){
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

function splitstr(str){
    return str.split(' ')
}
console.log(splitstr(str))

console.log('')

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];

let strings = numbers.map(function (number){
    return number.toString()
})
console.log(strings);
console.log('');
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortnums(nums, direction){
    return nums.sort((a, b) => direction === 'ascending' ? a - b : b - a)}
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
coursesAndDurationArray.sort((m1, m2) =>{
    return m2.monthDuration - m1.monthDuration
})
console.log(coursesAndDurationArray);
console.log('');
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredcourses = coursesAndDurationArray.filter(function (value){
    return value.monthDuration > 5
})
console.log(filteredcourses);
console.log('');
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
coursesAndDurationArray.map(function (id, title, monthDuration){

})