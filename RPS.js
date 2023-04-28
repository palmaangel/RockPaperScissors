// const PlayerChoice = prompt("Rock Paper or scissors?:")
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

console.log(computerChoice)