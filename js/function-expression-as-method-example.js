var size = 20;
var object = {size:40}

var getSize = function(){
	document.write('<h3>Size is: '+this.size+'</h3>');
}

object.getObjectSize = getSize;
object.getObjectSize(); //In this context 40 should be returned, not 20.
