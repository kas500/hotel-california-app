const router = require('express').Router();
const { Reservations } = require('../../models');

// Create a new reservation
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

// Update reservation with checkin/checkout
router.put('/:id', async (req,res) => {
  try {
    const updatedRez = await Reservations.update(req.body, {
      where: {
        id: req.params.id
      },
      attributes: ['rooms_id', 'checked_In']
    })

    if(!updatedRez) {
      res.status(404).json({ message: 'No reservation found'});
      return;
    }
    res.status(200).json(updatedRez);
  } catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;