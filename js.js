// Array Of Words
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

// Setting Levels

const lvls = {
  Easy: 10,
  Normal: 3,
  Hard: 2,
};

// Catch Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");
let test = document.querySelector(".choose");
let nono = document.querySelector(".nono");
let Repeat = document.querySelector(".Repeat");
////////////////////////////////////////////////////////////////////////////////

document.getElementById("Easy").addEventListener("click", easy);
document.getElementById("Normal").addEventListener("click", normal);
document.getElementById("Hard").addEventListener("click", hard);
Repeat.onclick = () => {
  window.location.reload();
};
lvlNameSpan.innerHTML = "Easy";
secondsSpan.innerHTML = "10";

function easy() {
  lvlNameSpan.innerHTML = "Easy";
  secondsSpan.innerHTML = "10";
}
function normal() {
  lvlNameSpan.innerHTML = "Normal";
  secondsSpan.innerHTML = "3";
}
function hard() {
  lvlNameSpan.innerHTML = "Hard";
  secondsSpan.innerHTML = "2";
}

// Setting Level Name + Seconds + Score

timeLeftSpan.innerHTML = secondsSpan.innerHTML;
scoreTotal.innerHTML = words.length;

// Disable Paste Event
input.onpaste = function () {
  return false;
};

// Start Game
startButton.onclick = function () {
  this.remove();
  input.focus();
  test.remove();
  nono.remove();
  // Generate Word Function
  genWords();
};

function genWords() {
  // Get Random Word From Array
  let randomWord = words[Math.floor(Math.random() * words.length)];
  // Get Word Index
  let wordIndex = words.indexOf(randomWord);
  // Remove WordFrom Array
  words.splice(wordIndex, 1);
  // Show The Random Word
  theWord.innerHTML = randomWord;
  // Empty Upcoming Words
  upcomingWords.innerHTML = " ";
  // Generate Words
  for (let i = 0; i < words.length; i++) {
    // Create Div Element
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upcomingWords.appendChild(div);
  }
  // Call Start Play Function
  startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = secondsSpan.innerHTML;

  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML == 0) {
      // Stop Timer
      clearInterval(start);
      // Compare Words
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // Empty Input Field
        input.value = "";
        // Increase Score
        scoreGot.innerHTML++;
        if (words.length > 0) {
          // Call Generate Word Function
          genWords();
        } else {
          let span = document.createElement("span");
          span.className = "good";
          let spantxt = document.createTextNode("Congratz");
          span.appendChild(spantxt);
          finishMessage.appendChild(span);
          Repeat.classList.add("active");
          // Remove Upcoming Words Box
          upcomingWords.remove();
        }
      } else {
        let span = document.createElement("span");
        span.className = "bad";
        let spanText = document.createTextNode("Game Over");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
        Repeat.classList.add("active");
      }
    }
  }, 1000);
}
