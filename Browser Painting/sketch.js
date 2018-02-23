var x, y, value;
var textsize = 50;

var arr1 = ['#36688D', '#F3CD05', '#F49F05', '#F18904', '#BDA589'];
var arr2 = ['#A7414A', '#282726', '#6A8A82', '#A37C27', '#563838'];
var arr3 = ['#040C0E', '#132226', '#525B56', '#BE9063', '#A4978E'];
var arr4 = ['#DAA2DA', '#DBB4DA', '#DE8CF0', '#BED905', '#93A806'];
var arr5 = ['#A3586D', '#5C4A72', '#F3B05A', '#F4874B', '#F46A4E'];
var arr6 = ['#04060F', '#03353E', '#0294A5', '#A79C93', '#C1403D'];
var arr7 = ['#6C6B74', '#2E303E', '#9199BE', '#54678F', '#212624'];
var arr8 = ['#594346', '#212027', '#F22F08', '#8D2F23', '#561E18'];
var arr9 = ['#776B04', '#423A01', '#F4D993', '#704404', '#F2ECE1'];
var arr10 = ['#55D9C0', '#C7F6EC', '#107050', '#02231C', '4DD8AD'];
var rndarr = [arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9,arr10],rr;

function setup() {
	createCanvas(1000,800);
	textSize(textsize);
	background(255);
	rr=rndarr[ceil(random(9))];
}

function draw() {
	var col = rr[ceil(random(4))];
	console.log(col);
	fill(col);
	stroke(col);

	if(random(1) > 0.5) {
		value = String.fromCharCode(65+ random(25));
	} else {
		value = String.fromCharCode(97+ random(25));
	}

	x = random(innerWidth);
	y = random(innerHeight);

	text(value, x, y);
}

 
