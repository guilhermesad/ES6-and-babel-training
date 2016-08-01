// ES5
function example(a, b, c) {
  console.log(a, b, c); // 1, 2, 3
}
var args = [1, 2, 3];
example.apply(null, args);


// ES6
function example(a, b, c) {
  console.log(a, b, c); // 1, 2, 3
}
let args = [1, 2, 3];
example(...args);


let parts = ["shoulder", "knees"];
let lyrics = ["head", ...parts, "toes"]; // ["head", "shoulder", "knees", "toes"]
