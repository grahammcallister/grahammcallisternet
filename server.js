var express = require('express');
var router = express.Router();
var mustacheExpress = require('mustache-express');

router.get('/', function (req, res) {
    res.render('index', { title: 'The Software Pilgrim', datetime: new Date()});
})
  
router.get('/GreatDeveloper', function (req, res) {
    res.render('greatdeveloper', { title: 'The Software Pilgrim - Great Developer'});
})

router.get('/PilgrimResources', function (req, res) {
    res.render('developerresources', { title: 'The Software Pilgrim - Great Developer Resources'});
})

router.get('/BookmarkThis', function (req, res) {
    res.render('bookmarkthis', { title: 'The Software Pilgrim - Bookmarks, links and lessons learned'});
})

var app = express();
app.use(express.static('public'));
app.engine('html', mustacheExpress());
app.set('views', 'views');
app.set('view engine', 'html');
app.use('/', router);

app.listen(process.env.PORT || 8080);