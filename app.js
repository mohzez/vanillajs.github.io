let colorDisplay = document.querySelector(".display");
let numInput = document.querySelector("#input");
let displayBtn = document.querySelector("#button");
let errorDisplay = document.querySelector(".error");
let container = document.querySelector('.container');


function randomNum(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
}



function generateRandomColor(event) {
    // prevent default form refresh behaviour
    event.preventDefault()
    if (numInput.value === "") {
        alert("You did not enter a valid number");
        numInput.value = '';
    }

    else if (numInput.value < 0 || numInput.value > 255) {
        alert("Please enter a number between 0 and 255");
        numInput.value = '';
    }
    else {
        // regenerate random color here on button click
        let r = randomNum(0, 255);
        let g = randomNum(0, 255);
        let b = randomNum(0, 255);
        let rgb = `rgb(${r}, ${g}, ${b})`;

        colorDisplay.style.backgroundColor = rgb;
        container.style.backgroundColor = '#000';

        numInput.value = '';

    }
    return false;


}










