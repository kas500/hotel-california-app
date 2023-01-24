const withAuth = require('../utils/auth');
const { Reservations, Comments, Guest, Rooms } = require('../models');
const { registerDecorator } = require('handlebars');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      res.render('homepage', {
        loggedIn: req.session.loggedIn,
        userAdmin: req.session.userAdmin?true:false
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

      const roomsData = await Rooms.findAll({
        attributes: ['price']
      })

      const rooms = roomsData.map((room) => room.get({ plain: true }));
      res.render('reservation', {
        urlReservation: req.url,
        loggedIn: req.session.loggedIn,
        userId: req.session.userId,
        rooms
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

  router.get('/admin', withAuth, async (req, res) => {
    
    const dbReservationsData = await Reservations.findAll(
      {
      include: [
        {
          model: Guest,
          attributes: ['username']
        }
      ]
      }
    )
    const reservations = dbReservationsData.map((row) =>row.get({ plain: true }));
      try {
        res.render('admin', {
         reservations,
         loggedIn: req.session.loggedIn
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

  module.exports = router;