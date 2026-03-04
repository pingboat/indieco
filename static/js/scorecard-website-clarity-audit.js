// Website Clarity Audit
// indieco.in

const wcaQuestions = [
    {
        id: 1,
        category: 'Positioning',
        question: "What is your website's #1 job right now?",
        hint: "Be honest — what should the site do for a visitor the moment they land?",
        options: [
            { text: 'Generate leads / enquiries',    scores: { positioning: 3 } },
            { text: 'Drive direct sales / bookings', scores: { positioning: 3 } },
            { text: 'Build credibility & trust',     scores: { positioning: 2 } },
            { text: 'Build brand awareness',         scores: { positioning: 2 } },
            { text: "Honestly, I'm not sure",        scores: { positioning: 0 } }
        ]
    },
    {
        id: 2,
        category: 'Positioning',
        question: 'How clearly does your homepage speak to ONE specific person?',
        hint: 'Your website should make your ideal client feel immediately seen.',
        options: [
            { text: 'Very clear — my ideal client is named & described', scores: { positioning: 4 } },
            { text: 'Fairly clear — but we cover a few segments',        scores: { positioning: 3 } },
            { text: 'Somewhat vague — we speak to many types',           scores: { positioning: 2 } },
            { text: 'We try to appeal to everyone',                      scores: { positioning: 1 } }
        ]
    },
    {
        id: 3,
        category: 'Positioning',
        question: 'Can a first-time visitor understand what you do within 5 seconds?',
        hint: "The '5-second test' — no scrolling, no reading, just the hero section.",
        options: [
            { text: "Yes — it's crystal clear",                 scores: { positioning: 4 } },
            { text: 'Probably — but they might need to scroll', scores: { positioning: 3 } },
            { text: 'Unlikely — it requires some reading',      scores: { positioning: 2 } },
            { text: "No — it's confusing or too generic",       scores: { positioning: 1 } }
        ]
    },
    {
        id: 4,
        category: 'Conversion Readiness',
        question: 'How many primary CTAs exist on your homepage?',
        hint: 'Too many choices = no choice. One clear next step wins.',
        options: [
            { text: 'One clear CTA — no confusion',    scores: { conversion: 4 } },
            { text: 'Two CTAs — primary & secondary',  scores: { conversion: 3 } },
            { text: 'Three or four — we give options', scores: { conversion: 2 } },
            { text: 'Five or more — or none at all',   scores: { conversion: 1 } }
        ]
    },
    {
        id: 5,
        category: 'Conversion Readiness',
        question: "Do you have a lead capture mechanism that works even when you're offline?",
        hint: "Forms, lead magnets, opt-ins — something that captures intent 24/7.",
        options: [
            { text: 'Yes — a lead magnet or email capture with automation', scores: { conversion: 4 } },
            { text: 'Yes — a contact form but no automation',               scores: { conversion: 3 } },
            { text: 'Just a WhatsApp button or phone number',               scores: { conversion: 2 } },
            { text: 'No — visitors have to find me themselves',             scores: { conversion: 1 } }
        ]
    },
    {
        id: 6,
        category: 'Conversion Readiness',
        question: 'What trust signals does your site currently show?',
        hint: 'Visitors need proof before they act. What do you have?',
        options: [
            { text: 'Case studies or testimonials with specific results', scores: { conversion: 4 } },
            { text: 'Client logos or general testimonials',               scores: { conversion: 3 } },
            { text: 'Awards, credentials, or press mentions',             scores: { conversion: 2 } },
            { text: 'None of the above',                                  scores: { conversion: 1 } }
        ]
    },
    {
        id: 7,
        category: 'Lead Flow',
        question: 'Where does most of your current website traffic come from?',
        hint: 'Understanding your traffic source shapes everything about your funnel.',
        options: [
            { text: 'Organic search (SEO / Google)',            scores: { leadflow: 4 } },
            { text: 'Social media (LinkedIn, Instagram, etc.)', scores: { leadflow: 3 } },
            { text: 'Referrals / word of mouth',                scores: { leadflow: 3 } },
            { text: 'Paid ads (Google, Meta)',                  scores: { leadflow: 3 } },
            { text: 'Direct / I share the link manually',       scores: { leadflow: 2 } },
            { text: 'Very little traffic currently',            scores: { leadflow: 1 } }
        ]
    },
    {
        id: 8,
        category: 'Lead Flow',
        question: 'What happens after someone submits a form or enquiry on your site?',
        hint: 'Speed and consistency of follow-up is often where leads die.',
        options: [
            { text: 'Automated email sequence + CRM entry immediately', scores: { leadflow: 4 } },
            { text: 'Auto-reply email + I follow up within 24 hrs',     scores: { leadflow: 3 } },
            { text: 'I get a notification and respond when I can',      scores: { leadflow: 2 } },
            { text: "I'm not sure — it's inconsistent",                 scores: { leadflow: 1 } }
        ]
    },
    {
        id: 9,
        category: 'Brand Coherence',
        question: 'How consistent is your visual identity across the website?',
        hint: 'Fonts, colours, imagery, tone — does it all feel like one brand?',
        options: [
            { text: 'Very consistent — we have a clear brand system',  scores: { brand: 4 } },
            { text: 'Mostly consistent — a few rough edges',           scores: { brand: 3 } },
            { text: 'Inconsistent — different pages feel different',   scores: { brand: 2 } },
            { text: "We haven't really thought about this",            scores: { brand: 1 } }
        ]
    },
    {
        id: 10,
        category: 'Brand Coherence',
        question: 'What outcome matters most to you right now?',
        hint: 'This shapes what we prioritise in your audit report.',
        options: [
            { text: 'Get more leads from the website',         scores: { brand: 3 } },
            { text: 'Attract better-fit clients',              scores: { brand: 3 } },
            { text: 'Full website redesign / refresh',         scores: { brand: 2 } },
            { text: 'Clarify & strengthen brand identity',     scores: { brand: 2 } },
            { text: 'Build a proper go-to-market strategy',    scores: { brand: 2 } }
        ]
    }
];

