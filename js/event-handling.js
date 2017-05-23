function changeColor(element){
	if(element.className==="blue-background"){
		element.className="red-background"
	}else{
		element.className="blue-background"
	}
}

var el = document.getElementById("event-handling");
el.addEventListener('click', function(){changeColor(el);}, false);
