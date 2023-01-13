const sequelize = require('../config/connection');
const { guest } = require('../models');

const guestData = require('./guestData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await guest.bulkCreate(guestData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
