var num = 10.42784;
var msg = "<H4>Original number: <p>"+num+"</p>";
msg+="<H4>toFixed(3): <p>"+num.toFixed(3)+"</p>";
msg+="<H4>toPrecision(3): <p>"+num.toPrecision(3)+"</p>";
//document.write(msg);
var el = document.getElementById("dec-numbers");
el.innerHTML=msg;
//el.textContent=msg;