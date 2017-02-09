var express = require('express');
var fs = require('fs');

var router = module.exports = express.Router();

router.get('/comments', function(req, res) {
    fs.readFile('comments.json', function(err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }

        res.json(JSON.parse(data.toString()));
    })
})

router.post('/comments', function(req, res) {
    fs.readFile('comments.json', function(err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }

        var comments = JSON.parse(data.toString());

        comments.unshift(req.body);

        fs.writeFile('comments.json', JSON.stringify(comments), function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }

            res.json({'status': 'OK'});
        })
    })
});
