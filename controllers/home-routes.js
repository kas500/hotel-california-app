const withAuth = require('../utils/auth');
const { Reservations, Comments, Guest } = require('../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      res.render('homepage', {
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    try {
      res.render('login', {
        urlLogin: req.url,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/reservation', withAuth, async (req, res) => {
    try {
      res.render('reservation', {
        urlReservation: req.url,
        loggedIn: req.session.loggedIn,
        userId: req.session.userId
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/checkin', withAuth, async (req, res) => {
    try {
      const reservationData = await Reservations.findOne({
        where: {
          guest_id: req.session.userId
        },
        include: [
          {
            model: Guest,
            attributes: ['username'],
          }
        ]
      })
      const reservations = reservationData.get({
        plain: true
      })

      res.render('checkin', {
        urlCheckin: req.url,
        loggedIn: req.session.loggedIn,
        reservations
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/checkout', withAuth, async (req, res) => {
    try {
      const reservationData = await Reservations.findOne({
        where: {
          guest_id: req.session.userId
        }
      })
      const reservations = reservationData.get({
        plain: true
      })

      res.render('checkout', {
        urlCheckout: req.url,
        loggedIn: req.session.loggedIn,
        reservations
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/reviews', withAuth, async (req, res) => {
    
  const dbReviewsData = await Comments.findAll(
    {
    attributes: ['comment', 'created_at'],
    include: [
      {
        model: Guest,
        attributes: ['username']
      }
    ]
    }
  )
  const reviews1 = dbReviewsData.map((comment) => comment.get({ plain: true }));
    try {
      res.render('reviews', {
        urlReviews: req.url,
        loggedIn: req.session.loggedIn,
        guestName: req.session.username,
        reviews1
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/fun', withAuth, async (req, res) => {
    try {
      res.render('fun', {
        urlFun: req.url,
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;