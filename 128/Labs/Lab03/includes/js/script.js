let findBtn = document.getElementById(`findBtn`)
findBtn.addEventListener("click", function(e) { //Stopping the page from moving on button click
    e.preventDefault();
    countWhiteSpace();
    countChar();

});

//Count Whitespaces In User Input
function countWhiteSpace() {
    let userString = document.getElementById(`spaceInput`).value;
    if (userString == "") {
        alert(`Find Spaces in a Name can't be empty! Please enter something.`);
    }
    else {
        let count = userString.split(` `).length-1;

        if (count == 1) {
            document.getElementById('spaceAnswer1').innerHTML = `There is ${count} space in the clients name.`;
        }
        else {
            document.getElementById('spaceAnswer1').innerHTML = `There are ${count} spaces in the clients name.`;
        }
    }
}

//Count Character L in strings
function countChar() {
    let userString2 = document.getElementById(`charInput`).value;
    if (userString2 == "") {
        alert(`Find Letter in a Name can't be empty! Please enter something.`);
    }
    else {
        let charCount = userString2.toUpperCase().split(`L`).length - 1;
        if (charCount == 1) {
            document.getElementById(`spaceAnswer2`).innerHTML = `There is ${charCount} L in the clients name.`;
        }
        else {
            document.getElementById(`spaceAnswer2`).innerHTML = `There are ${charCount} L's in the clients name.` ;
        }
    }
}

//Display MinWage to card on load
let minWageDisplay = 15.65
document.getElementById('minWage').innerHTML = `<span style=color:green;>$${minWageDisplay}</span>`; //displaying min wage to minWage span


let dateInput = document.getElementById(`pickedDate`);
let displayDiv = document.getElementById(`displayDate`);


//Date Function for first 3 Span's (Date, Days In Month, Work Days In Month)
dateInput.addEventListener("change", function() {
    let dateInputValue = dateInput.value; //assigns the value to variable 
    let dateArray = dateInputValue.split("-"); // splits the dates into an array
    let year = dateArray[0]; 
    let month = dateArray[1];
    let day = dateArray[2];
    let selectedDate = new Date(year, parseInt(month) - 1, day); //format for date
    let formatMonth = ("0" + (selectedDate.getMonth()+1)).slice(-2); 
    let formatDay = ("0" + (selectedDate.getDate())).slice(-2);
    displayDiv.innerHTML = `<span style=color:red> ${selectedDate.getFullYear()}-${formatMonth}-${formatDay}</span>`; //displaying to displayDate span
    let daysInMonth = new Date(year, month, 0).getDate(); //gets days in month
    document.getElementById(`displayDaysInMonth`).innerHTML = `<span style=color:blue;> ${daysInMonth}`; //displays days in month to displayDaysInMonth span

    //calculating weekdays in a month
    let weekdaysInMonth = 0;
    for (let i = 1; i <= daysInMonth; i++) {
        let currentDay = new Date(year, parseInt(month) - 1, i);
        if (currentDay.getDay() !== 0 && currentDay.getDay() !== 6) {
            weekdaysInMonth++;
        }
        document.getElementById(`calculateBtn`).addEventListener("click", calculatePay);
        function calculatePay() {
            let hoursWorked = 8;
            let minWage = 15.65
            let pay = (parseInt(weekdaysInMonth) * hoursWorked * minWage).toFixed(2); //calculation for pay
            document.getElementById(`payout`).innerHTML = `<span style=color:purple;> $${pay}</span>`; //displaying pay to displayPay span
        }
    }
    document.getElementById(`displayWeekdaysInMonth`).innerHTML = `<span style=color:grey;> ${weekdaysInMonth}`; //displaying weekdays to displayWeekdaysInMonth span
});

document.getElementById(`calculateErrorBtn`).addEventListener("click", function(e) {
    e.preventDefault();
    isItInRange();
});

//Part 2. Error Handling
//Is it in range function
function isItInRange () {
    let userInput = document.getElementById('errorInput').value;
    userInput = parseInt(userInput);
    let emptyString = ""
    try {
        if (isNaN(userInput)) {
            document.getElementById('errorOutput1').innerHTML = emptyString;
            document.getElementById(`errorOutput2`).innerHTML = emptyString;
            throw new Error(`Please enter a number.`)
        }
        if (userInput <= 0) {
            document.getElementById('errorOutput1').innerHTML = `<span style=color:white>${userInput}</span>`;
            document.getElementById(`errorOutput2`).innerHTML = `<span style=color:blue> ${userInput}</span>`;
            throw new Error(`The value "${userInput}" must be zero or greater`);
        }
        if (userInput <= 2) {
            document.getElementById('errorOutput1').innerHTML = `<span style=color:white>${userInput}</span>`;
            document.getElementById(`errorOutput2`).innerHTML = `<span style=color:blue> ${userInput}</span>`;
            throw new Error(`The value "${userInput}" is less than 2`);
        }
        if (userInput > 2 && userInput < 4) {
        document.getElementById('errorOutput1').innerHTML = `<span style=color:white>${userInput}</span>`;
        document.getElementById(`errorOutput2`).innerHTML = `<span style=color:blue> ${userInput}</span>`;
        document.getElementById(`errorDisplay`).innerHTML = `<span style=color:red> The value "${userInput}" is over 2 </span>`;
        }
        if (userInput >= 4) {
            document.getElementById('errorOutput1').innerHTML = `<span style=color:white>${userInput}</span>`;
            document.getElementById(`errorOutput2`).innerHTML = `<span style=color:blue> ${userInput}</span>`;
            document.getElementById('errorDisplay').innerHTML = `<span style=color:red> Your value "${userInput}" is in the correct range </span>`;
        }
    }
    catch(err) {
        document.getElementById('errorDisplay').innerHTML = `<span style=color:red>${err}  </span>`;
    }

}
