for (let value of [2,3,7]) {
  console.log(value);
}
// 2
// 3
// 7

for (let value of "foo") {
  console.log(value);
}
// "f"
// "o"
// "o"

for (let i in [2,3,7]) {
  console.log(i);
}
// 0
// 1
// 2
