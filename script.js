//-----Creating QUESTION BANK via class + objects-----
let questionBank = [];
class TriviaQuestion {
    constructor(question, ansA, ansB, ansC, ansD, correctAns, tidbit) {
        this.question = question;
        this.ansA = ansA;
        this.ansB = ansB;
        this.ansC = ansC;
        this.ansD = ansD;
        this.correctAns = correctAns;
        this.tidbit = tidbit;
    }
}
const question1 = new TriviaQuestion(
    "How many stars are in the solar system?",
    "1",
    "1000",
    "100,000",
    "10,000,000",
    "1",
    "Just one!  The 'solar system' refers only to our star (called 'sun') and the celestial bodies that orbit it (planets, asteroids, etc)."
);
questionBank.push(question1);
const question2 = new TriviaQuestion(
    "Which of the following actors does NOT have a degree in STEM?",
    "Natalie Portman",
    "Mayim Bialik",
    "Eva Longoria",
    "Tahj Mowry",
    "Tahj Mowry",
    "Tahj Mowry's college education was in advertising."
);
questionBank.push(question2);
const question3 = new TriviaQuestion(
    "'Graceland' is the name of the estate once owned by which country music star?",
    "Dolly Parton",
    "Johnny Cash",
    "Elvis Presley",
    "Reba McEntire",
    "Elvis Presley",
    "Elvis Presley's Memphis, Tennessee mansion & estate have been converted into a museum and receive over 1600 visitors a day, on average."
);
questionBank.push(question3);
const question4 = new TriviaQuestion(
    "The Nipehe village, site of the oldest known human habitation in North America, is located in what US state?",
    "Missouri",
    "Illinois",
    "Idaho",
    "New Mexico",
    "Idaho",
    "Researchers have dated animal bones & charcoal at the Nez Perce site in western Idaho to over 16,000 years ago!"
);
questionBank.push(question4);
const question5 = new TriviaQuestion(
    "Which of the following activities is NOT part of the modern pentathlon?",
    "swimming",
    "cycling",
    "pistol shooting",
    "fencing",
    "cycling",
    "The modern pentathlon consists of fencing, freestyle swimming, horseback show jumping, pistol shooting, and cross-country running."
);
questionBank.push(question5);
const question6 = new TriviaQuestion(
    "Which of the following is considered to be the largest religious structure in the world?",
    "Masjid al-Haram (Great Mosque of Mecca)",
    "Taj Mahal",
    "Ankor Wat",
    "St. Peter's Basilica",
    "Ankor Wat",
    "Ankor Wat, originally constructed as a Hindu temple to Vishnu, was constructed during the 1100's in what is now Cambodia."
);
questionBank.push(question6);

//-----Global variable declarations:-----
let currentQuestionCounter = 0;
let userSelection;
let correctCounter = 0;
let livesRemaining = 3;
let gameRunning = true;
let i = 0;
let answerButtonsAll;
//-----Text updating/outputting field variables:-----
let qBox = document.getElementById("questionText");
let aBox = document.getElementById("aOption");
let bBox = document.getElementById("bOption");
let cBox = document.getElementById("cOption");
let dBox = document.getElementById("dOption");
let tbBox = document.getElementById("tidbitBox");
let correctBox = document.getElementById("questionsCorrectText");
let livesBox = document.getElementById("livesRemainingText");
let feedbackBox = document.getElementById("feedbackBox");
//-----Button variables:-----
let aButton = document.getElementById("aButton");
let bButton = document.getElementById("bButton");
let cButton = document.getElementById("cButton");
let dButton = document.getElementById("dButton");
let nextButton = document.getElementById("next");
let exitButton = document.getElementById("exit");
let restartButton = document.getElementById("restart");

