(() => {
  const numbersData = [
    { num: "15", pron: "Fifteen", mean: "خمسة عشر" },
    { num: "42", pron: "Forty Two", mean: "اثنان و أربعون" },
    { num: "123", pron: "One Hundred Twenty Three", mean: "مائة وثلاثة وعشرون" },
    { num: "505", pron: "Five Hundred Five", mean: "خمسمائة وخمسة" }
  ];
  let currentNumIdx = 0, numScoreVal = 0;

  function loadNumbersSection() {
    const item = numbersData[currentNumIdx];
    document.getElementById("numTotal").textContent = numbersData.length;
    document.getElementById("numScore").textContent = numScoreVal;
    document.getElementById("numDisplay").textContent = item.num;
    document.getElementById("numPron").textContent = item.pron;
    document.getElementById("numPuzzleMean").textContent = "المعنى: " + item.mean + " (رتب الأرقام الصحيحة)";
    document.getElementById("numPuzzleMsg").textContent = "";

    const slotsContainer = document.getElementById("numPuzzleSlots");
    const poolContainer = document.getElementById("numPuzzlePool");
    slotsContainer.innerHTML = ""; poolContainer.innerHTML = "";

    const digits = item.num.split("");
    let userNumAnswers = new Array(digits.length).fill(null);

    digits.forEach(() => {
      const slot = document.createElement("div");
      slot.className = "slot";
      slotsContainer.appendChild(slot);
    });

    const shuffledDigits = [...digits].sort(() => Math.random() - 0.5);
    shuffledDigits.forEach((char) => {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.textContent = char;
      tile.onclick = () => {
        const emptyIdx = userNumAnswers.indexOf(null);
        if (emptyIdx !== -1) {
          userNumAnswers[emptyIdx] = char;
          slotsContainer.children[emptyIdx].textContent = char;
          tile.style.visibility = "hidden";
        }
      };
      poolContainer.appendChild(tile);
    });

    window.currentNumData = { digits, userNumAnswers };
  }

  document.getElementById("speakNumBtn").onclick = () => {
    window.speakText(numbersData[currentNumIdx].pron);
  };

  document.getElementById("nextNumBtn").onclick = () => {
    currentNumIdx = (currentNumIdx + 1) % numbersData.length;
    loadNumbersSection();
  };

  document.getElementById("checkNumPuzzleBtn").onclick = () => {
    const dataObj = window.currentNumData;
    if (!dataObj) return;
    const userVal = dataObj.userNumAnswers.join("");
    const targetVal = numbersData[currentNumIdx].num;
    const msg = document.getElementById("numPuzzleMsg");

    if (userVal === targetVal) {
      msg.style.color = "#15803d";
      msg.textContent = "🎉 إجابة صحيحة! أحسنت ترتيب الرقم.";
      numScoreVal++;
      document.getElementById("numScore").textContent = numScoreVal;
      window.speakText(targetVal);
    } else {
      msg.style.color = "#dc2626";
      msg.textContent = "❌ ترتيب الأرقام غير صحيح، حاول مجدداً.";
    }
  };

  loadNumbersSection();
})();
