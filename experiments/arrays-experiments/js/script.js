"use strict";

/**************************************************
Dang Stephanie
Array experiments

**************************************************/
let fish1,fish2,fish3,fish4;

let school = [];
let schoolSize = 10;

function setup() {
  createCanvas(600, 600);

  // Create four fish, positioned randomly
//   school[0] = createFish(random(0, width), random(0, height));
//   school[1] = createFish(random(0, width), random(0, height));
//   school[2] = createFish(random(0, width), random(0, height));
//   school[3] = createFish(random(0, width), random(0, height));

  for(let i = 0; i<schoolSize; i++) {
      let fish = createFish(random(0,width),random(0,height));
      school.push(fish);
    //   school[i] = createFish(random(0, width), random(0, height));
  }
}

// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return fish;
}

// draw()
// Moves and displays our fish
function draw() {
  background(0);

  for(let i = 0; i<school.length;i++) {
    moveFish(school[i]);
  }
  for(let i = 0; i<school.length;i++) {
    displayFish(school[i]);
  }
  
//   moveFish(school[0]);
//   moveFish(school[1]);
//   moveFish(school[2]);
//   moveFish(school[3]);

//   displayFish(school[0]);
//   displayFish(school[1]);
//   displayFish(school[2]);
//   displayFish(school[3]);
}

// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // Move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

function mousePressed() {
    let fish = createFish(mouseX,mouseY);
    school.push(fish);
}