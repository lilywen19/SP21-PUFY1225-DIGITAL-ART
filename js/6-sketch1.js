//improving 5-"sketch 3", jewelry series

let d=10;
function setup(){
	createCanvas(600, 600);
    noLoop();
    let button = createButton("reset sketch");
    button.mousePressed(resetSketch);

}

function draw(){
	background(245);
	//light cyan 0,158,158
	//dark cyan 0,117,117
  }  

function mouseMoved(){  
//top rectangle
  
  if(mouseX>400){
    stroke(1);
    fill(0);
	rect(303,30,300,20);
    } 
    else if (mouseX>200){
    noFill();
    stroke(0,0,0);
	rect(303,30,300,20);
    }
  
//bottom rectangle
  	if(mouseX>400){
      noFill();
      rect(0,535,250,15);
    }
    else if(mouseX<300){
      fill(0,0,0);
      rect(0,535,250,15);
    }
//circle 
	if (mouseY>400){
      fill(0,117,117);
      circle(0,0,d*7);
	  circle(74,241,d*8);
	  circle(27,366,d*12);
	  circle(193,331,d*2.5);
    }
    else if (mouseY<300){
 	noFill();
	stroke(0,117,117);
	strokeWeight(2.5);
     circle(0,0,d*7);
	 circle(74,241,d*8);
	 circle(27,366,d*12);
	 circle(193,331,d*2.5);
    }
//quad 1
  	if(mouseX>400){
      fill(0,158,158);
      quad(400,184,464,176,496,277,372,278);
    }
    else if(mouseX<300){
      noFill();
      quad(400,184,464,176,496,277,372,278);     
    }
//quad 2 
  	if(mouseX>400){
      noFill();
      quad(423,534,520,531,501,600,451,600);
    }
    else if(mouseX<300){
      fill(0,158,158);
      quad(423,534,520,531,501,600,451,600);      
    }
//quad 3 
  	if(mouseX>400){
      fill(0,117,117);
     quad(79,90,156,90,136,147,95,149);
    }
    else if(mouseX<300){
      noFill();
      quad(79,90,156,90,136,147,95,149);     
    }
//quad 4 
    if(mouseX>400){
      fill(0,158,158);
     quad(180,419,230,417,254,502,162,502);
    }
    else if(mouseX<300){
      noFill();
      quad(180,419,230,417,254,502,162,502);    
    }
  
//stone cut 1  
  if(mouseY>400){
    noFill();
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
  }
  else if(mouseY<300){
    fill(0,117,117);
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
  }
//stone cut 2  
  if(mouseX >400){
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
  else if( mouseY<300){
    noFill();
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


}

function resetSketch() {
  background(245);

}