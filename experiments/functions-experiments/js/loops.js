let circle2 = {
    x: undefined,
    y: undefined,
    size: 100
};

let  dangerZone = {
    x:250,
    y:250,
    size:150
};

function setup() {
    createCanvas(500,500);

    circle2.x = random(0, width);
    circle2.y = random(0, height);


    let d = dist(circle2.x,circle2.y,dangerZone.x,dangerZone.y);
    while(d<circle2.size/2 + dangerZone.size/2){
        circle2.x = random(0, width);
        circle2.y = random(0, height);
        d = dist(circle2.x,circle2.y,dangerZone.x,dangerZone.y);
    }

}

function draw() {
    background(0);

    // dangerzone
    push()
    noFill();
    stroke(255,0,0);
    ellipse(dangerZone.x,dangerZone.y,dangerZone.size);
    pop();

    // circle2
    push();
    fill(255);
    noStroke();
    ellipse(circle2.x,circle2.y,circle2.size);
    pop();
}