const faker = require('faker')

const cars = []

for(let i = 0; i < 15; i++) {
    cars.push({
        model: `${faker.vehicle.model()}`,
        manufacturer: `${faker.vehicle.manufacturer()}`,
        color: `${faker.vehicle.color()}`,
        type: `${faker.vehicle.type()}`,
    })
}

module.exports = cars
