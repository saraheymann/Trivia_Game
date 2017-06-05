$(document).ready(function(){

var counter = 45;
var correctQuesitonsArray = [];
var incorrectQuestionsArray = [];
// var questionsString = 'You answered the following questions incorrectly: ' + quesitonsArray.join(', ') + '';                     
// $("#totalIncorrect").text(questionsString);
// fixed poisiton start page
    // make the start page disappear
    // starts the game and counter
 $(".triviaContainer").toggle();
 $(".results").toggle();

$(".startButton").on("click", function(){
	$(".buttonSection").toggle();
	$(".triviaContainer").toggle();
	$(".startButton").toggle();
    var startTimer = setInterval(function() {
  	counter--;
    $('#timer').html('' + counter);
    if (counter === 0){	
      clearInterval(startTimer);
      $(".triviaContainer").toggle();
      $(".results").toggle();
      var question1name = "1";            
var question2name = "2";            
var question3name = "3";            
var question4name = "4";            
var question5name = "5";            
var question6name = "6";            
var question7name = "7";            
var question8name = "8";            
var question9name = "9";            
var question10name = "10";            
var question11name = "11";            

// right answers
var question1 = ($("input[name=q1]:checked").val() === "c");
var question2 = ($("input[name=q2]:checked").val() === "d");
var question3 = ($("input[name=q3]:checked").val() === "a");
var question4 = ($("input[name=q4]:checked").val() === "b");
var question5 = ($("input[name=q5]:checked").val() === "b");
var question6 = ($("input[name=q6]:checked").val() === "c");
var question7 = ($("input[name=q7]:checked").val() === "d");
var question8 = ($("input[name=q8]:checked").val() === "a");
var question9 = ($("input[name=q9]:checked").val() === "b");
var question10 = ($("input[name=q10]:checked").val() === "d");
var question11 = ($("input[name=q11]:checked").val() === "a");

// if else statements sending the correct or incorrect answers to the array
if (question1) { correctQuesitonsArray.push(question1name) }else{
	incorrectQuestionsArray.push(question1name)
}            
if (question2) { correctQuesitonsArray.push(question2name) }else{
	incorrectQuestionsArray.push(question2name)
}            
if (question3) { correctQuesitonsArray.push(question3name) }else{
	incorrectQuestionsArray.push(question3name)
}            
if (question4) { correctQuesitonsArray.push(question4name) }else{
	incorrectQuestionsArray.push(question4name)
}            
if (question5) { correctQuesitonsArray.push(question5name) }else{
	incorrectQuestionsArray.push(question5name)
}            
if (question6) { correctQuesitonsArray.push(question6name) }else{
	incorrectQuestionsArray.push(question6name)
}            
if (question7) { correctQuesitonsArray.push(question7name) }else{
	incorrectQuestionsArray.push(question7name)
}            
if (question8) { correctQuesitonsArray.push(question8name) }else{
	incorrectQuestionsArray.push(question8name)
}            
if (question9) { correctQuesitonsArray.push(question9name) }else{
	incorrectQuestionsArray.push(question9name)
}           
if (question10) { correctQuesitonsArray.push(question10name) }else{
	incorrectQuestionsArray.push(question10name)
}           
if (question11) { correctQuesitonsArray.push(question11name) }else{
	incorrectQuestionsArray.push(question11name)
}

                     
$("#totalCorrect").text('Correct: ' + correctQuesitonsArray.length); 
$("#totalIncorrect").text('Incorrect: ' + incorrectQuestionsArray.length)     
 	}
},1000);
})

// if finished hit done button- goes to next page
// if not finished but time is up go to next page

$(".doneButton").click(function (){
$(".triviaContainer").toggle();
$(".results").toggle();
 

 //question name to push to the array 
var question1name = "1";            
var question2name = "2";            
var question3name = "3";            
var question4name = "4";            
var question5name = "5";            
var question6name = "6";            
var question7name = "7";            
var question8name = "8";            
var question9name = "9";            
var question10name = "10";            
var question11name = "11";            

// right answers
var question1 = ($("input[name=q1]:checked").val() === "c");
var question2 = ($("input[name=q2]:checked").val() === "d");
var question3 = ($("input[name=q3]:checked").val() === "a");
var question4 = ($("input[name=q4]:checked").val() === "b");
var question5 = ($("input[name=q5]:checked").val() === "b");
var question6 = ($("input[name=q6]:checked").val() === "c");
var question7 = ($("input[name=q7]:checked").val() === "d");
var question8 = ($("input[name=q8]:checked").val() === "a");
var question9 = ($("input[name=q9]:checked").val() === "b");
var question10 = ($("input[name=q10]:checked").val() === "d");
var question11 = ($("input[name=q11]:checked").val() === "a");

// if else statements sending the correct or incorrect answers to the array
if (question1) { correctQuesitonsArray.push(question1name) }else{
	incorrectQuestionsArray.push(question1name)
}            
if (question2) { correctQuesitonsArray.push(question2name) }else{
	incorrectQuestionsArray.push(question2name)
}            
if (question3) { correctQuesitonsArray.push(question3name) }else{
	incorrectQuestionsArray.push(question3name)
}            
if (question4) { correctQuesitonsArray.push(question4name) }else{
	incorrectQuestionsArray.push(question4name)
}            
if (question5) { correctQuesitonsArray.push(question5name) }else{
	incorrectQuestionsArray.push(question5name)
}            
if (question6) { correctQuesitonsArray.push(question6name) }else{
	incorrectQuestionsArray.push(question6name)
}            
if (question7) { correctQuesitonsArray.push(question7name) }else{
	incorrectQuestionsArray.push(question7name)
}            
if (question8) { correctQuesitonsArray.push(question8name) }else{
	incorrectQuestionsArray.push(question8name)
}            
if (question9) { correctQuesitonsArray.push(question9name) }else{
	incorrectQuestionsArray.push(question9name)
}           
if (question10) { correctQuesitonsArray.push(question10name) }else{
	incorrectQuestionsArray.push(question10name)
}           
if (question11) { correctQuesitonsArray.push(question11name) }else{
	incorrectQuestionsArray.push(question11name)
}

                     
$("#totalCorrect").text('Correct: ' + correctQuesitonsArray.length); 
$("#totalIncorrect").text('Incorrect: ' + incorrectQuestionsArray.length)                                 


 });});