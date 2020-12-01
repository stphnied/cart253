// Function displaying all the Constellations
// If have time -> make code more efficient

function constellation() {
    // Aries
    push();
    fill(10, 220, 255,100);
    ellipse(50,50,5);
    ellipse(150, 30, 5);
    ellipse(250, 90, 5);
    ellipse(275, 150, 5);
    ellipse(275, 200, 5);
    stroke(255, 204, 255, 45);
    strokeWeight(3);
    line(50,50, 150, 30);
    line(150, 30, 250, 90);
    line(250, 90, 275, 150);
    line(275, 150, 275,200);


    // Lepus (BUNNY)
    // Image reference : http://www.seasky.org/constellations/assets/images/lepus.jpg
    ellipse(width/2, height/2, 10); //6
    ellipse(width/1.85, height/2-20, 10); //9
    ellipse(width/1.75, height/2, 10); //7
    ellipse(width/1.6, height/1.75, 10); //2
    ellipse(width/1.4, height/1.85, 10); //5
    ellipse(width/1.42, height/2-30, 10); //11
    ellipse(width/1.38, height/2-30, 10); //12
    ellipse(width/1.32, height/1.5, 10); //4
    ellipse(width/1.55, height/1.52,10); //3
    ellipse(width/1.72, height/1.48, 10); //8
    ellipse(width/1.8, height/1.52, 10); //10

    line(width/2,height/2,width/1.85, height/2-20); // 6-9
    line(width/1.85, height/2-20,width/1.75, height/2); //9-7
    line(width/1.75, height/2,width/1.6, height/1.75); //7-2
    line(width/1.6, height/1.75,width/1.4, height/1.85); //2-5
    line(width/1.6, height/1.75,width/1.55, height/1.52); //2-3
    line(width/1.6, height/1.75,width/1.8, height/1.52); //2-10
    line(width/1.4, height/1.85,width/1.42, height/2-30); //5-11
    line(width/1.4, height/1.85,width/1.38, height/2-30); //5-12
    line(width/1.4, height/1.85,width/1.32, height/1.5); //5-4
    line(width/1.32, height/1.5,width/1.55, height/1.52); //4-3
    line(width/1.55, height/1.52,width/1.72, height/1.48); //3-8
    line(width/1.72, height/1.48,width/1.8, height/1.52); //8-10
    line(width/1.8, height/1.52,width/2,height/2,width/1.85); //10-6

    // Cassiopeia
    ellipse(width-500,100,5);
    ellipse(width-450,150,5);
    ellipse(width-400,140,5);
    ellipse(width-375,175,5);
    ellipse(width-325, 150,5);

    line(width-500,100,width-450,150);
    line(width-450,150,width-400,140);
    line(width-400,140,width-375,175);
    line(width-375,175,width-325, 150);

    // Crux
    // Image ref : https://lh3.googleusercontent.com/proxy/bDFTqyjkpcmxjvsXwKlIZaK3BoraMNka2F5sttVY7CGMfXLicGIuGUGn0tfUkoq6w2em6ZjhR0bkh2T0Aa9IFVvd3sLTxxillfNiOOpFN6Eo_CI
    ellipse(width/4,height/3,10); //3
    ellipse(width/3.9,height/1.75,10); //2
    ellipse(width/5,height/2.4,10); //1
    ellipse(width/3.5,height/2.5,10); //4

    line(width/4,height/3,width/3.9,height/1.75);
    line(width/5,height/2.4,width/3.5,height/2.5)


    // Petit chien
    ellipse(width/3.5,100,5);
    ellipse(width/3.25,95,5);
    line(width/3.5,100,width/3.25,95);

    // Petit chien
    ellipse(100,height-100,50);


    pop();
}