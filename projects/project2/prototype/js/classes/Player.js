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
        let d = dist(this.x,telescope.x,this.y,telescope.y);
        if(d <this.size/2 + telescope.size/2) {
            console.log("gg");
        }
        // if( this.x > telescope.x && this.x < telescope.x + telescope.width &&
        //     this.y > telescope.y && this.y < telescope.y + telescope.height) {
        //         console.log('works babeeee');
        // }
    }

    checkCharacters(characters) {
        // If mousePressed : triggers random dialogs
    }
}