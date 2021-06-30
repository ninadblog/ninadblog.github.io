var dark=document.getElementById("dark");
var theme = localStorage.getItem("theme");
	if (theme=="dark"){
		document.body.classList.toggle("dark-theme");
	}
	if (theme=="light"){
	    document.body.classList.toggle(':root');
	}
dark.onclick= function(){
	document.body.classList.toggle("dark-theme");
};
if (document.body.classList.contains("dark-theme")){
	    localStorage.setItem("theme","dark");
	}
else{
    localStorage.setItem("theme","light");
}


