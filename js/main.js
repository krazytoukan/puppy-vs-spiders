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
        new SpiderThrow()
        }
    //Spider drop on W
    else if(e.keyCode == 87){
        new SpiderThrow()
        }
    //Spider drop on E
    else if(e.keyCode == 69){
        new SpiderThrow()
        }
    //Spider drop on R
    else if(e.keyCode == 82){
        new SpiderThrow()
        }
    //Spider drop on Space
    else if(e.keyCode == 32){
        new SpiderThrow()
    }
}

//Constructor function for making spider
function SpiderThrow(){
    //Linking to spider Image and appending to game board
    var $newSpider = $("<img class='spider' src='images/spider.png'>");
    $gameboard.append($newSpider);

    //Interval for Spider movement
    var spiderMovement = setInterval(function(){
        $newSpider.css({top: "+=10px"});
        if(($newSpider.offset().top + $newSpider.height()) > $gameboard.height()) {
            $newSpider.remove()
            clearInterval(spiderMovement)
        } 
        
        //Collision Detection for Spider to Corgi
        else if ($newSpider.offset().left < ($playerTwo.offset().left + $playerTwo.width()) &&
        $newSpider.offset().left + $newSpider.width() > $playerTwo.offset().left &&
        $newSpider.offset().top < ($playerTwo.offset().top + $playerTwo.height()) &&
        $newSpider.offset().top + $newSpider.height() > $playerTwo.offset().top){
            console.log("collision detected")
        }
        
    }, 30)
}
