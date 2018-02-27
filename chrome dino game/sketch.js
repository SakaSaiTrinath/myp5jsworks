var start = false;
var groundy = 350;
var dino;
var obs = [];
var stars = [];
var score = 0;  
var hit;
var buttonPress;
var scoreReached;
var speed=5;
var gap=150;
var pikachu;
var obspic1; 
var obspic2;
var obspic3;
//var birdpic;

function preload() {
	hit = loadSound("sounds/hit.mp3");
	buttonPress = loadSound("sounds/button-press.mp3");
	scoreReached = loadSound("sounds/score-reached.mp3"); 
	pikachu = loadImage("images/pikachu4.png");
	obspic1 = loadImage("images/obs1.png");
	obspic2 = loadImage("images/obs2.png");
	obspic3 = loadImage("images/obs3.png");
	//birdpic = loadImage("images/birdpic.png");
} 


function setup() {

	let canvas = createCanvas(800,400);
	canvas.position((innerWidth-width)/2,(innerHeight-height)/2);
	dino = new Dinosaur(pikachu,groundy); 
	obs.push(new Obs());
	stars.push(new Star());
}


function draw() {
  	background(51);

  	//bottom ground line
  	strokeWeight(2);
  	stroke(255);
	line(0,groundy+2,innerWidth,groundy+2);

	//score display
	textSize(15);
	strokeWeight(0);
	stroke(255);
	score = floor(frameCount/5)+9;
	if(score%100==0)
		scoreReached.play();
	
	text("SCORE :  "+score,width-200,50);  

	//obstacle placement
	for(var i=obs.length-1; i>=0; i--) {
		obs[i].display();
		obs[i].move();
					
		if(score%100==0) {
			speed+=0.05;
			obs[i].upspeed(speed);
		}

		if(obs[i].hits(dino)) {	//if hits game ends
			//console.log('HITS');
			hit.play();
			dino.display();

			stroke(255);
			fill(255);
			textSize(50);
			text("OOPS!!! GAME ENDED", width/2-250, height/2);
			textSize(20);
			text("Please Refresh the browser to PLAY again!",width/2-170,height/2+50);

			for(var i=obs.length-1; i>=0; i--) {
				obs[i].endfun();
			}
		}

		if(obs[i].offscreen()) {
			obs.splice(i,1);
		}
	}

	//dinosaur placement
	if(start) {
		start = dino.update();
	}

	dino.display();

	//stars placement
	for(var j=stars.length-1; j>=0; j--) {
		stars[j].display();
		stars[j].update();

		if(stars[j].outOfScreen()) {
			stars.splice(j,1);
		}
	}

	

	//---------------------------------------------------------------------------------------------------------
	var obsx = width-random(gap);

	if(score%200==0)
		gap+=5;

	if (frameCount % 80 == 0) {	//On every 80 frames one new obstacle adds

    	if(frameCount % 200 == 0) {		//normal obstacle adds
    		if (score>500) { 
	    		var pos = [0,1];
				var p = random(pos);
				if(p == 0) {
					 obs.push(new Obs(obspic1,obsx,speed,1,p,groundy));
				} else { 
					 obs.push(new Obs(obspic1,obsx,speed,1,p,groundy));
				}
	    	}
		} else {			//normal obstacle adds
			var pos = [0,1,2];			
			var p = random(pos);

			if(p == 0) {
				obs.push(new Obs(obspic1,obsx,speed,0,0,groundy));				
			} else if (p == 1) {
				obs.push(new Obs(obspic2,obsx,speed,0,0,groundy));
			} else {
				obs.push(new Obs(obspic3,obsx,speed,0,0,groundy));
			}
			//obs.push(new Obs(obspic2,obsx,speed,0,0,groundy));	
		}
										
	}

	if(frameCount % 10 == 0) {	//On every 10 frames one new star adds
		stars.push(new Star());
	}

}

function keyPressed() {	//On pressing spacebar dino starts moves up
	if(key == ' ') {
		start = true;
		buttonPress.play();
	}
}
