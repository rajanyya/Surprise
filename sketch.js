var hello,r,ri,a,m,d,mi;

function preload()
{
	
}

function setup() {
	hello=createButton("Surprise!")
  hello.position(500,95);
 hello.mousePressed(surprise);


}


function draw() {
	
}

function surprise(){
	r=createButton("Rajanyya")
  r.position(500,95);
  r.mousePressed(surprise);

  ri=createButton("Ritoja")
  ri.position(600,95);
  ri.mousePressed(surprise);

  a=createButton("Anvita")
  a.position(700,95);
  a.mousePressed(surprise);

  m=createButton("Maanvi")
  m.position(800,95);
  m.mousePressed(surprise);

  d=createButton("Diya")
  d.position(900,95);
  d.mousePressed(surprise);

  mi=createButton("Mihika")
  mi.position(1000,95);
  mi.mousePressed(surprise);
}

function mousePressed(){
   
}
