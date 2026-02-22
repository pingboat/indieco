// Non-Profit Organization Readiness Scorecard
// indieco.in

// ========================================
// QUESTIONS DATA
// ========================================

const questions = [
    {
        id: 1,
        dimension: "Mission Clarity",
        question: "How clear and compelling is your organization's mission statement?",
        options: [
            { 
                text: "We have a well-documented mission that everyone understands and can articulate", 
                scores: { mission: 3, overall: 3 } 
            },
            { 
                text: "We have a mission statement, but it needs refinement or better communication", 
                scores: { mission: 2, overall: 2 } 
            },
            { 
                text: "Our mission is unclear or not well understood by our team", 
                scores: { mission: 1, overall: 1 } 
            }
        ]
    },
    {
        id: 2,
        dimension: "Governance",
        question: "How engaged and effective is your board of directors?",
        options: [
            { 
                text: "Our board is highly engaged, meets regularly, and actively contributes beyond attendance", 
                scores: { governance: 3, overall: 3 } 
            },
            { 
                text: "We have a board, but engagement or effectiveness could be stronger", 
                scores: { governance: 2, overall: 2 } 
            },
            { 
                text: "Our board is minimally engaged or we're struggling with board development", 
                scores: { governance: 1, overall: 1 } 
            }
        ]
    },
    {
        id: 3,
        dimension: "Financial Management",
        question: "What's the state of your financial systems and sustainability?",
        options: [
            { 
                text: "We have strong financial systems, 3+ months of reserves, and clear budget tracking", 
                scores: { financial: 3, overall: 3 } 
            },
            { 
                text: "Our finances are managed but we lack reserves or need better systems", 
                scores: { financial: 2, overall: 2 } 
            },
            { 
                text: "We struggle with financial management and operate hand-to-mouth", 
                scores: { financial: 1, overall: 1 } 
            }
        ]
    },
    {
        id: 4,
        dimension: "Fundraising Strategy",
        question: "How developed is your fundraising approach?",
        options: [
            { 
                text: "We have a documented fundraising strategy with diversified revenue streams", 
                scores: { fundraising: 3, overall: 3 } 
            },
            { 
                text: "We fundraise reactively or depend heavily on 1-2 major sources", 
                scores: { fundraising: 2, overall: 2 } 
            },
            { 
                text: "We don't have a clear fundraising strategy or struggle to raise funds", 
                scores: { fundraising: 1, overall: 1 } 
            }
        ]
    },
    {
        id: 5,
        dimension: "Team Capacity",
        question: "How well is your team structured and supported?",
        options: [
            { 
                text: "Right people in right roles, clear job descriptions, regular professional development", 
                scores: { team: 3, overall: 3 } 
            },
            { 
                text: "We have team members but need better role clarity or development support", 
                scores: { team: 2, overall: 2 } 
            },
            { 
                text: "Significant gaps in team capacity or high turnover", 
                scores: { team: 1, overall: 1 } 
            }
        ]
    },
    {
        id: 6,
        dimension: "Program Impact",
        question: "How do you measure and demonstrate your program effectiveness?",
        options: [
            { 
                text: "We collect meaningful data, evaluate regularly, and can clearly demonstrate impact", 
                scores: { overall: 3 } 
            },
            { 
                text: "We track some metrics but need stronger evaluation systems", 
                scores: { overall: 2 } 
            },
            { 
                text: "We struggle to measure or articulate our impact", 
                scores: { overall: 1 } 
            }
        ]
    },
    {
        id: 7,
        dimension: "Strategic Planning",
        question: "Do you have a current strategic plan guiding your work?",
        options: [
            { 
                text: "Yes, a current strategic plan (within 3 years) with clear goals and regular review", 
                scores: { overall: 3 } 
            },
            { 
                text: "We have a plan but it's outdated or not actively used", 
                scores: { overall: 2 } 
            },
            { 
                text: "No strategic plan or we operate year-to-year", 
                scores: { overall: 1 } 
            }
        ]
    },
    {
        id: 8,
        dimension: "Communications",
        question: "How effectively do you communicate your mission and impact?",
        options: [
            { 
                text: "Strong brand presence, active website/social media, regular stakeholder communication", 
                scores: { overall: 3 } 
            },
            { 
                text: "We communicate but need more consistency or better storytelling", 
                scores: { overall: 2 } 
            },
            { 
                text: "Communications is a significant weakness", 
                scores: { overall: 1 } 
            }
        ]
    },
    {
        id: 9,
        dimension: "Partnerships",
        question: "How actively do you collaborate with other organizations?",
        options: [
            { 
                text: "Strong partnerships that amplify our impact and resources", 
                scores: { overall: 3 } 
            },
            { 
                text: "Some partnerships but could be more strategic", 
                scores: { overall: 2 } 
            },
            { 
                text: "Mostly working in isolation", 
                scores: { overall: 1 } 
            }
        ]
    },
    {
        id: 10,
        dimension: "Systems & Operations",
        question: "How well-developed are your operational systems?",
        options: [
            { 
                text: "Strong systems for operations, data management, and technology integration", 
                scores: { overall: 3 } 
            },
            { 
                text: "Basic systems in place but need improvement or better integration", 
                scores: { overall: 2 } 
            },
            { 
                text: "Minimal systems, mostly manual processes", 
                scores: { overall: 1 } 
            }
        ]
    },
    {
        id: 11,
        dimension: "Resource Mobilization",
        question: "Beyond fundraising, how well do you mobilize resources (volunteers, in-kind, expertise)?",
        options: [
            { 
                text: "Excellent at attracting and leveraging diverse resources", 
                scores: { fundraising: 2, overall: 2 } 
            },
            { 
                text: "Some success but could be more strategic", 
                scores: { fundraising: 1, overall: 1 } 
            },
            { 
                text: "Primarily focused on cash, missing other opportunities", 
                scores: { fundraising: 0, overall: 1 } 
            }
        ]
    },
    {
        id: 12,
        dimension: "Leadership Development",
        question: "Do you have succession planning and leadership development in place?",
        options: [
            { 
                text: "Clear succession plans and active leadership development", 
                scores: { governance: 2, overall: 2 } 
            },
            { 
                text: "Some planning but not formalized", 
                scores: { governance: 1, overall: 1 } 
            },
            { 
                text: "No succession planning, significant risk if key people leave", 
                scores: { governance: 0, overall: 1 } 
            }
        ]
    },
    {
        id: 13,
        dimension: "Community Engagement",
        question: "How involved are beneficiaries and community members in your work?",
        options: [
            { 
                text: "Deep engagement in program design, feedback, and governance", 
                scores: { overall: 3 } 
            },
            { 
                text: "Some engagement but could be more meaningful", 
                scores: { overall: 2 } 
            },
            { 
                text: "Beneficiaries are recipients, not partners", 
                scores: { overall: 1 } 
            }
        ]
    },
    {
        id: 14,
        dimension: "Financial Sustainability",
        question: "What's your outlook on long-term financial sustainability?",
        options: [
            { 
                text: "Strong pipeline, diversified funding, clear path to sustainability", 
                scores: { financial: 2, overall: 3 } 
            },
            { 
                text: "Sustainable now but uncertain beyond 12 months", 
                scores: { financial: 1, overall: 2 } 
            },
            { 
                text: "Significant financial uncertainty", 
                scores: { financial: 0, overall: 1 } 
            }
        ]
    },
    {
        id: 15,
        dimension: "Growth Readiness",
        question: "Is your organization ready to scale programs or expand geographically?",
        options: [
            { 
                text: "Yes, we have the systems, team, and funding to scale", 
                scores: { mission: 2, team: 2, overall: 3 } 
            },
            { 
                text: "Not yet, but we're building toward it", 
                scores: { mission: 1, team: 1, overall: 2 } 
            },
            { 
                text: "No, we need to stabilize current operations first", 
                scores: { mission: 0, team: 0, overall: 1 } 
            }
        ]
    }
];

