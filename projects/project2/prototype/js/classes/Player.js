class Player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 25;
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

    checkCharacters(characters) {
        // If mousePressed : triggers random dialogs
    }
}