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
    img: undefined,
    imgL: undefined,
    bool: false
};

let dinoBlue = {
    x: 0,
    y: 0,
    size: 40,
    speed: 4,
    img: undefined,
    imgL: undefined,
    bool: false
};

let dinoRed = {
    x: 0,
    y: 0,
    size: 40,
    speed: 4,
    img: undefined,
    imgL: undefined,
    bool: false
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
    img: undefined,

}

function preload() {

    imgBg = loadImage('assets/images/gameBg.png');
    imgCloud1.img = loadImage('assets/images/cloud1.png');
    imgCloud2.img = loadImage('assets/images/cloud2.png');

    user.img = loadImage(`assets/images/dinoYellow.png`);
    user.imgL = loadImage(`assets/images/dinoYellow2.png`);

    dinoGreen.img = loadImage(`assets/images/dinoGreen.png`);
    dinoGreen.imgL = loadImage(`assets/images/dinoGreen2.png`);

    dinoBlue.img = loadImage(`assets/images/dinoBlue.png`);
    dinoBlue.imgL = loadImage(`assets/images/dinoBlue2.png`);

    dinoRed.img = loadImage(`assets/images/dinoRed.png`);
    dinoRed.imgL = loadImage(`assets/images/dinoRed2.png`);

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
    dinoBlue.x = 600;
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
    createFriends();
    acquiringFriends();
    createMeteor();
}

// PLAYER MOVEMENT ------------------------------------------
function move() {
    // User
    if (keyIsDown(LEFT_ARROW)) {
        user.x += -user.speed;
        image(user.imgL, user.x, user.y, user.size, user.size);
        
    } else if (keyIsDown(RIGHT_ARROW)) {
        user.x += user.speed;
        image(user.img, user.x, user.y, user.size, user.size);
    }
    else {
        image(user.img, user.x, user.y, user.size, user.size);
    }
    user.x = constrain(user.x, 0, width / 1.05);

}

// RESCUING -------------------------------------------
function createFriends() {
image(dinoGreen.img, dinoGreen.x, dinoGreen.y, dinoGreen.size, dinoGreen.size);
image(dinoBlue.img, dinoBlue.x, dinoBlue.y, dinoBlue.size, dinoBlue.size);
image(dinoRed.img, dinoRed.x, dinoRed.y, dinoRed.size, dinoRed.size);

}

function acquiringFriends() {
    let d1 = dist(user.x, user.y, dinoGreen.x, dinoGreen.y);
    let d2 = dist(user.x, user.y, dinoBlue.x, dinoBlue.y);
    let d3 = dist(user.x, user.y, dinoRed.x, dinoRed.y);

    if(d1 < user.size / 2 + dinoGreen.size / 2) {
        // Green dino
        controlFriends();
        dinoGreen.bool = true;
        // Display Blue dino 
        if(d2 < user.size / 2 + dinoBlue.size / 2) {
        dinoBlue.bool = true;

        }
        if(dinoBlue.bool) {
            if(d3 < user.size / 2 + dinoRed.size / 2) {
                dinoRed.bool = true;
            }
        }  
    }
}


function controlFriends() {
    if (keyIsDown(LEFT_ARROW)) {
        // DINO GREEN
        dinoGreen.x = user.x + 40;
        image(dinoGreen.imgL, dinoGreen.x, dinoGreen.y, dinoGreen.size, dinoGreen.size);

        // DINO BLUE
        if(dinoBlue.bool) {
            dinoBlue.x = dinoGreen.x + 45;
            image(dinoBlue.imgL, dinoBlue.x, dinoBlue.y, dinoBlue.size, dinoBlue.size);
        }

        // DINO RED
        if(dinoRed.bool) {
            dinoRed.x = dinoBlue.x + 45;
            image(dinoRed.imgL, dinoRed.x, dinoRed.y, dinoRed.size, dinoRed.size);
        }
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        // DINO GREEN
        dinoGreen.x = user.x - 40;
        image(dinoGreen.img, dinoGreen.x, dinoGreen.y, dinoGreen.size, dinoGreen.size);

        // DINO BLUE
        if(dinoBlue.bool) {
            dinoBlue.x = dinoGreen.x - 45;
            image(dinoBlue.img, dinoBlue.x, dinoBlue.y, dinoBlue.size, dinoBlue.size);
        }

        // DINO RED
        if(dinoRed.bool) {
            dinoRed.x = dinoBlue.x - 45;
            image(dinoRed.img, dinoRed.x, dinoRed.y, dinoRed.size, dinoRed.size);
        }
    }
}


// Cave appears only when the user collects all his friends
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
