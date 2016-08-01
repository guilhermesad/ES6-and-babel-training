// ES5
if (userCreated) {
  var successMsg = "Welcome!";
}
console.log(successMsg); // Welcome!

// ES6
if (userCreated) {
  let successMsg = "Welcome!";
}
console.log(successMsg); // ReferenceError: successMsg is not defined


// ES5
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); // Prints 9

// ES6
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); // ReferenceError: i is not defined
