let computerChoice = getComputerChoice();
let playerChoice;

let computerWins = 0;
let userWin = 0;

const clapAudio = new Audio('./sounds/cheering-and-clapping-crowd-2-6029.mp3');
const awwwSound = new Audio('./sounds/Crowd Aww - Sound Effect.mp3');
const startSound = new Audio('./sounds/start.mp3');
const selectSound = new Audio('./sounds/select.mp3');

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

let startButton = document.querySelector('.start');
startButton.addEventListener('click', () => {
    startSound.play();
    let myPage = document.querySelector('.start-game');
    myPage.classList.add('hide');
    
    let gamePage = document.querySelector('.main');
    gamePage.classList.remove('hide');
})


function play(pc, user) {


    pc = getComputerChoice();
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

    if (computerWins == 4) {
        window.location.href = './loser.html';
        awwwSound.play();
    }

    else if (userWin == 4) {
        window.location.href = './winner.html';
        clapAudio.play();

    }

}

let rockClick = document.querySelector('#rock');
rockClick.addEventListener('click', () => {
    playerChoice = 'rock';
    selectSound.play();
    play();
});

let paperClick = document.querySelector('#paper');
paperClick.addEventListener('click', () => {
    playerChoice = 'paper';
    selectSound.play();
    play();

});

let scissorsClick = document.querySelector('#scissors');
scissorsClick.addEventListener('click', () => {
    playerChoice = 'scissors';
    selectSound.play();
    play();
});

