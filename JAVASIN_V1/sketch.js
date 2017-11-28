var black = 0;
var diam1 = 10;
var r, g, b; 
function setup() {
    canvas = createCanvas(750, 500);
    canvas.position(70,100);
    r = random(255);
    g = random(255);
    b = random(255)
}
function draw() {
    background(black);// put drawing code here
    fill(r, g, b, 127);
    stroke(r, g, b);
    strokeWeight(10);
    ellipse(375, 250, diam1, diam1);
    triangle(30, 75, 58, 20, 86, 75);
    triangle(700, 75, 672, 20, 644, 75);
    triangle(30, 450, 58, 395, 86, 450);
    triangle(700, 450, 672, 395, 644, 450);
    push();
    translate(width*0.5, height*0.5);
    rotate(frameCount / 50.0);
    star(0, 0, 80, 100, 40); 
    pop();
    
}
    function mousePressed(){
        black = black+12;
        // Increase diamiter by 20
        diam1 = diam1+20;
        // Chose random colors
        r = random(255);
        g = random(255);
        b = random(255);
    }
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
 