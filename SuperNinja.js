
class Ninja {
  constructor(name, health,speed,strength) {
    this.name = name;
    this.health = 0;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }

  showStats() {
    console.log(`Name: ${this.name}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Speed: ${this.speed}`);
    console.log(`Health: ${this.health}`);
  }

  drinkSake() {
    this.health += 10;
    console.log(`${this.name} drinks sake and gains 10 health!`);
  }
}


class Sensei extends Ninja {
    constructor(name, health,speed,strength,wisdom) {
      super(name, health,speed,strength)
      this.name = name;
      this.health = 200;
      this.speed = 10;
      this.strength = 10;
      this.wisdom = 10;
    }
  
    speakWisdom() {
      super.drinkSake();
      console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
  }
  
  
  const superSensei = new Sensei("Master Splinter");
  superSensei.speakWisdom();
  superSensei.showStats();
  