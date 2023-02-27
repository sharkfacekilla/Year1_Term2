//in class challenge
/*let docGet = document.getElementById('parent');
//let giveNum = parseInt(prompt("Tell me a number between 1-100"));
docGet.innerHTML = giveNum;
docGet.style.color="red";
docGet.style.fontFamily="Comic Sans MS";
docGet.style.fontWeight='bold';

if (giveNum <= 50) {
    docGet.style.color="red";
}
else if (giveNum > 50 && giveNum < 70) {
    docGet.style.color="yellow";
}
else if (giveNum < 100 && giveNum > 70) {
    docGet.style.color="green";
}
else {
    docGet.style.color="blue";
}

*/

function getNum () {
    let userNum = document.getElementById('numInput').value; 
    answer.style.fontFamily="Arial";
    answer.style.fontWeight='bold';
    document.getElementById('answer').innerHTML=userNum;
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
}
document.getElementById("numBtn").addEventListener("click", getNum);
