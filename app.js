const max = prompt("Enter the max number: ");


const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number: ");

while(true){
  if(guess == "quit"){
    console.log("User Quit...");
    break;
  }

  if(guess == random){
    prompt("You are right! Congrats!! random number was ", random);
    break;
  }else if(guess < random){
    guess = prompt("hint: Your guess was too small. Please try again.");
  }else{
    guess = prompt("hint: your guess was too large. please try again.");
  }


}