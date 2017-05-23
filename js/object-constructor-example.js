var truck = new Object();

truck.numWheels = 6;
truck.speed = 'slow';
truck.describeMyDriving=function(){
	document.write('<h3>My truck drives '+truck.speed+ ' with ' + truck.numWheels + ' wheels.</h3>');
}

delete truck.numWheels;
truck.describeMyDriving();