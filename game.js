let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
   const optioms = ["Rock","Paper","Scissors"] ;
   const randIdx = Math.floor(Math.random()*3);
   return optioms[randIdx];
}

const drawGame = ()=> {
    console.log("Game was draw");
    msg.innerText = "DRAW";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
playgame = (userChoice) => {
    console.log("user choice =",userChoice);
    //Generate COmputer Choice -> modular 
    const compChoice = genCompChoice();
    console.log("CompChoice = ",compChoice);

    if(userChoice == compChoice){
       drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'Rock'){
            //scissors,paper
            userWin = compChoice === "Paper" ? false:true;
        }
        else if(userChoice === 'paper'){
            //Rock.scissors
            userWin = compChoice === "Scissors" ? false:true;

        }
        else{
            userWin = compChoice === "Rock"? false : true;
        }

        showWinner(userWin,userChoice,compChoice);

    }
};

choice.forEach((choices) => {
    choices.addEventListener("click",() =>{
     const userChoice = choices.getAttribute("id");
        playgame(userChoice)
    });

})