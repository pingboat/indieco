// ===== Instagram Growth Scorecard =====

const igQuestions = [
  // CONTENT (Q1-4)
  {
    id: 1, category: "content",
    text: "How would you describe your content strategy?",
    options: [
      { text: "I post whenever I feel like it — no real plan", score: 0 },
      { text: "I have a rough idea but it's inconsistent", score: 1 },
      { text: "I post regularly but haven't defined a clear niche", score: 2 },
      { text: "I have a clear content pillars and posting schedule", score: 3 }
    ]
  },
  {
    id: 2, category: "content",
    text: "How consistent is your visual identity (colours, fonts, tone)?",
    options: [
      { text: "Very inconsistent — no defined look", score: 0 },
      { text: "Somewhat consistent but not intentional", score: 1 },
      { text: "Mostly consistent with occasional off-brand posts", score: 2 },
      { text: "Fully consistent and recognisable at a glance", score: 3 }
    ]
  },
  {
    id: 3, category: "content",
    text: "How often do you post on Instagram?",
    options: [
      { text: "Rarely — once a month or less", score: 0 },
      { text: "1–2 times per week", score: 1 },
      { text: "3–4 times per week", score: 2 },
      { text: "5+ times per week across formats (feed, reels, stories)", score: 3 }
    ]
  },
  {
    id: 4, category: "content",
    text: "Do you use Reels as part of your strategy?",
    options: [
      { text: "No, I don't make Reels", score: 0 },
      { text: "Occasionally, but not strategically", score: 1 },
      { text: "Yes, but I'm not seeing much traction yet", score: 2 },
      { text: "Yes, Reels are a core part of my growth engine", score: 3 }
    ]
  },
  // GROWTH (Q5-8)
  {
    id: 5, category: "growth",
    text: "How has your follower count changed in the last 90 days?",
    options: [
      { text: "It's gone down or stayed flat", score: 0 },
      { text: "Slow growth — under 2% per month", score: 1 },
      { text: "Moderate growth — 2–5% per month", score: 2 },
      { text: "Strong growth — 5%+ per month", score: 3 }
    ]
  },
  {
    id: 6, category: "growth",
    text: "How do you approach hashtags and discoverability?",
    options: [
      { text: "I use the same hashtags on every post", score: 0 },
      { text: "I pick hashtags randomly without much research", score: 1 },
      { text: "I research hashtags but haven't refined the strategy", score: 2 },
      { text: "I use a tested hashtag mix tailored to each post", score: 3 }
    ]
  },
  {
    id: 7, category: "growth",
    text: "Do you collaborate with other accounts or leverage cross-promotion?",
    options: [
      { text: "Never — I grow solo", score: 0 },
      { text: "Rarely, and it hasn't moved the needle", score: 1 },
      { text: "Occasionally with decent results", score: 2 },
      { text: "Regularly — it's a key part of my growth strategy", score: 3 }
    ]
  },
  {
    id: 8, category: "growth",
    text: "Do you study your Instagram Insights to guide decisions?",
    options: [
      { text: "No, I rarely check analytics", score: 0 },
      { text: "I glance at them but don't act on the data", score: 1 },
      { text: "I review them monthly and make some adjustments", score: 2 },
      { text: "I review weekly and adjust content based on what the data tells me", score: 3 }
    ]
  },
  // ENGAGEMENT (Q9-11)
  {
    id: 9, category: "engagement",
    text: "What is your average engagement rate (likes + comments ÷ followers)?",
    options: [
      { text: "Under 1% — posts barely get a response", score: 0 },
      { text: "1–3% — some interaction but nothing consistent", score: 1 },
      { text: "3–6% — good engagement on most posts", score: 2 },
      { text: "6%+ — strong, loyal community interaction", score: 3 }
    ]
  },
  {
    id: 10, category: "engagement",
    text: "How do you handle comments and DMs?",
    options: [
      { text: "I rarely reply — no bandwidth", score: 0 },
      { text: "I reply to some but it's not consistent", score: 1 },
      { text: "I reply to most within 24 hours", score: 2 },
      { text: "I actively engage within the first hour and follow up in DMs", score: 3 }
    ]
  },
  {
    id: 11, category: "engagement",
    text: "Do people save or share your content?",
    options: [
      { text: "Rarely — I don't create save-worthy content", score: 0 },
      { text: "Occasionally on certain posts", score: 1 },
      { text: "Yes, saves and shares happen regularly", score: 2 },
      { text: "Saves and shares are consistently high — it's a metric I track", score: 3 }
    ]
  },
  // MONETISATION (Q12-13)
  {
    id: 12, category: "monetisation",
    text: "How clear is your Instagram profile about what you offer?",
    options: [
      { text: "It's not clear at all — visitors wouldn't know what I do", score: 0 },
      { text: "Somewhat clear but my bio could be much stronger", score: 1 },
      { text: "Fairly clear — most visitors understand my offer", score: 2 },
      { text: "Crystal clear — my bio, highlights, and pinned posts all align", score: 3 }
    ]
  },
  {
    id: 13, category: "monetisation",
    text: "Are you currently generating leads or sales from Instagram?",
    options: [
      { text: "No — I have no idea how Instagram converts for me", score: 0 },
      { text: "Occasionally, but it feels accidental", score: 1 },
      { text: "Yes, some consistent leads but I want more", score: 2 },
      { text: "Yes — Instagram is a reliable lead/sales channel for me", score: 3 }
    ]
  },
  // QUALIFIER QUESTIONS (Q14-15) — routing only, not scored
  {
    id: 14, category: "qualifier",
    text: "What's your monthly budget for professional Instagram growth support?",
    qualifier: true,
    options: [
      { text: "Not sure yet — still exploring", qualifier_value: "no" },
      { text: "Under ₹15,000 / month", qualifier_value: "no" },
      { text: "₹15,000–₹50,000 / month", qualifier_value: "yes" },
      { text: "₹50,000+ / month", qualifier_value: "yes" }
    ]
  },
  {
    id: 15, category: "qualifier",
    text: "Are you looking to take action on Instagram growth in the next 90 days?",
    qualifier: true,
    options: [
      { text: "Not really — just curious for now", qualifier_value: "no" },
      { text: "Maybe in 6+ months", qualifier_value: "no" },
      { text: "Yes, within the next 3 months", qualifier_value: "yes" },
      { text: "Yes, I want to start immediately", qualifier_value: "yes" }
    ]
  }
];

