function setup() {
  createCanvas(500,500);
  rectMode(CENTER);
  noLoop();
 
}

function draw() {
  background(255);

  for(var y=0;y<=height;y+=30){
    for(var x=0;x<=width;x+=30){
      fill(	239, 253, 95);
      ellipse(x,y,50,50);
    }
  } 

}

function mousePressed(){
  for(let circleY= 75; circleY <=470; circleY +=75){
  for(let circleX=75; circleX <=470; circleX +=75){
    noStroke();
    fill(random(200),random(200),random(200),200);
    circle(circleX,circleY,30);
    
    }
   }
}