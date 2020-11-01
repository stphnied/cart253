function intro() {
    displayText(`PEDESTRIAN PALAVER`);
}

function gameplay() {
    pedestrian.handleInput();
    pedestrian.move();
    pedestrian.display();
    for(let i =0; i < vehicles.length;i++) {
        vehicle = vehicles[i];
        vehicle.move();
        vehicle.wrap();
        vehicle.display();

        pedestrian.checkHit(vehicle);
    }
    if(!pedestrian.alive) {
        state = `dead`;
    }
    if(pedestrian.y <0) {
        state =`success`;
    }

}

function success () {
    displayText(`SUCCESS!`)
}

function dead() {
    displayText(`U DED`);
}