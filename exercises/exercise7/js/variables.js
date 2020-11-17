// STORING VARIABLES
// Less long to scroll in the script.js file now!

let state = 'gameplay';
let myFont;
let bgSFX;

let btnImg = {
    x: undefined,
    y: undefined,
    size: 25,
    img: undefined
};

let player;
let color1, color2;

let shootingStars = [];
let numShootingStars;

let stars = [];
let numStars;

let characters = {
    x: 50,
    y: 0,
    size: 400,
    img: undefined
};

let telescope = {
    x: 0,
    y: 0,
    size: 150,
    img: undefined
};

let speechBubble = {
    bubbleBody: {
        rectX: 0,
        rectY: 0,
        rectW: 0,
        rectH: 0
    },

    bubbleBtn: {
        triX: 0,
        triY: 0
    }
}

let textIsVisible = false;
let yuDialog;
let yueDialog = false;
let yuActive = true;
let yueActive = false;

// -- Warning : Cheesy lines incoming! --
// Yu is the male rabbit on the left
let yuDialogs = [
    `Yue, did you know wishing upon a star will make your wish come true...?`,
    `Yue, did you know 22 different constellation names start with the letter 'C'? Coincidence... I think not!`,
    `Yue, did you know a constellation usually represents an animal, mythological person or creature, god, or an inanimate object?`,
    `Yue, did you know Orion is the easiest constellation to recognized?`,
    `Yue, did you know the brightest constellation is Crux? (But to me, you are the brightest star...)`
];

// Yuè is the female rabbit on the right
let yueDialogs = [
    `Yu! The sky is so beautiful tonight`,
    `Yu, I wish tonight could last forever...`,
    `Twinkle Twinkle little star...`,
    `Sometimes while gazing at the night's sky, I imagine stars looking down making wishes on the brightest of us.`,
    `They say shoot for the moon. Even if you miss, you'll land among the stars. I don't mind that.`,
    `Looking at the starry sky sure is calming.`,
    `Yu, you look just like the Lepus constelaltion!`
];