//improving old "sketch 2", jewelry series

let rectX=0;
let rectY=0;
let d=10;

function setup(){
	createCanvas(600, 600);
    noLoop();
}

function draw(){
	background(255);
	//light cyan 0,158,158
	//dark cyan 0,117,117

//rectangles
	
    strokeWeight(0);
	fill(0,117,117);
	rect(rectX,rectY,200,15);
	rect(rectX+80,rectY+40,40,250);
    rect(rectX+45,rectY+90,20,250);

	fill(35);
	rect(rectX,rectY+475,200,20);
    rect(rectX+35,rectY+500,300,10);

	fill(0,158,158);
	rect(rectX+200,rectY+230,300,14);
	rect(rectX+475,rectY+475,15,170);
	fill(75);
	rect(rectX+295,rectY+275,9,150);
    rect(rectX+500,rectY+530,10,180);

	fill(20);
	rect(rectX+345,rectY,12,130);
  
  //circles

    fill(0,117,117);
	circle(107,75,d+5);
	circle(175,196,d*2.5);
	circle(147,600,d*10);
  
    fill(0,158,158);
	circle(230,131,d*6.5);
	circle(239,398,d*4);
	circle(365,152,d*7.5);

	strokeWeight(3);
	circle(420,560,d*5);
  
    fill(0,158,158);
    circle(600,300,d*13);

    fill(0,158,158);
	strokeWeight(2);
	circle(463,57,d*2);
	circle(538,67,d);
	circle(530,140,d*3.5);
	circle(520,500,d*2.5);
	circle(446,358,d*6.5);


}