// ========================================
// RESULTS CONFIGURATION
// ========================================

const results = {
    excellence: {
        title: "Organizational Excellence",
        subtitle: "Your non-profit demonstrates strong fundamentals and readiness for strategic growth",
        badge: "🌟",
        badgeColor: "#10b981",
        description: `
            <p><strong>Congratulations!</strong> Your organization shows strong organizational health across most dimensions. You have solid systems, engaged leadership, and clear strategic direction.</p>
            
            <p>Organizations at this level are well-positioned for:</p>
            <ul>
                <li>Scaling successful programs</li>
                <li>Launching major fundraising campaigns</li>
                <li>Expanding to new geographies or populations</li>
                <li>Pursuing strategic partnerships or mergers</li>
            </ul>
            
            <p>Your primary focus should be on <strong>maintaining momentum</strong> while exploring next-level growth opportunities.</p>
        `,
        nextSteps: [
            "Review your lowest-scoring dimensions for fine-tuning opportunities",
            "Consider strategic planning to identify your next growth phase",
            "Explore major donor cultivation or institutional funding",
            "Document best practices to support scale and knowledge transfer"
        ]
    },
    
    strong: {
        title: "Strong Foundation",
        subtitle: "Solid organizational fundamentals with clear opportunities for targeted growth",
        badge: "💪",
        badgeColor: "#f59e0b",
        description: `
            <p>Your organization has <strong>solid fundamentals</strong> in place. You're effectively managing current operations and have clarity on your mission and impact.</p>
            
            <p>Your scores indicate specific areas where targeted capacity building will unlock significant growth. This is common for organizations in transition—moving from startup mode to sustainable operations, or from stable operations to strategic growth.</p>
            
            <p>Organizations at this level typically benefit from:</p>
            <ul>
                <li>Focused capacity building in 2-3 priority areas</li>
                <li>Board development and governance strengthening</li>
                <li>Strategic fundraising support</li>
                <li>Systems and process documentation</li>
            </ul>
        `,
        nextSteps: [
            "Identify your 2-3 lowest-scoring dimensions as priority development areas",
            "Create specific 90-day action plans for each priority area",
            "Consider bringing in external expertise (consultants, coaches, peer advisors)",
            "Engage your board in strategic planning around organizational strengthening"
        ]
    },
    
    building: {
        title: "Building Capacity",
        subtitle: "Core elements in place, with significant opportunity to strengthen organizational infrastructure",
        badge: "🔨",
        badgeColor: "#ef4444",
        description: `
            <p>Your organization has <strong>essential elements in place</strong>—mission clarity, some programs running, and basic operations. However, there are significant gaps in organizational infrastructure that need attention.</p>
            
            <p>This is a critical juncture. Organizations at this stage often experience:</p>
            <ul>
                <li>Founder or ED burnout from doing too much</li>
                <li>Inconsistent fundraising and financial stress</li>
                <li>Difficulty articulating impact to funders</li>
                <li>Team or board engagement challenges</li>
            </ul>
            
            <p>The good news: <strong>focused capacity building now will unlock significant growth</strong> and help you move from survival mode to sustainable operations.</p>
        `,
        nextSteps: [
            "Prioritize the 3 dimensions where you scored lowest—these are blocking your growth",
            "Consider comprehensive organizational development support (not just one-off trainings)",
            "Explore capacity-building grants specifically designed for organizational strengthening",
            "Connect with peer organizations or networks for shared learning and support"
        ]
    },
    
    foundational: {
        title: "Foundational Development Needed",
        subtitle: "Early-stage organization requiring fundamental strengthening across multiple areas",
        badge: "🌱",
        badgeColor: "#6366f1",
        description: `
            <p>Your organization is in the <strong>early stages of development</strong> and requires fundamental strengthening across multiple dimensions. This is completely normal for young organizations or those undergoing significant transition.</p>
            
            <p>The challenge you're facing is common: when so many areas need work, it's hard to know where to start. Organizations at this stage typically struggle with:</p>
            <ul>
                <li>Limited funding and financial instability</li>
                <li>Unclear roles and governance</li>
                <li>Lack of systems and documentation</li>
                <li>Difficulty measuring and communicating impact</li>
            </ul>
            
            <p><strong>You need comprehensive support</strong>—not quick fixes. A strategic, sequenced approach to organizational development will be essential.</p>
        `,
        nextSteps: [
            "Seek comprehensive organizational development support (consultants, incubators, capacity builders)",
            "Focus first on financial sustainability and governance—these enable everything else",
            "Look for pro bono support, capacity-building grants, or peer mentorship programs",
            "Consider whether strategic partnership or fiscal sponsorship could provide stability while you build",
            "Create a 12-month organizational development roadmap with clear milestones"
        ]
    }
};

