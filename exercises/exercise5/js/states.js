// Handling States functions

function intro() {
    // background(200);
    push();
    fill(`#ff6500`);
    displayText(`APPLE PICKING WITH A TWIST!`, width / 2, height / 2, 64)
    pop();

    push();
    fill(255);
    displayText(`It's a wonderful day to go apple picking today`, width / 2, height / 1.75, 24)
    pop();

    push();
    fill(255);
    displayText('PRESS TO START', width / 2, height / 1.3, 32);
    displayText(`Use your mouse and move RIGHT TO LEFT to collect the apples`, width / 2, height / 1.2, 24);
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
            apple.display();

            //Count number of apple caught 
            if (apple.caught) {
                apple.active = false;
                apple.caught = true;
                caughtApples++;
                print(caughtApples);
            }
        }
    }

    //Increase the timer's count by one frame
    gameOverTimer++;
    gameCounter -= 0.01;
    displayText(int(gameCounter),width/2,height/2,60);
    // The game over in 10s
    if (gameOverTimer >= gameLength) {
        gameOver();
    }
}

// Control game over state
function gameOver() {
    if(caughtApples == numApples) {
        state = `win`;
    }

    else {
        state = `lose`;
    }
}

// If player collects all apples
function win() {
    fill(255);
    displayText(`YOU WON!`,width/2,height/2,48);
}

// If overtime
function lose(){
    fill(255);
    displayText(`YOU LOSE!`,width/2,height/2,48);
}

