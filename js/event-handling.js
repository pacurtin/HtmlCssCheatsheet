function changeColor(element){
	if(element.className==="blue-background"){
		element.className="red-background";
	}else{
		element.className="blue-background";
	}
}

var el = document.getElementById("event-handling");
el.addEventListener('click', function(){changeColor(el);}, false);

/*--------------------------------------------------------------------------------------------*/

var sx = document.getElementById("screen-x");
var sy = document.getElementById("screen-y");
var px = document.getElementById("page-x");
var py = document.getElementById("page-y");
var cx = document.getElementById("client-x");
var cy = document.getElementById("client-y");

function mousePosition(event){
	sx.textContent = event.screenX;
	sy.textContent = event.screenY;
	px.textContent = event.pageX;
	py.textContent = event.pageY;
	cx.textContent = event.clientX;
	cy.textContent = event.clientY;
}

var bodyTags = document.getElementsByTagName("body");
bodyTags[0].addEventListener('mousemove', mousePosition, false);

/*--------------------------------------------------------------------------------------------*/

function buttonPressed(){
	document.getElementById("button-pushed-div").textContent = "A button has been pressed.";
}

function buttonReleased(){
	document.getElementById("button-pushed-div").textContent = "A button has been released.";
}

bodyTags[0].addEventListener('keypress', buttonPressed, false);
bodyTags[0].addEventListener('keyup', buttonReleased, false);
