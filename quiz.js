const questions = [
    { question: "¿Quién pintó la Mona Lisa?", options: ["Da Vinci", "Picasso", "Van Gogh", "Rembrandt"], correct: 0 },
    { question: "¿Cuál es el capital de Francia?", options: ["Roma", "Madrid", "Berlín", "París"], correct: 3 },
    { question: "¿Cuál es el planeta más grande?", options: ["Júpiter", "Saturno", "Marte", "Venus"], correct: 0 },
    // Agrega más preguntas aquí...
];

let score = 0;
let currentQuestion = 0;

function loadQuestion() {
    if (currentQuestion < 10) {
        const q = questions[Math.floor(Math.random() * questions.length)];
        document.getElementById("question").textContent = q.question;
        const buttons = document.querySelectorAll(".answer-btn");
        q.options.forEach((option, index) => {
            buttons[index].textContent = option;
            buttons[index].onclick = function() { checkAnswer(index, q.correct) };
        });
    } else {
        showResult();
    }
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").textContent = `Tu puntaje es: ${score}/10`;
    const message = score >= 7 ? "¡Felicidades, lo hiciste excelente!" : "Intenta de nuevo, ¡puedes hacerlo mejor!";
    document.getElementById("message").textContent = message;
}

loadQuestion();
