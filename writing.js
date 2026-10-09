(() => {
  const data = {
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    lowercase: "abcdefghijklmnopqrstuvwxyz".split(""),
    numbers: "0123456789".split(""),
    words: ["cat","dog","sun","pen","book","milk","rabbit","fish","frog"]
  };

  const dictionary = {
    "A": { pron: "إِيـه", mean: "Apple 🍎", minStrokes: 2 }, 
    "B": { pron: "بِـي", mean: "Ball ⚽", minStrokes: 2 },
    "C": { pron: "سِـي", mean: "Cat 🐱", minStrokes: 1 }, 
    "D": { pron: "دِي", mean: "Dog 🐶", minStrokes: 2 },
    "E": { pron: "إِي", mean: "Egg 🥚", minStrokes: 2 }, 
    "F": { pron: "إِفْ", mean: "Fish 🐟", minStrokes: 2 },
    "G": { pron: "جِـي", mean: "Girl 👧", minStrokes: 1 }, 
    "H": { pron: "إِتْشْ", mean: "Hat 👒", minStrokes: 3 },
    "I": { pron: "آيْ", mean: "Ice 🧊", minStrokes: 1 }, 
    "J": { pron: "جِـيْه", mean: "Juice 🧃", minStrokes: 1 },
    "K": { pron: "كِـي", mean: "Kite 🪁", minStrokes: 2 }, 
    "L": { pron: "إِلْ", mean: "Lion 🦁", minStrokes: 1 },
    "M": { pron: "إِمْ", mean: "Milk 🥛", minStrokes: 1 }, 
    "N": { pron: "إِنْ", mean: "Nest 🪺", minStrokes: 1 },
    "O": { pron: "أُو", mean: "Owl 🦉", minStrokes: 1 }, 
    "P": { pron: "بِـي", mean: "Pen 🖊️", minStrokes: 2 },
    "Q": { pron: "كْيُـو", mean: "Queen 👑", minStrokes: 2 }, 
    "R": { pron: "آرْ", mean: "Rabbit 🐰", minStrokes: 2 },
    "S": { pron: "إِسْ", mean: "Sun ☀️", minStrokes: 1 }, 
    "T": { pron: "تِـي", mean: "Tree 🌳", minStrokes: 2 },
    "U": { pron: "يُـو", mean: "Umbrella ☂️", minStrokes: 1 }, 
    "V": { pron: "فِـي", mean: "Van 🚐", minStrokes: 1 },
    "W": { pron: "دَبَلْيُـو", mean: "Water 💧", minStrokes: 1 }, 
    "X": { pron: "إِكْسْ", mean: "X-ray", minStrokes: 2 },
    "Y": { pron: "وَايْ", mean: "Yellow 🟡", minStrokes: 2 }, 
    "Z": { pron: "زِيرُو", mean: "Zebra 🦓", minStrokes: 1 },
    "0": { pron: "زِيرُو", mean: "Zero", minStrokes: 1 }, 
    "1": { pron: "وَانْ", mean: "One", minStrokes: 1 },
    "2": { pron: "تُـو", mean: "Two", minStrokes: 1 }, 
    "3": { pron: "ثْرِي", mean: "Three", minStrokes: 2 },
    "4": { pron: "فُـورْ", mean: "Four", minStrokes: 2 }, 
    "5": { pron: "فَايْفْ", mean: "Five", minStrokes: 2 },
    "6": { pron: "سِكْسْ", mean: "Six", minStrokes: 1 }, 
    "7": { pron: "سَفَنْ", mean: "Seven", minStrokes: 1 },
    "8": { pron: "إَيْتْ", mean: "Eight", minStrokes: 1 }, 
    "9": { pron: "نَايْنْ", mean: "Nine", minStrokes: 1 },
    "cat": { pron: "كَّاتْ", mean: "قطة 🐱", minStrokes: 2 }, 
    "dog": { pron: "دُوغْ", mean: "كلب 🐶", minStrokes: 2 },
    "sun": { pron: "سَنْ", mean: "شمس ☀️", minStrokes: 2 }, 
    "pen": { pron: "بِينْ", mean: "قلم 🖊️", minStrokes: 3 },
    "book": { pron: "بُوكْ", mean: "كتاب 📖", minStrokes: 3 }, 
    "milk": { pron: "مِيلْكْ", mean: "حليب 🥛", minStrokes: 3 },
    "rabbit": { pron: "رَابِتْ", mean: "أرنب 🐇", minStrokes: 4 }, 
    "fish": { pron: "فِيشْ", mean: "سمكة 🐟", minStrokes: 2 },
    "frog": { pron: "فْرُوغْ", mean: "ضفدع 🐸", minStrokes: 3 }
  };

  data.lowercase.forEach(ch => {
    const upper = ch.toUpperCase();
    dictionary[ch] = { 
      pron: dictionary[upper] ? dictionary[upper].pron : ch, 
      mean: "حرف صغير (" + upper + ")",
      minStrokes: dictionary[upper] ? dictionary[upper].minStrokes : 1 
    };
  });

  const P = {
    A:[[[12,92],[50,8],[88,92]],[[29,61],[71,61]]],
    B:[[[25,92],[25,8]],[[25,8],[58,8],[76,20],[76,32],[62,45],[25,45]],[[25,45],[62,45],[79,58],[79,73],[63,90],[25,92]]],
    C:[[[82,20],[68,9],[46,8],[28,20],[17,39],[17,62],[28,81],[47,92],[69,89],[82,78]]],
    D:[[[25,92],[25,8]],[[25,8],[54,8],[75,23],[83,43],[81,62],[68,82],[52,92],[25,92]]],
    E:[[[76,9],[25,9],[25,92],[78,92]],[[25,49],[66,49]]],
    F:[[[25,92],[25,8],[78,8]],[[25,48],[66,48]]],
    G:[[[81,22],[67,9],[45,8],[27,20],[17,41],[18,64],[29,82],[49,92],[70,86],[81,72],[81,54],[57,54]]],
    H:[[[23,8],[23,92]],[[77,8],[77,92]],[[23,49],[77,49]]],
    I:[[[30,8],[70,8]],[[50,8],[50,92]],[[30,92],[70,92]]],
    J:[[[32,8],[77,8]],[[68,8],[68,72],[59,88],[43,92],[28,84],[23,72]]],
    K:[[[25,8],[25,92]],[[76,8],[27,48],[79,92]]],
    L:[[[25,8],[25,92],[78,92]]],
    M:[[[15,92],[15,8],[50,54],[85,8],[85,92]]],
    N:[[[20,92],[20,8],[80,92],[80,8]]],
    O:[[[50,8],[71,12],[83,31],[85,53],[76,77],[59,91],[40,92],[23,79],[15,57],[17,34],[29,15],[50,8]]],
    P:[[[25,92],[25,8],[58,8],[76,20],[77,34],[65,47],[25,47]]],
    Q:[[[50,8],[71,12],[83,31],[85,53],[76,77],[59,91],[40,92],[23,79],[15,57],[17,34],[29,15],[50,8]],[[59,70],[84,94]]],
    R:[[[25,92],[25,8],[58,8],[76,20],[77,34],[65,47],[25,47]],[[52,47],[80,92]]],
    S:[[[78,17],[62,8],[41,9],[25,21],[27,36],[42,45],[63,52],[76,65],[73,81],[57,91],[36,91],[21,82]]],
    T:[[[15,8],[85,8]],[[50,8],[50,92]]],
    U:[[[22,8],[22,65],[29,83],[44,92],[58,92],[73,82],[79,65],[79,8]]],
    V:[[[15,8],[49,92],[85,8]]],
    W:[[[10,8],[28,92],[50,52],[72,92],[90,8]]],
    X:[[[20,8],[80,92]],[[80,8],[20,92]]],
    Y:[[[16,8],[50,48],[84,8]],[[50,48],[50,92]]],
    Z:[[[20,8],[80,8],[20,92],[80,92]]],
    "0":[[[50,8],[70,15],[81,35],[81,65],[70,85],[50,92],[30,85],[19,65],[19,35],[30,15],[50,8]]],
    "1":[[[30,25],[49,8],[49,92]],[[30,92],[70,92]]],
    "2":[[[20,25],[30,12],[50,8],[70,15],[80,30],[74,43],[20,92],[82,92]]],
    "3":[[[22,16],[48,8],[69,13],[79,27],[73,40],[52,48]],[[52,48],[72,53],[80,68],[72,84],[51,92],[22,84]]],
    "4":[[[65,92],[65,8],[18,62],[83,62]]],
    "5":[[[76,8],[30,8],[26,43],[52,39],[72,48],[79,65],[71,83],[53,92],[29,86],[20,78]]],
    "6":[[[73,14],[53,8],[34,18],[22,39],[20,65],[31,84],[49,92],[68,84],[78,68],[72,52],[57,45],[38,48],[22,61]]],
    "7":[[[18,8],[82,8],[42,92]]],
    "8":[[[50,48],[30,39],[27,23],[38,9],[59,8],[73,20],[70,36],[50,48],[30,57],[25,74],[37,90],[60,92],[76,79],[72,61],[50,48]]],
    "9":[[[72,48],[57,54],[38,49],[24,35],[27,18],[43,8],[62,10],[77,27],[79,51],[70,75],[52,90],[31,92]]]
  };

  const lower = {
    a:[[[70,42],[56,30],[39,31],[25,43],[22,62],[29,79],[44,85],[59,78],[70,63]],[[70,31],[70,85]]],
    b:[[[27,8],[27,85]],[[27,59],[38,36],[54,31],[69,42],[73,61],[66,78],[51,85],[36,79],[27,59]]],
    c:[[[72,40],[58,31],[41,32],[27,44],[24,63],[35,80],[52,85],[70,77]]],
    d:[[[72,8],[72,85]],[[72,59],[60,36],[44,31],[29,42],[25,61],[32,78],[47,85],[62,78],[72,59]]],
    e:[[[26,57],[69,55],[65,41],[51,32],[37,36],[26,49],[25,65],[36,80],[53,85],[69,77]]],
    f:[[[64,13],[52,8],[40,15],[37,35],[37,85]],[[23,39],[59,39]]],
    g:[[[69,34],[55,31],[40,34],[28,45],[27,61],[35,74],[50,78],[66,69],[69,52]],[[69,34],[69,83],[60,94],[43,96],[29,90]]],
    h:[[[27,8],[27,85]],[[27,49],[42,33],[57,32],[69,43],[69,85]]],
    i:[[[50,34],[50,85]],[[50,18],[50,22]]],
    j:[[[57,34],[57,84],[48,95],[35,95]],[[57,18],[57,22]]],
    k:[[[29,8],[29,85]],[[70,33],[31,59],[72,85]]],
    l:[[[50,8],[50,85]]],
    m:[[[18,85],[18,34]],[[18,48],[31,34],[43,34],[50,45],[50,85]],[[50,48],[63,34],[75,36],[82,47],[82,85]]],
    n:[[[27,85],[27,34]],[[27,49],[42,34],[57,34],[70,45],[70,85]]],
    o:[[[50,31],[66,37],[75,52],[71,70],[59,82],[43,85],[29,75],[24,58],[30,42],[50,31]]],
    p:[[[28,35],[28,96]],[[28,51],[41,35],[56,33],[70,44],[72,61],[63,77],[48,82],[28,69]]],
    q:[[[72,35],[72,96]],[[72,51],[59,35],[44,33],[30,44],[28,61],[37,77],[52,82],[72,69]]],
    r:[[[29,85],[29,34]],[[29,48],[43,35],[58,35]]],
    s:[[[69,40],[56,32],[41,34],[31,43],[38,53],[57,59],[69,68],[60,80],[43,84],[29,77]]],
    t:[[[48,17],[48,73],[57,84],[68,81]],[[30,37],[65,37]]],
    u:[[[27,34],[27,67],[38,82],[53,84],[69,69],[69,34]],[[69,34],[69,84]]],
    v:[[[24,34],[49,85],[76,34]]],
    w:[[[16,34],[31,85],[49,54],[66,85],[84,34]]],
    x:[[[27,34],[72,85]],[[72,34],[27,85]]],
    y:[[[24,34],[48,82],[72,34]],[[48,82],[37,96]]],
    z:[[[27,35],[73,35],[27,84],[73,84]]]
  };
  Object.assign(P, lower);

  function getWordPaths(word) {
    const chars = word.toLowerCase().split("");
    const count = chars.length;
    const charWidth = 80 / count;
    let combined = [];
    chars.forEach((char, idx) => {
      const paths = P[char];
      if (!paths) return;
      const startX = 10 + idx * charWidth;
      const scaled = paths.map(stroke => stroke.map(pt => [startX + (pt[0]/100)*(charWidth * 0.85), pt[1]]));
      combined.push(...scaled);
    });
    return combined;
  }

  const kind = document.getElementById("kind");
  const lesson = document.getElementById("lesson");
  const mode = document.getElementById("learningMode");
  const board = document.getElementById("board");
  const guideCanvas = document.getElementById("guide");
  const drawCanvas = document.getElementById("draw");
  const g = guideCanvas.getContext("2d");
  const c = drawCanvas.getContext("2d");
  const message = document.getElementById("message");
  const currentTitle = document.getElementById("currentTitle");
  const pronText = document.getElementById("pronText");
  const meanText = document.getElementById("meanText");

  let current = "A", strokes = [], activeStroke = null, dpr = 1;
  let animationTimer = null, animationToken = 0;

  window.resizeWritingBoard = function() {
    const rect = board.getBoundingClientRect();
    dpr = Math.max(1, window.devicePixelRatio || 1);
    [guideCanvas, drawCanvas].forEach(canvas => {
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
    });
    g.setTransform(dpr,0,0,dpr,0,0);
    c.setTransform(dpr,0,0,dpr,0,0);
    drawGuide(); redraw();
  };

  function populateLessons() {
    lesson.innerHTML = "";
    data[kind.value].forEach(val => {
      const opt = document.createElement("option");
      opt.value = val; opt.textContent = val;
      lesson.appendChild(opt);
    });
    updateLesson();
  }

  function updateLesson() {
    current = lesson.value;
    currentTitle.textContent = "التدريب على: " + current;
    const info = dictionary[current] || { pron: "-", mean: "-", minStrokes: 1 };
    pronText.textContent = info.pron;
    meanText.textContent = info.mean;
    stopAnimation(); clearDrawing(); drawGuide();
    message.textContent = mode.value === "watch" ? "اضغط «شاهد خطوات الرسم» لمشاهدة الطريقة." : "ارسم الحرف بدقة داخل المربع الرمادي.";
  }

  function stopAnimation() {
    animationToken++;
    if (animationTimer !== null) clearTimeout(animationTimer);
    animationTimer = null;
  }

  function guideFontSize(w, h) {
    if (current.length > 3) return Math.min(w * 0.14, h * 0.28);
    if (current.length > 1) return Math.min(w * 0.22, h * 0.38);
    return Math.min(w * 0.62, h * 0.72);
  }

  function drawGuide() {
    const w = board.clientWidth, h = board.clientHeight;
    g.clearRect(0,0,w,h);
    g.strokeStyle = "#cbd5e1"; g.lineWidth = 1.5;
    [0.22, 0.5, 0.78].forEach((p, i) => {
      g.setLineDash(i === 1 ? [6, 6] : []);
      g.beginPath(); g.moveTo(16, h * p); g.lineTo(w - 16, h * p); g.stroke();
    });
    g.setLineDash([]);
    const size = guideFontSize(w, h);
    g.save();
    g.font = `bold ${size}px system-ui, Arial, sans-serif`;
    g.textAlign = "center"; g.textBaseline = "middle"; g.direction = "ltr";
    g.lineWidth = 3; g.setLineDash([6, 6]); g.strokeStyle = "#94a3b8";
    g.strokeText(current, w / 2, h / 2);
    g.globalAlpha = 0.12; g.fillStyle = "#475569";
    g.fillText(current, w / 2, h / 2);
    g.restore();
  }

  function getPoint(e) {
    const r = drawCanvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  drawCanvas.addEventListener("pointerdown", e => {
    if (mode.value !== "practice") { message.textContent = "اختر «تدرّب بنفسك» لتستطيع الكتابة."; return; }
    e.preventDefault(); stopAnimation();
    try { drawCanvas.setPointerCapture(e.pointerId); } catch(_){}
    activeStroke = [getPoint(e)]; strokes.push(activeStroke); redraw();
  });
  drawCanvas.addEventListener("pointermove", e => { if (!activeStroke) return; e.preventDefault(); activeStroke.push(getPoint(e)); redraw(); });
  const endStroke = () => { activeStroke = null; };
  drawCanvas.addEventListener("pointerup", endStroke);
  drawCanvas.addEventListener("pointercancel", endStroke);

  function redraw() {
    const w = board.clientWidth, h = board.clientHeight;
    c.clearRect(0, 0, w, h);
    c.strokeStyle = "#16a34a"; c.lineWidth = 6; c.lineCap = "round"; c.lineJoin = "round";
    strokes.forEach(s => {
      if (!s.length) return;
      c.beginPath(); c.moveTo(s[0].x, s[0].y);
      for (let i = 1; i < s.length; i++) c.lineTo(s[i].x, s[i].y);
      if (s.length === 1) c.lineTo(s[0].x + 0.1, s[0].y + 0.1);
      c.stroke();
    });
  }

  function clearDrawing() { strokes = []; activeStroke = null; redraw(); }

  function showDrawingMethod() {
    stopAnimation(); clearDrawing();
    const paths = current.length > 1 && !P[current] ? getWordPaths(current) : P[current];
    if (!paths || !paths.length) { message.textContent = "عذرًا، الشرح الحركي غير متوفر."; return; }
    const w = board.clientWidth, h = board.clientHeight;
    const scale = Math.min(w * 0.72, h * 0.76) / 100;
    const ox = (w - 100 * scale) / 2, oy = (h - 100 * scale) / 2;
    const token = animationToken;
    let strokeIdx = 0, ptIdx = 0;
    message.textContent = "تابع النقطة الخضراء والسهم لتعلم اتجاه الضربات...";

    function animateFrame() {
      if (token !== animationToken) return;
      if (strokeIdx >= paths.length) { animationTimer = null; message.textContent = "ممتاز! انتهى الشرح."; return; }
      const path = paths[strokeIdx];
      c.clearRect(0, 0, w, h);
      for (let k = 0; k < strokeIdx; k++) {
        const p = paths[k];
        c.beginPath(); c.moveTo(ox + p[0][0]*scale, oy + p[0][1]*scale);
        for (let m = 1; m < p.length; m++) c.lineTo(ox + p[m][0]*scale, oy + p[m][1]*scale);
        c.strokeStyle = "#16a34a"; c.lineWidth = 6; c.stroke();
      }
      c.beginPath(); c.moveTo(ox + path[0][0]*scale, oy + path[0][1]*scale);
      for (let m = 1; m <= ptIdx; m++) c.lineTo(ox + path[m][0]*scale, oy + path[m][1]*scale);
      c.strokeStyle = "#15803d"; c.lineWidth = 6; c.stroke();
      const sx = ox + path[0][0]*scale, sy = oy + path[0][1]*scale;
      c.beginPath(); c.arc(sx, sy, 7, 0, Math.PI*2); c.fillStyle = "#22c55e"; c.fill();
      if (ptIdx < path.length - 1) { ptIdx++; animationTimer = setTimeout(animateFrame, 180); }
      else { strokeIdx++; ptIdx = 0; animationTimer = setTimeout(animateFrame, 350); }
    }
    animateFrame();
  }

  // نظام فحص صارم واحترافي يعتمد على عدد الضربات ومنطق الرسم
  function checkWork() {
    const userPoints = strokes.flat();
    if (userPoints.length < 15) {
      message.style.color = "#dc2626";
      message.textContent = "❌ الرسمة صغيرة جداً أو غير واضحة، حاول مجدداً.";
      return;
    }

    const info = dictionary[current] || { minStrokes: 1 };
    const requiredStrokes = info.minStrokes;

    if (strokes.length < requiredStrokes) {
      message.style.color = "#dc2626";
      message.textContent = `❌ عدد الحركات غير صحيح. حرف (${current}) يتطلب على الأقل ${requiredStrokes} حركات (ضربات قلم). شاهد خطوات الرسم!`;
      return;
    }

    message.style.color = "#15803d";
    message.textContent = "🌟 ممتاز جداً! كتابة دقيقة وصحيحة.";
  }

  kind.addEventListener("change", populateLessons);
  lesson.addEventListener("change", updateLesson);
  mode.addEventListener("change", () => { stopAnimation(); clearDrawing(); drawGuide(); });
  document.getElementById("speakBtn").addEventListener("click", () => window.speakText(current));
  document.getElementById("showSteps").addEventListener("click", showDrawingMethod);
  document.getElementById("clear").addEventListener("click", clearDrawing);
  document.getElementById("undo").addEventListener("click", () => { stopAnimation(); strokes.pop(); redraw(); });
  document.getElementById("check").addEventListener("click", checkWork);
  document.getElementById("next").addEventListener("click", () => {
    lesson.selectedIndex = (lesson.selectedIndex + 1) % lesson.options.length;
    updateLesson();
  });

  populateLessons();
  window.resizeWritingBoard();
})();
