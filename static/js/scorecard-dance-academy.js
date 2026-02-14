// Questions data
const questions = [
    {
        id: 1,
        question: "When someone searches 'best dance academy in [your city]' on Google, where do you appear?",
        options: [
            { text: "Top 3 results with a map pin (Google Map Pack)", scores: { digital: 2 } },
            { text: "Somewhere on page 1 but below the map", scores: { digital: 1 } },
            { text: "Page 2 or beyond / Don't know", scores: { digital: 0 } }
        ]
    },
    {
        id: 2,
        question: "Do you have a professional website that showcases your classes, instructors, and student achievements?",
        options: [
            { text: "Yes, and it's mobile-friendly with clear enrollment CTAs", scores: { digital: 2 } },
            { text: "Yes, but it's outdated or hard to navigate", scores: { digital: 1 } },
            { text: "No, we rely on social media or don't have one", scores: { digital: 0 } }
        ]
    },
    {
        id: 3,
        question: "How many Google reviews does your academy currently have?",
        options: [
            { text: "25+ reviews with 4.5+ star rating", scores: { digital: 2 } },
            { text: "10-24 reviews", scores: { digital: 1 } },
            { text: "Less than 10 reviews or none", scores: { digital: 0 } }
        ]
    },
    {
        id: 4,
        question: "How often do you post high-quality content (Reels, performances, student spotlights) on Instagram or YouTube?",
        options: [
            { text: "4+ times per week consistently", scores: { digital: 2 } },
            { text: "1-3 times per week, inconsistently", scores: { digital: 1 } },
            { text: "Rarely or never", scores: { digital: 0 } }
        ]
    },
    {
        id: 5,
        question: "If a parent asks 'Why should I choose your academy over others?', can every team member give the same compelling answer?",
        options: [
            { text: "Yes, we have a clear unique positioning everyone can articulate", scores: { brand: 2 } },
            { text: "Somewhat, but answers vary", scores: { brand: 1 } },
            { text: "No, we struggle to differentiate beyond 'good teachers'", scores: { brand: 0 } }
        ]
    },
    {
        id: 6,
        question: "Do you have a cohesive visual brand identity (logo, colors, templates) that looks premium and consistent?",
        options: [
            { text: "Yes, professional and consistent everywhere", scores: { brand: 2 } },
            { text: "Partial — some things look good, some don't", scores: { brand: 1 } },
            { text: "No, it's inconsistent or DIY", scores: { brand: 0 } }
        ]
    },
    {
        id: 7,
        question: "How do current students and parents perceive your academy compared to competitors?",
        options: [
            { text: "Premium/aspirational — the best in the city", scores: { brand: 2 } },
            { text: "Good quality but not necessarily the top choice", scores: { brand: 1 } },
            { text: "We're not sure / similar to others", scores: { brand: 0 } }
        ]
    },
    {
        id: 8,
        question: "How many new student enrollments do you get per month on average?",
        options: [
            { text: "15+ new students per month", scores: { acquisition: 2 } },
            { text: "5-14 new students per month", scores: { acquisition: 1 } },
            { text: "Less than 5 new students per month", scores: { acquisition: 0 } }
        ]
    },
    {
        id: 9,
        question: "What percentage of your new students come from referrals (existing students recommending you)?",
        options: [
            { text: "50% or more come from referrals", scores: { acquisition: 2 } },
            { text: "20-49% come from referrals", scores: { acquisition: 1 } },
            { text: "Less than 20% / we don't track this", scores: { acquisition: 0 } }
        ]
    },
    {
        id: 10,
        question: "Do you have a systematic way to convert interested parents/students (trial classes, follow-up system)?",
        options: [
            { text: "Yes, we have a clear process and follow-up system", scores: { acquisition: 2 } },
            { text: "Partially — we do trial classes but follow-up is inconsistent", scores: { acquisition: 1 } },
            { text: "No, we mostly rely on walk-ins and word of mouth", scores: { acquisition: 0 } }
        ]
    },
    {
        id: 11,
        question: "Have you ever run paid advertising (Facebook/Instagram ads, Google ads) to attract students?",
        options: [
            { text: "Yes, currently running or have run successfully", scores: { acquisition: 2 } },
            { text: "Tried once or twice, didn't work well", scores: { acquisition: 1 } },
            { text: "No, never tried paid ads", scores: { acquisition: 0 } }
        ]
    },
    {
        id: 12,
        question: "Are you planning to introduce new dance forms (like Kathak, Tango, Contemporary) in the next 3-6 months?",
        options: [
            { text: "Yes, and we have instructors/plans ready", scores: { readiness: 2 } },
            { text: "Yes, but still figuring out instructors and launch strategy", scores: { readiness: 1 } },
            { text: "No immediate plans / not applicable", scores: { readiness: 0 } }
        ]
    },
    {
        id: 13,
        question: "How confident are you in your current enrollment process, student onboarding, and retention systems?",
        options: [
            { text: "Very confident — we have smooth systems and high retention", scores: { readiness: 2 } },
            { text: "Somewhat confident — we manage but could be better", scores: { readiness: 1 } },
            { text: "Not confident — it's chaotic and students sometimes drop off", scores: { readiness: 0 } }
        ]
    },
    {
        id: 14,
        question: "What's your realistic budget for a comprehensive 8-12 week growth initiative?",
        options: [
            { text: "₹2-3 lakhs+", scores: { readiness: 2 } },
            { text: "₹1-2 lakhs", scores: { readiness: 1 } },
            { text: "Less than ₹1 lakh / Need to explore", scores: { readiness: 0 } }
        ]
    },
    {
        id: 15,
        question: "How urgent is growth for you right now?",
        options: [
            { text: "Very urgent — we need to move within the next 30 days", scores: { readiness: 2 } },
            { text: "Moderately urgent — want progress in 2-3 months", scores: { readiness: 1 } },
            { text: "Exploratory — just understanding options", scores: { readiness: 0 } }
        ]
    }
];

