/**************************************************
ACTIVITY 2 : DRAW AN ALIEN
Stephanie Dang

Drawing an alien on the canvas.
**************************************************/

// setup()
//
// Draws alien
function setup() {

  createCanvas(640,480);
  background('#ff5e7a');
  noStroke();

  // body
  fill(152,255,204);
  ellipse(320,480,300);

  // head
  fill(52,255,204);
  ellipse(320,240,200,300);

  // eyes
  fill('#151b24');
  ellipse(250,220,95,150);
  ellipse(390,220,95,150);

  // nostril
  ellipse(310,270,10,10);
  ellipse(325,270,10,10);

  // mouth
  rectMode(CENTER);
  stroke('#ff9998');
  strokeWeight(3);
  rect(320,310,50,40,50);

}

// draw()
//
// Does nothing
function draw() {

}
