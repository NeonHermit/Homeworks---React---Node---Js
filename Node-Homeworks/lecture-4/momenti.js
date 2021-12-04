const moment = require('moment');

// 1
const rozdenie = moment('1987-05-01');
const segasnost = moment();
const denovi = segasnost.diff(rozdenie, 'days');

console.log(`Od ${rozdenie.format('ll')}, pominaa ${denovi} denovi od rozdenie. `);


// 2
let localTime = moment();
console.log(localTime.format());

let utcTime = moment().utc();
console.log(utcTime.format('lll'));

// 3
let years = [ 2000, 2002, 2004, 2008, 2012, 2016, 2020,
    1900, 1800, 1600 ];

for (year of years) {

    let ym = moment([year]);

    if (ym.isLeapYear()) {

        console.log(`${year} is a leap year`);
    } else {
        
        console.log(`${year} is not a leap year`);
    }
}

// 4
let day =  '01/05/1987';
let parsed = moment(day, 'DD/MM/YYYY');

console.log(parsed.format('ll'));

// 5
let theEnd = moment().endOf('day').fromNow();
console.log(theEnd);

// 6
let now = moment();
console.log('Den od mesecot: ' + now.date());

// 7
let present = moment();
present.add('4', 'years');
console.log(`Dodaj 4 godini:  ${present.format('ll')}`);

// 8
let calendarium = moment().subtract(496, 'days').calendar();
console.log(calendarium);

// 9
moment.locale('mk');
n = moment();
console.log(n.format('LLLL'));

// 10
let unixTime = moment(1000);
console.log(unixTime.format('DD-MM-YYYY'));