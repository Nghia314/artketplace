//get the functions for creating posts and users
const seedUsers = require("./user-seeds");

const sequelize = require('../config/connection');

//clear the database and then create new tables for users and posts and give table entries
const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\nDATABASE SYNCED\n');

    await seedUsers();
    console.log('\nUsers Seeded\n');

    process.exit(0);
};

seedAll();