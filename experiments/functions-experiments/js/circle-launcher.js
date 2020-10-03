let circle1 = {
    x: 250,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0
}

function setup() {
    createCanvas(500, 500)
    reset();
}

function draw() {
    background(0);

    move();
    checkOffScreen();
    display();
}

function move() {
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;
}

function reset() {
    circle1.x = 250;
    circle1.y = 250;
    circle1.vx = random(-10, 10);
    circle1.vy = random(-10, 10);
}

function display() {
    fill(255);
    ellipse(circle1.x, circle1.y, circle1.size);
}

function checkOffScreen() {
    let offScreen = circleIsOffScreen();
    if (offScreen) {
        reset();
    }
}

function circleIsOffScreen() {
        if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height) {
            return true;
        }

        else {
            return false;
        }
}