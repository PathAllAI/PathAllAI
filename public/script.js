// ---------------------------------------------------------
// PathAll — AI-Powered Quiz System
// Requires:
// - Netlify Function: /.netlify/functions/analyze
// - results.html reads localStorage.pathallResults
// ---------------------------------------------------------

// -------------------------
//  QUESTIONS
// -------------------------
const questions = [
  "How do you approach new challenges?",
  "What describes you best in group settings?",
  "When solving a problem, you prefer:",
  "You gain energy from:",
  "What motivates you the most?",

  "Which subjects are you strongest in?",
  "What skills do you naturally excel in?",
  "Which activity feels easiest for you?",
  "What type of tasks drain you the least?",
  "Which skill do others praise you for?",

  "What type of career appeals to you most?",
  "What work style do you prefer?",
  "Where do you imagine yourself working?",
  "Your dream job involves:",
  "Which kind of impact matters most to you?",

  "Your usual academic performance:",
  "How prepared are you for exams?",
  "How strong are your extracurriculars?",
  "Have you done competitions or research?",
  "What type of universities do you prefer?"
];

// -------------------------
//  OPTIONS
// -------------------------
const options = [
  ["Creative", "Planning", "Researching", "Teamwork"],
  ["Leader", "Supporter", "Strategist", "Creative Thinker"],
  ["Logic & data", "Imagination", "Hands-on solutions", "Understanding people"],
  ["Working alone", "Groups", "Both", "Depends"],
  ["Learning", "Achieving", "Helping others", "Creating"],

  ["Math/Physics", "Language", "Biology/Chemistry", "Arts/Design"],
  ["Logic", "Communication", "Creativity", "Practical tasks"],
  ["Analyzing data", "Explaining concepts", "Designing", "Organizing"],
  ["Technical tasks", "Writing", "Research", "Discussions"],
  ["Problem-solving", "Empathy", "Creativity", "Responsibility"],

  ["Engineering", "Medicine", "Arts/Media", "Business"],
  ["Structured", "Flexible", "Research", "Interactive"],
  ["Office/Lab", "Creative space", "Research center", "Corporate"],
  ["Solving problems", "Helping people", "Creating things", "Managing teams"],
  ["Innovation", "Improving lives", "Inspiring others", "Economy"],

  ["Mostly A", "A/B mix", "Mostly B", "Mixed"],
  ["Very prepared", "Moderate", "Need improvement", "Not prepared"],
  ["Very strong", "Decent", "Minimal", "None"],
  ["Many", "A few", "Rarely", "None"],
  ["Top global", "Strong international", "Local", "Any with scholarships"]
];

// -------------------------
//  STATE
// -------------------------
let current = 0;
let answers = [];

// UI
const questionText = document.getElementById("question-text");
const answerSelect = document.getElementById("answer-select");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.querySelector(".progress-bar");

// -------------------------
// TOAST HELPER
// -------------------------
function toast(msg, time = 2200) {
  let t = document.getElementById("pathall_toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "pathall_toast";
    t.style.position = "fixed";
    t.style.left = "50%";
    t.style.transform = "translateX(-50%)";
    t.style.bottom = "28px";
    t.style.padding = "9px 14px";
    t.style.background = "rgba(0,0,0,.8)";
    t.style.color = "white";
    t.style.borderRadius = "8px";
    t.style.fontSize = "15px";
    t.style.zIndex = "9999";
    t.style.transition = "opacity .3s";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = "1";
  clearTimeout(t._id);
  t._id = setTimeout(() => (t.style.opacity = "0"), time);
}

// -------------------------
// LOAD QUESTION
// -------------------------
function loadQuestion() {
  questionText.textContent = `${current + 1}. ${questions[current]}`;

  answerSelect.innerHTML = `<option value="">Select</option>`;
  options[current].forEach(o => {
    const opt = document.createElement("option");
    opt.value = o;
    opt.textContent = o;
    answerSelect.appendChild(opt);
  });

  progressBar.style.width = (current / questions.length) * 100 + "%";
  answerSelect.focus();
}

// -------------------------
// FALLBACK ANALYSIS
// -------------------------
function fallbackAnalysis(arr) {
  const scores = { Engineering: 0, Medicine: 0, Arts: 0, Business: 0 };

  arr.forEach(a => {
    if (["Math/Physics","Logic & data","Technical tasks","Engineering"].includes(a)) scores.Engineering++;
    if (["Biology/Chemistry","Helping others","Medicine"].includes(a)) scores.Medicine++;
    if (["Arts/Design","Creativity","Designing"].includes(a)) scores.Arts++;
    if (["Business","Leader","Managing teams"].includes(a)) scores.Business++;
  });

  const top = Object.keys(scores).reduce((a,b)=>
    scores[a] > scores[b] ? a : b
  );

  const percent = Math.round((scores[top] / arr.length) * 100);

  const DB = {
    Engineering: ["MIT","Stanford","KAIST","Georgia Tech","TUM"],
    Medicine: ["Harvard Med","Karolinska","UCL","Seoul National","Duke"],
    Arts: ["Parsons","RISD","UCLA Arts","NYU Tisch","CSM"],
    Business: ["Wharton","Harvard Business","INSEAD","LBS","HKUST"]
  };

  return {
    major: top,
    matchPercent: percent,
    explanation: `${top} matched due to your skill and interest pattern.`,
    universities: DB[top],
    source: "fallback"
  };
}

// -------------------------
// SEND ANSWERS TO NETLIFY AI FUNCTION
// -------------------------
async function analyzeWithAI(answers) {
  nextBtn.disabled = true;
  nextBtn.textContent = "Analyzing...";
  toast("Analyzing answers with AI...");

  try {
    const resp = await fetch("https://sanzharx-pathallai.hf.space/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers })
  });

    if (!resp.ok) {
      throw new Error("Bad AI response");
    }

    const json = await resp.json();

    if (!json.ok || !json.report) {
      throw new Error("Invalid AI format");
    }

    localStorage.setItem("pathallResults", JSON.stringify(json.report));
    window.location.href = "results.html";
  } catch (err) {
    console.error("AI analysis failed:", err);
    toast("AI failed — using backup analysis.");

    const fallback = fallbackAnalysis(answers);
    localStorage.setItem("pathallResults", JSON.stringify(fallback));
    window.location.href = "results.html";
  }
}

// -------------------------
// NEXT BUTTON
// -------------------------
nextBtn.addEventListener("click", async () => {
  const val = answerSelect.value;

  if (!val) {
    alert("Please select an answer.");
    return;
  }

  answers.push(val);
  current++;

  if (current >= questions.length) {
    return analyzeWithAI(answers);
  }

  loadQuestion();
});

// -------------------------
loadQuestion();
