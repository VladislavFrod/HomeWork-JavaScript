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

// const coursesArrayElement = coursesArray[0]
// let div = document.createElement(`div`)
// div.classList.add(`JavaScript`)
// let h1 = document.createElement('h1')
// h1.textContent = `${coursesArrayElement.title}`
// h1.classList.add('titleJS')
// div.appendChild(h1)
// let h2 = document.createElement('h2')
// h2.textContent = `${coursesArrayElement.monthDuration} Mounth ${coursesArrayElement.hourDuration} Hours`
// h2.classList.add('main-trivel')
// div.appendChild(h2)
// document.body.appendChild(div)
// let div2 = document.createElement(`div`)
// div2.classList.add('cours-name')

let container = document.getElementById('container');
for (const course of coursesArray) {
    let courseBlock = document.createElement('div');
    courseBlock.classList.add('course');
    let titleHeading = document.createElement('h2');
    titleHeading.textContent = course.title;
    courseBlock.appendChild(titleHeading);
    let propertiesBlock = document.createElement('div');
    propertiesBlock.classList.add('properties');
    for (const key in course) {
        if (key === 'modules') continue;
        let propertyBlock = document.createElement('div');
        propertyBlock.classList.add('property');
        let propertyName = document.createElement('span');
        propertyName.textContent = key + ': ';
        propertyBlock.appendChild(propertyName);
        let propertyValue = document.createElement('span');
        propertyValue.textContent = course[key];
        propertyBlock.appendChild(propertyValue);
        propertiesBlock.appendChild(propertyBlock);
    }
    courseBlock.appendChild(propertiesBlock);

    let modulesList = document.createElement('ul');
    modulesList.classList.add('modules');

    for (const module of course.modules) {
        let moduleItem = document.createElement('li');
        moduleItem.textContent = module;
        modulesList.appendChild(moduleItem);
    }
    courseBlock.appendChild(modulesList);
    container.appendChild(courseBlock);
}