// Handling States functions

function intro() {
    // background(200);
    push();
    textStyle(BOLD);
    displayText(`APPLE PICKING WITH A TWIST!`, width / 2, height / 2, 64);
    pop();

    push();
    displayText(`It's a wonderful day to go apple picking today, but be careful... Every batch has a bad apple!`, width / 2, height / 1.75, 24);
    pop();

    push();
    displayText('PRESS TO START', width / 2, height / 1.4, 32);
    displayText(`move RIGHT or LEFT with your mouse to collect the apples`, width / 2, height / 1.3, 24);
    displayText(`press SPACEBAR to slow down the bad one`, width / 2, height / 1.2, 16);
    pop();
}

function gameplay() {
    // Display and move the basket
    basket.move();
    basket.display();
    // Displays the apple counting from the array
    for (let i = 0; i < apples.length; i++) {
        let apple = apples[i];
        if (apple.active) {
            apple.gravity(gravityForce);
            apple.move();
            apple.catch(basket);
            apple.catchBad(basket);
            apple.display();

            //Count number of apple caught 
            if (apple.caught) {
                apple.active = false;
                apple.caught = true;
                caughtApples++;
            }
        }
    }

    // Just a small distraction
    for(let i = 0; i< distraction.bees.length; i++) {
    let bee = distraction.bees[i];
        if(bee.alive) {
            bee.move();
            bee.display();
        }
    }

    //Increase the timer's count by one frame
    gameOverTimer++;

    // Reducing displayed timer count
    gameCounter -= 0.0166;
    // Display the visual timer
    displayText(int(gameCounter),width/2,height/2,60);

    // The game over in 10s
    if (caughtApples != numApples && gameOverTimer >= gameLength) {
        state = 'lose';
    }
    else if(caughtApples == numApples) {
        state = `win`;
    }
}

// If player collects all apples
function win() {
    fill(255);
    displayText(`YOU WON! Press enter to restart`,width/2,height/2,48);
}

// If overtime
function lose(){
    fill(255);
    displayText(`YOU LOSE! Press enter to restart`,width/2,height/2,48);
}

