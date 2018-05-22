console.log("JS loaded")

var $playerTwo = $("#player-two");
var $gameboard = $("#gameboard");
var $spider = $(".spider")
var $titleLine = $("#top-titleline");
var spiderCounter = 0;
var $spiderDodge = $("#counter")
var trackedKeys = undefined;

//Create Movement for player two based on key press

document.addEventListener("keydown", function(e){
    trackedKeys.keys = (trackedKeys.keys || []);
    trackedKeys.keys[e.keyCode] = true;
});
window.addEventListener('keyup', function (e) {
    myGameArea.keys[e.keyCode] = false; 
})

// function For Player Two Movement
 function playerTwoMovement() {
    //Right Arrow
    if(trackedKeys.keys && trackedKeys.keys[39] && (($playerTwo.offset().left + $playerTwo.width()) < ($gameboard.offset().left + $gameboard.width()))) {
        $playerTwo.animate({
            left: "+=20px"
        },10);
        $playerTwo.addClass('flip')
    }
    //Left Arrow
    if(trackedKeys.keys && trackedKeys.keys[37] && ($playerTwo.offset().left) > ($gameboard.offset().left)) {
        $playerTwo.animate({
            left: "-=20px"
        },10);
        $playerTwo.removeClass('flip')
    }
    //Down Arrow
    if(trackedKeys.keys && trackedKeys.keys[40] && (($playerTwo.offset().top + $playerTwo.height()) < ($gameboard.offset().top + $gameboard.height()))) {
        $playerTwo.animate({
            top: "+=20px"
        },10);
    }
    //Up Arrow
    if(trackedKeys.keys && trackedKeys.keys[38] && ($playerTwo.offset().top > $gameboard.offset().top)) {
        $playerTwo.animate({
            top: "-=20px"
        },10);
    }
}
var checkPlayerTwoPosition = setInterval(playerTwoMovement, 10);

// document.addEventListener("keyup", keyUpHandler);
// function keyUpHandler(e){
//     //Spider drop on Q
//     if(e.keyCode == 81){
//         new SpiderThrow(81);
//     }
//     //Spider drop on W
//     else if(e.keyCode == 87){
//         new SpiderThrow(87)
//     }
//     //Spider drop on E
//     else if(e.keyCode == 69){
//         new SpiderThrow(69);
//     }
//     //Spider drop on R
//     else if(e.keyCode == 82){
//         new SpiderThrow(82)
//     }
//     //Spider drop on Space
//     else if(e.keyCode == 32){
//         new SpiderThrow(32)
//     }
// }

//Constructor function for making spider
function SpiderThrow(key){
    //Linking to spider Image and appending to game board
    var $newSpider = $("<img class='spider' src='images/spider.png'>");
    $gameboard.append($newSpider);
    if(key == 87){
        $newSpider.css({left: $gameboard.offset().left + $newSpider.width()})
    } else if (key == 69){
        $newSpider.css({left: $gameboard.offset().left + $newSpider.width() + $newSpider.width()})
    } else if (key == 82){
        $newSpider.css({left: $gameboard.offset().left + $newSpider.width()+ $newSpider.width() + $newSpider.width()})
    }   else if (key == 32){
        $newSpider.css({left: $gameboard.offset().left + $newSpider.width() + $newSpider.width() + $newSpider.width() + $newSpider.width()})
    }
    
    //Interval for Spider movement
    var spiderMovement = setInterval(function(){
        $newSpider.css({top: "+=10px"});
        if(($newSpider.offset().top + $newSpider.height()) > $gameboard.height() + $titleLine.height()) {
            $newSpider.remove()
            clearInterval(spiderMovement)
            spiderCounter += 1;
            $spiderDodge.html(spiderCounter + " Spiders Dodged!")
        } 
        
        //Collision Detection for Spider to Corgi
        else if ($newSpider.offset().left < ($playerTwo.offset().left + $playerTwo.width() - 40) &&
        $newSpider.offset().left + $newSpider.width() > $playerTwo.offset().left + 40 &&
        $newSpider.offset().top < ($playerTwo.offset().top + $playerTwo.height()) &&
        $newSpider.offset().top + $newSpider.height() > $playerTwo.offset().top + 50){
            console.log("colision detected");
            $newSpider.remove()
            clearInterval(spiderMovement)
            spiderCounter = 0
            $spiderDodge.html("Bambi was DEVOURED!");
        }
    }, 50)
}
