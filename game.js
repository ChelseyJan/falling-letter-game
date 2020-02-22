var counter = 3;
var startButton = document.getElementById("startButton");
var maxMissedKey;
var maxReachBottom;
var element = document.getElementById("test-letter");
var gameHeight = 650 - 90; //play area (in pixels) height minus letter-container height
var numberOfLetters = 16;

var letterPool = GenerateLetters(numberOfLetters);
var activeLetters = [];

function GenerateLetters(count)
{
  let arr = [];
  let myVar = document.getElementById("letterContainer");
  for (let i = 0; i < count; i++)
  {
    arr.push(  {
      text: "",
      timeout: 5,
      visibility: true,
      correctKeyStrike: false,
      element
    });
    arr[i].element = document.createElement("div");
    arr[i].element.id = "letter-" + i;
    myVar.appendChild(arr[i].element);
  }
  return arr;
}

startButton.addEventListener("click", () => 
{
  startButton.className += " start-button-hide";
  startButton.parentNode.appendChild(countDown);
});

var countDown = document.createElement("div");
countDown.textContent = counter;
countDown.setAttribute("class", "countdown");

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
