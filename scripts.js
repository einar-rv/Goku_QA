function checkAnswer(button) {
    if (button.classList.contains('correct')) {
        alert("¡Correcto!");
        // Aquí puedes agregar la lógica para cargar la siguiente pregunta
    } else {
        alert("Incorrecto, intenta de nuevo.");
    }
}
