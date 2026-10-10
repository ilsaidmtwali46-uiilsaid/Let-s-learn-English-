const SpellingLab = {
    words: [
        { word: "Component", hint: "قطعة أو مكون مادي (مثل مكونات الشاشات والإلكترونيات)" },
        { word: "Programming", hint: "عملية كتابة وتطوير البرمجيات والأكواد" },
        { word: "Display", hint: "شاشة عرض البيانات أو الصور" },
        { word: "Engineer", hint: "مهندس أو فني متخصص" }
    ],
    currentIndex: 0,

    render(containerId) {
        const current = this.words[this.currentIndex];
        const container = document.getElementById(containerId);
        
        container.innerHTML = `
            <h2>مختبر التهجئة والكتابة الصوتية</h2>
            <p>استمع إلى الكلمة واكتبها بشكل صحيح:</p>
            <button class="action-btn" onclick="SpellingLab.playCurrent()">استمع للكلمة 🔊</button>
            <p style="margin-top:1rem; color:#64748b; font-size:0.9rem;">تلميح: ${current.hint}</p>
            <br>
            <input type="text" id="spell-input" placeholder="اكتب الكلمة هنا بالإنجليزية..."><br>
            <button class="action-btn" onclick="SpellingLab.check()">تحقق من التهجئة</button>
        `;
        this.playCurrent();
    },

    playCurrent() {
        VoiceLab.speak(this.words[this.currentIndex].word);
    },

    check() {
        const val = document.getElementById('spell-input').value.trim();
        const target = this.words[this.currentIndex].word;
        if(val.toLowerCase() === target.toLowerCase()) {
            alert('ممتاز! تهجئة صحيحة تماماً.');
            VoiceLab.speak("Correct!");
            this.currentIndex = (this.currentIndex + 1) % this.words.length;
            this.render('app-container');
        } else {
            alert(`خطأ. الكلمة الصحيحة هي: ${target}`);
        }
    }
};
