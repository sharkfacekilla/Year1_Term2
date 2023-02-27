//GETTING USER INPUT FROM PROMPTS & CHECKING IF IT'S VALID INPUT
let price = [];
let i = 0;
while (true) {
    price[i] = parseInt(prompt("Enter 1st Price"));
    if (!isNaN(price[i]) && price[i] !== 0) {
        break;
    } else {
        alert("Please enter a valid number.");
    }
}
i++;
while (true) {
    price[i] = parseInt(prompt("Enter 2nd Price"));
    if (!isNaN(price[i]) && price[i] !== 0) {
        break;
    } else {
        alert("Please enter a valid number.")
    }
}
i++;
while (true) {
    price[i] = parseInt(prompt("Enter 3rd Price"));
    if (!isNaN(price[i]) && price[i] !== 0) {
        break;
    } else {
        alert("Please enter a valid number.")
    }
}

//SORTING ARRAY
price.sort(function(a,b){return a-b});

//GETTING MEDIAN
getMedian(price);

//MEDIAN FUNCTION
function getMedian(price) {
    let median = Math.floor(price.length / 2);
    if (price[median] % 2 === 0) {
        document.getElementById('medianDiv').innerHTML= `Middle: $ <span style="color:red">` +  price[median] + `</span>`;
    } 
    else {
        document.getElementById('medianDiv').innerHTML= `Middle: $` + price[median];
    }
}

//DISPLAYING PRICES
document.getElementById('threePrice').innerHTML= `3 Prices are: $` + price[0] + `, $` + price[1] + `, $` + price[2] ;

//CALCULATE MEAN BUTTON
document.getElementById('calculateBtn').addEventListener("click", function(){getMean(price)});

//CALCULATE MEAN FUNCTION
function getMean(price) {

    let sum = 0;
    for (let i = 0; i < price.length; i++) {
        sum += price[i];
    }
    let mean = (sum / price.length).toFixed(2);
    document.getElementById('meanDiv').innerHTML= `Mean: $` + mean;
}

//PERCENTAGE WIDGET FUNCTION
document.getElementById("bookedBtn").addEventListener("click", getPercent);
function getPercent () {
    let userNum = document.getElementById('bookedInput').value; 
    bookedAnswer.style.fontFamily="Arial";
    bookedAnswer.style.fontWeight='bold';
 
//CHECKING IF INPUT IS VALID & DISPLAYING RESULTS
let validInput = false;
    while (validInput == false) {
        console.log(userNum)
        if (userNum == `` || userNum < 0) {
            alert('Number is not between 1-100. Please try again!')
            break;
        }
        if (userNum <= 50) {
            validInput = true;
            document.getElementById('bookedAnswer').innerHTML= `<span style="color:red">` + userNum + `%</span> Booked!`; 
            break;
        }
        else if (userNum >= 51 && userNum <= 64) {
            validInput = true;
            document.getElementById('bookedAnswer').innerHTML= `<span style="color:black">` + userNum + `%</span> Booked!` ;  

            break;
        }
        else if (userNum >= 65 && userNum <= 79) {
            validInput = true;
            document.getElementById('bookedAnswer').innerHTML= `<span style="color:yellow">` + userNum + `%</span> Booked!` ;  
            break;
        }
        else if (userNum >= 80 && userNum <=90) {
            validInput = true;
            document.getElementById('bookedAnswer').innerHTML= `<span style="color:blue">` + userNum + `%</span> Booked!` ;  
            break;
        }
        else if (userNum <= 100 && userNum > 70) {
            validInput = true;
            document.getElementById('bookedAnswer').innerHTML= `<span style="color:green">` + userNum + `%</span> Booked!` ;  
            break;
        }
        else {
            alert(`Number is not between 1-100. Please try again!`);
            break;
        }
    }
}

//CLEAR DIV FUNCTION
function clear() {
    document.getElementById(`iterationAnswer`).innerHTML="";
}

//ITERATION BUTTON
document.getElementById('iterationBtn').addEventListener("click", iterateForward);

//ITERATION FUNCTION
function iterateForward() {
    let iterationAnswer = document.getElementById('iterationAnswer')
    let iteration = document.getElementById('iterateInput').value;
    clear();
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            iterationAnswer.innerHTML += iteration;
            console.log(typeof(iteration))
        }
        iterationAnswer.innerHTML += "<br>";
    }
    for (let i = 5; i >=2; i--) {
        for (let j = i; j >= 2; j--) {
            iterationAnswer.innerHTML += iteration;
            console.log(typeof(iteration))
        }
        iterationAnswer.innerHTML += "<br>";
    }
}


//SPEED FUNCTION
document.getElementById('fastestBtn').addEventListener("click", speed);

//SPEED FUNCTION
function speed() {
    let speed1 = parseInt(document.getElementById('speed1').value);
    let speed2 = parseInt(document.getElementById('speed2').value);
    let alexaName = `Alexa`;
    let siriName = `Siri`;
    let tie = `tie`;
    let winner;
    if (isNaN(speed1)) {
        alert('Please enter a valid number for Alexa');
    }
    else if (isNaN(speed2)){
        alert('Please enter a valid number for Siri');
    }
    else {
        document.getElementById('speeds').innerHTML = `<span> Alexa's speed is: ` + `<span style="color: red">` + speed1 + `</span><br><span> Siri's speed is: ` + `<span style="color: blue">` + speed2 + `</span><br>`;
        if (speed1 < speed2) {
            winner = siriName;
        }
        else {
            winner = alexaName;
        }
        if (speed1 == speed2) {
            winner = tie;
        }
        if (winner == tie) {
            document.getElementById('speedResults').innerHTML = `<span> It's a  ` + `<span style="color: green">` + winner + `</span>!<br>`;
        }
        else if (winner == alexaName) {
        document.getElementById('speedResults').innerHTML = `<span style="color:red">` + winner + `</span> gets there first!`;
        }
        else {
            document.getElementById('speedResults').innerHTML = `<span style="color:blue">` + winner + `</span> gets there first!`;
        }
    }
}