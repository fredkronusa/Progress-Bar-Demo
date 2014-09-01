

//Progress Bar Selector
$('.dropdown-menu li a').on('click', function(){
	var $selectedProgressDdl = $(this).attr('class');
	$('.progress').removeClass("selected");
	$('.progress.' + $selectedProgressDdl).addClass("selected");	
	$('.progress-bar-current').text($(this).text());
});

$('.progress-adjuster').on('click', function(){
	var $progessCounter = $(this).val();
	var $selectedProgressBar = $('.progress.selected .progress-bar').attr('aria-valuenow');
	var $newProgressBarValue = parseInt($selectedProgressBar) + parseInt($progessCounter);
	
	//Checks to Verify max and min amounts, add warnings
	if($newProgressBarValue <= 0){
		$newProgressBarValue = 0;
	}	
	else if($newProgressBarValue > 100){
		$('.progress.selected .progress-bar').
			addClass("warning");
	}
	else{
		$('.progress.selected .progress-bar').
			removeClass("warning");
	}	
	
	var $newProgressBarPercentage = $newProgressBarValue + "%" 
	
	//Set properties to the selected bar 
	$('.progress.selected .progress-bar')
		.css('width',$newProgressBarPercentage)		
		.attr('aria-valuenow', $newProgressBarValue);	
	
	$('.progress.selected .progress-bar-value')
		.text($newProgressBarPercentage)
	
	
});



