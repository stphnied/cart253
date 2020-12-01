class Constellation  {
    constructor(x,y,x2,y2) {
        this.x = x;
        this.y = y;
        this.x2 =x2;
        this.y2 = y2;
        this.size = 10;
    }

    displayCircle() {
        fill(10, 220, 255,100);
        ellipse(this.x,this.y,this.size,this.size);
    }
    displayLine() {
        stroke(255, 204, 255, 45);
        strokeWeight(3);
        line(this.x, this.y, this.x2, this.y2);
    }

}