// Test
console.log('Hello, world!')

let choice = ['rock', 'paper', 'scissors'];

// Computer choice function
let randomChoice = choiceArr => {
    const randomIndex = Math.floor(Math.random() * choiceArr.length) // Generates a random index
    return choiceArr[randomIndex];
};

// Function: Plays a single round of Game
let round = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return `Tie 🎀! Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else  if (playerSelection === 'paper' && computerSelection === 'paper') {
        return `Tie 🎀! Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else  if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return `Tie 🎀! Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `Player wins 🎉 Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `CPU wins 🎉 Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `Player wins 🎉 Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return `CPU wins 🎉 Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `Player wins 🎉 Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return `Player wins 🎉 Player: ${playerSelection}. CPU: ${computerSelection}`;
    } else {
        return '🚨 Please select Rock, Paper, or Scissors 🚨';
    }
};

round(randomChoice(choice), randomChoice(choice))