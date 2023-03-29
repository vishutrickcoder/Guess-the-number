'use strict'
/*
console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = " 🍾 Correct Answer!!!"
document.querySelector('.number').textContent = 17
document.querySelector('.score').textContent = 12
document.querySelector('.guess').value = 29;
console.log(document.querySelector('.guess').value )
*/

const SecretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
document.querySelector(".number").textContent = SecretNumber;



document.querySelector(".check").addEventListener("click" , function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log( guess ,typeof guess)
    
    if(!guess){
        document.querySelector(".message").textContent = "⛔️ No Number!!!";
    }else if(guess === SecretNumber){
        document.querySelector(".message").textContent = " 🍾 Correct Answer!!!";
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
