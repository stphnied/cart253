let circle = {
    x: 250,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
    chasingMouse();
    
    // let changeDirection = random();

    // if (changeDirection < 0.05) {
    //     circle.vx = random(-circle.speed, circle.speed);
    //     circle.vy = random(-circle.speed, circle.speed);
    // }

}

function chasingMouse() {
    let dx = circle.x - mouseX; // Distance between the circle and the mouse horizontally
    let dy = circle.y - mouseY; // Distance between the circle and the mouse vertically

    if (dx < 0) { // If dx is negative, the mouse is to the right
        // So move right
        circle.vx = circle.speed;
    } else if (dx > 0) { // If dx is positive, the mouse is to the left
        // So move left
        circle.vx = -circle.speed;
    }

    // Same again for the y axis
    if (dy < 0) {
        circle.vy = circle.speed;
    } else if (dy > 0) {
        circle.vy = -circle.speed;
    }

    circle.x += circle.vx;
    circle.y += circle.vy;

    circle.x = constrain(circle.x, 0, width);
    circle.y = constrain(circle.y, 0, height);

    ellipse(circle.x, circle.y, circle.size);

}