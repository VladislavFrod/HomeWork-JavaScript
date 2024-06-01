// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
fetch('https://dummyjson.com/carts?limit=100')
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        let {carts} = json
        for (const cart of carts) {
            let div = document.createElement(`div`);
            div.classList.add(`section`);
            let h1 = document.createElement(`h1`)
            h1.innerText = `Card id: ${cart.id}`
            let ul = document.createElement(`ul`);
            ul.classList.add(`createlist`);
            for (const product of cart.products) {
                let li = document.createElement(`li`);
                li.classList.add(`list`)
                li.innerHTML =`
                 <span>id: ${product.id}</span>
                 <h2>${product.title}</h2>
                 <img src="${product.thumbnail}" alt="logo">
                 <br>
                 <span>Ціна: ${product.price}$</span>
                 <p>Кількість: ${product.quantity}</p>
                 <p>Всього: ${product.total}$</p>
                 <p>Знижка у відсотка ${product.discountPercentage}%</p>
                 <p>Зі знижкою ціна ${product.discountedTotal}$</p>
                 `
                ul.appendChild(li);

            }
            div.appendChild(h1)
            div.appendChild(ul);
            document.body.appendChild(div)
        }

    });
