let bg = 150;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(bg);

    // textAlign(CENTER,CENTER);
    // textSize(64);
    // fill(2,255);
    // text(keyCode,width/2,height/2);

    // if A key is down
    if(keyIsDown(65)) {
        fill('red');
        ellipse(200,200,200);
    }
}

// function keyPressed() {
//     if (keyCode === UP_ARROW) {
//         bg +=10;
//         bg = constrain(bg,0,255);
//     }
//     else if (keyCode === DOWN_ARROW) {
//         bg -= 10;
//         bg = constrain(bg,0, 255);
//     }

// }


