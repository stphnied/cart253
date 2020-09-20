/**************************************************
EXERCISE 01 : I like to move it move it!
Stephanie Dang

Among us crime scene!
(This exercise was inspired by the game 'Among us')

**************************************************/

// Environment objects 
let bg = {
    r: 17,
    g: 32,
    b: 87
};

let floor = {
    x: 0,
    y: 0,
    w: 0,
    h: 400,
    r: 0,
    fill: 0
}

let windowWall = {
    x: 0,
    y: 0,
    w: 0,
    h: 300,
    r: 0,
    fill: 0
}

let star = {
    x: 0,
    y: 0,
    size: 1
};

let cloud = {
    x:0,
    y:50,
    w:60,
    h:60,
    fill:255,
    speed: 100
};

// Imposter objects
let body = {
    x: 0,
    y: 0,
    w: 200,
    h: 310,
    r: 80,
    fill: 0
};

let legs = {
    x: 0,
    y: 0,
    w: 70,
    h: 235,
    r: 30,
    fill: 0
};

let face = {
    x: 0,
    y: 0,
    w: 150,
    h: 70,
    r: 30,
    fill: 0
};

let backpack = {
    x: 0,
    y: 0,
    w: 80,
    h: 200,
    r: 30,
    fill: 0
};


// Corpse objects
let deadBody = {
    x: 0,
    y: 0,
    w: 300,
    h: 175,
    r: 80,
    fill: 0
};

let deadLegs = {
    x: 0,
    y: 0,
    w: 70,
    h: 235,
    r: 30,
    fill: 0
};

let bones = {
    x: 0,
    y: 0,
    w: 130,
    h: 50,
    r: 20,
    fill: 255
};

let bonesCircle = {
    x: 500,
    y: 250,
    size: 50
};

let shadow = {
    x: 0,
    y: 0,
    w: 270,
    h: 35,
    r: 100,
    fill: 0
};

let deadShadow = {
    x: 0,
    y: 0,
    w: 220,
    h: 20,
    r: 100,
    fill: 0
};

// Colors
let red = {
    r: 242,
    g: 23,
    b: 23
};

let blue = {
    r: 117,
    g: 219,
    b: 244
};

let teal = {
    r: 27,
    g: 255,
    b: 255
};

let changeDirection;

// Setting the canvas dimension -----------------------------------------------------------------
function setup() {
    createCanvas(windowWidth, windowHeight);
    changeDirection = false;
}

// Draw crime scene
function draw() {
    // Background color
    bg.r = map(mouseY, 0, width, 10, 50);
    bg.g = map(mouseY, 0, width, 0, 100);
    bg.b = map(mouseY, 0, width, 50, 255);
    background(bg.r, bg.g, bg.b);

    // Calling functions 
    createEnvironment();
    noStroke();
    createImposter();
    createCorpse();
}

// Draw the environment objects ----------------------------------------------------------------
function createEnvironment() {

    // Stars
    star.x = random(width);
    star.y = random(height);
    star.size = random(2, 10);
    ellipse(mouseX, mouseY, star.size, star.size);
    ellipse(star.x, star.y, star.size, star.size);

    // Cloud 01
    translate(cloud.x);
    fill(cloud.fill);

    cloud.x = 110;
    cloud.x += cloud.speed;
    cloud.y = 55;
    cloud.w = 60;
    cloud.h = 70;
    ellipse(cloud.x, cloud.y, cloud.w, cloud.h); //Top center

    cloud.x = 130;
    cloud.x += cloud.speed;
    cloud.y = 60;
    cloud.h = 40;
    ellipse(cloud.x, cloud.y, cloud.w, cloud.h); //Center right

    fill(cloud.fill);
    cloud.x = 80;
    cloud.x += cloud.speed;
    cloud.w = 45;
    cloud.h = 30;
    ellipse(cloud.x, cloud.y, cloud.w, cloud.h); //Center left

    fill(cloud.fill);
    cloud.x = 135;
    cloud.x += cloud.speed;
    cloud.y = 45;
    cloud.w = 20;
    cloud.h = 20;
    ellipse(cloud.x, cloud.y, cloud.w, cloud.h); //Top right

    fill(cloud.fill);
    cloud.x = 85;
    cloud.x += cloud.speed;
    cloud.y = 70;
    ellipse(cloud.x, cloud.y, cloud.w, cloud.h); //Bottom left


    // Cloud 02
    cloud.x = 310;
    cloud.x += cloud.speed;
    cloud.y = 300;
    cloud.w = 80;
    cloud.h = 80;
    ellipse(cloud.x, cloud.y, cloud.w, cloud.h); //Top center

    cloud.x = 330;
    cloud.x += cloud.speed;
    cloud.y = 325;
    cloud.h = 65;
    cloud.w = 75;
    ellipse(cloud.x, cloud.y, cloud.w, cloud.h); //Center right

    fill(cloud.fill);
    cloud.x = 280;
    cloud.x += cloud.speed;
    cloud.w = 85;
    cloud.h = 70;
    ellipse(cloud.x, cloud.y, cloud.w, cloud.h); //Center left

    fill(cloud.fill);
    cloud.x = 335;
    cloud.x += cloud.speed;
    cloud.y = 290;
    cloud.w = 50;
    cloud.h = 50;
    ellipse(cloud.x, cloud.y, cloud.w, cloud.h); //Top right

    fill(cloud.fill);
    cloud.x = 285;
    cloud.x += cloud.speed;
    cloud.y = 320;
    ellipse(cloud.x, cloud.y, cloud.w, cloud.h); //Bottom left

    // Moves the cloude back and forth
    // Code inspired by : cmorgantywls

    // If it passes the width changeDirection = true
    // Else = false
    if(cloud.x > width + 100){
        changeDirection = true;
    } 
    else if (cloud.x <=0 ) {
        changeDirection = false;
    }

    //  If changeDirection is false : go forwards
    // Else go backwards
    if (changeDirection == false) {
        // cloud.x += cloud.speed;
        cloud.speed += 2;
    } 
    else if (changeDirection == true) {
        cloud.x -= cloud.speed;
        cloud.speed += -1.5;
    }

    //Window frame
    windowWall.y = 0;
    windowWall.w = width;
    windowWall.h = height / 1.3;
    strokeWeight(10);
    stroke('lightgrey');
    noFill();
    rect(windowWall.x, windowWall.y, windowWall.w, windowWall.h);

    // Floor
    floor.y = height / 1.75;
    floor.w = width;
    fill('grey');
    rect(floor.x, floor.y, floor.w, floor.h);
} // end of function


