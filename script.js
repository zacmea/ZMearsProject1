//-----Global variable declarations:-----
let questionBank = [];
let currentQuestionCounter = 0;
let userAnswer;
let correctAnswer;
//-----Text updating/outputting variables:-----
let qBox = document.getElementById("questionBox");
let aBox = document.getElementById("aOption");
let bBox = document.getElementById("bOption");
let cBox = document.getElementById("cOption");
let dBox = document.getElementById("dOption");
let tbBox = document.getElementById("tidbitBox");
//-----Button variables:-----
let aButton = document.getElementById("aButton");
let bButton = document.getElementById("bButton");
let cButton = document.getElementById("cButton");
let dButton = document.getElementById("dButton");

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
    "The 'solar system' refers only to our star (called 'sun') and the celestial bodies that orbit it (planets, asteroids, etc)."
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

console.log(questionBank);
//-----Gameplay functions-----
function nextQuestion() {
    for (i = 0; i < questionBank.length; i++) {
        qBox.innerHTML = questionBank[i].question;
        aBox.innerText = questionBank[i].ansA;
        bBox.innerText = questionBank[i].ansB;
        cBox.innerText = questionBank[i].ansC;
        dBox.innerText = questionBank[i].ansD;
        tbBox.innerText = questionBank[i].tidbit;
}
        
        aButton.addEventListener("click", userAnswers);
        bButton.addEventListener("click", userAnswers);
        cButton.addEventListener("click", userAnswers);
        dButton.addEventListener("click", userAnswers);
        
        function userAnswers(event) {
            userSelection = event.target;
            console.log(userSelection);
            compareAnswer(userSelection);
        }
        function compareAnswer(userAnswer) {
            if (userSelection == questionBank[i].correctAns) {
                alert("Correct!");
            } else {
                alert("Oops! Wrong");
            }
        }
        //compare user input to correct answer
        //score right or wrong (if/else statments)
        //Tell user right or wrong & display tidbit
    }


nextQuestion();
