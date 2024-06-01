// взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes?limit=100')
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        let {recipe} = json
        for (const recipeElement of recipe) {
            let div = document.createElement('div');
            div.classList.add(`section`);
            let h1 = document.createElement(`h1`);
            h1.classList.add(`title-text`);
            h1.innerHTML =`
                <>
            
            
            `
            div.appendChild(h1)
            document.body.appendChild(div)
        }
    });