// State
let igCurrentQ = 0;
let igScores = { content: 0, growth: 0, engagement: 0, monetisation: 0 };
let igMaxScores = { content: 12, growth: 12, engagement: 9, monetisation: 6 };
let igAnswers = [];
let igQualifierBudget = "no";
let igQualifierTimeline = "no";

function igStart() {
  document.getElementById('ig-intro').style.display = 'none';
  document.getElementById('ig-questions').style.display = 'block';
  igShowQuestion();
}

function igShowQuestion() {
  const q = igQuestions[igCurrentQ];
  const total = igQuestions.length;
  const progress = ((igCurrentQ) / total) * 100;
  document.getElementById('ig-progress-fill').style.width = progress + '%';

  let optionsHTML = q.options.map((opt, i) => `
    <button class="option-btn" onclick="igSelectOption(${i})">
      <span class="option-text">${opt.text}</span>
    </button>
  `).join('');

  document.getElementById('ig-question-container').innerHTML = `
    <div class="question-number">Question ${igCurrentQ + 1} of ${total}</div>
    <div class="question-text">${q.text}</div>
    <div class="options">${optionsHTML}</div>
  `;
}

function igSelectOption(optionIndex) {
  const q = igQuestions[igCurrentQ];
  const opt = q.options[optionIndex];

  igAnswers.push({ question: q.text, answer: opt.text, category: q.category });

  if (q.qualifier) {
    if (q.id === 14) igQualifierBudget = opt.qualifier_value;
    if (q.id === 15) igQualifierTimeline = opt.qualifier_value;
  } else {
    igScores[q.category] += opt.score;
  }

  igCurrentQ++;

  if (igCurrentQ < igQuestions.length) {
    igShowQuestion();
  } else {
    document.getElementById('ig-progress-fill').style.width = '100%';
    document.getElementById('ig-questions').style.display = 'none';
    document.getElementById('ig-email-capture').style.display = 'block';
  }
}

