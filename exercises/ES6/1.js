// Use your new powers to transform the code below into ES6

function pow(base, exponent) {
  var result = 1;
  var exponent = exponent || 2;
  for (var i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
}

function printPow(numbers) {
  var result = pow(numbers.base, numbers.exponent);
  console.log("result: " + result);
}

printPow({base: 2, exponent: 3}); // => 8
