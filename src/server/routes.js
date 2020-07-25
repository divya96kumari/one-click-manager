const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
 res.send(200, [
    {"id": 1, "name": "Akanksha Goel", "saying": "oh yeah! Api is working!"}
 ])
});

module.exports=router;