// Draw imposter character ----------------------------------------------------------------
function createImposter() {

    // Hat
    rectMode(CENTER);
    fill('green');
    beginShape();     // Leaves
    vertex(body.x, body.y / 2);
    quadraticVertex(800, 250, 800, 200);
    endShape(CLOSE)
    rectMode(CENTER);
    rect(body.x, body.y / 1.75, 15, 100, 20);     // Stem


    // Body
    body.x = width / 2;
    body.y = height / 2;
    red.r = 167,
    red.g = 10;
    red.b = 10;
    fill(red.r, red.g, red.b);
    rect(body.x, body.y, body.w, body.h, body.r);

    // Shadow
    shadow.x = width / 2;
    shadow.y = body.y * 1.5;
    fill(0, 75);
    ellipse(shadow.x, shadow.y, shadow.w, shadow.h);


    // Backpack
    backpack.x = body.x / 1.14;
    backpack.y = body.y * 1.1;
    fill(red.r, red.g, red.b);
    rect(backpack.x, backpack.y, backpack.w, backpack.h, backpack.r);

    // Leg (left)
    legs.x = body.x / 1.065;
    legs.y = body.y * 1.25;
    rect(legs.x, legs.y, legs.w, legs.h, legs.r);

    // Leg (right)
    legs.x = body.x * 1.07;
    legs.y = body.y * 1.25;
    rect(legs.x, legs.y, legs.w, legs.h, legs.r);

    // Body (lighten)
    rectMode(CORNER);
    red.r = 242,
    red.g = 23;
    red.b = 23;
    fill(red.r, red.g, red.b);
    rect(body.x / 1.12, body.y / 1.5, body.w / 1.05, body.h / 1.05, body.r);

    // Face
    rectMode(CORNER);
    face.x = body.x / 1.05;
    face.y = body.y / 1.2;
    blue.r = 117;
    blue.g = 219;
    blue.b = 244;
    fill(blue.r, blue.g, blue.b);
    rect(face.x, face.y, face.w, face.h, face.r);

    // Face (lighten)
    face.x = body.x - 5;
    face.y = body.y / 1.2;
    face.y = constrain(mouseY, face.y, face.y + 25);
    face.x = constrain(mouseX, face.x - 15, face.x);
    fill(255);
    rect(face.x, face.y, face.w * 0.7, face.h * 0.5, face.r);

} // end of function


// Draw dead body ----------------------------------------------------------------------------
function createCorpse() {

    // Leg (Top)
    deadLegs.x = deadBody.x * 1.12;
    deadLegs.y = deadBody.y * 1.06;
    deadLegs.w = 225;
    deadLegs.h = 40;
    fill(teal.r, teal.g / 1.5, teal.b / 1.5);
    rect(deadLegs.x, deadLegs.y, deadLegs.w, deadLegs.h, deadLegs.r);

    // Shadow
    deadShadow.x = deadBody.x * 1.15;
    deadShadow.y = deadBody.y * 1.25;
    deadShadow.r = 2;
    deadShadow.w = 450;
    deadShadow.h = 100;
    fill(0, 75);
    ellipse(deadShadow.x, deadShadow.y, deadShadow.w, deadShadow.h, deadShadow.r);

    // Body
    deadBody.x = width / 1.5;
    deadBody.y = height / 1.5;
    fill(teal.r, teal.g, teal.b);
    rect(deadBody.x, deadBody.y, deadBody.w, deadBody.h, deadBody.r);

    // Leg (Bottom)
    deadLegs.x = deadBody.x * 1.12;
    deadLegs.y = deadBody.y * 1.12;
    deadLegs.w = 235;
    deadLegs.h = 60;
    fill(teal.r, teal.g, teal.b);
    rect(deadLegs.x, deadLegs.y, deadLegs.w, deadLegs.h, deadLegs.r);

    // Body (Darken)
    fill(teal.r, teal.g / 1.5, teal.b / 1.5);
    rect(deadBody.x, deadBody.y, deadBody.w / 2, deadBody.h, deadBody.r);

    // Bone (core)
    bones.x = deadBody.x / 1.05;
    bones.y = deadBody.y * 1.1;
    fill(255);
    rect(bones.x, bones.y, bones.w, bones.h, bones.r);

    // Bone (top)
    bonesCircle.x = bones.x * 1;
    bonesCircle.y = bones.y;
    ellipse(bonesCircle.x, bonesCircle.y, bonesCircle.size);

    //Bone (bottom)
    bonesCircle.y = bones.y * 1.07;
    ellipse(bonesCircle.x, bonesCircle.y, bonesCircle.size);

} // end of function