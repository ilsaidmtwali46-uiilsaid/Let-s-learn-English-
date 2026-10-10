const SentenceLab = {
    exercises: [
        { correct: "I like apples.", words: ["apples", "I", "like"] },
        { correct: "Cats eat fish.", words: ["fish", "Cats", "eat"] },
        { correct: "The sun is big.", words: ["is", "The", "big", "sun"] },
        { correct: "He has a ball.", words: ["a", "has", "ball", "He"] },
        { correct: "She runs fast.", words: ["fast", "She", "runs"] },
        { correct: "We play football.", words: ["play", "We", "football"] }
    ],
    currentIndex: 0,

    render(containerId) {
        const container = document.getElementById(containerId);
        const current = this.exercises[this.currentIndex];
        
        container.innerHTML = `
            <div style="text-align: center;">
                <h2 style="color: #2563eb;">⭐ مختبر تكوين الجمل البسيطة ⭐</h2>
                <p style="font-size: 1.1rem; color: #475569;">التمرين (${this.currentIndex + 1} من ${this.exercises.length}) - رتب الكلمات لتكوين جملة:</p>
                
                <div style="margin: 2rem 0; display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap;" id="word-pool">
                    ${current.words.sort(() => Math.random() - 0.5).map(w => `
                        <button onclick="this.style.opacity=0.3; SentenceLab.selectWord('${w}')" 
                                style="padding: 0.75rem 1.25rem; font-size: 1.2rem; cursor: pointer; border-radius: 12px; border: 2px solid #2563eb; background: #eff6ff; font-weight: bold; color: #1e40af;">
                            ${w}
                        </button>
                    `).join('')}
                </div>
                
                <div style="background: #f8fafc; padding: 1rem; border-radius: 12px; margin-bottom: 1.5rem; border: 1px dashed #cbd5e1;">
                    <span style="font-size: 1.1rem;">الجملة الخاصة بك:</span><br>
                    <span id="user-sentence" style="color: #16a34a; font-weight: bold; font-size: 1.5rem; display: inline-block; margin-top: 0.5rem;">...</span>
                </div>

                <button class="action-btn" onclick="SentenceLab.check()" style="font-size: 1.1rem; padding: 0.75rem 2rem;">تحقق من الإجابة ✅</button>
                <button class="action-btn" style="background: #64748b; margin-right: 0.5rem; font-size: 1.1rem; padding: 0.75rem 1.5rem;" onclick="SentenceLab.render('${containerId}')">إعادة ضبط 🔄</button>
            </div>
        `;
        window.currentBuiltSentence = [];
    },

    selectWord(word) {
        if(!window.currentBuiltSentence) window.currentBuiltSentence = [];
        window.currentBuiltSentence.push(word);
        document.getElementById('user-sentence').innerText = window.currentBuiltSentence.join(' ') + '.';
    },

    check() {
        const userText = (window.currentBuiltSentence || []).join(' ') + '.';
        const target = this.exercises[this.currentIndex].correct;
        if(userText.toLowerCase() === target.toLowerCase()) {
            alert('أحسنت يا بطل! إجابة صحيحة 🌟');
            VoiceLab.speak("Great job!");
            this.currentIndex = (this.currentIndex + 1) % this.exercises.length;
            this.render('app-container');
        } else {
            alert('حاول مرة أخرى، الترتيب غير صحيح.');
            VoiceLab.speak("Try again");
        }
    }
};
