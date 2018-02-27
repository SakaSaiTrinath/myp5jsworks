 
var flag = 1;	//move up
function Dinosaur(pikachu,goundy) {
	this.width = 50;
	this.height = 50;
	this.x = 100;
	this.ground = groundy-this.height;
	this.y = this.ground; 

	this.gravity = 5;
	this.velocity = 16;
	this.acc = 1.1;
	//this.lift = -15; 

	this.blockx = 0;
	this.blocky = 0;

	
	this.display = function() {
		//fill(255);
		//rect(this.x, this.y, this.width, this.height,5);
		image(pikachu,this.x,this.y,this.width,this.height);
	}
	 

	this.update = function() {
		if(this.blockx == 0 && this.blocky == 0) {
			if(flag == 1)
			{
				this.y += -this.velocity;
			}
			else
			{
				this.y += this.gravity;
			}

			if(this.y < 120) {		//if it reaches up of 150px make it fall down.
				flag = -1; //move down.
			}

			if(this.y > this.ground) {	//if it falls on ground.
				this.y = this.ground;
				flag = 1;	//change flag so it can move up next time.
				return false;
			}
			return true;
		} else {
			this.x = this.blockx;
			this.y = this.blocky;
		}
	}

	this.up = function() {
		this.y += -40;
	}
}
