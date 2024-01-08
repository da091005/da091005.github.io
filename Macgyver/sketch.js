var test;
var final=[];
var count=0;
var next="";

function preload(){
  test= loadStrings('quotes.txt');
  //console.log(test)
  
}

function setup() {
  createCanvas(1200, 400);
  
  for(var i=0; i<test.length; i++)
  {
  if(test[i]!="%%")
      {
      next=next+'\n' +test[i];
      }
    else
    {
    final.push(next);
    next="";
    }
  }
  //count=final.length-1;
  display();
}

function display()
{
//text(random(final), 10,10);
background(0);
fill(255)
  textSize(20);
text("RANDOM FORTUNE", width/2, 20);
  textSize(12);
text(random(final), (width/2)-50,40);
//text(final[count], width/2, 40);
//console.log(final.length);
}

function keyPressed()
{
count++;
display();
  
  
}
