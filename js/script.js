var ik = "Get Started";

var o = 0;

function ok(){ document.getElementById("hea").innerHTML += ik.charAt(o);

o++;

}

setInterval(ok,200)
