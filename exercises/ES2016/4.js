// Be a human compiler and transform the code below we've seen into ES6

async function getUser () {
  console.log("Request initiated...");
  const user = await http.get("/user");
  console.log("Request complete!");
  return user;
};

async function getUserAndPrintName() {
  const user = await getUser();
  console.log(user.name);
};

getUserAndPrintName();
console.log("Do some other thing");

// Request initiated...
// Do some other thing
// Request complete!
// User name: Amir
