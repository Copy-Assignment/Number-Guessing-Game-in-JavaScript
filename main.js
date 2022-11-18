let computerScore = 0;
let playerScore = 0;
let roundNumber = 1;

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function computerPlay(number) {
    const crandomNumber = generateRandomNumber();
    if (crandomNumber == number) {
        playerScore++;
    } else {
        computerScore++;
    }
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerScore").innerHTML = playerScore;
}

function reset() {
    computerScore = 0;
    playerScore = 0;
    roundNumber = 1;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("round").innerHTML = roundNumber;
    document.getElementById("optionButtons").style.display = "flex";
    document.getElementById("result").innerHTML = "";
}

function playGame(number) {
    computerPlay(number);
    roundNumber++;
    randomNumber = generateRandomNumber();
    if (roundNumber != 11) {
        document.getElementById("round").innerHTML = roundNumber;
    }
    if (roundNumber == 11) {
        if (computerScore > playerScore) {
            document.getElementById("result").innerHTML = "Computer won the game";
        } else if (computerScore < playerScore) {
            document.getElementById("result").innerHTML = "Player won the game";
        } else {
            document.getElementById("result").innerHTML = "Game is draw";
        }
        document.getElementById("optionButtons").style.display = "none";
    }
}
