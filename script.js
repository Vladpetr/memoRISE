// Global constants
 
// how long to hold each clue's light/sound
var clueHoldTime = 1000; 

// how long to pause in between clues
const cluePauseTime = 333; 

// how long to wait before starting playback of the clue sequence
const nextClueWaitTime = 1000; 

// Global Variables

// keep track of the secret pattern of button presses
var pattern;

// show how many mistakes a player is allowed to make
var strikes;

// an integer that represents how far along the player 
// is in guessing the pattern
var progress = 0; 

// a Boolean value that will keep track of whether the game 
// is currently active
var gamePlaying = false;

var tonePlaying = false;

// must be between 0.0 and 1.0
var volume = 0.5;  

// keeps track of where the user is in the clue sequence
var guessCounter = 0;

function randomPattern(){
    // generate random pattern represented by an array of 10
    // integers from 1 to 5
    return Array.from({length: 10}, () => Math.ceil(Math.random() * 5));
}


function startGame(){
  
    // initialize game variables
    progress = 0;
    gamePlaying = true;
    strikes = 3;
  
    showAttempts();
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
  
    // initialize the pattern
    pattern = randomPattern();
    console.log(pattern)
  
    playClueSequence();
      
    
}

function stopGame(){
    // update game variables
    gamePlaying = false;
  
    // swap the Start and Stop buttons
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("startBtn").classList.remove("hidden");
}




// Sound Synthesis Functions
const freqMap = {
  1: 250,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}



// Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)



// functions for lighting or clearing a button
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

////TESTING!!!!!!!!!
function showAttempts(){
  document.getElementById("number").textContent = strikes;
}


// function for playing a single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}




function playClueSequence(){
  
  guessCounter = 0;
  
  //set delay to initial wait time
  let delay = nextClueWaitTime; 
  
  // for each clue that is revealed so far
  for(let i=0;i<=progress;i++){ 
    
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    
    // set a timeout to play that clue
    setTimeout(playSingleClue,delay,pattern[i]) 
    
    delay += clueHoldTime 
    
    delay += cluePauseTime;
    
    // Subtract 10 milliseconds on each turn to make the game harder
    clueHoldTime -= 10;
    console.log("The clue was played")
  }
}


// if a user wins the game
function winGame(){
  stopGame();
  alert("Wow, what a victory!");
  
  // Set clueHoldTime time back to its original value
  clueHoldTime = 1000;
  
}


// if a user loses the game
function loseGame(){
  stopGame();
  alert("Game Over. You lost:(");
  
  // Set clueHoldTime time back to its original value
  clueHoldTime = 1000;
  
}




// logic for checking each guess
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // is guess correct?  
  // check if the button number corresponds to the correct
  // elelement in the pattern set
  if (pattern[guessCounter] == btn) {
      
        // if yes, is turn over?
        // check if buttons in the given sequence (e.g., length 5) 
        // were pressed correctly
        
        if (guessCounter == progress) {
          
          // if yes, is this the last turn? 
          // check if the sequence has reached length = 8
          if (progress == pattern.length - 1) {
            winGame();
          }
          
          // increment progress (expand the sequence to guess by 1) 
          // play next clue sequence
          else {
            progress += 1;
            playClueSequence();
          }
        }
    
        // increment guessCounter, continue playing clues
        else {guessCounter += 1;}
        
      }
  
  // if a mistake is made
  else{
        
    // decrease the number of mistakes left
    strikes -= 1;
    showAttempts();
    console.log("Available strikes: " + strikes)
    
    // check if there are any strikes left
    // if none, end the game
    if(strikes == 0){loseGame();}
     
  }
      
}


/// counter instructions ///
// 1. start after each sequence is played
// 2. stop when the user entered his responses and
//    it is time to show the next sequence
// 3. reset when the game is won/lost
// 4. show countdown on the webpage