// ========================================
// STATE MANAGEMENT
// ========================================

let currentQuestion = 0;
let scores = {
    mission: 0,
    governance: 0,
    financial: 0,
    fundraising: 0,
    team: 0,
    overall: 0
};
let answers = [];

// ========================================
// CORE FUNCTIONS
// ========================================

function startScorecard() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('questions').style.display = 'block';
    showQuestion(0);
}

function showQuestion(index) {
    currentQuestion = index;
    const question = questions[index];
    const totalQuestions = questions.length;
    
    // Update progress
    const progress = ((index + 1) / totalQuestions) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('current-q').textContent = index + 1;
    document.getElementById('total-q').textContent = totalQuestions;
    
    // Build question HTML
    let optionsHTML = '';
    question.options.forEach((option, optionIndex) => {
        optionsHTML += `
            <button class="option-btn" onclick="selectOption(${index}, ${optionIndex})">
                <span class="option-text">${option.text}</span>
                <svg class="option-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        `;
    });
    
    const questionHTML = `
        <div class="question-card">
            <span class="question-dimension">${question.dimension}</span>
            <h2 class="question-text">${question.question}</h2>
            <div class="question-options">
                ${optionsHTML}
            </div>
        </div>
    `;
    
    document.getElementById('question-container').innerHTML = questionHTML;
}

