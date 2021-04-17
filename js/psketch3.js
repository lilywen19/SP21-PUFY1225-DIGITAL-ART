let x=10
let y=10

function setup() {
  createCanvas(300, 300);
  noLoop()
}

function draw() {
   background(255);
   noStroke();  
  
   for(let y=0;y<=height;y+=50){
    for(let x=0;x<=width;x+=50){
      fill(random(255),random(255),random(255));
    square(x,y,40);
    }
   }
  
   for(let y=0;y<=height;y+=50){
    for(let x=0;x<=width;x+=50){
      fill(random(230),random(200),0);
      circle(x+20,y+20,36);
    }
   }
  
  stroke(255);
  strokeWeight(5);
  line(x+20,y+10,x+75,y+10);
  line(x+165,y+157,x+256,y+157);
  line(x+109,y+120,x+109,y+215);
  line(x+15,y+260,x+100,y+260);
  line(x+260,y+10,x+260,y+70);
}