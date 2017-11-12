var start = false;
var dino;
var obs = [];
var stars = [];
var score = 0;

function setup() {
	createCanvas(innerWidth,400);
	dino = new Dinosaur();
	obs.push(new Obs());
	stars.push(new Star());
}


function draw() {
  	background(51);

  	//bottom ground line
  	strokeWeight(2);
  	stroke(255);
	line(0,350,innerWidth,350);

	//score display
	textSize(15);
	strokeWeight(0);
	score = floor(frameCount/2);
	text("SCORE :  "+score,width-200,50);

	//obstacle placement
	for(var i=obs.length-1; i>=0; i--) {
		obs[i].display();
		obs[i].move(5);

		if(obs[i].hits(dino)) {	//if hits game ends
			console.log('HITS');
			dino.display();

			textSize(50);
			text("OOPS!!! GAME ENDED", width/2-250, height/2);
			textSize(20);
			text("Please Refresh the browser to PLAY again!",500,height/2+50);

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

	for(var j=stars.length-1; j>=0; j--) {
		stars[j].display();
		stars[j].update();

		if(stars[j].outOfScreen()) {
			stars.splice(j,1);
		}
	}


	if (frameCount % 80 == 0) {	//On every 80 frames one new obstacle adds
	    obs.push(new Obs());
	}

	if(frameCount % 10 == 0) {	//On every 10 frames one new star adds
		stars.push(new Star());
	}
}

function keyPressed() {	//On pressing spacebar dino starts moves up
	if(key == ' ') {
		start = true;
	}
}
