/**************************************************
ACTIVITY 03 : MOVING PICTURES
Stephanie Dang

Making a simple abstract animation
**************************************************/
let oBgColor = {
    r: 0,
    g: 0,
    b: 0,
    speed: 1
};
let oCircle1 = {
    x: 0,
    y: 250,
    size: 100,
    speed: 2,
    growthRate: 1, 
    fill: 225,
    alpha: 200
};
let oCircle2 = {
    x: 500,
    y: 250,
    size: 50,
    sizeRatio: 0.75,
    speed: -2,
    fill: 225,
    alpha: 200
};

// setup()
function setup() {
    createCanvas(500,500);
    noStroke();
    // oCircle1.y = height/2;
    // oCircle2.x = width/2;
    // oCircle2.y = height/2

}

// draw()
function draw() {

    // Background
    oBgColor.r = map(oCircle1.size,100,width,0,255); //Gets redder as it grows
    background(oBgColor.r, oBgColor.g, oBgColor.b);

    // Circle (Left) --------------------------------
    oCircle1.x += oCircle1.speed;
    oCircle1.x = constrain(oCircle1.x, 0, width/2);

    oCircle1.size += oCircle1.growthRate;
    oCircle1.size = constrain(oCircle1.size,0,width);


    fill(oCircle1.fill, oCircle1.alpha);
    ellipse(oCircle1.x, oCircle1.y, oCircle1.size);

    // Circle (Right) --------------------------------
    oCircle2.x += oCircle2.speed;
    oCircle2.x = constrain(oCircle2.x,width/2,width);
    
    oCircle2.size = oCircle1.size * oCircle2.sizeRatio;
    oCircle2.size = constrain(oCircle2.size,0,width);

    fill(oCircle2.fill, oCircle2.alpha);
    ellipse(oCircle2.x, oCircle2.y, oCircle2.size);


}