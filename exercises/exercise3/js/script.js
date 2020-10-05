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

let circle1 = {
    x: 0,
    y: 200,
    vx: 0,
    vy: 0,
    size: 25,
    speed: 10
};

let circle2 = {
    x: 0,
    y: 500,
    vx: 0,
    vy: 0,
    size: 50,
    speed: 5
};

let circle3 = {
    x: 0,
    y: 300,
    vx: 0,
    vy: 0,
    size: 45,
    speed: 1
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
    // User
    user.x = width/2;
    user.y = height;
    // Lover
    lover.x = width/2;
    lover.y = 45;
}

// draw()
function draw() {
    background('#CEC2FF');

    // States
    switch(state) {
        case `title` :
            title();
            break;
        case `startGame` :
            startGame();
            break;
        case `happyEnding` :
            love();
            break;
        case `sadEnding`:
            sadness();
            break;
        case `runEnding`:
            runningAway();
            break;
    }
}

// Displaying the elements of the game
function display() {
    // user
    push();
    fill(255);
    ellipse(user.x, user.y, user.size);
    pop();
    move();

    // Lover
    push();
    fill('#ffc2d6');
    ellipse(lover.x,lover.y,lover.size);
    pop();

    // fences (x,y,size,nbcircle,linespace)
    // on top
    let f1 = fences(0, 100, 20, 5, 100);
    fences(width / 2, 100, 20, 6, 100)
    // on bottom
    fences(0, height / 1.2, 20, 5, 100);
    fences(width / 2, height / 1.2, 20, 6, 100)
    passerby();
}

//  PLAYER FUNCTIONS -----------------------------------
function move() {
    // User
    if (keyIsDown(UP_ARROW)) {
        user.y += -user.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
        user.y += user.speed;
    } else if (keyIsDown(LEFT_ARROW)) {
        user.x += -user.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
        user.x += user.speed;
    }

    // Lover
    lover.x += lover.speed;
    if (lover.x > width) {
        lover.speed = -lover.speed;
    } else if (lover.x <= 0) {
        lover.speed = -lover.speed;
    }
}

//  ENEMY FUNCTIONS -----------------------------------
function fences(x,y,size,nbCircles,lineSpace){
    for (let i = 0; i < nbCircles; i++) {
        noStroke();
        ellipseMode(CENTER);
        fill('#6E2594');
        ellipse(x, y, size);
        x += lineSpace;
    }
}

function passerby() {
    // Circle 1 
    circle1.x += circle1.speed;
    fill('#B3B3F1');
    ellipse(circle1.x,circle1.y,circle1.size);
    if(circle1.x > width) {
        circle1.x = 0;
        circle1.y = random(200,height/1.5);
        circle1.speed = random(5,15);
        circle1.size = random(25,100);
    }

    // Circle 2
    circle2.x += circle2.speed;
    ellipse(circle2.x, circle2.y, circle2.size);
    if (circle2.x > width) {
        circle2.x = 0;
        circle2.y = random(200, 550);
        circle2.speed = random(5,15);
        circle2.size = random(25, 150);
    }

    // Circle 3
    circle3.x += circle3.speed;
    ellipse(circle3.x, circle3.y, circle3.size);
    if (circle3.x > width) {
        circle3.x = 0;
        circle3.y = random(200, 550);
        circle3.speed = random(2, 5);
        circle3.size = random(25, 150);
    }
}

// GAME SCENE FUNCTON --------------------------------------
function startGame() {
    move();
    display();
    sadEnding();
    happyEnding();
    runEnding();
}

function happyEnding() {
    let d = dist(user.x, user.y, lover.x, lover.y);
    if (d < user.size / 2 + lover.size / 2) {
        state = `happyEnding`;
    }
}

function sadEnding() {
    let d1 = dist(user.x, user.y, circle1.x, circle1.y);
    let d2 = dist(user.x, user.y, circle2.x, circle2.y);
    let d3 = dist(user.x, user.y, circle3.x, circle3.y);
    // let d4 = dist(user.x, user.y);

    if (d1 < user.size / 2 + circle1.size / 2
        || d2 < user.size / 2 + circle2.size / 2
        || d3 < user.size / 2 + circle3.size / 2) {
        state = `sadEnding`;
    }
}

function runEnding() {
    if (user.x < 0 || user.x > width || user.y < 0 || user.y > height) {
        state = `runEnding`;
    }
}

// STATES FUNCTON --------------------------------------
function title() {
    push();
    textStyle(BOLD);
    fill(255)
    text(`REUNITE WITH YOUR LOVER WHILE ESCAPING THE PASSERBY`,width/5,height/2.2);
    pop();

    push()
    fill('#6E2594');
    text(`Press any keys to start the game! Move with your arrow keys`,width/4,height/2);
    pop();
    textSize(24);
} 

function love() {
    fill('white');
    text(`It was fate!`, width / 2, height / 2);
}

function sadness() {
    fill('#E84C4C');
    text(`It wasn't meant to be!`, width / 2, height / 2);
}

function runningAway() {
    fill('#E84C4C');
    text(`Woa woa woa! Don't run away from your destiny! Retry.`,width/4,height/2);
}

// MOUSE FUNCTIONS --------------------------------------
function keyPressed() {
    if (state === `title`) {
        state = `startGame`;
    }
}