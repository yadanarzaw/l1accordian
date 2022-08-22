var getprogressbar = document.querySelector('.progress-btn');
var getdownloadbtn = document.querySelector('.download-btn');
var seturl = "https://linkedin.com";

getdownloadbtn.addEventListener('click',function(){
	// 

	getdownloadbtn.setAttribute('disabled',true);
	var setwidth = 0;

	var setintv = setInterval(progressinc,100);



	function progressinc(){

		if(setwidth >= 100){
			clearInterval(setintv);
			window.location.href=seturl;
			setwidth = 0;
		}else{
		setwidth++;
		getprogressbar.style.width = `${setwidth}%`;

		getprogressbar.setAttribute('data-inc',`${setwidth}%`);
	}

	}
});