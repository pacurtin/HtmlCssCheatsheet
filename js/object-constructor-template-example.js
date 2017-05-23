function Vehicle(speed,numWheels){
	this.speed=speed;
	this.numwheels=numWheels;
	this.describeMyDriving=function(){
		document.write('<h3>I drive '+this.speed+'.</h3>');
	}
}

var car = new Vehicle('fast',4);
var truck = new Vehicle('slow',6);

car.describeMyDriving();
truck.describeMyDriving();
