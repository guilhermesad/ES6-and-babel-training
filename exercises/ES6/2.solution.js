const giveSuperPowers = ({name, speed}, ...specialPowers) => {
  for (let specialPower of specialPowers) {
    console.log(`Adding ${specialPower}!`);
  }

  return {
    name,
    speed: speed * 3,
    specialPowers,
    run() {
      console.log("Running!");
    }
  };
};

const luke = { name: "Luke", speed: 3 };
const superLuke = giveSuperPowers(luke, "XRay", "Invisibility", "Teleport");
