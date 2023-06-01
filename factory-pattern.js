'use strict';

class Animal {
  speak() {
    throw new Error("This method must be overwritten!");
  }
}

class Dog extends Animal {
  speak() {
    return 'Bark';
  }
}

class Cat extends Animal {
  speak() {
    return 'Meow'
  }
}

class Bird extends Animal {
  speak() {
    return 'Bird sound :)'
  }
}

class AnimalFactory {
    createAnimal(type) {
        switch (type) {
          case 'dog':
            return new Dog();
          case 'cat':
            return new Cat();
          case 'bird':
            return new Bird();
          default:
            throw new Error(`Invalid animal type: ${type}`);
        }
    }
}

const animal = new AnimalFactory()
const dog = animal.createAnimal('dog')
const sound = dog.speak()
console.log(sound)

