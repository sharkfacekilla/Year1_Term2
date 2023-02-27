let array = [1,2,3];
array.push(4,7);
console.log(array);
array.pop();
console.log(array);
document.getElementById(`array`).innerHTML = array;
for (let i = 0; i < array.length; i++) {
    document.getElementById(`array`).innerHTML += `<p> ${array[i]} </p>`;
    console.log(array[i]);
}