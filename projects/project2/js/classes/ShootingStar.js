// ShootingStar Class  that will display and move shooting stars  accross the screen repeatedly 
// Star shape code from : https://www.youtube.com/watch?v=rSp5iSTXwAY&ab_channel=Co_Dart
class ShootingStar {
    constructor(x, y, outerRadius, innerRadius, rotation) {
        this.x = x; //x pos
        this.y = y; //y pos
        this.n = 5; //number of side
        this.outerRadius = outerRadius; //outer radius of stars
        this.innerRadius = innerRadius; //inner radius of stars
        this.rotation = rotation; //rotating 
        this.speed = random(0.75, 2.2); //moving speed
        this.color = 255; //color
        this.alpha = random(200, 255); //color opacity
    }

    //Moving the stars accross the screen
    move() {
        this.x += this.speed;
        this.y += this.speed - 0.25;
    }

    // reset the position of the shooting stars
    reset() {
        if (this.y > height) {
            this.x = random(0, width);
            this.y = random(0, height / 2);
        }
    }

    //displaying the stars
    display() {
        push();
        fill(this.color, this.alpha);
        noStroke();
        beginShape();

        let theta = TAU / this.n;
        for (let i = 0; i < this.n; i++) {
            vertex(this.x + cos(i * theta + this.rotation) * this.outerRadius, this.y + sin(i * theta + this.rotation) * this.outerRadius);
            vertex(this.x + cos((i + 0.5) * theta + this.rotation) * this.innerRadius, this.y + sin((i + 0.5) * theta + this.rotation) * this.innerRadius);
        }
        endShape(CLOSE);
        pop();

        line(this.y, this.y);
    }
}