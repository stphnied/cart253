class Star {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.speed = 0;
        this.size = 4;
        this.growRate = 0.06;
        this.shrinkRate =0.06;
    }

    shrink() {}
    grow() {}
    
    display() {
        push();
        fill(255);
        noStroke();
        ellipse(this.x,this.y,this.size);
        pop();
    }
}

//  ----- POSSIBLE FUTURE FEATURES?-----
// Grow and shrink
// No overlap