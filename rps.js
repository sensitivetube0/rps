let humanscore = 0
let computerscore = 0
let divElementComputer;
let divElementHuman;
let roundDraw;
let roundwinnerComputer;
let roundwinnerHuman;
let humanselection;
let humanscoreDiv;

function getcomputerchoice(){
   let computerchoice = Math.random();
       if (computerchoice <= .3333333)
       return "rock";
       else if (computerchoice >= .333333 && computerchoice <=.6666666)
       return "scissors";
       else if (computerchoice >= .666666)
       return "paper";
}






function round(computerselection, humanselection){
 

   if (
   (humanselection === "rock" && computerselection === "paper")
    || (humanselection === "paper" && computerselection === "scissors")
     ||
       (humanselection === "scissors" && computerselection === "rock")
   )
       {
       computerscore++;
      roundwinnerComputer = document.createElement("div")
      roundwinnerComputer.textContent = "You lose a round"
      divElementHuman.appendChild(roundwinnerComputer);
    }
   else if ((humanselection === "paper" && computerselection === "rock")
        || (humanselection === "scissors" && computerselection === "paper")
       || (humanselection === "rock" && computerselection === "scissors")
       )  
       {
       humanscore++;
       roundwinnerHuman = document.createElement("div");
       roundwinnerHuman.textContent = "You win a round";
       divElementHuman.appendChild(roundwinnerHuman);
       }
   else {
       roundDraw = document.createElement("div");
       roundDraw.textContent = "Draw";
       divElementHuman.appendChild(roundDraw);
       
   }

}

function cleanupRound() {
    // Remove previous round elements
    if(divElementComputer) divElementComputer.remove();
    if(divElementHuman) divElementHuman.remove();
    if(humanscoreDiv) humanscoreDiv.remove();
}






function playgame(){
     cleanupRound();
    if (humanscore === 5 || computerscore === 5){
        const existingMessages = document.querySelectorAll('div');
        existingMessages.forEach(div => {
          
                div.remove();
            
        });
        
        humanscore = 0;
        computerscore = 0;
    }

    if (humanscore < 5 && computerscore < 5){
        let computerchoice = getcomputerchoice();
        divElementComputer = document.createElement("div");
        divElementComputer.textContent = `computer chooses: ${computerchoice}`;
        
        divElementHuman = document.createElement("div");
        divElementHuman.textContent = `you choose: ${humanselection}`;
        document.body.appendChild(divElementComputer);
        document.body.appendChild(divElementHuman);
        
        let game = round(computerchoice, humanselection);
        
        if(humanscoreDiv) humanscoreDiv.remove();
        if (humanscore > 0 || computerscore > 0){
            humanscoreDiv = document.createElement("div");
            humanscoreDiv.textContent = `computer score:${computerscore} human score:${humanscore}`;
            document.body.appendChild(humanscoreDiv);
        }
    }

 
    if (humanscore === 5){
        let humanWins = document.createElement("div");
        humanWins.textContent = "You win the game";
        document.body.appendChild(humanWins);
    }
    else if (computerscore === 5){
        let computerWins = document.createElement("div");
        computerWins.textContent = "Computer wins";
        document.body.appendChild(computerWins);
    }
}

const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");
rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";
paper.addEventListener("click", () => {
    humanselection = "paper";
    playgame();
});
rock.addEventListener("click", () => {
    humanselection = "rock";
    playgame();
});
scissors.addEventListener("click", () => {
    humanselection = "scissors";
    playgame();
});