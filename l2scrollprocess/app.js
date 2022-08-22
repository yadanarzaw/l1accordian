var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
	
	scrollpoint();

}
function scrollpoint(){
	// console.log('i am working');

	var getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop);
	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrolltop);
	var getclientheight = document.documentElement.clientHeight;
	// console.log(getscrolltop);

	 var calcheight = getscrollheight - getclientheight;

	var getfinal = Math.round((getscrolltop * 100) / calcheight);
	// console.log(getfinal);

	getprogressbar.style.width = `${getfinal}%`;

}

//scrolltop
//project height
//current view

//project height - current height
//scrolltop * 100 /(project height - cureent height)

function printme(){
	window.print();
}