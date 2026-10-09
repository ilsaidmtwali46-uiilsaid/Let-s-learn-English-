(() => {
  const sentencesData = [
    { sentence: "I love cats", mean: "أنا أحب القطط" },
    { sentence: "The sun is hot", mean: "الشمس حارة" },
    { sentence: "I drink milk", mean: "أنا أشرب الحليب" }
  ];
  let currentSentenceIdx = 0, sentenceScoreVal = 0;

  function loadSentenceQuiz() {
    const item = sentencesData[currentSentenceIdx];
    document.getElementById("sentenceTotal").textContent = sentencesData.length;
    document.getElementById("sentenceScore").textContent = sentenceScoreVal;
    document.getElementById("sentenceMeaning").textContent = item.mean;
    document.getElementById("sentenceMsg").textContent = "";

    const slotsContainer = document.getElementById("wordSlots");
    const poolContainer = document.getElementById("wordPool");
    slotsContainer.innerHTML = ""; poolContainer.innerHTML = "";

    const words = item.sentence.split(" ");
    let userWordAnswers = new Array(words.length).fill(null);

    words.forEach(() => {
      const slot = document.createElement("div");
      slot.className = "word-slot";
      slotsContainer.appendChild(slot);
    });

    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
    shuffledWords.forEach((word) => {
      const tile = document.createElement("div");
      tile.className = "word-tile";
      tile.textContent = word;
      tile.onclick = () => {
        const emptyIdx = userWordAnswers.indexOf(null);
        if (emptyIdx !== -1) {
          userWordAnswers[emptyIdx] = word;
          slotsContainer.children[emptyIdx].textContent = word;
          tile.style.visibility = "hidden";
        }
      };
      poolContainer.appendChild(tile);
    });

    window.currentSentenceData = { words, userWordAnswers };
  }

  document.getElementById("checkSentenceBtn").onclick = () => {
    const dataObj = window.currentSentenceData;
    if (!dataObj) return;
    const userSentence = dataObj.userWordAnswers.join(" ");
    const targetSentence = sentencesData[currentSentenceIdx].sentence;
    const msg = document.getElementById("sentenceMsg");

    if (userSentence === targetSentence) {
      msg.style.color = "#15803d";
      msg.textContent = "🌟 ممتاز جداً! الجملة سليمة.";
      sentenceScoreVal++;
      document.getElementById("sentenceScore").textContent = sentenceScoreVal;
      window.speakText(targetSentence);
    } else {
      msg.style.color = "#dc2626";
      msg.textContent = "❌ ترتيب الكلمات غير صحيح.";
    }
  };

  document.getElementById("nextSentenceBtn").onclick = () => {
    currentSentenceIdx = (currentSentenceIdx + 1) % sentencesData.length;
    loadSentenceQuiz();
  };

  loadSentenceQuiz();
})();
