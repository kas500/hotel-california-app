const router = require('express').Router();
const { Guest } = require('../../models');

router.post('/login', async (req, res) => {
  console.log(req.body.username)
  try {
    const guestData = await Guest.findOne({ where: { username: req.body.username }});

    console.log(guestData);

    if (!guestData) {
      res.status(400).json({ message: 'Incorrect username, please try again'});
      return;
    }

    const validPassword = await guestData.checkPassword(req.body.password);
    console.log(validPassword);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password, please try again'});
      return;
    }
    req.session.save(() => {
      req.session.user_id = guestData.id;
      req.session.logged_in = true;

      res.json({ user: guestData, message: 'You are now logged in!'});
    });
  } catch (err) {
    res.status(400).json({ message: 'caught api/login', err });
    console.log("THIS IS THE", err)
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
