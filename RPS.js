//const PlayerChoice = prompt("Rock Paper or scissors?:")
var PlayerChoice;
var computerChoice;
var random_number= generateRandomNumber(1, 3);
var result;

RockButtonDisplay.onclick = function buttonRock(){
    PlayerChoice = "rock";
    console.log(PlayerChoice);
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * 3);
}
const material = ["rock","paper","scissors"]
computerChoice = material[random_number]

function gameRound(PlayerChoice,computerChoice){
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
document.getElementById("playerChoiceDisplay").innerHTML = PlayerChoice;
document.getElementById("computerChoiceDisplay").innerHTML = computerChoice;
document.getElementById("resultDisplay").innerHTML = result;

console.log(PlayerChoice);
console.log(computerChoice);