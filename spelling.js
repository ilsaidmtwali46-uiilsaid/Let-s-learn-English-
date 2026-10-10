
(() => {
  const spellingWords = [
    { word: "cat", mean: "قطة" },
    { word: "dog", mean: "كلب" },
    { word: "sun", mean: "شمس" },
    { word: "pen", mean: "قلم" },
    { word: "book", mean: "كتاب" },
    { word: "milk", mean: "حليب" },
    { word: "fish", mean: "سمكة" },
    { word: "bird", mean: "طائر" },
    { word: "tree", mean: "شجرة" },
    { word: "door", mean: "باب" },
    { word: "hand", mean: "يد" },
    { word: "ball", mean: "كرة" },
    { word: "apple", mean: "تفاحة" },
    { word: "house", mean: "منزل" },
    { word: "water", mean: "ماء" },
    { word: "happy", mean: "سعيد" },
    { word: "green", mean: "أخضر" },
    { word: "bread", mean: "خبز" },
    { word: "school", mean: "مدرسة" },
    { word: "friend", mean: "صديق" },
    { word: "family", mean: "عائلة" },
    { word: "mother", mean: "أم" },
    { word: "father", mean: "أب" },
    { word: "orange", mean: "برتقالة / برتقالي" },
    { word: "window", mean: "نافذة" },
    { word: "garden", mean: "حديقة" },
    { word: "yellow", mean: "أصفر" },
    { word: "morning", mean: "صباح" },
    { word: "teacher", mean: "معلّم" },
    { word: "English", mean: "اللغة الإنجليزية" }
  ];

  let currentSpellingIdx = 0;
  let spellingScoreVal = 0;
  let answeredCorrectly = false;

  function loadSpellingQuiz() {
    const item = spellingWords[currentSpellingIdx];
    document.getElementById("spellingTotal").textContent =
      spellingWords.length;
    document.getElementById("spellingScore").textContent =
      spellingScoreVal;
    document.getElementById("scrambleMeaning").textContent =
      "المعنى: " + item.mean + " — رتب الحروف من اليسار إلى اليمين";
    document.getElementById("spellingMsg").textContent = "";
    answeredCorrectly = false;

    const slots = document.getElementById("puzzleSlots");
    const pool = document.getElementById("puzzlePool");
    slots.innerHTML = "";
    pool.innerHTML = "";

    const letters = item.word.split("");
    const answers = new Array(letters.length).fill(null);

    letters.forEach(() => {
      const slot = document.createElement("div");
      slot.className = "slot";
      slots.appendChild(slot);
    });

    const shuffled = [...letters];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    shuffled.forEach((char) => {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.textContent = char;
      tile.tabIndex = 0;

      const choose = () => {
        if (tile.style.visibility === "hidden") return;
        const index = answers.indexOf(null);
        if (index === -1) return;

        answers[index] = char;
        slots.children[index].textContent = char;
        tile.style.visibility = "hidden";
      };

      tile.onclick = choose;
      tile.onkeydown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          choose();
        }
      };

      pool.appendChild(tile);
    });

    window.currentSpellingData = { answers };
  }

  document.getElementById("checkSpellingBtn").onclick = () => {
    const data = window.currentSpellingData;
    if (!data) return;

    const msg = document.getElementById("spellingMsg");

    if (data.answers.includes(null)) {
      msg.style.color = "#b45309";
      msg.textContent = "أكمل اختيار كل الحروف أولاً.";
      return;
    }

    const answer = data.answers.join("").toLowerCase();
    const correct = spellingWords[currentSpellingIdx].word.toLowerCase();

    if (answer === correct) {
      if (!answeredCorrectly) {
        answeredCorrectly = true;
        spellingScoreVal++;
        document.getElementById("spellingScore").textContent =
          spellingScoreVal;
        msg.textContent = "🎉 إجابة صحيحة! أحسنت.";
        if (typeof window.speakText === "function") {
          window.speakText(correct);
        }
      } else {
        msg.textContent = "الإجابة صحيحة بالفعل؛ انتقل للكلمة التالية.";
      }
      msg.style.color = "#15803d";
    } else {
      msg.style.color = "#dc2626";
      msg.textContent = "❌ الترتيب غير صحيح. حاول مرة أخرى.";
    }
  };

  document.getElementById("nextSpellingBtn").onclick = () => {
    currentSpellingIdx =
      (currentSpellingIdx + 1) % spellingWords.length;
    loadSpellingQuiz();
  };

  loadSpellingQuiz();
})();
