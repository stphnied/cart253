// STATE FUNCTIONS

// Main menu content
function mainMenu() {
    displayText(` - CELESTIAL SKY - `, 72, width / 2, height / 2.5);
    displayText(`wish upon a star`, 32, width / 2, height / 2.05);
    push();
    imageMode(CENTER);
    image(btnImg.img, btnImg.x, btnImg.y, btnImg.size, btnImg.size);
    pop();
}

// Instruction content
function instruction() {
    displayText(`Enjoy this moment and learn more about the constellation`, 42, width / 2, height / 2.5);
    // displayText(`This is your journey, you make your own decisions ...`, 32, width / 2, height / 2.15);
    displayText(`Yu and Yue's stargazing night`, 32, width / 2, height / 2.15);

    push();
    imageMode(CENTER);
    image(btnImg.img, btnImg.x, btnImg.y, btnImg.size, btnImg.size);
    pop();
}

// Gameplay content
function gameplay() {
    // Background
    displayBackground(windowHeight / 1.5);
    playMusic();

    // Display stars
    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.display();
        star.blink();
    }
    // Display Shooting Stars
    for (let i = 0; i < shootingStars.length; i++) {
        let shootingStar = shootingStars[i];
        shootingStar.rotation += random(0, 0.05);
        shootingStar.move();
        shootingStar.display();

        // reset shooting stars position
        if (shootingStar.y > height) {
        shootingStar.x = random(0, width);
        shootingStar.y = random(0, height / 2);
        }
    }

    // Display foreground elements
    displayForegroundElm();

    // Display player/mouse
    player.display();
    // constellation();
}

// Gameplay : Telescope view content
function telescopeV() {
    displayBackground(windowHeight);
    constellation();
    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.display();
        star.blink();
    }
    for (let i = 0; i < shootingStars.length; i++) {
        let shootingStar = shootingStars[i];
        shootingStar.rotation += random(0, 0.05);
        shootingStar.move();
        shootingStar.display();
    }
    telescopeView.move();
}