export class Pet {
  constructor(name, description, favFood, favGame){
    this.name = name;
    this.description = description;
    this.favFood = favFood;
    this.favGame = favGame;
    this.hunger = 12;
    this.happiness = 12;
  }

  meter(stat) {
    let string = "";
    for (let i=1; i<=stat; i++) {
      string += "|";
    }
    return(string);
  }

  hungerDecrease() {
    setInterval(() => {
      if (this.hunger != 0) {
        this.hunger -= 1;
      }
    }, 5000);
  }

  happyDecrease() {
    setInterval(() => {
      if (this.happiness != 0) {
        this.happiness -= 1;
      }
    }, 4000);
  }

  feed() {
    if (this.hunger <= 10) {
      this.hunger += 2;
    } else if (this.hunger <= 12){
      this.hunger = 12;
    }
    $("#hunger").text(this.meter(this.hunger));
  }

  favFeed() {
    if (this.hunger <= 8) {
      this.hunger += 4;
    } else if (this.hunger <= 12) {
      this.hunger = 12;
    }
    $("#hunger").text(this.meter(this.hunger));
  }

  play() {
    if (this.happiness <= 10) {
      this.happiness += 2;
    } else if (this.happiness <= 12) {
      this.happiness = 12;
    }
    $("#happiness").text(this.meter(this.happiness));
  }

  favPlay() {
    if (this.happiness <= 8) {
      this.happiness += 4;
    } else if (this.happiness <= 12) {
      this.happiness = 12;
    }
    $("#happiness").text(this.meter(this.happiness));
  }
}

let doot = new Pet("doot", "He likes watching TV and making new friends!", "banana", "hopscotch");

let moot = new Pet("moot", "She is a little shy but she loves to play games!", "cake", "yo-yo");

let poot = new Pet("poot", "She likes going for walks and reading comic books!", "taco", "soccer");
