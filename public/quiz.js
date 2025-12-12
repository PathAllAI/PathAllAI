// A list of 20 thoughtful, scenario-based questions
const quizQuestions = [
    // --- Section 1: Interests & Problem Solving (Major Fit) ---
    { qId: 1, text: "You are given a complex dataset. What excites you more?", options: [
        { label: "Finding patterns and writing code to automate analysis (Coding/Data Science)", value: "DS" },
        { label: "Designing a clear, visual presentation of the findings (Design/Comm.)", value: "Design" },
        { label: "Understanding the ethical implications of the data's use (Humanities/Law)", value: "Ethics" },
        { label: "Improving the efficiency of data collection methods (Engineering/IT)", value: "IT" }
    ], type: 'radio' },
    { qId: 2, text: "When facing a major societal issue (e.g., poverty), your primary focus is:", options: [
        { label: "Developing policy and advocating for change (PoliSci/Law)", value: "Policy" },
        { label: "Creating scalable, technical solutions (Engineering/CS)", value: "Tech" },
        { label: "Studying the historical and cultural roots of the problem (History/Anthropo.)", value: "Research" },
        { label: "Managing resources and logistics for effective aid distribution (Business/Logistics)", value: "Business" }
    ], type: 'radio' },
    { qId: 3, text: "Which academic project would you find most fulfilling?", options: [
        { label: "Building a functional model or device (Engineering)", value: "Engineering" },
        { label: "Writing a persuasive, research-backed essay (Humanities)", value: "Humanities" },
        { label: "Creating a budget and marketing plan for a new startup (Business)", value: "Business" },
        { label: "Designing a beautiful and intuitive app interface (Design/CS)", value: "DesignCS" }
    ], type: 'radio' },
    { qId: 4, text: "Your friends describe you as the person who always:", options: [
        { label: "Organizes the events and manages the schedule (Management)", value: "Mgt" },
        { label: "Analyzes their relationship problems and offers advice (Psychology/Couns.)", value: "Psych" },
        { label: "Fixes technology or figures out how things work (Tech)", value: "TechFix" },
        { label: "Tells the most engaging stories and jokes (Arts/Comm.)", value: "Arts" }
    ], type: 'radio' },
    { qId: 5, text: "Rate your comfort level with advanced Mathematics/Calculus:", options: [
        { label: "Highly comfortable and enjoy solving complex equations (Math Proficient)", value: 4 },
        { label: "Comfortable, but prefer practical application over theory (Applied Math)", value: 3 },
        { label: "Neutral, can manage required courses (Average)", value: 2 },
        { label: "Prefer subjects that do not rely on high-level math (Non-Math)", value: 1 }
    ], type: 'radio' },

    // --- Section 2: Environment & Learning Style (University/Country Fit) ---
    { qId: 6, text: "Which learning environment motivates you most?", options: [
        { label: "A highly competitive, research-focused institution (Top Tier Research)", value: "Research" },
        { label: "A collaborative setting with strong industry connections (Applied/Vocational)", value: "Applied" },
        { label: "A smaller campus where I know my professors well (Liberal Arts/Small)", value: "Small" },
        { label: "A large, diverse university in a major global city (Global/Large)", value: "Global" }
    ], type: 'radio' },
    { qId: 7, text: "Your preferred location for study is:", options: [
        { label: "A major, high-cost city with many networking opportunities (High Cost)", value: "HighCost" },
        { label: "A mid-sized, comfortable city with a high quality of life (Mid Cost)", value: "MidCost" },
        { label: "A quiet, low-cost town near natural landscapes (Low Cost)", value: "LowCost" },
        { label: "Location doesn't matter, only the quality of the program (Quality Focused)", value: "Quality" }
    ], type: 'radio' },
    { qId: 8, text: "How important is hands-on, project-based work in your studies?", options: [
        { label: "Absolutely essential (High Practical)", value: 4 },
        { label: "Very important, I learn best by doing (Mid Practical)", value: 3 },
        { label: "Somewhat important, but theory is primary (Low Practical)", value: 2 },
        { label: "Not important, I prefer lectures and reading (Theory Only)", value: 1 }
    ], type: 'radio' },
    { qId: 9, text: "Regarding financial aid/scholarships, your situation is:", options: [
        { label: "Need significant financial aid/full scholarship (High Aid)", value: "HighAid" },
        { label: "Need some assistance, but can cover some costs (Mid Aid)", value: "MidAid" },
        { label: "Financial cost is not a primary concern (Low Aid)", value: "LowAid" }
    ], type: 'radio' },
    { qId: 10, text: "Which academic area are your high school grades strongest in?", options: [
        { label: "Sciences (Physics, Chemistry, Biology)", value: "Science" },
        { label: "Mathematics and Logic (Calculus, Statistics)", value: "Math" },
        { label: "Languages and Literature (English, Foreign Languages)", value: "Lang" },
        { label: "Arts, Design, and Creative Subjects", value: "Arts" },
        { label: "Social Sciences (History, Economics, Psychology)", value: "Social" }
    ], type: 'radio' },
    
    // --- Section 3: Skills & Soft Skills (Roadmap/Gap Analysis) ---
    { qId: 11, text: "If a group project is failing, you are most likely to:", options: [
        { label: "Take charge, assign tasks, and set deadlines (Leadership)", value: "Lead" },
        { label: "Step back and analyze why the plan failed (Analytical)", value: "Analyze" },
        { label: "Mediate conflicts between group members (Conflict Resolution)", value: "Conflict" },
        { label: "Stay late to fix the technical issues myself (Technical Skill)", value: "Technical" }
    ], type: 'radio' },
    { qId: 12, text: "How comfortable are you learning a completely new programming language or tool in a short time?", options: [
        { label: "Very comfortable and enjoy the challenge (High Adaptability)", value: 4 },
        { label: "Comfortable, but prefer to master one thing first (Mid Adaptability)", value: 3 },
        { label: "I struggle with self-teaching complex tools (Low Adaptability)", value: 2 },
    ], type: 'radio' },
    { qId: 13, text: "Which extracurricular activity BEST represents your greatest skill?", options: [
        { label: "Debate/Public Speaking (Communication)", value: "Comm" },
        { label: "Robotics/Coding Club (Technical)", value: "Technical" },
        { label: "Team Sport Captain/Volunteer Organizer (Leadership)", value: "Lead" },
        { label: "Creative Writing/Art Club (Creativity)", value: "Creative" }
    ], type: 'radio' },
    { qId: 14, text: "When you receive criticism, your reaction is generally:", options: [
        { label: "Immediately use it to identify weaknesses and improve (Growth Mindset)", value: 4 },
        { label: "Take time to process it, then apply changes (Measured)", value: 3 },
        { label: "Get defensive or feel discouraged (Fixed Mindset)", value: 2 }
    ], type: 'radio' },
    { qId: 15, text: "I consider my ability to manage long-term projects (e.g., studying for a major exam over 6 months) to be:", options: [
        { label: "Excellent, I am highly self-disciplined (High Discipline)", value: 4 },
        { label: "Good, I need some reminders but usually succeed (Mid Discipline)", value: 3 },
        { label: "Poor, I often procrastinate until the last minute (Low Discipline)", value: 2 }
    ], type: 'radio' },

    // --- Section 4: Aspirations & Career Goals ---
    { qId: 16, text: "The primary motivation for your future career is:", options: [
        { label: "Earning a high income and achieving financial security (Wealth)", value: "Wealth" },
        { label: "Making a significant, positive impact on society (Impact)", value: "Impact" },
        { label: "Having a stable job with a good work-life balance (Balance)", value: "Balance" },
        { label: "Working on intellectually stimulating and challenging problems (Challenge)", value: "Challenge" }
    ], type: 'radio' },
    { qId: 17, text: "In ten years, I see myself primarily:", options: [
        { label: "Managing a team or company (Leadership Position)", value: "Leader" },
        { label: "Working independently, specialized in a technical field (Specialist)", value: "Specialist" },
        { label: "In academia or research (Research)", value: "ResearchCareer" },
        { label: "In a creative field, producing content or art (Creative Career)", value: "CreativeCareer" }
    ], type: 'radio' },
    { qId: 18, text: "How important is having a globally recognized qualification/degree?", options: [
        { label: "Extremely important, essential for my goals (Global)", value: "Global" },
        { label: "Somewhat important, but local quality is also sufficient (Mid Global)", value: "MidGlobal" },
        { label: "Not important, I plan to stay and work locally (Local)", value: "Local" }
    ], type: 'radio' },
    { qId: 19, text: "My ideal work environment involves:", options: [
        { label: "Constant communication and teamwork (Collaborative)", value: "Collab" },
        { label: "Extended periods of deep focus and concentration (Individual)", value: "Individual" },
        { label: "A mix of both indoor and outdoor work (Flexible)", value: "Flexible" }
    ], type: 'radio' },
    { qId: 20, text: "If your top-choice university requires a specific exam (e.g., SAT/IELTS) you haven't prepared for, you would:", options: [
        { label: "Devote all my free time to prepare and pass it (High Commitment)", value: 4 },
        { label: "Look for universities that don't require it (Low Flexibility)", value: 2 },
        { label: "Try preparing, but prioritize my current schoolwork (Measured Effort)", value: 3 }
    ], type: 'radio' }
];

