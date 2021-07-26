const { User } = require('../models');

const userData = [
    {
        username: 'Rumtikitum',
        email: 'email@gmail.com',
        password: 'password'
    }
];

const seedItems = () => User.bulkCreate(userData);

module.exports = seedItems;

//hello