var numSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay")
var message = document.getElementById("message");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("resetBtn");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
    // mode Button
    setupModeBtns();
    setupSqueres();
    reset();
}

function setupModeBtns(){
    for(var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected-btn");
            modeBtns[1].classList.remove("selected-btn");
            this.classList.add("selected-btn");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
    });}
}

function setupSqueres(){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;

            if(clickedColor == pickedColor){
                message.textContent = "Correct!";
                resetBtn.textContent = "Play  Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again";
            }
        });
    }
}
resetBtn.addEventListener("click", function(){
    reset();
});


function changeColors(color){
    //loop through all square
    for(var i = 0; i < squares.length; i++){
    //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickcolor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an empty array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

//generate Random RGB
function randomColor(){
    //pick a "red R" from 0 - 255
    var R = Math.floor(Math.random() * 256);
    //pick a "green G" from 0 - 255
    var G = Math.floor(Math.random() * 256);
    //pick a "blue B" from 0 - 255
    var B = Math.floor(Math.random() * 256);
    //return the random RGB color

    return "rgb("+ R + ", " + G + ", " + B + ")" ;
}

function reset(){
    colors = generateRandomColors(numSquares);
    //picked a new random color from array
    pickedColor = pickcolor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New Colors";
    message.textContent = "";
}