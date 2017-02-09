var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(express.static('public'));


app.get('/api/comments', function(req, res) {
    fs.readFile('comments.json', function(err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }

        res.json(JSON.parse(data.toString()));
    })
})

app.post('/api/comments', function(req, res) {
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

app.listen(3000, function() {
    console.log('Listening to localhost:3000');
})
