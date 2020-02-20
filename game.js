var counter = 3; //number to count down from
var startButton = document.getElementById("startButton"); //grabbing start button for use with countdown timer
var maxMissedKey;
var maxReachBottom;
var element = document.getElementById("test-letter");
var gameHeight = 650 - 90; //play area (in pixels) height minus letter-container height
// var steps = 30;
// var fallingSpeed = gameHeight / 5;

var letterPool = GenerateLetters(numberOfLetters);
var letters = [];

function GenerateLetters(count)
{
  let arr = [];
  let letter;

  for (let i = count; i > 0; i--)
  {
    letter = document.createElement("div");
    letter.id = "letter-" + i;
    arr.push(letter);
  }
  return arr;
}

letters.push(letterPool[0]);
letters[0].innerHTML = "A";

//hide the "start" button when clicked
startButton.addEventListener("click", () => 
{
  startButton.className += " start-button-hide";
  startButton.parentNode.appendChild(countDown);
});

//create + initialize an element for the 3, 2, 1 countdown
var countDown = document.createElement("div");
countDown.textContent = counter;
countDown.setAttribute("class", "countdown");

//countdown loop + hide element when complete
var myTimer = window.setInterval(() =>
{
  StartCountDown();
  if (counter < 0) 
  {
    clearInterval(myTimer);
    countDown.className += " countdown-hide";
    StartGame();
  }
}, 1000);

function StartCountDown() 
{
  countDown.textContent = counter;
  counter -= 1;
}

function StartGame() 
{
  console.log("start game!");
  RunLetterGen();
}

function RunLetterGen()
{
  while (letterPool.length > 0)
  {
    var genTimer = window.setInterval(() =>
    {
      ////make letters generate and start falling
    }, 1000);
  }
}

// function TrackLetterPosition (element){
//     var newTimer = window.setInterval(() => {
//         MoveDown(element);
//     }, 1000);
//     console.log("TrackLetterPosition function complete");
// };
//make an interval timer thing that tracks how far/long the element has traveled using fall distance/speed ratio
//once it goes too far - make it disappear + add to the counter for misses
//also - if the correct key is hit, exit + add a counter for good

// function MoveDown(element) 
// {
//   console.log("Inside MoveDown function");
//   var elementStyle = window.getComputedStyle(element);
//   var topValue = elementStyle.getPropertyValue("top").replace("px", "");
//   element.style.top = Number(topValue) + fallingSpeed + "px";
// }