// Email form submit
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('ig-email-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('ig-cap-name').value.trim();
      const email = document.getElementById('ig-cap-email').value.trim();
      const handle = document.getElementById('ig-cap-handle').value.trim();

      const totalScore = igScores.content + igScores.growth + igScores.engagement + igScores.monetisation;
      const maxTotal = 39;
      const qualifies = igQualifierBudget === "yes" && igQualifierTimeline === "yes";

      // Fill hidden fields
      document.getElementById('ig-nf-name').value = name;
      document.getElementById('ig-nf-email').value = email;
      document.getElementById('ig-nf-handle').value = handle;
      document.getElementById('ig-nf-score').value = totalScore;
      document.getElementById('ig-nf-qualifies').value = qualifies ? "yes" : "no";
      document.getElementById('ig-nf-answers').value = JSON.stringify(igAnswers);

      // Show generating
      document.getElementById('ig-email-capture').style.display = 'none';
      document.getElementById('ig-generating').style.display = 'block';

      // Submit to Netlify in background
      const formData = new FormData(form);
      fetch('/', { method: 'POST', body: formData }).catch(() => {});

      // Generate AI report
      igGenerateReport(name, handle, totalScore, maxTotal, qualifies);
    });
  }
});

async function igGenerateReport(name, handle, totalScore, maxTotal, qualifies) {
  const msgs = [
    "Analysing your Instagram presence…",
    "Identifying your growth blockers…",
    "Building your personalised roadmap…"
  ];
  let mi = 0;
  const loadEl = document.getElementById('ig-load-msg');
  const interval = setInterval(() => {
    mi = (mi + 1) % msgs.length;
    if (loadEl) loadEl.textContent = msgs[mi];
  }, 2000);

  const scorePercent = Math.round((totalScore / maxTotal) * 100);
  const contentPct = Math.round((igScores.content / igMaxScores.content) * 100);
  const growthPct = Math.round((igScores.growth / igMaxScores.growth) * 100);
  const engagementPct = Math.round((igScores.engagement / igMaxScores.engagement) * 100);
  const monetisationPct = Math.round((igScores.monetisation / igMaxScores.monetisation) * 100);

  const prompt = `You are an expert Instagram growth strategist. Analyse this Instagram audit and write a concise, personalised report.

Scores (higher = better):
- Overall: ${scorePercent}% (${totalScore}/${maxTotal})
- Content Strategy: ${contentPct}%
- Growth & Discoverability: ${growthPct}%
- Engagement & Community: ${engagementPct}%
- Monetisation Clarity: ${monetisationPct}%

Their answers:
${igAnswers.map(a => `- ${a.question}: "${a.answer}"`).join('\n')}

Write a report with EXACTLY these sections, using these exact XML tags:
<headline>One punchy sentence summarising their Instagram situation (max 12 words)</headline>
<strength>Their single biggest Instagram strength in 2 sentences</strength>
<gap>Their most critical growth blocker in 2 sentences</gap>
<actions>3 specific, actionable quick wins they can implement this week. Each on a new line starting with a number (1. 2. 3.)</actions>
<closing>One motivating closing sentence tailored to their situation</closing>

Be direct, specific, and avoid generic advice. Reference their actual answers where possible.`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }]
      })
    });

    clearInterval(interval);
    const data = await response.json();
    const text = data.content.map(b => b.text || "").join("");
    igShowResult(text, totalScore, maxTotal, scorePercent, contentPct, growthPct, engagementPct, monetisationPct, qualifies);
  } catch (err) {
    clearInterval(interval);
    igShowResult(null, totalScore, maxTotal, scorePercent, contentPct, growthPct, engagementPct, monetisationPct, qualifies);
  }
}

function igParseReport(text, tag) {
  const match = text.match(new RegExp(`<${tag}>([\s\S]*?)<\/${tag}>`));
  return match ? match[1].trim() : "";
}

