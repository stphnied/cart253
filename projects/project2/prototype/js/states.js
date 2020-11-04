// STATE FUNCTIONS
// Placeholder text in some states, will change at some point 
function mainMenu() {
    displayText(`Menu`);
}

function instruction() {
    displayText(`Instruction`);
}

function gameplay() {
    // Display stars
    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.display();
    }
    // Display Shooting Stars
    for (let i = 0; i < shootingStars.length; i++) {
        let shootingStar = shootingStars[i];
        shootingStar.rotation += random(0,0.05);
        shootingStar.move();
        shootingStar.display();
        if (shootingStar.outerRadius < 0) {
            shootingStar.grow();
        }
    }
    // Display foregroun elements
    displayForegroundElm();
    // Display player/mouse
    player.display();
}

function ending() {
    displayText(`the end`);

}

