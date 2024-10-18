const express = require('express');
const router = express.Router();


// Home route
router.get('/', (req, res) => {
    res.send('Hello World!');
});


module.exports = router;
