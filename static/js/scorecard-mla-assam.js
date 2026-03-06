// ===== Assam MLA Campaign Scorecard — 20 Questions =====

const mlaQuestions = [
  // CONSTITUENCY INTELLIGENCE (Q1-5)
  {
    id: 1, category: "intelligence",
    en: "Do you have a booth-level voter map — identifying strong, soft, swing, and opposition supporters?",
    as: "আপোনাৰ লগত বুথ-স্তৰৰ ভোটাৰ মেপ আছেনে — শক্তিশালী, দুৰ্বল, দোদুল্যমান আৰু বিৰোধী সমৰ্থকসকলক চিনাক্ত কৰি?",
    options: [
      { en: "No — we have no systematic booth data", as: "নাই — আমাৰ কোনো বুথ তথ্য নাই", score: 0 },
      { en: "We have voter lists but no political intelligence layered in", as: "ভোটাৰ তালিকা আছে কিন্তু ৰাজনৈতিক তথ্য যোগ কৰা হোৱা নাই", score: 1 },
      { en: "We have some booth data but gaps remain across clusters", as: "কিছু বুথ তথ্য আছে কিন্তু বহু এলেকাত ফাঁক আছে", score: 2 },
      { en: "Yes — every booth is mapped with political lean and swing count", as: "হয় — প্ৰতিটো বুথৰ ৰাজনৈতিক ঝোঁক আৰু দোদুল্যমান ভোটৰ সংখ্যা মেপ কৰা আছে", score: 3 }
    ]
  },
  {
    id: 2, category: "intelligence",
    en: "Have you mapped swing voter households at the individual level — specific families who are undecided and can be personally contacted in the final two weeks?",
    as: "দোদুল্যমান ভোটাৰ পৰিয়ালসমূহ ব্যক্তিগত স্তৰত মেপ কৰিছেনে — যিসকল অনিশ্চিত আৰু শেষ দুসপ্তাহত ব্যক্তিগতভাৱে যোগাযোগ কৰিব পৰা যাব?",
    options: [
      { en: "No — we work at booth level, not household level", as: "নাই — আমি বুথ স্তৰত কাম কৰো, পৰিয়াল স্তৰত নহয়", score: 0 },
      { en: "We have a rough sense of swing areas but no household list", as: "দোদুল্যমান এলেকাৰ আভাস আছে কিন্তু পৰিয়ালৰ তালিকা নাই", score: 1 },
      { en: "We have partial household-level swing data in priority booths", as: "অগ্ৰাধিকাৰপ্ৰাপ্ত বুথত আংশিক পৰিয়াল-স্তৰৰ তথ্য আছে", score: 2 },
      { en: "Yes — swing households identified across the constituency, flagged for direct contact in the final stretch", as: "হয় — সমগ্ৰ সমষ্টিত দোদুল্যমান পৰিয়াল চিনাক্ত, শেষ পৰ্যায়ত প্ৰত্যক্ষ যোগাযোগৰ বাবে চিহ্নিত", score: 3 }
    ]
  },
  {
    id: 3, category: "intelligence",
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
    id: 4, category: "intelligence",
    en: "Have you identified the community influencers in each village — teachers, ASHA workers, WhatsApp group admins, SHG leaders?",
    as: "প্ৰতিটো গাঁৱৰ সামাজিক প্ৰভাৱশালী মানুহ চিনাক্ত কৰিছেনে — শিক্ষক, আশা কৰ্মী, হোৱাটচআপ গ্ৰুপ এডমিন, স্বনিৰ্ভৰশীল গোষ্ঠীৰ নেতা?",
    options: [
      { en: "No — we haven't mapped local influencers", as: "নাই — স্থানীয় প্ৰভাৱশালীসকলক মেপ কৰা হোৱা নাই", score: 0 },
      { en: "We know some key names but it's not systematic", as: "কিছু গুৰুত্বপূৰ্ণ নাম জানো কিন্তু পদ্ধতিগত নহয়", score: 1 },
      { en: "Most villages have identified influencers in our network", as: "বেছিভাগ গাঁৱত আমাৰ নেটৱৰ্কত প্ৰভাৱশালী চিনাক্ত আছে", score: 2 },
      { en: "Full influencer map built — they are active nodes in our campaign structure", as: "সম্পূৰ্ণ প্ৰভাৱশালী মেপ তৈয়াৰ — তেওঁলোক প্ৰচাৰ কাঠামোত সক্ৰিয়", score: 3 }
    ]
  },
  {
    id: 5, category: "intelligence",
    en: "Have you mapped the opponent's specific vulnerabilities — broken promises, delivery failures, absence from constituency — that can be used as contrast material at village level?",
    as: "প্ৰতিদ্বন্দ্বীৰ নিৰ্দিষ্ট দুৰ্বলতাসমূহ মেপ কৰিছেনে — ভঙা প্ৰতিশ্ৰুতি, প্ৰদান বিফলতা, সমষ্টিৰ পৰা অনুপস্থিতি — যি গাঁও স্তৰত বৈপৰীত্য হিচাপে ব্যৱহাৰ কৰিব পৰা যাব?",
    options: [
      { en: "No — we focus on our positives, not the opponent", as: "নাই — আমি আমাৰ ইতিবাচক দিকত গুৰুত্ব দিওঁ, প্ৰতিদ্বন্দ্বীত নহয়", score: 0 },
      { en: "We know the opponent's weaknesses broadly but haven't documented them", as: "প্ৰতিদ্বন্দ্বীৰ দুৰ্বলতা মোটামুটি জানো কিন্তু নথিভুক্ত কৰা হোৱা নাই", score: 1 },
      { en: "We have a clear picture of their failures — not yet deployed as village-level messaging", as: "তেওঁলোকৰ বিফলতাৰ স্পষ্ট চিত্ৰ আছে — গাঁও স্তৰৰ বাৰ্তা হিচাপে এতিয়াও প্ৰয়োগ হোৱা নাই", score: 2 },
      { en: "Documented opponent vulnerability map — every volunteer knows the contrast points and uses them", as: "নথিভুক্ত প্ৰতিদ্বন্দ্বী দুৰ্বলতা মেপ — প্ৰতিজন স্বেচ্ছাসেৱকে বৈপৰীত্য বিন্দু জানে আৰু ব্যৱহাৰ কৰে", score: 3 }
    ]
  },
  // GROUND INFRASTRUCTURE (Q6-10)
  {
    id: 6, category: "infrastructure",
    en: "Do you have a trained volunteer in every village cluster — someone trusted locally, not parachuted in from outside?",
    as: "প্ৰতিটো গাঁৱৰ এলেকাত প্ৰশিক্ষিত স্বেচ্ছাসেৱক আছেনে — স্থানীয়ভাৱে বিশ্বাসযোগ্য, বাহিৰৰ পৰা অনা নহয়?",
    options: [
      { en: "No — we don't have local-level volunteers deployed", as: "নাই — স্থানীয় স্তৰৰ স্বেচ্ছাসেৱক নাই", score: 0 },
      { en: "We have party workers but they are not village-specific or trained", as: "দলীয় কৰ্মী আছে কিন্তু গাঁও-নিৰ্দিষ্ট বা প্ৰশিক্ষিত নহয়", score: 1 },
      { en: "We have village contacts in most areas — training is inconsistent", as: "বেছিভাগ এলেকাত গাঁৱৰ যোগাযোগ আছে — প্ৰশিক্ষণ অসামঞ্জস্যপূৰ্ণ", score: 2 },
      { en: "One trained trusted local per cluster — they are the campaign's ground engine", as: "প্ৰতিটো এলেকাত এজন প্ৰশিক্ষিত বিশ্বাসযোগ্য স্থানীয় — তেওঁ প্ৰচাৰৰ মূল শক্তি", score: 3 }
    ]
  },
  {
    id: 7, category: "infrastructure",
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
    id: 8, category: "infrastructure",
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
    id: 9, category: "infrastructure",
    en: "Is your campaign ready for MCC — do you know what activities stop the moment the Model Code of Conduct is announced?",
    as: "আপোনাৰ প্ৰচাৰ এমচিচিৰ বাবে প্ৰস্তুতনে — আদৰ্শ আচৰণ বিধি ঘোষণা হোৱাৰ লগে লগে কোন কাৰ্যকলাপ বন্ধ হয় সেইটো জানেনে?",
    options: [
      { en: "Not really — we haven't planned around MCC restrictions", as: "সঁচাকৈয়ে নহয় — এমচিচিৰ বাধা-নিষেধ সম্পৰ্কে পৰিকল্পনা কৰা হোৱা নাই", score: 0 },
      { en: "We have a broad understanding but no specific MCC action plan", as: "সাধাৰণ ধাৰণা আছে কিন্তু নিৰ্দিষ্ট এমচিচি কাৰ্য পৰিকল্পনা নাই", score: 1 },
      { en: "We know the key restrictions — campaign activities are somewhat adjusted", as: "মূল বাধা-নিষেধ জানো — প্ৰচাৰ কাৰ্যকলাপ কিছু পৰিমাণে সমন্বয় কৰা হৈছে", score: 2 },
      { en: "Full MCC readiness — pre-MCC sprint planned, post-MCC compliant strategy locked", as: "সম্পূৰ্ণ এমচিচি প্ৰস্তুতি — এমচিচিৰ আগৰ স্প্ৰিন্ট পৰিকল্পিত, এমচিচিৰ পিছৰ সম্মত কৌশল নিশ্চিত", score: 3 }
    ]
  },
  {
    id: 10, category: "infrastructure",
    en: "Do you have a system to contact every identified supporter the day before and morning of polling — calls, WhatsApp reminders, personal visits?",
    as: "ভোটদানৰ আগদিনা আৰু সেইদিনা পুৱা প্ৰতিজন চিনাক্ত সমৰ্থকক যোগাযোগ কৰাৰ ব্যৱস্থা আছেনে — ফোন, হোৱাটচআপ স্মৰণিকা, ব্যক্তিগত ভিজিট?",
    options: [
      { en: "No — we rely on supporters to show up on their own", as: "নাই — সমৰ্থকসকল নিজে আহিব বুলি ভৰসা কৰো", score: 0 },
      { en: "We'll make calls on polling day but it's not systematic", as: "ভোটদান দিৱসত ফোন কৰিম কিন্তু পদ্ধতিগত নহয়", score: 1 },
      { en: "We have a partial reminder system — covering most priority booths", as: "আংশিক স্মৰণিকা ব্যৱস্থা আছে — বেছিভাগ অগ্ৰাধিকাৰ বুথ সামৰি লোৱা", score: 2 },
      { en: "Every supporter contacted the night before — booth agents confirm turnout by 10am on polling day", as: "আগদিনা ৰাতি প্ৰতিজন সমৰ্থকক যোগাযোগ — বুথ প্ৰতিনিধিয়ে ভোটদান দিৱসত ৰাৱিলে ১০ বজাত উপস্থিতি নিশ্চিত কৰে", score: 3 }
    ]
  },
  {
    id: 11, category: "infrastructure",
    en: "Do you have a war room — a central coordination hub tracking daily progress, flagging problems, and directing the candidate's time?",
    as: "আপোনাৰ এটা ৱাৰ ৰুম আছেনে — দৈনিক অগ্ৰগতি ট্ৰেক কৰা, সমস্যা চিনাক্ত কৰা আৰু প্ৰাৰ্থীৰ সময় নিৰ্দেশিত কৰা কেন্দ্ৰীয় সমন্বয় কেন্দ্ৰ?",
    options: [
      { en: "No — coordination is informal and reactive", as: "নাই — সমন্বয় অনানুষ্ঠানিক আৰু প্ৰতিক্ৰিয়াশীল", score: 0 },
      { en: "We have a core team but no structured daily process", as: "মূল দল আছে কিন্তু পদ্ধতিগত দৈনিক প্ৰক্ৰিয়া নাই", score: 1 },
      { en: "We have a functioning team — data tracking is partial", as: "কাৰ্যকৰী দল আছে — তথ্য ট্ৰেকিং আংশিক", score: 2 },
      { en: "Full war room operational — daily briefings, live data, candidate schedule driven by booth intelligence", as: "সম্পূৰ্ণ ৱাৰ ৰুম সক্ৰিয় — দৈনিক ব্ৰিফিং, লাইভ তথ্য, বুথ ইন্টেলিজেন্সৰ দ্বাৰা প্ৰাৰ্থীৰ সময়সূচী নিৰ্ধাৰিত", score: 3 }
    ]
  },
  // SCHEME & DELIVERY NARRATIVE (Q12-15)
  {
    id: 12, category: "scheme",
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
    id: 13, category: "scheme",
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
    id: 14, category: "scheme",
    en: "Do you have a specific strategy for tea garden worker voters — a community that often swings results in Assam constituencies?",
    as: "চাহ বাগিচাৰ শ্ৰমিক ভোটাৰসকলৰ বাবে নিৰ্দিষ্ট কৌশল আছেনে — অসমৰ সমষ্টিত প্ৰায়ে ফলাফল নিৰ্ধাৰণ কৰা এটা সম্প্ৰদায়?",
    options: [
      { en: "Not applicable — no tea gardens in my constituency", as: "প্ৰযোজ্য নহয় — মোৰ সমষ্টিত চাহ বাগিচা নাই", score: 2 },
      { en: "We treat them like any other voter group — no specific strategy", as: "আমি তেওঁলোকক অন্য যিকোনো ভোটাৰ গোটৰ দৰে ব্যৱহাৰ কৰো — নিৰ্দিষ্ট কৌশল নাই", score: 0 },
      { en: "We visit the gardens and hold meetings — no tailored messaging or scheme focus", as: "বাগিচা পৰিদৰ্শন কৰো আৰু সভা পাতো — উপযুক্ত বাৰ্তা বা আঁচনিৰ গুৰুত্ব নাই", score: 1 },
      { en: "Dedicated tea garden strategy — specific schemes, Assamese-language content, trusted community liaisons in place", as: "নিৰ্দিষ্ট চাহ বাগিচা কৌশল — নিৰ্দিষ্ট আঁচনি, অসমীয়া ভাষাৰ বিষয়বস্তু, বিশ্বাসযোগ্য সম্প্ৰদায় যোগসূত্ৰ স্থাপিত", score: 3 }
    ]
  },
  {
    id: 15, category: "scheme",
    en: "Do you have a first-time voter strategy — 18 to 21 year olds who have never voted before and are often the most overlooked segment?",
    as: "প্ৰথমবাৰ ভোটদানকাৰীৰ বাবে কৌশল আছেনে — ১৮ৰ পৰা ২১ বছৰৰ যুৱক-যুৱতী যিসকলে কেতিয়াও ভোট দিয়া নাই আৰু প্ৰায়ে সবচেয়ে অৱহেলিত?",
    options: [
      { en: "No — we haven't thought about first-time voters specifically", as: "নাই — প্ৰথমবাৰ ভোটদানকাৰীৰ বিষয়ে বিশেষভাৱে চিন্তা কৰা হোৱা নাই", score: 0 },
      { en: "We reach them through general rallies — no specific engagement", as: "সাধাৰণ ৰেলিৰ মাধ্যমত তেওঁলোকক সামৰি লওঁ — নিৰ্দিষ্ট সংলগ্নতা নাই", score: 1 },
      { en: "We have some youth-focused activities — not systematically tied to first-time voter list", as: "কিছু যুৱ-কেন্দ্ৰিক কাৰ্যকলাপ আছে — প্ৰথমবাৰ ভোটদানকাৰীৰ তালিকাৰ সৈতে পদ্ধতিগতভাৱে সংযুক্ত নহয়", score: 2 },
      { en: "First-time voter list extracted from electoral roll — personal outreach, peer mobilisation, specific messaging underway", as: "নিৰ্বাচনী তালিকাৰ পৰা প্ৰথমবাৰ ভোটদানকাৰীৰ তালিকা বাহিৰ কৰা হৈছে — ব্যক্তিগত যোগাযোগ, সমনীয়া সংগঠন, নিৰ্দিষ্ট বাৰ্তা চলি আছে", score: 3 }
    ]
  },
  // CAMPAIGN READINESS (Q16-19)
  {
    id: 16, category: "readiness",
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
    id: 17, category: "readiness",
    en: "How clearly is the candidate positioned against the opponent — what is the specific contrast voters in this constituency will decide on?",
    as: "প্ৰতিদ্বন্দ্বীৰ বিপৰীতে প্ৰাৰ্থীৰ অৱস্থান কিমান স্পষ্ট — এই সমষ্টিৰ ভোটাৰসকল কোন নিৰ্দিষ্ট পার্থক্যৰ ভিত্তিত সিদ্ধান্ত ল'ব?",
    options: [
      { en: "No clear contrast defined — running a general pro-candidate campaign", as: "কোনো স্পষ্ট পার্থক্য নিৰ্ধাৰিত নাই — সাধাৰণ প্ৰাৰ্থী-সমৰ্থক প্ৰচাৰ চলাইছো", score: 0 },
      { en: "We have a sense of the contrast but it's not consistently communicated", as: "পার্থক্যৰ ধাৰণা আছে কিন্তু ধাৰাবাহিকভাৱে যোগাযোগ কৰা হোৱা নাই", score: 1 },
      { en: "Clear contrast messaging exists — not yet deployed at ground level", as: "স্পষ্ট পার্থক্যৰ বাৰ্তা আছে — এতিয়াও মাটি পৰ্যায়ত প্ৰয়োগ হোৱা নাই", score: 2 },
      { en: "Sharp contrast defined and in every volunteer's mouth — voters are hearing it at the well and tea stall", as: "তীক্ষ্ণ পার্থক্য নিৰ্ধাৰিত আৰু প্ৰতিজন স্বেচ্ছাসেৱকৰ মুখত — ভোটাৰসকলে নলা আৰু চাহৰ দোকানত শুনিছে", score: 3 }
    ]
  },
  {
    id: 18, category: "readiness",
    en: "Do you have relationships with local Assamese media, YouTube news channels, and journalists who can amplify your story beyond paid advertising?",
    as: "স্থানীয় অসমীয়া মিডিয়া, ইউটিউব নিউজ চেনেল আৰু সাংবাদিকৰ সৈতে সম্পৰ্ক আছেনে যিসকলে পেইড বিজ্ঞাপনৰ বাহিৰত আপোনাৰ গল্প প্ৰচাৰ কৰিব পাৰে?",
    options: [
      { en: "No structured media relationships — we rely on paid ads", as: "কোনো পদ্ধতিগত মিডিয়া সম্পৰ্ক নাই — পেইড বিজ্ঞাপনৰ ওপৰত নিৰ্ভৰশীল", score: 0 },
      { en: "Some journalist contacts but no proactive media strategy", as: "কিছু সাংবাদিকৰ যোগাযোগ আছে কিন্তু সক্ৰিয় মিডিয়া কৌশল নাই", score: 1 },
      { en: "We have media contacts and get some coverage — not consistent or strategic", as: "মিডিয়া যোগাযোগ আছে আৰু কিছু কভাৰেজ পাওঁ — সামঞ্জস্যপূৰ্ণ বা কৌশলগত নহয়", score: 2 },
      { en: "Active media relationships — stories placed regularly, YouTube channels briefed, journalist network working for us", as: "সক্ৰিয় মিডিয়া সম্পৰ্ক — নিয়মিতভাৱে গল্প স্থাপিত, ইউটিউব চেনেল ব্ৰিফ কৰা, সাংবাদিক নেটৱৰ্ক আমাৰ বাবে কাম কৰিছে", score: 3 }
    ]
  },
  {
    id: 19, category: "readiness",
    en: "Is the candidate personally doing enough door-to-door contact in swing villages — or is campaign presence being delegated entirely to workers?",
    as: "প্ৰাৰ্থীয়ে দোদুল্যমান গাঁৱত ব্যক্তিগতভাৱে পৰ্যাপ্ত দুৱাৰে দুৱাৰে যোগাযোগ কৰিছেনে — নে প্ৰচাৰৰ উপস্থিতি সম্পূৰ্ণৰূপে কৰ্মীসকলক অৰ্পণ কৰা হৈছে?",
    options: [
      { en: "The candidate mostly attends rallies — door-to-door is left to workers", as: "প্ৰাৰ্থীয়ে বেছিভাগ ৰেলিত অংশগ্ৰহণ কৰে — দুৱাৰে দুৱাৰে কৰ্মীসকলৰ ওপৰত এৰি দিয়া হয়", score: 0 },
      { en: "The candidate does some door-to-door but not in a targeted, data-driven way", as: "প্ৰাৰ্থীয়ে কিছু দুৱাৰে দুৱাৰে কৰে কিন্তু লক্ষ্যভিত্তিক, তথ্য-চালিত উপায়ে নহয়", score: 1 },
      { en: "The candidate visits priority areas regularly — schedule partly driven by booth data", as: "প্ৰাৰ্থীয়ে নিয়মিতভাৱে অগ্ৰাধিকাৰ এলেকা পৰিদৰ্শন কৰে — সময়সূচী আংশিকভাৱে বুথ তথ্যৰ দ্বাৰা পৰিচালিত", score: 2 },
      { en: "Candidate's every day is allocated by war room data — swing villages, swing households, personal contact maximised", as: "যুদ্ধ কক্ষৰ তথ্যৰ দ্বাৰা প্ৰাৰ্থীৰ প্ৰতিটো দিন বৰাদ্দ — দোদুল্যমান গাঁও, দোদুল্যমান পৰিয়াল, ব্যক্তিগত যোগাযোগ সৰ্বাধিক", score: 3 }
    ]
  },
  // QUALIFIER QUESTIONS (Q20)
  {
    id: 20, category: "qualifier",
    en: "How many weeks are left until polling day in your constituency?",
    as: "আপোনাৰ সমষ্টিত ভোটদান দিৱসলৈ কিমান সপ্তাহ বাকী আছে?",
    qualifier: true,
    options: [
      { en: "More than 10 weeks", as: "১০ সপ্তাহতকৈ বেছি", qualifier_value: "no" },
      { en: "Around 10 weeks", as: "প্ৰায় ১০ সপ্তাহ", qualifier_value: "yes" },
      { en: "Around 8 weeks", as: "প্ৰায় ৮ সপ্তাহ", qualifier_value: "yes" },
      { en: "6 weeks or fewer — we are in the campaign now", as: "৬ সপ্তাহ বা তাৰ কম — আমি এতিয়া প্ৰচাৰৰ মাজত আছো", qualifier_value: "yes" }
    ]
  }
];

