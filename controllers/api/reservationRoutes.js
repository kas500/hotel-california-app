const router = require('express').Router();
const { Reservations } = require('../../models');

router.post('/', async (req, res) => {

  if (req.session.loggedIn) {
    try {
      const dbReservationData = await Reservations.create({
        guest_id: req.body.guest_id,
        rooms_id: req.body.rooms_id,
        checkIn_date: req.body.checkIn_date,
        checkOut_date: req.body.checkOut_date,
      });

      res.status(200).json(dbReservationData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.status(400).json({ message: 'Please log in before making a reservation'})
  }
});

module.exports = router;