#Spiders and Puppies : Still Not Friends! - README

## Play the Game at:
https://git.generalassemb.ly/pages/krazytoukan/spider-thrower/

### Game in action:
![screenshot of the game in action](https://i.imgur.com/FE9IVeA.png)

## Welcome to the Game

### Concept

The concept of the game is simple. Two players square off against each other with everything on the line. Player Two controls the protagonist of this tale, the adorable corgi, Bambi. Player Two controls Bambi using the arrow keys of the key board.  Bambi has full range of movement on the game screen, but will likely want to avoid heading to the top of the screen.

The reason Bambi will want to avoid the top of the screen? Spiders of course! Player One can drop spiders from the top of the screen with the Q, W, E, R, and Space buttons.  Each button drops a spider which takes up 1/5 of the width of the playing field. 

The goal for Player One is to hit Bambi with a spider, the goal for Player Two is to avoid spiders at all costs.  The game is set to end when Bambi is hit with a spider or, with the secret more rewarding ending of Bambi avoiding 50 spiders and escaping.

## Mechanics

### Platform
The game is built predominantly in HTML and Javascript with most of the elements heavily styled with CSS.  The Javascript implements jQuery and jQuery objects as well.


### Movement
Movement is based on keys which are tracked with event listeners for both keyup and keydown so that both players can use the keyboard at the same time.  While a key is depressed, that key is added to an array and the movement functions for both players are set to constantly check that array to see if one of the players buttons is held down and perform an action accordingly.

Bambi's movement is instantaneous, with his furry little paws carrying him away as soon as you press an arrow key.

You will notice that the spiders do not deploy immediately when you press one of Player One's controls and that spiders can't be on the same horizontal axis at the same time.  I coded the game to check Player One's controls on a slower interval so that Player One could not just flood the board with spiders (each one takes up 1/5 of the screen after all) and seal Bambi's fate immediately.  He has to have at least a fighting chance after all!

The Spiders are created and removed from the game via a constructor function with each key creating a spider at a different gameboard width point.

### Collision Detection
Collision detection is basic rectangular collision detection which checks the "rectangle" of Bambi against the rectangle of the created spiders.  Because both Bambi's and the spider's rectangle have transparent pixels around them which extend beyond the size of the actual sprite (e.g. the image of Bambi is 100 x 100 pixels while the actual sprite of Bambi is closer to 70 x 60) you will notice that the collision detection does not simply check to see if the right side of Bambi is occupying the same space as the left side of a spider.

Additionally, Bambi is kept inside the playing board by collision detection.

The constructed spiders remove themselves from the game and cease their interval movement when they hit the bottom of the board.

#### Music and Sounds
Currently, the game has background music and a defeat yelp and victory bark for Bambi which are implemented through Javascript which begin running on start. The background music loops.

## Initial WireFrame

Below is the initial planning and wireframe for the game (originally Bambi was planned to be a bird. Well, time makes fools of us all.)

#### Original Gameboard Idea
![original gameboard plan](https://i.imgur.com/JAPfPFG.jpg)

#### Initial thoughts on Player One
![Player One initial development](https://i.imgur.com/nfMsHub.jpg)

#### Initial thoughts on Player Two
![Player Two initial development](https://i.imgur.com/vmetwI5.jpg)

#### Ending the game
![Ending the Game](https://i.imgur.com/bf0BMYT.jpg)

# Art, Animation, and Music

The pixel dungeon background for this game was created by Dave Grey.

I have tried to find the artist who made the gif pixel art for Bambi the Corgi but have been unable to do so. If anyone reading this know who the creator, please let me know!

The music used is a piece by the name of Shoddy Haunt by mathgrant on freemusicarchive.org.  You can find more of his chiptune work at [mathgrant Music](http://freemusicarchive.org/music/mathgrant/).

That glorious 8-bit spider? That's all Cambou baby.

# Backlog and Planned Additions

At this time I'm planning on adding a one-player option where spiders are randomly created and dropped from the ceiling for Bambi to avoid.

I'd also like to add some additional sprites for different Player Two so that people can choose what they're putting up against the spiders.