//Going to us IIFE from now on to avoid variable name conflicts between scripts

(function(){
	var date = new Date();
	var even = date.getSeconds()%2==0;	//Much shorter than if else!
	document.write("<H3>Seconds even? "+even);
	
	switch(even){
			case true:
			document.write(" It's even.");
			break;
			
			case false:
			document.write(" It's odd.");
			break;
	}
	
	document.write("</H3>");
	
	//false == 0 == '' are true
	//false === 0 === '' are false
	//undefined == null is true
	//undefined === null is false
	//NaN == NaN is false
}());