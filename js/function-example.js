var message = 'This is my message to you.';

function updateMessage(){
	var el = document.getElementById('message');
	el.textContent = message;
}

updateMessage();