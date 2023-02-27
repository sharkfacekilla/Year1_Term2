//setters & getters
class Fruit {
    constructor(name, age){
    this._name = name;
    this._age = age;
    }
    get name() {
    console.log(this._name);
    }
    set name(value){
    this._name = value;
    console.log(`the name has been changed to: ${this._name}`);
    }
}
let orangeFruit = new Fruit(`orange`, 33);

console.log(orangeFruit.name);

orangeFruit.name = `Cumquot`;
