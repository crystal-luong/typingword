
window.addEventListener('load', init)

let time = 5;
let score = 0;
let isPlaying;
let maxPoint = 0;

//DOM ELEMENTS
const highestScore = document.querySelector('#max-point')
const buttonPlay = document.querySelector('#play-again');
const containerDisplay = document.querySelector('.container')
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const messageText = document.querySelector('#message');
var words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'champion',
  'ghost',
  'fierce',"gauchely","gaucheness","gauchenesses","gaucher","gaucherie","gaucheries","gauchest","gaucho","gauchos","gaud","gauderies","gaudery","gaudier","gaudies","gaudiest","gaudily","gaudiness","gaudinesses","immunomodulator","immunopathology","immunoreactive","immunosorbent","immunosorbents","immunosuppress","immunotherapies","immunotherapy","immure","immured","immurement","immurements","immures"
];


// Initialize Game
function init() {
    
    // Load word from array
    
    showWord(words);
    // start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    //check game status
    setInterval(checkStatus, 50)
    buttonPlay.style.display ='none';
   
    
   
    
}
buttonPlay.onclick = function buttonClick() {
    showWord(words); 
    time = 6;
    score = 0;
    scoreDisplay.innerHTML = score;
    wordInput.value = '';
    messageText.innerHTML = '';
}

function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = 6;
        showWord(words);
        wordInput.value = '';
        score++;
        if (score > maxPoint) {
            maxPoint++;
        }
    }
    scoreDisplay.innerHTML = score;
    highestScore.innerHTML = maxPoint;
}
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        messageText.innerHTML = 'Great!!!';
        return true;
    } else {
        messageText.innerHTML = " ";
        return false;
    }
}
// pick & show random word
function showWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomIndex];
}
//start match



// countdown timer
function countdown() {
    if (time > 0) {
        time--;
        buttonPlay.style.display ='none';   
    }
    else if(time === 0) {
        isPlaying = false; 
        
    }
    // show time
    timeDisplay.innerHTML = `${time}s`;
}
// check status
function checkStatus() {
    if(!isPlaying && time === 0) {
        messageText.innerHTML = 'Game Over!';
        score = 0;
        buttonPlay.style.display = 'block';  
        wordInput.value = " "; 
    }
}
