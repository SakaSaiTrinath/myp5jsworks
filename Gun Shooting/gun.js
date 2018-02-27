 
function Gun(x, y, id) 
{
	this.x = x;
	this.y = y;
	this.point = createVector(0,0);
	this.parray1 = [this.x,this.y,this.x+50,this.y,this.x+75,this.y+25,this.x+50,this.y+50,this.x,this.y+50];
	this.parray2 = [this.x,this.y,this.x-50,this.y,this.x-75,this.y+25,this.x-50,this.y+50,this.x,this.y+50];
	this.parray = [this.parray1, this.parray2];
	this.id = id;
	this.r = 255;
	this.g = 255;
	this.b = 255;
	this.score = 0;


	this.show = function() {
		fill(this.r,this.g,this.b);
		beginShape();
		vertex(this.parray[this.id][0],this.parray[this.id][1]);
		vertex(this.parray[this.id][2],this.parray[this.id][3]);
		this.point.set(this.parray[this.id][4],this.parray[this.id][5]); //point
		vertex(this.point.x,this.point.y);	//point
		vertex(this.parray[this.id][6],this.parray[this.id][7]);
		vertex(this.parray[this.id][8],this.parray[this.id][9]);
		endShape();
	}

	this.getpoint = function() {
		this.show();
		return this.point;
	}

	this.update = function(nv) {
		this.y+= nv;

		if(this.id==0) {
			this.parray1[1]=this.y; 
			this.parray1[3]=this.y;
			this.parray1[5]=this.y+25;
			this.parray1[7]=this.y+50;
			this.parray1[9]=this.y+50;
		} else if(this.id==1) {
			this.parray2[1]=this.y;
			this.parray2[3]=this.y;
			this.parray2[5]=this.y+25;
			this.parray2[7]=this.y+50;
			this.parray2[9]=this.y+50;
		}
	}

	this.hits = function(bullet) {
		if(this.id == 0) {
			if((this.x >= bullet.x && this.x <= bullet.x+bullet.width) || (this.x+50 >= bullet.x && this.x+50 <= bullet.x+bullet.width)) {
				if(bullet.y+bullet.height >= this.y && bullet.y <= this.y+50) {
					this.score++;
					return true;
				}
			}
			return false;
		} else {
			if((this.x >= bullet.x && this.x <= bullet.x+bullet.width) || (this.x-50 >= bullet.x && this.x-50 <= bullet.x+bullet.width)) {
				if(bullet.y+bullet.height >= this.y && bullet.y <= this.y+50) {
					this.score++;
					return true;
				}
			}
			return false;
		}
	}

	this.highlight = function(r,g,b) {
		this.r=r; this.g=g; this.b=b;
	}

	this.getScore = function() {
		return this.score;
	}
}
