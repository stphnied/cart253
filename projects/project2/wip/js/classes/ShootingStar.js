// ShootingStar Class  that will display and move shooting stars  accross the screen repeatedly 
// Star shape code from : https://www.youtube.com/watch?v=rSp5iSTXwAY&ab_channel=Co_Dart
class ShootingStar {
    constructor(x, y,outerRadius,innerRadius,rotation) {
        this.x = x;     //x pos
        this.y = y;     //y pos
        this.n = 5;     //number of side
        this.outerRadius = outerRadius;     //outer radius of stars
        this.innerRadius = innerRadius;     //inner radius of stars
        this.rotation = rotation;           //rotating 
        this.growRate = 0.06;               
        this.shrinkRate =0.006;
        this.speed = random(0.5,2.2);       //moving speed
        this.color =255;                    //color
        this.alpha = random(200,255);       //color opacity
    }

    grow() {
        this.outerRadius += this.growRate;
        this.innerRadius += this.growRate;
        this.outerRadius = constrain(this.outerRadius,2,10);
        this.innerRadius = constrain(this.innerRadius,2,10);
    }

    shrink() {
        this.outerRadius -= this.shrinkRate;
        this.innerRadius -= this.shrinkRate;
        this.outerRadius = constrain(this.outerRadius,0,10);
        this.innerRadius = constrain(this.innerRadius,0,10);
    }

    //Moving the stars accross the screen
    move() {
        this.x += this.speed;
        this.y += this.speed-0.25;
        // this.x += pow(this.outerRadius, 0.2);
        // this.y += pow(this.outerRadius,0.2);

        // if(this.x > width) {
        //     this.x = this.x;
        //     this.y = this.y;
        // }
    }

    // reset the position of the shooting stars
    reset() {
        if(this.y > height) {
            this.x = random(0,width);
            this.y = random(0,height/2);
        }
    }

    //displaying the stars
    display() {
        push();
        fill(this.color,this.alpha);
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