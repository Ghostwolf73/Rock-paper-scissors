let choices = ["rock", "paper", "scissors"];

function getComputerChoice(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

let computerChoice = getComputerChoice(choices);


let playerChoice = prompt("rock, paper or scissors?");

function roundOne(pc, user){
    pc = computerChoice;
    user = playerChoice;

    if (pc === "rock" && user === "paper"){
        alert(`PC chose ${computerChoice} and you selected ${playerChoice} you win`);
    }
    else if (pc === "rock" && user === "scissors"){
        alert(`PC chose ${computerChoice} and you selected ${playerChoice} you lose`);
    }
    else if (pc === "rock" && user === "rock"){
        alert(`PC chose ${computerChoice} and you selected ${playerChoice} draw`);
    }

    else if (pc === "paper" && user === "scissors"){
        alert(`PC chose ${computerChoice} and you selected ${playerChoice} you win`);
    }
    else if (pc === "paper" && user === "rock"){
        alert(`PC chose ${computerChoice} and you selected ${playerChoice} you lose`);
    }

    else if (pc === "paper" && user === "paper"){
        alert(`PC chose ${computerChoice} and you selected ${playerChoice} draw`);
    }

    else if (pc === "scissors" && user === "scissors"){
        alert(`PC chose ${computerChoice} and you selected ${playerChoice} draw`);
    }
    else if (pc === "scissors" && user === "rock"){
        alert(`PC chose ${computerChoice} and you selected ${playerChoice} you win`);
    }

    else if (pc === "scissors" && user === "paper"){
        alert(`PC chose ${computerChoice} and you selected ${playerChoice} lose`);
    } else {
        alert('invalid');
    }

}

roundOne();
