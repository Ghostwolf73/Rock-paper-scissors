let choices = ["rock", "paper", "scissors"];
let i = 5;

let computerChoice = getComputerChoice(choices);
let playerChoice;

let computerWins = 0;
let userWin = 0;

function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

function play(pc, user) {


    pc = computerChoice;
    user = playerChoice;

    if (pc === "rock" && user === "paper") {
        const resultTest = document.querySelector(".results");
        resultTest.textContent = `PC chose ${computerChoice} and you selected ${playerChoice} you win`;

        const score = document.querySelector(".myScore");
        score.textContent = `${userWin++}`;

        const compScore = document.querySelector(".thePCScore")
        compScore.textContent = `${computerWins}`;

        // userWin++
    }
    else if (pc === "rock" && user === "scissors") {
        const resultTest = document.querySelector(".results");
        resultTest.textContent = `PC chose ${computerChoice} and you selected ${playerChoice} you lose`;

        const compScore = document.querySelector(".thePCScore");
        compScore.textContent = `${computerWins++}`;

        const score = document.querySelector(".myScore");
        score.textContent = `${userWin}`;

        // computerWins++
    }
    else if (pc === "rock" && user === "rock") {
        const resultTest = document.querySelector(".results");
        resultTest.textContent = 'Draw';
    }

    else if (pc === "paper" && user === "scissors") {
        const resultTest = document.querySelector(".results");
        resultTest.textContent = `PC chose ${computerChoice} and you selected ${playerChoice} you win`;

        const score = document.querySelector(".myScore");
        score.textContent = `${userWin++}`

        const compScore = document.querySelector(".thePCScore")
        compScore.textContent = `${computerWins}`
        // userWin++
    }
    else if (pc === "paper" && user === "rock") {
        const resultTest = document.querySelector(".results");
        resultTest.textContent = `PC chose ${computerChoice} and you selected ${playerChoice} you lose`;

        const score = document.querySelector(".myScore");
        score.textContent = `${computerWins++}`

        const compScore = document.querySelector(".thePCScore")
        compScore.textContent = `${userWin}`

        // computerWins++
    }

    else if (pc === "paper" && user === "paper") {
        const resultTest = document.querySelector(".results");
        resultTest.textContent = 'Draw';
    }

    else if (pc === "scissors" && user === "scissors") {
        const resultTest = document.querySelector(".results");
        resultTest.textContent = 'Draw';
    }
    else if (pc === "scissors" && user === "rock") {
        const resultTest = document.querySelector(".results");
        resultTest.textContent = `PC chose ${computerChoice} and you selected ${playerChoice} you win`;

        const compScore = document.querySelector(".thePCScore");

        compScore.textContent = `${userWin++}`

        const score = document.querySelector(".myScore");
        score.textContent = `${computerWins}`

        // userWin++
    }

    else if (pc === "scissors" && user === "paper") {
        const resultTest = document.querySelector(".results");
        resultTest.textContent = `PC chose ${computerChoice} and you selected ${playerChoice} you lose`;

        const score = document.querySelector(".myScore");
        score.textContent = `${computerWins++}`

        const compScore = document.querySelector(".thePCScore")
        compScore.textContent = `${userWin}`
        
        // computerWins++
    }
    else {
        console.log('invalid');
    }

}

let rockClick = document.querySelector('#rock');
rockClick.addEventListener('click', () => {
    playerChoice = 'rock';
    play(computerChoice, playerChoice);
});

let paperClick = document.querySelector('#paper');
paperClick.addEventListener('click', () => {
    playerChoice = 'paper';
    play(computerChoice, playerChoice);

});

let scissorsClick = document.querySelector('#scissors');
scissorsClick.addEventListener('click', () => {
    playerChoice = 'scissors';
    play(computerChoice, playerChoice);
});


// function game() {
//     for (let i = 0; i < 5; i++) {

//         play();
//         console.log(`computer ${computerWins} and user ${userWin}`);
//     }
// }

// game()

// if (computerWins > userWin){
//     console.log("Computer wins");
// } else if (userWin > computerWins){
//     console.log("You win");
// } 
// else {
//     console.log('It was a draw, you can try again');
// }