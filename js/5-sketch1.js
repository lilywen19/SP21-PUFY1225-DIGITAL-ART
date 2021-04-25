//improving old "sketch 1", jewelry series
let d= 10;

function setup(){
	createCanvas(700, 700);
	noLoop();
    colorMode(RGB);
}

function draw(){
	//255
	background(236)
//first set
	noFill();
	strokeWeight(10);
	stroke(0,0,0);
	beginShape();
	vertex(17,86);
	vertex(40,66);
	vertex(180,66);
	vertex(200,86);
	vertex(200,160);
	vertex(180,180);
	vertex(40,180);
	vertex(17,160);
	endShape(CLOSE);
  
    noStroke();
    fill(0,117,117);
    circle(125,125,d*4.5)
//second set
	noFill();
	strokeWeight(10);
	stroke(0,0,0);
	beginShape();
	vertex(440,86);
	vertex(470,55);
	vertex(560,55);
	vertex(590,86);
	vertex(590,240);
	vertex(560,270);
	vertex(470,270);
	vertex(440,240);
	endShape(CLOSE);
	
	noStroke();
	fill(0,117,117);
	rect(480,95,75,140);
//third set
	fill(0,117,117);
	beginShape();
	vertex(320,370);
	vertex(350,350);
	vertex(500,350);
	vertex(525,370);
	vertex(525,460);
	vertex(500,480);
	vertex(350,480);
	vertex(320,460);
	endShape(CLOSE);

//lines	on top
	strokeWeight(8);
	stroke(0,0,0);
	line(275,0,275,100);
    line(305,0,305,340);
  
//line on bottom  
	line(350,700,350,540);
	line(375,700,375,600);
  
//line on left
	line(0,480,200,480);
  
//line on right
    line(700,320,500,320);
  
//light cyan rectangle 	
	noFill();
	strokeWeight(12);
	stroke(0,158,158);
	rect(150,250,60,150);

//circles 	
	strokeWeight(0);
	fill(0,158,158);
	circle(75,10,d*7);


	fill(0,117,117);
	circle(285,60,d*2);
	circle(84,216,d);
	circle(0,288,d*2.5);
    circle(539,19,d+4);
	circle(583,103,d*5);
	
    fill(0,158,158);
	circle(107,399,d+5);
	circle(103,506,d*3.5);
	circle(305,264,d+7);
	circle(325,480,d*3);
	circle(670,670,d*10);
	circle(541,392,d*4);	
	
}

function mousePressed(){
    
    for (let i = 0; i <30; i++) {
    fill(0,random(158),random(158));
    let size = random(50);
    ellipse(random(700), random(700), size, size);
  }
}