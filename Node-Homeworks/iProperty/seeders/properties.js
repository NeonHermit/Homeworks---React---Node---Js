const PropertyType = require('../models/PropertyType')
const mongoose = require('mongoose')

mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true } )

PropertyType.insertMany([
    (new PropertyType({ code: 'house', name: 'House' })), 
    (new PropertyType({ code: 'appartment', name: 'Aappartment' })),
    (new PropertyType({ code: 'field', name: 'Field' })),
    (new PropertyType({ code: 'factory', name: 'Factory' })),
    (new PropertyType({ code: 'plot', name: 'Plot' })),
])
