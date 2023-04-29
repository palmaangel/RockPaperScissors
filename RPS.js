const PlayerChoice = prompt("Rock Paper or scissors?:")
var computerChoice;
var random_number= generateRandomNumber(1, 3);

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


if (random_number == 1){
    computerChoice = "rock";
}
else if (random_number == 2){
    computerChoice = "paper";
}
else if (random_number == 3){
    computerChoice = "scissors";
}

if(PlayerChoice === computerChoice){
    console.log("its a tie!")
}
else if (PlayerChoice == "rock"){
    if (computerChoice == "paper"){ 
        console.log("You lose!")
    }else {
    console.log("You wins!")
    }
}
else if (PlayerChoice == "scissors"){
    if (computerChoice == "rock"){
        console.log("You lose!")
    }else {
    console.log("You wins!")
    }
}
else if (PlayerChoice == "paper"){
    if (computerChoice == "scissors"){
        console.log("You lose!")
    }else {
    console.log("You wins!")
    }
}

console.log(PlayerChoice);
console.log(computerChoice);