let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result p");
const actionMessage = document.getElementById("action-message");

const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    return choices[Math.floor(Math.random() * 3)];
}

function convert(choice) {
    if (choice === "r") return "Rock";
    if (choice === "p") return "Paper";
    return "Scissors";
}

function glow(choice, className) {
    const element = document.getElementById(choice);
    element.classList.add(className);
    setTimeout(() => element.classList.remove(className), 300);
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convert(user)} beats ${convert(computer)}. You Win! 🎉`;
    actionMessage.innerHTML = "Nice move!";
    glow(user, "green-glow");
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(user)} loses to ${convert(computer)}. You Lose 😢`;
    actionMessage.innerHTML = "Try again!";
    glow(user, "red-glow");
}

function draw(user, computer) {
    result_p.innerHTML = `${convert(user)} equals ${convert(computer)}. Draw 🤝`;
    actionMessage.innerHTML = "It's a tie!";
    glow(user, "gray-glow");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;

        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;

        default:
            draw(userChoice, computerChoice);
    }
}

rock.addEventListener("click", () => game("r"));
paper.addEventListener("click", () => game("p"));
scissors.addEventListener("click", () => game("s"));
