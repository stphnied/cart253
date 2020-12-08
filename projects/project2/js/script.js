"use strict";
/**************************************************
CART-253, Fall 2020
Project 02 : A Starry Night Simulation
Stephanie Dang

A stargazing simulation where the player can navigate and interact with the environment
**************************************************/

// Variables
// Access the variables from the variables.js file

// Handling images,sound, font --------------------------------------------------------------
function preload() {
    // Imgs
    characters.img = loadImage(`assets/images/characters.png`);
    telescope.img = loadImage(`assets/images/telescope.png`);
    btnImg.img = loadImage(`assets/images/button.png`);
    treeBg.img = loadImage(`assets/images/tree.png`);

    // Sound
    bgSFX = loadSound(`assets/sounds/show_me_the_sky.mp3`);

    // Font
    myFont = loadFont(`assets/fonts/Coves.otf`);
}

// Settings up the canvas and generating elements----------------------------------------------------------------
function setup() {
    createCanvas(windowWidth, windowHeight);
    userStartAudio();
    // btnImg setup
    btnImg.x = width / 2;
    btnImg.y = height / 1.8;

    // Trees setup
    treeBg.y = height / 2.7;

    // Characters setup
    characters.x = width / 3.5;
    characters.y = height / 1.3;

    // Telescope setup
    telescope.x = width / 1.5;
    telescope.y = height / 1.25;

    telescopeView = new TelescopeView();

    // Generating player cursor 
    player = new Player(width / 2, height / 2);

    // Generating Stars
    numStars = random(90, 225);
    for (let i = 0; i < numStars; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let star = new Star(x, y);
        stars.push(star);
    }
    // Generating Shooting Stars
    numShootingStars = random(1, 3);

    for (let i = 0; i < numShootingStars; i++) {
        let x = random(0, width);
        let y = random(0, height / 1.2);
        let outerRadius = random(5,10);
        let innerRadius = outerRadius / 2;
        let rotation = random(1, 10);
        let shootingStar = new ShootingStar(x, y, outerRadius, innerRadius, rotation);
        shootingStars.push(shootingStar);
    }
    //Generating Typewriter dialogue
    typewriter = new Typewriter();
}

//Drawing FUNCTION ------------------------------------------------------------------------
//Calling state functions
function draw() {
    noStroke();
        background(0,80);
    // States behavior
    switch (state) {
        case `mainMenu`:
            mainMenu();
            break;
        case `instruction`:
            instruction();
            break;
        case `gameplay`:
            gameplay();
            break;
        case `telescopeV`:
            telescopeV();
            break;
    }
    // Displaying typewriter
    typewriter.display();
        if(maxWarningTxt) {
            displayText(`12 wishes is more than enough...!`, 36, width / 2, height / 2);
            console.log("THIS WORKS! NO MORE STARS!");
        }
}

// FUNCTION creating and displaying the background visuals & STARS ------------------------------------------------------------------------
function displayBackground(y) {
    // Sky color (background)
    push();
    color1 = color(0, 0, 152, 100); //top color
    color2 = color(8, 91, 221); //bottom color
    setGradient(0, 0, windowWidth, y, color1, color2, "Y");
    pop();
}

function displayForegroundElm() {
    // Water color (middleground)
    push();
    color1 = color(0, 0, 139); //top color
    color2 = color(0, 72, 190); //bottom color
    setGradient(0, height / 1.5, windowWidth, windowHeight / 5, color2, color1, "Y");
    pop();

    // Grass (foreground)
    push();
    fill('#0F0C0B');

    beginShape();
    let xOffset = 5;
    let yOffset = 2;

    //Create point from horizontal pixel
    for (let x = 0; x <= width; x += 10) {
        // Calculate  y value according to noise, map to noise
        let y = map(noise(xOffset, yOffset), 0, 1, 700, 750);

        vertex(x, y);
        xOffset += 0.05;
    }
    // setting vertex
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
    pop();

    // Characters
    push();
    imageMode(CENTER);
    image(characters.img, characters.x, characters.y, characters.size, characters.size);

    // Telescope
    image(telescope.img, telescope.x, telescope.y, telescope.size, telescope.size * 1.2);

    // Trees
    image(treeBg.img, treeBg.x, treeBg.y, treeBg.size, treeBg.size * 2); //left
    image(treeBg.img, width - 100, treeBg.y + 175, treeBg.size / 1.2, treeBg.size * 1.1); //right
}

// Displays both Stars and Shooting Stars
function displayAllStars() {
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

}
// TEXT FUNCTION ------------------------------------------------------------------------
// Displaying text
function displayText(string, size, x, y,alpha) {
    push();
    textAlign(CENTER, CENTER);
    textSize(size);
    textFont(myFont);
    fill(255,255,255,alpha);
    text(string, x, y);
    pop();
}

// Displaying bunny button
function displayBtn() {
    push();
    imageMode(CENTER);
    image(btnImg.img, btnImg.x, btnImg.y, btnImg.size, btnImg.size);
    displayText(`CLICK ME`,12,width/2,height/1.7,80);
    pop();
}

// MOUSE & KEYPRESSED FUNCTIONS ---------------------------------------------------------
function mousePressed() {
    if (state == `gameplay`) {
        player.checkCharacters(characters);
        player.checkTelescope(telescope);
        if (numShootingStars < 13) {
            numShootingStars++;
            this.outerRadius = random(2.5, 6);
            this.innerRadius = this.outerRadius / 2;
            this.rotation = random(1, 10);
            let shootingStar = new ShootingStar(mouseX, mouseY, this.outerRadius, this.innerRadius, this.rotation);
            shootingStars.push(shootingStar);
        }
    }

    // Button to next scene
    let dBtn = dist(mouseX, mouseY, btnImg.x, btnImg.y);
    if (dBtn < btnImg.size / 2) {
        if (state == `mainMenu`) {
            state = `instruction`;
        }
        else if (state == `instruction`) {
            state = `gameplay`;
        }
    }
}

function keyPressed() {
    if (state == 'gameplay') {
        //KEY PRESSED ENTER : RESTART SIMULATION
        if (keyCode === ENTER) {
            location.reload();
        }
    } else if (state == `telescopeV`) {
        //KEY PRESSED ENTER : RETURN SIMULATION
        if (keyCode === ENTER) {
            state = `gameplay`;
        }
    }
}

// Creating a gradient background --------------------------------------------------------
// Code from : https://p5js.org/examples/color-linear-gradient.html
function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis == "Y") { // Top to bottom gradient
        for (let i = y; i <= y + h; i++) {
            var inter = map(i, y, y + h, 0, 1);
            var c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    }
    else if (axis == "X") { // Left to right gradient
        for (let j = x; j <= x + w; j++) {
            var inter2 = map(j, x, x + w, 0, 1);
            var d = lerpColor(c1, c2, inter2);
            stroke(d);
            line(j, y, j, y + h);
        }
    }
}

// Play music in loop
function playMusic() {
    if (!bgSFX.isPlaying()) {
        bgSFX.setVolume(0.1)
        bgSFX.loop();
    }
}