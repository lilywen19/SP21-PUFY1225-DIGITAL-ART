//based on this site[https://theibbster.medium.com/a-gentle-introduction-to-coding-by-making-generative-art-c7f0a7b744a6]


function setup() {
  createCanvas(500, 500);
  noLoop();
  rectMode(CENTER);
}

function draw() {
  background(229, 232, 182);
  let step = 30;
  for (let x = 0; x < 500; x = x + step) {
    for (let y = 0; y < 500; y = y + step) {
      drawRandomSquare(x, y, step);
    }
  }
}

function drawRandomSquare(x,y,step) {
	strokeWeight(3);
    if (random()>0.5){
      fill(255,140,0)
      square(x+step,y+step,20);
    }else{
      square(x,y+step,20,30,25,20,12);
    
    }
  
    if(random()>0.2){
      fill(238,220,130);
      line(x+step,y,x,y+step);
    } else{
      fill(203,119,14);
      fill(255,218,185);
      triangle(x,y,x+step,y,x,y-step);
    }

}