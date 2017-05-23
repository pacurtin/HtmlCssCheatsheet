var car = {
	numWheels:4,
	speed:'fast',
	describeMyDriving: function(){
		var el = document.getElementById('car');
		el.textContent = 'I\'m driving '+car.speed+' with '+car.numWheels+ ' wheels.';
	}
}

car.describeMyDriving();