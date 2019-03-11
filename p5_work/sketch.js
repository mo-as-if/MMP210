function setup() {
  createCanvas(720, 400);
} // controls the entire display of the canvas and its size.

function draw() {
  background(0); // controls shade of background color of the

  push();
  translate(width*0.2, height*0.5); // defines the placement of the polygon
  rotate(frameCount / 20.0); // creates the rotating animation. the lower the value, the faster it rotates.
  polygon(0, 0, 82, 3); // first value defined its x-position. second value its y-position. third value, size of the polygon, and the fourth value, defines the number of vertices.
  pop(); // the lack of this code caused the other polygons to get pushed under the canvas.

  push();
  translate(width*0.5, height*0.5);// defines the placement of the polygon
  // rotate(frameCount / 50.0);// creates the rotating animation.the lower the value the faster it rotates.
  polygon(0, 0, 80, 6); // first value defined its x-position. second value its y-position. third value, size of the polygon, and the fourth value, defines the number of vertices.
  pop(); // the lack of this line of code caused the third polygon to disappear.

  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0); // creates the rotating animation.the lower the value the faster it rotates.
  polygon(0, 0, 70, 8);
  pop(); // blocking this code out seemed to have no effect on the other polygons.
}

function polygon(x, y, radius, npoints) { // blocking this code removed the entire canvas.
  var angle = TWO_PI / npoints; // blocking this code caused the polygons to disappear, but the canvas remained.
  beginShape(); // blocking this made the polygons almost 3D, and they rotated slow and glitchy. this is probably responisble for applying restraints to the polygons.
  for (var a = 0; a < TWO_PI; a += angle) { // deleted everything.
    var sx = x + cos(a) * radius; // deleted polygons but kept canvas.
    var sy = y + sin(a) * radius;// deleted polygons but kept canvas.
    vertex(sx, sy);// deleted polygons but kept canvas.
  }
  endShape(CLOSE);// deleted polygons but kept canvas. closing tag.
}
