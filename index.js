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
        console.log(`It's a tie 🎀`);
    } else  if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log(`It's a tie 🎀`);
    } else  if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log(`It's a tie 🎀`);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(`Player wins 🎉`);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log(`CPU wins 🎉`);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`Player wins 🎉`);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log(`CPU wins 🎉`);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`Player wins 🎉`);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log(`Player wins 🎉`);
    } else {
        console.log('🚨 Please select Rock, Paper, or Scissors 🚨')
    }
};

round(randomChoice(choice), randomChoice(choice))