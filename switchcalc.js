$(document).ready(function(){
// set variables
  var firstNumber = "";
  var operator = "";
  var secondNumber = "";
  var result = "";
// write function set value of all buttons using value 
  $('.number').on('click', function(){
        if (operator === ""){
            firstNumber = firstNumber + $(this).val();
            $('#firstNumber').text(firstNumber);
        }else if (result === ""){
            secondNumber = secondNumber + $(this).val();
            $('#secondNumber').text(secondNumber);
        }
    });
// write function for each operation on calculator that takes two numbers
  // checks to make sure something is 
$(".operator").on("click", function() {
  if (firstNumber != "") {
    operator = $(this).val();
    switch (operator) {
      case "plus" :
        $("#operator").text('+');
        break;
      case "minus" :
        $("#operator").text('-');
        break;
      case "times" :
        $("#operator").text('*');
        break;
      case "divide" :
        $("#operator").text('/');
        break;
      case "power" :
        $("#operator").text('^');
        break;
      }
    };
});
// SET EQUALS FUNCTION 
// switch value depending on which button is clicked
// needs parseInt() since values are all stored as strings
$(".equal").on("click", function() {
  
    switch (operator) {
      case "plus" :
        result = parseInt(firstNumber) + parseInt(secondNumber);
        $("#result").text(result);
        break;
      case "minus" :
        result = parseInt(firstNumber) - parseInt(secondNumber);
        $("#result").text(result);
        break;
      case "times" :
        result = parseInt(firstNumber) * parseInt(secondNumber);
        $("#result").text(result);
        break;
      case "divide" :
        result = parseInt(firstNumber) / parseInt(secondNumber);
        $("#result").text(result);
        break;
      case "power" :
        result = parseInt(firstNumber) ^ parseInt(secondNumber);
        $("#result").text(result);
        break;
      }
  
});
// write reset function for the clear
  // sets numbers and view back to original values
 $("#buttonClear").on("click", function() {
    $("#firstNumber, #secondNumber, #operator, #result").empty();
    firstNumber = "";
    secondNumber = "";
    result = "";
    operator = "";
 });