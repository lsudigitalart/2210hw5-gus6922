var s = 1;
var r = 0;
var t = 0;
var bDir = 1;
var ry = 0;
var ty = 0;

function setup() {
  createCanvas(400, 400);
  background(255,182,193);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
}

function draw() {


  translate(width/2, height/2);

  // background(255, 100);
  s = s + 0.005;
  r = r + 10;

  if(t > 300) {
    bDir = 0;
    ry = random(0, height);
    ty = random(height);
  }

  if (t < -300) {
    bDir = 1;
    ry = random(0, height);
    ty = random(height);
  }
  //
  // if(bDir == 1) {
  //   t++;
  // } else {
  //   t--;
  // }
  push();
  translate(t, ty);
  rotate(r);
  scale(s);
  println(t);
  fill(255,127,80,30);
  rect(ry, ry, 20, 20);
  pop();
  // rotate(PI/4);
  push();
  translate(-220,-100);
  triangle(0,height/2,width/4,height/4,width,height/2);
  translate(-200,0);
  triangle(0,height/2,width/2,height/6,width,height/2);
  translate(300,0);
  triangle(0,height/2,5*width/9,height/6,width,height/2);
  translate(250,0);
  triangle(0,height/2,width/4,height/5,width,height/2);
  pop();

  push();

  translate(-220,-100);
  triangle(0,height/2,width/4,height/4,width,height/2);
  translate(-200,0);
  triangle(0,height/2,width/2,height/6,width,height/2);
  translate(300,0);
  triangle(0,height/2,5*width/9,height/6,width,height/2);
  translate(250,0);
  triangle(0,height/2,width/4,height/5,width,height/2);
  fill(0,191,255);
  rect(-width/2,height,2*width,height);
  pop();

push();
fill(176,224,230);
  translate(-220,-100);
  triangle(0,height/2,width/4,10*height/15,width,height/2);
  translate(-200,0);
  triangle(0,height/2,width/2,10*height/15,width,height/2);
  translate(300,0);
  triangle(0,height/2,5*width/9,12*height/15,width,height/2);
  translate(250,0);
  triangle(0,height/2,width/4,11*height/15,width,height/2);
pop();
}