document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('pathall-quiz-form');
    const submitButton = document.getElementById('submit-quiz');

    // Function to render the questions
    function renderQuiz() {
        quizQuestions.forEach(q => {
            const questionCard = document.createElement('div');
            questionCard.className = 'question-card';

            const questionText = document.createElement('p');
            questionText.textContent = `${q.qId}. ${q.text}`;
            questionCard.appendChild(questionText);

            q.options.forEach((option, index) => {
                const optionLabel = document.createElement('label');
                optionLabel.className = 'option-label';
                
                const radioInput = document.createElement('input');
                radioInput.type = q.type;
                radioInput.name = `q${q.qId}`;
                radioInput.value = option.value;
                radioInput.required = true;

                optionLabel.appendChild(radioInput);
                optionLabel.appendChild(document.createTextNode(option.label));
                questionCard.appendChild(optionLabel);
            });
            
            quizForm.appendChild(questionCard);
        });
    }

    // Function to handle quiz submission
    function submitQuiz(event) {
        event.preventDefault();
        
        const formData = new FormData(quizForm);
        const results = {};
        
        // Convert form data into an object
        for (let [key, value] of formData.entries()) {
            results[key] = value;
        }

        // --- IMPORTANT: This is where you would send data to your Node.js/FastAPI Backend ---
        // Example: 
        // fetch('/api/analyze-profile', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(results) })
        //     .then(response => response.json())
        //     .then(data => {
        //         // Save the AI results and redirect
        //         localStorage.setItem('aiResults', JSON.stringify(data));
        //         window.location.href = 'results.html';
        //     })
        //     .catch(error => console.error('AI Submission Failed:', error));

        // --- AMATEUR MOCKUP: For now, just save to localStorage and redirect ---
        console.log("Quiz Results Submitted:", results);
        // MOCK data to simulate AI response
        const mockAIResult = {
            recommendedMajors: ["Computer Science (AI/ML Specialization)", "Electrical Engineering", "Data Science"],
            topUniversityMatch: { name: "Technical University Berlin (TUB)", score: 92, probability: "High" },
            skillGaps: ["Leadership experience (Needs 6-month volunteering project)", "Advanced Calculus (Needs dedicated prep course)"],
            roadmapSummary: "Focus on technical projects and portfolio development to offset mid-level math scores. Apply to European universities that value technical skill over pure GPA.",
            // In a real project, this would be the LLM's full text output
        };

        localStorage.setItem('mockQuizData', JSON.stringify(results));
        localStorage.setItem('aiResults', JSON.stringify(mockAIResult));
        window.location.href = 'results.html';
    }

    renderQuiz();
    submitButton.addEventListener('click', submitQuiz);
});