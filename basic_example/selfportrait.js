var r1 = 0;
var r2 = 0;

function setup() {
    stroke(0);
    noFill();
    rectMode(CENTER);
    var cnv = createCanvas(800, 400);
    //var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    cnv.parent('content');
//    cnv.position(-width/2,0);

}

function draw() {
    background(100,50,0);
    translate(width/2, height/2);
    ellipse(0,0,170,200);
    fill(255);
    ellipse(15,0,15,20);
    ellipse(-15,0,15,20);
    ellipse(-15,4,7,10);
    ellipse(15,4,7,10);


  for (var i = -4; i < width; i++){
  }
  endShape();
}
