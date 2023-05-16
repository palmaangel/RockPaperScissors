var PlayerChoice;
var computerChoice;
var result;
var buttonChoice = document.querySelectorAll(".buttonDisplay")
var computerAnswer;


buttonChoice.forEach(button => button.addEventListener("click", () => {


    PlayerChoice = button.textContent;
    checkWinner;
    computerChoice;
    console.log(computerChoice)
    document.getElementById("playerChoiceDisplay").innerHTML = PlayerChoice;
    document.getElementById("computerChoiceDisplay").innerHTML = computerChoice;
    document.getElementById("resultDisplay").innerHTML = result;
 
}));

function generateRandomNumber() {
    return Math.floor(Math.random() * 3);
}
var material = ["rock","paper","scissors"];
consoleChoice = material[computerChoice];


function checkWinner(){
    if(PlayerChoice === computerChoice){
        console.log("its a tie!")
        result = "its a tie!"
    }
    else if (PlayerChoice == "rock"){
        if (computerChoice == "paper"){ 
            console.log("You lose!")
            result = "You lose!"

        }else {
        console.log("You wins!")
        result = "You Win!"
        }
    }
    else if (PlayerChoice == "scissors"){
        if (computerChoice == "rock"){
            console.log("You lose!")
            result = "You lose!"
        }else {
            console.log("You wins!")
            result = "You Win!"
        }
    }
    else if (PlayerChoice == "paper"){
        if (computerChoice == "scissors"){
            console.log("You lose!")
            result = "You lose!"

        }else {
        console.log("You wins!")
        result = "You Win!"

        }
    }

}
