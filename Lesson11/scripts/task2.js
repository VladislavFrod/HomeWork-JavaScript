// взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes?limit=100')
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        let { recipes } = json;
        const container = document.getElementById('recipe-container');

        for (const recipeElement of recipes) {
            let div = document.createElement('div');
            div.classList.add('section');

            let h1 = document.createElement('h1');
            h1.classList.add('title-text');
            h1.innerText = `Recipe: ${recipeElement.name}`;
            div.appendChild(h1);

            let img = document.createElement('img');
            img.classList.add('images');
            img.src = recipeElement.image
            img.alt = recipeElement.name
            div.appendChild(img);

            let pIngred = document.createElement('p');
            pIngred.classList.add('info-text');
            pIngred.innerText = 'Ingredients:';
            let ulList = document.createElement('ul');
            div.appendChild(pIngred);

            recipeElement.ingredients.forEach(ingredient => {
                let li = document.createElement('li');
                li.classList.add('li-ingred');
                li.innerText = ingredient;
                ulList.appendChild(li);
            });

            pIngred.appendChild(ulList);

            let pInstructions = document.createElement('p');
            pInstructions.classList.add('instructions');
            pInstructions.innerText = 'Instructions:';
            let ulInst = document.createElement('ul');
            div.appendChild(pInstructions);

            recipeElement.instructions.forEach(instruction => {
                let li = document.createElement('li');
                li.classList.add('li-instr');
                li.innerText = instruction;
                ulInst.appendChild(li);
            });

            pInstructions.appendChild(ulInst);
            container.appendChild(div);
        }
    })