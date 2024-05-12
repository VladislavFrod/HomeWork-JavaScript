// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

function Createuser(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyname, catchPhrase, bs){
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {
        street: street,
        suite: suite,
        city: city,
        zipcode: zipcode,
        geo: {
            lat: lat,
            lng: lng
        }
    };
    this.phone = phone;
    this.website = website;
    this.company = {
        name: companyname,
        catchPhrase: catchPhrase,
        bs: bs
    };
    return this;
}
const user1 = new Createuser(
    1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    '92998-3874',
    '-37.3159',
    '81.1496',
    '1-770-736-8031 x56442',
    'hildegard.org',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets'
);

// createuser(`1`, `Leanne Graham`, `Bret`, `Sincere@april.biz`, `Kulas Light`, `Apt. 556`, `Gwenborough`, `92998-3874`, `-37.3159`, `81.1496`, `1-770-736-8031 x56442`, `hildegard.org`, `Romaguera-Crona`, `Multi-layered client-server neural-net`, `harness real-time e-markets`);
console.log(user1)
const userHtml = `
    <div>
        <p>Name: ${user1.name}</p>  
        <p>Username: ${user1.username}</p>
        <p>ID: ${user1.id}</p>
        <p>Email: ${user1.email}</p>
        <p>Address: ${user1.address.street}, ${user1.address.suite}, ${user1.address.city}, ${user1.address.zipcode}</p>
        <p>Geo: Lat: ${user1.address.geo.lat}, Lng: ${user1.address.geo.lng}</p>
        <p>Phone: ${user1.phone}</p>
        <p>Website: ${user1.website}</p>
        <p>Company: ${user1.company.name} - ${user1.company.catchPhrase} (${user1.company.bs})</p>
    </div>
`;

document.write(userHtml);
console.log(' ');



