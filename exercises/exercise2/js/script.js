/**************************************************
Exercise 02 : Dodge 'em!
Stephanie Dang
**************************************************/

let covid19 = {
    x: 0,
    y: 250,
    size: 200,
    vx: 0,
    vy: 0,
    speed: 7,
    fill: {
        r: 255,
        g: 20,
        b: 10,
        a: 100
    }
};

let circleBg = {
    x: 0,
    y: 250,
    size: 200,
    vx: 0,
    vy: 0,
    speed: 5,
    angle: 0,
    fill: {
        r: 255,
        g: 20,
        b: 10
    }
};

let user = {
    x: 0,
    y: 0,
    size: 150,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    acceleration: 0.1,
    maxSpeed: 5, 
    image: undefined
};

let numStatic = 250;

// Load imgs
function preload() {
    user.image = loadImage('assets/images/smoll_Dang.png');
}

// Description of setup() goes here.
function setup() {
    createCanvas(windowWidth, windowHeight);
    cursor(CROSS);

    user.x = width/2;
    user.y = height/2;

    covid19.y = random(0, height);
    covid19.speed = random(0, 5);
    covid19.vx = covid19.speed;

};


// Description of draw() goes here.
function draw() {
    background('black');
    noStroke();
    angleMode(DEGREES);
    imageMode(CENTER);

    // Static bg
    for (let i = 0; i < numStatic; i++) {
        let x = random(0, width);
        let y = random(0, height);
        stroke(covid19.fill.r,covid19.fill.g,covid19.fill.b);
        noFill();
        ellipse(x, y,15,15);
    };
    
    // Calling the functions
    controlUser();
    createcovid19();
   
    // Catch covid19
    let d = dist(user.x, user.y, covid19.x, covid19.y);
    if (d < covid19.size / 2 + user.size / 2) {
        noLoop();
    }

}

// Control user
function controlUser() {
    // to the left of the circle
    if (mouseX < user.x) {
        user.ax = -user.acceleration;
    } else {
        user.ax = user.acceleration;
    }

    // Higher up than the circle
    if (mouseY < user.y) {
        user.ay = -user.acceleration;
    } else {
        user.ay = user.acceleration;
    }

    // Update the position
    user.vx += user.ax;
    user.vx = constrain(user.vx, -user.maxSpeed, user.maxSpeed);
    user.vy += user.ay;
    user.vy = constrain(user.vy, -user.maxSpeed, user.maxSpeed);

    user.x += user.vx;
    user.x = constrain(user.x, 0 + user.size / 2, width - user.size / 2);
     
    user.y += user.vy;
    user.y = constrain(user.y,0+ user.size/2,height - user.size/2);

    imageMode(CENTER);
    image(user.image, user.x, user.y, user.size, user.size);
}


// Create covid19 circle
function createcovid19() {
    // covid19
    push();
    covid19.x += covid19.vx;
    covid19.y += covid19.vy;

    // Returns the covid19.x to 0 
    if (covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0, height);
        covid19.size = random(300, 500);
        covid19.fill.r = random(0, 255);
        covid19.fill.g = random(0, 255);
        covid19.fill.b = random(0, 255);
        covid19.fill.a = 100;
    }
    // Decreased it's visibility when it reaches the 2/3 of the width
    else if (covid19.x > width / 2 && covid19.x < 2 * width / 2) {
        covid19.fill.a = 10;
        noStroke();
    }

    covid19.fill.a--; //Slowly turn down the alpha
    fill(covid19.fill.r, covid19.fill.g, covid19.fill.b,covid19.fill.a);
    ellipse(covid19.x, covid19.y, covid19.size, covid19.size);
    pop();

}