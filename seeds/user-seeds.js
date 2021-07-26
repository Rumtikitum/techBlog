const { User } = require('../models');

const userData = [
    {
        email: 'email@gmail.com',
        password: 'password'
    }
];

const seedItems = () => User.bulkCreate(userData);

module.exports = seedItems;

//hello