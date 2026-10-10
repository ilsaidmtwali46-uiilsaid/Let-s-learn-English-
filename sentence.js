const SentenceLab = {
    exercises: [
        { correct: "The engineer repairs the television.", words: ["the", "engineer", "television", "repairs", "The"] },
        { correct: "She is learning software development.", words: ["development", "is", "learning", "software", "She"] },
        { correct: "We build efficient software systems.", words: ["systems", "efficient", "build", "We", "software"] }
    ],
    currentIndex: 0,

    render(containerId) {
        const container = document.getElementById(containerId);
        const current = this.exercises[this.currentIndex];
        
        container.innerHTML = `
            <h2>مختبر بناء وترتيب الجمل</h2>
            <p>قم بترتيب الكلمات التالية لتكوين جملة إنجليزية صحيحة:</p>
            <div style="margin: 1.5rem 0; display: flex; gap: 0.50rem; flex-wrap: wrap;" id="word-pool">
                ${current.words.sort(() => Math.random() - 0.5).map(w => `<button onclick="this.style.opacity=0.5; SentenceLab.selectWord('${w}')" style="padding:0.5rem 1rem; cursor:pointer; border-radius:8px; border:1px solid #ccc;">${w}</button>`).join('')}
            </div>
            <p><strong>الجملة المكونة:</strong> <span id="user-sentence" style="color:var(--primary-color);"></span></p>
            <button class="action-btn" onclick="SentenceLab.check()">تحقق من الإجابة</button>
            <button class="action-btn" style="background:#64748b; margin-right:0.5rem;" onclick="SentenceLab.render('${containerId}')">إعادة المحاولة</button>
        `;
        window.currentBuiltSentence = [];
    },

    selectWord(word) {
        if(!window.currentBuiltSentence) window.currentBuiltSentence = [];
        window.currentBuiltSentence.push(word);
        document.getElementById('user-sentence').innerText = window.currentBuiltSentence.join(' ');
    },

    check() {
        const userText = (window.currentBuiltSentence || []).join(' ') + '.';
        const target = this.exercises[this.currentIndex].correct;
        if(userText.toLowerCase() === target.toLowerCase()) {
            alert('إجابة صحيحة! أحسنت.');
            VoiceLab.speak("Great job!");
            this.currentIndex = (this.currentIndex + 1) % this.exercises.length;
            this.render('app-container');
        } else {
            alert('الترتيب غير صحيح، حاول مرة أخرى.');
        }
    }
};
