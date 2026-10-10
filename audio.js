class VoiceLab {
    static speak(text, lang = 'en-US') {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // إيقاف أي صوت سابق
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            utterance.rate = 0.85; // سرعة هادئة تناسب المتعلمين
            window.speechSynthesis.speak(utterance);
        } else {
            alert('متصفحك لا يدعم خاصية التحدث الصوتي.');
        }
    }
}
