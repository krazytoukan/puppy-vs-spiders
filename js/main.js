console.log("JS loaded")

var $playerTwo = $("#player-two");
var $gameboard = $("#gameboard")

//Create Movement for player two based on key press

document.addEventListener("keydown", keyDownHandler);

// function For Player Two Movement
function keyDownHandler(e) {
   //Right Arrow
    if(e.keyCode == 39) {
        $playerTwo.animate({
            left: "+=5px"
        },10);
    }
    //Left Arrow
    else if(e.keyCode == 37) {
        $playerTwo.animate({
            left: "-=5px"
        },10);
    }
    //Down Arrow
    if(e.keyCode == 40) {
        $playerTwo.animate({
            top: "+=5px"
        },10);
    }
    //Up Arrow
    else if(e.keyCode == 38) {
        $playerTwo.animate({
            top: "-=5px"
        },10);
    }
}
