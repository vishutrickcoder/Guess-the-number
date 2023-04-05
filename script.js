'use strict'
/*
console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = " 🍾 Correct Answer!!!"
document.querySelector('.number').textContent = 17
document.querySelector('.score').textContent = 12
document.querySelector('.guess').value = 29;
console.log(document.querySelector('.guess').value )
*/

let SecretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click" , function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log( guess ,typeof guess)
    
    if(!guess){
        document.querySelector(".message").textContent = "⛔️ No Number!!!";

    }else if(guess === SecretNumber){

        document.querySelector(".message").textContent = " 🍾 Correct Answer!!!";
        document.querySelector(".number").textContent = SecretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem"

        if(score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore 

        }

    }else if(guess > SecretNumber){
        if(score > 1 ){
            document.querySelector(".message").textContent = "📈 Too High!!";
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = "😭 You Lost the game";
            
        }
       
    }else if(guess < SecretNumber){
        if(score > 1){
            document.querySelector(".message").textContent = " ⬇️ Too low !!";
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = "😭 You Lost the game";

        }
       
    }
});


document.querySelector(".again").addEventListener("click" , function(){
    score = 20;
    SecretNumber = Math.trunc(Math.random()*20)+1;


    document.querySelector('.message').textContent = "Start Guessing ....";
    document.querySelector('.score').textContent = score;

    document.querySelector(".number").textContent = "?";

    document.querySelector('.guess').value  = "";

    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"



});