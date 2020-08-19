const express = require('express');
const router = express.Router();

const userService = require('./user.service');

router.get('/users', (req, res) => {
 res.status(200).send([
    {"id": 1, "name": "Akanksha Goel", "saying": "oh yjhjhjheah"}
 ]);

});

router.post('/users', (req, res) => {
   console.log('here');
   userService.postUser(req, res);
});


module.exports=router;