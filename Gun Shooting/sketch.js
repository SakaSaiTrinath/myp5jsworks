var bullets1=[],bullets2=[],gun1,gun2,p,q,b1,b2,sparks=[],inp,cnv,maxScore=10;

function setup() {
	inp = createInput('Enter Winning Score');
	inp.position(50,20);
	inp.changed(myfun);

	function myfun() {
		maxScore = this.value();
		console.log(maxScore);
	}

	cnv=createCanvas(600, 600);
	cnv.position(50,50);
	gun1 = new Gun(20,height/2-25,0);
	gun2 = new Gun(width-20,height/2-25,1);

	p = createVector();
 	p.set(gun1.getpoint());
 	q = createVector();
 	q.set(gun2.getpoint());
 	b1 = new Bullet(p.x, p.y-7, 3, 0);
 	b2 = new Bullet(q.x, q.y-7, -3, 1);
 	bullets1.push(b1);
 	bullets2.push(b2);
 	// console.log("P:",p.x, " ", p.y-7);
 	// console.log("Q: ",q.x, " ", q.y-7);

 	
}

function keyPressed() {
	if(keyCode === RIGHT_ARROW) {
		p.set(gun1.getpoint());
		b1 = new Bullet(p.x, p.y-7, 3, 0);
		bullets1.push(b1);
	} else if(keyCode === LEFT_ARROW){
		q.set(gun2.getpoint());
		b2 = new Bullet(q.x, q.y-7, -3, 1);
		bullets2.push(b2);
	} 
}

function keyTyped() {
	if(key === 'a') {
		gun1.update(-25);
	} else if(key === 's') {
		gun1.update(25);
	} else if(key === 'k') {
		gun2.update(-25);
	} else if(key === 'l') {
		gun2.update(25);
	} else if(key == 'd') {
		p.set(gun1.getpoint());
		b1 = new Bullet(p.x, p.y-7, 3, 0);
		bullets1.push(b1);
	} else if (key == 'j') {
		q.set(gun2.getpoint());
		b2 = new Bullet(q.x, q.y-7, -3, 1);
		bullets2.push(b2);
	}
	//return false;
}

function draw() {
 	background(51);
 	gun1.highlight(255,255,255);
 	gun2.highlight(255,255,255);

 	var sc1 = gun2.getScore();
 	var sc2 = gun1.getScore();
 	textSize(12);
 	text('SCORE1: '+sc1, 20,50);
 	text('SCORE2: '+sc2, width-80,50);

 	if(maxScore) {
 		if(sc1>=maxScore) {
	 		textSize(30);
	 		text('Player 1 Win',width/2-80,height/2);
	 	} else if(sc2>=maxScore){
	 		textSize(30);
	 		text('Player 2 Win',width/2-80,height/2);
	 	}
 	}

 	//console.log("bullets1: ",bullets1);
 	//console.log("bullets2: ",bullets2);

 	for (var i = bullets1.length - 1; i >= 0; i--) {
 		bullets1[i].show();
 		bullets1[i].update();

 		if(gun2.hits(bullets1[i])) {
	 		gun2.highlight(255,0,0);
	 		console.log("Hitted Gun2");
	 		//console.log(bullets1[i].x,bullets1[i].y);
	 		bullets1.splice(i,1);
	 	} 

 		for (var j = bullets2.length - 1; j >= 0; j--) {
	 		if(bullets1[i] && bullets2[j]) {
	 			if(bullets1[i].hits(bullets2[j])) {
		 			console.log("bullets HIT");
		 			var hx = bullets1[i].x;
		 			var hy = bullets1[i].y;
		 			var hw = bullets1[i].width;

		 			for (var i = 20; i >= 0; i--) {
		 				var rx = random(hx-hw-30,hx-hw+30);
		 				var ry = random(hy-hw-30,hy-hw+30);
						var s = new Spark(rx,ry,8);
						sparks.push(s);
					}

		 			bullets1.splice(i,1);
		 			bullets2.splice(j,1);
		 		}
	 		}
	 	}

	 	if(bullets1[i]) {
	 		if(bullets1[i].x>=width) {
		 		bullets1.splice(i,1);
		 	}
	 	}
 		
 	}
 	
 	for (var i = bullets2.length - 1; i >= 0; i--) {
 		bullets2[i].show();
 		bullets2[i].update();

 		if(gun1.hits(bullets2[i])) {
	 		gun1.highlight(255,0,0);
	 		console.log("Hitted Gun1");
	 		bullets2.splice(i,1);
	 	} 

 		for (var j = bullets1.length - 1; j >= 0; j--) {
	 		if(bullets2[i] && bullets1[j]) {
	 			if(bullets2[i].hits(bullets1[j])) {
		 			console.log("bullets HIT");
		 			var hx = bullets1[i].x;
		 			var hy = bullets1[i].y;
		 			var hw = bullets1[i].width;

		 			for (var i = 20; i >= 0; i--) {
		 				var rx = random(hx-hw-30,hx-hw+30);
		 				var ry = random(hy-hw-30,hy-hw+30);
						var s = new Spark(rx,ry,8);
						sparks.push(s);
					}

		 			bullets2.splice(i,1);
		 			bullets1.splice(j,1);
		 		}
	 		}
	 	}
	 	if(bullets2[i]) {
	 		if(bullets2[i].x<=0 ) {
	 			bullets2.splice(i,1);
	 		}
	 	}
	 	
 	}

 	for (var i = sparks.length - 1; i >= 0; i--) {
		sparks[i].show();
		sparks[i].update();
	}

 	gun1.show();
 	gun2.show();
}
