// Inspired by : https://editor.p5js.org/js6450/sketches/kWcChe550
class TelescopeView {
    constructor() {
        this.revealSize = 400;
    }

    displayBg() {
        background(0);
    }

    move() {
        translate(mouseX, mouseY);
        fill(0);
        beginShape();
        // Exterior part of shape, clockwise winding
        vertex(-width, -height);
        vertex(width, -height);
        vertex(width, height);
        vertex(-width, height);

        // Interior part of shape, counter-clockwise winding
        beginContour();
        vertex(-this.revealSize, -this.revealSize);
        vertex(-this.revealSize, this.revealSize);
        vertex(this.revealSize, this.revealSize);
        vertex(this.revealSize, -this.revealSize);
        endContour();
        endShape(CLOSE);
        push();
        noFill();
        stroke(0);
        strokeWeight(200);
        ellipse(this.revealSize/55, -this.revealSize/50, 800);
        pop();
    }
}