(() => {
  const chatScenarios = [
    {
      question: "Hello! How are you today?",
      pron: "هلو! هاو آر يو توداي؟",
      mean: "أهلاً! كيف حالك اليوم؟",
      options: [
        { text: "I am fine, thank you.", correct: true, reply: "Great to hear that! 😊" },
        { text: "Red color", correct: false, reply: "That doesn't match the question!" },
        { text: "Five apples", correct: false, reply: "Not quite right, try again." }
      ]
    },
    {
      question: "What is your name?",
      pron: "وات إيز يور نيم؟",
      mean: "ما هو اسمك؟",
      options: [
        { text: "My name is student.", correct: true, reply: "Nice to meet you! 🤝" },
        { text: "I like milk", correct: false, reply: "Think about answering the name." },
        { text: "It is a dog", correct: false, reply: "Incorrect answer." }
      ]
    },
    {
      question: "Where do you live?",
      pron: "وير دو يو ليف؟",
      mean: "أين تعيش؟",
      options: [
        { text: "I live in Egypt.", correct: true, reply: "Wonderful country! 🇪🇬" },
        { text: "It is a pen", correct: false, reply: "Not related to living place." },
        { text: "Good morning", correct: false, reply: "That's a greeting, not a place." }
      ]
    }
  ];

  let currentChatIdx = 0;

  function loadChatScenario() {
    const scenario = chatScenarios[currentChatIdx];
    document.getElementById("chatQuestion").textContent = scenario.question + " (" + scenario.mean + ")";
    document.getElementById("chatMsg").textContent = "";
    
    const optionsContainer = document.getElementById("chatOptions");
    optionsContainer.innerHTML = "";

    // خلط الخيارات عشوائياً
    const shuffledOptions = [...scenario.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt.text;
      btn.style.background = "#e0f2fe";
      btn.style.color = "#0369a1";
      btn.style.border = "1px solid #7dd3fc";
      btn.style.justifyContent = "center";
      btn.style.padding = "12px";
      btn.style.borderRadius = "12px";
      btn.style.fontSize = "1.05rem";
      
      btn.onclick = () => {
        const msg = document.getElementById("chatMsg");
        if (opt.correct) {
          btn.style.background = "#dcfce7";
          btn.style.color = "#15803d";
          btn.style.borderColor = "#86efac";
          msg.style.color = "#15803d";
          msg.textContent = "🎉 " + opt.reply;
          window.speakText(opt.text);
        } else {
          btn.style.background = "#fee2e2";
          btn.style.color = "#dc2626";
          btn.style.borderColor = "#fca5a5";
          msg.style.color = "#dc2626";
          msg.textContent = "❌ " + opt.reply;
        }
      };
      optionsContainer.appendChild(btn);
    });
  }

  document.getElementById("speakChatBtn").onclick = () => {
    window.speakText(chatScenarios[currentChatIdx].question);
  };

  document.getElementById("nextChatBtn").onclick = () => {
    currentChatIdx = (currentChatIdx + 1) % chatScenarios.length;
    loadChatScenario();
  };

  loadChatScenario();
})();
