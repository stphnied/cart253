"use strict";

/**************************************************
Activity 09 : Musical toy
Stephanie Dang
**************************************************/
let balls = [];
let notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Dd4`, `Eb4`, `F4`];
// setup()
// Creating canvas
function setup() {
    createCanvas(600, 600);
    userStartAudio();
}

// draw()
// 
function draw() {
    background(0)

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];

        ball.move();
        ball.bounce();
        ball.display();
    }
}

function createBall(x, y) {
    let note = random(notes);
    let ball = new Ball(x, y,note);
    balls.push(ball);
}

function mousePressed() {
    createBall(mouseX, mouseY);
}