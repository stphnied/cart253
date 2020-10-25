"use strict";

/**************************************************
Activity : Juggling simulation
Stephanie Dang

A juggling simulation with O.O.P.
**************************************************/
let gravityForce = 0.0025;
let paddle;
let balls = [];
let numBalls = 10;


// setup()
function setup() {
    createCanvas(windowWidth,windowHeight);

    paddle = new Paddle(400,50);

    for(let i =0 ; i <numBalls; i++) {
        let x = random(0,width);
        let y = random(-100,-500);
        let ball = new Ball(x,y);
        balls.push(ball);
    }
}

// draw()
function draw() {
    background(0);

    paddle.move();
    paddle.display();

    for(let i = 0 ; i< balls.length; i++) {
        let ball = balls[i];
        if(ball.active) {
            ball.gravity(gravityForce);
            ball.move();
            ball.bounce(paddle);
            ball.display();
        }
        
    }
}