// ── State ──────────────────────────────────────────────────────
let wcaCurrentQuestion = 0;
let wcaScores = { positioning: 0, conversion: 0, leadflow: 0, brand: 0 };
let wcaAnswers   = [];
let wcaSiteUrl   = '';
let wcaLoadTimer = null;

// ── Start ──────────────────────────────────────────────────────
function wcaStart() {
    const val   = document.getElementById('wca-url').value.trim();
    const errEl = document.getElementById('wca-url-error');

    if (!val) {
        errEl.style.display = 'block';
        errEl.textContent   = 'Please enter your website URL.';
        return;
    }
    try {
        new URL(val.indexOf('http') === 0 ? val : 'https://' + val);
    } catch (e) {
        errEl.style.display = 'block';
        errEl.textContent   = 'Please enter a valid URL (e.g. yourwebsite.com)';
        return;
    }
    errEl.style.display = 'none';
    wcaSiteUrl = val;

    wcaCurrentQuestion = 0;
    wcaScores  = { positioning: 0, conversion: 0, leadflow: 0, brand: 0 };
    wcaAnswers = [];

    document.getElementById('wca-intro').style.display     = 'none';
    document.getElementById('wca-questions').style.display = 'block';
    wcaShowQuestion(0);
}

// ── Questions ──────────────────────────────────────────────────
function wcaShowQuestion(index) {
    wcaCurrentQuestion = index;
    const q     = wcaQuestions[index];
    const total = wcaQuestions.length;
    const pct   = Math.round(((index + 1) / total) * 100);

    document.getElementById('wca-progress-fill').style.width = pct + '%';

    let optionsHTML = '';
    q.options.forEach(function (option, i) {
        optionsHTML += '<button class="option-btn" onclick="wcaSelectOption(' + index + ',' + i + ')">' + option.text + '</button>';
    });

    document.getElementById('wca-question-container').innerHTML =
        '<p class="question-number">QUESTION ' + (index + 1) + ' OF ' + total + '</p>' +
        '<p class="question-text">' + q.question + '</p>' +
        (q.hint ? '<p style="font-size:14px;color:#57534e;font-style:italic;margin-bottom:1.5rem">' + q.hint + '</p>' : '') +
        '<div class="options">' + optionsHTML + '</div>';
}

function wcaSelectOption(questionIndex, optionIndex) {
    const q      = wcaQuestions[questionIndex];
    const option = q.options[optionIndex];

    wcaAnswers.push({ question: q.question, answer: option.text, category: q.category });
    for (var key in option.scores) { wcaScores[key] += option.scores[key]; }

    if (questionIndex < wcaQuestions.length - 1) {
        setTimeout(function () { wcaShowQuestion(questionIndex + 1); }, 300);
    } else {
        setTimeout(function () {
            document.getElementById('wca-questions').style.display     = 'none';
            document.getElementById('wca-email-capture').style.display = 'block';
            window.scrollTo(0, 0);
        }, 300);
    }
}

// ── Scoring ────────────────────────────────────────────────────
function wcaGetCategoryScores() {
    return {
        'Positioning':          Math.round(Math.min((wcaScores.positioning / 11) * 100, 100)),
        'Conversion Readiness': Math.round(Math.min((wcaScores.conversion  / 12) * 100, 100)),
        'Lead Flow':            Math.round(Math.min((wcaScores.leadflow    /  8) * 100, 100)),
        'Brand Coherence':      Math.round(Math.min((wcaScores.brand       / 10) * 100, 100))
    };
}

