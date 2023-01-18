const router = require('express').Router();
const { Guest } = require('../../models');

// CREATE new guest
router.post('/', async (req, res) => {
  try {
    const dbGuestData = await Guest.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = req.body.username;
      req.session.userId = dbGuestData.id;  
      
      res.status(200).json(dbGuestData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbGuestData = await Guest.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbGuestData) {
      res
        .status(400)
        .json({ message: 'Incorrect user or password. Please try again!' });
      return;
    }

    const validPassword = await dbGuestData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect user or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = req.body.username;
      req.session.userId = dbGuestData.id; 

      res
        .status(200)
        .json({ user: dbGuestData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
