// ===== Assam MLA Campaign Scorecard =====

const mlaQuestions = [
  // CONSTITUENCY INTELLIGENCE (Q1-4)
  {
    id: 1, category: "intelligence",
    en: "Do you have a booth-level voter map — identifying strong, soft, swing, and opposition supporters?",
    as: "আপোনাৰ কাছত বুথ-স্তৰৰ ভোটাৰ মেপ আছেনে — শক্তিশালী, দুৰ্বল, দোদুল্যমান আৰু বিৰোধী সমৰ্থকসকলক চিনাক্ত কৰি?",
    options: [
      { en: "No — we have no systematic booth data", as: "নাই — আমাৰ কোনো বুথ তথ্য নাই", score: 0 },
      { en: "We have voter lists but no political intelligence layered in", as: "আমাৰ ভোটাৰ তালিকা আছে কিন্তু ৰাজনৈতিক তথ্য যোগ কৰা হোৱা নাই", score: 1 },
      { en: "We have some booth data but gaps remain across clusters", as: "কিছু বুথ তথ্য আছে কিন্তু বহু এলেকাত ফাঁক আছে", score: 2 },
      { en: "Yes — every booth is mapped with political lean and swing count", as: "হয় — প্ৰতিটো বুথৰ ৰাজনৈতিক ঝোঁক আৰু দোদুল্যমান ভোটৰ সংখ্যা মেপ কৰা আছে", score: 3 }
    ]
  },
  {
    id: 2, category: "intelligence",
    en: "How well do you understand the primary grievances of voters in each village cluster?",
    as: "প্ৰতিটো গাঁৱৰ মূল অভিযোগসমূহ আপুনি কিমান ভালদৰে জানে?",
    options: [
      { en: "We rely on general assumptions — no structured data", as: "সাধাৰণ ধাৰণাৰ উপৰত নিৰ্ভৰশীল — কোনো তথ্য নাই", score: 0 },
      { en: "We hear feedback at rallies but haven't mapped it systematically", as: "ৰেলিত মতামত পাওঁ কিন্তু পদ্ধতিগতভাৱে মেপ কৰা হোৱা নাই", score: 1 },
      { en: "We have a sense of key issues in most areas", as: "বেছিভাগ এলেকাৰ মূল সমস্যাসমূহ সম্পৰ্কে ধাৰণা আছে", score: 2 },
      { en: "Every cluster has documented grievances — our messaging is built on this", as: "প্ৰতিটো এলেকাৰ অভিযোগ লিপিবদ্ধ আছে — আমাৰ প্ৰচাৰ এই ভিত্তিতে তৈয়াৰ", score: 3 }
    ]
  },
  {
    id: 3, category: "intelligence",
    en: "Have you identified the community influencers in each village — teachers, ASHA workers, WhatsApp group admins, SHG leaders?",
    as: "প্ৰতিটো গাঁৱৰ সামাজিক প্ৰভাৱশালী মানুহ চিনাক্ত কৰিছেনে — শিক্ষক, আশা কৰ্মী, হোৱাটচআপ গ্ৰুপ এডমিন, স্বনিৰ্ভৰশীল গোষ্ঠীৰ নেতা?",
    options: [
      { en: "No — we haven't mapped local influencers", as: "নাই — স্থানীয় প্ৰভাৱশালীসকলক মেপ কৰা হোৱা নাই", score: 0 },
      { en: "We know some key names but it's not systematic", as: "কিছু গুৰুত্বপূৰ্ণ নাম জানো কিন্তু পদ্ধতিগত নহয়", score: 1 },
      { en: "Most villages have identified influencers in our network", as: "বেছিভাগ গাঁৱত আমাৰ নেটৱৰ্কত প্ৰভাৱশালী চিনাক্ত আছে", score: 2 },
      { en: "Full influencer map built — they are active in our campaign structure", as: "সম্পূৰ্ণ প্ৰভাৱশালী মেপ তৈয়াৰ — তেওঁলোক সক্ৰিয়ভাৱে প্ৰচাৰত যুক্ত", score: 3 }
    ]
  },
  {
    id: 4, category: "intelligence",
    en: "Do you know specifically which booths you lost in 2021 and why?",
    as: "২০২১ চনত কোন বুথত হাৰিছিলে আৰু কিয় — এইটো আপুনি নিৰ্দিষ্টভাৱে জানেনে?",
    options: [
      { en: "No — we haven't done a post-2021 booth analysis", as: "নাই — ২০২১ৰ পিছত বুথ বিশ্লেষণ কৰা হোৱা নাই", score: 0 },
      { en: "We have a rough idea of where we underperformed", as: "ক'ত দুৰ্বল আছিলো সেইটো মোটামুটি জানো", score: 1 },
      { en: "We've analysed 2021 results and identified swing booths", as: "২০২১ৰ ফলাফল বিশ্লেষণ কৰি দোদুল্যমান বুথ চিনাক্ত কৰিছো", score: 2 },
      { en: "Full booth-by-booth loss analysis done — our 2026 strategy is built around recovering these votes", as: "বুথ-ভিত্তিক সম্পূৰ্ণ বিশ্লেষণ সম্পন্ন — ২০২৬ৰ কৌশল এই ভোট উদ্ধাৰৰ ওপৰত নিৰ্মিত", score: 3 }
    ]
  },
  // GROUND INFRASTRUCTURE (Q5-8)
  {
    id: 5, category: "infrastructure",
    en: "Do you have a trained volunteer in every village cluster — someone trusted locally, not parachuted in from outside?",
    as: "প্ৰতিটো গাঁৱৰ এলেকাত প্ৰশিক্ষিত স্বেচ্ছাসেৱক আছেনে — স্থানীয়ভাৱে বিশ্বাসযোগ্য মানুহ, বাহিৰৰ পৰা অনা নহয়?",
    options: [
      { en: "No — we don't have local-level volunteers deployed", as: "নাই — স্থানীয় স্তৰৰ স্বেচ্ছাসেৱক নাই", score: 0 },
      { en: "We have party workers but they are not village-specific or trained", as: "দলীয় কৰ্মী আছে কিন্তু গাঁও-নিৰ্দিষ্ট বা প্ৰশিক্ষিত নহয়", score: 1 },
      { en: "We have village contacts in most areas — training is inconsistent", as: "বেছিভাগ এলেকাত গাঁৱৰ যোগাযোগ আছে — প্ৰশিক্ষণ অসামঞ্জস্যপূৰ্ণ", score: 2 },
      { en: "One trained trusted local per cluster — they are the campaign's ground engine", as: "প্ৰতিটো এলেকাত এজন প্ৰশিক্ষিত বিশ্বাসযোগ্য স্থানীয় — তেওঁ প্ৰচাৰৰ মূল শক্তি", score: 3 }
    ]
  },
  {
    id: 6, category: "infrastructure",
    en: "How ready is your booth committee structure for polling day?",
    as: "ভোটদান দিৱসৰ বাবে আপোনাৰ বুথ কমিটি কিমান প্ৰস্তুত?",
    options: [
      { en: "We haven't formed booth committees yet", as: "এতিয়াও বুথ কমিটি গঠন কৰা হোৱা নাই", score: 0 },
      { en: "Some booths have committees — most do not", as: "কিছু বুথত কমিটি আছে — বেছিভাগত নাই", score: 1 },
      { en: "Most booths have committees — not all are fully active", as: "বেছিভাগ বুথত কমিটি আছে — সকলো সক্ৰিয় নহয়", score: 2 },
      { en: "Every booth has a 5-person committee — roles assigned, voters mapped, transport arranged", as: "প্ৰতিটো বুথত ৫ জনৰ কমিটি — দায়িত্ব বণ্টন, ভোটাৰ মেপিং, পৰিবহন ব্যৱস্থা সম্পন্ন", score: 3 }
    ]
  },
  {
    id: 7, category: "infrastructure",
    en: "Have you mapped which supporters need help getting to the booth on polling day — elderly, disabled, remote households?",
    as: "ভোটদান দিৱসত কোন সমৰ্থকক বুথলৈ যোৱাত সহায় লাগিব — বৃদ্ধ, প্ৰতিবন্ধী, দূৰৱৰ্তী পৰিয়াল — এইটো মেপ কৰিছেনে?",
    options: [
      { en: "No — we haven't mapped voter mobility needs", as: "নাই — ভোটাৰৰ চলাচলৰ প্ৰয়োজনীয়তা মেপ কৰা হোৱা নাই", score: 0 },
      { en: "We plan to arrange transport but have no specific list", as: "পৰিবহন ব্যৱস্থা কৰিবলৈ পৰিকল্পনা আছে কিন্তু নিৰ্দিষ্ট তালিকা নাই", score: 1 },
      { en: "We have a partial list of voters needing support", as: "সহায়ৰ প্ৰয়োজন হোৱা ভোটাৰৰ আংশিক তালিকা আছে", score: 2 },
      { en: "Every identified supporter who needs help is flagged — transport and escort confirmed", as: "সহায়ৰ প্ৰয়োজন হোৱা প্ৰতিজন চিনাক্ত সমৰ্থক চিহ্নিত — পৰিবহন আৰু সঙ্গ নিশ্চিত", score: 3 }
    ]
  },
  {
    id: 8, category: "infrastructure",
    en: "Do you have a war room — a central coordination hub tracking daily progress, flagging problems, and directing the candidate's time?",
    as: "আপোনাৰ এটা ৱাৰ ৰুম আছেনে — দৈনিক অগ্ৰগতি ট্ৰেক কৰা, সমস্যা চিনাক্ত কৰা আৰু প্ৰাৰ্থীৰ সময় নিৰ্দেশিত কৰা কেন্দ্ৰীয় সমন্বয় কেন্দ্ৰ?",
    options: [
      { en: "No — coordination is informal and reactive", as: "নাই — সমন্বয় অনানুষ্ঠানিক আৰু প্ৰতিক্ৰিয়াশীল", score: 0 },
      { en: "We have a core team but no structured daily process", as: "মূল দল আছে কিন্তু পদ্ধতিগত দৈনিক প্ৰক্ৰিয়া নাই", score: 1 },
      { en: "We have a functioning team — data tracking is partial", as: "কাৰ্যকৰী দল আছে — তথ্য ট্ৰেকিং আংশিক", score: 2 },
      { en: "Full war room operational — daily briefings, live data, candidate schedule driven by booth intelligence", as: "সম্পূৰ্ণ ৱাৰ ৰুম সক্ৰিয় — দৈনিক ব্ৰিফিং, লাইভ তথ্য, বুথ ইন্টেলিজেন্সৰ দ্বাৰা প্ৰাৰ্থীৰ সময়সূচী নিৰ্ধাৰিত", score: 3 }
    ]
  },
  // SCHEME & DELIVERY NARRATIVE (Q9-11)
  {
    id: 9, category: "scheme",
    en: "How actively has your campaign enrolled women in Orunodoi — Assam's ₹1,250/month flagship scheme?",
    as: "অসমৰ ₹১,২৫০/মাহৰ প্ৰধান আঁচনি অৰুণোদইত মহিলাসকলক নথিভুক্ত কৰাত আপোনাৰ প্ৰচাৰ কিমান সক্ৰিয়?",
    options: [
      { en: "We haven't focused on Orunodoi enrollment specifically", as: "অৰুণোদই নথিভুক্তিত বিশেষভাৱে মনোযোগ দিয়া হোৱা নাই", score: 0 },
      { en: "We mention it at events but haven't run a systematic enrollment drive", as: "অনুষ্ঠানত উল্লেখ কৰো কিন্তু পদ্ধতিগত নথিভুক্তি অভিযান চলোৱা হোৱা নাই", score: 1 },
      { en: "We have helped some households enroll — not constituency-wide", as: "কিছু পৰিয়ালক নথিভুক্ত কৰাত সহায় কৰিছো — সমগ্ৰ সমষ্টিত নহয়", score: 2 },
      { en: "Systematic Orunodoi enrollment drive running — tracking every unenrolled eligible woman", as: "পদ্ধতিগত অৰুণোদই নথিভুক্তি অভিযান চলি আছে — প্ৰতিজন যোগ্য মহিলাক ট্ৰেক কৰা হৈছে", score: 3 }
    ]
  },
  {
    id: 10, category: "scheme",
    en: "Do you have documented proof of scheme delivery — real families who received benefits through your campaign's work?",
    as: "আঁচনি প্ৰদানৰ নথিভুক্ত প্ৰমাণ আছেনে — আপোনাৰ প্ৰচাৰৰ মাধ্যমত সুবিধা পোৱা প্ৰকৃত পৰিয়াল?",
    options: [
      { en: "No — we haven't systematically documented delivery outcomes", as: "নাই — প্ৰদানৰ ফলাফল পদ্ধতিগতভাৱে নথিভুক্ত কৰা হোৱা নাই", score: 0 },
      { en: "We know of some cases but they aren't documented or shared", as: "কিছু ক্ষেত্ৰ জানো কিন্তু নথিভুক্ত বা শ্বেয়াৰ কৰা হোৱা নাই", score: 1 },
      { en: "We have some success stories — not yet at scale for WhatsApp distribution", as: "কিছু সফলতাৰ গল্প আছে — হোৱাটচআপ বিতৰণৰ বাবে যথেষ্ট পৰিমাণে নাই", score: 2 },
      { en: "25+ documented beneficiary stories actively circulating on WhatsApp across the constituency", as: "২৫+ নথিভুক্ত উপকাৰভোগীৰ গল্প সমগ্ৰ সমষ্টিৰ হোৱাটচআপত সক্ৰিয়ভাৱে প্ৰচাৰিত", score: 3 }
    ]
  },
  {
    id: 11, category: "scheme",
    en: "Has the candidate directly addressed the 2021 result — acknowledging absence and demonstrating what has changed?",
    as: "প্ৰাৰ্থীয়ে ২০২১ৰ ফলাফল সম্পৰ্কে পোনপটীয়াকৈ মন্তব্য কৰিছেনে — অনুপস্থিতি স্বীকাৰ কৰি কি পৰিৱৰ্তন হৈছে তা দেখাইছেনে?",
    options: [
      { en: "No — we avoid talking about 2021", as: "নাই — ২০২১ সম্পৰ্কে আলোচনা এৰাই চলো", score: 0 },
      { en: "The candidate has mentioned it briefly — not a structured narrative", as: "প্ৰাৰ্থীয়ে চমুকৈ উল্লেখ কৰিছে — পদ্ধতিগত বৰ্ণনা নহয়", score: 1 },
      { en: "We have a clear accountability message — not yet delivered as a signature campaign moment", as: "স্পষ্ট জবাবদিহিতাৰ বাৰ্তা আছে — প্ৰচাৰৰ মূল মুহূৰ্ত হিচাপে প্ৰদান কৰা হোৱা নাই", score: 2 },
      { en: "Strong accountability narrative deployed — video in Assamese, numbers shared, voters are hearing it", as: "শক্তিশালী জবাবদিহিতাৰ বৰ্ণনা প্ৰয়োগ — অসমীয়াত ভিডিঅ', সংখ্যা শ্বেয়াৰ, ভোটাৰসকলে শুনিছে", score: 3 }
    ]
  },
  // CAMPAIGN READINESS (Q12-13)
  {
    id: 12, category: "readiness",
    en: "How strong is your WhatsApp network across the constituency — village groups, voice notes, trusted distributors?",
    as: "সমষ্টিত আপোনাৰ হোৱাটচআপ নেটৱৰ্ক কিমান শক্তিশালী — গাঁৱৰ গ্ৰুপ, ভয়চ নোট, বিশ্বাসযোগ্য বিতৰণকাৰী?",
    options: [
      { en: "Minimal — we post on a few groups but reach is limited", as: "সামান্য — কিছু গ্ৰুপত পোষ্ট কৰো কিন্তু নাগাল সীমিত", score: 0 },
      { en: "We have some groups but content isn't consistent or strategic", as: "কিছু গ্ৰুপ আছে কিন্তু বিষয়বস্তু সামঞ্জস্যপূৰ্ণ বা কৌশলগত নহয়", score: 1 },
      { en: "Good WhatsApp reach in most areas — voice notes used occasionally", as: "বেছিভাগ এলেকাত ভাল হোৱাটচআপ নাগাল — কেতিয়াবা ভয়চ নোট ব্যৱহাৰ", score: 2 },
      { en: "300+ mapped village groups with trusted admins — daily content in Assamese, voice-first", as: "৩০০+ মেপ কৰা গাঁৱৰ গ্ৰুপ বিশ্বাসযোগ্য এডমিনসহ — অসমীয়াত দৈনিক বিষয়বস্তু, ভয়চ-প্ৰথম", score: 3 }
    ]
  },
  {
    id: 13, category: "readiness",
    en: "How clearly is the candidate positioned against the opponent — what is the specific contrast voters in this constituency will decide on?",
    as: "প্ৰতিদ্বন্দ্বীৰ বিপৰীতে প্ৰাৰ্থীৰ অৱস্থান কিমান স্পষ্ট — এই সমষ্টিৰ ভোটাৰসকল কোন নিৰ্দিষ্ট পার্থক্যৰ ভিত্তিত সিদ্ধান্ত ল'ব?",
    options: [
      { en: "No clear contrast defined — we're running a general pro-candidate campaign", as: "কোনো স্পষ্ট পার্থক্য নিৰ্ধাৰিত নাই — সাধাৰণ প্ৰাৰ্থী-সমৰ্থক প্ৰচাৰ চলাইছো", score: 0 },
      { en: "We have a sense of the contrast but it's not consistently communicated", as: "পার্থক্যৰ ধাৰণা আছে কিন্তু ধাৰাবাহিকভাৱে যোগাযোগ কৰা হোৱা নাই", score: 1 },
      { en: "Clear contrast messaging exists — not yet deployed at ground level", as: "স্পষ্ট পার্থক্যৰ বাৰ্তা আছে — এতিয়াও মাটি পৰ্যায়ত প্ৰয়োগ হোৱা নাই", score: 2 },
      { en: "Sharp, specific contrast defined and in every volunteer's mouth — voters are hearing it at the well and tea stall", as: "তীক্ষ্ণ, নিৰ্দিষ্ট পার্থক্য নিৰ্ধাৰিত আৰু প্ৰতিজন স্বেচ্ছাসেৱকৰ মুখত — ভোটাৰসকলে নলা আৰু চাহৰ দোকানত শুনিছে", score: 3 }
    ]
  },
  // QUALIFIER QUESTIONS (Q14-15)
  {
    id: 14, category: "qualifier",
    en: "How many months are left until polling day in your constituency?",
    as: "আপোনাৰ সমষ্টিত ভোটদান দিৱসলৈ কিমান মাহ বাকী আছে?",
    qualifier: true,
    options: [
      { en: "More than 12 months", as: "১২ মাহতকৈ বেছি", qualifier_value: "no" },
      { en: "6–12 months", as: "৬–১২ মাহ", qualifier_value: "no" },
      { en: "3–6 months — the window is open but closing", as: "৩–৬ মাহ — সুযোগ আছে কিন্তু সংকুচিত হৈ আহিছে", qualifier_value: "yes" },
      { en: "Under 3 months — we are in the campaign now", as: "৩ মাহৰ তলত — আমি এতিয়া প্ৰচাৰৰ মাজত আছো", qualifier_value: "yes" }
    ]
  },
  {
    id: 15, category: "qualifier",
    en: "Are you open to bringing in professional campaign strategy and infrastructure support for 2026?",
    as: "২০২৬ৰ বাবে পেছাদাৰী প্ৰচাৰ কৌশল আৰু পৰিকাঠামো সহায়তা আনিবলৈ আপুনি প্ৰস্তুতনে?",
    qualifier: true,
    options: [
      { en: "Not at this stage — exploring options", as: "এই পৰ্যায়ত নহয় — বিকল্প অন্বেষণ কৰিছো", qualifier_value: "no" },
      { en: "Possibly — depends on scope and budget", as: "সম্ভৱতঃ — পৰিধি আৰু বাজেটৰ ওপৰত নিৰ্ভৰ কৰে", qualifier_value: "no" },
      { en: "Yes — open to a conversation about what's possible", as: "হয় — কি সম্ভৱ তাৰ বিষয়ে কথোপকথনৰ বাবে উন্মুক্ত", qualifier_value: "yes" },
      { en: "Yes — this is a priority and we need to move quickly", as: "হয় — এইটো অগ্ৰাধিকাৰ আৰু আমাক দ্ৰুতগতিত আগবাঢ়িব লাগিব", qualifier_value: "yes" }
    ]
  }
];

