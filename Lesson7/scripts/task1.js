// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(name, id, surname, email, phone) {
    this.name = name;
    this.id = id;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    console.log(this)
}

let user = []
user.push(new User(`banan1`, `1`, `bans1`, `banana@gmail.com`, 380680910249))
user.push(new User(`banan2`, `2`, `bans2`, `banana@gmail.com`, 380680910249))
user.push(new User(`banan3`, `3`, `bans3`, `banana@gmail.com`, 380680910249))
user.push(new User(`banan4`, `4`, `bans4`, `banana@gmail.com`, 380680910249))
user.push(new User(`banan5`, `5`, `bans5`, `banana@gmail.com`, 380680910249))
user.push(new User(`banan6`, `6`, `bans6`, `banana@gmail.com`, 380680910249))
user.push(new User(`banan7`, `7`, `bans7`, `banana@gmail.com`, 380680910249))
user.push(new User(`banan8`, `8`, `bans8`, `banana@gmail.com`, 380680910249))
user.push(new User(`banan9`, `9`, `bans9`, `banana@gmail.com`, 380680910249))
user.push(new User(`banan10`, `10`, `bans10`, `banana@gmail.com`, 380680910249))
console.log('');


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsers = user.filter(function (value) {
    return value.id % 2 === 0
})
console.log(filterUsers)
console.log(``);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(user.sort((u1, u2) => u2.id - u1.id));
console.log('');

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
        console.log(this)
    }
}

let clients = []
clients.push(new Client(`1`, `banana1`, `ban4ik1`, `banana@gmail.com`, `380990294248`, [{name: 'banan1', count: 1}]))
clients.push(new Client(`2`, `banana2`, `ban4ik2`, `banana@gmail.com`, `380990294248`, [{name: 'banan2', count: 2}]))
clients.push(new Client(`3`, `banana3`, `ban4ik3`, `banana@gmail.com`, `380990294248`, [{name: 'banan3', count: 3}]))
clients.push(new Client(`4`, `banana4`, `ban4ik4`, `banana@gmail.com`, `380990294248`, [{name: 'banan4', count: 4}]))
clients.push(new Client(`5`, `banana5`, `ban4ik5`, `banana@gmail.com`, `380990294248`, [{name: 'banan5', count: 5}]))
clients.push(new Client(`6`, `banana6`, `ban4ik6`, `banana@gmail.com`, `380990294248`, [{name: 'banan6', count: 6}]))
clients.push(new Client(`7`, `banana7`, `ban4ik7`, `banana@gmail.com`, `380990294248`, [{name: 'banan7', count: 7}]))
clients.push(new Client(`8`, `banana8`, `ban4ik8`, `banana@gmail.com`, `380990294248`, [{name: 'banan8', count: 8}]))
clients.push(new Client(`9`, `banana9`, `ban4ik9`, `banana@gmail.com`, `380990294248`, [{name: 'banan9', count: 9}]))
clients.push(new Client(`10`, `banana10`, `ban4ik10`, `banana@gmail.com`, `380990294248`, [{
    name: 'banan10',
    count: 10
}]))
console.log('');
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((o1, o2) => o1.order - o2.order));
console.log(' ');

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, maker, year, maxspeed, engineV) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engineV = engineV;
    this.greeting = function () {
        console.log(`hello`)
    }
    console.log(this)
}

let car = new Car(`Audi S8 (D4) facelift`, `Audi AG`, 2013, 250, `V8 520 HP`);
// Car.prototype.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
// }
// car.drive();
// console.log('')
//
//
// Car.prototype.info = function () {
//     console.log(`модель: ${this.model},`, `виробник: ${this.maker},`, `рік випуску: ${this.year},`, `максимальна швидкість ${this.maxspeed},`, `об'єм двигуна: ${this.engineV}.`)
// }
// car.info()
// console.log('')
//
// Car.prototype.increaseMaxSpeed = function (newSpeed) {
//     this.maxspeed += newSpeed
//     console.log(`Максимальну швидкість змінено на ${this.maxspeed}`)
// }
// car.increaseMaxSpeed(50)
// console.log('')
//
// Car.prototype.changeYear = function (newYear){
//     this.year = newYear;
//     console.log(`Рік випуску змінено на ${this.year}`)
// }
// car.changeYear(2015);

console.log('');
// drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
}
Car.prototype.greeting = function () {
    this.drive()
}
car.drive()
console.log('');

// info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function () {
    console.log(`модель: ${this.model},`, `виробник: ${this.maker},`, `рік випуску: ${this.year},`, `максимальна швидкість ${this.maxspeed}`)
}
car.info();
console.log('')

// increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (newspeed) {
    this.maxspeed += newspeed;
    console.log(`Максимальна швидкість збільшилась на ${newspeed}, і тепер вона ${this.maxspeed}`)
}
car.increaseMaxSpeed(50);

console.log('');

// changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newYear) {
    console.log(`Новий рік випуску авто ${newYear}, а був ${this.year}`)
}
car.changeYear(2015)
console.log('');

// addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.drivers = []
Car.prototype.addDriver = function (driver) {
    this.drivers.push(driver)
    console.log(`Було додано нового водія з іменем ${driver.name}`)
}
car.addDriver({name: `banan`, year: 18})
console.log(car.drivers)
console.log('')


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2{
    constructor(model2, maker2, year2, maxspeed2, engineV2) {
        this.model2 = model2;
        this.maker2 = maker2;
        this.year2 = year2;
        this.maxspeed2 = maxspeed2;
        this.engineV2 = engineV2;
        this.drivers = []
    }
    greeting(){
        return `hello`
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this.maxspeed2} на годину`)
    }
    info(){
        console.log(`модель: ${this.model2},`, `виробник: ${this.maker2},`, `рік випуску: ${this.year2},`, `максимальна швидкість ${this.maxspeed2}`)
    }
    increaseMaxSpeed(newSpeed2){
        this.maxspeed2 += newSpeed2
        console.log(`Максимальна швидкість збільшилась на ${newSpeed2}, і тепер вона ${this.maxspeed2}`)
    }
    changeYear(newValue2){
        this.year2 = newValue2
        console.log(`Новий рік випуску авто ${this.year2}`)
    }
    addDriver(driver){
        this.drivers.push(driver);
        console.log(`Було додано нового водія з іменем ${this.drivers}`)
    }

}
let car2 = new Car2(`Audi S8 (D4) facelift`, `Audi AG`, 2013, 250, `V8 520 HP`);
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(50);
car2.changeYear(2024);
car2.addDriver(`banan`);
console.log('')
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Girl{
    constructor(name, age, footSize) {
        this.name = name
        this.age = age
        this.footSize = footSize
        console.log(this)
    }

}
let girls=[
new Girl(`Анна`, 21, 35),
new Girl(`Марія`, 21, 34),
new Girl(`Катерина`, 21, 37),
new Girl(`Ольга`, 21, 37),
new Girl(`Юлія`, 21, 39),
new Girl(`Еріка`, 21, 36),
new Girl(`Вікторія`, 21, 40),
new Girl(`Наталія`, 21, 38),
new Girl(`Тетяна`, 21, 39),
new Girl(`Ірина`, 21, 40)
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, shoe) {
        this.name = name
        this.age = age
        this.shoe = shoe
        console.log(this)
    }
}
let princ = new Prince(`Владислав`, 21, 36);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом
for (let i = 0; i < girls.length; i++) {
        if(girls[i].footSize === princ.shoe){
            console.log(`Ви знайшли свою принцесу її звати ${girls.name === girls.footSize[36]}`)
        }

}