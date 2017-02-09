var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var app = express();

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(express.static('public'));

var commentsRouter = require('./routes/comments');
app.use('/api', commentsRouter);


app.listen(3000, function() {
    console.log('Listening to localhost:3000');
})
