const ensureAuthenticated = require('../Middleware/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "Greet",
            price: "Hello! 👋 Welcome to our website."
        },
        {
            name: "Thanks",
            price:  "Thank you! 🙏 We appreciate your support."
        }
    ])
});

module.exports = router;