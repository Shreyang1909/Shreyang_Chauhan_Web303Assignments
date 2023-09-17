/*
	WEB 303 Assignment 1 - jQuery
	{Shreyang Chauhan W0789989}
*/


$(document).ready(function(){
	$("input").change(function(){

		let sal = $("#yearly-salary").val();
	   let percent = $("#percent").val(); 
	   let amount = ((sal*percent)/100).toFixed(2); 

	   $('#amount').text ('$'+ amount);
	}
	)
})
