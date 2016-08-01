let [x, y, z] = [1, 2, 3];

// is equivalent to...

let x = 1, y = 2, z = 3;



let [x, y] = [1, 2];
console.log(x, y); // 1, 2

[x, y] = [y, x]; // Swap the values of x and y
console.log(x, y); // 2, 1



let [x, [y]] = [1, [2]]; // Nested arrays
console.log(x, y); // 1, 2



let { a: x, b: y } = { a: 1, b: 2 };
console.log(x, y); // 1, 2

let { a: x, b: { c: y } } = { a: 1, b: { c: 2 } }; // Nested objects
console.log(x, y); // 1, 2


// Using for multiple return values
function example() {
  return [1, 2, 3];
}

let [a, b, c] = example();
console.log(a, b, c); // 1, 2, 3
