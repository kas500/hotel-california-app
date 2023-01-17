const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      const testData =  "Test home"
      res.render('homepage', {
        testData
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', async (req, res) => {
    try {
      res.render('login', {
        urlLogin: req.url
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/reservation', async (req, res) => {
    try {
      res.render('reservation', {
        urlReservation: req.url
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/checkin', async (req, res) => {
    try {
      res.render('checkin', {
        urlCheckin: req.url
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/checkout', async (req, res) => {
    try {
      res.render('checkout', {
        urlCheckout: req.url
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/reviews', async (req, res) => {
    try {
      res.render('reviews', {
        urlReviews: req.url
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/fun', async (req, res) => {
    try {
      res.render('fun', {
        urlFun: req.url
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;