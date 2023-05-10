const questions = [
	{
		question: 'What is the capital of Australia?',
		answer: 'canberra'
	},
	{
		question: 'What is the largest mammal?',
		answer: 'blue whale'
	}
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const resultsElement = document.getElementById('results');
const submitButton = document.querySelector('button');

function displayCurrentQuestion() {
	const currentQuestion = questions[currentQuestionIndex];
	questionElement.innerHTML = currentQuestion.question;
	answerElement.value = '';
}

function submitAnswer() {
	const currentQuestion = questions[currentQuestionIndex];
	const userAnswer = answerElement.value.toLowerCase();

	if (userAnswer === currentQuestion.answer) {
		score++;
		resultsElement.innerHTML = '<span style="color: blue; text-transform: uppercase;">Correct !</span>';
	} else {
		resultsElement.innerHTML = `<span style="color: red; text-transform: uppercase;">Incorrect !</span><br>The correct answer is <span style="color: dodgerblue; text-transform: capitalize;">${currentQuestion.answer}.</span>`;
	}

	currentQuestionIndex++;

	if (currentQuestionIndex === questions.length) {
		questionElement.innerHTML = '';
		answerElement.style.display = 'none';
		submitButton.style.display = 'none';
		if (userAnswer === currentQuestion.answer) {
			resultsElement.innerHTML += `<br><br>Your final score is ${score} / ${questions.length} !`;
		} else {
			resultsElement.innerHTML = `<span style="color: red; text-transform: uppercase;">Incorrect !</span><br>The correct answer is <span style="color: dodgerblue; text-transform: capitalize;">${currentQuestion.answer}.</span><br><br>Your final score is ${score} / ${questions.length} !`;
		}
	} else {
		displayCurrentQuestion();
	}
}

displayCurrentQuestion();