//improving old "sketch 3", jewelry series

let d=10;
function setup(){
	createCanvas(600, 600);
    noLoop();

}

function draw(){
	background(255);
	//light cyan 0,158,158
	//dark cyan 0,117,117
  
  
	//nofill
	noFill();
	stroke(0,117,117);
	strokeWeight(2.5);
	circle(0,0,d*7);
	circle(74,241,d*8);
	circle(27,366,d*12);
	circle(193,331,d*2.5);
	
	quad(400,184,464,176,496,277,372,278);
	quad(423,534,520,531,501,600,451,600);

	stroke(0,0,0);
	rect(303,30,300,20);

	beginShape();
	vertex(300,367);
	vertex(313,342);
	vertex(365,342);
	vertex(378,367);
	vertex(378,470);
	vertex(365,481);
	vertex(313,481);
	vertex(300,470);
	vertex(300,367);
	endShape();

//fill
	fill(0,117,117);
	noStroke();
	quad(79,90,156,90,136,147,95,149);
	quad(180,419,230,417,254,502,162,502);

	fill(30);
	rect(0,535,250,15);

	fill(0,117,117);
	beginShape();
	vertex(229,147);
	vertex(244,125);
	vertex(301,125);
	vertex(320,147);
	vertex(320,217);
	vertex(301,235);
	vertex(244,235);
	vertex(229,217);
	vertex(229,147);
	endShape();
}

function mousePressed(){
       
  for (let i = 0; i < 10; i++) {
    strokeWeight(random(10));
    let d = random(100);
    circle(random(width), random(height), d);
    
  }
  
  for (let i = 0; i < 10; i++) {
    strokeWeight(random(10));
    let l = random(100);
    let w = random(10)
    rect(random(width), random(height), l,w);
    
  }
}