let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};

const playGame = (userChoice) => {
    console.log("user choice = " , userChoice);
     //GENERATE COMPUTER CHOICE (WE ARE CREATING EACH FUNCTION FOR EACH WORK THIS IS CALLED -> MODULAR)
     const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper 
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin ,userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});