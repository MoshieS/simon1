var rand = "h";
var reda = new Audio("red.mp3");
var yellowa = new Audio("yellow.mp3");
var bluea = new Audio("blue.mp3");
var greena = new Audio("green.mp3");
var wrong = new Audio("wrong.mp3");
var lololo = 1;
var level = 0;
// array
var yes = 0;
var buttonColors = ["red", "blue", "green", "yellow", ];
var gamePattern = [];
var userChosenColor = [];
var delay = 4000;

 $(document).on("keypress", function(){
 $("h1").text("Level 0");
 setTimeout(function () {
   pushy();
 }, 800);

}
);




// gamePattern

// $(document).on("keypress", function() {
//     $("h1").text("Level 0");
//     pushy();
// })
// random num till for maker
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3);
    return (randomNumber);
}

// mechine arr
function pushy() {
    var rand1 = buttonColors[nextSequence()]
    gamePattern.push(rand1);
    $("#" + rand1).fadeOut(100).fadeIn(100);
    var sound = new Audio(rand1 + ".mp3");
    sound.play();
    setTimeout(function() {
        for (var i = 0; i < gamePattern.length; i++) {
            if (userChosenColor[i] === gamePattern[i] && gamePattern.length == userChosenColor.length ) {
                lololo++;
            } else {

                yes++;
            }

        }
        if (yes == 0) {
          push();
        } else {
            $("h1").text("Game over press any key to restart");
            $("body").addClass("game-over");
            setTimeout(function(){
              $("body").removeClass("game-over");
            }
        , 200  )
            wrong.play();
            startOver();
        }
    }, delay);

    function push() {
        level++;
        $("h1").text("Level " + level);
        userChosenColor = [];
        pushy();
        delay += 700;
    }





}

// user input

$("#green").on("click", function() {


    userChosenColor.push("green");
    $("#green").fadeOut(310).fadeIn(300);
    greena.play();
})


$("#red").on("click", function() {

    $("#red").fadeOut(310).fadeIn(300);
    userChosenColor.push("red");
    reda.play();
})


$("#blue").on("click", function() {

    $("#blue").fadeOut(310).fadeIn(300);
    userChosenColor.push("blue");
    bluea.play();
})


$("#yellow").on("click", function() {
    $("#yellow").fadeOut(310).fadeIn(300);

    userChosenColor.push("yellow");
    yellowa.play();
})

function startOver() {
  level = 0;
 userChosenColor = [];
 gamePattern = [];
 delay = 4000;
yes = 0;


}
// $("#" + rand1).fadeOut(310).fadeIn(300);
