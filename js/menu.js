 $(document).ready(function(){
	 
	 $(".burger-nav").on("click", function(){
		 
		 $("myNav overlay div").toggleClass("overlay-content");
		 
	 });
 });

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
