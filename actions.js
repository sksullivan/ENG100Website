$(document).ready(function(){

	rightbBlownUp = false;
	bottomlBlownUp = false;
	lefttBlownUp = false;
	toprBlownUp = false;

	$("#rightb").click(function(){
		if (!rightbBlownUp) {
			$(this).animate({
				width:$(window).width()-$(this).offset().left+'px',
				height: $(window).height()-$(this).offset().top+'px'
			});
		} else {
			$(this).animate({
				width: 100,
				height: 230
			});
		}
		rightbBlownUp = !rightbBlownUp;
	});

	$("#bottoml").click(function(){
		if (!bottomlBlownUp) {
			$(this).animate({
				left: -$(this).offset().left-115,
				width: 230+$(this).offset().left,
				height: $(window).height()-$(this).offset().top+'px'
			});
		} else {
			$(this).animate({
				left: -115,
				width: 230,
				height: 100
			});
		}
		bottomlBlownUp = !bottomlBlownUp;
	});

	$("#leftt").click(function(){
		if (!lefttBlownUp) {
			$(this).animate({
				left: -$(this).offset().left-115,
				top: -$(this).offset().top-15,
				width: 100+$(this).offset().left+'px',
				height: 230+$(this).offset().top+'px'
			});
		} else {
			$(this).animate({
				left: -115,
				top: -15,
				width: 100,
				height: 230
			});
		}
		lefttBlownUp = !lefttBlownUp;
	});

	$("#topr").click(function(){
		if (!toprBlownUp) {
			$(this).animate({
				top: -$(this).offset().top-15,
				width:$(window).width()-$(this).offset().left+'px',
				height: 100+$(this).offset().top+'px'
			});
		} else {
			$(this).animate({
				top: -15,
				width: 230,
				height: 100
			});
		}
		toprBlownUp = !toprBlownUp;
	});
});