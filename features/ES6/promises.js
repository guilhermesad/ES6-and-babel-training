// An immediately resolved promise
let p = Promise.resolve("foo"); 

// Can get it after the fact, unlike events
p.then((res) => console.log(res)); 

let p2 = new Promise(function(resolve, reject) {  
   setTimeout(() => resolve(5), 2000);
});

// Handler can't change promise, just value
p2.then((res) => {  
  res += 2;  
  console.log(res);
});

// Still gets 4
p2.then((res) => console.log(res));  
