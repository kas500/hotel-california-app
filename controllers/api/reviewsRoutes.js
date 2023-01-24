const router = require('express').Router();
const { Comments } = require('../../models');

router.post('/', async (req, res) => {


    if (req.session.loggedIn) {
        try {
            const dbReviewsData = await Comments.create({
                guest_id : req.session.userId,
                comment: req.body.comment,
            });

           
            res.status(200).json(dbReviewsData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        res.status(400).json({ message: 'Oops!' })
    }
});

module.exports = router;
