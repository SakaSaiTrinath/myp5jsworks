 
function Spark(x, y, size) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.vel = random(-2,-6);

	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, this.size, this.size);
	}

	this.update = function() {
		this.y+=this.vel;
	}

}
