const rooms = [
    {
    "name": "Standard",
    "desc": "Single room with a bed",
    "price": "$159",
    "img": "./images/room2.JPG" 
    },
    {
    "name": "Double",
    "desc": "Double Room with two beds",
    "price": "$229",
    "img": "./images/room1.JPG"
    },
    {
    "name": "Penthouse",
    "desc": `King Size Bed <br> Bar<br> Jacuzzi`,
    "price": "$359",
    "img": "./images/penthouse.jpg"
    }
];

//loop to display to page
for (let i = 0; i < rooms.length; i++) { 
    document.getElementById((`room` + i.toString())).innerHTML += `${rooms[i].name}`;
    document.getElementById(`desc` + i.toString()).innerHTML += `${rooms[i].desc}`;
    document.getElementById(`price` + i.toString()).innerHTML += `${rooms[i].price}`;
    document.getElementById(`img` + i.toString()).src = `${rooms[i].img}`;
};
//button event handlers
document.getElementById(`button0`).addEventListener("click", displayPrice0);
document.getElementById(`button1`).addEventListener("click", displayPrice1);
document.getElementById(`button2`).addEventListener("click", displayPrice2);

function displayPrice0() {
    alert(`Your room is ${rooms[0].price} per night`);
};
function displayPrice1() {
    alert(`Your room is ${rooms[1].price} per night`);
};

function displayPrice2() {
    alert(`Your room is ${rooms[2].price} per night`);
};

//part2
document.getElementById(`myButton`).addEventListener("click", addRow);
let index = 2;

function addRow() {
    let table = document.getElementById(`sampleTable`);
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = `Row${index.toString()} cell1`;
    cell2.innerHTML = `Row${index.toString()} cell2`;
    index++;
};