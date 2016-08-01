let x; // x === undefined
const z; // SyntaxError: const declarations must have an initializer

const y = 10;
y = 20; // SyntaxError: Assignment to constant variable

const o = {};
o.a = 10; // ok!
