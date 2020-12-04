// Star class that will display and make stars blink randomly in the screen
class Star {
    constructor(x, y) {
        this.x = x; //x position
        this.y = y; //y position
        this.c = 255; //color
        this.alpha = random(0, 255); //color alpha
        this.alphaAmount;   //int alpha
        this.size = random(1, 4); //size
    }

    // Displaying the stars
    display() {
        push();
        fill(this.c, this.alpha);
        noStroke();
        ellipse(this.x, this.y, this.size);
        pop();
        this.blink();
    }

    // Blinking animation
    blink() {
        if (this.alpha < 50) {
            this.alphaAmount=1;
        }
        else if (this.alpha > 150) {
            this.alphaAmount =-1;
        }
        this.alpha += this.alphaAmount;
    }
}