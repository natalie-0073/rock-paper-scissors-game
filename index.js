function rpsGame(){
    alert('Welcome to the Rock Paper Scissors game!');
let userChoice = prompt('Please chose r, p or s');
if(userChoice!=='r'&&userChoice!=='p'&&userChoice!=='s'){
    alert('Invalid input! Try again.')
    return;
}
let choices=['r', 'p', 's'];
let computerChoice=choices[Math.floor(Math.random()*choices.length)];
alert('Computer chose '+computerChoice);
if(userChoice===computerChoice){
    alert('It is a tie!');
}
else if(userChoice==='r'&&computerChoice==='s'||userChoice==='p'&&computerChoice==='r'||userChoice==='s'&&computerChoice==='p'){
    alert('You won!');
}
else{
    alert('Computer won!');
}
if(confirm('Do you want to play again?')){
    rpsGame();
}
else{
    alert('Thanks for playing!');
}
}
rpsGame();

