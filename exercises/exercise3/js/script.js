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
    size:55,
    speed:5
};

let lover = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    size:50,
    speed: 2
};

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
    user.y = height;

    lover.x = width/2;
    lover.y = 45;
}

// draw()
function draw() {
    background(255,155,200);
    display();

}

// Displaying the elements of the game
function display() {
    // user
    push();
    fill('coral');
    ellipse(user.x, user.y, user.size);
    pop();
    move();

    // Lover
    push();
    lover.x += lover.speed;
    if (lover.x > width) {
        lover.speed = -lover.speed;
    } else if (lover.x <= 0) {
        lover.speed = -lover.speed;
    }
    fill('yellow');
    ellipse(lover.x,lover.y,lover.size);
    pop();

    // Blockers (x,y,size,nbcircle,linespace)
    // on top
    blockers(0, 100, 20, 5,100);
    blockers(width/2,100, 20,6,100)
    // on bottom
    blockers(0, height/1.2, 20, 5, 100);
    blockers(width / 2, height/1.2, 20, 6, 100)
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



//  BLOCKERS FUNCTIONS -----------------------------------
function blockers(x,y,size,nbCircles,lineSpace){
    for (let i = 0; i < nbCircles; i++) {
        noStroke();
        ellipseMode(CENTER);
        fill(255);
        ellipse(x, y, size);
        x += lineSpace;
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

function isOffScreen(circle) {
    if (user.x < 0 || user.x > width || lover.y < 0 || lover.y > height) {
        return true;
    } else {
        return false;
    }
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