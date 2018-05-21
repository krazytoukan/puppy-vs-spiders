console.log("JS loaded")

var $playerTwo = $("#player-two");
var $gameboard = $("#gameboard");
var $spider = $(".spider")

//Create Movement for player two based on key press

document.addEventListener("keydown", keyDownHandler);

// function For Player Two Movement
function keyDownHandler(e) {
   //Right Arrow
    if(e.keyCode == 39 && (($playerTwo.offset().left + $playerTwo.width()) < ($gameboard.offset().left + $gameboard.width()))) {
        $playerTwo.animate({
            left: "+=15px"
        },10);
    }
    //Left Arrow
    else if(e.keyCode == 37 && ($playerTwo.offset().left) > ($gameboard.offset().left)) {
        $playerTwo.animate({
            left: "-=15px"
        },10);
    }
    //Down Arrow
    else if(e.keyCode == 40 && (($playerTwo.offset().top + $playerTwo.height()) < ($gameboard.offset().top + $gameboard.height()))) {
        $playerTwo.animate({
            top: "+=15px"
        },10);
    }
    //Up Arrow
    else if(e.keyCode == 38 && ($playerTwo.offset().top > $gameboard.offset().top)) {
        $playerTwo.animate({
            top: "-=15px"
        },10);
    }
    //Spider drop on Q
    else if(e.keyCode == 81){
        $spider.animate({
            top: "640px"
        }, 3000
        )
    }
    //Spider drop on W
    else if(e.keyCode == 87){
        $spider.animate({
            top: "640px"
        }, 3000
        )
    }
    //Spider drop on E
    else if(e.keyCode == 69){
        $spider.animate({
            top: "640px"
        }, 3000
        )
    }
    //Spider drop on R
    else if(e.keyCode == 82){
        $spider.animate({
            top: "640px"
        }, 3000
        )
    }
    //Spider drop on Space
    else if(e.keyCode == 32){
        $spider.animate({
            top: "640px"
        }, 3000
        )
    }
}

function spiderThrow(){
    //function for creating new spider
    // newSpider.Animate(shoot spider to the bottom of the screen)
}

//Collision Detection

