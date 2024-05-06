// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let task1 = 0; task1 < 10; task1++) {
    document.write(`
    <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, eligendi.</p>
    </div>
    `)
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let task2 = 1; task2 < 11; task2++) {
    document.write(`
    <div>
    <h1>block ${task2}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, illo!</p>
    </div>
    `)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let task3 = 0;
while (task3 < 20) {
    document.write(`

    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, pariatur?</h1>

`);
    task3++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let task4 = 0;
while (task4 < 20) {
   document.write(`
   <h1>Text ${task4 + 1}:</h1>
   <h1>Lorem ipsum dolor sit amet.</h1>
   
`);
   task4++;
}