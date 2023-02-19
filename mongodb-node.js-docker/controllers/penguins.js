const path = require('path');
const Penguin = require('../models/penguins');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/penguins.html'));
};

exports.create = function (req, res) {
    var newPenguin = new Penguin(req.body);
    console.log(req.body);
    newPenguin.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save penguin to database');
        } else {
            res.redirect('/penguins/getpenguin');
        }
  });
               };

exports.list = function (req, res) {
        Penguin.find({}).exec(function (err, penguins) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getpenguin', {
                    penguins: penguins
             });
        });
};