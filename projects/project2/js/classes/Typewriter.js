// Typewriter class that allows the dialogue have a typewriter animation
//  Code from : https://github.com/pippinbarr/cart253-2020/blob/master/examples/text/typewriter-effect/js/Typewriter.js
class Typewriter {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.fullText = ``;
    this.displayText = ``;
    this.nextChar = 0;
    this.speed = 40;
    this.interval = undefined;
    this.finished = true;
  }

  typewrite(message, x, y) {
    this.reset();
    this.fullText = message;
    this.x = x;
    this.y = y;

    // Start our interval to call addNextCharacter repeatedly at the typewriter
    // speed so that we add characters to the displayed text over time
    this.interval = setInterval(this.addNextCharacter.bind(this), this.speed);
  }

  // Adds the next character to our display text if possible
  addNextCharacter() {
    // First check if we've reached the end of the full text
    if (this.nextChar >= this.fullText.length) {
      this.finished = true; //phrase is completed
      clearInterval(this.interval);
    }

    // Add the next character of the full text to the displayed next
    this.displayText += this.fullText.charAt(this.nextChar);
    this.nextChar = this.nextChar + 1;
  }

  // Skip the phrase to the end
  skipToEnd() {
    this.displayText = this.fullText;
    clearInterval(this.interval);
    this.finished = true;
  }

  // Display the current display text at the correct location
  display() {
    push();
    fill(255);
    textSize(18);
    textFont(myFont);
    textAlign(LEFT, BOTTOM);
    text(this.displayText, this.x, this.y);
    pop();
  }

  // Empty the texts and reset the counters and cancel the interval
  reset() {
    this.fullText = ``;
    this.displayText = ``;
    this.nextChar = 0;
    this.finished = false;
    clearInterval(this.interval);
  }

}