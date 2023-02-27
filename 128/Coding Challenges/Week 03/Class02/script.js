/*
function getNum () {
    let userNum1 = document.getElementById('input1').value; 
    let userNum2 = document.getElementById('input2').value; 
    answer.style.fontFamily="Arial";
    answer.style.fontWeight='bold';
    let userNum = sumValues(userNum1, userNum1)
    if (userNum <= 50) {
        answer.style.color="red";
    }
    else if (userNum > 50 && userNum < 70) {
        answer.style.color="yellow";
    }
    else if (userNum < 100 && userNum > 70) {
        answer.style.color="green";
    }
    else {
        answer.style.color="blue";
    }
    document.getElementById('answer').innerHTML=userNum + ` ASDF`;

}

function sumValues (a, b) {
    return parseInt(a) + parseInt(b) 
}
document.getElementById("numBtn").addEventListener("click", getNum);
*/

let num = 11;

switch (true) {
    case (num < 5):
        alert("Number is less than 5");
        break;
    case (num > 5):
        alert("Number is greater than 5");
        break;
    default: 
        alert("Number is 5!");
}