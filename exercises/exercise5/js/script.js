"use strict";
/**************************************************
Activity : Juggling simulation
Stephanie Dang

Apple picking but with a twist... they bounce back!
**************************************************/

// Variables
let gravityForce = 0.0025;  // Gravity
let basket;                 // Catching apple

let apples = [];            // Array to generate apples
let numApples = 0;          // Number of apple generating
let caughtApples = 0;       // Counter for apple  caught
let imgBg;                  // Image background for gameplay

let gameOverTimer = 0;      // Timer to count the number of frames
let gameLength = 60*15;     // Game duration (15sec)
let gameCounter = 10;



let state = 'intro';        //States of game

// Preloading background img
function preload() {
    imgBg = loadImage('assets/images/bg.png');
}

// Set up canvas
// Set up random number for apple
// Calling function that create apples
function setup() {
    createCanvas(windowWidth, windowHeight);

    basket = new Basket(200, 75);
    numApples = random(25, 75);
    createApples();
}

// Drawing the background
// Controlling state
function draw() {
    background(imgBg);
    noCursor();
    // States of the simulation
    switch (state) {
        case `intro`:
            intro();
            break;
        case `gameplay`:
            gameplay();
            break;
        case `win`:
            win();
            break;
        case `lose`:
            lose();
            break;
    }
}

// MousePressed function
function mousePressed() {
    if(state === `intro`) {
        state = `gameplay`;
    }
}

// Display all text format
function displayText(myText, x, y, size) {
    textAlign(CENTER, CENTER);
    textSize(size);
    text(myText, x, y);
}

// Creating apples
function createApples() {
    for (let i = 0; i < numApples; i++) {
        let appleColor = {
            r: random(200, 255),
            g: random(10, 100),
            b: random(10, 100)
        }
        let x = random(0, width);
        let y = random(-100, -500);
        let apple = new Apple(x, y, appleColor);
        apples.push(apple);
    }
}