function switchTab(tabName) {
    const container = 'app-container';
    switch(tabName) {
        case 'sentence':
            SentenceLab.render(container);
            break;
        case 'spelling':
            SpellingLab.render(container);
            break;
        case 'chat':
            document.getElementById(container).innerHTML = `
                <h2>المحادثة الذكية والتفاعل</h2>
                <p>مرحباً بك في مساعد المحادثة. يمكنك التدرب على الحوارات اليومية والمهنية باللغة الإنجليزية.</p>
                <button class="action-btn" onclick="VoiceLab.speak('Hello, how can I help you today?')">ابدأ المحادثة الصوتية 🔊</button>
            `;
            break;
        case 'numbers':
            document.getElementById(container).innerHTML = `
                <h2>مختبر الأرقام والقياس</h2>
                <p>تعلم قراءة وكتابة الأرقام الإنجليزية المستخدمة في القياسات والبيانات البرمجية.</p>
                <button class="action-btn" onclick="VoiceLab.speak('One hundred and twenty five')">انطق الرقم 125 🔊</button>
            `;
            break;
        case 'writing':
            document.getElementById(container).innerHTML = `
                <h2>مختبر الكتابة الحرة</h2>
                <p>تدرب على صياغة الجمل التقنية والمهنية بحرية وسجل ملاحظاتك.</p>
                <textarea style="width:100%; height:100px; padding:0.5rem; border-radius:8px; border:1px solid #ccc;" placeholder="اكتب هنا بالإنجليزية..."></textarea>
            `;
            break;
        default:
            SentenceLab.render(container);
    }
}

// التشغيل التلقائي عند فتح الصفحة على تبويب بناء الجمل
window.onload = function() {
    switchTab('sentence');
};
