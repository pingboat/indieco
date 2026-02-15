// Countdown Timer
function updateCountdown() {
    const deadline = new Date('2026-03-31T23:59:59');
    const now = new Date();
    const timeLeft = deadline - now;
    const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
    
    const countdownHTML = `
        <div class="countdown-content">
            <span class="countdown-icon">⏰</span>
            <span class="countdown-text">Only <strong>${daysLeft} days</strong> left to apply</span>
        </div>
    `;
    
    const banner = document.getElementById('countdown-banner');
    const bannerSmall = document.getElementById('countdown-banner-small');
    
    if (banner) banner.innerHTML = countdownHTML;
    if (bannerSmall) bannerSmall.innerHTML = countdownHTML;
}

// Update countdown on page load
document.addEventListener('DOMContentLoaded', updateCountdown);

// Questions data
const questions = [
    {
        id: 1,
        question: "Is your business located in any of the North-Eastern states?",
        options: [
            { text: "Yes - Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, or Tripura", scores: { geographic: 2 } },
            { text: "No - Located outside NER", scores: { geographic: 0 } }
        ]
    },
    {
        id: 2,
        question: "Which zone is your business located in? (Zone A: Less developed, Zone B: Most developed)",
        options: [
            { text: "Zone A (Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, Tripura)", scores: { geographic: 2 } },
            { text: "Zone B (Assam)", scores: { geographic: 1 } },
            { text: "Don't know / Not applicable", scores: { geographic: 0 } }
        ]
    },
    {
        id: 3,
        question: "What type of business do you operate?",
        options: [
            { text: "Manufacturing unit", scores: { business: 2 } },
            { text: "Service sector business", scores: { business: 1 } },
            { text: "Other / Not sure", scores: { business: 0 } }
        ]
    },
    {
        id: 4,
        question: "What is your planned/actual capital investment in the business?",
        options: [
            { text: "₹1 crore or more (for manufacturing)", scores: { business: 2 } },
            { text: "₹50 lakhs - ₹1 crore (for services)", scores: { business: 2 } },
            { text: "Less than ₹50 lakhs", scores: { business: 0 } }
        ]
    },
    {
        id: 5,
        question: "Is this a new industrial unit or expansion of existing unit?",
        options: [
            { text: "New industrial unit", scores: { business: 2 } },
            { text: "Expansion of existing unit", scores: { business: 2 } },
            { text: "Neither / Don't know", scores: { business: 0 } }
        ]
    },
    {
        id: 6,
        question: "Does your business fall under any excluded categories (tobacco, alcohol, harmful industries)?",
        options: [
            { text: "No - My business is NOT in the negative list", scores: { business: 2 } },
            { text: "Yes - My business is in excluded categories", scores: { business: 0 } },
            { text: "Not sure", scores: { business: 1 } }
        ]
    },
    {
        id: 7,
        question: "Do you have a Detailed Project Report (DPR) prepared?",
        options: [
            { text: "Yes, DPR is ready", scores: { readiness: 2 } },
            { text: "Work in progress", scores: { readiness: 1 } },
            { text: "No, not started", scores: { readiness: 0 } }
        ]
    },
    {
        id: 8,
        question: "What is your land/building status for the project?",
        options: [
            { text: "Owned and ready", scores: { readiness: 2 } },
            { text: "Lease/agreement in place", scores: { readiness: 2 } },
            { text: "Identified but not secured", scores: { readiness: 1 } },
            { text: "Not yet identified", scores: { readiness: 0 } }
        ]
    },
    {
        id: 9,
        question: "What is your funding arrangement status?",
        options: [
            { text: "Funding secured (loan sanctioned/equity arranged)", scores: { readiness: 2 } },
            { text: "Application in process", scores: { readiness: 1 } },
            { text: "Not yet applied for funding", scores: { readiness: 0 } }
        ]
    },
    {
        id: 10,
        question: "Can you start commercial production/operations within 4 years from project approval?",
        options: [
            { text: "Yes, definitely within 4 years", scores: { readiness: 2 } },
            { text: "Likely, but need to verify", scores: { readiness: 1 } },
            { text: "Not sure / More than 4 years", scores: { readiness: 0 } }
        ]
    },
    {
        id: 11,
        question: "Are you aware of the specific UNNATI incentives you may qualify for?",
        options: [
            { text: "Yes, I know which incentives apply to me", scores: { readiness: 1 } },
            { text: "Partially aware", scores: { readiness: 0 } },
            { text: "No, need guidance", scores: { readiness: 0 } }
        ]
    },
    {
        id: 12,
        question: "Have you registered on the UNNATI portal (unnati.dpiit.gov.in)?",
        options: [
            { text: "Yes, already registered", scores: { readiness: 1 } },
            { text: "No, not yet registered", scores: { readiness: 0 } }
        ]
    },
    {
        id: 13,
        question: "Do you need professional help with the UNNATI application process?",
        options: [
            { text: "Yes, I need expert assistance", scores: {} },
            { text: "Maybe, want to understand first", scores: {} },
            { text: "No, I can handle it myself", scores: {} }
        ]
    },
    {
        id: 14,
        question: "How soon can you submit the UNNATI application?",
        options: [
            { text: "Within 2 weeks", scores: { readiness: 2 } },
            { text: "Within 1 month", scores: { readiness: 1 } },
            { text: "1-2 months", scores: { readiness: 0 } },
            { text: "Not sure", scores: { readiness: 0 } }
        ]
    },
    {
        id: 15,
        question: "What's your budget for professional assistance with UNNATI application?",
        options: [
            { text: "₹1 lakh - ₹1.5 lakh", scores: {} },
            { text: "₹50,000 - ₹1,lakh", scores: {} },
            { text: "Less than ₹50,000", scores: {} },
            { text: "Need to discuss", scores: {} }
        ]
    }
];

