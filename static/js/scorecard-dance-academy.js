// Questions data
const questions = [/* KEEP YOUR EXISTING QUESTIONS ARRAY EXACTLY AS IS */];

// Results data
const results = { /* KEEP YOUR EXISTING RESULTS OBJECT EXACTLY AS IS */ };

// State
let currentQuestion = 0;
let scores = { digital: 0, brand: 0, acquisition: 0, readiness: 0 };
let answers = [];

// Start
function startScorecard() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('questions').style.display = 'block';
    showQuestion(0);
}

function showQuestion(index) {
    const container = document.getElementById('question-container');
    const q = questions[index];

    let optionsHtml = q.options.map(function(opt, i) {
        return `<button class="option-btn" onclick="selectOption(${index}, ${i})">${opt.text}</button>`;
    }).join('');

    container.innerHTML = `
        <p class="question-number">Question ${index + 1} of ${questions.length}</p>
        <h2 class="question-text">${q.question}</h2>
        <div class="options">${optionsHtml}</div>
    `;

    const progress = (index / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function selectOption(questionIndex, optionIndex) {
    const option = questions[questionIndex].options[optionIndex];

    answers[questionIndex] = {
        question: questions[questionIndex].question,
        answer: option.text
    };

    if (option.scores) {
        for (let key in option.scores) {
            scores[key] = (scores[key] || 0) + option.scores[key];
        }
    }

    if (questionIndex < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showEmailCapture();
    }
}

function calculateResult() {
    let lowest = 'digital';
    let lowestScore = scores.digital;

    for (let key in scores) {
        if (scores[key] < lowestScore) {
            lowestScore = scores[key];
            lowest = key;
        }
    }

    return lowest;
}

function showEmailCapture() {
    document.getElementById('questions').style.display = 'none';
    document.getElementById('email-capture').style.display = 'block';
    document.getElementById('progress').style.width = '100%';

    const resultType = calculateResult();
    const result = results[resultType];

    // Scores
    document.getElementById('result-type').value = resultType;
    document.getElementById('score-digital').value = scores.digital;
    document.getElementById('score-brand').value = scores.brand;
    document.getElementById('score-acquisition').value = scores.acquisition;
    document.getElementById('score-readiness').value = scores.readiness;

    const totalScore =
        scores.digital +
        scores.brand +
        scores.acquisition +
        scores.readiness;

    document.getElementById('score-total').value = totalScore;

    // Full result content
    document.getElementById('result-title-field').value = result.title;
    document.getElementById('result-subtitle-field').value = result.subtitle;
    document.getElementById('result-description-field').value = result.description;
    document.getElementById('result-phase-field').value = result.phase;
}

function showResult() {
    document.getElementById('email-capture').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    const resultType = document.getElementById('result-type').value;
    const result = results[resultType];

    document.getElementById('result-card').innerHTML = `
        <p class="result-label">Your Growth Audit Result</p>
        <h2 class="result-title">${result.title}</h2>
        <p class="result-subtitle">${result.subtitle}</p>
        <p class="result-description">${result.description}</p>
        <div class="result-phase"><strong>Recommended Start:</strong> ${result.phase}</div>
        <div class="result-cta">
            <a href="${result.link}" class="btn btn-primary">${result.cta}</a>
            <a href="/" class="btn btn-secondary">Back to home</a>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('email-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        }).then(showResult)
          .catch(showResult);
    });
});
