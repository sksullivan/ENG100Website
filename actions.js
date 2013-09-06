$(document).ready(function(){
	console.log($("#rightb").css('padding-top'));

	$("#rightb").css({
		width:$(window).width()-$("#rightb").offset().left+'px',
		height: $(window).height()-$("#rightb").offset().top-15+'px',
		top: '+=15',
		left: '+=15'
	});

	$("#bottoml").css({
		left: -$("#bottoml").offset().left-115,
		width: 230+$("#bottoml").offset().left,
		height: $(window).height()-$("#bottoml").offset().top+'px'
	});

	$("#leftt").css({
		left: -$("#leftt").offset().left-115,
		top: -$("#leftt").offset().top-15,
		width: 100+$("#leftt").offset().left+'px',
		height: 230+$("#leftt").offset().top-15+'px'

	});

	$("#topr").css({
		top: -$("#topr").offset().top-15,
		width:$(window).width()-$("#topr").offset().left+'px',
		height: 100+$("#topr").offset().top-15+'px'
	});
});