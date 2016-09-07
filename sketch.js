var pupilX=60;
var pupilY=75;
var noseX= 125;
var noseY= 125;

function setup() {
  
  createCanvas(500,500);
  console.log("current width: "+width);
  console.log("current height: "+height);

}

function draw() {

  

  //nose
   fill('rgba(0,255,0, 0.25)')
    ellipse(noseX,noseY,20,20)

  //mouth
  fill('#fae');
    rect(50,150,150,150);
    line(50,250,200,250);
    line(125,150,125,300);
    
    //eyes
    fill(230,230,230)
    ellipse(50,50,100,100);
    ellipse(200,50,100,100);
  
   //pupils'
  
   fill(0,0,0)
     ellipse(pupilX,pupilY,50,50);
     
     
   
   fill(0,0,0);
    ellipse(pupilX+150,pupilY,50,50);
  
}
  
  