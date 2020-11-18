// Player class which allow the user to control and interact
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
            state = `telescopeV`;
        }
    }

    checkCharacters(characters) {
        // If mousePressed : triggers random dialogs
        let d = dist(mouseX, mouseY, characters.x, characters.y);
        if (d < this.size / 2 + characters.size / 2) {
            textIsVisible = true;

            if(textIsVisible) {
                if(yuActive) {
                    yuDialog = random(yuDialogs);
                    typewriter.typewrite(yuDialog, width / 5.5, height / 2);
                    textIsVisible = false
                    yuActive = false;
                    yueActive = true;
                }
                else if(yueActive) {
                    yueDialog = random(yueDialogs);
                    typewriter.typewrite(yueDialog, width / 3, height / 2);
                    textIsVisible = false;
                    yueActive = false;
                    yuActive =true;
                }
            }
        }
    }
}