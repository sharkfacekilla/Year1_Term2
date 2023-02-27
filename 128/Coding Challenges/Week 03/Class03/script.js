let today = new Date();
let day = today.getDate();
let month = today.toLocaleString(`default`, {month: `long`});
console.log(day);
console.log(month);
let year = today.getFullYear();
let milli = today.getTime();
let dayString = today.toLocaleString(`default`, {weekday: `long`});
document.getElementById(`date`).innerHTML= `${dayString}, ${month} ${day}, ${year}, ${milli}`;


let kid = {
    name: "finn",
    lastName: "nelson",
    hasIpad: true,
    fullname: function() {
        return this.name + " " + this.lastName;
    }
}

console.log(kid.fullname());
function aFunction() {
    console.log("ES5");
}

// let arrowFunc = (a, b) => console.log(a + b);

let arrowFunc = (a, b) => {
    console.log(a + b);
}

aFunction();
arrowFunc(5,6);