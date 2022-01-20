const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

console.log(users);

users.forEach(user => {
    user.password = '123456789';
});
console.log(users);

users.forEach(user => {
    user.password = bcryptjs.hashSync(user.password, 10);
});
console.log(users);

fs.writeFileSync(usersFilePath, JSON.stringify(users));
