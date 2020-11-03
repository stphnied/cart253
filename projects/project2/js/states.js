// STATE FUNCTIONS
// Placeholder text in some states, will change at some point 

function mainMenu() {
    displayText(`Menu`);

}

function instruction() {
    displayText(`Instruction`);
    
}

function gameplay() {
    player.display();
    for(let i =0; i < stars.length ; i++) {
        let star = stars[i];
        // star.grow();
        // star.move();
        star.display();
    }

}

function ending() {
    displayText(`the end`);

}