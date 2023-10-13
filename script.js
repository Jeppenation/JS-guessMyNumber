'use strict';

// // .textcontent skriver ut vad som är i .message i ren text, istället för typ <p>start guessing..</p>
// console.log(document.querySelector('.message').textContent);

// // för att ändra en text, så kan man också använda .textContent
// document.querySelector('.message').textContent = 'Correct Number! 🎉';

// //displayar "Correct number! 🎉"
// console.log(document.querySelector('.message').textContent);

// //Vi kan ändra både number och scoren med dessa: 
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //Vi kan även manipulera själva värdet på gissningen. 
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// ======================================================================================================
// ********************************start of the project**************************************************
// ======================================================================================================

// Math.random randomizerar ett tal mellan 0-1, för att få det mellan 0-20 så väljer vi att
// multiplicera detta med just 20. Vi använder sedan Math.trunc för att avrunda det till ett
// heltal.
const secretNumber = Math.trunc(Math.random()*20);
const btnCheck = document.querySelector('.check');
let score = 20;

const winState = document.querySelector('body');

// document.querySelector('.number').textContent = secretNumber;


btnCheck.addEventListener('click', () => {

    // Number konverterar om innehållet till siffror, int. 
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // ifall guess inte innehåller något värde, så printar den No number
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No number';
    }
    // Ifall dom gissar rätt, så printar den correct number, och gör bakgrunden grön! 
    else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number ! 🎉';
        document.querySelector('.number').textContent = secretNumber;
        winState.classList.add('win');
    }
    // Ifall dom gissar för högt, så informeras det också
    else if(guess > secretNumber){

        if ( score > 1){
            document.querySelector('.message').textContent = 'Too high 📈';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost the game! 😭';
            document.querySelector('.score').textContent = 0;
        }
    }
    // även ifall dom gissar för lågt
    else if(guess < secretNumber){

        if (score > 1){
            document.querySelector('.message').textContent = 'Too low 📉';
            score--;
            document.querySelector('.score').textContent = score;    
        }
       else{
        document.querySelector('.message').textContent = 'You lost the game! 😭';
        document.querySelector('.score').textContent = 0;
       }
    }

    
});