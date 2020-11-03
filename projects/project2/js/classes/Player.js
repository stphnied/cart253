class Player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 50;
    }

    handleInput() {

    }

    move() {
    }

    display() {
        push();
        fill(255);
        ellipse(mouseX,mouseY,this.size);
        pop();
    }

    checkTelescope(telescope) {

    }

    checkCharacters() {

    }
}