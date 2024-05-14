class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} go go`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} meo meo`);
  }
}

const cat = new Cat("Doremon");
cat.speak();