// State
let mlaCurrentQ = 0;
let mlaScores = { intelligence: 0, infrastructure: 0, scheme: 0, readiness: 0 };
let mlaMaxScores = { intelligence: 12, infrastructure: 12, scheme: 9, readiness: 6 };
let mlaAnswers = [];
let mlaQualifierTimeline = "no";
let mlaQualifierOpen = "no";

function mlaStart() {
  document.getElementById('mla-intro').style.display = 'none';
  document.getElementById('mla-questions').style.display = 'block';
  mlaShowQuestion();
}

function mlaShowQuestion() {
  const q = mlaQuestions[mlaCurrentQ];
  const total = mlaQuestions.length;
  const progress = (mlaCurrentQ / total) * 100;
  document.getElementById('mla-progress-fill').style.width = progress + '%';

  const optionsHTML = q.options.map((opt, i) => `
    <button class="option-btn" onclick="mlaSelectOption(${i})">
      <span class="option-text">
        ${opt.en}
        <span class="option-assamese">${opt.as}</span>
      </span>
    </button>
  `).join('');

  document.getElementById('mla-question-container').innerHTML = `
    <div class="question-number">Question ${mlaCurrentQ + 1} of ${total}</div>
    <div class="question-text">
      ${q.en}
      <div class="question-assamese">${q.as}</div>
    </div>
    <div class="options">${optionsHTML}</div>
  `;
}

