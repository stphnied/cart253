"use strict";
// STATE FUNCTIONS
// All functions relating to the different simulation scene

// Main menu content
function mainMenu() {
    displayText(` - CELESTIAL SKY - `, 72, width / 2, height / 2.5);
    displayText(`wish upon a star`, 32, width / 2, height / 2.05);
    displayBtn();
    player.display();
}

// Instruction content
function instruction() {
    displayText(`Enjoy this moment and learn more about the constellation`, 42, width / 2, height / 2.5);
    displayText(`Yu and Yue's stargazing night`, 32, width / 2, height / 2.15);
    displayBtn();
    player.display();
    
    push();
    textAlign(CENTER, CENTER);
    textFont(myFont);
    textSize(24);
    fill(255,255,255,80);
    text(`This is an interactive simulation. Click and discover the environment for a delightful experience`,width / 2, height -50)
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
        shootingStar.reset();
    }

    // Display foreground elements
    displayForegroundElm();

    // Display player/mouse
    player.display();
}

// Gameplay : Telescope view content
function telescopeV() {
    // Display background
    displayBackground(windowHeight);
    // Display constellation
    constellation();

    // display stars
    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.display();
        star.blink();
    }
    // display shooting stars
    for (let i = 0; i < shootingStars.length; i++) {
        let shootingStar = shootingStars[i];
        shootingStar.rotation += random(0, 0.05);
        shootingStar.move();
        shootingStar.display();
        shootingStar.reset();
    }
    telescopeView.move();
}