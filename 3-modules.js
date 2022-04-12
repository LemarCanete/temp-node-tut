const {Peter, John} = require('./4-names')
const sayHi = require('./5-utils')
const {items, person} = require('./6-alternative-flavor')
require('./7-mind-grenade');

console.log(items, person);
sayHi("Lemar")
sayHi(Peter)
sayHi(John)