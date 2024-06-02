// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => {
        console.log(users);
        let div = document.getElementById('container');
        div.classList.add('container');
        let ul = document.createElement('ul');
        ul.classList.add('list-change');
        for (const user of users) {
            let li = document.createElement('li');
            li.innerText = `Id: ${user.id}, Name: ${user.name} ---> `;
            let a = document.createElement('a');
            a.href = `user-details.html?id=${user.id}`;
            a.innerText = 'Details user';
            a.classList.add('user-link');

            li.appendChild(a);
            ul.appendChild(li);
        }
        div.appendChild(ul);
    })