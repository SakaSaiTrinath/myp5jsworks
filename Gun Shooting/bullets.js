 
function Bullet(x, y, vel, pos) 
{
	this.x = x;
	this.y = y;
	this.width = 20;
	this.height = 12;
	this.vel = vel;
	this.acc = 0;
	this.pos = pos;

	this.show = function() {
		if(this.pos==0) {
			fill(255);
			rect(this.x, this.y, this.width, this.height, 0, 8, 8, 0);
		} else if(pos == 1) {
			fill(255);
			rect(this.x, this.y, this.width, this.height, 8, 0, 0, 8);
		}
	}

	this.accelerate = function(acc) {
		this.acc = acc;
	}

	this.update = function() {
		this.vel += this.acc;
		this.x+=this.vel;
		//console.log("vel: ",this.vel,"acc: ",this.acc);
	}

	this.hits = function(bullet) {
		if((this.x >= bullet.x && this.x <= bullet.x+bullet.width) || (this.x+this.width >= bullet.x && this.x+this.width <= bullet.x+bullet.width)) {
			if(bullet.y+bullet.height >= this.y && bullet.y+bullet.height <= this.y+this.height) {
				//ellipse(this.x+this.width, this.y, 5, 5);
				return true;
			}
		}
		return false;
	}

}
