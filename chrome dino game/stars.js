function Star() {
	this.x = random(width);
	this.y = random(200);
	this.width = 5;
	this.speed = 2;

	this.display = function() {
		fill(255);
		ellipse(this.x,this.y,5,5);
	}
 
	this.update = function() {
		this.x -= this.speed;
	}

	this.outOfScreen = function() {
		if (this.x < -this.width) {
	      return true;
	    } else {
	      return false;
	   	}
	}
}
