/**************************************************
Conditionals experiments
Stephanie Dang

Here is a description of this template p5 project.
**************************************************/
let backgroundShade = 0;

let bg = {
    r: 0,
    g: 0,
    b: 0
}

let circle = {
    x: 100,
    y: 250,
    size: 100,
    speed: 5
}

let circle06 = {
    x: 250,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    acceleration: 0.1,
    maxSpeed: 5
}

let displayCircle = false;

let caterpillar = {
    x: 100,
    y: 250,
    segmentSize: 50
}

let angle = 0;
let rectScale = 1;
let imgClown;
let clown = {
    x:250,
    y:250,
    size:100,
    image:undefined
};

function preload() {
    imgClown = loadImage('assets/images/clown.png');
    clown.image = loadImage('assets/images/clown.png');
}



// setup()
function setup() {
    createCanvas(500, 500);

}

// draw()
function draw() {
    background(bg.r, bg.g, bg.b);
    noStroke();
    // video01();
    // video02();
    // video03();
    // video04();
    // video05();
    // video06();
    video07();
    // Video 08 = activity04
    video09();
    video10();

}

// If, else if, else
function video01() {
    circle.x += circle.speed;
    // change direction of the circle movement
    if (circle.x > width) {
        circle.speed = -circle.speed;
    } else if (circle.x <= 0) {
        circle.speed = -circle.speed;
    }

    // change circle color depending on mouseY position
    if (mouseY < height / 2) {
        fill(255, 0, 0);
    } else if (mouseY > height / 2) {
        fill(0, 0, 255);
    }

    ellipse(circle.x, circle.y, circle.size);
}

// &&, ||, !(())
function video02() {
    circle.x += circle.speed;

    fill('white');

    if (circle.x > width / 3 && circle.x < 2 * width / 3) {
        fill('pink');
    }

    ellipse(circle.x, circle.y, circle.size);

}

// Bool
function video03() {
    if (mouseIsPressed) {
        displayCircle = true;
    }
    if (displayCircle) {
        fill('white');
        ellipse(250, 250, 100, 100);
    }
}

// Loop
function video04() {
    fill(100, 200, 100);
    let x = caterpillar.x;
    let numSeg = 5;
    let segDrawn = 0;

    // while (segDrawn < numSeg) {
    //     ellipse(x, caterpillar.y, caterpillar.segmentSize);
    //     x += 40;
    //     segDrawn++;
    // }

    for (let i = 0; i < 5; i++) {
        x += 40;
        ellipse(x, caterpillar.y, caterpillar.segmentSize);
    }

}

// Mouse input 
function video05() {
    fill('white');
    ellipse(circle.x, circle.y, circle.size);
}

// Mouse input 
function mousePressed() {
    // circle.x = mouseX;
    // circle.y = mouseY;
    // bg.r = random(0,255);
    // bg.g = random(0,255);
    // bg.g = random(0,255);
}

// Movement
function video06() {

    // to the left of the circle

    if (mouseX < circle06.x) {
        circle06.ax = -circle06.acceleration;
    } else {
        circle06.ax = circle06.acceleration;
    }

    // Higher up than the circle
    if (mouseY < circle06.y) {
        circle06.ay = -circle06.acceleration;
    } else {
        circle06.ay = circle06.acceleration;
    }


    // Update the position
    circle06.vx += circle06.ax;
    circle06.vx = constrain(circle06.vx, -circle06.maxSpeed, circle06.maxSpeed);
    circle06.vy += circle06.ay
    circle06.vy = constrain(circle06.vy, -circle06.maxSpeed, circle06.maxSpeed);

    circle06.x += circle06.vx;
    circle06.y += circle06.vy;

    ellipse(circle06.x, circle06.y, circle06.size);
}


// Intermediate drawing
function video07() {

    // Translation
    push();
    fill(255, 0, 0);
    stroke(0, 255, 255);
    strokeWeight(10);
    rect(100, 100, 100, 100);
    pop();

    push();
    translate(200, 100);
    fill(0, 255, 0);
    rect(100, 100, 100, 100);
    pop();

    push();
    translate(0, 200);
    fill(0, 0, 255);
    rect(100, 100, 100, 100);
    pop();


    // Rotation
    push();
    fill(255, 100, 100);
    rectMode(CENTER);
    translate(width / 2, height / 2);
    rotate(angle); //radians or PI/4
    scale(rectScale);
    rect(0, 0, 100, 100);
    pop();

    angle += 0.02;
    rectScale += 0.01;
}

// Image
function video09() {
    image(imgClown, mouseX, mouseY, 50, 50);
}


// Time
function video10() {
    clown.x = mouseX;
    clown.y = mouseY;
    imageMode(CENTER);
    image(clown.image, clown.x, clown.y, clown.size, clown.size);
}