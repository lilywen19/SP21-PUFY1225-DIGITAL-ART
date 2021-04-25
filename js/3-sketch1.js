//runs once and setups the scene
function setup(){
	createCanvas(600, 600);

}

//runs FOREVER
function draw(){
	//255
	background(236);
	//light cyan 0,158,158
	//dark cyan 0,117,117
	noFill();
	strokeWeight(10);
	stroke(0,0,0);
	beginShape();
	vertex(24,149);
	vertex(24,81);
	vertex(39,66);
	vertex(159,57);
	vertex(175,72);
	vertex(175,129);
	vertex(146,153);
	vertex(43,153);
	vertex(24,149);
	endShape();
//first set
	noFill();
	strokeWeight(10);
	stroke(0,0,0);
	beginShape();
	vertex(370,46);
	vertex(374,44);
	vertex(442,42);
	vertex(463,189);
	vertex(463,189);
	vertex(442,216);
	vertex(374,218);
	vertex(347,204);
	vertex(347,73);
	vertex(370,46);
	endShape();
	
	noStroke();
	fill(0,117,117);
	rect(370,75,60,120);
//second set
	fill(0,117,117);
	beginShape();
	vertex(337,377);
	vertex(358,357);
	vertex(484,357);
	vertex(484,357);
	vertex(506,377);
	vertex(506,449);
	vertex(484,468);
	vertex(358,468);
	vertex(337,446);
	vertex(337,377);
	endShape();

	
	strokeWeight(8);
	stroke(0,0,0);
	line(218,0,218,102);
	line(359,289,450,289);
	line(211,406,211,600);
	line(410,547,554,547);

	noFill();
	strokeWeight(15);
	stroke(0,158,158);
	rect(142,207,60,150);

	
	strokeWeight(0);
	fill(0,158,158);
	ellipse(75,10,70,70);

	fill(0,117,117);
	ellipse(285,60,20,20);
	ellipse(84,216,10,10);
	ellipse(0,288,25,25);

	fill(0,158,158);
	ellipse(107,399,15,15);
	ellipse(103,506,35,35);
	ellipse(305,264,17,17);

	fill(0,117,117);
	ellipse(325,480,30,30);
	ellipse(516,188,23,23);

	fill(0,158,158);
	ellipse(541,392,40,40);

	fill(0,158,158);
	ellipse(539,19,14,14);
	ellipse(583,103,55,55);

	
	
}