$(document).ready(function(){
	
	var number='';
	$(".number").click(function(){
	number+=parseInt($(this).text(),10);
	//number=parseInt(number,10);
	$('#result').text(number);
});
	$(".operator").click(function(){
		number+=$(this).text();
		$('#result').text(number);
	});
	$("#allclear").click(function(){
		number="";
		$('#result').text(number);
	});
	$("#clear").click(function(){
		
		number=number.slice(0,-1);
		$('#result').text(number);
	});
	$("#equal").click(function(){

		number=eval(number);
		$('#result').text(number);
	});
});