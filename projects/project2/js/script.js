"use strict";

/**************************************************
Project 02 : Stargazing simulation (temporary name)
Stephanie Dang

A stargazing simulation where the player can navigate and learn more about constellation
**************************************************/

// Variables
let state = 'gameplay';
let player;
let color1, color2;

let shootingStars = [];
let numShootingStars;

let stars = [];
let numStars;

let characters = {
    x:50,
    y:0,
    size:400,
    img:undefined
};


// Handling images and sound --------------------------------------------------------------
function preload() {
    characters.img = loadImage(`assets/images/characters.png`);
}

// Settings up the canvas and generating elements----------------------------------------------------------------
function setup() {
    createCanvas(windowWidth, windowHeight);

    // Characters setup
    characters.y = height/1.75;

    // Generating player cursor 
    player = new Player(width / 2, height / 2);

    // Generating Stars
    numStars = random(30,100);
    numShootingStars = random(5, 30);

    // Generating Stars
    for(let i = 0; i < numStars; i++) {
        let x = random(0, width);
        let y = random(0,height/1.7);
        let star = new Star(x,y);
        stars.push(star);
    }

    // Generating Shooting Stars
    for (let i = 0; i < numShootingStars; i++) {
        let x = random(0, width);
        let y = random(0, height/1.7);
        let outerRadius = random(2,8);
        let innerRadius = outerRadius/2
        let rotation = random(0,10);
        let shootingStar = new ShootingStar(x, y, outerRadius, innerRadius, rotation);
        shootingStars.push(shootingStar);
    }
}

//Drawing FUNCTION ------------------------------------------------------------------------
// background & elements depending on the state of the game
function draw() {
    noCursor();
    noStroke();
    // Background colors
    background(0);
    color1 = color(0, 0, 152);    //top color
    color2 = color (8, 91, 221); //bottom color
    setGradient(0, 0, windowWidth, windowHeight / 1.5, color1, color2, "Y");

    // States behavior
    switch (state) {
        case `mainMenu`:
            mainMenu();
            break;
        case `instruction`:
            instruction();
            break;
        case `gameplay`:
            gameplay();
            break;
        case `ending`:
            ending();
            break;
    }
}

function displayCharacter() {
    push();
    image(characters.img,characters.x,characters.y,characters.size,characters.size);
    pop();
}

// TEXT FUNCTION ------------------------------------------------------------------------
// Displaying text
function displayText(string) {
    push();
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text(string, width / 2, height / 2);
    pop();
}

// MOUSE & KEYPRESSED FUNCTIONS ---------------------------------------------------------
function mousePressed() {}

function keyPressed() {
    if (state == 'gameplay') {
        //KEY PRESSED ENTER : RESTART SIMULATION
        if (keyCode === ENTER) {
            location.reload();
        }
    }
}

// Creating a gradient background --------------------------------------------------------
// Code from : https://p5js.org/examples/color-linear-gradient.html
function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis == "Y") { // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
            var inter = map(i, y, y + h, 0, 1);
            var c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    } else if (axis == "X") { // Left to right gradient
        for (let j = x; j <= x + w; j++) {
            var inter2 = map(j, x, x + w, 0, 1);
            var d = lerpColor(c1, c2, inter2);
            stroke(d);
            line(j, y, j, y + h);
        }
    }
}