// ES5
function logEach() {
  var things = Array.prototype.slice.call(arguments);
  things.forEach(function (thing) {
      console.log(thing);
  });
}
logEach("a", "b", "c");


// ES6
function logEach(...things) {
  things.forEach(function (thing) {
      console.log(thing);
  });
}
logEach("a", "b", "c");
