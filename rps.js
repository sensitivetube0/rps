function getcomputerchoice(){
   let computerchoice = Math.random();
       if (computerchoice <= .3333333)
       return "rock";
       else if (computerchoice >= .333333 && computerchoice <=.6666666)
       return "scissors";
       else if (computerchoice >= .666666)
       return "paper";
}




function gethumanchoice(){
    let humanprompt = prompt("rock paper or scissors?");
    let humanchoice = humanprompt.toLowerCase();
   if (humanchoice === "rock"){
       return "rock";
   }
   else if (humanchoice === "scissors"){
       return "scissors";
   }
   else if (humanchoice === "paper"){
       return "paper";
   }
   else{
   alert("please choose one")
   return(gethumanchoice());
   }
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
       return("you lose a round");
      
    }
   else if ((humanselection === "paper" && computerselection === "rock")
        || (humanselection === "scissors" && computerselection === "paper")
       || (humanselection === "rock" && computerselection === "scissors")
       )  
       {
       humanscore++;
       return ("you win a round");
       }
   else
   return ("draw");


}
let humanscore = 0
let computerscore = 0


function playgame(){
  
   while (humanscore < 5 && computerscore < 5){
   let humanchoice = gethumanchoice();
   let computerchoice = getcomputerchoice();
   console.log(computerchoice);
   console.log(humanchoice);
   let game = round(humanchoice, computerchoice);
   console.log(game);
   }
   if (humanscore === 5){
   console.log("game over you win");
   }
   else
   console.log("game over you lose");


}
playgame()