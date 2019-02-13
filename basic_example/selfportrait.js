var r1 = 0;
var r2 = 0;

function setup() {
    stroke(0);
    noFill();
    rectMode(CENTER);
    var cnv = createCanvas(700, 700);
    //var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    cnv.parent('content');
//    cnv.position(-width/2,0);

}

function draw() {
    background('#F0FFFF');
    noStroke()
    translate(width/2, height/2);
    fill('#ffcb9a');
    ellipse(0,0,300,350);

    //hat
    fill('#333');
    arc(0, 0, 300, 350, PI+.3, -.4, OPEN);

    //eyes
    fill(255);
    ellipse(30,0,40,50);
    ellipse(-30,0,40,50);

    //ears
    fill('#ffcb9a');
    ellipse(155,0,30,50);
    ellipse(-155,0,30,50);

    //earrings
    fill(0)
    ellipse(156, 16, 10, 10);
    ellipse(-156, 16, 10, 10);

    //pupil
    fill(0);
    ellipse(-20,10,10,13);
    ellipse(20,10,10,13);

    //eyebrows
    stroke('#333');
    strokeWeight(5);
    noFill();
    arc(32, 0, 80, 80, PI+.9, -.9);
    arc(-32, 0, 80, 80, PI+.9, -.9);
    line(130, -70, 230, -83);

    stroke('#CD853F');
    strokeWeight(3);
    noFill();
    line(0, 30, 10, 50);
    line(10, 50, 0, 50);
    line(-30, 100, 3, 100);


  for (var i = -4; i < width; i++){
  }
  endShape();
}
