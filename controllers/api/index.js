const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reservationRoutes = require('./reservationRoutes');
// const commentRoutes = require('./commentRoutes');



router.use('/users', userRoutes);
router.use('/reservation', reservationRoutes);
// router.use('/comment', commentRoutes);

module.exports = router;
