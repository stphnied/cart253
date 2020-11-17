"use strict";

/**************************************************
Exercise 06 : Sound prototype
Stephanie Dang

Sound prototype for my project 02 : Dialog noises!
I want to simulate some sort of randomized dialog/text by clicking on the  circle
with a different sound everytime.
**************************************************/
let synth;
let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `Dd4`, `Eb4`, `F5`];
let dialogs = [`Hello, this is a test`, `This is a test, hello`, `Is a test hello`];
let currentNote = 0;
let dialog;

let circle = {
    x: 0,
    y: 0,
    size: 50
}

// setup()
function setup() {
    createCanvas(650, 650);
    userStartAudio();
    synth = new p5.PolySynth();

    // circle setup
    circle.x = width / 2;
    circle.y = height / 2;
}

// draw()
function draw() {
    background(0);

    push();
    fill(255);
    ellipse(circle.x, circle.y, circle.size);
    pop();
}

function mouseReleased() {

    // If click on circle, play a random dialog
    let d = dist(mouseX, mouseY, circle.x, circle.y);
    if (d < circle.size / 2) {
        // play dialog sound
        playRandomMelody();
        playRandomDialog();
    }
}

function playRandomMelody() {
    let looping = new p5.SoundLoop(function () {
        let note = notes[currentNote];
        synth.play(note, 2, 0, 0.001);
        currentNote++;
    }, 0.25);
    looping.maxIterations = notes.length;
    looping.start();

    if (currentNote === notes.length) {
        currentNote = 0;
        shuffle(notes, true);
    }
}

// Text is not displaying when mouse is pressed
// But works in the console...
function playRandomDialog() {
    let r = random(int(0, 2));
    dialog = dialogs[1];
    shuffle(dialogs, true);
    displayText(dialog);
    console.log(dialog);
}

function displayText(myText) {
    fill(255);
    textAlign(CENTER, CENTER);
    text(myText, 150, 150,24);
}