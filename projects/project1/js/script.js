/**************************************************
Project 01 : DINO SMT SMT
Stephanie Dang

It's the end of the world! SAVE YOUR FRIENDS AND ESCAPE!
**************************************************/

"use  strict";

let state = `title`;
let myFont;
let endgame = false;
let randomX = 0;

// Sounds
let bgMusic;
let winSFX;
let loseSFX;

// Images
let imgBg;
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
    bool: false
};

// Preloading the images
function preload() {
    // Font
    myFont = loadFont(`assets/fonts/4bit.TTF`);

    // Sounds
    bgMusic = loadSound(`assets/sounds/musicBg.mp3`);
    winSFX = loadSound(`assets/sounds/win.mp3`);
    loseSFX = loadSound(`assets/sounds/end.mp3`);

    // Images
    imgBg = loadImage('assets/images/gameBg.png');

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
    playMusic();
    // User setup
    user.x = width / 2;
    user.y = height / 1.05;

    // Meteor setup
    meteor.x = width / 2;
    meteor.y = 0;

    // dinoGreen setup
    dinoGreen.x = random(10, 200);
    dinoGreen.y = height / 1.04;

    // dinoBlue setup
    dinoBlue.x = random(600, 1000);
    dinoBlue.y = height / 1.04;

    // dinoRed setup
    dinoRed.x = random(0, 300);
    dinoRed.y = height / 1.04;

    // cave setup
    cave.x = width / 1.1;
    cave.y = height / 1.1;
}

// Draw function
function draw() {
    background(imgBg);
    // States
    switch (state) {
        case `title`:
            title();
            break;
        case `instruction`:
            instruction();
            break;
        case `startGame`:
            startGame();
            break;
        case `happyEnd`:
            happyEnd();
            break;
        case `sadEnd`:
            sadEnd();
            break;
    }
}

// PLAYER MOVEMENT FUNCTION
function move() {
    // User
    if (keyIsDown(LEFT_ARROW)) {
        user.x += -user.speed;
        image(user.imgL, user.x, user.y, user.size, user.size);

    } 
    else if (keyIsDown(RIGHT_ARROW)) {
        user.x += user.speed;
        image(user.img, user.x, user.y, user.size, user.size);
    } 
    else {
        image(user.img, user.x, user.y, user.size, user.size);
    }
    user.x = constrain(user.x, 0, width / 1.05);

}

// Function that creates the dino friends
function createFriends() {
    image(dinoGreen.img, dinoGreen.x, dinoGreen.y, dinoGreen.size, dinoGreen.size);

    // If the user got his green friend, blue appear
    if (dinoGreen.bool) {
        image(dinoBlue.img, dinoBlue.x, dinoBlue.y, dinoBlue.size, dinoBlue.size);

        // if got the blue friend, red appear
        if (dinoBlue.bool) {
            image(dinoRed.img, dinoRed.x, dinoRed.y, dinoRed.size, dinoRed.size);
        }

        // Create cave!
        if (dinoRed.bool) {
            cave.bool = true;
        }
    }
}

// Function that allows the user to collide with friends
function acquiringFriends() {
    // Distance between the user and his dino friends
    let d1 = dist(user.x, user.y, dinoGreen.x, dinoGreen.y);
    let d2 = dist(user.x, user.y, dinoBlue.x, dinoBlue.y);
    let d3 = dist(user.x, user.y, dinoRed.x, dinoRed.y);

    // Touching Green dino
    if (d1 < user.size / 2 + dinoGreen.size / 2) {
        controlFriends();
        dinoGreen.bool = true;

        // Touching Blue Dino
        if (d2 < user.size / 2 + dinoBlue.size / 2) {
            dinoBlue.bool = true;
        }
        // Touching Red Dino
        if (dinoBlue.bool) {
            if (d3 < user.size / 2 + dinoRed.size / 2) {
                dinoRed.bool = true;
            }
        }
    }
}

