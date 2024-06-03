fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => {
        let divContainer = document.getElementById('container');
        divContainer.classList.add('container');

        for (const user of users) {
            let div = document.createElement("div");
            div.classList.add('block-user');
            let id = document.createElement(`h2`);
            id.classList.add(`id-style`);
            id.innerText = `Id: ${user.id}`
            let h2Name = document.createElement(`h2`);
            h2Name.classList.add(`name-style`);
            h2Name.innerText = `Name: ${user.name}`
            let button = document.createElement('button');
            button.classList.add('details-button');
            button.innerText = 'Details user';
            button.onclick = () => {
                window.location.href = `user-details.html?id=${user.id}`;
            };

            div.appendChild(id);
            div.appendChild(h2Name);
            div.appendChild(button);
            divContainer.appendChild(div);
        }
    });