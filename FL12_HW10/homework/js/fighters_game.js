/* Your code goes here */
class Fighter {
    constructor(name, damage, hp, strength, agility) {
        this.name = name;
        this.damage = damage;
        this.hp = hp;
        this.strength = strength;
        this.agility = agility;
        this.winsCount = 0;
        this.lossesCount = 0;
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getHealth() {
        return this.hp;
    }
    getStrength() {
        return this.strength;
    }
    getAgility() {
        return this.agility;
    }
    logCombatHistory() {
        console.log(`${this.name}, Wins: ${this.winsCount} and Losses: ${this.lossesCount}`);
    }
    addWin() {
         this.winsCount++;
    }
    addLoss() {
         this.lossesCount++;
    }
    heal(point) {
        let healthPoint = this.hp + point;
        healthPoint <= 100 ? this.hp = healthPoint : this.hp;
    }
    dealDamage(damage) {
        this.hp <= 0 ? this.hp = 0 : this.hp = this.hp - damage;
    }
    attack(myFighter) {
        let min = 0;
        let max = 100;
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        let sumDefer = myFighter.getAgility() + myFighter.getStrength();
        let attackParams = Math.round(rand);
        if (attackParams > sumDefer) {
            myFighter.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${myFighter.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
}

let myFighter = new Fighter('Maximus', 25, 100, 30, 25);
let name1 = myFighter.getName();
let damage1 = myFighter.getDamage();
let strength1 = myFighter.getStrength();
let agility1 = myFighter.getAgility();
let health1 = myFighter.getHealth();

let myFighter2 = new Fighter('Commodus', 25, 100, 30, 25);
let name2= myFighter2.getName();
let damage2 = myFighter2.getDamage();
let strength2 = myFighter2.getStrength();
let agility2 = myFighter2.getAgility();
let health2 = myFighter2.getHealth();

myFighter.attack(myFighter2);
myFighter.heal(50);
myFighter.dealDamage(damage1);

console.log(myFighter);
console.log(myFighter2);

function battle(myFighter, myFighter2) {
  if (myFighter.hp === 0 || myFighter2.hp === 0) {
      console.log("Cant start battle because one fighter has 0 hp");
      return;
  }
    while (myFighter2.hp !== 0 && myFighter.hp !== 0) {
        myFighter.attack(myFighter2);
        myFighter2.attack(myFighter);
    }
    if (myFighter.hp <= 0) {
        myFighter2.addWin();
        console.log(`${myFighter2.getName()} has won!`);
        myFighter2.logCombatHistory();
    } else {
        myFighter.addWin();
        console.log(`${myFighter.getName()} has won!`);
        myFighter.logCombatHistory();
    }
    console.log(myFighter);
    console.log(myFighter2);

}

battle(myFighter, myFighter2);
