
var col = 0;
var hat = 255;

function setup() {
    stroke(0);
    noFill();
    rectMode(CENTER);
    var cnv = createCanvas(700, 600);
    //var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    cnv.parent('content');
   cnv.position(width/2,height/10);

}

function draw() {
    //canvas + head
    col = map(mouseX, 0, 700, 255, 0);
    background(col);
    noStroke();
    translate(width/2, height/2);
    rotate(frameCount / 1000);
    fill('#A36840');
    ellipse(0,0,300,350);


    //hat
    push();
    fill(hat);
    hat = map(mouseX, 0, 700, 0, 255);
    noStroke();
    arc(0, 0, 300, 353, PI+.3, -.4, OPEN);
    pop();

    push();
    stroke(hat);
    hat = map(mouseX, 0, 700, 0, 255);
    strokeWeight(5);
    noFill();

    line(130, -71, 230, -83);
    pop();

    //eyes
    push();
    fill(255);
    ellipse(30,0,40,50);
    ellipse(-30,0,40,50);
    pop();

    //ears
    push();
    fill('#A36840');
    ellipse(155,0,30,50);
    ellipse(-155,0,30,50);
    pop();

    //earrings
    push();
    fill(0)
    ellipse(156, 16, 10, 10);
    ellipse(-156, 16, 10, 10);
    pop();

    //pupil
    push();
    fill(0);
    ellipse(map(mouseX, 0, width, -10, -5) -20, 10, 10, 13);
    // ellipse(-25,10,10,13);
    pop();

    push();
    fill(0);
    ellipse(map(mouseX, 0, width, 45, 50) -20, 10, 10, 13);
    // ellipse(20,10,10,13);
    pop();

    //eyebrows
    push();
    stroke(0);
    strokeWeight(5);
    noFill();
    arc(32, 0, 80, 80, PI+.9, -.9);
    arc(-32, 0, 80, 80, PI+.9, -.9);
    pop();

    //nose + mouth
    push();
    stroke('#814C29');
    strokeWeight(3);
    noFill();
    line(0, 30, 10, 50);
    line(10, 50, 0, 50);
    line(-30, 100, 3, 100);
    line(-15, 105, -11, 105);
    pop();

  endShape();

  console.log("X: " + mouseX);
  console.log("Y: " + mouseY);

}
