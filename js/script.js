
var userChoice = "";
var computerChoice = "";
var winner = "";
var randonNumber = 0;

$("button").click(function(){
    var input = $("#input").val();
    userChoice = input;
    $("#userChoice").text(input);
    var randomNumber = Math.random();
    if (randomNumber > .7)
    {
        computerChoice = "rock";
    }
    if (randomNumber < .5)
    {
        computerChoice = "paper";
    }
    if (randomNumber < .7 && randomNumber > .5)
    {
        computerChoice = "scissors";
    }
    $("#computerChoice").text(computerChoice);
});



//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

