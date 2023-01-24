const Guest = require('./guest');
const Rooms = require('./rooms');
const Reservations = require('./reservations');
const Comments = require('./comments');



Rooms.hasMany(Reservations, {
    foreignKey: 'rooms_id',
   

});

Reservations.belongsTo(Rooms, {
    foreignKey: 'rooms_id'
});



Guest.hasMany(Reservations, {
    foreignKey: 'guest_id',
    
    
});

Reservations.belongsTo(Guest, {
    foreignKey: 'guest_id',

});

Guest.hasMany(Comments, {
    foreignKey: 'guest_id',
   

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