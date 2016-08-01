// Create a decorator function that behaves like so:

class Pikachu {
  useTackle() { console.log('Pikachu used tackle!'); }

  @superEffective
  useThunderbolt() { console.log('Pikachu used thunderbolt!'); }
}

myPikachu = new Pikachu();

myPikachu.useTackle();
// Pikachu used tackle!

myPikachu.useThunderbolt();
// Pikachu used thunderbolt!
// ...and it's super effective!!
