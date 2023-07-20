var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var btnEl = document.getElementById('btn-start');

const options = {
    word1: 'Pizza',
    word2: 'Corndog',
    word3: 'Maze'
};

btnEl.addEventListener('click', function () {
    timeLeft--;
    countdown();
   });

   


function countdown() {
    var timeLeft = 10;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;
  
      if(timeLeft === 0) {
        clearInterval(timeInterval);
        displayMessage();
        timerEl.textContent = '';
      } 
    },1000);
  }

  countdown()