/**************************************************
Game scenes function

1. Intro
2. Gameplay
3. Ending

I just wanted to separate the scenes to the game 
to make the codes a little easier to read

**************************************************/
function title() {
    push();
    fill(`#9C96EB`);
    textSize(48);
    commonTextStyle();
    text(`DINOTUBBIES`,width/2,height/2);
    fill(`FFFFFFF`);
    textSize(24);
    text(`Press any keys to start`,width/2,height/1.75)
    pop();
}

function instruction() {
    push();
    fill(`#F6B2D4`);
    textSize(24);
    commonTextStyle();
    text(`Save your dino friends from the end of the world!`,width/2,height/2);
    fill(`FFFFFF`);
    text(`Press any keys to start`,width/2,height/1.75)
    text(`use the ARROW keys to move`,width/2,height/1.025);
    pop();
}

function startGame() {
    push();
    createCave();
    move();
    createFriends();
    acquiringFriends();
    createMeteor();
    pop();
}

function happyEnd() {
    push();
    fill('#F6B2D4');
    commonTextStyle();
    textSize(65);
    text(`HAPPY EVER AFTER`,width/2,height/2);
    restart();
    pop();
}

function sadEnd() {
    push();
    fill('#F52525');
    commonTextStyle();
    textSize(65);
    text(`END OF THE WORLD`,width/2,height/2);
    restart();
    pop();
}

function restart() {
    push();
    fill(`FFFFFF`);
    commonTextStyle();
    textSize(24);
    text(`Press F5 to restart`,width/2,height/1.75);
    pop();
}

// Common text styling
function commonTextStyle() {
    stroke(1);
    strokeWeight(5);
    textFont(myFont);
    textAlign(CENTER);
}