function wcaOverallScore(catScores) {
    const vals = Object.values(catScores);
    return Math.round(vals.reduce(function (a, b) { return a + b; }, 0) / vals.length);
}

function wcaScoreLabel(pct) {
    if (pct >= 75) return { label: 'Strong',     color: '#10b981' };
    if (pct >= 50) return { label: 'Developing', color: '#f59e0b' };
    return               { label: 'Needs Work',  color: '#ef4444' };
}

// ── AI Report ──────────────────────────────────────────────────
function wcaGenerateAIReport(catScores, overall, name) {
    const answersText = wcaAnswers.map(function (a) { return a.question + ': ' + a.answer; }).join('\n');
    const scoreText   = Object.keys(catScores).map(function (c) { return c + ': ' + catScores[c] + '%'; }).join(', ');

    const prompt =
        'You are a senior growth consultant at indieco, a boutique consultancy for founders. ' +
        'You have just reviewed a website clarity audit. Be direct, warm, specific, and actionable.\n\n' +
        'Founder name: ' + name + '\n' +
        'Website URL: ' + wcaSiteUrl + '\n' +
        'Overall score: ' + overall + '/100\n' +
        'Category scores: ' + scoreText + '\n\n' +
        'Their answers:\n' + answersText + '\n\n' +
        'Write a Website Clarity Audit Report with these exact sections:\n\n' +
        '1. HEADLINE (one punchy sentence summarising their biggest opportunity)\n' +
        '2. YOUR BIGGEST WIN (what they are already doing well — 2-3 sentences)\n' +
        '3. THE CRITICAL GAP (the single most important thing holding them back — 3-4 sentences)\n' +
        '4. THREE QUICK WINS (concrete actions for the next 30 days — numbered, 1-2 sentences each)\n' +
        '5. WHERE TO GO NEXT (which indieco service fits best — choose from: Website Redesign, Brand Building, Go-to-Market Strategy, Lead Gen Funnel, or Founder Intensive)\n\n' +
        'Under 350 words. Tone: warm, direct, experienced. Use "you" throughout. No jargon.';

    return fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1000,
            messages: [{ role: 'user', content: prompt }]
        })
    })
    .then(function (res) { return res.json(); })
    .then(function (data) { return (data.content || []).map(function (b) { return b.text || ''; }).join('\n'); });
}

function wcaParseReport(text) {
    const s = {};
    const p = {
        headline:  /1\.\s*HEADLINE[:\s]*([\s\S]*?)(?=2\.|$)/i,
        win:       /2\.\s*YOUR BIGGEST WIN[:\s]*([\s\S]*?)(?=3\.|$)/i,
        gap:       /3\.\s*THE CRITICAL GAP[:\s]*([\s\S]*?)(?=4\.|$)/i,
        quickwins: /4\.\s*THREE QUICK WINS[:\s]*([\s\S]*?)(?=5\.|$)/i,
        next:      /5\.\s*WHERE TO GO NEXT[:\s]*([\s\S]*?)$/i
    };
    Object.keys(p).forEach(function (k) {
        const m = text.match(p[k]);
        s[k] = m ? m[1].trim() : '';
    });
    return s;
}

