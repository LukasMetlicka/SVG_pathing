$(document).ready(function(){
	func();
});

$(window).resize(function(){
	func();
});
var hasOccured = false;
function func() {
	var step_width = $(".step:first").width();
	var step_height = $(".step:first").height();
	var path_width = step_width * 0.2;

	$(".path").css({
		width: path_width,
		height: path_width * 1.489
	});
	$(".path-first").css({
		width: path_width,
		height: path_width
	});
	$(".image-first").css({
		width: Math.floor(path_width * 0.9298),
		top: Math.floor(step_height * 0.0515)
	});
	$(".image").css({
		width: Math.floor(path_width * 0.9298),
		top: Math.floor(step_height * 0.5)
	});
	$("circle").hover(function(){

	})
	
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