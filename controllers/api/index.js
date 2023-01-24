const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reservationRoutes = require('./reservationRoutes');
const  reviewsRoutes = require('./reviewsRoutes');



router.use('/users', userRoutes);
router.use('/reservation', reservationRoutes);
router.use('/reviews', reviewsRoutes);

module.exports = router;
