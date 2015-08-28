$(document).ready(function(){
	func();
});

$(window).resize(function(){
	func();
});

function func() {
	var step_width = $(".step").width();
	var step_height = $(".step").height();
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

	if(step_width < 1060){
		$('rect').remove();
	}
	if (step_width < 600){
		var hasOccured = false;
		$(".path").css({
			width: step_width,
			height: step_width
		});
		$(".path-first").css({
			width: step_width,
			height: step_width
		});
		if(!hasOccured){
			var defs = $(".path-first defs");
			$(".path-first").remove();
			$(".path:first").clone().prepend($(".step1"));
			$(".step1 .path defs").remove();
			$(".step1 .path").prepend(defs);
			hasOccured = true;
		}
		
	}

}