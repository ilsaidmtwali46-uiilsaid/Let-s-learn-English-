(() => {
  const spellingWords = [
    { word: "cat", mean: "قطة" }, { word: "dog", mean: "كلب" },
    { word: "sun", mean: "شمس" }, { word: "pen", mean: "قلم" },
    { word: "book", mean: "كتاب" }, { word: "milk", mean: "حليب" }
  ];
  let currentSpellingIdx = 0, spellingScoreVal = 0;

  function loadSpellingQuiz() {
    const item = spellingWords[currentSpellingIdx];
    document.getElementById("spellingTotal").textContent = spellingWords.length;
    document.getElementById("spellingScore").textContent = spellingScoreVal;
    document.getElementById("scrambleMeaning").textContent = "المعنى: " + item.mean;
    document.getElementById("spellingMsg").textContent = "";

    const slotsContainer = document.getElementById("puzzleSlots");
    const poolContainer = document.getElementById("puzzlePool");
    slotsContainer.innerHTML = ""; poolContainer.innerHTML = "";

    const letters = item.word.split("");
    let userAnswers = new Array(letters.length).fill(null);

    letters.forEach(() => {
      const slot = document.createElement("div");
      slot.className = "slot";
      slotsContainer.appendChild(slot);
    });

    const shuffled = [...letters].sort(() => Math.random() - 0.5);
    shuffled.forEach((char) => {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.textContent = char;
      tile.onclick = () => {
        const emptyIdx = userAnswers.indexOf(null);
        if (emptyIdx !== -1) {
          userAnswers[emptyIdx] = char;
          slotsContainer.children[emptyIdx].textContent = char;
          tile.style.visibility = "hidden";
        }
      };
      poolContainer.appendChild(tile);
    });

    window.currentSpellingData = { letters, userAnswers };
  }

  document.getElementById("checkSpellingBtn").onclick = () => {
    const dataObj = window.currentSpellingData;
    if (!dataObj) return;
    const userWord = dataObj.userAnswers.join("");
    const targetWord = spellingWords[currentSpellingIdx].word;
    const msg = document.getElementById("spellingMsg");

    if (userWord === targetWord) {
      msg.style.color = "#15803d";
      msg.textContent = "🎉 إجابة صحيحة! أحسنت.";
      spellingScoreVal++;
      document.getElementById("spellingScore").textContent = spellingScoreVal;
      window.speakText(targetWord);
    } else {
      msg.style.color = "#dc2626";
      msg.textContent = "❌ حاول مجدداً، الترتيب غير صحيح.";
    }
  };

  document.getElementById("nextSpellingBtn").onclick = () => {
    currentSpellingIdx = (currentSpellingIdx + 1) % spellingWords.length;
    loadSpellingQuiz();
  };

  loadSpellingQuiz();
})();
