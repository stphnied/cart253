"use strict";

/**************************************************
Activity 08 : Inheritance activity
Stephanie Dang

A traffic simulation where the user is a highly endangered
pedestrian trying to cross the road
**************************************************/

let state = `gameplay`;
let pedestrian;
let vehicles = [];
let numCars = 10;
let numTrucks = 5;
let numMotors = 5;

// Description of setup() goes here.
function setup() {
    createCanvas(windowWidth, windowHeight);
    pedestrian = new Pedestrian(width / 2, height);

    for (let i = 0; i < numCars; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let car = new Car(x, y);
        vehicles.push(car);

    }

    for (let i = 0; i < numTrucks; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let truck = new Truck(x, y);
        vehicles.push(truck);

    }

    for (let i = 0; i < numMotors; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let motorcycle = new Motorcycle(x, y);
        vehicles.push(motorcycle);

    }

    for (let i = 0; i < vehicles.length; i++) {
        let vehicle = vehicles[i];
        let r = random(0,1);
        if (r < 0.5) {
            vehicle.vx = -vehicle.speed;
        } else {
            vehicle.vx = vehicle.speed;
        }
    }

}

// draw()
function draw() {
    background(0);
    switch (state) {
        case `intro`:
            intro();
            break;
        case `gameplay`:
            gameplay();
            break;
        case `success`:
            success();
            break;
        case `dead`:
            dead();
            break;
    }
}

// Function displaying all text
function displayText(string) {
    push();
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text(string, width / 2, height / 2);
    pop();
}