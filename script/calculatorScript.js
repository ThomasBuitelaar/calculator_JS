//Instantly loads the script
window.onload  = function() {

var current,
	screen,
	output,
	limit,
	zero,
	period,
	operator; 

	screen = document.getElementById("result");

var elem = document.querySelectorAll(".num");

		var len = elem.length;

	for (var i= 0; i < len; i++) {
		elem[i].addEventListener("click", function( {
			num = this.value;
			output = screen.innerHTML +=num;
			limit = output.length;
		if(limit > 18) {
			alert("Too many characters");
		}

		},false);
	}

	document.querySelector(".zero").addEventListener("click",function(){

		zero = this.value;

		if(screen.innerHTML === "0") {

			output= screen.innerHTML = zero;
		}

		else if(screen.innerHTML === output) {

			output = screen.innerHTML +=zero;

		}
	},false);

	document.querySelector("#reset")