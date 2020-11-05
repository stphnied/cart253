"use strict";
let mic;
let ghost = {
    x:0,
    y:0,
    vx:0,
    vy:0,
    img:undefined

}
function preload() {
    ghost.img = loadImage(`assets/images/clown.png`);
}

function setup() {
    createCanvas(500,500);

    ghost.x = width/2;
    ghost.y = height/2;

    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(0);

    let lvl = mic.getLevel();

    console.log(lvl);

    let size = map(lvl,0,1,0,width);

    // trembling
    ghost.x += random(-1,1);
    ghost.y += random(-1,1);

    // if ghost scared
    if(lvl > 0.5) {
        // exit right
        ghost.vx = 20;
    }

    // move ghsot
    ghost.x += ghost.vx;
    ghost.y += ghost.vy;

    push();
    ellipse(width/2, height/2, size);
    pop();

    push();
    imageMode(CENTER);
    tint(255,50);
    image(ghost.img,ghost.x,ghost.y)
    pop();
}