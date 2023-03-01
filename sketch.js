var firstBranchSize = 150;
const branchWeight = 0.75;
var branchRatio = 0.7;
const bottomGap = 25;
var angle = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(30);

  angleMode(DEGREES);
  stroke(220);
  strokeWeight(branchWeight);
  strokeCap(SQUARE);


  translate(windowWidth / 2, windowHeight - bottomGap);
  branch(firstBranchSize);
}

function branch(size) {
  line(0, 0, 0, -size);
  translate(0, -size);

  if (size * branchRatio >= 1) {
    push();
    rotate(angle);
    branch(size * branchRatio);
    pop();
    rotate(-angle);
    branch(size * branchRatio);
  }
}