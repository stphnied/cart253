"use strict";

/**************************************************
Exercise 04: The Age of a Spooky Aquarium
Stephanie Dang
**************************************************/

// -------------------------------------VARIABLES
let shark = {
    x: 0,
    y: 0,
    size: 200,
    vx: 0,
    vy: 0,
    speed: 4,
    img: undefined
};
let candyImg;
let user = {
    x: 0,
    y: 0,
    size: 100,
    img: undefined
};
let school = [];
let schoolSize = 15;
let state = `intro`;
let myFont;

// preloading assets
function preload() {
    // Images
    shark.img = loadImage(`assets/images/sharkie.png`);
    user.img = loadImage(`assets/images/user.png`);
    candyImg = loadImage(`assets/images/candy.png`);
    // Font
    myFont = loadFont(`assets/font/Sofia.OTF`);
}

// ------------------------------------- FUNCTIONS
function setup() {
    createCanvas(windowWidth, 750);
    noCursor();

    // Spawn candies randomly
    for (let i = 0; i < schoolSize; i++) {
        let candy = createCandy(random(0, width), random(0, height));
        school.push(candy);
    }

    // Shark start position
    shark.x = width/4;
    shark.y = height/4;
}

// draw()
function draw() {
    background(`#00003f`);

    // States 
    switch (state) {
        case `intro`:
            intro();
            break;
        case `gameplay`:
            gameplay();
            break;
        case `goodEnd`:
            goodEnd();
            break;
        case `badEnd`:
            badEnd();
            break;
    }
}

// -------------------------------------PLAYER FUNCTIONS
function moveUser() {
    push();
    noStroke();
    fill(`#fbaf06`);
    image(user.img, mouseX, mouseY, user.size, user.size);
    pop();
}

// -------------------------------------CANDY FUNCTIONS
// Creates the Candies
function createCandy(x, y) {
    let candy = {
        x: x,
        y: y,
        size: 50,
        speed: 2,
        vx: 0,
        vy: 0,
        img: candyImg,
        eaten: false
    };
    return candy;
}

// Moving the candies randomly
function moveCandy(candy) {
    let change = random(0, 1);
    if (change < 0.05) {
        candy.vx = random(-candy.speed, candy.speed);
        candy.vy = random(-candy.speed, candy.speed);
    }

    // Move the candy
    candy.x = candy.x + candy.vx;
    candy.y = candy.y + candy.vy;

    // Constrain the candy within canvas
    candy.x = constrain(candy.x, 0, width);
    candy.y = constrain(candy.y, 0, height);

}

// Check if the candies were eaten or not
function checkCandy(candy) {
    if (!candy.eaten) {
        let d = dist(mouseX, mouseY, candy.x, candy.y);
        if (d < user.size / 2 + candy.size / 2) {
            candy.eaten = true;
            schoolSize--;
        }
    }

    if (schoolSize === 0) {
        state = `goodEnd`;
    }
}

// Displays the candies 
function displayCandy(candy) {
    if (!candy.eaten) {
        push();
        fill(200, 100, 100);
        noStroke();
        image(candyImg, candy.x, candy.y, candy.size, candy.size);
        pop();
    }
}

// -------------------------------------SHARK FUNCTIONS
function displayShark() {
    push();
    noStroke();
    fill(`#fbaf06`);
    image(shark.img, shark.x, shark.y, shark.size, shark.size);
    pop();
}

function moveShark() {
    let change = random(0, 2);
    if (change < 0.05) {
        shark.vx = random(-shark.speed, shark.speed);
        shark.vy = random(-shark.speed, shark.speed);
    }

    // Move the shark
    shark.x = shark.x + shark.vx;
    shark.y = shark.y + shark.vy;

    // Constrain the shark within the canvas
    shark.x = constrain(shark.x, 0, width);
    shark.y = constrain(shark.y, 0, 600);
}

// If touches shark, user dies
function checkShark() {
    let d1 = dist(mouseX, mouseY, shark.x, shark.y);
    if (d1 < user.size / 2 + shark.size / 4) {
        state = `badEnd`;
    }
}

// -------------------------------------STATE FUNCTIONS
function intro() {
    push();
    fill(`#ff6500`);
    writeText(`THE AGE OF A SPOOPY AQUARIUM`, width / 2, height / 2, 64)
    pop();

    push();
    fill(255);
    writeText(`COLLECT ALL CANDIES BEFORE THE WITCH CATCHES YOU!`, width / 2, height / 1.75, 24)
    pop();

    push();
    fill(0, 102, 153, 90);
    writeText('PRESS TO START', width / 2, height / 1.3, 32);
    writeText(`Use your mouse to collect the candies`, width / 2, height / 1.2, 24);
    pop();
}

function gameplay() {
    moveUser();
    displayShark();
    moveShark();
    checkShark();

    for (let i = 0; i < school.length; i++) {
        checkCandy(school[i]);
        moveCandy(school[i]);
        displayCandy(school[i]);
    }
}

function goodEnd() {
    push();
    fill(`#ff6500`);
    writeText(`HAPPY HALLOWEEN !`, width / 2, height / 2, 64)
    pop();
}

function badEnd() {
    push();
    fill(`#1F6941`);
    writeText(`I GUESS THE WITCH GOT THEIR TREAT`, width / 2, height / 2, 32)
    fill(0, 102, 153, 90);
    writeText(`REFRESH PAGE TO RETRY`,width/2,height/1.75,24)
    pop();
}

// -------------------------------------TEXT FUNCTIONS
function writeText(myText, x, y, size) {
    textAlign(CENTER, CENTER);
    textFont(myFont);
    textSize(size);
    text(myText, x, y);
}

// -------------------------------------KEY/MOUSE FUNCTIONS
function mousePressed() {
    if (state === `intro`) {
        state = `gameplay`;
    }
}