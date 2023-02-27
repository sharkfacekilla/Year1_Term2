let num1 = prompt("First Number");
let num2 = prompt("Second Number");
let age = prompt("Enter age");

let legal = "You can buy beer";
let not = "You cannot buy beer";

let result = parseInt(num1)+ parseInt(num2);
document.getElementById('parent').innerHTML = result;


if (age >= 19) {
document.getElementById('new').innerHTML = legal;
}
else {
    document.getElementById('new').innerHTML = not;
}