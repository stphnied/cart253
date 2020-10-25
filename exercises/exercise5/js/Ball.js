class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.vel = 0;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 10;
        this.active = true;
    }

    gravity(force) {
        this.ay += force;
    }

    move() {
        this.vx += this.ax;
        this.vy += this.ay;
        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        this.x += this.vx;
        this.y += this.vy;

        this.x = constrain(this.x,0,width);

        if (this.y - this.size / 2 > height) {
            this.active = false;
        }
    }

    bounce(paddle) {
        // BOUNCES IF THE BALL AND PADDING OVERLAPS
        // left side or right side of paddle
        // if the bottom edge is past the top of paddle
        if (this.x > paddle.x - paddle.width / 2 &&
            this.x < paddle.x + paddle.width / 2 &&
            this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
            this.y - this.size / 2 < paddle.y + paddle.height / 2) {
            // Bounces
            let dx = this.x - paddle.x;
            this.vx += map(dx,-paddle.width/2, paddle.width/2,-2,2);

            this.vy = -this.vy;
            this.ay = 0;
        }

        // Bounces off the wall
        if(this.x >= width || this.x <=0) {
            this.vx = -this.vx;
        }
    }

    display() {
        push();
        fill('lightblue');
        stroke(10);
        ellipse(this.x, this.y, this.size);
        pop();
    }

}