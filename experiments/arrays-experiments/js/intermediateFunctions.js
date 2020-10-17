let user = {
  x: 0,
  y: 0,
  size: 100
};

let food1;
let food2;

function setup() {
  createCanvas(windowWidth,windowHeight);

  food1 = createFood(250,500,500);
  food2 = createFood(250,250,150);
}

function draw() {
    displayFood(food1);
    displayFood(food2);
    checkFood(food1);
    checkFood(food2);
}

function createFood(x,y,size) {
    let food = {
    x: x,
    y: y,
    size: size,
    eaten: false // We want to track whether the user has eaten the food
  };
  return food;
}


function displayFood(food) {
    if(!food.eaten) {
        push();
        fill();
        ellipse(food.x,food.y,food.size);
        pop();
    }
}

function checkFood(food) {
    if (!food.eaten) {
    let d = dist(user.x, user.y, food.x, food.y);
    if (d < user.size / 2 + food.size / 2) {
      food.eaten = true;
    }
  } 
}

// INSTEAD OF DOING THIS JUST DO DISPLAYFOOD(FOOD) ----------------------------------------------------------------------------------
// Checks if the user overlaps the food1 object and eats it if so
function checkFood1() {
  // We only want to check for an overlap if food1 hasn't been eaten yet
  if (!food1.eaten) {
    let d = dist(user.x, user.y, food1.x, food1.y);
    if (d < user.size / 2 + food1.size / 2) {
      food1.eaten = true;
    }
  }
}

// The same as above, but for food2
function checkFood2() {
  if (!food2.eaten) {
    let d = dist(user.x, user.y, food2.x, food2.y);
    if (d < user.size / 2 + food2.size / 2) {
      food2.eaten = true;
    }
  }
}


// Draw food1 as a circle
function displayFood1() {
  // We don't want to display food1 if it's been eaten
  if (!food1.eaten) {
    push();
    fill(255, 100, 100);
    ellipse(food1.x, food1.y, food1.size);
    pop();
  }
}

// As above but for food2
function displayFood2() {
  if (!food2.eaten) {
    push();
    fill(255, 100, 100);
    ellipse(food2.x, food2.y, food2.size);
    pop();
  }
}