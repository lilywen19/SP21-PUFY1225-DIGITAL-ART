const rectX=10;
const rectY=20;
let d=10;
let triX=15;
let triY=30;

function setup() {
  createCanvas(300, 300);
  noLoop()
}

function draw() {
   background(230);
   noStroke();  
  
   for(var y=0;y<=height;y+=30){
    for(var x=0;x<=width;x+=30){
      fill( 239, 253, 95);
    rect(x,y,30,20);
    }
  } 
  
  fill(200,200,230);
  rect(rectX+100,rectY+30,40,80);
  rect(rectX+230,rectY+150,50,20);
  rect(rectX+30,rectY+200,30,60);
  rect(rectX+200,rectY+19,70,30);
  rect(rectX+123,rectY+230,110,30);
 
  fill(255,120,30);  
  triangle(triX+200,triY+70,triX+250,triY+90,triX+180,triY+90);
  triangle(triX+43,triY+100,triX+20,triY+130,triX+50,triY+140);

  fill(100, 149, 237);
  stroke(255);
  circle(30,30,d*2);
  circle(200,200,d*5)
  strokeWeight(9); 
  line(56,70,69,100);
  line(120,210,160,160);
  
}