function readonly(target, name, descriptor){
  descriptor.writable = false;
  return descriptor;
}

function deprecate(target, name){
  console.warn(`${name} is deprecated`);
  return false;
}

class Person {
  @readonly   
  name() { return `${this.first} ${this.last}` }

  @deprecate
  age() { return `${this.age}` }
}

function superhero(target) {
  target.isSuperhero = true;
  target.power = 'flight';
}

@superhero
class MySuperHero() {}

console.log(MySuperHero.isSuperHero); // true
