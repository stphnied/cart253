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

  // rectangle
  stroke('purple');
  fill('orange');
  rectMode(CENTER); //anchor point
  rect(250,250,150,100,20,50,20,50); //(x,y,w,h,tl,tr,br,bl)
  rect(250,250,20,200,20,50,20,50);

  // circle
  fill('pink');
  circle(250,250,20)  // (x,y,d)

  // point
  stroke('blue');
  point(250,250);   // (x,y)

  // line
  stroke('white');
  line(0,0,500,500); //(start-point-x,start-point-y,end-point-x,end-point-y)
  line(500,0,0,500);
}

// draw()
//
// Description of draw() goes here.
function draw() {

}
