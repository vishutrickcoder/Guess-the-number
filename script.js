'use strict'

let SecretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click" , function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log( guess ,typeof guess)
    
    if(!guess){
        displayMessage("⛔️ No Number!!!")

    }else if(guess === SecretNumber){
        displayMessage(" 🍾 Correct Answer!!!")
        document.querySelector(".number").textContent = SecretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem"

        if(score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore 
        }

    }else if(guess !== SecretNumber){
        if(score > 1 ){
            // document.querySelector(".message").textContent =guess > SecretNumber ? "📈 Too High!!" : " ⬇️ Too low !!";
            displayMessage(guess > SecretNumber ? "📈 Too High!!" : " ⬇️ Too low !!")
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            displayMessage("😭 You Lost the game")    
        }

    }
       
    
});

document.querySelector(".again").addEventListener("click" , function(){
    score = 20;
    SecretNumber = Math.trunc(Math.random()*20)+1;

    displayMessage("Start Guessing ....")
    document.querySelector('.score').textContent = score;

    document.querySelector(".number").textContent = "?";

    document.querySelector('.guess').value  = "";

    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"

});