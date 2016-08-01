function superEffective(target, name, descriptor){
  const func = descriptor.value;
  descriptor.value = function() {
    func();
    console.log("...and it's super effective!!");
  };
  return descriptor;
}