function selectOption(questionIndex, optionIndex) {
    const question = questions[questionIndex];
    const selectedOption = question.options[optionIndex];
    
    // Store answer
    answers.push({
        question: question.question,
        answer: selectedOption.text,
        dimension: question.dimension
    });
    
    // Update scores
    for (let key in selectedOption.scores) {
        scores[key] += selectedOption.scores[key];
    }
    
    // Move to next question or finish
    if (questionIndex < questions.length - 1) {
        setTimeout(() => {
            showQuestion(questionIndex + 1);
        }, 300);
    } else {
        setTimeout(() => {
            showEmailCapture();
        }, 300);
    }
}

function showEmailCapture() {
    document.getElementById('questions').style.display = 'none';
    document.getElementById('email-capture').style.display = 'block';
    
    // Calculate result type
    const resultType = calculateResult();
    
    // Store scores in hidden form fields
    document.getElementById('result-type').value = resultType;
    document.getElementById('score-mission').value = scores.mission;
    document.getElementById('score-governance').value = scores.governance;
    document.getElementById('score-financial').value = scores.financial;
    document.getElementById('score-fundraising').value = scores.fundraising;
    document.getElementById('score-team').value = scores.team;
    document.getElementById('total-score').value = scores.overall;
}

function calculateResult() {
    const totalScore = scores.overall;
    
    // Scoring thresholds
    if (totalScore >= 38) return 'excellence';
    if (totalScore >= 30) return 'strong';
    if (totalScore >= 22) return 'building';
    return 'foundational';
}

function showResult() {
    const resultType = calculateResult();
    const result = results[resultType];
    
    document.getElementById('email-capture').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    
    // Badge
    document.getElementById('result-badge').innerHTML = `
        <div class="badge-icon" style="background-color: ${result.badgeColor}">
            ${result.badge}
        </div>
    `;
    
    // Title and subtitle
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-subtitle').textContent = result.subtitle;
    
    // Score breakdown
    const dimensions = [
        { name: 'Mission Clarity', score: scores.mission, max: 8 },
        { name: 'Governance & Leadership', score: scores.governance, max: 7 },
        { name: 'Financial Health', score: scores.financial, max: 8 },
        { name: 'Fundraising & Resources', score: scores.fundraising, max: 8 },
        { name: 'Team Capacity', score: scores.team, max: 8 }
    ];
    
    let scoresHTML = '';
    dimensions.forEach(dim => {
        const percentage = (dim.score / dim.max) * 100;
        const color = percentage >= 75 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444';
        
        scoresHTML += `
            <div class="score-bar-container">
                <div class="score-bar-label">
                    <span>${dim.name}</span>
                    <span class="score-value">${dim.score}/${dim.max}</span>
                </div>
                <div class="score-bar-track">
                    <div class="score-bar-fill" style="width: ${percentage}%; background-color: ${color}"></div>
                </div>
            </div>
        `;
    });
    
    document.getElementById('score-breakdown').innerHTML = scoresHTML;
    
    // Description
    document.getElementById('result-description').innerHTML = result.description;
    
    // Next steps
    let stepsHTML = '';
    result.nextSteps.forEach(step => {
        stepsHTML += `<li>${step}</li>`;
    });
    document.getElementById('next-steps-list').innerHTML = stepsHTML;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// FORM SUBMISSION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show result immediately
            showResult();
            
            // Submit form data to Netlify in background
            const formData = new FormData(form);
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            }).catch(error => console.error('Form submission error:', error));
        });
    }
});