// Results data
const results = {
    digital: {
        title: "You need a Digital Foundation",
        subtitle: "You're invisible when parents are searching for you.",
        description: "Your academy might be excellent, but if parents can't find you on Google or your website doesn't convert visitors into inquiries, you're losing students to competitors with weaker programs but stronger digital presence. Priority: Website, Google Business Profile, and Reviews.",
        cta: "Get your digital roadmap",
        link: "https://cal.id/leon/discovery-call",
        phase: "Phase 1: Digital Foundation (Week 1-3)"
    },
    brand: {
        title: "You need Brand Positioning",
        subtitle: "You're good, but parents don't know why you're different.",
        description: "You have talented instructors and quality programs, but you're competing on 'good teachers' rather than unique positioning. Without a clear brand story and premium visual identity, you'll always struggle to command premium fees and attract the best students. Priority: Brand identity, positioning, and storytelling.",
        cta: "Build your brand authority",
        link: "https://cal.id/leon/discovery-call",
        phase: "Phase 2: Brand Building (Week 2-5)"
    },
    acquisition: {
        title: "You need a Student Acquisition Engine",
        subtitle: "You have the foundation, but enrollment is inconsistent.",
        description: "Your digital presence and brand are decent, but new student enrollment is unpredictable. You need systematic referral programs, experience events, and paid advertising strategies that create predictable growth. Priority: Referral system, trial class funnel, and Meta advertising.",
        cta: "Build your enrollment engine",
        link: "https://cal.id/leon/discovery-call",
        phase: "Phase 3: Student Acquisition (Week 3-8)"
    },
    readiness: {
        title: "You need Growth Operations",
        subtitle: "You want to grow, but systems aren't ready to scale.",
        description: "You have the marketing foundation, but your internal operations — enrollment process, student onboarding, new offering launches, retention systems — need strengthening before you can sustainably double enrollment. Priority: Systems, new offerings launch, operational excellence.",
        cta: "Get operationally ready",
        link: "https://cal.id/leon/discovery-call",
        phase: "Phase 4: Growth Readiness (Ongoing)"
    }
};

// State
let currentQuestion = 0;
let scores = { digital: 0, brand: 0, acquisition: 0, readiness: 0 };
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
        return '<button class="option-btn" onclick="selectOption(' + index + ', ' + i + ')">' + opt.text + '</button>';
    }).join('');
    
    container.innerHTML = 
        '<p class="question-number">Question ' + (index + 1) + ' of ' + questions.length + '</p>' +
        '<h2 class="question-text">' + q.question + '</h2>' +
        '<div class="options">' + optionsHtml + '</div>';
    
    // Update progress
    const progress = ((index) / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function selectOption(questionIndex, optionIndex) {
    const option = questions[questionIndex].options[optionIndex];
    
    // Store answer
    answers[questionIndex] = {
        question: questions[questionIndex].question,
        answer: option.text
    };
    
    // Add scores
    if (option.scores) {
        for (let key in option.scores) {
            scores[key] = (scores[key] || 0) + option.scores[key];
        }
    }
    
    // Next question or show email capture
    if (questionIndex < questions.length - 1) {
        currentQuestion = questionIndex + 1;
        showQuestion(currentQuestion);
    } else {
        showEmailCapture();
    }
}

function showEmailCapture() {
    document.getElementById('questions').style.display = 'none';
    document.getElementById('email-capture').style.display = 'block';
    
    // Update progress to 100%
    document.getElementById('progress').style.width = '100%';
    
    // Calculate result
    const resultType = calculateResult();
    document.getElementById('result-type').value = resultType;
    document.getElementById('result-score').value = JSON.stringify(scores);
}

function calculateResult() {
    // Find lowest scoring area (that's their biggest gap)
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

function showResult() {
    document.getElementById('email-capture').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    
    const resultType = document.getElementById('result-type').value;
    const result = results[resultType];
    
    document.getElementById('result-card').innerHTML = 
        '<p class="result-label">Your Growth Audit Result</p>' +
        '<h2 class="result-title">' + result.title + '</h2>' +
        '<p class="result-subtitle">' + result.subtitle + '</p>' +
        '<p class="result-description">' + result.description + '</p>' +
        '<div class="result-phase"><strong>Recommended Start:</strong> ' + result.phase + '</div>' +
        '<div class="result-cta">' +
            '<a href="' + result.link + '" class="btn btn-primary">' + result.cta + '</a>' +
            '<a href="/" class="btn btn-secondary">Back to home</a>' +
        '</div>';
}

// Handle form submission when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('email-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Submit to Netlify
        const formData = new FormData(this);
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        }).then(function() {
            showResult();
        }).catch(function() {
            // Show result anyway if form fails
            showResult();
        });
    });
});
