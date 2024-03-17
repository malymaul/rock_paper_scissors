// Test
console.log('Hello, world!')

let choice = ['rock', 'paper', 'scissors'];

// Computer choice function
let getComputerChoice = choiceArr => {
    const randomIndex = Math.floor(Math.random() * choiceArr.length) // Generates a random index
    return choiceArr[randomIndex];
};

const cpu = getComputerChoice(choice);

console.log(cpu);
