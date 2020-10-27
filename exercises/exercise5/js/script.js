"use strict";
/**************************************************
Activity : Juggling simulation
Stephanie Dang

Apple picking but with a twist... they bounce back!
**************************************************/

// Variables
let gravityForce = 0.0025;  // Gravity
let basket;                 // Catching apple

let distraction = {
    bees : [],              //Array to generate bees
    numBees : 3            //Number of bees generating
};

let apples = [];            // Array to generate apples
let numApples = 0;          // Number of apple generating
let caughtApples = 0;       // Counter for apple  caught
let badApple;               //Bad apple

let imgBg;                  // Image background for gameplay

let gameOverTimer = 0;      // Timer to count the number of frames
let gameLength = 60*20;     // Game duration (20sec)
let gameCounter = 20;       // visual timer

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
    basket = new Basket(300, 75);
    numApples = int(random(10, 55));

    addApples();
    addBees();
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

// Change the speed to the bad apple
function keyPressed() {
    if(state == 'gameplay') {
         if (keyCode === 32) {
            badApple.maxSpeed = random(0,15) ;
         }

    }
}

// Display all text format
function displayText(myText, x, y, size) {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(size);
    text(myText, x, y);
}

// Adding apples
function addApples() {

    // Good apples
    for (let i = 0; i < numApples; i++) {
        let appleColor = {
            r: random(200, 255),
            g: random(10, 100),
            b: random(10, 100)
        }
        let x = random(0, width);
        let y = random(-100, -500);
        let apple = new Apple(x, y, appleColor,random(40,100));
        apples.push(apple);
    }

    // bad apple
    let badAppleColor = {
        r: 0,
        g: 255,
        b: 50
    }
    let x2 = random(0,width);
    let y2 = random(-100,-500);
    badApple = new Apple(x2,y2,badAppleColor,random(40,100));
    apples.push(badApple);
}

// Adding bees
function addBees() {
    // Creates the bees 
    for (let i = 0; i < distraction.numBees; i++) {
        let bee = new Bee(random(0, width), random(0, 200));
        distraction.bees.push(bee);
    }
}