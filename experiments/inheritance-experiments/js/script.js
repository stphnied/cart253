"use strict";

/**************************************************
Inheritance experiment
Stephanie Dang

traffic simulation
**************************************************/
let vehicules = [];
let numCars = 10;
let numMotor = 10;
let numSportsCar = 3;

// setup()
function setup() {
    createCanvas(500,500);
    for(let i =0; i<numCars; i++) {
        let x = random(0,width);
        let y = random(0,height);
        let car = new Car(x,y);
        vehicules.push(car);

    }

    for(let i =0; i<numSportsCar; i++) {
        let x = random(0,width);
        let y = random(0,height);
        let sportsCar = new SportsCar(x,y);
        vehicules.push(sportsCar);

    }

    for (let i = 0; i < numMotor; i++) {
        let x = random(0,width);
        let y = random(0,height);
        let motorcycle = new Motorcycle(x,y);
        vehicules.push(motorcycle);
    }
}

// draw()
function draw() {
    background(0);

    for(let i =0; i < vehicules.length; i++) {
        let vehicule = vehicules[i];
        vehicule.move();
        vehicule.wrap();
        vehicule.display();
    }
}