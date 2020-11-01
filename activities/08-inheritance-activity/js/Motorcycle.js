class Motorcycle extends Vehicle {
 constructor(x,y) {
        super(x,y);
        this.width = 30;
        this.height = 10;
        this.speed = 10;
    }

    display() {
        super.display();
        
        push();
        rectMode(CENTER);
        fill(0,0,255);
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}