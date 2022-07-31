// let i = 5;

let computerChoice = getComputerChoice();
let playerChoice;

let computerWins = 0;
let userWin = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function play(pc, user) {


    pc = computerChoice;
    user = playerChoice;

    if (pc === "rock" && user === "paper" || pc === "paper" && user === "scissors" || pc === "scissors" && user === "rock") {
        const resultTest = document.querySelector(".results");
        resultTest.textContent = `PC chose ${computerChoice} and you selected ${playerChoice} you win`;

        const score = document.querySelector(".myScore");
        score.textContent = `${++userWin}`;

        const compScore = document.querySelector(".thePCScore")
        compScore.textContent = `${computerWins}`;

    }
    else if (pc === "rock" && user === "scissors" || pc === "paper" && user === "rock" || pc === "scissors" && user === "paper") {
        const resultTest = document.querySelector(".results");
        resultTest.textContent = `PC chose ${computerChoice} and you selected ${playerChoice} you lose`;

        const compScore = document.querySelector(".thePCScore");
        compScore.textContent = `${++computerWins}`;

        const score = document.querySelector(".myScore");
        score.textContent = `${userWin}`;
    }
    else if (pc === user) {
        const resultTest = document.querySelector(".results");
        resultTest.textContent = 'Draw';
    }


    if (computerWins == 3) {
        alert(`computer wins with ${computerWins}, you lose`);
    }

    else if (userWin == 3) {
        alert(`You win with ${userWin}`);
    }

}

let rockClick = document.querySelector('#rock');
rockClick.addEventListener('click', () => {
    playerChoice = 'rock';
    play();
});

let paperClick = document.querySelector('#paper');
paperClick.addEventListener('click', () => {
    playerChoice = 'paper';
    play();

});

let scissorsClick = document.querySelector('#scissors');
scissorsClick.addEventListener('click', () => {
    playerChoice = 'scissors';
    play();
});





console.log(computerWins, userWin);

// game()

// if (computerWins > userWin){
//     console.log("Computer wins");
// } else if (userWin > computerWins){
//     console.log("You win");
// } 
// else {
//     console.log('It was a draw, you can try again');
// }