let choices = ["rock", "paper", "scissors"];
let i = 5;

let computerWins = 0;
let userWin = 0;

function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

function play(pc, user) {
    let computerChoice = getComputerChoice(choices);
    let choose = prompt("rock, paper or scissors?");
    let playerChoice = choose.toLowerCase();

    pc = computerChoice;
    user = playerChoice;

    if (pc === "rock" && user === "paper") {
        console.log(`PC chose ${computerChoice} and you selected ${playerChoice} you win`);
        userWin++
    }
    else if (pc === "rock" && user === "scissors") {
        console.log(`PC chose ${computerChoice} and you selected ${playerChoice} you lose`);
        computerWins++
    }
    else if (pc === "rock" && user === "rock") {
        console.log(`PC chose ${computerChoice} and you selected ${playerChoice} draw`);
    }

    else if (pc === "paper" && user === "scissors") {
        console.log(`PC chose ${computerChoice} and you selected ${playerChoice} you win`);
        userWin++
    }
    else if (pc === "paper" && user === "rock") {
        console.log(`PC chose ${computerChoice} and you selected ${playerChoice} you lose`);
        computerWins++
    }

    else if (pc === "paper" && user === "paper") {
        console.log(`PC chose ${computerChoice} and you selected ${playerChoice} draw`);
    }

    else if (pc === "scissors" && user === "scissors") {
        console.log(`PC chose ${computerChoice} and you selected ${playerChoice} draw`);
    }
    else if (pc === "scissors" && user === "rock") {
        console.log(`PC chose ${computerChoice} and you selected ${playerChoice} you win`);
        userWin++
    }

    else if (pc === "scissors" && user === "paper") {
        console.log(`PC chose ${computerChoice} and you selected ${playerChoice} lose`);
        computerWins++
    } else {
        console.log('invalid');
    }

}

function game() {
    for (let i = 0; i < 5; i++) {

        play();
        console.log(`computer ${computerWins} and user ${userWin}`);
    }
}

game()

if (computerWins > userWin){
    console.log("Computer wins");
} else if (userWin > computerWins){
    console.log("You win");
} else (
    console.log("was a draw, wanna try again?")
)