var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(, 0, 255)",
    "rgb(255, 0, 255)",
];
var colorDisplay = document.getElementById("colorDisplay")
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];

//Changing RGB to target color 
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor == pickedColor){
            alert("correct");
        }
        else{
            alert("worngS")
        }
    });
}