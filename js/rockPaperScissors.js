// Function to randomize integer 0-2
const getRandomInt = max => {
    return (Math.floor(Math.random() * max));
}

// Function to get a user input
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
        return userInput;
    } else {
        console.log("error");
    }
}

// Convert random integer to a selection
const getComputerChoice = _ => {
    const choice = getRandomInt(3);
    switch (choice) {
        case (0):
            return ('rock');
            break;
        case (1):
            return ('paper');
            break;
        case (2):
            return ('scissors');
            break;
    }
}

// Logic function determining winner
const determineWinner = (userChoice, pcChoice) => {
    let winner = undefined;
    if (userChoice === pcChoice) {
        winner = 'tie';
    }

    // User enters rock
    if (userChoice === 'rock') {
        if (pcChoice === 'scissors') {
            winner = 'user';
        } else if (pcChoice === 'paper') {
            winner = 'pc';
        }
    }

    // User enters paper
    if (userChoice === 'paper') {
        if (pcChoice === 'rock') {
            winner = 'user';
        } else if (pcChoice === 'scissors') {
            winner = 'pc';
        }
    }

    // User enters scissors
    if (userChoice === 'scissors') {
        if (pcChoice === 'paper') {
            winner = 'user';
        } else if (pcChoice === 'rock') {
            winner = 'pc';
        }
    }
    return winner;
}

// Function to input selections into functions and determine winner
const playGame = choice => {
    let userChoice = getUserChoice(choice);
    console.log(`User: ${userChoice}`);

    let computerChoice = getComputerChoice();
    console.log(`PC: ${computerChoice}`)

    let winner = determineWinner(userChoice, computerChoice);

    console.log(`Result: ${winner}`);
}

// Put user input here to start the game
playGame('scissors');