function mlaSelectOption(optionIndex) {
  const q = mlaQuestions[mlaCurrentQ];
  const opt = q.options[optionIndex];

  mlaAnswers.push({ question: q.en, answer: opt.en, category: q.category });

  if (q.qualifier) {
    if (q.id === 14) mlaQualifierTimeline = opt.qualifier_value;
    if (q.id === 15) mlaQualifierOpen = opt.qualifier_value;
  } else {
    mlaScores[q.category] += opt.score;
  }

  mlaCurrentQ++;

  if (mlaCurrentQ < mlaQuestions.length) {
    mlaShowQuestion();
  } else {
    document.getElementById('mla-progress-fill').style.width = '100%';
    document.getElementById('mla-questions').style.display = 'none';
    document.getElementById('mla-email-capture').style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('mla-email-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('mla-cap-name').value.trim();
      const email = document.getElementById('mla-cap-email').value.trim();
      const constituency = document.getElementById('mla-cap-constituency').value.trim();
      const phone = document.getElementById('mla-cap-phone').value.trim();

      const totalScore = mlaScores.intelligence + mlaScores.infrastructure + mlaScores.scheme + mlaScores.readiness;
      const maxTotal = 39;
      const qualifies = mlaQualifierTimeline === "yes" && mlaQualifierOpen === "yes";

      document.getElementById('mla-nf-name').value = name;
      document.getElementById('mla-nf-email').value = email;
      document.getElementById('mla-nf-constituency').value = constituency;
      document.getElementById('mla-nf-phone').value = phone;
      document.getElementById('mla-nf-score').value = totalScore;
      document.getElementById('mla-nf-qualifies').value = qualifies ? "yes" : "no";
      document.getElementById('mla-nf-answers').value = JSON.stringify(mlaAnswers);

      document.getElementById('mla-email-capture').style.display = 'none';
      document.getElementById('mla-generating').style.display = 'block';

      const formData = new FormData(form);
      fetch('/', { method: 'POST', body: formData }).catch(() => {});

      mlaGenerateReport(name, constituency, totalScore, maxTotal, qualifies);
    });
  }
});

