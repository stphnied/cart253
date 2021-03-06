// Player class which allow the user to control and interact
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10;
        this.disappearTimer = undefined;
    }

    // Displaying the player's cursor
    display() {
        noCursor();
        push();
        fill(255);
        ellipse(mouseX, mouseY, this.size);
        pop();
    }

    // Checking if the player collides with the telescope
    checkTelescope(telescope) {
        let d = dist(mouseX, mouseY, telescope.x, telescope.y);
        if (d < this.size / 2 + telescope.size / 2) {
            state = `telescopeV`;
        }
    }

    // Checking if the player collides with the characters
    // If mousePressed : triggers random dialogs
    checkCharacters(characters) {
        let d = dist(mouseX, mouseY, characters.x, characters.y);
        if (d < this.size / 2 + characters.size / 2) {
            textIsVisible = true;

            //If the phrase is not completed, skip it to the end
            if (typewriter.finished === false) {
                typewriter.skipToEnd();
            }
            // Else, switch between the two character's dialog
            else {
                // Toggles between the two characters
                if (textIsVisible) {
                    if (yuActive) {
                        yuDialog = random(yuDialogs);
                        typewriter.typewrite(yuDialog, width / 5.5, height / 2);
                        textIsVisible = false
                        yuActive = false;
                        yueActive = true;
                        this.disappearDialogue();
                    }
                    else if (yueActive) {
                        yueDialog = random(yueDialogs);
                        typewriter.typewrite(yueDialog, width / 3, height / 2);
                        textIsVisible = false;
                        yueActive = false;
                        yuActive = true;
                        this.disappearDialogue();
                    }
                }
            }
        }
    }
    //Making the dialogue of the character disappear after 8 seconds
    disappearDialogue() {
        clearTimeout(this.disappearTimer);
        this.disappearTimer = setTimeout(() => {
            typewriter.reset();
        }, 8000);
    }
}