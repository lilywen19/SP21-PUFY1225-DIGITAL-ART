
let color = 30;
const xPos=100;
const yPos=200;

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(240);
  strokeWeight(0);
	fill(0,117,117);
	rect(xPos-100,yPos-100,15);

	fill(100);
	rect(xPos,yPos,200,20);

	fill(0,158,158);
	rect(xPos/2,yPos*2,300,14);

	fill(75);
	rect(xPos+100,yPos+300,9,150);

	fill(20);
	rect(xPos+300,yPos-100,12,130);
	
}