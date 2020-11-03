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

    move() {
    this.x += pow(this.outerRadius, 0.5);
    this.y += pow(this.outerRadius,0.2);
    
        // if (this.x > width) {
        //   let index = shootingStars.indexOf(this);
        //   shootingStars.splice(index, 1);
        // }
    }

    // rotate() {
    // }

    display() {
        push();
        fill(255);
        noStroke();
        beginShape();
        let theta = TAU / this.n;
        for (let i = 0; i < this.n; i++) {
            vertex(this.x + cos(i * theta  + this.rotation) * this.outerRadius, this.y + sin(i * theta + this.rotation) * this.outerRadius);
            vertex(this.x + cos((i + 0.5) * theta  + this.rotation) * this.innerRadius, this.y + sin((i + 0.5) * theta +this.rotation) * this.innerRadius);
        }
        endShape(CLOSE);
        pop();
    }
}


//  ----- POSSIBLE FUTURE FEATURES?-----
// timeOut to call stars at different time
// Reset stars once they are off screen
// Possibly fading away?