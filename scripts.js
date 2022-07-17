// 1. Computer picks a random number from 1-100
Math.floor(Math.random() * 100); 
const gameValue = Math.floor(Math.random() * 100); 
var tries = 5;
// 2. collect user input
function myFunction() {
    var inputVal = document.getElementById("guess").value;
    let message = "";
    
    if (inputVal < 0 || inputVal > 100) {
        message = "Enter a number between 0 and 100";
        document.getElementById("message").innerHTML = message;
        
    }
    else if (inputVal == gameValue) {
        message = "You win!!!";
        document.getElementById("message").innerHTML = message;
        gameover();
    }
    else if (tries <= 0) {
        message = "You lose. The number was " + gameValue;
        document.getElementById("message").innerHTML = message;
        gameover();
    }
    else if(inputVal < gameValue) {
        message = "The number is higher";
        document.getElementById("message").innerHTML = message;
        tries = tries -1;
        document.getElementById("tries").innerHTML = tries;
    }
    else if (inputVal > gameValue) {
        message = "The number is lower";
        document.getElementById("message").innerHTML = message;
        tries = tries - 1;
        document.getElementById("tries").innerHTML = tries;
    }
} 

function gameover() {
    tries = 5;
    Math.floor(Math.random() * 100); 
    const gameValue = Math.floor(Math.random() * 100);
    document.getElementById('guess').value = '';    
}
// - determine higher or lower and show message

// - reduce tries
// - if win show win message otherwise lose message