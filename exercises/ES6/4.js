// Transform the following CommonJS snippet using ES6 modules

var fruits = require("./fruits");
var blend = require("./blend");

var makeRedJuice = function() {
  return blend(fruits.strawberry, fruits.raspberry, fruits.plum);
};

module.exports = makeRedJuice;
