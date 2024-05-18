const questions = [
    {
        question: "Which tag is used to define a hyperlink in HTML?",
        answers: [
            { text: "a tag", correct: true},
            { text: "link tag", correct: false},
            { text: "href tag", correct: false},
            { text: "hyper tag", correct: false},
        ]
    },
    {
        question: "How can you center an element horizontally in CSS?",
        answers: [
            { text: "text-align: center;", correct: false},
            { text: "margin: auto;", correct: true},
            { text: "align-items: center;", correct: false},
            { text: "position: center;", correct: false},
        ]
    },
    {
        question: "What will the following code output - console.log(typeof [])?",
        answers: [
            { text: "array", correct: false},
            { text: "object", correct: true},
            { text: "array[]", correct: false},
            { text: "undefined", correct: false},
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Transfer Markup Language", correct: false},
            { text: "Hyper Text Markup Language", correct: true},
            { text: "Home Tool Markup Language", correct: false},
            { text: "Hyperlink and Text Markup Language", correct: false},
        ]
    },
    {
        question: "How can you make text italic in CSS",
        answers: [
            { text: "font-style: italic", correct: true},
            { text: "text-style: italic", correct: false},
            { text: "italic: true", correct: false},
            { text: "style: italic", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer_btns");
const nextButton = document.getElementById("next_btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}