const Guest = require('./guest');
const Rooms = require('./rooms');
const Reservations = require('./reservations');
const Comments = require('./comments');



Rooms.hasOne(Reservations, {
    foreignKey: 'rooms_id',
    onDelete: 'CASCADE'

});

Reservations.belongsTo(Rooms, {
    foreignKey: 'rooms_id'
});



Guest.hasOne(Reservations, {
    foreignKey: 'guest_id',
    onDelete: 'CASCADE'
    
});

Reservations.belongsTo(Guest, {
    foreignKey: 'guest_id',

});

Guest.hasOne(Comments, {
    foreignKey: 'guest_id',
    onDelete: 'CASCADE'

});

Comments.belongsTo(Guest, {
    foreignKey: 'guest_id',

});




module.exports = { 
    Guest,
    Rooms,
    Reservations,
    Comments

 };