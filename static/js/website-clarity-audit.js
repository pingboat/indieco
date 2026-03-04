(function () {
  'use strict';

  /* ── Questions ────────────────────────────────────────────── */
  var QUESTIONS = [
    {
      id: 'primary_goal',
      category: 'Positioning',
      label: "What is your website's #1 job right now?",
      hint: "Be honest — what should a visitor do the moment they land?",
      type: 'single',
      options: [
        { value: 'leads',       label: 'Generate leads / enquiries' },
        { value: 'sales',       label: 'Drive direct sales / bookings' },
        { value: 'credibility', label: 'Build credibility & trust' },
        { value: 'awareness',   label: 'Build brand awareness' },
        { value: 'unsure',      label: "Honestly, I'm not sure" }
      ]
    },
    {
      id: 'audience_clarity',
      category: 'Positioning',
      label: 'How clearly does your homepage speak to ONE specific person?',
      hint: 'Your website should make your ideal client feel immediately seen.',
      type: 'single',
      options: [
        { value: '4', label: 'Very clear — my ideal client is named & described' },
        { value: '3', label: 'Fairly clear — but we cover a few segments' },
        { value: '2', label: 'Somewhat vague — we speak to many types' },
        { value: '1', label: 'We try to appeal to everyone' }
      ]
    },
    {
      id: 'value_prop',
      category: 'Positioning',
      label: 'Can a first-time visitor understand what you do within 5 seconds?',
      hint: "The '5-second test' — no scrolling, no reading, just the hero section.",
      type: 'single',
      options: [
        { value: '4', label: "Yes — it's crystal clear" },
        { value: '3', label: 'Probably — but they might need to scroll' },
        { value: '2', label: 'Unlikely — it requires some reading' },
        { value: '1', label: "No — it's confusing or too generic" }
      ]
    },
    {
      id: 'cta_clarity',
      category: 'Conversion Readiness',
      label: 'How many primary CTAs exist on your homepage?',
      hint: 'Too many choices = no choice. One clear next step wins.',
      type: 'single',
      options: [
        { value: '4', label: 'One clear CTA — no confusion' },
        { value: '3', label: 'Two CTAs — primary & secondary' },
        { value: '2', label: 'Three or four — we give options' },
        { value: '1', label: 'Five or more — or none at all' }
      ]
    },
    {
      id: 'lead_capture',
      category: 'Conversion Readiness',
      label: "Do you have a lead capture mechanism that works even when you're offline?",
      hint: "Forms, lead magnets, opt-ins — something that captures intent 24/7.",
      type: 'single',
      options: [
        { value: '4', label: 'Yes — a lead magnet or email capture with automation' },
        { value: '3', label: 'Yes — a contact form but no automation' },
        { value: '2', label: 'Just a WhatsApp button or phone number' },
        { value: '1', label: 'No — visitors have to find me themselves' }
      ]
    },
    {
      id: 'trust_signals',
      category: 'Conversion Readiness',
      label: 'What trust signals does your site currently show?',
      hint: 'Visitors need proof before they act. What do you have?',
      type: 'multi',
      options: [
        { value: 'testimonials', label: 'Client testimonials / reviews' },
        { value: 'casestudies',  label: 'Case studies or results' },
        { value: 'logos',        label: 'Client logos or press mentions' },
        { value: 'credentials',  label: 'Awards, certifications, credentials' },
        { value: 'none',         label: 'None of the above' }
      ]
    },
    {
      id: 'traffic_source',
      category: 'Lead Flow',
      label: 'Where does most of your current website traffic come from?',
      hint: 'Understanding your traffic source shapes everything about your funnel.',
      type: 'single',
      options: [
        { value: 'organic',  label: 'Organic search (SEO / Google)' },
        { value: 'social',   label: 'Social media (LinkedIn, Instagram, etc.)' },
        { value: 'referral', label: 'Referrals / word of mouth' },
        { value: 'paid',     label: 'Paid ads (Google, Meta)' },
        { value: 'direct',   label: 'Direct / I share the link manually' },
        { value: 'none',     label: 'Very little traffic currently' }
      ]
    },
    {
      id: 'followup_system',
      category: 'Lead Flow',
      label: 'What happens after someone submits a form or enquiry on your site?',
      hint: 'Speed and consistency of follow-up is often where leads die.',
      type: 'single',
      options: [
        { value: '4', label: 'Automated email sequence + CRM entry immediately' },
        { value: '3', label: 'Auto-reply email + I follow up within 24 hrs' },
        { value: '2', label: 'I get a notification and respond when I can' },
        { value: '1', label: "I'm not sure — it's inconsistent" }
      ]
    },
    {
      id: 'brand_consistency',
      category: 'Brand Coherence',
      label: 'How consistent is your visual identity across the website?',
      hint: 'Fonts, colours, imagery, tone — does it all feel like one brand?',
      type: 'single',
      options: [
        { value: '4', label: 'Very consistent — we have a clear brand system' },
        { value: '3', label: 'Mostly consistent — a few rough edges' },
        { value: '2', label: 'Inconsistent — different pages feel different' },
        { value: '1', label: "We haven't really thought about this" }
      ]
    },
    {
      id: 'desired_outcome',
      category: 'Brand Coherence',
      label: 'What outcome matters most to you right now?',
      hint: 'This shapes what we prioritise in your audit report.',
      type: 'single',
      options: [
        { value: 'more_leads',     label: 'Get more leads from the website' },
        { value: 'better_clients', label: 'Attract better-fit clients' },
        { value: 'redesign',       label: 'Full website redesign / refresh' },
        { value: 'brand',          label: 'Clarify & strengthen brand identity' },
        { value: 'gtm',            label: 'Build a proper go-to-market strategy' }
      ]
    }
  ];

  var CATEGORIES = ['Positioning', 'Conversion Readiness', 'Lead Flow', 'Brand Coherence'];

  /* ── State ────────────────────────────────────────────────── */
  var currentQ  = 0;
  var answers   = {};
  var siteUrl   = '';
  var scores    = {};
  var loadTimer = null;

  /* ── Helpers ──────────────────────────────────────────────── */
  function showScreen(id) {
    var screens = document.querySelectorAll('.wca-screen');
    for (var i = 0; i < screens.length; i++) {
      screens[i].classList.remove('active');
    }
    document.getElementById('screen-' + id).classList.add('active');
    window.scrollTo(0, 0);
  }

  function isValidUrl(val) {
    try { new URL(val.indexOf('http') === 0 ? val : 'https://' + val); return true; }
    catch (e) { return false; }
  }

  function scoreLabel(pct) {
    if (pct >= 75) return { label: 'Strong',     color: '#10b981' };
    if (pct >= 50) return { label: 'Developing', color: '#f59e0b' };
    return               { label: 'Needs Work',  color: '#ef4444' };
  }

  /* ── Scoring ──────────────────────────────────────────────── */
  function computeScores() {
    var cats = {};
    CATEGORIES.forEach(function (c) { cats[c] = { total: 0, max: 0 }; });

    QUESTIONS.forEach(function (q) {
      var ans = answers[q.id];
      if (!ans) return;
      var cat = q.category;

      if (q.type === 'multi') {
        var sel   = Array.isArray(ans) ? ans : [];
        var count = sel.indexOf('none') !== -1 ? 0 : sel.length;
        cats[cat].total += Math.min(count, 4);
        cats[cat].max   += 4;
      } else if (q.id === 'primary_goal') {
        cats[cat].total += ans === 'unsure' ? 0 : 3;
        cats[cat].max   += 3;
      } else if (q.id === 'traffic_source') {
        cats[cat].total += ans === 'none' ? 0 : ans === 'organic' ? 4 : 3;
        cats[cat].max   += 4;
      } else {
        cats[cat].total += parseInt(ans) || 0;
        cats[cat].max   += 4;
      }
    });

    var result = {};
    CATEGORIES.forEach(function (c) {
      result[c] = cats[c].max > 0 ? Math.round((cats[c].total / cats[c].max) * 100) : 0;
    });
    return result;
  }

  /* ── Render question ──────────────────────────────────────── */
  function renderQuestion() {
    var q   = QUESTIONS[currentQ];
    var pct = Math.round(((currentQ + 1) / QUESTIONS.length) * 100);

    document.getElementById('wca-progress-label').textContent = 'Question ' + (currentQ + 1) + ' of ' + QUESTIONS.length;
    document.getElementById('wca-progress-pct').textContent   = pct + '%';
    document.getElementById('wca-progress-fill').style.width  = pct + '%';

    var multiSelected = q.type === 'multi' ? (answers[q.id] || []) : [];

    var optionsHtml = q.options.map(function (opt) {
      var isSel      = q.type === 'multi' ? multiSelected.indexOf(opt.value) !== -1 : answers[q.id] === opt.value;
      var indClass   = q.type === 'multi' ? 'checkbox' : 'radio';
      return '<button class="wca-option' + (isSel ? ' selected' : '') + '" data-value="' + opt.value + '">' +
        '<span class="wca-option-indicator ' + indClass + '">' + (isSel ? '&#10003;' : '') + '</span>' +
        opt.label +
        '</button>';
    }).join('');

    document.getElementById('wca-question-card').innerHTML =
      '<span class="wca-tag">' + q.category + '</span>' +
      '<h2>' + q.label + '</h2>' +
      (q.hint ? '<p class="wca-question-hint">' + q.hint + '</p>' : '') +
      '<div class="wca-options">' + optionsHtml + '</div>' +
      (q.type === 'multi' ? '<p class="wca-multi-note">Select all that apply</p>' : '');

    // Attach option click handlers
    var btns = document.querySelectorAll('.wca-option');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', handleOptionClick);
    }

    updateNextBtn();
    document.getElementById('btn-back').style.visibility = currentQ === 0 ? 'hidden' : 'visible';
  }

  function handleOptionClick() {
    var q   = QUESTIONS[currentQ];
    var val = this.getAttribute('data-value');

    if (q.type === 'multi') {
      var current = answers[q.id] || [];
      var next;
      if (val === 'none') {
        next = current.indexOf('none') !== -1 ? [] : ['none'];
      } else {
        var without = current.filter(function (v) { return v !== 'none'; });
        next = without.indexOf(val) !== -1
          ? without.filter(function (v) { return v !== val; })
          : without.concat([val]);
      }
      answers[q.id] = next;
    } else {
      answers[q.id] = val;
    }
    renderQuestion();
  }

  function updateNextBtn() {
    var q   = QUESTIONS[currentQ];
    var ans = answers[q.id];
    var ok  = q.type === 'multi' ? (Array.isArray(ans) && ans.length > 0) : !!ans;
    var btn = document.getElementById('btn-next');
    btn.disabled        = !ok;
    btn.textContent     = currentQ < QUESTIONS.length - 1 ? 'Next →' : 'See My Results →';
  }

  /* ── SVG ring ─────────────────────────────────────────────── */
  function buildRing(pct, category) {
    var sl    = scoreLabel(pct);
    var r     = 44;
    var circ  = 2 * Math.PI * r;
    var dash  = (pct / 100) * circ;
    return '<div class="wca-ring-item">' +
      '<svg width="110" height="110" viewBox="0 0 110 110">' +
        '<circle cx="55" cy="55" r="' + r + '" fill="none" stroke="#e7e5e4" stroke-width="7"/>' +
        '<circle cx="55" cy="55" r="' + r + '" fill="none" stroke="' + sl.color + '" stroke-width="7"' +
          ' stroke-dasharray="' + dash.toFixed(2) + ' ' + circ.toFixed(2) + '"' +
          ' stroke-dashoffset="' + (circ / 4).toFixed(2) + '"' +
          ' stroke-linecap="round"/>' +
        '<text x="55" y="51" text-anchor="middle" fill="#2d3a8c" style="font-family:\'Playfair Display\',serif;font-size:22px;font-weight:700">' + pct + '</text>' +
        '<text x="55" y="68" text-anchor="middle" fill="#57534e" style="font-family:\'DM Sans\',sans-serif;font-size:11px;font-weight:500">/ 100</text>' +
      '</svg>' +
      '<div class="wca-ring-label">' + category + '</div>' +
      '<span class="wca-ring-pill" style="background:' + sl.color + '18;color:' + sl.color + '">' + sl.label + '</span>' +
    '</div>';
  }

  /* ── Parse AI report ──────────────────────────────────────── */
  function parseReport(text) {
    var s = {};
    var patterns = {
      headline:  /1\.\s*HEADLINE[:\s]*([\s\S]*?)(?=2\.|$)/i,
      win:       /2\.\s*YOUR BIGGEST WIN[:\s]*([\s\S]*?)(?=3\.|$)/i,
      gap:       /3\.\s*THE CRITICAL GAP[:\s]*([\s\S]*?)(?=4\.|$)/i,
      quickwins: /4\.\s*THREE QUICK WINS[:\s]*([\s\S]*?)(?=5\.|$)/i,
      next:      /5\.\s*WHERE TO GO NEXT[:\s]*([\s\S]*?)$/i
    };
    Object.keys(patterns).forEach(function (k) {
      var m = text.match(patterns[k]);
      s[k]  = m ? m[1].trim() : '';
    });
    return s;
  }

  function renderReportSection(id, icon, title, content, titleColor) {
    if (!content) return;
    document.getElementById(id).innerHTML =
      '<div class="wca-report-section-header">' +
        '<span class="wca-report-section-icon">' + icon + '</span>' +
        '<h3 class="wca-report-section-title" style="color:' + titleColor + '">' + title + '</h3>' +
      '</div>' +
      '<div class="wca-report-section-body">' + content + '</div>';
  }

  /* ── AI call ──────────────────────────────────────────────── */
  function generateReport() {
    var answersText = QUESTIONS.map(function (q) {
      var a   = answers[q.id];
      var val = Array.isArray(a) ? a.join(', ') : a;
      var opt = q.options.filter(function (o) { return o.value === val; })[0];
      return q.label + ': ' + (opt ? opt.label : val);
    }).join('\n');

    var scoreText = CATEGORIES.map(function (c) {
      return c + ': ' + scores[c] + '%';
    }).join(', ');

    var prompt = 'You are a senior growth consultant at indieco, a boutique consultancy for founders. You\'ve just reviewed a website audit submission. Be direct, warm, specific, and actionable — like a trusted advisor, not a report generator.\n\n' +
      'Website URL: ' + siteUrl + '\n' +
      'Scores: ' + scoreText + '\n\n' +
      'Founder\'s answers:\n' + answersText + '\n\n' +
      'Write a Website Clarity Audit Report with these exact sections. Be specific to THEIR answers. No generic advice.\n\n' +
      '1. HEADLINE (one punchy sentence summarising their biggest opportunity — not a problem statement)\n' +
      '2. YOUR BIGGEST WIN (what they\'re already doing well — be genuine, 2-3 sentences)\n' +
      '3. THE CRITICAL GAP (the single most important thing holding them back — be direct, 3-4 sentences)\n' +
      '4. THREE QUICK WINS (concrete actions they can take in the next 30 days — numbered list, each 1-2 sentences)\n' +
      '5. WHERE TO GO NEXT (a recommendation for which indieco service fits their situation — choose from: Website Redesign, Brand Building, Go-to-Market Strategy, Lead Gen Funnel, or Founder Intensive)\n\n' +
      'Keep the entire report under 350 words. Tone: warm, direct, experienced. Write as if speaking to them personally. Use "you" throughout. No jargon.';

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
    .then(function (data) {
      return (data.content || []).map(function (b) { return b.text || ''; }).join('\n');
    });
  }

  /* ── Netlify form submit ──────────────────────────────────── */
  function submitNetlifyForm(name, email, whatsapp) {
    try {
      var overall = Math.round(
        CATEGORIES.reduce(function (sum, c) { return sum + (scores[c] || 0); }, 0) / CATEGORIES.length
      );
      document.getElementById('nf-url').value        = siteUrl;
      document.getElementById('nf-name').value       = name;
      document.getElementById('nf-email').value      = email;
      document.getElementById('nf-whatsapp').value   = whatsapp;
      document.getElementById('nf-overall').value    = overall;
      document.getElementById('nf-positioning').value= scores['Positioning']         || 0;
      document.getElementById('nf-conversion').value = scores['Conversion Readiness'] || 0;
      document.getElementById('nf-leadflow').value   = scores['Lead Flow']            || 0;
      document.getElementById('nf-brand').value      = scores['Brand Coherence']      || 0;
      document.getElementById('nf-answers').value    = JSON.stringify(answers);

      var form = document.getElementById('wca-netlify-form');
      fetch('/', { method: 'POST', body: new FormData(form) });
    } catch (e) {
      console.warn('Netlify form error:', e);
    }
  }

  /* ── Loading messages ─────────────────────────────────────── */
  function startLoadMessages() {
    var msgs = [
      'Analysing your answers…',
      'Mapping your conversion gaps…',
      'Identifying quick wins…',
      'Crafting your personalised report…'
    ];
    var i  = 0;
    var el = document.getElementById('wca-load-msg');
    loadTimer = setInterval(function () {
      i = (i + 1) % msgs.length;
      el.textContent = msgs[i];
    }, 2200);
  }

  /* ── Render report ────────────────────────────────────────── */
  function renderReport(reportText) {
    var sections = parseReport(reportText);
    var overall  = Math.round(
      CATEGORIES.reduce(function (sum, c) { return sum + (scores[c] || 0); }, 0) / CATEGORIES.length
    );
    var sl = scoreLabel(overall);

    document.getElementById('r-overall-num').textContent = overall;
    document.getElementById('r-url').textContent         = 'Audit for: ' + siteUrl;

    var badge = document.getElementById('r-overall-badge');
    badge.textContent        = sl.label;
    badge.style.background   = sl.color + '22';
    badge.style.border       = '1px solid ' + sl.color + '44';
    badge.style.color        = sl.color;

    if (sections.headline) {
      document.getElementById('r-headline').textContent = '\u201c' + sections.headline + '\u201d';
    }

    document.getElementById('r-rings').innerHTML =
      CATEGORIES.map(function (c) { return buildRing(scores[c] || 0, c); }).join('');

    renderReportSection('r-win',       '\u2726', 'Your Biggest Win', sections.win,       '#10b981');
    renderReportSection('r-gap',       '\u25C8', 'The Critical Gap', sections.gap,       '#1c1917');
    renderReportSection('r-quickwins', '\u2192', 'Three Quick Wins', sections.quickwins, '#2d3a8c');
    renderReportSection('r-next',      '\u25C6', 'Where to Go Next', sections.next,      '#2d3a8c');

    showScreen('report');
  }

  var FALLBACK_REPORT = '1. HEADLINE\nYour website has clear opportunities to convert more visitors into leads.\n2. YOUR BIGGEST WIN\nYou\'ve taken the first step by seeking clarity — that already puts you ahead of most founders who never audit their own site.\n3. THE CRITICAL GAP\nWithout seeing the full AI analysis, the best next step is a direct conversation. Book a call and Leon will walk through your scores personally.\n4. THREE QUICK WINS\n1. Ensure your homepage has one clear CTA above the fold with no competing links.\n2. Add at least one client testimonial that includes a specific, measurable result.\n3. Set up a simple auto-reply email for every form submission so no lead goes cold.\n5. WHERE TO GO NEXT\nBook a free strategy call to get your fully personalised recommendations based on your scores.';

  /* ── Event listeners ──────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {

    // Start
    document.getElementById('btn-start').addEventListener('click', function () {
      var val = document.getElementById('wca-url').value.trim();
      var err = document.getElementById('wca-url-error');
      if (!val || !isValidUrl(val)) { err.classList.add('visible'); return; }
      err.classList.remove('visible');
      siteUrl  = val;
      currentQ = 0;
      answers  = {};
      renderQuestion();
      showScreen('questions');
    });

    document.getElementById('wca-url').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') document.getElementById('btn-start').click();
    });

    // Next
    document.getElementById('btn-next').addEventListener('click', function () {
      if (currentQ < QUESTIONS.length - 1) {
        currentQ++;
        renderQuestion();
      } else {
        showScreen('capture');
      }
    });

    // Back
    document.getElementById('btn-back').addEventListener('click', function () {
      if (currentQ > 0) { currentQ--; renderQuestion(); }
      else { showScreen('intro'); }
    });

    // Generate
    document.getElementById('btn-generate').addEventListener('click', function () {
      var name     = document.getElementById('cap-name').value.trim();
      var email    = document.getElementById('cap-email').value.trim();
      var whatsapp = document.getElementById('cap-whatsapp').value.trim();
      var errEl    = document.getElementById('cap-error');
      var emailOk  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk) { errEl.classList.add('visible'); return; }
      errEl.classList.remove('visible');

      scores = computeScores();
      submitNetlifyForm(name, email, whatsapp);
      showScreen('generating');
      startLoadMessages();

      generateReport()
        .then(function (text) {
          clearInterval(loadTimer);
          renderReport(text);
        })
        .catch(function () {
          clearInterval(loadTimer);
          renderReport(FALLBACK_REPORT);
        });
    });

  });

})();
