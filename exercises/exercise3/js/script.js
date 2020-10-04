/**************************************************
Exercise 03
Stephanie Dang


Love, Actually!
**************************************************/

let user = {
    x:0,
    y:0,
    vx:0,
    vy:0,
    size:100,
    speed:2
};

let lover = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    size:100,
    speed: 2
};

let chaser = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    size:100,
    speed: 2
}

let state = `title`;
// setup()
function setup() {
    createCanvas(1000,750);
    noStroke();
    setupUser();
}
// setup for the user
function setupUser() {
    user.x = width/2;
    user.y = height/2;
}

// draw()
function draw() {
    background(255,155,200);

    // user
    push();
    fill('coral');
    ellipse(user.x,user.y,user.size);
    pop();
    move();

  
}

//  PLAYER FUNCTIONS -----------------------------------
function move() {
  if (keyIsDown(UP_ARROW)) {
      user.y += -user.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
      user.y += user.speed;
  } else if (keyIsDown(LEFT_ARROW)) {
      user.x += -user.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
      user.x += user.speed;
  }
}

// GAME SCENE FUNCTON --------------------------------------
function startGame() {

}

function happyEnding() {
    let d = dist(user.x, user.y, lover.x, lover.y);
    if (d < user.size / 2 + lover.size / 2) {
        state = `love`;
    }
}

function sadEnding() {

}


// STATES FUNCTON --------------------------------------

function title() {
    text(`Love,actually`,width/2,height/2);
    text(`Press any keys to start the game! Move with your arrow keys`,width/2,height/1.5);
} 

function love() {
    text(`It was fate!`, width / 2, height / 2);
}

function sadness() {
    text(`It wasn't meant to be!`, width / 2, height / 2);
}

// MOUSE FUNCTIONS --------------------------------------
function keyPressed() {
    if (state === `title`) {
        state = `startGame`;
    }
}