//reference: https://editor.p5js.org/wenhuamin/sketches/pTfpfPele
//hexagon: https://editor.p5js.org/jenagosta/sketches/Sy5wzBblg
function setup() { 
  createCanvas(600, 600);
  background(0);
  textSize(13);
  textFont('Mukta')
  fill(255);
  text('Checkout Different Gemstone Colors and Cuts',185,270);
  text('Key 1-6: Choose color and stone Cut options | Key 7: Screenshot | Key 8: Instructions',80,290);
  
}

function draw() {

  
}

function keyPressed(){

  if (key === '1'){
 //c
 fill(210,31,173);
 noStroke();
 rect (0,0,600,600);
//info
 fill(255);
 textSize(20);
 textFont('Mukta');
 text('Citrine',460,550);
 text('Swiss Cut',460,578);
 //s 
 noFill(); 
 stroke(255);
 strokeWeight(3);
 circle(310,280,250);
 
  noFill();  
  push();
  translate(310,280);
  polygon(0,0, 80, 8);
  pop();
    
  line(255,225,262,165);
  line(311,201,262,165);
  line(311,201,361,165);
  line(367,224,361,165);
  line(367,224,425,229);
  line(390,279,425,229);
  line(390,279,427,323);
  line(367,337,427,323);
  line(367,337,360,395);
  line(311,361,360,395);
  line(311,361,261,395);
  line(256,337,261,395);
  line(256,337,193,320);
  line(231,280,193,320);
  line(231,280,196,233);
  line(255,225,196,233);

 } 

 if (key === '2'){
//c
 fill(210,230,238);
 noStroke();
 rect (0,0,600,600);
//info
 fill(0,3,120);
 textSize(20);
 textFont('Mukta');
 text('Diamond',450,550);
 text('Single Cut',450,578);
//s
 noFill();
 stroke(0,3,120);
 strokeWeight(3);
 circle(310,280,250);
 
  noFill();  
  push();
  translate(310,280);
  polygon(0,0, 80, 8);
  pop();

  line(255,224,216,196);
  line(311,201,313,154);
  line(367,224,398,188);
  line(391,279,435,279);
  line(367,337,403,365);
  line(311,361,311,404);
  line(256,337,216,363);
  line(231,280,185,278);

 } else if (key === '3'){

 fill(56,110,6);
 noStroke();
 rect (0,0,600,600);

 fill(255);
 textSize(20);
 textFont('Mukta');
 text('Emerald',450,550);
 text('French Cut',450,578);

  noFill();
  stroke(255);
  strokeWeight(3);
  square(210,190,200);

  push();
  translate(310,220);
  rotate(95);
  square(0,0,100);
  pop();
  
  line(208,189,241,293);
  line(208,189,309,220);
  line(408,189,309,220);
  line(408,189,382,288);
  line(409,390,382,288);
  line(409,390,313,361);
  line(209,390,313,361);
  line(209,390,241,293);

 } else if (key === '4'){
 //c
 fill(168,17,25);
 noStroke();
 rect (0,0,600,600);
//info
 fill(255);
 textSize(20);
 textFont('Mukta');
 text('Ruby',470,550);
 text('Fire Rose Cut',470,578);
//s
hexagon(300,300,1);
hexagon(300,300,0.7);
//short line
line(225,170,248,210);
line(375,170,351,209);
line(450,300,405,300);
line(375,430,353,391);
line(225,430,246,391);
line(150,300,195,300);
//long line
line(248,210,246,391);
line(351,209,353,391);
line(351,209,195,300);
line(405,300,246,391);
line(405,300,248,210);
line(353,391,195,300);
line(195,300,351,209);

 } else if (key === '5'){
//c 
 fill(0,3,120);
 noStroke();
 rect (0,0,600,600);
//info
 fill(255);
 textSize(20);
 textFont('Mukta');
 text('Sapphire',445,550);
 text('Bevel Cut',445,578);
//s
 noFill();
 strokeWeight(3);
 stroke(230);
 rect(250,170,150,275);
 rect(275,195,100,230);
 
 line(250,170,275,195);
 line(400,170,375,195); 
 line(250,445,275,425);
 line(400,445,375,425);

 }else if (key === '6'){
 //c
 fill(139,178,184);
 noStroke();
 rect (0,0,600,600);
//info
 fill(255);
 textSize(20);
 textFont('Mukta')
 text('Zircon',450,550);
 text('Zinnia Cut',450,578);
//s
  noFill(); 
  stroke(255);
  strokeWeight(3);
  circle(310,280,250);

  noFill();  
  push();
  translate(310,280);
  polygon(0,0, 100, 8);
  pop();
   
  push();
  translate(213,280);
  rotate(150);
  square(0,0,139);
  pop();
  
  push();
  translate(387,340);
  rotate(135);
  square(0,0,136);
  pop();
   
  line(219,193,239,209);
  line(312,155,311,181);
  line(398,191,378,207);
  line(436,283,410,279);
  line(404,365,383,346);
  line(310,406,312,381);
  line(219,366,244,352);
  line(184,282,210,279);
 }  
     if (key === '7') {
 //png
save('Gemstone')
 } 
  if (key === '8') {
  background(0);
  textSize(13);
  textFont('Mukta')
  fill(255);
  text('Checkout Different Gemstone Colors and Cuts',185,270);
  text('Key 1-6: Choose color and stone Cut options | Key 7: Screenshot | Key 8: Instructions',80,290);
 } 
}

function hexagon(transX, transY, s) {
  stroke(255);
  strokeWeight(3);
  noFill();
  push();
  translate(transX, transY);
  scale(s);
  beginShape();
  vertex(-75, -130);
  vertex(75, -130);
  vertex(150, 0);
  vertex(75, 130);
  vertex(-75, 130);
  vertex(-150, 0);
  endShape(CLOSE); 
  pop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}



