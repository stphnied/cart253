// Player class which allow the user to control and interact
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 25;
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
    checkCharacters(characters) {
        // If mousePressed : triggers random dialogs
        let d = dist(mouseX, mouseY, characters.x, characters.y);
        if (d < this.size / 2 + characters.size / 2) {
            textIsVisible = true;

            if (textIsVisible) {
                if (yuActive) {
                    yuDialog = random(yuDialogs);
                    typewriter.typewrite(yuDialog, width / 5.5, height / 2);
                    textIsVisible = false
                    yuActive = false;
                    yueActive = true;
                    this.disappearDialogue();
                } else if (yueActive) {
                    yueDialog = random(yueDialogs);
                    typewriter.typewrite(yueDialog, width / 3, height / 2);
                    textIsVisible = false;
                    yueActive = false;
                    yuActive = true;
                    this.disappearDialogue();
                }

                clearTimeout(this.disappearDialogue);
            }
        }
    }

    checkShootingStar() {
        // let d = dist(mouseX, mouseY, shootingStar.x, shootingStar.y);
        // if (d< this.x / 2 + shootingStar.size / 2) {
        //     console.log("huhihih");
        // }
        displayText(`10 wishes is more than enough...!`,36,width/2,height/2);
        console.log("hokla");
    }

    //Making the dialogue of the character disappear after awhile
    disappearDialogue() {
        setTimeout(() => {
            typewriter.reset();
        }, 10000);
    }
}