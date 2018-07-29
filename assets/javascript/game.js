//Statement Variables
  //Variables to be used throughout the game
$(document).ready(function() {

var targetNum = 0;
var losses = 0;
var wins = 0;
var colNum = 0;
var gem1;
var refreshOp = false;
var start = false;
//Functions


//Reset function
function reset() {
  gem1Num();
  gem1 = parseInt(gem1Num());
  gem2Num();
  gem2 = parseInt(gem2Num());
  gem3Num();
  gem3 = parseInt(gem3Num());
  gem4Num();
  gem4 = parseInt(gem4Num());
  colNum = 0;
}


 //Will need a function to receive click, to generate random number, update score and compare to set goal
$(".start").on("click", function() {
    start = true;
    console.log(start);
    function rTargetNum() { 
       var rTargetNum = Math.floor(Math.random() * (121 - 19) + 19);
       return rTargetNum;
    }
    targetNum = parseInt(rTargetNum());
    $(".rNumTar").text(targetNum);
    reset();
    $(".num").text(colNum);
    $(".start").text("Play Again");
});

$(".refresh").on("click", function() {
    if (start === true) {
        if (colNum < targetNum) {
        losses++;
        $("#losses").text(losses);
        
        }
        function rTargetNum() { 
          var rTargetNum = Math.floor(Math.random() * 121 + 19);
          return rTargetNum;
        }
        targetNum = parseInt(rTargetNum());
        $(".rNumTar").text(targetNum);
        reset();
        $(".num").text(colNum);
    }
    else {
        alert("Please hit the start button to begin!");
    }
});
//Random number to be assigned to each gem


function gem1Num() {
var gem1Num = Math.floor(Math.random() * 12 + 1);
return gem1Num;
}
gem1 = parseInt(gem1Num());

function gem2Num() {
var gem2Num = Math.floor(Math.random() * 12 + 1);
return gem2Num;
}
var gem2 = parseInt(gem2Num());

function gem3Num() {
var gem3Num = Math.floor(Math.random() * 12 + 1);
return gem3Num;
}
var gem3 = parseInt(gem3Num());

function gem4Num() {
var gem4Num = Math.floor(Math.random() * 12 + 1);
return gem4Num;
}
var gem4 = parseInt(gem4Num());




$(".gem").on("click", function() {
console.log(start);
   if (start === true) {
     if ($(this).val() === "gem1") {
        colNum = gem1 + colNum;
        $(".num").text(colNum);
     }
     else if ($(this).val() === "gem2") {
        colNum = gem2 + colNum;
        $(".num").text(colNum);
     }
     else if ($(this).val() === "gem3") {
        colNum = gem3 + colNum;
        $(".num").text(colNum);
     }
     else if ($(this).val() === "gem4") {
        colNum = gem4 + colNum;
        $(".num").text(colNum);
     }
    
    

      if (colNum > targetNum) {
        losses++;
        $("#losses").text(losses);
        alert("You have collected too much, hit the play again button to try again.");
        reset();
        start = false;   
      }
      if (colNum === targetNum) {
        wins++;
        $("#wins").text(wins);
        alert("You have collected just enough, enjoy your spoils or try again. Hit the play again button!");
        reset();
        start = false;
      }
    }  
    else {
        alert("please hit the start button to begin the game!");
    }
});
 



//Reset
  //Rest game to default and restart

});