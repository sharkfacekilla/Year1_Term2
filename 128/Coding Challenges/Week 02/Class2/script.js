let userInput = prompt("Enter a number");

if (userInput > 10) {
    document.getElementById('parent').innerHTML = `${userInput} is greater than 10!`;
}
else if (userInput < 10) {
    document.getElementById('parent').innerHTML = `${userInput} is less than 10`;
}
else {
    document.getElementById('parent').innerHTML = `${userInput} is equal`;
}

let userNumber = prompt("Enter another number");

let newNumber = parseInt(userInput) + parseInt(userNumber);
document.getElementById('parent').style.cssText = "display: bold; color: red";
