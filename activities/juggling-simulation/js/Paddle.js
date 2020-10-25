class Paddle {
    constructor(w,h) {
        this.width = w;
        this.height = h;
        this.x = 0;
        this.y = height - this.height/2;
    }

    move() {
        this.x = mouseX;
    }

    display() {
        push();
        fill('pink');
        stroke(255);
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}