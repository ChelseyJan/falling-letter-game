//Game Settings
var gameHeight = 650 - 90; //play area (in pixels) height minus letter-container height
var numberOfLetters = 16;

var counter = 3;
var startButton = document.getElementById("startButton");
var maxMissedKey;
var maxReachBottom;
var element = document.getElementById("test-letter");
var countDown = document.createElement("div");
var letterPool = GenerateLetters(numberOfLetters);
var activeLetters = [];

const scoreBoard1 = new Scoreboard();

function Scoreboard() {
  this.hits = 0;
  this.misses = 0;
  this.failures = 0;
  this.addHit = function() {
    this.hits += 1;
    this.test();
  };
  this.addMiss = function() {
    this.misses += 1;
    this.test();
  };
  this.addFailure = function() {
    this.failures += 1;
    this.test();
  };
  this.clearScoreboard = function() {
    this.hits = 0;
    this.misses = 0;
    this.failures = 0;
    this.test();
  };
  this.test = function() { //temp for testing
    console.log(`hits = ${this.hits} misses = ${this.misses} failures = ${this.failures}`);
  };
}

window.addEventListener("keydown", function(event) {
  HandleKeydown(event);
});

function HandleKeydown(event) {
  let test = event.keyCode;
  console.log("inside HandleKeydown");
  console.log(`The key you pressed is ${test}`);
  //let result = activeLetters.indexOf(event.keyCode);
  //Check if pressed key is in the letterpool
  //If key is not in letter pool do this.
  //If key is in letter pool do that.
}

function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function GenerateLetters(count)
{
  let arr = [];
  let myVar = document.getElementById("letterContainer");
  for (let i = 0; i < count; i++)
  {
    arr.push({
      text: "",
      timeout: 5,
      visibility: true,
      correctKeyStrike: false,
      characterCode: "",
      element
    });

    let characterCode = RandomNumber(65,90);
    arr[i].element = document.createElement("div");
    arr[i].element.id = "letter-" + i;
    arr[i].element.textContent = String.fromCharCode(characterCode);
    arr[i].characterCode = characterCode;
    RandomColor(arr[i].element);
    myVar.appendChild(arr[i].element);
  }
  return arr;
}

startButton.addEventListener("click", () => 
{
  startButton.className += " start-button-hide";
  startButton.parentNode.appendChild(countDown);
  CountDown();
});

function CountDown()
{
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
}

function StartCountDown() 
{
  countDown.textContent = counter;
  counter -= 1;
}

function StartGame() 
{
  console.log("start game!");
  GameLoop(100);
}

function RandomColor(element) 
{
  var colorArray = [
    "#ee8572",
    "#f0b182",
    "#f9d189"
  ];

  var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  element.style.color = randomColor;
}

function GameLoop(gameLength)
{
  count = 0;
  let game = window.setInterval(() =>
  {
    if (letterPool.length)
    {
      activeLetters.push(letterPool.shift());
      // console.log(letterPool.length);

      let letter = activeLetters[activeLetters.length - 1];
      letter.element.className += " letter-hide";
      letter.timeout = window.setTimeout(() =>
      {
        letter.element.className = "";
        RandomColor(letter.element);
        letter.element.textContent= String.fromCharCode(RandomNumber(65,90));
        letterPool.push(activeLetters.shift());
      }, 5000);
      // activeLetters.timeout();  
    }
    count++;
    if (count >= gameLength)
    {

      window.clearInterval(game);
    }
  }, 1000);
}
