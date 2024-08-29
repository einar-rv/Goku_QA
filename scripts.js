console.log("Script cargado"); // Verifica si el script se carga correctamente

const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Londres", "Berlín", "Madrid", "París"],
        correct: 3, // Índice de la respuesta correcta
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7Jkb_819cPO_SdoXdXMuWFdJO07sWGlUDEdjC8uZuIaW_duc9DCCuYvzmrYYhsJO9Oo&usqp=CAU"
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
        correct: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdJgjnhUaQ4hijerrYNsjsUlBwmmj8aEcsQ&s"
    },
    // Añade más preguntas aquí
];

let currentQuestionIndex = 0;
let score = 0;
let previousImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb9q0u17kPz1P52tALyIte_RMEK_pTn05Knw&s"; // Imagen por defecto al comenzar
let displayedImages = [];

function startQuiz() {
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('result').classList.add('hidden');
    document.getElementById('options-container').innerHTML = '';
    score = 0;
    currentQuestionIndex = 0;
    displayedImages = [previousImage];
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        document.getElementById('question').innerText = questionData.question;
        document.getElementById('question-image').src = displayedImages[displayedImages.length - 1] || previousImage;
        document.getElementById('options-container').innerHTML = '';

        questionData.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option';
            button.innerText = option;
            button.onclick = () => checkAnswer(index);
            document.getElementById('options-container').appendChild(button);
        });
    } else {
        showResult();
    }
}

function checkAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    if (selectedIndex === questionData.correct) {
        score++;
        displayedImages.push(questionData.image);
    } else {
        displayedImages.pop();
    }
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    document.getElementById('question').innerText = "¡Has completado el cuestionario!";
    document.getElementById('question-image').src = displayedImages[displayedImages.length - 1] || previousImage;
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('final-score').innerText = `Tu puntuación: ${score} de ${questions.length}`;
    document.getElementById('final-image').innerText = `Última imagen mostrada: ${displayedImages[displayedImages.length - 1] || previousImage}`;
}
