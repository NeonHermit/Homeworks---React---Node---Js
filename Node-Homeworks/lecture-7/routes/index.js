var express = require('express');
var router = express.Router();
let cars = require('../kolicki-data')

/* GET home page. */
router.get('/cars', function(req, res, next) {
  res.send({
    message: 'Random kolicki',
    items: cars
  })
})

.get('/cars/:manufacturer', (req, res) => {
  let message = `Here are the models made by ${req.params.manufacturer}`
  const car = cars.find(car => {
    return car.manufacturer == req.params.manufacturer
  })

  if (!car) {
    message = `There is no such thing`
  }

  res.send({
    message: message,
    item: car
  })
})

.post('/cars', (req, res) => {
  cars.push({
    manufacturer: cars.length + 1,
    ...req.body
  })

  res.send({
    message: 'New car added',
    items: cars
  })
})

module.exports = router;
