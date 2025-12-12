document.addEventListener('DOMContentLoaded', () => {
    const aiResults = JSON.parse(localStorage.getItem('aiResults'));

    if (!aiResults) {
        document.getElementById('ai-results-content').innerHTML = `
            <div style="text-align: center;">
                <h3 style="color:#FF6347;">Error: No AI results found.</h3>
                <p>Please complete the <a href="quiz.html">PathAll AI Assessment</a> first.</p>
            </div>
        `;
        return;
    }

    // --- 1. Recommended Majors ---
    const majorsList = document.getElementById('recommended-majors');
    aiResults.recommendedMajors.forEach(major => {
        const li = document.createElement('li');
        li.textContent = major;
        majorsList.appendChild(li);
    });

    // --- 2. Best University Match ---
    const matchCard = document.getElementById('university-match-card');
    const university = aiResults.topUniversityMatch;
    matchCard.innerHTML = `
        <h4 style="color:var(--primary-blue); font-size: 1.4rem; margin-bottom: 0.5rem;">${university.name}</h4>
        <p><strong>Match Score:</strong> <span class="accent-color">${university.score}%</span></p>
        <p><strong>Acceptance Probability:</strong> <span style="color:var(--secondary-green); font-weight: bold;">${university.probability}</span></p>
    `;

    // --- 3. Roadmap Summary ---
    document.getElementById('roadmap-summary').textContent = aiResults.roadmapSummary;

    // --- 4. Skill Gaps ---
    const gapsList = document.getElementById('skill-gaps');
    aiResults.skillGaps.forEach(gap => {
        const li = document.createElement('li');
        li.textContent = gap;
        li.style.borderLeftColor = '#FF6347'; // Use a warning color
        gapsList.appendChild(li);
    });

});