// State
let mlaCurrentQ = 0;
let mlaScores = { intelligence: 0, infrastructure: 0, scheme: 0, readiness: 0 };
let mlaMaxScores = { intelligence: 15, infrastructure: 18, scheme: 12, readiness: 12 };
let mlaAnswers = [];
let mlaQualifierTimeline = "no";

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
    if (q.id === 20) mlaQualifierTimeline = opt.qualifier_value;
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
      const maxTotal = 57;
      const qualifies = mlaQualifierTimeline === "yes";

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
  const intPct  = Math.round((mlaScores.intelligence   / mlaMaxScores.intelligence)   * 100);
  const infPct  = Math.round((mlaScores.infrastructure / mlaMaxScores.infrastructure) * 100);
  const schPct  = Math.round((mlaScores.scheme         / mlaMaxScores.scheme)         * 100);
  const rdyPct  = Math.round((mlaScores.readiness      / mlaMaxScores.readiness)      * 100);

  const resultTier = scorePercent >= 70 ? "Strong Contender" :
                     scorePercent >= 50 ? "Competitive but Vulnerable" :
                     scorePercent >= 30 ? "Significant Gaps — Act Now" :
                                          "Campaign at Risk — Immediate Action Required";

  const prompt = `You are an expert political campaign strategist specialising in Assam Legislative Assembly (MLA) elections. Analyse this campaign audit and write a concise, direct, urgent report. The 2026 Assam assembly elections are the hard deadline. Every recommendation must be grounded in the realities of rural Assam — low literacy, WhatsApp as primary media, Orunodoi as a key trust lever, tea garden communities, and the booth as the unit of election management.

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
<verdict>One hard-hitting sentence capturing the campaign's current position. Speak as a trusted strategist. Max 15 words.</verdict>
<strength>Their single biggest campaign asset right now. 2 sentences. Be specific to their answers.</strength>
<critical_gap>The one gap most likely to cost them the election if unaddressed. 2 sentences. Be direct — no softening.</critical_gap>
<actions>3 specific actions they must take in the next 30 days. Assam-specific — reference Orunodoi, booth management, MCC prep, WhatsApp voice notes, swing household contact, or tea garden strategy as relevant to their actual answers. Each on a new line starting with a number.</actions>
<urgency>One sentence about the time pressure — reference the 2026 Assam election window specifically.</urgency>

Be a strategist, not a motivational coach. Speak to someone who understands what it takes to win in Assam.`;

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
    verdict      = mlaParseReport(text, "verdict");
    strength     = mlaParseReport(text, "strength");
    critical_gap = mlaParseReport(text, "critical_gap");
    actions      = mlaParseReport(text, "actions");
    urgency      = mlaParseReport(text, "urgency");
  }

  const tierColor  = scorePercent >= 70 ? "#16a34a" : scorePercent >= 50 ? "#d97706" : scorePercent >= 30 ? "#dc2626" : "#7f1d1d";
  const tierBg     = scorePercent >= 70 ? "#f0fdf4" : scorePercent >= 50 ? "#fffbeb" : "#fef2f2";
  const tierBorder = scorePercent >= 70 ? "#bbf7d0" : scorePercent >= 50 ? "#fde68a" : "#fecaca";

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
      <div style="background:${tierBg};border:1px solid ${tierBorder};border-radius:8px;padding:0.875rem 1.5rem;display:inline-block;margin-bottom:1rem">
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
            <div style="background:${c};width:${s.pct}%;height:4px;border-radius:99px"></div>
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
