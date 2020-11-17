class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 25;
    }

    display() {
        noCursor();
        push();
        fill(255);
        ellipse(mouseX, mouseY, this.size);
        pop();
    }

    checkTelescope(telescope) {
        let d = dist(mouseX, mouseY, telescope.x, telescope.y);
        if (d < this.size / 2 + telescope.size / 2) {
            console.log("telescope");
        }
    }

    checkCharacters(characters) {
        // If mousePressed : triggers random dialogs
        let d = dist(mouseX, mouseY, characters.x, characters.y);
        if (d < this.size / 2 + characters.size / 2) {
            console.log("characters");
            console.log(yuDialogs[1]);
            let why = yuDialogs[1];
            displayText(why, 16, width / 2, height / 2);
        }
    }
}