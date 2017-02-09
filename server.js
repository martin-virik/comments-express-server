var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(express.static('public'));

var comments = [
        {'name': 'Jon', 'email': 'jon@host.com', 'comment': 'Something to say'}
    ];

app.get('/api/comments', function(req, res) {
    res.json(comments);
})

app.post('/api/comments', function(req, res) {
    comments.unshift(req.body);
    res.json({'status': 'OK'});
});

app.listen(3000, function() {
    console.log('Listening to localhost:3000');
})
