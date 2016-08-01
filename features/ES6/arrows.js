// ES5
function square(x) { 
  return x * x;
};


// ES6
const square = (x) => {
  return x * x;
};

// Simplifying
const square = (x) => (
  x * x;
);

// Simplifying even more
const square = x => x * x;const arr = [1, 2, 3];


// ES5
var squares = arr.map(function (x) { return x * x });

// ES6
let squares = arr.map(x => x * x);


// ES5
var reduxMiddleware = function(store) {
  return function(next) {
    return function(action) {
      return next(action)(store);
    }
  }
}

// ES6
let reduxMiddleware = store => next => action => {
  return next(action)(store);
};


// ES5
function UiComponent() {
  var button = document.getElementById('myButton');
  var self = this;
  button.addEventListener('click', function() {
    console.log('CLICK');
    self.handleClick();
  });
}

// ES6
function UiComponent() {
  const button = document.getElementById('myButton');
  button.addEventListener('click', () => {
    console.log('CLICK');
    this.handleClick(); // lexical `this`
  });
}

// Also lexical
arguments
super
new.target
