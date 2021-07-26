// function navTab(tab){
// 	// $(".nav").find(".active-tab").removeClass("active-tab");
// 	$(tab).addClass("active-tab");
//     console.log(tab);
    
// };
// 	var fixed;
// 	var slider;

		
// 		$(document).ready(function(){
// 			var isMobile = window.matchMedia("only screen and (max-width: 760px)");

// 		    if (isMobile.matches) {
// 		        console.log("manje od 760px");
// 		    }
// 			fixed = document.getElementById("carousel");
// 			slider = document.getElementById("text");
// 			var footer = document.getElementById('footer')
// 			footer.style.visibility = "hidden";
// 			winResize();
// 			$(window).bind({scroll: winScroll});
// 		});
// function winResize(){   
// 			var body = document.body;
//     		var html = document.documentElement;

// 			slider.style.top = fixed.offsetHeight + "px";
		
// 			var footerHome = document.getElementById('footer-home')
// 			var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
// 			console.log("kkkk "+height)
// 			footerHome.style.top = height + "px";
// 		}
// 	function winScroll(){
// 		var opacity_slider = 0 + ((window.pageYOffset / slider.offsetHeight));
// 		var opacity_fixed = 1 - (window.pageYOffset / slider.offsetHeight/2);
// 		slider.style.opacity = opacity_slider;
// 		//fixed.style.opacity = opacity_fixed; 
// 	}