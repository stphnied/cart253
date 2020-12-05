// Function creating & displaying all the Constellations
// If have time -> make code more efficient

function constellation() {

    displayText(`ARIES`, 18, 200, 170, 50);
    displayText(`LEPUS`, 24, width / 1.4, height / 1.4, 50);
    displayText(`CASSIOPEIA`, 18, width - 400, 200, 50);
    displayText(`CRUX`, 24, width / 4, height / 1.6, 50);
    displayText(`PETIT CHIEN`, 18, width / 3.2, 120, 50);
    displayText(`URSA MINOR`, 18, 105, height - 60, 50);
    displayText(`CRATER`, 18, width / 1.1, height / 1.02, 50);
    displayText(`ANTLIA`, 18, 50, height / 1.8, 50);
    displayText(`PICTOR`, 18, width - 100, height / 2, 50);
    displayText(`CANES VENATICI`, 18, width / 2.2, height / 2.6, 50);
    displayText(`GEMINI`, 24, width / 2.9, height / 1.1, 50);
    displayText(`MENSA`, 18, width / 1.5, height / 1.05, 50);


    push();
    // Setting the lines and ellipse's color
    fill(10, 220, 255, 150);
    stroke(255, 250, 255, 150);
    strokeWeight(2);

    // Aries
    ellipse(50, 50, 5);
    ellipse(150, 30, 5);
    ellipse(250, 90, 5);
    ellipse(275, 150, 5);
    ellipse(275, 200, 5);
    line(50, 50, 150, 30);
    line(150, 30, 250, 90);
    line(250, 90, 275, 150);
    line(275, 150, 275, 200);

    // Lepus (BUNNY)
    // Image reference : http://www.seasky.org/constellations/assets/images/lepus.jpg
    ellipse(width / 2, height / 2, 10); //6
    ellipse(width / 1.85, height / 2 - 20, 10); //9
    ellipse(width / 1.75, height / 2, 10); //7
    ellipse(width / 1.6, height / 1.75, 10); //2
    ellipse(width / 1.4, height / 1.85, 10); //5
    ellipse(width / 1.42, height / 2 - 30, 10); //11
    ellipse(width / 1.38, height / 2 - 30, 10); //12
    ellipse(width / 1.32, height / 1.5, 10); //4
    ellipse(width / 1.55, height / 1.52, 10); //3
    ellipse(width / 1.72, height / 1.48, 10); //8
    ellipse(width / 1.8, height / 1.52, 10); //10

    line(width / 2, height / 2, width / 1.85, height / 2 - 20); // 6-9
    line(width / 1.85, height / 2 - 20, width / 1.75, height / 2); //9-7
    line(width / 1.75, height / 2, width / 1.6, height / 1.75); //7-2
    line(width / 1.6, height / 1.75, width / 1.4, height / 1.85); //2-5
    line(width / 1.6, height / 1.75, width / 1.55, height / 1.52); //2-3
    line(width / 1.6, height / 1.75, width / 1.8, height / 1.52); //2-10
    line(width / 1.4, height / 1.85, width / 1.42, height / 2 - 30); //5-11
    line(width / 1.4, height / 1.85, width / 1.38, height / 2 - 30); //5-12
    line(width / 1.4, height / 1.85, width / 1.32, height / 1.5); //5-4
    line(width / 1.32, height / 1.5, width / 1.55, height / 1.52); //4-3
    line(width / 1.55, height / 1.52, width / 1.72, height / 1.48); //3-8
    line(width / 1.72, height / 1.48, width / 1.8, height / 1.52); //8-10
    line(width / 1.8, height / 1.52, width / 2, height / 2, width / 1.85); //10-6

    // Cassiopeia
    ellipse(width - 500, 100, 5);
    ellipse(width - 450, 150, 5);
    ellipse(width - 400, 140, 5);
    ellipse(width - 375, 175, 5);
    ellipse(width - 325, 150, 5);

    line(width - 500, 100, width - 450, 150);
    line(width - 450, 150, width - 400, 140);
    line(width - 400, 140, width - 375, 175);
    line(width - 375, 175, width - 325, 150);

    // Crux
    // Image ref : https://lh3.googleusercontent.com/proxy/bDFTqyjkpcmxjvsXwKlIZaK3BoraMNka2F5sttVY7CGMfXLicGIuGUGn0tfUkoq6w2em6ZjhR0bkh2T0Aa9IFVvd3sLTxxillfNiOOpFN6Eo_CI
    ellipse(width / 4, height / 3, 10); //3
    ellipse(width / 3.9, height / 1.75, 10); //2
    ellipse(width / 5, height / 2.4, 10); //1
    ellipse(width / 3.5, height / 2.5, 10); //4

    line(width / 4, height / 3, width / 3.9, height / 1.75);
    line(width / 5, height / 2.4, width / 3.5, height / 2.5)


    // Petit chien
    ellipse(width / 3.5, 100, 5);
    ellipse(width / 3.25, 95, 5);
    line(width / 3.5, 100, width / 3.25, 95);

    // Little bear 
    // Image ref : http://www.seasky.org/constellations/assets/images/ursa-minor.jpg
    ellipse(105, height - 200, 3); //1
    ellipse(90, height - 175, 3); //6
    ellipse(80, height - 150, 3); //4
    ellipse(90, height - 125, 3); //5
    ellipse(70, height - 115, 3); //7
    ellipse(90, height - 90, 3); //3
    ellipse(105, height - 105, 3); //2

    line(105, height - 200, 90, height - 175); //1-6
    line(90, height - 175, 80, height - 150); //6-4
    line(80, height - 150, 90, height - 125); //4-5
    line(90, height - 125, 70, height - 115); //5-7
    line(90, height - 125, 105, height - 105); //5-2
    line(105, height - 105, 90, height - 90, 3); //2-3
    line(90, height - 90, 70, height - 115); //3-7

    // The Cup (Crater)
    // Image ref : http://www.seasky.org/constellations/assets/images/crater.jpg
    ellipse(width / 1.1, height / 1.05, 3); //4
    ellipse(width / 1.08, height / 1.075, 3); //2
    ellipse(width / 1.11, height / 1.11, 3); //1
    ellipse(width / 1.13, height / 1.2, 3); //7
    ellipse(width / 1.16, height / 1.22, 3); //5
    ellipse(width / 1.12, height / 1.09, 3); //3
    ellipse(width / 1.155, height / 1.07, 3); //6
    ellipse(width / 1.18, height / 1.08, 3); //8

    line(width / 1.1, height / 1.05, width / 1.08, height / 1.075); //4-2
    line(width / 1.08, height / 1.075, width / 1.11, height / 1.11); //2-1
    line(width / 1.11, height / 1.11, width / 1.13, height / 1.2); //1-7
    line(width / 1.13, height / 1.2, width / 1.16, height / 1.22); //7-5
    line(width / 1.11, height / 1.11, width / 1.12, height / 1.09); //1-3
    line(width / 1.12, height / 1.09, width / 1.1, height / 1.05); //3-4
    line(width / 1.12, height / 1.09, width / 1.155, height / 1.07) //3-6
    line(width / 1.155, height / 1.07, width / 1.18, height / 1.08) //6-8

    // The Air Pump (Antlia)
    ellipse(20, height / 2, 3); //1
    ellipse(50, height / 2.1, 3); //2
    ellipse(75, height / 2, 3); //3
    ellipse(80, height / 1.9, 3); //4

    line(20, height / 2, 50, height / 2); //1-2
    line(50, height / 2, 75, height / 2); //2-3
    line(50, height / 2, 80, height / 1.9); //2-4
    line(75, height / 2, 80, height / 1.9); //3-4


    // The Painter's Easel (Pictor)
    ellipse(width - 100, height / 3, 5);
    ellipse(width - 90, height / 2.5, 5);
    ellipse(width - 140, height / 2, 5);
    ellipse(width - 135, height / 2.3, 5);

    line(width - 100, height / 3, width - 90, height / 2.5);
    line(width - 90, height / 2.5, width - 140, height / 2);


    // The Hunting Dogs (Canes Venatici)
    ellipse(width / 2.25, height / 2.9, 3);
    ellipse(width / 2.4, height / 3, 3);
    ellipse(width / 2.5, height / 3.1, 3);
    ellipse(width / 2.1, height / 3.1, 3);
    ellipse(width / 2.15, height / 3.5, 4);

    line(width / 2.25, height / 2.9, width / 2.4, height / 3);
    line(width / 2.4, height / 3, width / 2.5, height / 3.1);
    line(width / 2.25, height / 2.9, width / 2.1, height / 3.1);

    // Gemini
    ellipse(width / 3.25, height / 1.4, 10); //3
    ellipse(width / 3.1, height / 1.41, 5) //17
    ellipse(width / 2.8, height / 1.39, 5); //18

    ellipse(width / 2.7, height / 1.45, 5); //13

    ellipse(width / 2.5, height / 1.3, 5); //6
    ellipse(width / 2.3, height / 1.32, 5); //5
    ellipse(width / 2.25, height / 1.34, 5); //8
    ellipse(width / 2.3, height / 1.25, 5); //16

    ellipse(width / 3.05, height / 1.32, 5); //7
    ellipse(width / 3.25, height / 1.3, 5); //15
    ellipse(width / 3.3, height / 1.25, 5); //11
    ellipse(width / 3.45, height / 1.32, 10); //2

    ellipse(width / 2.9, height / 1.2, 5); //10
    ellipse(width / 2.8, height / 1.15, 5); //12
    ellipse(width / 2.6, height / 1.13, 5); //9
    ellipse(width / 2.75, height / 1.2, 5); //14
    ellipse(width / 2.6, height / 1.18, 5); //4

    // top-right lines
    line(width / 3.25, height / 1.4, width / 3.1, height / 1.41); //3-17
    line(width / 3.1, height / 1.41, width / 2.8, height / 1.39); //17-18
    line(width / 2.8, height / 1.39, width / 2.7, height / 1.45); //18-13
    line(width / 2.8, height / 1.39, width / 2.5, height / 1.3); //18-6
    line(width / 2.5, height / 1.3, width / 2.3, height / 1.32); //6-5
    line(width / 2.3, height / 1.32, width / 2.25, height / 1.34); //5-8
    line(width / 2.5, height / 1.3, width / 2.3, height / 1.25); //6-16
    line(width / 2.8, height / 1.39, width / 3.05, height / 1.32); //18-7

    // bottom-left lines
    line(width / 3.05, height / 1.32, width / 3.25, height / 1.3); //7-15
    line(width / 3.25, height / 1.3, width / 3.45, height / 1.32); //15-2
    line(width / 3.25, height / 1.3, width / 3.3, height / 1.25); //15-11
    line(width / 3.25, height / 1.3, width / 2.9, height / 1.2); //15-10
    line(width / 2.9, height / 1.2, width / 2.8, height / 1.15); //10-12
    line(width / 2.8, height / 1.15, width / 2.6, height / 1.13); //12-9
    line(width / 2.9, height / 1.2, width / 2.75, height / 1.2); //10-14
    line(width / 2.75, height / 1.2, width / 2.6, height / 1.18); //14-4


    // Mensa
    ellipse(width / 1.7, height / 1.1, 3);
    ellipse(width / 1.6, height / 1.08, 3);
    ellipse(width / 1.52, height / 1.095, 3);
    ellipse(width / 1.5, height / 1.19, 5);

    line(width / 1.7, height / 1.1, width / 1.6, height / 1.08);
    line(width / 1.6, height / 1.08, width / 1.52, height / 1.095);
    line(width / 1.52, height / 1.095, width / 1.5, height / 1.19);

    pop();
}