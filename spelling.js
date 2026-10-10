const SpellingLab = {
    words: [
        { word: "Cat", hint: "قطة 🐱" },
        { word: "Dog", hint: "كلب 🐶" },
        { word: "Apple", hint: "تفاحة 🍎" },
        { word: "Book", hint: "كتاب 📖" },
        { word: "School", hint: "مدرسة 🏫" },
        { word: "Water", hint: "ماء 💧" },
        { word: "Milk", hint: "حليب 🥛" },
        { word: "Sun", hint: "شمس ☀️" },
        { word: "Ball", hint: "كرة ⚽" },
        { word: "Fish", hint: "سمكة 🐟" }
    ],
    currentIndex: 0,

    render(containerId) {
        const current = this.words[this.currentIndex];
        const container = document.getElementById(containerId);
        
        container.innerHTML = `
            <div style="text-align: center;">
                <h2 style="color: #2563eb;">🎯 مختبر التهجئة للمبتدئين 🎯</h2>
                <p style="font-size: 1.1rem; color: #475569;">التمرين (${this.currentIndex + 1} من ${this.words.length}) - استمع للكلمة واكتبها:</p>
                
                <div style="margin: 1.5rem 0;">
                    <button class="action-btn" onclick="SpellingLab.playCurrent()" style="font-size: 1.2rem; padding: 1rem 2rem; background: #10b981;">
                        استمع للكلمة 🔊
                    </button>
                </div>
                
                <p style="font-size: 1.3rem; color: #d97706; margin: 1rem 0;"><strong>تلميح:</strong> ${current.hint}</p>
                
                <div style="margin: 1.5rem 0;">
                    <input type="text" id="spell-input" placeholder="اكتب الكلمة هنا بالإنجليزية..." 
                           style="text-align: center; font-size: 1.3rem; padding: 0.75rem; width: 80%; max-width: 300px;"><br>
                </div>

                <button class="action-btn" onclick="SpellingLab.check()" style="font-size: 1.1rem; padding: 0.75rem 2rem;">تحقق من الكلمة ✅</button>
            </div>
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
            alert('رائع جداً! إجابة ممتازة 🎉');
            VoiceLab.speak("Correct! Excellent!");
            this.currentIndex = (this.currentIndex + 1) % this.words.length;
            this.render('app-container');
        } else {
            alert(`خطأ بسيط. الكلمة الصحيحة هي: ${target}`);
            VoiceLab.speak("Try again");
        }
    }
};
