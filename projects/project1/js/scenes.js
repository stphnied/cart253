/**************************************************
Game scenes function

1. Intro
2. Gameplay
3. Ending

I just wanted to separate the scenes to the game 
to make the codes a little easier to read

**************************************************/
function title() {
    fill('black');
    textSize(65);
    text(`START GAME`,width/2,height/2);
}

function startGame() {
    createCave();
    move();
    createFriends();
    acquiringFriends();
    createMeteor();
}

function happyEnd() {
    fill('black');
    textSize(65);
    text(`HAPPY GAME`,width/2,height/2);
}

function sadEnd() {
    fill('black');
    textSize(65);
    text(`SAD GAME`,width/2,height/2);
}


