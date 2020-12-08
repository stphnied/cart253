"use strict";
// STATE FUNCTIONS
// All functions relating to the different simulation scene

// Main menu content
function mainMenu() {
    background(0);
    displayText(` - CELESTIAL SKY - `, 72, width / 2, height / 2.5);
    displayText(`wish upon a star`, 32, width / 2, height / 2.05);
    displayBtn();
    player.display();
}

// Instruction content
function instruction() {
    displayText(`Enjoy this moment and learn more about the constellation`, 42, width / 2, height / 2.5);
    displayText(`Yu and Yue's stargazing night`, 32, width / 2, height / 2.15);
    displayText(`This is an interactive simulation. Click and discover the environment for a delightful experience`, 24, width / 2, height - 50, 80);
    displayBtn();
    player.display();
}

// Gameplay content
function gameplay() {
    // Background
    background(0,50);
    displayBackground(windowHeight / 1.5);
    displayAllStars();
    playMusic();
    // Display foreground elements
    displayForegroundElm();

    // Display player/mouse
    player.display();
}

// Gameplay : Telescope view content
function telescopeV() {
    // Display background
    displayBackground(windowHeight);
    displayAllStars();
    // Display constellation
    constellation();
    telescopeView.move();
}