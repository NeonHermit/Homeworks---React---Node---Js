var express = require('express');
var router = express.Router();
const realEstateDomasno = require('../real-estate-data')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Real Estate Domasno 6', realEstateDomasno: realEstateDomasno, page2: realEstateDomasno });
});

module.exports = router;