// Function that allows the dino friends to follow the user
function controlFriends() {
    if (keyIsDown(LEFT_ARROW)) {
        // DINO GREEN
        dinoGreen.x = user.x + 40;
        image(dinoGreen.imgL, dinoGreen.x, dinoGreen.y, dinoGreen.size, dinoGreen.size);

        // DINO BLUE
        if (dinoBlue.bool) {
            dinoBlue.x = dinoGreen.x + 45;
            image(dinoBlue.imgL, dinoBlue.x, dinoBlue.y, dinoBlue.size, dinoBlue.size);
        }

        // DINO RED
        if (dinoRed.bool) {
            dinoRed.x = dinoBlue.x + 45;
            image(dinoRed.imgL, dinoRed.x, dinoRed.y, dinoRed.size, dinoRed.size);
        }
    } 
    else if (keyIsDown(RIGHT_ARROW)) {
        // DINO GREEN
        dinoGreen.x = user.x - 40;
        image(dinoGreen.img, dinoGreen.x, dinoGreen.y, dinoGreen.size, dinoGreen.size);

        // DINO BLUE
        if (dinoBlue.bool) {
            dinoBlue.x = dinoGreen.x - 45;
            image(dinoBlue.img, dinoBlue.x, dinoBlue.y, dinoBlue.size, dinoBlue.size);
        }

        // DINO RED
        if (dinoRed.bool) {
            dinoRed.x = dinoBlue.x - 45;
            image(dinoRed.img, dinoRed.x, dinoRed.y, dinoRed.size, dinoRed.size);
        }
    }
}

// Function that creates the escaping route (cave)
function createCave() {
    if (cave.bool) {
        text(`GET TO SAFETY!`, width / 2, height / 2);
        image(cave.img, cave.x, cave.y, cave.size, cave.size);
        let d = dist(user.x, user.y, cave.x, cave.y)
        if (d < user.size / 3 + cave.size / 3) {
            winSFX.play();
            state = `happyEnd`;
        }
    }
}

// METEOR MOVEMENT
function createMeteor() {
    meteor.y += meteor.speed;
    if (meteor.y > height) {
        meteor.y = 0;
        meteor.x = random(100, 999);
        meteor.speed = random(4, 15);
        randomX = random(0,800);
    }
    image(meteor.img, meteor.x, meteor.y, meteor.size, meteor.size);

    image(meteor.img, randomX, meteor.y * 1.2, meteor.size / 1.1, meteor.size / 1.1);


    // If meteor touches user, end game
    let d = dist(user.x, user.y, meteor.x, meteor.y)
    let dr = dist(user.x, user.y, randomX, meteor.y)
    if (d < user.size / 3 + meteor.size / 3 || dr < user.size / 3 + meteor.size / 3) {
        state = `sadEnd`;
    }

    // If meteor touches dino friends, end game
    if (dinoBlue.bool || dinoGreen.bool || dinoRed.bool) {
        let d1 = dist(meteor.x, meteor.y, dinoGreen.x, dinoGreen.y);
        let d2 = dist(meteor.x, meteor.y, dinoBlue.x, dinoBlue.y);
        let d3 = dist(meteor.x, meteor.y, dinoRed.x, dinoRed.y);
        let d4 = dist(randomX, meteor.y, dinoGreen.x, dinoGreen.y);
        let d5 = dist(randomX, meteor.y, dinoBlue.x, dinoBlue.y);
        let d6 = dist(randomX, meteor.y, dinoRed.x, dinoRed.y);

        if (d1 < dinoGreen.size / 2 + meteor.size / 2 || d4 < dinoGreen.size / 2 + meteor.size / 2) {
            loseSFX.play();
            state = `sadEnd`;
        }
        if (d2 < dinoBlue.size / 2 + meteor.size / 2 || d5 < dinoBlue.size / 2 + meteor.size / 2) {
            loseSFX.play();
            state = `sadEnd`;
        }
        if (d3 < dinoRed.size / 2 + meteor.size / 2 || d4 < dinoRed.size / 2 + meteor.size / 2) {
            loseSFX.play();
            state = `sadEnd`;
        }
    }
}

// Key Functions
function keyPressed() {
    if (state === `title`) {
        state = `instruction`;
    } 
    else if (state === `instruction`) {
        state = `startGame`;
    }

    // else if(state ===`sadEnd`|| state === `happyEnd`){
    //     state = `title`;
    // }
}

function playMusic() {
    if (!bgMusic.isPlaying()) {
        bgMusic.loop();
    }
}