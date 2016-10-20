$(document).ready(function () {
	
	$('#reset').on('click',function () {
		$('.box').removeClass('white');
		$('.box').removeClass('yellow');
		$('.box').removeClass('blue');
		$('.box').removeClass('green');
		$('.box').removeClass('red');
		
	});
	var clearing = false;
	var dragging = false;
	var color = "";
	
	$('#white').on('click',function () {
		color = 'white';
	  clearing = false;
	});
	
	$('#yellow').on('click',function () {
		color = 'yellow';
	  clearing = false;
	});
	
	$('#green').on('click',function () {
		color = 'green';
	  clearing = false;
	});
	
	$('#blue').on('click',function () {
		color = 'blue';
	  clearing = false;
	});
	
	$('#red').on('click',function () {
		color = 'red';
	  clearing = false;
	});
	
	
	
	
	$('.box').on('mousedown', function () {
		dragging = true
	});
	
	$('.box').on('mouseup', function () {
		dragging = false
	});
	
	$('.box').on('mouseenter', function () {
		if(dragging){
			$(this).removeClass('white');
			$(this).removeClass('yellow');
			$(this).removeClass('blue');
			$(this).removeClass('green');
			$(this).removeClass('red');
			$(this).addClass(color);
		} else if (clearing) {
			$(this).removeClass('white');
			$(this).removeClass('yellow');
			$(this).removeClass('blue');
			$(this).removeClass('green');
			$(this).removeClass('red');
		}
	});
	
	$('.box').on('dblclick', function () {
		if (!clearing) {
			dragging = false;
			clearing = true;
		} else {
			clearing = false;
		}
		$(this).removeClass('white');
		$(this).removeClass('yellow');
		$(this).removeClass('blue');
		$(this).removeClass('green');
		$(this).removeClass('red');
	});
	
	
});