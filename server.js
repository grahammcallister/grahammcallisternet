var express = require('express');
var router = express.Router();
var mustacheExpress = require('mustache-express');

// define the home page route
router.get('/', function (req, res) {
    res.render('index', { title: 'The Software Pilgrim', datetime: ''});
  })
  
  router.get('/GreatDeveloper', function (req, res) {
    res.send('Great Developer')
  })

var app = express();
app.use(express.static('public'));
app.engine('html', mustacheExpress());
app.set('views', 'views');
app.set('view engine', 'html');
app.use('/', router);

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.listen(process.env.PORT || 8080);