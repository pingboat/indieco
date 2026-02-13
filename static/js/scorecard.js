// Questions data
const questions = [
    {
        id: 1,
        question: "What stage is your business at right now?",
        options: [
            { text: "Idea stage", scores: { clarity: 0 } },
            { text: "Prototype or MVP", scores: { clarity: 1 } },
            { text: "Live with some customers", scores: { clarity: 2, gtm: 1 } },
            { text: "Stable revenue", scores: { clarity: 2, gtm: 2, investor: 1 } }
        ]
    },
    {
        id: 2,
        question: "How many co-founders are on your team?",
        options: [
            { text: "Just me", scores: {} },
            { text: "2", scores: {} },
            { text: "3 or more", scores: {} }
        ]
    },
    {
        id: 3,
        question: "Can you pitch your business in 20 seconds — clearly and confidently?",
        options: [
            { text: "Yes, I nail it every time", scores: { clarity: 2, positioning: 2 } },
            { text: "Sort of, but I ramble", scores: { clarity: 1, positioning: 1 } },
            { text: "Not really, still figuring it out", scores: { clarity: 0, positioning: 0 } }
        ]
    },
    {
        id: 4,
        question: "How many ideas or directions are you actively pursuing right now?",
        options: [
            { text: "One clear focus", scores: { clarity: 2 } },
            { text: "Two or three related bets", scores: { clarity: 1 } },
            { text: "Too many to count", scores: { clarity: 0 } }
        ]
    },
    {
        id: 5,
        question: "Do you have a clear 90-day priority?",
        options: [
            { text: "Yes, I know exactly what to focus on", scores: { clarity: 2 } },
            { text: "Sort of, but I get distracted", scores: { clarity: 1 } },
            { text: "No, every week feels different", scores: { clarity: 0 } }
        ]
    },
    {
        id: 6,
        question: "Do you have a branding kit (logo, colors, messaging) you're proud of?",
        options: [
            { text: "Yes, it's solid", scores: { positioning: 2 } },
            { text: "Partial, needs work", scores: { positioning: 1 } },
            { text: "No, it's a mess or doesn't exist", scores: { positioning: 0 } }
        ]
    },
    {
        id: 7,
        question: "If I asked your last 5 customers why they chose you, would their answers match?",
        options: [
            { text: "Yes, same reason every time", scores: { positioning: 2 } },
            { text: "Mostly, with some variation", scores: { positioning: 1 } },
            { text: "No idea — haven't asked", scores: { positioning: 0 } }
        ]
    },
    {
        id: 8,
        question: "How different is your offering from competitors?",
        options: [
            { text: "Very — we own a unique space", scores: { positioning: 2 } },
            { text: "Somewhat — we have a few edges", scores: { positioning: 1 } },
            { text: "Not much — we compete on price or hustle", scores: { positioning: 0 } }
        ]
    },
    {
        id: 9,
        question: "How would you describe your customer acquisition right now?",
        options: [
            { text: "Predictable — I know what works", scores: { gtm: 2 } },
            { text: "Sporadic — some things work sometimes", scores: { gtm: 1 } },
            { text: "Random — mostly luck and referrals", scores: { gtm: 0 } }
        ]
    },
    {
        id: 10,
        question: "Do you have these assets ready: website, social profiles, pitch deck?",
        options: [
            { text: "All three, polished", scores: { gtm: 2, investor: 2 } },
            { text: "One or two, decent", scores: { gtm: 1, investor: 1 } },
            { text: "None or very rough", scores: { gtm: 0, investor: 0 } }
        ]
    },
    {
        id: 11,
        question: "Are you looking to raise external funding in the next 6 months?",
        options: [
            { text: "Yes, actively", scores: { investor: 0 } },
            { text: "Maybe, exploring", scores: { investor: 1 } },
            { text: "No, not right now", scores: { investor: 2 } }
        ]
    },
    {
        id: 12,
        question: "If an investor asked for your deck tomorrow, what would you send?",
        options: [
            { text: "A polished deck — ready to go", scores: { investor: 2 } },
            { text: "A rough draft — needs work", scores: { investor: 1 } },
            { text: "Nothing — I'd start from scratch", scores: { investor: 0 } }
        ]
    },
    {
        id: 13,
        question: "What is the highest ambition for your company?",
        options: [
            { text: "Build a lifestyle business", scores: {} },
            { text: "Build and scale to exit", scores: {} },
            { text: "Build a generational company", scores: {} }
        ]
    },
    {
        id: 14,
        question: "How urgent is this for you?",
        options: [
            { text: "Very urgent — I need to move now", scores: {} },
            { text: "Moderate — want progress in 3–6 months", scores: {} },
            { text: "Not urgent — just exploring", scores: {} }
        ]
    },
    {
        id: 15,
        question: "What's your single biggest challenge right now?",
        options: [
            { text: "Knowing what to focus on", scores: { clarity: -3 } },
            { text: "Articulating what makes us different", scores: { positioning: -3 } },
            { text: "Getting more customers", scores: { gtm: -3 } },
            { text: "Raising capital", scores: { investor: -3 } }
        ]
    }
];

// Results data
const results = {
    clarity: {
    title: "You need Founder Clarity",
    subtitle: "Too many directions. Not enough focus.",
    description: "You're juggling ideas, opportunities, and possibilities — but without a clear 90-day priority, you'll stay scattered. Before you worry about marketing or fundraising, you need one path forward.",
    cta: "Book a discovery call",
    link: "https://cal.id/leon/discovery-call",
    service: "Founder Clarity"
    },
    positioning: {
        title: "You need Brand Positioning",
        subtitle: "You know what you do. Others don't.",
        description: "Your product exists, but you can't articulate why it matters — or why you're different. Without a clear story, you'll keep competing on price and hustle instead of value.",
        cta: "Get positioned",
        link: "https://shop.indieco.in/l/brand-system-template",
        service: "Brand Positioning"
    },
    gtm: {
        title: "You need a GTM Blueprint",
        subtitle: "You have something. Now you need customers.",
        description: "Your offering is clear, but traction is inconsistent. You need a repeatable playbook for getting customers — not just random tactics and hope.",
        cta: "Get traction",
        link: "https://shop.indieco.in/l/gtm-blueprint-template",
        service: "GTM Blueprint"
    },
    investor: {
        title: "You need Investor Readiness",
        subtitle: "You're ready to raise. Your pitch isn't.",
        description: "You have traction and a story — but your pitch, deck, and investor narrative aren't there yet. Before you talk to investors, get ready to convince them.",
        cta: "Get ready",
        link: "https://cal.id/leon/discovery-call",
        service: "Investor Readiness"
    }
};

// State
let currentQuestion = 0;
let scores = { clarity: 0, positioning: 0, gtm: 0, investor: 0 };
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
    // Find lowest scoring area (that's their gap)
    let lowest = 'clarity';
    let lowestScore = scores.clarity;
    
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
        '<p class="result-label">Your result</p>' +
        '<h2 class="result-title">' + result.title + '</h2>' +
        '<p class="result-subtitle">' + result.subtitle + '</p>' +
        '<p class="result-description">' + result.description + '</p>' +
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
