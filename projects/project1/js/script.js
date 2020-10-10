/**************************************************
Project 01 
Stephanie Dang

It's the end of the world! SAVE YOUR FRIENDS!
**************************************************/

"use  strict";

// Images
let imgBg;
let imgCloud1 = {
    x: 0,
    y: 0,
    size: 100,
    img: undefined
};

let imgCloud2 = {
    x: 0,
    y: 0,
    size: 100,
    img: undefined
};

let user = {
    x: 0,
    y: 0,
    size: 50,
    speed: 4,
    img: undefined,
    imgL: undefined
};

let dinoGreen = {
    x: 0,
    y: 0,
    size: 40,
    speed: 4,
    img: undefined
};

let dinoBlue = {
    x: 0,
    y: 0,
    size: 40,
    speed: 4,
    img: undefined
};

let dinoRed = {
    x: 0,
    y: 0,
    size: 40,
    speed: 4,
    img: undefined
};

let meteor = {
    x: 0,
    y: 0,
    size: 100,
    speed: 4,
    img: undefined
};

let cave = {
    x: 0,
    y: 0,
    size: 100,
    img: undefined
}

function preload() {

    imgBg = loadImage('assets/images/gameBg.png');
    imgCloud1.img = loadImage('assets/images/cloud1.png');
    imgCloud2.img = loadImage('assets/images/cloud2.png');

    user.img = loadImage(`assets/images/dinoYellow.png`);
    user.imgL = loadImage(`assets/images/dinoYellow2.png`);

    dinoGreen.img = loadImage(`assets/images/dinoGreen.png`);
    dinoBlue.img = loadImage(`assets/images/dinoBlue.png`);
    dinoRed.img = loadImage(`assets/images/dinoRed.png`);

    meteor.img = loadImage(`assets/images/meteor.png`);
    cave.img = loadImage(`assets/images/cave.png`);
}

// Setting up the game
function setup() {
    createCanvas(1000, windowHeight);
    // User setup
    user.x = width / 2;
    user.y = height / 1.05;

    // Meteor setup
    meteor.x = width / 2;
    meteor.y = 0;

    // dinoGreen setup
    dinoGreen.x = 100;
    dinoGreen.y = height/1.04;
    // dinoBlue setup
    dinoBlue.x = 100;
    dinoBlue.y = height/1.04;
    // dinoRed setup
    dinoRed.x = 100;
    dinoRed.y = height/1.04;

    // cave setup
    cave.x = width/1.1;
    cave.y = height/1.1;
}

// Draw function
function draw() {
    background(imgBg);
    createCave()
    move();
    createMeteor();
    createFriends();

}

// PLAYER MOVEMENT ------------------------------------------
function move() {
    // User
    if (keyIsDown(LEFT_ARROW)) {
        user.x += -user.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
        user.x += user.speed;
    }
    user.x = constrain(user.x, 0, width / 1.05);
    image(user.img, user.x, user.y, user.size, user.size);
}

// RESCUING -------------------------------------------
function createFriends() {

    // Green friend
    dinoGreen.x = user.x - 40;
    image(dinoGreen.img, dinoGreen.x, dinoGreen.y, dinoGreen.size, dinoGreen.size);
    // Blue friend
    dinoBlue.x = dinoGreen.x -45;
    image(dinoBlue.img, dinoBlue.x, dinoBlue.y, dinoBlue.size, dinoBlue.size);
    // Red friend
    dinoRed.x = dinoBlue.x - 45;
    image(dinoRed.img, dinoRed.x, dinoRed.y, dinoRed.size, dinoRed.size);

}




// Opening cave
function createCave() {
    image(cave.img, cave.x, cave.y, cave.size, cave.size);

}

// METEOR MOVEMENT ------------------------------------------
function createMeteor() {
    meteor.y += meteor.speed;
    if (meteor.y > height) {
        meteor.y = 0;
        meteor.x = random(0, 999);
        meteor.speed = random(4, 15);
    }
    image(meteor.img, meteor.x, meteor.y, meteor.size, meteor.size);
}