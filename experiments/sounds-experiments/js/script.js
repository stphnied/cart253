"use strict";

let barkSFX;
let oscillator;
let angle =0;
let t = 0;

function preload() {
    barkSFX = loadSound('assets/sounds/bark.wav');
}

function setup() {
    createCanvas(600, 600);
    userStartAudio();

    oscillator = new p5.Oscillator(440, `sine`);
    oscillator.amp(0.1);
}

function draw() {
    background(200);

    // let newRate = map(mouseX, 0, width, -3, 3);
    // barkSFX.rate(newRate);
    userCtl2();
}

function mousePressed() {
    // barkSFX.loop();
    oscillator.start();
}

function mouseReleased() {
    oscillator.stop();
}

function userCtl() {
    let newFreq = map(mouseY, height, 0,20,20000);
    oscillator.freq(newFreq);

    let newAmp = map(mouseX, 0, width, 0, 1);
    oscillator.amp(newAmp);

    push();
    textSize(32);
    textAlign(LEFT, CENTER);
    fill(255);
    text(newFreq, 50, height / 2);
    pop();
}

function userCtl2() {
    let noiseValue = noise(t);
    let r = random(0,1);
    let sinAngle = sin(angle);
    let newFreq = map(noiseValue,-1,1,0,880);
    oscillator.freq(newFreq);

    angle+=0.1;
    t+=0.1;
}