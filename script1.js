// Trigger animations on page load
$(document).ready(function() {
	$('.animated').each(function() {
		var animationClass = $(this).data('animation');
		$(this).addClass(animationClass);
	});
});