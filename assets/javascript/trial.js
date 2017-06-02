$(document).ready(function(){

var counter = 45;
var correct = 0;
var incorrect = 0;
// fixed poisiton start page
    // make the start page disappear
    // starts the game and counter
$(".startButton").on("click", function(){
    setInterval(function startTimer() {
  	counter--;
    $('#timer').html('' + counter);
  },1000);
    if (counter < 0){
      clearTimeOut(startTimer);
      // append triviaContainer with the answers
    }
  })
// if finished hit done button- goes to next page
// if not finished but time is up go to next page

$(".doneButton").click(function(){
// if (!$("input[@name=q1]:checked").val() ||            
// !$("input[name=q2]:checked").val() ||            
// !$("input[name=q3]:checked").val() ||            
// !$("input[name=q4]:checked").val() ||            
// !$("input[name=q5]:checked").val() ||            
// !$("input[name=q6]:checked").val() ||            
// !$("input[name=q7]:checked").val() ||            
// !$("input[name=q8]:checked").val() ||            
// !$("input[name=q9]:checked").val() ||            
// !$("input[name=q10]:checked").val()            
// ) {            
// alert("You're not done yet!");        
// }        

// else {            
// var question1name = "1";            
// var question2name = "2";            
// var question3name = "3";            
// var question4name = "4";            
// var question5name = "5";            
// var question6name = "6";            
// var question7name = "7";            
// var question8name = "8";            
// var question9name = "9";            
// var question10name = "10";            
// var question11name = "None";            
// right answers
$(".doneButton").click(function(){
if ($("input[name=q1]:checked").val() === "c" &&
$("input[name=q2]:checked").val() === "d" &&
$("input[name=q3]:checked").val() === "a" &&
$("input[name=q4]:checked").val() === "b" &&
$("input[name=q5]:checked").val() === "b" &&
$("input[name=q6]:checked").val() === "c" &&
$("input[name=q7]:checked").val() === "d" &&
$("input[name=q8]:checked").val() === "a" &&
$("input[name=q9]:checked").val() === "b" &&
$("input[name=q10]:checked").val() === "d" &&
$("input[name=q11]:checked").val() === "a"){
correct = 11;
$("#totalCorrect").html('Correct:' + correct);
}
else{
  return incorrect = 11-correct;
  $("#totalIncorrect").html('Correct:' + incorrect);

}




})
});