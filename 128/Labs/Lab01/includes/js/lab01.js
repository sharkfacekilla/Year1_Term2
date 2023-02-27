// alert ("Hello World!");
// document.getElementById("hello").innerHTML = "Hello Gage Patenaude. How many rooms do you want to book?!";

let userName = prompt("What is your name?");
document.getElementById("hello").innerHTML = "Hello " + userName + ". How many rooms do you want to book?!";

let perRoomCost = prompt("Enter Amount per room");
let numberOfRooms = prompt("Enter number of rooms");
let taxRate = prompt("Enter tax rate"); // gets the 3 values from the user

let newTaxRate = taxRate / 100; // converts the tax rate to a decimal for later

let totalCost = perRoomCost * numberOfRooms; // calculates the total cost of the rooms
let tax = totalCost * newTaxRate; // calculates the tax
let grandTotal = totalCost + tax; // calculates the grand total

document.getElementById('cost').innerHTML = "$" + parseFloat(perRoomCost).toFixed(2); // displays the values to the user
document.getElementById('tax').innerHTML = parseInt(taxRate) + "%";
document.getElementById('rooms').innerHTML = parseInt(numberOfRooms);
document.getElementById("amount").innerHTML = "$"+ parseFloat(grandTotal).toFixed(2); // displays the values to the user
