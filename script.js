//-----Global variable declarations:-----
let questionBank = [];
let currentQuestionCounter = 0;
let userAnswer;
let correctCounter = 0;
let livesRemaining = 3;
let gameRunning = true;
let i = 0;

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

//-----Creating tivia question bank via class + objects-----
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



//-----Gameplay functions-----
function playGame() {
    // while (gameRunning) {
    function updateFields() {
        correctBox.innerText = correctCounter;
        livesBox.innerText = livesRemaining;
        feedbackBox.style.border = "none";
        tbBox.style.border = "none";
        feedbackBox.innerText = "";
        tbBox.innerText = ""
        qBox.innerHTML = questionBank[i].question;
        aBox.innerText = questionBank[i].ansA;
        bBox.innerText = questionBank[i].ansB;
        cBox.innerText = questionBank[i].ansC;
        dBox.innerText = questionBank[i].ansD;
        if (correctCounter == 5){
            alert("you win!");
            i=0;
            return;
        }
        if (livesRemaining == 0){
            alert("you lose!");
            i=0
            return;
        }
    }
    updateFields();

    aButton.addEventListener("click", selectAndCompare);
    bButton.addEventListener("click", selectAndCompare);
    cButton.addEventListener("click", selectAndCompare);
    dButton.addEventListener("click", selectAndCompare);
    // exitButton.addEventListener("click", exitScreen);
    // restartButton.addEventListener("click", restartGame);

    // function userSelects(event) {
    //     // userSelection = event.currentTarget;
    //     console.log(userSelection);
    //     // gameRunning = userSelection;
    //     console.log(event.currentTarget);
    //     compareAnswer(userSelection);
    // }
aButton.remo
    
    function selectAndCompare(event) {
        // console.log();
        // console.log(userSelection.children[0]);
        // console.log(questionBank[i].correctAns);
        userSelection = event.currentTarget;
        event.currentTarget.style.backgroundColor = "blue";
        event.currentTarget.style.color = "white";
        if (userSelection.children[0].innerText == questionBank[i].correctAns) {
            feedbackBox.innerText = "¡Respuesta correcta!"
            tbBox.innerText = questionBank[i].tidbit;
            tbBox.style.border = "dotted orange";
            correctCounter++;
            nextButton.addEventListener("click", advanceQuestion);
        } else {
            feedbackBox.innerText = "Respuesta equivocada :-("
            tbBox.innerText = questionBank[i].tidbit;
            tbBox.style.border = "dotted orange";
            livesRemaining--;
            nextButton.addEventListener("click", advanceQuestion);
        }
    }
    function advanceQuestion() {
        i++;
        updateFields();
    }
}

playGame();
