//Responsive.js 
//Lukas Metlicka Aug. 2015


$(document).ready(function(){
	func();
});

$(window).resize(function(){
	func();
});

//All of the jQuery logic
function func() {
	var step_width = $(".step:first").width();
	var step_height = $(".step:first").height();

	var path_width = step_width * 0.2;
	//Resizes SVG elements to screen size.
	//SVG requires exact values
	$(".path").css({
		width: path_width,
		height: path_width * 1.489
	});

	//Resizes .path-first like .path
	$(".path-first").css({
		width: path_width,
		height: path_width
	});

	//Hover Events for Images
	$("circle").mouseenter(function(){
		$(this).parent().fadeTo('400', 0.5);
	});
	$("circle").mouseleave(function(){
		$(this).parent().fadeTo('400', 1);
	});

	//Convert to Mobile Mode
	if (step_width < 600){
		$("rect").remove();
		$(".path").css({
			width: step_width,
			height: step_width
		});
		$(".path-first").css({
			width: step_width * 0.7,
			height: step_width
		});
	}

}