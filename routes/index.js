var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testQA', (req, res) => {
  res.send('Response from QA server!');
});

module.exports = router;
