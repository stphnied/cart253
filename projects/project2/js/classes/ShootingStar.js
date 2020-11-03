// Star shape code from : https://www.youtube.com/watch?v=rSp5iSTXwAY&ab_channel=Co_Dart
class ShootingStar {
    constructor(x, y,outerRadius,innerRadius,rotation) {
        this.x = x;
        this.y = y;
        this.n = 5;
        this.outerRadius = outerRadius;
        this.innerRadius = innerRadius;
        this.rotation = rotation;
        this.growRate = 0.06;
        this.shrinkRate =0.06;
    }

    grow() {
        this.outerRadius += this.growRate;
        this.innerRadius += this.growRate;
        this.outerRadius = constrain(this.outerRadius,2,10);
        this.outerRadius = constrain(this.innerRadius,2,10);

    }

    shrink() {
        this.outerRadius -= this.shrinkRate;
        this.innerRadius -= this.shrinkRate;
        this.outerRadius = constrain(this.outerRadius,0,10);
        this.outerRadius = constrain(this.innerRadius,0,10);
    }

    // move() {
    // this.x += pow(this.outerRadius, 0.9);
    // this.y += pow(this.outerRadius,0.1);
    
    // if (this.x > width) {
    //   let index = stars.indexOf(this);
    //   stars.splice(index, 1);
    // }
    // }

    // rotate() {
    // }

    display() {
        fill(255);
        noStroke();
        beginShape();
        let theta = TAU / this.n;
        // let outerTheta = i * theta;
        // let innerTheta = (i+0.5) *theta;
        for (let i = 0; i < this.n; i++) {
            vertex(this.x + cos(i * theta  + this.rotation) * this.outerRadius, this.y + sin(i * theta + this.rotation) * this.outerRadius, );
            vertex(this.x + cos((i + 0.5) * theta  + this.rotation) * this.innerRadius, this.y + sin((i + 0.5) * theta +this.rotation) * this.innerRadius);
        }
        endShape(CLOSE);
    }
}