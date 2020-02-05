var express = require('express');
var router = express.Router();
var mustacheExpress = require('mustache-express');
var appInsights = require('@microsoft/applicationinsights-web');

const insights = new appInsights.ApplicationInsights({ config: { instrumentationKey: process.env.APPINSIGHTS_INSTRUMENTATIONKEY}});
insights.loadAppInsights();

router.get('/', function (req, res) {
    res.render('index', { title: 'The Software Pilgrim', datetime: new Date()});
    insights.trackPageView();
})
  
router.get('/GreatDeveloper', function (req, res) {
    res.render('greatdeveloper', { title: 'The Software Pilgrim - Great Developer'});
    insights.trackPageView();
})

router.get('/PilgrimResources', function (req, res) {
    res.render('developerresources', { title: 'The Software Pilgrim - Great Developer Resources'});
    insights.trackPageView();
})

router.get('/BookmarkThis', function (req, res) {
    res.render('bookmarkthis', { title: 'The Software Pilgrim - Bookmarks, links and lessons learned'});
    insights.trackPageView();
})

router.get('/ThingsImThinkingAbout', function (req, res) {
    res.render('thingsimthinkingabout', { title: 'The Software Pilgrim - Things I am thinking about'});
    insights.trackPageView();
})

var app = express();
app.use(express.static('public'));
app.engine('html', mustacheExpress());
app.set('views', 'views');
app.set('view engine', 'html');
app.use('/', router);

app.listen(process.env.PORT || 8080);