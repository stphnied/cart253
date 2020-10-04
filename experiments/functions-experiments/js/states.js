let circle3 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 1,
    vy: 0,
    speed: 2
};

let state = `title`; //Possible state : title,animation,ending

function setup() {
    createCanvas(500, 500);
    textSize(32);
    circle3.vx = circle3.speed;
}

function draw() {
    background(0);

    if (state === `title`) {
        title();
    } 
    
    else if (state === `animation`) {
      animation();
    } 
    
    else if (state === `ending`) {
     ending();
    } 
    
    else {
        console.log('theres a problem miss');
    }
} //end


function keyPressed() {
    if (state === `title`) {
        state = `animation`;
    }
}

function title() {
    // Title text
    fill(255);
    text(`Life.`, width / 2, height / 2);
}

function animation() {
    // Animation
    circle3.x += circle3.vx;
    circle3.y += circle3.vy;

    if (circle3.x > width) {
        state = `ending`;
    }

    ellipse(circle3.x, circle3.y, circle3.size);
}

function ending() {
    // Ending text
    fill(125);
    text(`is over.`, width / 2, height / 2);
}