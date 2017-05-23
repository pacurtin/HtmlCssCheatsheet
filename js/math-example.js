var num = Math.PI;
var msg = "<H3>PI rounded, square rooted , mul by rand and rounded up(with ceil): ";
var rounded = Math.round(num);
var sr = Math.sqrt(rounded);
var rand = sr*Math.random();

msg+=Math.ceil(rand);
msg+="</H3>"; 

document.write(msg);