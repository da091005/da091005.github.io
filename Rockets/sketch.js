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

var reached=false; 	// Turns true once one rocket reaches the destination (stops mutations) 

// Dimensions of barrier
var rx = 100;
var ry = 150;
var rw = 200;
var rh = 10;

var gen=0; // Number of Generations

function setup() {
  createCanvas(400, 300);
  population = new Population();
  lifeP = createP();
  genP = createP();
  target = createVector(width / 2, 50);

}



function mouseClicked() {
 if(mouseX < width && mouseX >0 && mouseY <height && mouseY >0)
	{
    target.x=mouseX;
    target.y=mouseY;
    reached=false;
	}

  return false;
}

function draw() {
  background(0);
  population.run();
  // Displays count to window
  lifeP.html("Lifecycle: " + count);
  genP.html("Generation: " + gen);

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
