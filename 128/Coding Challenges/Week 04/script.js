let person = {
    name: `Asdf`,
    sayMyName() {
        return `My Name is ${this.name}`;
    }
}

document.getElementById(`myName`).innerHTML = person.sayMyName();

let whatIsBigger = (a, b) => {
    if (a > b) {
        document.getElementById('answer').innerHTML = a;
    }
    else {
        document.getElementById('answer').innerHTML = b;
    }
}
whatIsBigger(2,3);


