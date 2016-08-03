function getUser () {
  console.log("Request initiated...");
  return http.get("/user").then(function(user) {
    console.log("Request complete!");
    return user;
  });
}

function getUserAndPrintName() {
  getUser().then(function(user) {
    console.log(user.name);
  });
};

getUserAndPrintName();
console.log("Do some other thing");