function igShowResult(text, totalScore, maxTotal, scorePercent, contentPct, growthPct, engagementPct, monetisationPct, qualifies) {
  document.getElementById('ig-generating').style.display = 'none';
  document.getElementById('ig-result').style.display = 'block';

  let headline, strength, gap, actions, closing;

  if (text) {
    headline = igParseReport(text, "headline");
    strength = igParseReport(text, "strength");
    gap = igParseReport(text, "gap");
    actions = igParseReport(text, "actions");
    closing = igParseReport(text, "closing");
  }

  const scoreLabel = scorePercent >= 70 ? "Strong" : scorePercent >= 40 ? "Developing" : "Early Stage";
  const scoreColor = scorePercent >= 70 ? "#22c55e" : scorePercent >= 40 ? "#f59e0b" : "#ef4444";

  const ctaHTML = qualifies
    ? `<div style="background:linear-gradient(135deg,#2d3a8c,#1e2766);border-radius:12px;padding:2rem;text-align:center;margin-top:2rem">
        <p style="color:rgba(255,255,255,0.8);font-size:0.875rem;margin-bottom:0.5rem">NEXT STEP</p>
        <h3 style="color:#fff;font-family:var(--font-display);font-size:1.375rem;margin-bottom:0.75rem">Let's build your growth engine together</h3>
        <p style="color:rgba(255,255,255,0.7);font-size:0.9375rem;margin-bottom:1.5rem">You have the budget and the intent. Let's talk about what's possible in 90 days.</p>
        <a href="https://cal.id/leon/discovery-call" target="_blank" rel="noopener" class="btn btn-secondary" style="display:inline-block">Book a Discovery Call →</a>
      </div>`
    : `<div style="background:linear-gradient(135deg,#2d3a8c,#1e2766);border-radius:12px;padding:2rem;text-align:center;margin-top:2rem">
        <p style="color:rgba(255,255,255,0.8);font-size:0.875rem;margin-bottom:0.5rem">FREE RESOURCE</p>
        <h3 style="color:#fff;font-family:var(--font-display);font-size:1.375rem;margin-bottom:0.75rem">Start with the Instagram Growth Blueprint</h3>
        <p style="color:rgba(255,255,255,0.7);font-size:0.9375rem;margin-bottom:1.5rem">A step-by-step guide to fixing your biggest Instagram gaps — free.</p>
        <a href="/products/" class="btn btn-secondary" style="display:inline-block">Download Free Guide →</a>
      </div>`;

  const actionsHTML = actions
    ? actions.split('\n').filter(l => l.trim()).map(line =>
        `<div style="display:flex;gap:12px;margin-bottom:0.75rem">
          <span style="color:#FF9933;font-weight:700;flex-shrink:0">${line.charAt(0) === '1' || line.charAt(0) === '2' || line.charAt(0) === '3' ? '' : ''}</span>
          <span style="color:#57534e;font-size:0.9375rem;line-height:1.5">${line.replace(/^[0-9]+\.\s*/, '')}</span>
        </div>`
      ).join('')
    : `<p style="color:#57534e">Focus on consistency, engagement, and making your offer clear in your bio.</p>`;

  document.getElementById('ig-result-card').innerHTML = `
    <div style="text-align:center;margin-bottom:2rem">
      <div style="font-size:0.6875rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#FF9933;background:rgba(255,153,51,0.1);padding:4px 12px;border-radius:3px;display:inline-block;margin-bottom:1rem">Your Instagram Audit Report</div>
      <h2 style="font-family:var(--font-display);font-size:1.5rem;color:#1c1917;margin-bottom:0.5rem">${headline || "Here's what your Instagram audit reveals"}</h2>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:2rem">
      ${[
        { label: "Overall Score", pct: scorePercent, color: scoreColor },
        { label: "Content", pct: contentPct, color: "#2d3a8c" },
        { label: "Growth", pct: growthPct, color: "#2d3a8c" },
        { label: "Engagement", pct: engagementPct, color: "#2d3a8c" },
        { label: "Monetisation", pct: monetisationPct, color: "#2d3a8c" }
      ].map(s => `
        <div style="background:#f5f5f4;border-radius:8px;padding:1rem">
          <div style="font-size:0.75rem;font-weight:600;color:#57534e;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem">${s.label}</div>
          <div style="font-size:1.5rem;font-weight:700;color:${s.color};margin-bottom:0.5rem">${s.pct}%</div>
          <div style="background:#e7e5e4;border-radius:99px;height:4px">
            <div style="background:${s.color};width:${s.pct}%;height:4px;border-radius:99px"></div>
          </div>
        </div>
      `).join('')}
    </div>

    ${strength ? `<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:1.25rem;margin-bottom:1rem">
      <div style="font-size:0.75rem;font-weight:700;color:#16a34a;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem">✓ Your Strength</div>
      <p style="color:#1c1917;font-size:0.9375rem;line-height:1.6;margin:0">${strength}</p>
    </div>` : ''}

    ${gap ? `<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:1.25rem;margin-bottom:1.5rem">
      <div style="font-size:0.75rem;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem">⚡ Your Biggest Gap</div>
      <p style="color:#1c1917;font-size:0.9375rem;line-height:1.6;margin:0">${gap}</p>
    </div>` : ''}

    <div style="margin-bottom:1.5rem">
      <div style="font-size:0.75rem;font-weight:700;color:#2d3a8c;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:1rem">3 Quick Wins This Week</div>
      ${actionsHTML}
    </div>

    ${closing ? `<p style="color:#57534e;font-size:0.9375rem;line-height:1.6;font-style:italic;text-align:center;margin-bottom:0">${closing}</p>` : ''}

    ${ctaHTML}
  `;
}