async function mlaGenerateReport(name, constituency, totalScore, maxTotal, qualifies) {
  const msgs = [
    "Analysing your campaign intelligence…",
    "Identifying your critical vulnerabilities…",
    "Building your 2026 battle plan…"
  ];
  let mi = 0;
  const loadEl = document.getElementById('mla-load-msg');
  const interval = setInterval(() => {
    mi = (mi + 1) % msgs.length;
    if (loadEl) loadEl.textContent = msgs[mi];
  }, 2000);

  const scorePercent = Math.round((totalScore / maxTotal) * 100);
  const intPct = Math.round((mlaScores.intelligence / mlaMaxScores.intelligence) * 100);
  const infPct = Math.round((mlaScores.infrastructure / mlaMaxScores.infrastructure) * 100);
  const schPct = Math.round((mlaScores.scheme / mlaMaxScores.scheme) * 100);
  const rdyPct = Math.round((mlaScores.readiness / mlaMaxScores.readiness) * 100);

  const resultTier = scorePercent >= 70 ? "Strong Contender" :
                     scorePercent >= 50 ? "Competitive but Vulnerable" :
                     scorePercent >= 30 ? "Significant Gaps — Act Now" :
                     "Campaign at Risk — Immediate Action Required";

  const prompt = `You are an expert political campaign strategist specialising in Assam Legislative Assembly (MLA) elections. Analyse this campaign audit and write a concise, direct, and urgent report. The 2026 Assam assembly elections are the hard deadline. Every recommendation must account for the time-sensitive nature of Indian election campaigns.

Campaign tier: ${resultTier}
Overall score: ${scorePercent}% (${totalScore}/${maxTotal})

Dimension scores:
- Constituency Intelligence: ${intPct}%
- Ground Infrastructure: ${infPct}%
- Scheme & Delivery Narrative: ${schPct}%
- Campaign Readiness: ${rdyPct}%

Their answers:
${mlaAnswers.map(a => `- ${a.question}: "${a.answer}"`).join('\n')}

Write a report using EXACTLY these XML tags:
<verdict>One hard-hitting sentence capturing the campaign's current position — use the tone of a trusted strategist, not a consultant pitching work. Max 15 words.</verdict>
<strength>Their single biggest campaign asset right now. 2 sentences. Be specific to their answers.</strength>
<critical_gap>The one gap most likely to cost them the election if unaddressed. 2 sentences. Be direct — no softening.</critical_gap>
<actions>3 specific actions they must take in the next 30 days. Assam-context specific — reference Orunodoi, booth management, WhatsApp voice notes, or constituency intelligence as relevant. Each on a new line starting with a number.</actions>
<urgency>One sentence about the time pressure — reference the 2026 Assam election timeline specifically.</urgency>

Be a strategist, not a coach. Speak to someone who understands Assam politics.`;

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
    mlaShowResult(text, totalScore, maxTotal, scorePercent, intPct, infPct, schPct, rdyPct, qualifies, resultTier);
  } catch (err) {
    clearInterval(interval);
    mlaShowResult(null, totalScore, maxTotal, scorePercent, intPct, infPct, schPct, rdyPct, qualifies, resultTier);
  }
}

