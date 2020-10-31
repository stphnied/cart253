"use strict";

/**************************************************
Inheritance experiment
Stephanie Dang

traffic simulation
**************************************************/

let cars = [];
let numCars = 10;

let motorcycles = [];
let numMotor = 10;


// setup()
function setup() {
    createCanvas(500,500);
    for(let i =0; i<numCars; i++) {
        let x = random(0,width);
        let y = random(0,height);
        let car = new Car(x,y);
        cars.push(car);

    }

    for (let i = 0; i < numMotor; i++) {
        let x = random(0,width);
        let y = random(0,height);
        let motorcycle = new Motorcycle(x,y);
        motorcycles.push(motorcycle);
        
    }
}

// draw()
function draw() {
    background(0);

    for(let i = 0; i<cars.length; i++) {
        let car = cars[i];
        car.move();
        car.wrap();
        car.display();
    }


    for(let i = 0; i<motorcycles.length; i++) {
        let motorcycle = motorcycles[i];
        motorcycle.move();
        motorcycle.wrap();
        motorcycle.display();
    }
}