/**************************************************
Variable experiments
Stephanie Dang

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(mouseX,0,0);
  rectMode(CENTER);
  rect(width/2, height/2, 100, 100) // /2 = center
  
  //background(mouseX, mouseY, mouseX, mouseY/2); // change bg color with mouse
  // rect(mouseX, mouseY, 100, 100); //current location of the mouse
  //rect(250,250,mouseX,mouseY); //resize the rect with mouse

}
