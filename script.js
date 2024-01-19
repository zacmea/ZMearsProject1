let questionBank = [];

class triviaQuestion {
    constructor(question, ansA, ansB, ansC, ansD, correctAns, explanation){
        this.question = question
        this.ansA = ansA
        this.ansB = ansB
        this.ansC = ansC
        this.ansD = ansD
        this.correctAns = correctAns
        this.explanation = explanation
    }
}
const question1 = new triviaQuestion("How many stars are in the solar system?", "1", "1000", "100,000", "10,000,000", "1", "The 'solar system' refers only to our star (called 'sun') and the celestial bodies that orbit it (planets, asteroids, etc).");
questionBank.push(question1);

const question2 = new triviaQuestion("Which of the following actors does NOT have a degree in STEM?", "Natalie Portman", "Mayim Bialik", "Eva Longoria", "Tahj Mowry", "Tahj Mowry", "Tahj Mowry college education was in advertising.");
questionBank.push(question2);

const question3 = new triviaQuestion("'Graceland' is the name of the estate once owned by which country music star?", "Dolly Parton", "Johnny Cash", "Elvis Presley", "Reba McEntire", "Elvis Presley", "Elvis Presley's Memphis, Tennessee mansion & estate have been converted into a museum and receive over 1600 visitors a day, on average.") 
questionBank.push(question3);

const question4 = new triviaQuestion("The Nipehe village, site of the oldest known human habitation in North America, is located in what US state?", "Missouri", "Illinois", "Idaho", "New Mexico", "Idaho", "Researchers have dated animal bones & charcoal at the Nez Perce sit in western Idaho to over 16,000 years ago!")
questionBank.push(question4);

const question5 = new triviaQuestion("Which of the following activities is NOT part of the modern pentathlon?", "swimming", "cycling", "pistol shooting", "fencing", "cycling", "The modern pentathlon consists of fencing, freestyle swimming, horseback show jumping, pistol shooting, and cross-country running.")
questionBank.push(question5);

const question6 = new triviaQuestion("Which of the following is considered to be the largest religious structure in the world?", "Masjid al-Haram (Great Mosque of Mecca)", "Taj Mahal", "Ankor Wat", "St. Peter's Basilica", "Ankor Wat", "Ankor Wat, originally constructed as a Hindu temple to Vishnu, was constructed during the 1100's.")
questionBank.push(question6);

console.log(questionBank);
