/**************************************************
Variable experiments
Stephanie Dang

Here is a description of this template p5 project.
**************************************************/
let bgColor = 0;
let circleSize;
let circleX = 0;
let circleY = 250;
let circleSpeed = 1;
let circleAcceleration =0.25;

let circle = {
  x: 0,
  y: 200,
  size: 200,
  speed: 5,
  fill:0
};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
  circleSize = 250;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  //------ vid 01 : Intro to variables
  // background(mouseX,0,0);
  // rectMode(CENTER);
  // rect(width/2, height/2, 100, 100) // /2 = center

  //background(mouseX, mouseY, mouseX, mouseY/2); // change bg color with mouse
  // rect(mouseX, mouseY, 100, 100); //current location of the mouse
  //rect(250,250,mouseX,mouseY); //resize the rect with mouse


  // ---- vid 02 : Creating variables
  background(bgColor);
  // ellipse(circleX,circleY,circleSize);


  // ---- vid 03 :  Changing variables
  fill('red');
  circleX += circleSpeed;
  circleSpeed += circleAcceleration;
  ellipse(circleX,circleY,circleSize);

  // ---- vid 04 : Javascript Objects
  // fill('blue');
  // circle.x += circle.speed;
  // ellipse(circle.x,circle.y,circle.size);

  // ---- vid 06 : Random numbers
  let randomNumb = random(-5,255);
  circle.x = 250;
  circle.speed = random(-5,5);
  circle.x += circle.speed;

  circle.fill = random(0,255);
  fill(circle.fill);
  ellipse(circle.x,circle.y,circle.size);

}
