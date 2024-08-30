console.log("Script "); // Verifica si el script se carga correctamente

const questions = [
    {
        question: "¿Qué son las pruebas de caja negra?",
        options: [
            "Pruebas que examinan las funcionalidades del software sin conocer su diseño interno, enfocándose en entradas y salidas.",
            "Pruebas que examinan el código fuente línea por línea.",
            "Pruebas que solo se realizan después de la implementación.",
            "Pruebas que solo verifican la interfaz gráfica del usuario."
        ],
        correct: 0, // Índice de la respuesta correcta
        image: "/GOKU_QA/img/imagenes/bien 1.jpg"
    },
    {
        question: "¿Qué ventajas ofrecen las pruebas de caja negra?",
        options: [
            "No requieren conocer el código fuente, permitiendo enfocarse en requisitos y comportamiento del software.",
            "Permiten evaluar la eficiencia del código fuente.",
            "Requieren menos tiempo y recursos que otros tipos de pruebas.",
            "Son las más adecuadas para probar la seguridad del software."
        ],
        correct: 0,
        image: "/GOKU_QA/img/imagenes/bien 1-1.jpg"
    },
    {
        question: "¿Qué son las pruebas de caja blanca?",
        options: [
            "Pruebas que evalúan el software con conocimiento detallado del código y su estructura interna.",
            "Pruebas que solo se centran en la interfaz del usuario.",
            "Pruebas que no requieren conocimiento técnico avanzado.",
            "Pruebas que se llevan a cabo sin acceso al código fuente."
        ],
        correct: 0,
        image: "/GOKU_QA/img/imagenes/bien 2.jpg"
    },
    {
        question: "¿Cómo se llevan a cabo las pruebas de caja blanca?",
        options: [
            "Mediante la creación de casos de prueba basados en el análisis del código y la estructura interna.",
            "Con pruebas aleatorias de la funcionalidad del software.",
            "Verificando únicamente las salidas del sistema.",
            "Usando solo herramientas automatizadas sin intervención manual."
        ],
        correct: 0,
        image: "/GOKU_QA/img/imagenes/bien 2-1.jpg"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let previousImage = "/GOKU_QA/img/imagenes/normal.jpg"; // Imagen por defecto al comenzar
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
