// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let element;
element = ['el1', 'el2', 'el3', 'el4', 'el5', 'el6', 'el7', 'el8', 'el9', 'el10'];
console.log(element);
console.log(element[0]);
console.log(element[1]);
console.log(element[2]);
console.log(element[3]);
console.log(element[4]);
console.log(element[5]);
console.log(element[6]);
console.log(element[7]);
console.log(element[8]);
console.log(element[9]);


/////////////////////
let space= ' ';
console.log(space)
console.log(space)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Darkly Dreaming Dexter',
    pageCount: 317,
    genre: 'Crime, novel, Horror'
}
console.log(book1);
let book2 = {
    title: 'A Song of Ice and Fire',
    pageCount: 4244,
    genre: 'Epic fantasy'
}
console.log(book2);
let book3 = {
    title: 'The Richest Man In Babylon',
    pageCount: 144,
    genre: 'Non-fiction'
}
console.log(book3)


/////////////////
console.log(space)
console.log(space)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'Darkly Dreaming Dexter',
    pageCount: 317,
    genre: 'Crime, novel, Horror',
    authors: [
        {
            name: 'Jeff Lindsay',
            age: 71
        }
    ]
}
console.log(book4);
console.log(book4.authors[0]);

let book5 = {
    title: 'A Song of Ice and Fire',
    pageCount: 4244,
    genre: 'Epic fantasy',
    authors: [
        {
            name: 'George R. R. Martin',
            age: 75
        },
    ]
}
console.log(book5);
console.log(book5.authors[0]);

let book6 = {
    title: 'The Richest Man In Babylon',
    pageCount: 144,
    genre: 'Non-fiction',
    authors: [
        {
            name:'George Samuel Clason',
            age:'dead'
        }
    ]
}
console.log(book6);
console.log(book6.authors[0]);


/////////////////////
console.log(space)
console.log(space)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
    let users=[
        {
            id: 1,
            name: 'Alexander',
            username: 'AlexanderTheGreat',
            password: 'Alexander123'
        },
        {
            id: 2,
            name: 'Sophia',
            username: 'SophiaSunshine',
            password: 'Sophia123'
        },
        {
            id: 3,
            name: 'Benjamin',
            username: 'BenjiBreezy',
            password: 'Benjamin123'
        },
        {
            id: 4,
            name: 'Isabella',
            username: 'IsabellaInfinity',
            password: 'Isabella123'
        },
        {
            id: 5,
            name: 'Ethan',
            username: 'EthanExplorer',
            password: 'Ethan123'
        },
        {
            id: 6,
            name: 'Olivia',
            username: 'OliviaOpal',
            password: 'Olivia123'
        },
        {
            id:7,
            name: 'William',
            username: 'WittyWilliam',
            password: 'William123'
        },
        {
            id: 8,
            name: 'Emma',
            username: 'EmmaEnchantment',
            password: 'Emma123'
        },
        {
            id: 9,
            name: 'Michael',
            username: 'MikeMagic',
            password: 'Michael123'
        },
        {
            id: 10,
            name: 'Ava',
            username: 'AvaAdventure',
            password: 'Ava123'
        }
    ]
console.log(users);
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



/////////////////////
console.log(space)
console.log(space)
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let Weather=[
    {
        day: 'Monday',
        morning: 10,
        afternoon: 23,
        evening: 18
    },
    {
        day: 'Tuesday',
        morning: 13,
        afternoon: 24,
        evening: 18
    },
    {
        day: 'Wednesday',
        morning: 12,
        afternoon: 23,
        evening: 17
    },
    {
        day: 'Thursday',
        morning: 11,
        afternoon: 22,
        evening: 17
    },
    {
        day: 'Friday',
        morning: 13,
        afternoon: 19,
        evening: 15
    },
    {
        day: 'Saturday',
        morning: 12,
        afternoon: 20,
        evening: 16
    },
    {
        day: 'Sunday',
        morning: 12,
        afternoon: 18,
        evening: 15
    }
]
console.log(Weather);
