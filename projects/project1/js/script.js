/**************************************************
Project 01 : DINOTUBBIES
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
    visible: false
};

let dinoBlue = {
    x: 0,
    y: 0,
    size: 40,
    speed: 4,
    img: undefined,
    imgL: undefined,
    visible: false
};

let dinoRed = {
    x: 0,
    y: 0,
    size: 40,
    speed: 4,
    img: undefined,
    imgL: undefined,
    visible: false
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
    visible: false
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
    // User setup
    user.x = width / 2;
    user.y = height / 1.05;

    // Meteor setup
    meteor.x = width / 2;
    meteor.y = 0;

    // dinoGreen setup
    dinoGreen.x = random(50, 200);
    dinoGreen.y = height / 1.04;

    // dinoBlue setup
    dinoBlue.x = random(600, 900);
    dinoBlue.y = height / 1.04;

    // dinoRed setup
    dinoRed.x = random(0, 300);
    dinoRed.y = height / 1.04;

    // cave setup
    cave.x = width / 1.1;
    cave.y = height / 1.1;

    // sound settings
    bgMusic.setVolume(0.3);
    loseSFX.setVolume(0.4);
    winSFX.setVolume(0.4);
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
    if (dinoGreen.visible) {
        image(dinoBlue.img, dinoBlue.x, dinoBlue.y, dinoBlue.size, dinoBlue.size);

        // if got the blue friend, red appear
        if (dinoBlue.visible) {
            image(dinoRed.img, dinoRed.x, dinoRed.y, dinoRed.size, dinoRed.size);
        }

        // Create cave!
        if (dinoRed.visible) {
            cave.visible = true;
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
        dinoGreen.visible = true;

        // Touching Blue Dino
        if (d2 < user.size / 2 + dinoBlue.size / 2) {
            dinoBlue.visible = true;
        }
        // Touching Red Dino
        if (dinoBlue.visible) {
            if (d3 < user.size / 2 + dinoRed.size / 2) {
                dinoRed.visible = true;
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
        if (dinoBlue.visible) {
            dinoBlue.x = dinoGreen.x + 45;
            image(dinoBlue.imgL, dinoBlue.x, dinoBlue.y, dinoBlue.size, dinoBlue.size);
        }

        // DINO RED
        if (dinoRed.visible) {
            dinoRed.x = dinoBlue.x + 45;
            image(dinoRed.imgL, dinoRed.x, dinoRed.y, dinoRed.size, dinoRed.size);
        }
    } 
    else if (keyIsDown(RIGHT_ARROW)) {
        // DINO GREEN
        dinoGreen.x = user.x - 40;
        image(dinoGreen.img, dinoGreen.x, dinoGreen.y, dinoGreen.size, dinoGreen.size);

        // DINO BLUE
        if (dinoBlue.visible) {
            dinoBlue.x = dinoGreen.x - 45;
            image(dinoBlue.img, dinoBlue.x, dinoBlue.y, dinoBlue.size, dinoBlue.size);
        }

        // DINO RED
        if (dinoRed.visible) {
            dinoRed.x = dinoBlue.x - 45;
            image(dinoRed.img, dinoRed.x, dinoRed.y, dinoRed.size, dinoRed.size);
        }
    }
}

// Function that creates the escaping route (cave)
function createCave() {
    if (cave.visible) {
        push();
        textSize(24);
        commonTextStyle();
        strokeWeight(2);
        fill(`FFFFFF`);
        text(`GET TO SAFETY!`, width / 2, height / 2);
        pop();

        image(cave.img, cave.x, cave.y, cave.size, cave.size);
        let d = dist(user.x, user.y, cave.x, cave.y)
        if (d < user.size / 3 + cave.size / 3) {
            winSFX.play();
            state = `happyEnd`;
        }
    }
}

// Meteor movement
function createMeteor() {
    meteor.y += meteor.speed;
    if (meteor.y > height) {
        meteor.y = 0;
        meteor.x = random(100, 999);
        meteor.speed = random(4, 15);
        randomX = random(0,800);
    }

    imageMode(CENTER);
    image(meteor.img, meteor.x, meteor.y, meteor.size, meteor.size);
    image(meteor.img, randomX, meteor.y * 1.2, meteor.size, meteor.size );

    // If meteors touch user, end game
    let d = dist(user.x, user.y, meteor.x, meteor.y)
    let dr = dist(user.x, user.y, randomX, meteor.y)
    if (d < user.size / 3 + meteor.size / 3 || dr < user.size / 3 + meteor.size / 3) {
        loseSFX.play();
        state = `sadEnd`;
        print('user dead');
    }

    // If meteors touch dino friends, end game
    if(dinoGreen.visible) {
        let d1 = dist(meteor.x, meteor.y, dinoGreen.x, dinoGreen.y);
        let d4 = dist(randomX, meteor.y * 1.2, dinoGreen.x, dinoGreen.y);
        if (d1 < dinoGreen.size / 2 + meteor.size / 2 || d4 < dinoGreen.size / 2 + meteor.size / 2) {
            loseSFX.play();
            state = `sadEnd`;
            print('green dead');
        }
    }

    if(dinoBlue.visible) {
        let d2 = dist(meteor.x, meteor.y, dinoBlue.x, dinoBlue.y);
        let d5 = dist(randomX, meteor.y * 1.2, dinoBlue.x, dinoBlue.y);
        if (d2 < dinoBlue.size / 2 + meteor.size / 2 || d5 < dinoBlue.size / 2 + meteor.size / 2) {
            loseSFX.play();
            state = `sadEnd`;
            print('blue dead');
        }
    }

    if(dinoRed.visible) {
        let d3 = dist(meteor.x, meteor.y, dinoRed.x, dinoRed.y);
        let d6 = dist(randomX, meteor.y * 1.2, dinoRed.x, dinoRed.y);
        if (d3 < dinoRed.size / 2 + meteor.size / 2 || d6 < dinoRed.size / 2 + meteor.size / 2) {
            loseSFX.play();
            state = `sadEnd`;
            print('red dead');
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
        playMusic();
    }
}

// Play music in loop
function playMusic() {
    if (!bgMusic.isPlaying()) {
        bgMusic.loop();
    }
}