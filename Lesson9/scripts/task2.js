// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
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
console.log(coursesArray)


let main = document.createElement('main');

for (const obj of coursesArray) {
    let div = document.createElement('div');
    div.classList.add('course');

    let h1 = document.createElement('h1');
    h1.classList.add('title');
    h1.innerText = obj.title;

    let durationsDiv = document.createElement('div');
    durationsDiv.classList.add('durations');

    let h2Month = document.createElement('h2');
    h2Month.classList.add('duration');
    h2Month.innerText = `${obj.monthDuration} months`;

    let h2Hour = document.createElement('h2');
    h2Hour.classList.add('duration');
    h2Hour.innerText = `${obj.hourDuration} hours`;

    durationsDiv.append(h2Month, h2Hour);

    let ul = document.createElement('ul');

    for (const item of obj.modules) {
        let li = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
    }

    div.append(h1, durationsDiv, ul);
    main.appendChild(div);
}

document.body.appendChild(main);