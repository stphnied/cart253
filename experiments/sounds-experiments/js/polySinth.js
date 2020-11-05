"use strict";

let synth;
let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `Dd4`, `Eb4`, `F5`];
let currentNote = 0;

function preload() {}

function setup() {
    createCanvas(500, 500);
    synth = new p5.PolySynth();
}

function draw() {
    background(150, 20, 20);
}

function keyPressed() {
    setInterval(playRandomNote, 500);
}

function playRandomNote() {
    let note = notes(currentNote);
    synth.play(note, 1, 0, 0.25);

    currentNote++;
    if(currentNote === note.length) {
        currentNote = 0;
    }
}