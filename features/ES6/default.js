// ES5
function multiply(x, y) {
  y = y || 1; // Default to 1 if falsy
  return x * y;
}

// ES6
function multiply(x, y = 1) {
  return x * y;
}

// Reference args to the left
(function example(x, y = x * 2) {
    console.log(x, y); // 2, 4
}(2));
