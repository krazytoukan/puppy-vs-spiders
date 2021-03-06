//Global Variables for  Javascript
var $playerTwo = $("#player-two");
var $gameboard = $("#gameboard");
var $spider = $(".spider")
var $titleLine = $("#top-titleline");
var spiderCounter = 0;
var $spiderDodge = $("#counter")
var trackedKeys = new Array();
var $hiScore = $("#hi-score")
var hiScore = 0;
var $startButton = $("#start-button")
var $bambiLossText = $("#bambi-loss")
var $bambiWinText = $("#bambi-win")
var checkPlayerOnePosition
var checkPlayerTwoPosition
var backgroundMusic = new Audio("audio/background-music.mp3")
backgroundMusic.loop = true;
var yelp = new Audio("audio/yelp.wav")
var vicBark = new Audio ("audio/vicBark.wav")

//Prevent moving window with Space and Arrow Keys
document.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


//Create Movement for player two based on key press
document.addEventListener("keydown", function(e){
    trackedKeys.keys = (trackedKeys.keys || []);
    trackedKeys.keys[e.keyCode] = (e.type == "keydown");
});
window.addEventListener('keyup', function (e) {
    trackedKeys.keys[e.keyCode] = (e.type == "keydown"); 
})

// function For Player Two Movement
 function playerTwoMovement() {
    //Right Arrow
    if(trackedKeys.keys && trackedKeys.keys[39] && (($playerTwo.offset().left + $playerTwo.width()) < ($gameboard.offset().left + $gameboard.width()))) {
        $playerTwo.animate({
            left: "+=10px"
        },10);
        $playerTwo.addClass('flip')
    }
    //Left Arrow
    if(trackedKeys.keys && trackedKeys.keys[37] && ($playerTwo.offset().left) > ($gameboard.offset().left)) {
        $playerTwo.animate({
            left: "-=10px"
        },10);
        $playerTwo.removeClass('flip')
    }
    //Down Arrow
    if(trackedKeys.keys && trackedKeys.keys[40] && (($playerTwo.offset().top + $playerTwo.height()) < ($gameboard.offset().top + $gameboard.height()))) {
        $playerTwo.animate({
            top: "+=10px"
        },10);
    }
    //Up Arrow
    if(trackedKeys.keys && trackedKeys.keys[38] && ($playerTwo.offset().top > $gameboard.offset().top)) {
        $playerTwo.animate({
            top: "-=10px"
        },10);
    }
    bambiWins();
}

//Player One Constructor Functions by Keys. The Numbers refer to JS key code numbers for the actual constructor function below.
function playerOneMovement(){
    //Spider drop on Q
    if(trackedKeys.keys && trackedKeys.keys[81]){
        new SpiderThrow(81);
    }
    //Spider drop on W
    else if(trackedKeys.keys && trackedKeys.keys[87]){
        new SpiderThrow(87)
    }
    //Spider drop on E
    else if(trackedKeys.keys && trackedKeys.keys[69]){
        new SpiderThrow(69);
    }
    //Spider drop on R
    else if(trackedKeys.keys && trackedKeys.keys[82]){
        new SpiderThrow(82)
    }
    //Spider drop on Space
    else if(trackedKeys.keys && trackedKeys.keys[32]){
        new SpiderThrow(32)
    }
}


//Start Button Event listener which adds Bambi to the board at the bottom center of the page, sets intervals to check for player movement and removes the start button from display
$startButton.on("click", function(){
    checkPlayerOnePosition = setInterval(playerOneMovement, 600);
    checkPlayerTwoPosition = setInterval(playerTwoMovement, 40);
    $playerTwo.css({display: "inline-block", left: $gameboard.offset().left + ($gameboard.width() / 2), top: $gameboard.height()});
    $spider.css({display: "inline-block"})
    $(this).css({display: "none"});
    $bambiLossText.css({display: "none"})
    $bambiWinText.css({display: "none"})
    spiderCounter = 0
    backgroundMusic.play()
    yelp.currentTime = 0
    })

//Constructor function for making spider
function SpiderThrow(key){
    //Linking to spider Image and appending to game board
    var $newSpider = $("<img class='spider' src='images/spider.png'>");
    $newSpider.addClass("spider");
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
    //Code for Tracking Spiders Thrown and Hi-Score
            spiderCounter += 1;
            $spiderDodge.html(spiderCounter + " Spiders Dodged!")
            if(hiScore < spiderCounter) {
                hiScore = spiderCounter;
                $hiScore.html(hiScore + " Spiders Dogged(?!)")
            }
        } 
        
        //Collision Detection for Spider to Corgi
        else if ($newSpider.offset().left < ($playerTwo.offset().left + $playerTwo.width() - 40) &&
        $newSpider.offset().left + $newSpider.width() > $playerTwo.offset().left + 40 &&
        $newSpider.offset().top < ($playerTwo.offset().top + $playerTwo.height()) &&
        $newSpider.offset().top + $newSpider.height() > $playerTwo.offset().top + 50){
        //Game End process for when Bambi gets eaten
            $newSpider.remove()
            clearInterval(spiderMovement)
            spiderCounter = 0
            $spiderDodge.html("Bambi was DEVOURED!");
            //Remove Bambi from GameBoard after Getting hit
            $playerTwo.css({display: "none"});
            yelp.play();
            gameEnd();
            $bambiLossText.css({display: "block"})
        }
    }, 40)
}


//Secret Option where Bambi Wins
function bambiWins(){
    if(spiderCounter > 50){
        vicBark.play()
        gameEnd();
        $bambiWinText.css({display: "block"});
    }
}

//End Game steps for use in either win
function gameEnd(){
    $(".spider").remove()
    // Remove Interval Checking for Player One Position and Allowing Player One to Throw Spiders and Player Two Interval
    clearInterval(checkPlayerOnePosition);
    clearInterval(checkPlayerTwoPosition);
    //Add in Bambi Loss Paragraph and Start Button
    $startButton.css({display: "inline-block"})
    //Stop Music and Reset
    backgroundMusic.pause()
    backgroundMusic.currentTime = 0
}