/**************************************************
Activity 05 : Looking for love!
Stephanie Dang
**************************************************/

let circle1 = {
    x: 0,
    y: 0,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
};

let circle2 = {
    x: 0,
    y: 0,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
};

let state = `title`;

// setup()
function setup() {
    createCanvas(500, 500);

    setupCircles();
}

function setupCircles() {
    // CIRCLE1
    circle1.x = width / 3;
    circle1.y = height / 2;
    circle1.vx = random(-circle1.speed, circle1.speed);
    circle1.vy = random(-circle1.speed, circle1.speed);

    // CIRCLE2
    circle2.x = 2 * width / 3;
    circle2.y = height / 2;
    circle2.vx = random(-circle2.speed, circle2.speed);
    circle2.vy = random(-circle2.speed, circle2.speed);
}

// draw()
function draw() {
    background(0);

    if (state === `title`) {
        title();
    } 
    else if (state === `simulation`) {
        simulation();
    } 
    else if (state === `love`) {
        love();
    } 
    else if (state === `sadness`) {
        sadness();
    }
}

// Check if gone offscreen
function sadEnding() {
    if (isOffScreen(circle1) || isOffScreen(circle2)) {
        state = `sadness`;
    }
}

// Check if circles overlap
function happyEnding() {
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < circle1.size / 2 + circle2.size / 2) {
        state = `love`;
    }
}


// Display circles
function display() {
    // CIRCLE1 ----------
    push();
    fill(255);
    ellipse(circle1.x, circle1.y, circle1.size);
    pop();

    // CIRCLE2  ---------
    push();
    fill(255, 155, 22);
    ellipse(circle2.x, circle2.y, circle2.size);
    pop();
}

// Movements of the circles
function move() {
    // CIRCLE1 ----------
    circle1.x += circle1.vx;
    circle1.y += circle1.vy;
    // circle1.x = constrain(circle1.x, 0, width);
    // circle1.y = constrain(circle1.y, 0, height);

    // CIRCLE2  ---------
    circle2.x += circle2.vx;
    circle2.y += circle2.vy;
    // circle2.x = constrain(circle2.x, 0, width);
    // circle2.y = constrain(circle2.y, 0, height);
}

function isOffScreen(circle) {
    if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height) {
        return true;
    }
    else {
        return false;
    }
}
// ---------------------------------- State functions

function title() {
    fill('pink');
    text(`Looking for love.`, width / 2, height / 2);
    fill('grey');
    text(`Press anywhere to start the simulation!`, width / 2, height / 1.5);
}

function simulation() {
    move();
    sadEnding();
    happyEnding();
    display();
}

function love() {
    text(`LOVE!`, width / 2, height / 2);
}

function sadness() {
    text(`Ripperino`, width / 2, height / 2);
}

// ---------------------------------- Mouse functions
function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}