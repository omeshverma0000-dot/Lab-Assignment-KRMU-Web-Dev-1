// Prompt Quizzer – A Quiz Game
// Created by: Omesh Verma (Enrollment No: 251730331)

const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Which language runs in the browser? (JavaScript/Python/C++)", answer: "javascript" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "What keyword is used to declare a variable in JavaScript?", answer: "let" },
    { question: "Which company developed JavaScript? (Netscape/Google/Microsoft)", answer: "netscape" }
];

function runQuiz() {
    let score = 0;

    // loop through all questions
    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        // if user presses cancel
        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }

        // normalize input
        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === quizQuestions[i].answer) {
            alert("Correct! ");
            score++;
        } else {
            alert("Wrong! Correct answer is: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz complete! Your final score is: " + score + "/" + quizQuestions.length);
}

// Run the quiz
runQuiz();
