"use strict";
let barkSFX;

let circle = {
    x: 0,
    y: 0,
    size: 100,
    trail: [],
    trailSize: 20
}

let rates = [1.5, 2, 1, 2.25, 3];


function preload() {
    barkSFX = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
    circle.x = mouseX;
    circle.y = mouseY;

    for (let i = 0; i < circle.trail.length; i++) {
        let position = circle.trail[i];
        ellipse(position.x, position.y, circle.size);
    }

    ellipse(mouseX, mouseY, circle.size);

    let newTrailPos = {
        x: circle.x,
        y: circle.y
    };

    circle.trail.push(newTrailPos);

    if (circle.trail.length > circle.trailSize) {
        circle.trail.shift();
    }
}

function mousePressed() {
    let randomRates = random(rates);
    barkSFX.rate(randomRates);
    barkSFX.play();
}