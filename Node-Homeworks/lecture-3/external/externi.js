// Lodash
const _ = require('lodash');
let vrednosti = [4, 8, 100, -30, 50];
let suma = _.sum(vrednosti);
console.log(suma);

// Chalk
const chalk = require('chalk');
const log = console.log;
log(chalk.blue('Hello') + ' World' + chalk.red('!'));


// Yosay
const yosay = require('yosay');

console.log(yosay("Mjau mjau"));