// ── Render Result ──────────────────────────────────────────────
function wcaShowResult(reportText) {
    const catScores = wcaGetCategoryScores();
    const overall   = wcaOverallScore(catScores);
    const sl        = wcaScoreLabel(overall);
    const sections  = wcaParseReport(reportText);

    document.getElementById('wca-generating').style.display = 'none';
    document.getElementById('wca-result').style.display     = 'block';

    let scoreBarsHTML = '';
    Object.keys(catScores).forEach(function (cat) {
        const pct  = catScores[cat];
        const csl  = wcaScoreLabel(pct);
        scoreBarsHTML +=
            '<div style="margin-bottom:1rem">' +
                '<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:600;margin-bottom:6px">' +
                    '<span>' + cat + '</span>' +
                    '<span style="color:' + csl.color + '">' + pct + '/100</span>' +
                '</div>' +
                '<div style="background:#e7e5e4;border-radius:4px;height:8px;overflow:hidden">' +
                    '<div style="width:' + pct + '%;height:100%;background:' + csl.color + ';border-radius:4px"></div>' +
                '</div>' +
            '</div>';
    });

    document.getElementById('wca-result-card').innerHTML =
        '<p class="result-label">Website Clarity Audit · ' + wcaSiteUrl + '</p>' +
        '<h2 class="result-title">' + overall + '<span style="font-size:1.5rem;color:#57534e"> / 100</span></h2>' +
        '<p class="result-subtitle" style="color:' + sl.color + '">' + sl.label + '</p>' +
        (sections.headline ? '<p style="font-style:italic;font-size:1.125rem;margin-bottom:2rem">"' + sections.headline + '"</p>' : '') +

        '<div style="margin:2rem 0;text-align:left">' + scoreBarsHTML + '</div>' +

        (sections.win ?
            '<div style="background:#f0fdf4;border-left:4px solid #10b981;border-radius:4px;padding:1.5rem;margin-bottom:1rem;text-align:left">' +
            '<p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#10b981;margin-bottom:.5rem">Your Biggest Win</p>' +
            '<p style="white-space:pre-line">' + sections.win + '</p></div>' : '') +

        (sections.gap ?
            '<div style="background:#fff7ed;border-left:4px solid #f59e0b;border-radius:4px;padding:1.5rem;margin-bottom:1rem;text-align:left">' +
            '<p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#f59e0b;margin-bottom:.5rem">The Critical Gap</p>' +
            '<p style="white-space:pre-line">' + sections.gap + '</p></div>' : '') +

        (sections.quickwins ?
            '<div style="background:#f5f5f4;border-left:4px solid #2d3a8c;border-radius:4px;padding:1.5rem;margin-bottom:1rem;text-align:left">' +
            '<p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#2d3a8c;margin-bottom:.5rem">Three Quick Wins</p>' +
            '<p style="white-space:pre-line">' + sections.quickwins + '</p></div>' : '') +

        (sections.next ?
            '<div style="background:#f5f5f4;border-left:4px solid #2d3a8c;border-radius:4px;padding:1.5rem;margin-bottom:2rem;text-align:left">' +
            '<p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#2d3a8c;margin-bottom:.5rem">Where to Go Next</p>' +
            '<p style="white-space:pre-line">' + sections.next + '</p></div>' : '') +

        '<div class="result-cta">' +
            '<a href="/contact/" class="btn btn-primary">Book Free Strategy Call →</a>' +
        '</div>';

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const WCA_FALLBACK = '1. HEADLINE\nYour website has real opportunities to turn more visitors into leads.\n2. YOUR BIGGEST WIN\nYou took the time to audit your site — that self-awareness puts you ahead of most founders.\n3. THE CRITICAL GAP\nThe clearest next step is a direct conversation. Book a call and Leon will walk through your scores personally.\n4. THREE QUICK WINS\n1. Make sure your homepage has exactly one primary CTA above the fold.\n2. Add one client testimonial that includes a specific, measurable outcome.\n3. Set up an automatic email reply for every form submission so no lead goes cold.\n5. WHERE TO GO NEXT\nBook a free strategy call to get your fully personalised recommendations.';

function wcaStartLoadMessages() {
    const msgs = ['Analysing your answers…', 'Mapping your conversion gaps…', 'Identifying quick wins…', 'Crafting your personalised report…'];
    let i = 0;
    const el = document.getElementById('wca-load-msg');
    wcaLoadTimer = setInterval(function () { i = (i + 1) % msgs.length; if (el) el.textContent = msgs[i]; }, 2200);
}

// ── Form Submit ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('wca-email-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name     = document.getElementById('wca-cap-name').value.trim();
        const email    = document.getElementById('wca-cap-email').value.trim();
        const whatsapp = document.getElementById('wca-cap-whatsapp').value.trim();
        const catScores = wcaGetCategoryScores();
        const overall   = wcaOverallScore(catScores);

        document.getElementById('wca-nf-url').value         = wcaSiteUrl;
        document.getElementById('wca-nf-name').value        = name;
        document.getElementById('wca-nf-email').value       = email;
        document.getElementById('wca-nf-whatsapp').value    = whatsapp;
        document.getElementById('wca-nf-overall').value     = overall;
        document.getElementById('wca-nf-positioning').value = catScores['Positioning'];
        document.getElementById('wca-nf-conversion').value  = catScores['Conversion Readiness'];
        document.getElementById('wca-nf-leadflow').value    = catScores['Lead Flow'];
        document.getElementById('wca-nf-brand').value       = catScores['Brand Coherence'];
        document.getElementById('wca-nf-answers').value     = JSON.stringify(wcaAnswers);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(new FormData(form)).toString()
        }).catch(function (err) { console.warn('Netlify form error:', err); });

        document.getElementById('wca-email-capture').style.display = 'none';
        document.getElementById('wca-generating').style.display    = 'block';
        window.scrollTo(0, 0);
        wcaStartLoadMessages();

        wcaGenerateAIReport(catScores, overall, name)
            .then(function (text) { clearInterval(wcaLoadTimer); wcaShowResult(text); })
            .catch(function ()    { clearInterval(wcaLoadTimer); wcaShowResult(WCA_FALLBACK); });
    });
});
