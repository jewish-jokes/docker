const express = require('express');
const router = express.Router();
const shark = require('../controllers/penguins');

router.get('/', function(req, res){
    shark.index(req,res);
});

router.post('/addpenguin', function(req, res) {
    shark.create(req,res);
});

router.get('/getpenguin', function(req, res) {
    shark.list(req,res);
});

module.exports = router;