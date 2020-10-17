"use strict";

/**************************************************
Exercise 04: The Age of a Spooky Aquarium
Stephanie Dang
**************************************************/

// Variables
let shark;
let candyImg;
let user = {
    x:0,
    y:0,
    size:100,
    img:undefined
};
let school = [];
let schoolSize = 10;

// preloading assets
function preload() {
    shark = loadImage(`assets/images/sharkie.png`);
    user.img = loadImage(`assets/images/user.png`);
    candyImg = loadImage(`assets/images/candy.png`);
}

// set up
function setup() {
    createCanvas(1000,750);
    noCursor();

    // Spawn candies randomly
    for(let i = 0; i<schoolSize; i++) {
      let candy = createCandy(random(0,width),random(0,height));
      school.push(candy);
    }
}

// Creates the Candies
function createCandy(x,y) {
    let candy = {
        x: x,
        y: y,
        size: 50,
        speed:2,
        vx: 0,
        vy: 0,
        img: candyImg,
        eaten : false 
    };
    return candy;
}

// draw()
function draw() {
    background(`#00003f`);
    moveUser();

    for(let i = 0;i<school.length ;i++) {
        checkCandy(school[i]);
        moveCandy(school[i]);
        displayCandy(school[i]);
    }
}

// Moving the player
function moveUser() {
    push();
    noStroke();
    fill(`#fbaf06`);
    image(user.img,mouseX,mouseY,user.size,user.size);
    pop();
}

// Moving the candies randomly
function moveCandy(candy) {
  let change = random(0, 1);
  if (change < 0.05) {
    candy.vx = random(-candy.speed, candy.speed);
    candy.vy = random(-candy.speed, candy.speed);
  }

  // Move the candy
  candy.x = candy.x + candy.vx;
  candy.y = candy.y + candy.vy;

  // Constrain the candy to the canvas
  candy.x = constrain(candy.x, 0, width);
  candy.y = constrain(candy.y, 0, height);

}

// Check if the candies were eaten or not
function checkCandy(candy) {
 if (!candy.eaten) {
        let d = dist(mouseX, mouseY, candy.x, candy.y);
        if (d < user.size / 2 + candy.size / 2) {
            candy.eaten = true;
        }
    }
}

// Displays the candies 
function displayCandy(candy) {
    if(!candy.eaten) {
        push();
        fill(200, 100, 100);
        noStroke();
        image(candyImg,candy.x,candy.y,candy.size,candy.size);
        pop();
    }
}

