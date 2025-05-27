window.onload = function() {
let wordsArray = [
  ["A","P","P","L","E"],
  ["C", "A", "T", "S"],
  ["H","O","U","S","E"],
  ["M", "O", "U", "S", "E"],
  ["J", "A", "V", "A", "S", "C", "R", "I", "P", "T"],
  ["P", "O", "T", "A", "T", "O"],
  ["U", "N", "D", "E", "F", "I", "N", "E", "D"],
  ["S", "P", "A", "G", "H", "E", "T"],
  ["W", "A", "Y"],
  ["P", "A", "N", "D", "A"],
  ["J", "A", "P", "A", "N"],

  ["B", "L", "U", "E", "W", "H", "A", "L", "E"],
  ["S", "P", "I", "D", "E", "R", "M", "A", "N"],
  ["S", "P", "A", "C", "E"],
  ["M", "E", "M", "O", "R", "Y"],
  ["O", "N", "L", "I", "N", "E"],
  ["B", "E", "E"],
  ["S", "C", "I", "S", "S", "O", "R", "S"],
  ["S", "A", "T", "U", "R", "N"],
  ["H", "A", "R", "R", "Y", "P", "O", "T", "T", "E", "R"],
  ["I", "N", "S", "T", "A", "G", "R", "A", "M"],
  ["C", "H", "A", "T", "G", "P", "T"],
  ["A", "L", "E", "X", "A"],
  ["G", "I", "R", "A", "F", "F", "E"],
  ["M", "A", "R", "I", "O"],
  ["F", "O", "R", "T", "N", "I", "T", "E"],

  ["M", "A", "R", "S"],
  ["P", "A", "C", "I", "F", "I", "C"],
  ["C", "A", "M", "E", "R", "A"],
  ["A", "N", "D", "R", "O", "I", "D"],
  ["P", "I", "K", "A", "C", "H", "U"],
  ["P", "A", "R", "R", "O", "T"],
  ["H", "I", "S", "S"],
  ["H", "O", "G", "W", "A", "R", "T", "S"],
  ["T", "H", "O", "R"],
  ["B", "R", "O", "W", "S", "E", "R"],
  ["G", "H", "O", "S", "T", "B", "U", "S", "T", "E", "R", "S"],
  ["B", "U", "C", "K", "I", "N", "G", "H", "A", "M"],
  ["Y", "E", "N"],
  ["S", "H", "R", "E", "K"],
  ["L", "I", "B", "R", "A", "R", "Y"],

  ["T", "H", "A", "N", "O", "S"],
  ["C", "H", "E", "E", "T", "A", "H"],
  ["B", "A", "T"],
  ["A", "P", "P", "L", "E"],
  ["I", "C", "E", "C", "R", "E", "A", "M"],
  ["D", "O", "G"],
  ["G", "A", "N", "D", "A", "L", "F"],
  ["A", "I", "R", "P", "L", "A", "N", "E"],
  ["K", "R", "Y", "P", "T", "O", "N"],
  ["T", "I", "K", "T", "O", "K"],
  ["H", "2", "O"],
  ["C", "L", "O", "S", "E", "T"],
  ["B", "A", "L", "L"],
  ["S", "H", "E", "R", "L", "O", "C", "K"],
  ["E", "A", "R", "T", "H"],

  ["B", "R", "O", "C", "C", "O", "L", "I"],
  ["C", "H", "A", "M", "E", "L", "E", "O", "N"],
  ["F", "R", "O", "D", "O"],
  ["W", "A", "T", "C", "H"],
  ["B", "E", "D"],
  ["I", "C", "E"],
  ["B", "R", "O", "O", "M"],
  ["E", "I", "G", "H", "T"],
  ["E", "G", "Y", "P", "T"],
  ["K", "E", "Y"],
  ["T", "O", "N", "Y", "S", "T", "A", "R", "K"],
  ["S", "N", "A", "P", "C", "H", "A", "T"],
  ["T", "I", "G", "E", "R"],
  ["C", "O", "M", "P", "A", "S", "S"],
  ["B", "A", "N", "A", "N", "A"],

  ["J", "U", "P", "I", "T", "E", "R"],
  ["B", "A", "T", "M", "A", "N"],
  ["D", "O", "L", "L", "A", "R"],
  ["B", "U", "R", "G", "E", "R"],
  ["Y", "E", "L", "L", "O", "W"],
  ["K", "A", "N", "G", "A", "R", "O", "O"],
  ["S", "C", "I", "S", "S", "O", "R", "S"],
  ["L", "I", "O", "N"],
  ["W", "I", "N", "T", "E", "R"],
  ["M", "A", "R", "Y", "P", "O", "P", "P", "I", "N", "S"],
  ["C", "A", "P", "T", "A", "I", "N", "A", "M", "E", "R", "I", "C", "A"],
  ["S", "H", "E", "E", "P"],
  ["N", "E", "W", "Y", "O", "R", "K"],
  ["N", "I", "G", "H", "T"],
  ["S", "T", "A", "M", "P"]
];
let categoryArray = [
  ["A red or green fruit..."],
  ["The internet and Youtube would not be the same without them"],
  ["A place where people live...."],
  ["Touchpad ain't got nothing on me"],
  ["Love it or hate it, frontend devs need it"],
  ["This hangman game is..."],
  ["I'm declared, but don't have a value"],
  ["Somebody toucha my..."],
  ["You do not know de..."],
  ["A black and white bear..."],
  ["Country known for sushi..."],

  ["Largest mammal on Earth"],
  ["This superhero climbs walls"],
  ["Where astronauts go"],
  ["Your brain's USB drive"],
  ["The opposite of offline"],
  ["It buzzes and makes honey"],
  ["Not paper, not rock"],
  ["Planet known for its rings"],
  ["The wizard who lived"],
  ["Where you watch reels all day"],
  ["AI model developed by OpenAI"],
  ["The smart voice assistant from Amazon"],
  ["World's tallest animal"],
  ["A red plumber who jumps on turtles"],
  ["Famous battle royale game"],

  ["The red planet in our solar system"],
  ["The biggest ocean on Earth"],
  ["Device used to take selfies"],
  ["Google’s mobile operating system"],
  ["Yellow electric Pokémon"],
  ["Bird known for mimicking human speech"],
  ["The sound a snake makes"],
  ["The wizarding school Harry Potter attended"],
  ["The superhero with a hammer"],
  ["Used to browse the internet"],
  ["A ghost-hunting team in NYC"],
  ["Where the Queen of England lives"],
  ["Currency used in Japan"],
  ["Famous green ogre"],
  ["A place where books live"],

  ["The villain with purple skin who snapped his fingers"],
  ["The fastest animal on land"],
  ["The flying mammal"],
  ["The biggest tech company by market cap"],
  ["Cold dessert made with milk"],
  ["Man’s best friend"],
  ["The wizard who says 'You shall not pass!'"],
  ["The machine that lets you fly in the sky"],
  ["The home planet of Superman"],
  ["The app where people make short videos"],
  ["The chemical symbol for water"],
  ["Where you keep your clothes"],
  ["Round object used in football"],
  ["Famous detective with a pipe"],
  ["The planet we live on"],

  ["Green vegetable disliked by many kids"],
  ["A reptile that changes color"],
  ["The magical ring bearer from Middle-earth"],
  ["Device that tells time"],
  ["The place where you sleep"],
  ["Frozen water"],
  ["A flying vehicle used by witches"],
  ["The number after seven"],
  ["Country famous for pyramids"],
  ["Thing you use to unlock a door"],
  ["He built the Iron Man suit"],
  ["Famous app for sharing images temporarily"],
  ["The big cat with stripes"],
  ["It tells you directions"],
  ["Yellow fruit loved by monkeys"],

  ["The planet with a big red spot"],
  ["The dark knight of Gotham"],
  ["The currency used in the USA"],
  ["Fast food with cheese and buns"],
  ["The color of the sun"],
  ["Animal that hops and has a pouch"],
  ["Tool used to cut paper"],
  ["The king of the jungle"],
  ["Cold season of the year"],
  ["Magical Disney nanny with umbrella"],
  ["The hero who uses a shield"],
  ["Animal that gives us wool"],
  ["The city that never sleeps"],
  ["The opposite of day"],
  ["Used to send a letter"]
];

  let newGame = document.getElementById("newGame");
  newGame.onclick = startNewGame;

  class Hangman {
    constructor() {
      //game state and initial values
      this.random = Math.floor(Math.random() * wordsArray.length);
      this.wordToGuess = wordsArray[this.random];
      this.category = categoryArray[this.random];
      this.placeholderArray = Array(this.wordToGuess.length).fill("_");
      this.guessed = [];
      this.lives = 6;
    }
    setupNewWord() {
      //setsup new game input/buttons and creates initial placeholder containing only "_" and puts it on the board. placeholder has as many characters as the word
      let guessWrapper = document.getElementById("guessWrapper");
      let placeholderP = document.createElement("p");
      let category = document.getElementById("categoryName");
      category.innerHTML = this.category;

      placeholderP.setAttribute("id", "placeholderP");
      placeholderP.innerHTML = this.placeholderArray.join("");
      guessWrapper.appendChild(placeholderP);

      let userLetter = document.getElementById("userLetter");
      userLetter.onkeypress = this.handleKeyPress.bind(this);

      let guessButton = document.getElementById("guessButton");
      guessButton.onclick = this.handleClick.bind(this);
    }
    handleClick() {
      //main game logic, triggers input check, win or loose, updates lives, shows/hides various elements on click
      let userLetterInput = document.getElementById("userLetter");
      let userLetter = userLetterInput.value.toUpperCase();
      let placeholderP = document.getElementById("placeholderP");
      let warningText = document.getElementById("warningText");
      let alreadyGuessed = document.querySelector("#alreadyGuessed span");
      let wrongLetters = document.querySelector("#wrongLetters span");
      let leftLives = document.querySelector("#leftLives span");

      if (!/[a-zA-Z]/.test(userLetter)) {
        //check that the user types in letters
        unhideElements("hidden", warningText);
        warningText.innerHTML = "Please enter a letter from A-Z"; //and shows warning if not
      } else {
        hideElements("hidden", warningText);

        if (
          this.wordToGuess.indexOf(userLetter) > -1 &&
          this.guessed.indexOf(userLetter) == -1
        ) {
          //check if letter is a match, and first guess
          checkGuess(this.wordToGuess, userLetter);
          hideElements("hidden", warningText);
        } else if (
          this.wordToGuess.indexOf(userLetter) == -1 &&
          this.guessed.indexOf(userLetter) == -1
        ) {
          //check if not match, and first wrong
          hideElements("hidden", warningText);
          unhideElements("hidden", wrongLetters.parentNode);
          wrongLetters.innerHTML += userLetter;
          this.lives--;
          hangerDraw(this.lives);
          hideLives(this.lives);
        } else {
          //if not first use of this letter
          unhideElements("hidden", warningText);
          warningText.innerHTML = "";
          warningText.innerHTML += "Already typed " + userLetter;
        }
        this.guessed.indexOf(userLetter) == -1
          ? this.guessed.push(userLetter)
          : null; //for all guesses, if its the first time using the letter, save it

        if (Array.from(placeholderP.innerHTML).indexOf("_") == -1) {
          //trigger game win or loose
          gameOver(true); //when no more '_' exist in placeholder, you win
        } else if (this.lives == 0) {
          //when lives are gone, you loose
          gameOver();
        }
      }
      userLetterInput.value = "";
    }
    handleKeyPress(e) {
      //if enter is pressed trigger click on button
      var guessButton = document.getElementById("guessButton");
      if (e.keyCode === 13) {
        guessButton.click();
      }
    }
  }

  function checkGuess(wordToGuess, userLetter) {
    //handles check logic, and replaces letters in placeholder when a match is found
    let placeholderP = document.getElementById("placeholderP");
    let placeholderArray = Array.from(placeholderP.innerHTML);
    placeholderArray = placeholderArray.map((el, i) => {
      //check if letter exists in the guess word, and if yes,replace it in the placeholder and display it
      if (wordToGuess[i] == userLetter) {
        return (el = userLetter);
      } else {
        return el;
      }
    });

    placeholderP.innerHTML = placeholderArray.join("");
  }

  function gameOver(win) {
    // shows win/game over message
    let winMessage = document.getElementById("statusMessage");
    let btnWrapper = document.querySelector(".button-wrapper");
    hideElements("hidden", btnWrapper);
    if (win) {
      winMessage.innerHTML = "You Win";
      winMessage.style.color = "green";
    } else {
      winMessage.innerHTML = "Game Over";
      winMessage.style.color = "rgb(239, 83, 80)";
    }
  }

  function hangerDraw(num) {
    //helper function triggers show hanger drawing
    let show = document.getElementById(`show${num}`);
    unhideElements("hidden", show);
  }

  function hideLives(num) {
    //helper function triggers hides lives
    let life = document.getElementById(`life${num}`);
    hideElements("hiddenLife", life);
  }

  function hideElements(myclass, ...els) {
    //helper func that hides
    for (let el of els) {
      el.classList.add(myclass);
    }
  }

  function unhideElements(myclass, ...els) {
    //helper func that unhides
    for (let el of els) {
      el.classList.remove(myclass);
    }
  }

  function startNewGame() {
    let btnWrapper = document.querySelector(".button-wrapper");
    let winMessage = document.getElementById("statusMessage");
    let wrongLetters = document.querySelector("#wrongLetters span");
    let warningText = document.querySelector("#warningText");
    let hiddenHangman = Array.from(document.querySelectorAll("svg .bodyPart"));
    let hiddenLives = Array.from(document.querySelectorAll(".lives"));

    for (let bodyPart of hiddenHangman) {
      hideElements("hidden", bodyPart);
    }

    for (let life of hiddenLives) {
      unhideElements("hiddenLife", life);
    }

    wrongLetters.innerHTML = "";
    unhideElements("hidden", btnWrapper);
    hideElements("hidden", wrongLetters.parentNode, warningText);
    winMessage.innerHTML = "Vanilla JavaScript Hangman Game";
    winMessage.style.color = "black";
    let oldP = document.getElementById("placeholderP");
    if (oldP.parentNode) {
      oldP.parentNode.removeChild(oldP);
    }

    let startGame = new Hangman();
    startGame.setupNewWord();
  }

  let startGame = new Hangman(); //initiates first game on windo load
  startGame.setupNewWord();
};