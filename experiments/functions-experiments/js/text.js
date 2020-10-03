// let name = "steph";
// let country = "canada";
// let string = `Hi, mi nam is ${name}, of ${country}`;
// let string2 = "Hi, mi nam is" + name+ ", of" + country;

let hello = {
    string: "Hello,World",
    x:250,
    y:250,
    vx:5,
    vy:1
}
function setup() {
    createCanvas(500,500);

}

function draw() {
    background(0);

    textAlign(CENTER,CENTER);
    textSize(54);
    textStyle(BOLD);
    stroke(50,200,0);
    strokeWeight(5);
    fill(255,255,100);

    hello.x += hello.vx;
    hello.x = constrain(hello.x,0,width);
    hello.y += hello.vy;
    hello.y = constrain(hello.y,0,height);

    hello.size++;
    text(hello.string,hello.x,hello.y);
}