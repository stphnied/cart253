// An array to store our images
let images = [];
// A variable storing the number of images to load
let numImages = 3;
// A variable to store the image we want to display
let displayImage;

// preload() loads 10 images
function preload() {
  // Use a for loop to count from 0 up to 9
  for (let i = 0; i < numImages; i++) {
    // Load the image into a variable
    // Note that we use i to specify the number in the filename!
    // Note how nice this is with a template literal string
    let loadedImage = loadImage(`assets/images/clown-${i}.png`);
    // Add the loaded image to the images array
    images.push(loadedImage);
  }
}

// setup() selects the image to display randomly
function setup() {
  createCanvas(600, 600);
  // Choose an image to display randomly from the array
  displayImage = random(images);
}

// draw() displays the randomly chosen image
function draw() {
  background(0);
  // Display the randomly selected image
  imageMode(CENTER);
  image(displayImage, width / 2, height / 2);
}