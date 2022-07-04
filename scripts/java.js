const choices = ["rock","paper","scissors"];
function game(){
    for (let i = 1; i <= 5; i++) {
        playRound(i)
      }
      logWinners();
      
}
const winners=[];
function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    //console.log(computerSelection);
    const winner = checkWinner(playerSelection,computerSelection);
    console.log(winner);
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round)
}
function playerChoice(){
let input = prompt("Please enter rock, paper or scissors.")
while (input == null){
     input = prompt("Please enter rock, paper or scissors.")
}
input= input.toLowerCase();
let check = validateInput(input);
if (check==true){
    //console.log(input);
}
while (check==false){
    input= prompt("Please enter rock, paper or scissors. Spelling must be exact but capitalization does not matter");
    input= input.toLowerCase();
    check = validateInput(input);
    //console.log(input);    
}
return input;
}
function computerChoice(){
   
 return choices[Math.floor(Math.random()*choices.length)]
}
function validateInput(choice){
    //this looks for the parameter in the choices array and reurns true if it is found
    if (choices.includes(choice)){
        return true;
    } else{
        return false;
    }
}
function checkWinner(choiceP,choiceC){
    if(choiceP === choiceC){
        return "tie";
    } else if((choiceP === "rock" && choiceC === "scissors") || 
    (choiceP === "paper" && choiceC === "rock") || 
    (choiceP === "scissors" && choiceC === "paper")){
        return "Player";
    } else {
        return "Computer";
    }
}
function logWinners(){
    
        let playerWins = winners.filter((item) => item == "Player").length;
        let computerWins = winners.filter((item) => item == "Computer").length;
        let ties = winners.filter((item) => item == "Tie").length;
        console.log("Results:");
        console.log("Player Wins:", playerWins);
        console.log("Computer Wins:", computerWins);
        console.log("Ties:", ties);
      }
      function logRound(playerChoice,computerChoice,winner, round){
        console.log("round is", round)
        console.log("player chose: ", playerChoice)
        console.log("computer chose: ", computerChoice)
        console.log("winner is: ", winner);
        console.log("-----------------------------------");
      }