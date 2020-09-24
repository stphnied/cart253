/**************************************************
Activity 04 : Dodging covid-19
Stephanie Dang
**************************************************/

let covid19 = {
    x:0,
    y:250,
    size:100,
    vx:0,
    vy:0,
    speed:5,
    fill: {
        r:255,
        g:20,
        b:10
    }
};

let user = {
    x:0,
    y:0,
    size:100,
    fill:255
};


// Description of setup() goes here.
function setup() {
    createCanvas(windowWidth,windowHeight);

    covid19.y = random(0,height);
    covid19.vx = covid19.speed;

};


// Description of draw() goes here.
function draw() {
    background('black');
    noStroke();
    
    // Static bg
    for(let i =0; i<100 ;i++) {
        let x = random(0,width); 
        let y = random(0,height);
        stroke(255);
        point(x,y);
    };

    // user position
    user.x = mouseX;
    user.y = mouseY;

    // covid19
    push();
    covid19.x += covid19.vx;
    covid19.y += covid19.vy;

    if(covid19.x > width){
        covid19.x = 0;
        covid19.y = random(0, height);
    }

    fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
    ellipse(covid19.x,covid19.y,covid19.size);
    pop();

    // user circle
    push();
    fill(user.fill);
    ellipse(user.x,user.y,user.size);
    pop();

    // Catch covid19
    let d = dist(user.x,user.y,covid19.x,covid19.y);
    if(d < covid19.size/2+ user.size/2 ) {
        noLoop();
    }

}