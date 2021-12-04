var express = require('express');
var router = express.Router();

/* GET home page. */
router
  .get('/', (req, res,) => {
  res.render('index', { title: 'Generacija 9', subtitle: 'JS-backend' });
})

  .get('/people', (req, res) => {
  res.render('people', {title: 'Domasna', name: 'Velibor Stanisic'})
})

module.exports = router;
