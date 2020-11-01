class Truck extends Vehicle {
 constructor(x,y) {
        super(x,y);
        this.width = 80;
        this.height = 30;
        this.speed = 3;
    }

    display() {
        super.display();
        
        push();
        rectMode(CENTER);
        fill(0,255,0);
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}