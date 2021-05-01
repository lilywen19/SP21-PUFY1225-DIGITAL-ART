//based on this site[https://theibbster.medium.com/a-gentle-introduction-to-coding-by-making-generative-art-c7f0a7b744a6]


function setup() {
  createCanvas(500, 700, SVG);
  noLoop();
  rectMode(CENTER);
}

function draw() {
  background(229, 232, 182);
  let step = 50;
  for (let x = 0; x < 500; x = x + step) {
    for (let y = 0; y < 500; y = y + step) {
      drawRandomSquare(x, y, step);
    }
  }
  save("6-sketch2.svg");
  print("saved svg");
  noLoop();
}

function drawRandomSquare(x,y,step) {
  fill(125, 134, 156);
  stroke(88, 105, 148);
  push();
  translate(x+step/2,y+step/2);
  let maxRotation = map(y,0,400,0,PI);
  rotate( random(0,maxRotation) );
  rect(0,0,step,step);
  pop();
  
  push();
  fill(140,160,185);
  translate(x+step/2,y+step/2);
  rotate( random(0,maxRotation) );
  triangle(x+5,10,10,y+20,x+10,y+10);
  pop();
}