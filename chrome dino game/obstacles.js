   
function Obs(obspic,x,speed,flag,bpos,groundy) {
	this.height = 60;
	this.width = 20;
	this.x = x;
	this.y = 290;
	this.speed = speed;
	this.blockx = 0;
	this.blocky = 0;
 	this.flag = flag;
 	this.bpos = bpos;
 	this.ground = groundy-this.height;
 	this.sky = 160;

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
		if(this.flag == 0) {				//normal obstacle
			//fill(232,81,0);
			//noStroke();
			//rect(this.x,this.y,this.width,this.height,2);
			image(obspic,this.x,this.y/*,this.width,this.height*/);
		} else {					//bird obstacle
			fill(0,0,255);
			noStroke();
			if(bpos==0)
			{
				ellipse(this.x,this.ground,50,20); //on ground
				//image(obspic,this.x,this.ground);
			}
			else
			{
				ellipse(this.x,this.sky,50,20); //flying
				//image(obspic,this.x,this.sky);
			}
		}
	}

	this.move = function() {
		if(this.blockx == 0 && this.blocky == 0) {
			this.x -= this.speed;
		} else {
			this.x = this.blockx;
			this.y = this.blocky; 
		}
	}

	this.upspeed = function(speed) {
		this.speed=speed;
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
