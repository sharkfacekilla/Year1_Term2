class Mall {
    constructor(shopname) {
        this.shopname = shopname;
    }
    shopisthere() {
        return `${this.shopname} is there`
    }
}

class Shop extends Mall {
    constructor(name, mallName){
        super(name);
        this.mallName = mallName;
    }
    showtheshop() {
        return this.shopisthere() + " at " + this.mallName;
    }

}
let myshop = new Mall("Shop234");
console.log(myshop.shopisthere());

let newMall = new Shop(`Shop Mall`, `Mall Walk`);
console.log(newMall.showtheshop());
console.log(newMall.shopname);

function displaySomething(something) {
console.log(something);
}

function firstName() {
    displaySomething("Joe");
}

function secondName() {
    displaySomething("Nelson");
}
firstName();
secondName();

function dispaySomethingAgain(somethingElse){
console.log(somethingElse);
}

function mathAndStuff(num1, num2, myCallback) {
    let sum = num1 + num2
    myCallback(sum);
}
mathAndStuff(4, 9, dispaySomethingAgain);