//-----GAMEPLAY FUNCTIONS-----
function playGame() {
    // while (gameRunning) {
    function updateFields() {
        correctBox.innerText = correctCounter;
        livesBox.innerText = livesRemaining;
        feedbackBox.style.border = "none";
        tbBox.style.border = "none";
        feedbackBox.innerHTML = "<br>";
        feedbackBox.style.backgroundColor = "transparent";
        tbBox.innerText = "";
        qBox.innerHTML = questionBank[i].question;
        aBox.innerText = questionBank[i].ansA;
        bBox.innerText = questionBank[i].ansB;
        cBox.innerText = questionBank[i].ansC;
        dBox.innerText = questionBank[i].ansD;
        nextButton.classList.remove("inactive");

        answerButtonsAll = document.getElementsByClassName("answerButton");
        for (let button of answerButtonsAll) {
            button.style.backgroundColor = "beige";
            button.style.color = "black";
            button.children[0].style.color = "rgb(151, 2, 2)";
            let list = button.classList;
            list.remove("inactive");
            button.disabled = false;
        }
        if (correctCounter == 5 || livesRemaining == 0) {
            exitScreen();
        }
    }
    updateFields();

//-----Answer button event listeners-----
    answerButtonsAll = document.getElementsByClassName("answerButton");
    for (let button of answerButtonsAll) {
        button.addEventListener("mousedown", function(event) {
            event.currentTarget.classList.add("clicked")});
        button.addEventListener("mouseup", function(event) {
            event.currentTarget.classList.remove("clicked")});
        button.addEventListener("click", selectAndCompare)
    }
    exitButton.addEventListener("click", exitScreen);
    restartButton.addEventListener("click", restartGame);

    
    function selectAndCompare(event) {
        userSelection = event.currentTarget;
        event.currentTarget.style.backgroundColor = "blue";
        event.currentTarget.style.color = "white";
        event.currentTarget.children[0].style.color = "white";

        disableOtherButtons(event.currentTarget);
        function disableOtherButtons(clickedButton) {
            answerButtonsAll = document.getElementsByClassName("answerButton");
            for (let button of answerButtonsAll) {
                if (button !== clickedButton) {
                    button.disabled = true;
                    // let list = button.classList;
                    // list.add("inactive");
                }
            }
        }
        tbBox.innerText = questionBank[i].tidbit;
        tbBox.style.border = "thick dotted orange";
        if (userSelection.children[0].innerText == questionBank[i].correctAns) {
            feedbackBox.innerText = "¡Respuesta correcta!";
            
            feedbackBox.style.backgroundColor = "rgb(34,206,131)";
            correctCounter++;
            nextButton.addEventListener("click", advanceQuestion);
        } else {
            feedbackBox.innerText = "Respuesta equivocada :-(";
            feedbackBox.style.backgroundColor = "rgb(234,84,36)";
            // tbBox.innerText = questionBank[i].tidbit;
            // tbBox.style.border = "thick dotted orange";
            livesRemaining--;
            nextButton.addEventListener("click", advanceQuestion);
        }
    }

    function advanceQuestion() {
        i++;
        updateFields();
    }

    function restartGame() {
        correctCounter = 0;
        livesRemaining = 3;
        gameRunning = true;
        i = 0;
        updateFields();
    }

    function exitScreen() {
        feedbackBox.innerText = "¡Gracias por jugar! Thanks for playing!";
        qBox.innerText = "During your time with us, you achieved the following:";
        tbBox.innerHTML = `${correctCounter} questions correct, with <br>${livesRemaining} lives remaining`;
        tbBox.style.display = "flex";
        tbBox.style.justifyContent = "center";
        nextButton.classList.add("inactive");

        for (let button of answerButtonsAll) {
            let list = button.classList;
            list.add("inactive");
        }
    }
    // function userSelects(event) {
    //     // userSelection = event.currentTarget;
    //     console.log(userSelection);
    //     // gameRunning = userSelection;
    //     console.log(event.currentTarget);
    //     compareAnswer(userSelection);
    // }
}

playGame();
