const sequelize = require('../config/connection');
const { Guest, Rooms } = require('../models');

const guestData = require('./guestData.json');
const roomsData = require('./roomsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Guest.bulkCreate(guestData, {
    individualHooks: true,
    returning: true,
  });
  
  await Rooms.bulkCreate(roomsData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);
};

seedDatabase();
