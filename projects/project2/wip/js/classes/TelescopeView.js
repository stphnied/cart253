// Code inspired by : https://editor.p5js.org/js6450/sketches/kWcChe550
class TelescopeView {
    constructor() {
        this.revealSize = 400;
        this.color =0;
        this.x = width;
        this.y = height;
    }

    move() {
        // First push()/pop() to not stain the stars' color
        // Otherwise : some stars turn black!!
        push();

        translate(mouseX, mouseY);
        fill(this.color);

        beginShape();
        
        // Exterior part of shape, clockwise winding
        vertex(-this.x, -this.y);
        vertex(this.x, -this.y);
        vertex(this.x, this.y);
        vertex(-this.x, this.y);

        // Interior part of shape, counter-clockwise winding
        beginContour();
        vertex(-this.revealSize, -this.revealSize);
        vertex(-this.revealSize, this.revealSize);
        vertex(this.revealSize, this.revealSize);
        vertex(this.revealSize, -this.revealSize);
        endContour();

        endShape(CLOSE);

        
        // Giving the round shape
        push();
        noFill();
        stroke(this.color);
        strokeWeight(200);
        ellipse(this.revealSize/55, -this.revealSize/50, 800);
        pop();

        displayText(` - TELESCOPE VIEW - `, 20, 0, height / 2.75);
        displayText(` PRESS "ENTER" TO RETURN `, 10, 0, height / 2.5);

        pop(); //!!DO NOT FORGET THIS IS NOT A WANDERING POP, THIS THE FIRST PUSH'S POP!!
    }
}