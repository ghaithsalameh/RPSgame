console.log("hello");
function computerPlay(){
        let computernumber= Math.floor((Math.random() * 3) + 1);
    console.log(computernumber);
    if (computernumber==1){
         return "rock";
    } else if (computernumber==2){
        return "paper";} 
        else {
            return "scissors";
        }
    }
let computerSelection= computerPlay();
function inputPlay(){
    userInput= prompt("Please enter rock paper or scissors");
    // this makes sure that our game is non case sensitive
    userInput= userInput.toLowerCase();
// this line of code will validate and make sure the answer is one of the three options                        
    while (userInput!="rock"&&userInput!="paper"&&userInput!="scissors"){
        userInput= prompt("Please enter rock paper or scissors");
       
}
return userInput;}


let playerSelection= inputPlay();

function playRound(playerSelection,computerSelection){
    if (playerSelection===computerSelection){
    console.log("It's a tie!")
} else if(playerSelection=="rock"&&computerSelection=="scissors"){
    console.log("You win!")
}
}