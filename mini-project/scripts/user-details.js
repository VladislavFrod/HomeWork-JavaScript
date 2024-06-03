document.addEventListener('DOMContentLoaded', () => {
    function getUserIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    const userId = getUserIdFromUrl();

    if (userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => res.json())
            .then((user) => {
                let div = document.getElementById('details-container');
                div.classList.add('container');

                let stringFields = ['id', 'name', 'username', 'email', 'phone', 'website'];
                stringFields.forEach(field => {
                    let p = document.createElement('p');
                    p.classList.add('detail-item');
                    p.innerText = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${user[field]}`;
                    div.appendChild(p);
                });

                let address = user.address;
                if (address) {
                    let addressP = document.createElement('p');
                    addressP.classList.add('detail-item');
                    addressP.innerText = 'Address:';
                    div.appendChild(addressP);

                    let addressUl = document.createElement('ul');
                    let addressFields = ['street', 'suite', 'city', 'zipcode'];
                    addressFields.forEach(field => {
                        let addressLi = document.createElement('li');
                        addressLi.innerText = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${address[field]}`;
                        addressUl.appendChild(addressLi);
                    });
                    div.appendChild(addressUl);
                }

                let company = user.company;
                if (company) {
                    let companyP = document.createElement('p');
                    companyP.classList.add('detail-item');
                    companyP.innerText = 'Company:';
                    div.appendChild(companyP);

                    let companyUl = document.createElement('ul');
                    let companyFields = ['name', 'catchPhrase', 'bs'];
                    companyFields.forEach(field => {
                        let companyLi = document.createElement('li');
                        companyLi.innerText = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${company[field]}`;
                        companyUl.appendChild(companyLi);
                    });
                    div.appendChild(companyUl);
                }

                let geo = address.geo;
                if (geo) {
                    let geoP = document.createElement('p');
                    geoP.classList.add('detail-item');
                    geoP.innerText = 'Geo:';
                    div.appendChild(geoP);

                    let geoUl = document.createElement('ul');
                    let geoFields = ['lat', 'lng'];
                    geoFields.forEach(field => {
                        let geoLi = document.createElement('li');
                        geoLi.innerText = `${field.charAt(0).toUpperCase() + field.slice(1)}: ${geo[field]}`;
                        geoUl.appendChild(geoLi);
                    });
                    div.appendChild(geoUl);
                }
                let button = document.createElement('button');
                button.classList.add('button-style');
                button.innerText = 'post of current user';
                button.onclick = () => {
                    window.location.href = `post-details.html?id=${user.id}`;
                };
                div.appendChild(button)
            })
    }
});