let circle = {
    x: 0,
    y: 250,
    size: 100,
    vx: 1,
    vy: 0,
    speed:2
};


function setup() {
    createCanvas(500, 500);
    // ------- 03
    let hotCelsius = toCelsius(100);
    console.log(`${hotCelsius}`);

    let coldCelsius = toCelsius(10);
    console.log(`10 degrees fahrenheit is ${coldCelsius} degree Celcius`);
}

function draw() {
    background(0);

    // ------- 01
    // move();
    // wrap();
    // display();

    // ------- 02
    // (x, y, nbLines, lineWidth, lineHeight, lineSpacing)
    parallels(50, 250, 20, 4, 20, 20);
    parallels(20, 200, 10, 5, 200, 5);
    parallels(100, 100, 10, 1, 100, 10);

}


// -----------------------------------------------------------VIDEO 01 : FUNCTION ------------------------------------------------------
// Move the circle
// function move() {
//     circle.x += circle.vx;
//     circle.y += circle.vy;
// }

// function wrap() {
//     if (circle.x > width) {
//         reset();
//     }
// }
// // Display the circle
// function display() {
//     fill('red');
//     ellipse(circle.x, circle.y, circle.size);
// }

// // Reset the circle
// function reset() {
//     circle.x = 0;
//     circle.vx += 2;
//     circle.size += 5;
// }

// function mousePressed() {
//     reset();
// }

// -----------------------------------------------------------VIDEO 02 : FUNCTION W PARAMETERS ------------------------------------------------------

function parallels(x, y, nbLines, lineWidth, lineHeight, lineSpacing) {
    for (let i = 0; i < nbLines; i++) {
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(x, y, lineWidth, lineHeight);
        x += lineSpacing;
    }
}

// -----------------------------------------------------------VIDEO 03 : FUNCTION W RETURN VALUE ------------------------------------------------------
function toCelsius(farhen) {
    let celsius = (farhen - 32) * 5/9;
    return celsius;
}