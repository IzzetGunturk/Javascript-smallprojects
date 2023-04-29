const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");

const playerResultLabel = document.getElementById("playerResultLabel");
const botResultLabel = document.getElementById("botResultLabel");
const finalResultLabel = document.getElementById("finalResultLabel");

const playerScoreDiv = document.getElementById("playerScore");
const botScoreDiv = document.getElementById("botScore");

let playerScore = 0;
let botScore = 0;

const rockPaperScissor = ["Rock", "Paper", "Scissor"]


rockButton.addEventListener("click", () => {
    playerResultLabel.innerHTML = rockButton.value;
    playGame();
    scoreFuntion();
})

paperButton.addEventListener("click", () => {
    playerResultLabel.innerHTML = paperButton.value;
    playGame();
    scoreFuntion();
})

scissorButton.addEventListener("click", () => {
    playerResultLabel.innerHTML = scissorButton.value;
    playGame();
    scoreFuntion();
})

function scoreFuntion () {
    playerScoreDiv.innerHTML = playerScore;
    botScoreDiv.innerHTML = botScore;
}

function playGame() {
    const randomObject = Math.floor(Math.random() * rockPaperScissor.length);
    const botObject = rockPaperScissor[randomObject];
    botResultLabel.innerHTML = botObject;

    const playerObject = playerResultLabel.innerHTML;

    let result;

    if (playerObject == "Rock" && botObject == "Scissor") {
        result = "Player wins!";
        playerScore += 1;
    } else if (playerObject == "Paper" && botObject == "Rock") {
        result = "Player wins!";
        playerScore += 1;
    } else if (playerObject == "Scissor" && botObject == "Paper") {
        result = "Player wins!";
        playerScore += 1;
    } 
    
    else if (playerObject == "Rock" && botObject == "Paper") {
        result = "Bot wins!";
        botScore += 1;
    } else if (playerObject == "Paper" && botObject == "Scissor") {
        result = "Bot wins!";
        botScore += 1;
    } else if (playerObject == "Scissor" && botObject == "Rock") {
        result = "Bot wins!";
        botScore += 1;
    }

    else {
        result = "Draw!";
    }

    finalResultLabel.innerHTML = result;
}



