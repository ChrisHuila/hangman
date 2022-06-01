const screen = document.querySelector('#canvas');
const brush = screen.getContext('2d');

// color of canvas
const guesslineColor = 'black';
const colorLetter1 = 'black';
const colorLetter2 = 'black';
const colorGallow = 'black';
const colorHangman = 'black';


// Function

// Draw hangman on canvas
function hangman() {
    const lineW = 3;
    const lineMan = 2;
    if(1 === wrongLetters.length) {
    
      brush.moveTo(70 ,290);
      brush.lineTo(230 ,290);
      brush.strokeStyle = colorGallow;
      brush.lineWidth = lineW;
      brush.stroke();
    }
  
    if(2 === wrongLetters.length) {
      
      brush.moveTo(112  ,290);
      brush.lineTo(112 ,50);
      brush.strokeStyle = colorGallow;
      brush.lineWidth = lineW;
      brush.stroke();
    }
    
    if(3 === wrongLetters.length) {
      
      brush.moveTo(110  ,50);
      brush.lineTo(250 ,50);
      brush.strokeStyle = colorGallow;
      brush.lineWidth = lineW;
      brush.stroke();
    }
    
    if(4 === wrongLetters.length) {
      
      brush.moveTo(250  ,50);
      brush.lineTo(250 , 80);
      brush.strokeStyle = colorGallow;
      brush.lineWidth = lineW;
      brush.stroke();
    }
  
    if(5 === wrongLetters.length) {
      
      brush.beginPath();
      brush.arc(250, 100, 20, 0, 2 * Math.PI);
      brush.fillStyle = colorHangman;
      brush.strokeStyle = colorHangman;
      brush.lineWidth = lineMan;
      brush.stroke();
      // brush.fill();
    }
  
    if(6 === wrongLetters.length) {
      
      brush.moveTo(250 ,120);
      brush.lineTo(250 ,210);
      brush.lineWidth = lineMan;
      brush.stroke();
    }
  
    if(7 === wrongLetters.length) {
      
      brush.moveTo(250 , 120);
      brush.lineTo(270 ,160);
      brush.lineWidth = lineMan;
      brush.stroke();
  
      brush.moveTo(250 , 120);
      brush.lineTo(230 ,160);
      brush.lineWidth = lineMan;
      brush.stroke();
  
    }
  
    if( 8 === wrongLetters.length) {
      
      brush.moveTo(250 , 210);
      brush.lineTo(230 ,270);
      brush.lineWidth = lineMan;
      brush.stroke();
  
      brush.moveTo(250 , 210);
      brush.lineTo(270 ,270);
      brush.lineWidth = lineMan;
      brush.stroke();
  
      
    }
    //show defeat message
    if(9 === wrongLetters.length) {
      numberLetters.splice(0, numberLetters.length);
      
      const lose = document.querySelector('.lose');
      lose.style.display = 'inline';

      const descriptionWord = document.querySelector('.word_home');
      descriptionWord.textContent = `The secret word was`;

      const secretWord = document.querySelector('.secret_home');
      secretWord.textContent = `${word}`;

    }
}