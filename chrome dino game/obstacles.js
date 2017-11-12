
function Obs() {
	this.height = 60;
	this.width = 20;
	this.x = width-1;
	this.y = 290;
	this.speed = 5;
	this.blockx = 0;
	this.blocky = 0;


	this.hits = function(dino) {
		if((this.x >= dino.x && this.x <= dino.x+dino.width) || (this.x+this.width >= dino.x && this.x+this.width <= dino.x+dino.width)) {
			if(dino.y+dino.height >= this.y && dino.y+dino.height <= this.y+this.height) {
				this.blockx = this.x;
				this.blocky = this.y;

				dino.blockx = dino.x;
				dino.blocky = dino.y;
				return true;
			}
		}
		return false;
	}

	this.display = function() {
		fill(232,81,0);
		noStroke();
		rect(this.x,this.y,this.width,this.height,2);
	}

	this.move = function() {
		if(this.blockx == 0 && this.blocky == 0) {
			this.x -= this.speed;
		} else {
			this.x = this.blockx;
			this.y = this.blocky; 
		}
	}

	this.offscreen = function() {
	    if (this.x < -this.width) {
	      return true;
	    } else {
	      return false;
	   	}
  	}

  	this.endfun = function() {
  		this.blockx = this.x;
		this.blocky = this.y;
  	}
}
