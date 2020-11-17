class Star {
    constructor(x, y) {
        this.x = x;              //x position
        this.y = y;                  //y position
        this.c = 255;                //color
        this.alpha =random(0,255);             //color alpha
        this.vx = 0;                //velocity on x
        this.vy = 0;                //velocity on y
        this.speed = 0;              //speed
        this.size = random(1,4);      //size
    }
    

    display() {
        push();
        fill(this.c,this.alpha);
        noStroke();
        ellipse(this.x, this.y, this.size);
        pop();
    }
}

//  ----- POSSIBLE FUTURE FEATURES?-----
// Grow and shrink
// No overlap