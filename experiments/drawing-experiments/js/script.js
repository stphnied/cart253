/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);

  // (r,g,b)
  background(255,150,150);

  // rectangles
  rectMode(CENTER); //anchor point

  stroke(120,120,200);
  fill('orange');
  rect(250,250,150,100,20,50,20,50); //(x,y,w,h,tl,tr,br,bl)

  stroke('orange');
  fill(120,120,200);
  rect(250,250,20,200,20,50,20,50);

  // circles
  stroke('red');
  circle(250,250,20)  // (x,y,d)

  // points
  stroke('blue');
  point(250,250);   // (x,y)

  // lines
  stroke('white');
  line(0,0,500,500); //(start-point-x,start-point-y,end-point-x,end-point-y)
  line(500,0,0,500);

  // Ellipses
  ellipseMode(CORNER);
  noStroke();

  fill(102, 204, 255,200);
  ellipse(250,250,100);

  fill(202, 204, 265,200);
  ellipse(250,250,80,80);

  fill(302, 204, 275,200);
  ellipse(250,250,50,50);
}

// draw()
//
// Description of draw() goes here.
function draw() {

}
