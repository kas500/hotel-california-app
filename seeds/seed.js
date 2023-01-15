const sequelize = require('../config/connection');
const { Guest, Rooms, Reservations,Comments } = require('../models');

const guestData = require('./guestData.json');
const roomsData = require('./roomsData.json');
const reservationsData = require('./reservationsData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Guest.bulkCreate(guestData, {
    individualHooks: true,
    returning: true,
  });
  
  await Rooms.bulkCreate(roomsData, {
    individualHooks: true,
    returning: true,
  });

  await Reservations.bulkCreate(reservationsData, {
    individualHooks: true,
    returning: true,
  });

  await Comments.bulkCreate(commentsData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
