

let choices = ['rock', 'paper', 'scissors'];

// Computer choice function
let getComputerChoice = choice => {
    // Generates a rndom index based on the passed in Arrays length
     const randomIndex = Math.floor(Math.random() * choice.length);
    //  Return the item from the array at the random index
    return choice[randomIndex];
}