function mlaParseReport(text, tag) {
  const match = text.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
  return match ? match[1].trim() : "";
}

function mlaShowResult(text, totalScore, maxTotal, scorePercent, intPct, infPct, schPct, rdyPct, qualifies, resultTier) {
  document.getElementById('mla-generating').style.display = 'none';
  document.getElementById('mla-result').style.display = 'block';

  let verdict, strength, critical_gap, actions, urgency;
  if (text) {
    verdict = mlaParseReport(text, "verdict");
    strength = mlaParseReport(text, "strength");
    critical_gap = mlaParseReport(text, "critical_gap");
    actions = mlaParseReport(text, "actions");
    urgency = mlaParseReport(text, "urgency");
  }

  const tierColor = scorePercent >= 70 ? "#16a34a" : scorePercent >= 50 ? "#d97706" : scorePercent >= 30 ? "#dc2626" : "#7f1d1d";
  const tierBg = scorePercent >= 70 ? "#f0fdf4" : scorePercent >= 50 ? "#fffbeb" : scorePercent >= 30 ? "#fef2f2" : "#fef2f2";
  const tierBorder = scorePercent >= 70 ? "#bbf7d0" : scorePercent >= 50 ? "#fde68a" : scorePercent >= 30 ? "#fecaca" : "#fca5a5";

  const ctaHTML = qualifies
    ? `<div style="background:linear-gradient(135deg,#1e2766,#2d3a8c);border-radius:12px;padding:2rem;text-align:center;margin-top:2rem;border:1px solid rgba(255,153,51,0.3)">
        <p style="color:#FF9933;font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:0.5rem">⚡ Your Window Is Closing</p>
        <h3 style="color:#fff;font-family:var(--font-display);font-size:1.375rem;margin-bottom:0.75rem">Let's build your 2026 campaign together</h3>
        <p style="color:rgba(255,255,255,0.75);font-size:0.9375rem;margin-bottom:1.5rem">A one-hour strategy conversation. No obligations. Just clarity on what it takes to win in 2026.</p>
        <a href="https://cal.id/leon/discovery-call" target="_blank" rel="noopener" class="btn btn-secondary" style="display:inline-block">Book a Strategy Call →</a>
      </div>`
    : `<div style="background:linear-gradient(135deg,#1e2766,#2d3a8c);border-radius:12px;padding:2rem;text-align:center;margin-top:2rem">
        <p style="color:#FF9933;font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:0.5rem">Free Resource</p>
        <h3 style="color:#fff;font-family:var(--font-display);font-size:1.375rem;margin-bottom:0.75rem">Assam MLA Campaign Checklist</h3>
        <p style="color:rgba(255,255,255,0.75);font-size:0.9375rem;margin-bottom:1.5rem">The 40-point pre-election checklist used by winning campaigns in Assam. Free download.</p>
        <a href="/products/" class="btn btn-secondary" style="display:inline-block">Download Free Checklist →</a>
      </div>`;

  const actionsHTML = actions
    ? actions.split('\n').filter(l => l.trim()).map(line =>
        `<div style="display:flex;gap:14px;margin-bottom:1rem;align-items:flex-start">
          <span style="background:#FF9933;color:#fff;font-weight:700;font-size:0.75rem;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px">${line.charAt(0)}</span>
          <span style="color:#1c1917;font-size:0.9375rem;line-height:1.6">${line.replace(/^[0-9]+\.\s*/, '')}</span>
        </div>`
      ).join('')
    : '';

  document.getElementById('mla-result-card').innerHTML = `
    <div style="text-align:center;margin-bottom:2rem">
      <div style="font-size:0.6875rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#FF9933;background:rgba(255,153,51,0.1);padding:4px 14px;border-radius:3px;display:inline-block;margin-bottom:1rem">2026 Campaign Audit Report</div>
      <div style="background:${tierBg};border:1px solid ${tierBorder};border-radius:8px;padding:1rem 1.5rem;display:inline-block;margin-bottom:1rem">
        <p style="color:${tierColor};font-weight:700;font-size:1rem;margin:0">${resultTier}</p>
      </div>
      ${verdict ? `<h2 style="font-family:var(--font-display);font-size:1.375rem;color:#1c1917;line-height:1.4">"${verdict}"</h2>` : ''}
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.875rem;margin-bottom:2rem">
      ${[
        { label: "Overall", pct: scorePercent },
        { label: "Constituency Intel", pct: intPct },
        { label: "Ground Infrastructure", pct: infPct },
        { label: "Scheme Narrative", pct: schPct },
        { label: "Campaign Readiness", pct: rdyPct }
      ].map(s => {
        const c = s.pct >= 70 ? "#16a34a" : s.pct >= 40 ? "#d97706" : "#dc2626";
        return `<div style="background:#f5f5f4;border-radius:8px;padding:1rem">
          <div style="font-size:0.6875rem;font-weight:600;color:#78716c;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.4rem">${s.label}</div>
          <div style="font-size:1.5rem;font-weight:700;color:${c};margin-bottom:0.4rem">${s.pct}%</div>
          <div style="background:#e7e5e4;border-radius:99px;height:4px">
            <div style="background:${c};width:${s.pct}%;height:4px;border-radius:99px;transition:width 0.6s ease"></div>
          </div>
        </div>`;
      }).join('')}
    </div>

    ${strength ? `<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:1.25rem;margin-bottom:1rem">
      <div style="font-size:0.6875rem;font-weight:700;color:#16a34a;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.5rem">✓ Your Campaign Asset</div>
      <p style="color:#1c1917;font-size:0.9375rem;line-height:1.6;margin:0">${strength}</p>
    </div>` : ''}

    ${critical_gap ? `<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:1.25rem;margin-bottom:1.5rem">
      <div style="font-size:0.6875rem;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.5rem">⚠ Critical Vulnerability</div>
      <p style="color:#1c1917;font-size:0.9375rem;line-height:1.6;margin:0">${critical_gap}</p>
    </div>` : ''}

    ${actions ? `<div style="margin-bottom:1.5rem">
      <div style="font-size:0.6875rem;font-weight:700;color:#2d3a8c;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:1rem">Next 30 Days — Non-Negotiable</div>
      ${actionsHTML}
    </div>` : ''}

    ${urgency ? `<div style="background:#1e2766;border-radius:8px;padding:1rem 1.25rem;margin-bottom:1.5rem;text-align:center">
      <p style="color:#FF9933;font-size:0.9375rem;font-weight:600;margin:0">⚡ ${urgency}</p>
    </div>` : ''}

    ${ctaHTML}
  `;
}
