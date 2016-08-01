// Use the latest features you've learned to transform the code below into ES6

function giveSuperPowers(hero) {
  var specialPowers = Array.prototype.slice.call(arguments, 1);

  for (var i = 0; i < specialPowers.length; i++) {
    console.log("Adding " + specialPowers[i] + "!");
  }

  return {
    name: hero.name,
    speed: hero.speed * 3,
    specialPowers: specialPowers,
    run: function() {
      console.log("Running!");
    }
  };
}

var luke = { name: "Luke", speed: 3 };
var superLuke = giveSuperPowers(luke, "XRay", "Invisibility", "Teleport");
