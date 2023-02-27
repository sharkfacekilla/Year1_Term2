let myObj = [
    {name: "name1", color: "green"},
    {name: "name2", color: "blue"},
    {name: "name3", color: "red"},
    {name: "name4", color: "yellow"},
    {name: "name5", color: "orange"}
]
let numCount = 1;
for (let i = 0; i < myObj.length; i++) {
    console.log(numCount++);
    console.log(myObj[i].name);
    console.log(myObj[i].color);
    console.log("-------------------");
}
const resultDiv = document.getElementById('results');
for (let i = 0; i < myObj.length; i++) {
    myObj[i].toLocaleString(resultDiv);

}




const test = document.getElementById('text');
const test2 = document.getElementById('text2');
const test3 = document.getElementById('text3');


test.addEventListener('mouseover', (event) => {
event.target.style.color = "green";
event.target.style.backgroundColor = `pink`;
});

test.addEventListener('mouseleave', (event) => {
event.target.style.color = "";
event.target.style.backgroundColor = '';
})


test2.addEventListener('mouseover', (event) => {
event.target.style.color = "blue";
event.target.style.backgroundColor = `yellow`;
});

test2.addEventListener('mouseleave', (event) => {
    event.target.style.color = "";
    event.target.style.backgroundColor = '';
})

test3.addEventListener('mouseover', (event) => {
event.target.style.color = "red";
event.target.style.backgroundColor = `orange`;
});

test3.addEventListener('mouseleave', (event) => {
    event.target.style.color = "";
    event.target.style.backgroundColor = '';
})

