const PlayerChoice = prompt("Rock Paper or scissors?:")
var computerChoice;
var random_number= generateRandomNumber(1, 3);

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


if (random_number == 1){
    computerChoice = "Rock";
}
else if (random_number == 2){
    computerChoice = "Paper";
}
else if (random_number == 3){
    computerChoice = "Scissors";
}

if(PlayerChoice == computerChoice){
    console.log("its a tie!")
}
else if (PlayerChoice == "rock"){
    if (computerChoice == "Paper"){ 
        console.log("You lose!")
    }else {
    console.log("You wins!")
    }
}
else if (PlayerChoice == "scissors"){
    if (computerChoice == "Rock"){
        console.log("You lose!")
    }else {
    console.log("You wins!")
    }
}
else if (PlayerChoice == "paper"){
    if (computerChoice == "Scissors"){
        console.log("You lose!")
    }else {
    console.log("You wins!")
    }
}



console.log(computerChoice)