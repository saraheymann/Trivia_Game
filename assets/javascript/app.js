$(document).ready(function(){

var counter = 45;
var quesitonsArray = [];
var questionsString = 'You answered the following questions incorrectly: ' + quesitonsArray.join(', ') + '';                     
$("#totalIncorrect").text(questionsString);
// fixed poisiton start page
    // make the start page disappear
    // starts the game and counter
$(".startButton").on("click", function(){
    var startTimer = setInterval(function() {
  	counter--;
    $('#timer').html('' + counter);
    if (counter === 0){
      clearInterval(startTimer);
      alert(questionsString);
}
},1000);
})

// if finished hit done button- goes to next page
// if not finished but time is up go to next page

$(".doneButton").click(function(){
if (!$("input[name=q1]:checked").val() ||            
!$("input[name=q2]:checked").val() ||            
!$("input[name=q3]:checked").val() ||            
!$("input[name=q4]:checked").val() ||            
!$("input[name=q5]:checked").val() ||            
!$("input[name=q6]:checked").val() ||            
!$("input[name=q7]:checked").val() ||            
!$("input[name=q8]:checked").val() ||            
!$("input[name=q9]:checked").val() ||            
!$("input[name=q10]:checked").val()            
) {            
alert("You're not done yet!");        
}        
else {            
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
var question12name = "none"            
// right answers
var question1 = ($("input[name=q1]:checked").val() != "c");
var question2 = ($("input[name=q2]:checked").val() != "d");
var question3 = ($("input[name=q3]:checked").val() != "a");
var question4 = ($("input[name=q4]:checked").val() != "b");
var question5 = ($("input[name=q5]:checked").val() != "b");
var question6 = ($("input[name=q6]:checked").val() != "c");
var question7 = ($("input[name=q7]:checked").val() != "d");
var question8 = ($("input[name=q8]:checked").val() != "a");
var question9 = ($("input[name=q9]:checked").val() != "b");
var question10 = ($("input[name=q10]:checked").val() != "d");
var question11 = ($("input[name=q11]:checked").val() != "a");
var question12 = (!question1 && !question2 && !question3 && !question4 && !question5 && !question6 && !question7 && !question8 && !question9 && !question10 && !question11); 

if (question1) { quesitonsArray.push(question1name) };            
if (question2) { quesitonsArray.push(question2name) };            
if (question3) { quesitonsArray.push(question3name) };            
if (question4) { quesitonsArray.push(question4name) };            
if (question5) { quesitonsArray.push(question5name) };            
if (question6) { quesitonsArray.push(question6name) };            
if (question7) { quesitonsArray.push(question7name) };            
if (question8) { quesitonsArray.push(question8name) };            
if (question9) { quesitonsArray.push(question9name) };            
if (question10) { quesitonsArray.push(question10name) };            
if (question11) { quesitonsArray.push(question11name) };
if (question12) { quesitonsArray.push(question12name)};

// var questionsString = 'You answered the following questions incorrectly: ' + quesitonsArray.join(', ') + '';                     
// $("#totalIncorrect").text(questionsString);                                  

}
    });});