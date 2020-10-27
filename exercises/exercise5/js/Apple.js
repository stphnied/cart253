class Apple {
    constructor(x, y, appleColor,size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.vel = 0;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 15;
        this.appleColor = appleColor;
        this.active = true;
        this.caught = false;
        this.badCaught = false;
    }

    //Apple fall gravity
    gravity(force) {
        this.ay += force;
    }

    // Apple movement
    move() {
        this.vx += this.ax;
        this.vy += this.ay;
        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        this.x += this.vx;
        this.y += this.vy;

        this.x = constrain(this.x, 0, width);

        if (this.y - this.size / 2 > height) {
            this.active = false;
        }
    }

    // Catching the apple with the basket
    catch (basket) {
        // CATCHES IF THE BALL AND PADDING OVERLAPS
        // left side or right side of paddle
        // if the bottom edge is past the top of paddle
        if (this.x > basket.x - basket.width / 2 &&
            this.x < basket.x + basket.width / 2 &&
            this.y + badApple.size / 2 > basket.y - basket.height / 2 &&
            this.y - badApple.size / 2 < basket.y + basket.height / 2) {
            this.caught = true;
        }

        // Bounces back off the ground
        if (this.y + this.size / 2 >= height) {
            this.vy = -this.vy;
            this.ay = 0;
        }

        // Bounces off the wall
        if (this.x >= width || this.x <= 0) {
            this.vx = -this.vx;
        }
    }

    // If we catch the bad apple it's game over
    catchBad(basket) {
        if (badApple.x > basket.x - basket.width / 2 &&
            badApple.x < basket.x + basket.width / 2 &&
            badApple.y + badApple.size / 2 > basket.y - basket.height / 2 &&
            badApple.y - badApple.size / 2 < basket.y + basket.height / 2) {
            state = 'lose';
            this.badCaught = true;
        }
    }

    // Displays the apple 
    display() {
        if (!this.caught) {
            push();
            fill(this.appleColor.r, this.appleColor.g, this.appleColor.b);
            noStroke();
            ellipse(this.x, this.y, this.size);
            pop();
        }
    }
}