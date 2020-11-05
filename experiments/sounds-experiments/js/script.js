"use strict";
/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let barkSFX;

// setup()
//
// Description of setup() goes here.

function preload() {
    barkSFX = loadSound('assets/sounds/bark.wav');
}
function setup() {
    createCanvas(500,500);
    userStartAudio();
}

// draw()
//
// Description of draw() goes here.
function draw() {
    background(200);

    let newRate = map(mouseX, 0, width, -3, 3);
    barkSFX.rate(newRate);
}

function mousePressed() {
    barkSFX.loop();
}