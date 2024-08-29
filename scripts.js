const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Londres", "Berlín", "Madrid", "París"],
        correctAnswer: 3,
        image: "paris.jpg"
    },
    {
        question: "¿Cuál es el planeta más cercano al sol?",
        options: ["Venus", "Tierra", "Mercurio", "Marte"],
        correctAnswer: 2,
        image: "mercurio.jpg"
    },
    {
        question: "¿Qué elemento químico tiene el símbolo O?",
        options: ["Oro", "Oxígeno", "Osmio", "Oganesón"],
        correctAnswer: 1,
        image: "oxigeno.jpg"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('question-image').src = currentQuestion.image;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.innerText = currentQuestion.options[index];
    });
    document.querySelector('.quiz-container').classList.add('active');
    document.querySelector('.result-container').classList.remove('active');
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            alert("¡Has completado el cuestionario!");
            currentQuestionIndex = 0;
            loadQuestion();
        }
    } else {
        document.querySelector('.quiz-container').classList.remove('active');
        document.querySelector('.result-container').classList.add('active');
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    loadQuestion();
}

window.onload = loadQuestion;
