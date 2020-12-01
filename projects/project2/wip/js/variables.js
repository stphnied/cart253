// STORING VARIABLES
// Less long to scroll in the script.js file now!

//Game states
let state = 'gameplay';

// Imported assets
let myFont;
let bgSFX;
let btnImg = {
    x: undefined,
    y: undefined,
    size: 25,
    img: undefined
};

// Player
let player;

// Background colors
let color1, color2;

// Shootings stars
let shootingStars = [];
let numShootingStars;

// Stars
let stars = [];
let numStars;

// Telesscope
let telescopeView;
let telescope = {
    x: 0,
    y: 0,
    size: 150,
    img: undefined
};

// Typewriter
let typewriter;
let textIsVisible = false;

// Characters (Yu and Yue)
let characters = {
    x: 50,
    y: 0,
    size: 400,
    img: undefined
};

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
    `Did you know Orion is the easiest constellation to recognize from afar?`,
    `Yue, did you know the brightest constellation is Crux? (But to me, you are the brightest star...)`,
    `Yue, did you know that each of the constellations has its own story?`,
    `What a sight... Wouldn't you agree, Yue?`
];

// Yuè is the female rabbit on the right
let yueDialogs = [
    `Yu! The sky is so beautiful tonight`,
    `Yu, I wish tonight would last forever...`,
    `Twinkle twinkle little star...`,
    `Sometimes while gazing at the night's sky, I imagine stars looking down making wishes on the brightest of us.`,
    `They say shoot for the moon. Even if you miss, you'll land among the stars. I don't mind that.`,
    `Looking at the starry sky sure is calming.`,
    `Yu, you look just like the Lepus constellation!`,
    `What a starry starry night!`,
    `Hmm...`
];