// In this entrance ticket, you will be building a "guess the number" game. 
// Create a new variable and put a number from 1-100 in

let i = 17

// Prompt the user to guess the number

let user= (prompt("Guess the number"))


// Cast the user input to a number



// Create a new variable called attempts and set it to 0
let attempts = 0

// Create a while loop that runs while the user guess is not equal to your number
while(i != 17){
  console.log(i)
  
}

// In the while loop, prompt the user to guess the number again (remember to cast)
user=prompt("Guess the number")

// In the while loop, increase the attempts by 1

while(i<=17){
  console.log(i)
  i++
}
// In the while loop, write an if statement that does the following
// If the user guess is higher, say "Too high!"
// If the user guess is lower, say "Too low!"
// If the user guess is right, say "You got it!"
let guess = []
while (guess!== i){
   guess = prompt("Guess the number")
  attempts++
  if(guess === higher){
    console.log("Too high!")
  }else if(guess === lower) {
    console.log("Too low!")
    
  }else{
    console.log("Your got it!")
    
    
  }
}





// After the while loop, print "It took (attempts) attempts" 

console.log("It took you" + attempts +"attempts to guess the number")