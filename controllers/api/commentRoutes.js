// const router = require('express').Router();
// const { Comments } = require('../../models');

// router.post('/', async (req, res) => {

//     if (req.session.loggedIn) {
//         try {
//             const dbCommentsData = await Comments.create({
//                 comment: req.body.comment,
//             });

//             res.status(200).json(dbReservationData);
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     } else {
//         res.status(400).json({ message: 'Please log in before making a reservation' })
//     }
// });
