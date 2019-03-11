var mx = 1;
var my = 1;
var easing = 0.05;
var radius = 24;
var edge = 100;
var inner = edge + radius;

function setup() {
  createCanvas(720, 400);
  noStroke();
  ellipseMode(RADIUS);
  rectMode(CORNERS);
}

function draw() {
  background(180);

  if (abs(mouseX - mx) > 0.1) {
    mx = mx + (mouseX - mx) * easing;
  }
  if (abs(mouseY - my) > 0.1) {
    my = my + (mouseY- my) * easing;
  }

// constrain box
  mx = constrain(mx, inner, width - inner);
  my = constrain(my, inner, height - inner);
  col = map(mouseX, 0, 720, 255, 0);
  fill(col);
  rect(edge, edge, width-edge, height-edge);
  fill(237,34,93);
  ellipse(mx, my, map(mouseX, 0, 720, radius, radius * .25));

// pressed line
  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
}

}