// Results data
const results = {
    eligible: {
        title: "You Likely Qualify for UNNATI!",
        subtitle: "Potential incentive: ₹2-7.5 crore",
        description: "Based on your responses, you appear to meet the core eligibility criteria for the UNNATI scheme. You could be eligible for Capital Investment Incentive, Interest Subvention, and Manufacturing/Services Linked Incentives worth crores.",
        cta: "Get expert help now",
        link: "https://cal.id/leon/discovery-call",
        urgency: "Only 54 days left to apply! Book a call to maximize your benefits."
    },
    maybeEligible: {
        title: "You May Qualify with Preparation",
        subtitle: "Potential incentive: ₹50 lakhs - ₹3 crore",
        description: "You meet some UNNATI criteria but need to strengthen your application. With proper documentation and project readiness, you could qualify for significant government incentives. Professional guidance can help you bridge the gaps.",
        cta: "Discuss eligibility",
        link: "https://cal.id/leon/discovery-call",
        urgency: "Time is running out. Let's evaluate your chances."
    },
    notEligible: {
        title: "UNNATI May Not Be Right For You",
        subtitle: "But other schemes might be",
        description: "Based on your responses, you may not meet the core UNNATI eligibility criteria (NER location, investment size, or business type). However, there may be other central or state schemes that suit your business better.",
        cta: "Explore alternatives",
        link: "https://cal.id/leon/discovery-call",
        urgency: "Let's find the right scheme for you."
    }
};

// State
let currentQuestion = 0;
let scores = { geographic: 0, business: 0, readiness: 0 };
let answers = [];

// Functions
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
    // Geographic eligibility is essential
    if (scores.geographic < 2) {
        return 'notEligible';
    }
    
    // Business type and investment size check
    if (scores.business < 4) {
        return 'notEligible';
    }
    
    // Check readiness level
    const totalScore = scores.geographic + scores.business + scores.readiness;
    
    if (totalScore >= 18 && scores.readiness >= 10) {
        return 'eligible';
    } else if (totalScore >= 12) {
        return 'maybeEligible';
    } else {
        return 'notEligible';
    }
}

function showEmailCapture() {
    document.getElementById('questions').style.display = 'none';
    document.getElementById('email-capture').style.display = 'block';
    document.getElementById('progress').style.width = '100%';

    const resultType = calculateResult();
    const result = results[resultType];

    document.getElementById('result-type').value = resultType;
    document.getElementById('score-geographic').value = scores.geographic;
    document.getElementById('score-business').value = scores.business;
    document.getElementById('score-readiness').value = scores.readiness;
    
    const totalScore = scores.geographic + scores.business + scores.readiness;
    document.getElementById('score-total').value = totalScore;
    
    document.getElementById('result-title-field').value = result.title;
    document.getElementById('result-incentive-field').value = result.subtitle;
}

function showResult() {
    document.getElementById('email-capture').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    const resultType = document.getElementById('result-type').value;
    const result = results[resultType];
    
    // Get current countdown
    const deadline = new Date('2026-03-31T23:59:59');
    const now = new Date();
    const daysLeft = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));

    document.getElementById('result-card').innerHTML = `
        <div class="urgency-tag">⏰ ${daysLeft} days until deadline</div>
        <p class="result-label">Your UNNATI Eligibility Result</p>
        <h2 class="result-title">${result.title}</h2>
        <p class="result-subtitle">${result.subtitle}</p>
        <p class="result-description">${result.description}</p>
        <div class="result-urgency">${result.urgency}</div>
        <div class="result-cta">
            <a href="${result.link}" class="btn btn-primary">${result.cta}</a>
            <a href="/" class="btn btn-secondary">Back to home</a>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            }).then(showResult)
              .catch(showResult);
        });
    }
});
