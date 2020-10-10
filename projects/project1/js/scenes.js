/**************************************************
Game scenes function

1. Intro
2. Gameplay
3. Ending

I just wanted to separate the scenes to the game 
to make the codes a little easier to read

**************************************************/
function title() {
    fill(`#9C96EB`);
    textSize(48);
    textFont(myFont);
    textAlign(CENTER);
    stroke(1);
    strokeWeight(5);
    text(`DINOTUBBIES`,width/2,height/2);
    fill(`FFFFFFF`);
    textSize(24);
    text(`Press any keys to start`,width/2,height/1.75)
}

function instruction() {
    fill(`#F6B2D4`);
    text(`Save your dino friends from the end of the world!`,width/2,height/2);
    fill(`FFFFFF`);
    text(`Press any keys to start`,width/2,height/1.75)
    text(`use the ARROW keys to move`,width/2,height/1.025);
}

function startGame() {
    createCave();
    move();
    createFriends();
    acquiringFriends();
    createMeteor();
}

function happyEnd() {
    fill('#F6B2D4');
    textSize(65);
    text(`HAPPY EVER AFTER`,width/2,height/2);
    restart();
}

function sadEnd() {
    fill('#F52525');
    textSize(65);
    text(`END OF THE WORLD`,width/2,height/2);
    restart();
}

function restart() {
    fill(`FFFFFF`);
    textSize(24);
    text(`Press any keys to restart`,width/2,height/1.75);
}

