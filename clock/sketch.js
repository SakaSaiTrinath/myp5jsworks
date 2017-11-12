

function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
	//image(img, 0, 0);
}

function draw() {
	background(51);
	translate(200, 200);
	rotate(-90);

	//numbers and points to show time more easily
	fill(255);
	stroke(255);
	for(var i=0;i<12;i++) {
		rotate(30);
		line(0,-150,0,-158);
	}

	//line(0,0,0,200);
	rotate(-271);
	for(var i=1;i<=12;i++) {
		rotate(30);
		text(i,0,-135);
	}

	rotate(-90);
	//clock code
	stroke(255);
	ellipse(0, 0, 250, 250);

	let hr = hour();
	let min = minute();
	let sec = second();

	noFill();
	strokeWeight(5);

	//stroke(0, 0, 200);
	stroke('#1395BA');
	let secangle = map(sec, 0, 60, 0, 360);
	arc(0,0,180,180,0,secangle);
	push();
	rotate(secangle);
	line(0, 0, 85, 0);
	pop();

	//stroke(0, 200, 0);
	stroke('#0D3C55');
	let minangle = map(min, 0, 60, 0, 360);
	arc(0,0,200,200,0,minangle);
	push();
	rotate(minangle);
	line(0, 0, 75, 0);
	pop();

	//stroke(200, 0, 0);
	stroke('#F16C20');
	let hrangle = map(hr%12, 0, 12, 0, 360);
	arc(0,0,220,220,0,hrangle);
	push();
	rotate(hrangle);
	line(0, 0, 50, 0);
	pop();

	//mid point
	noFill();
	stroke(0);
	strokeWeight(5);
	ellipse(0, 0, 5, 5);
	
	//time display in numbers
	//fill(255);
	stroke(0);
	strokeWeight(0.5);
	rotate(90);
	text(hr+" : "+min+" : "+sec,-20,70);




}
