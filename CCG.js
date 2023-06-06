class Card{
    constructor(name,cost){
        this.name = name ;
        this.cost = cost ;
    }
}
class UnitCard extends Card{
    constructor(name,cost,power,resilience){
    super(name,cost);
    this.power = power;
    this.resilience = resilience;
}
attack(target){
    target.power -=10;
    target.resilience -=3
    target.power += 5;
}
}
class EffectCard extends Card{
    constructor(name,power,magnitude,stat){
        super(name,stat);
        this.magnitude = magnitude;
        this.stat = stat
    }
    applyEffect(target){
        if (this.stat === "resilience"){
        target.resilience += this.magnitude;
        }
        else if (this.stat === "power"){
            target.power += this.magnitude;
        }   
    }
}
const RedBeltNinja = new UnitCard("Red Belt Ninja",3,3,4);


const BlackBeltNinja = new UnitCard("Black Belt Ninja",4,5,4);


const hardAlgo = new EffectCard("Hard Algorithm", 2, +3, "resilience");
hardAlgo.applyEffect(RedBeltNinja);
console.log("Round 1 , redbelt after fight ==>" ,RedBeltNinja);

const unhandledPromiseRejection = new EffectCard("Unhandled Promise Rejection",1,-2,"resilience");
unhandledPromiseRejection.applyEffect(RedBeltNinja);
console.log("Round 2 , Redbelt after fight ",RedBeltNinja);

const pairProgramming = new EffectCard("Pair Programming", 3, +2, "power");
pairProgramming.applyEffect(RedBeltNinja);
console.log("Round 3 , redbelt on round 3 after fight  ",RedBeltNinja);

console.log("Red belt attacking black belt");
RedBeltNinja.attack(BlackBeltNinja);
console.log(BlackBeltNinja);
console.log(RedBeltNinja);