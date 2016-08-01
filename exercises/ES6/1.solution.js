const pow = (base, exponent = 2) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
};

const printPow = ({base, exponent}) => {
  const result = pow(base, exponent);
  console.log(`result: ${result}`);
};

printPow({base: 2, exponent: 3}); // => 8
