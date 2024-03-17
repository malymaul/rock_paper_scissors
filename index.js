// Test
console.log('Hello, world!')

let choice = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

// Computer choice function
let randomChoice = choiceArr => {
    const randomIndex = Math.floor(Math.random() * choiceArr.length) // Generates a random index
    return choiceArr[randomIndex];
};

// Function: Plays a single round of Game
let round = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return `Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else  if (playerSelection === 'paper' && computerSelection === 'paper') {
        return `Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else  if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return `Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        userScore++
        return `Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        return `Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userScore++
        return `Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return `Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        userScore++
        return `Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return `Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else {
        return '🚨 Please select Rock, Paper, or Scissors 🚨';
    }
};

// Function to play 5 round game
let playGame = () => {
    //For loop that will play 5 rounds of game. The if statement will not run until the for loop is complete
    for (let i = 0; i < 5; i++) {
        console.log(round(randomChoice(choice), randomChoice(choice)))
        console.log (`👨🏾‍💻 Player Score: ${userScore} 🤖 CPU Score: ${computerScore}`)
    }
    //If statement to determine the winner at the end of the game.
    if (userScore > computerScore) {
        console.log(`👨🏾‍💻 Player wins!!`)
    } else if (computerScore > userScore) {
        console.log(`🤖 CPU Wins!!`)
    } else if (userScore === computerScore) {
        console.log(`It's a tie Game 🎀`)
    }
}

playGame();