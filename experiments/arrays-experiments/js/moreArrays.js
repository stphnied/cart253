"use strict";

let fortune = [
    `It's not good`,
    `Yikes`,
    `You good`
];

let soliloquy = [
    `To be or not`,
    `That is the question`,
    `Wheter tis nobler in the mind`,
    `To suffer ...`
]

let chosenFortune = `Click to see your future!`;

let currentIndex = 0;
function setup() {
    createCanvas(500,500);
    textAlign(CENTER,CENTER);
    textSize(32);
    fill(255);
}

function draw() {
    background('black');   
    // text(chosenFortune,width/2,height/2)
    text(soliloquy[currentIndex],width/2,height/2);

}

function mousePressed() {
    // chosenFortune = random(fortune);
    currentIndex +=1;

    if(currentIndex === soliloquy.length) {
        currentIndex = soliloquy.length-1;
    }
}