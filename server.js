var express = require('express');
var router = express.Router();
var mustacheExpress = require('mustache-express');

router.get('/', function (req, res) {
    res.render('index', { title: 'The Software Pilgrim', datetime: new Date()});
})
  
router.get('/GreatDeveloper', function (req, res) {
    res.render('greatdeveloper', { title: 'The Software Pilgrim - Great Developer'});
})

var app = express();
app.use(express.static('public'));
app.engine('html', mustacheExpress());
app.set('views', 'views');
app.set('view engine', 'html');
app.use('/', router);

app.listen(process.env.PORT || 8080);