// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/bGz7mv2vD6g

var population;
// Each rocket is alive till 400 frames
var lifespan = 400;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.2;

// Slider variables and changed flags
var tarx;		// Xpos slider
var tary;		// Ypos slider
var prvx;		// Previous position of x slider
var prvy;		// Previous position of y slider
var xP;			// Paragraph Dom element for xslider
var yP;			// Paragraph DOM elemenent for yslider


var reached=false; 	// Turns true once one rocket reaches the destination (stops mutations) 

// Dimensions of barrier
var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

var gen=0; // Number of Generations

function setup() {
  createCanvas(400, 300);
  tarx= createSlider(0, width, width/2, 1);
  tary= createSlider(0, height, height/2, 1);
  prvx = tarx.value();
  prvy= tary.value();
  tarx.position(180, height +95);
  tary.position(180, height +145);
  population = new Population();
  lifeP = createP();
  genP = createP();
  xP = createP();
  yP = createP();
  target = createVector(width / 2, 50);

}



function mouseClicked() {
 if(mouseX < width && mouseX >0 && mouseY <height && mouseY >0)
	{
    target.x=mouseX;
    tarx.value(mouseX);
    target.y=mouseY;
    tary.value(mouseY);
    reached=false;
	}

  return false;
}

function draw() {

// Set the found flag to false if slider has changed
if (tarx.value() != prvx)
	{
  target.x= tarx.value();
  prvx=target.x;
  reached=false;
	}

if (tary.value() != prvy)
	{
  target.y= tary.value();
  prvy=target.y;
  reached=false;
	}




  background(0);
  population.run();
  // Displays count to window
 
  lifeP.html("<font size = " + '"' + "+1" + '"' + "><pre> Lifecycle: "+ count + "        This target reached: " + reached +".");	
  genP.html("<font size = " + '"' + "+1" + '"' + "><pre> Generation: " + gen + "        Mutations possible: " + !reached +".");
  xP.html("<font size = " + '"' + "+1" + '"' + "><pre> Target X Pos: " + tarx.value());
  yP.html("<font size = " + '"' + "+1" + '"' + "><pre> <br>Target Y Pos: " + tary.value());

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
   gen++;
  }
  // Renders barrier for rockets
  fill(255);
  rect(rx, ry, rw, rh);
  // Renders target
  ellipse(target.x, target.y, 16, 16);
}
