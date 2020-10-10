$(document).ready(function(){

   $('.collapseAll').click(function(){
	   $('.collapse')
		.collapse('hide');
	});
	$('.expandAll').click(function(){
	$('.collapse')
		.collapse('show');
	});
});
function loadPage(){
		var timeList = document.getElementsByClassName("time");
		var totalTime = 0;
		for (var i=0; i < timeList.length; i++){
			totalTime += parseInt(timeList[i].innerHTML);
		}
		document.getElementById("eta").innerHTML = totalTime;
		document.getElementById("timeLeft").innerHTML = totalTime;
		
		var upTriangle = true;
		var progressBarText = "";
		for (var i=1; i <= timeList.length; i++){
			if(upTriangle){
			
				progressBarText += '<a onclick="updateProgressBar(' + i + ')"><div class="upTriangle" id="triangle' +i + '"><p>' + i + '</p></div></a>';
				upTriangle = !upTriangle;
			}
			else{
				progressBarText += '<a onclick="updateProgressBar(' + i + ')"><div class="downTriangle" id="triangle' +i + '"><p>' + i + '</p></div></a>';
				upTriangle = !upTriangle;
			}
		}
		document.getElementById("progressBar").innerHTML = progressBarText;
	}
	
function updateProgressBar(stepCompleted){
	var currentColor = getComputedStyle(document.querySelector("#triangle" + stepCompleted)).borderBottomColor;
	
	if(currentColor.includes("rgb(0, 128, 0)")){
		//Check the step as completed
		document.getElementById("triangle" + stepCompleted).style.borderColor="transparent transparent red transparent";
		document.getElementById("step" + stepCompleted).style.backgroundColor="dimgray";
		document.getElementById("step" + stepCompleted).style.color="white";
		
		var currentTime = document.getElementById("timeLeft").innerHTML;
		currentTime -= document.getElementById("time" + stepCompleted).innerHTML;
		document.getElementById("timeLeft").innerHTML = currentTime;
	}
	else{
		//Uncheck the step as still in progress
		document.getElementById("triangle" + stepCompleted).style.borderColor="transparent transparent green transparent";
		document.getElementById("step" + stepCompleted).style.backgroundColor="white";
		document.getElementById("step" + stepCompleted).style.color="black";
		
		var currentTime = parseInt(document.getElementById("timeLeft").innerHTML);
		currentTime += parseInt(document.getElementById("time" + stepCompleted).innerHTML);
		document.getElementById("timeLeft").innerHTML = currentTime;
	}
}

