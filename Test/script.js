// ==========================================
    // 1. DATA: LÝ THUYẾT & BỘ CÂU HỎI
    // ==========================================
    const THEORY = [
      {
        id: "vector-basic",
        topic: "Vector",
        title: "Vector trong mặt phẳng và không gian",
        formula: "u + v",
        summary: "Vector là đại lượng có hướng và độ lớn. Trong tọa độ, vector được biểu diễn bằng các thành phần.",
        content: [
          "Trong mặt phẳng, vector thường có dạng v = (x, y).",
          "Trong không gian, vector thường có dạng v = (x, y, z).",
          "Hai vector bằng nhau khi các tọa độ tương ứng bằng nhau.",
          "Cộng hai vector bằng cách cộng từng tọa độ tương ứng."
        ],
        example: "Cho u=(1,2), v=(3,4). Tính u+v.",
        solution: "Ta cộng từng tọa độ: u+v=(1+3,2+4)=(4,6)."
      },
      {
        id: "dot-product",
        topic: "Vector",
        title: "Tích vô hướng",
        formula: "u · v",
        summary: "Tích vô hướng dùng để tính góc, độ dài và kiểm tra hai vector có vuông góc hay không.",
        content: [
          "Với u=(a,b,c), v=(x,y,z), ta có u·v = ax + by + cz.",
          "Nếu u·v = 0 và cả hai vector khác vector 0 thì u vuông góc với v.",
          "Độ dài vector v được tính bằng căn bậc hai của v·v."
        ],
        example: "Tính (1,2,3)·(2,0,1).",
        solution: "Ta có 1·2 + 2·0 + 3·1 = 2 + 0 + 3 = 5."
      },
      {
        id: "matrix-basic",
        topic: "Ma trận",
        title: "Ma trận và phép nhân ma trận",
        formula: "A · B",
        summary: "Ma trận là bảng số gồm hàng và cột. Phép nhân ma trận lấy hàng nhân với cột.",
        content: [
          "Ma trận kích thước m×n có m hàng và n cột.",
          "Muốn nhân AB thì số cột của A phải bằng số hàng của B.",
          "Phần tử hàng i, cột j của AB được tính bằng hàng i của A nhân với cột j của B.",
          "Thông thường AB không nhất thiết bằng BA."
        ],
        example: "Cho A=[[1,2],[3,4]], v=(1,1). Tính Av.",
        solution: "Av=(1·1+2·1,3·1+4·1)=(3,7)."
      },
      {
        id: "det-2x2",
        topic: "Định thức",
        title: "Định thức ma trận 2×2",
        formula: "det(A)",
        summary: "Định thức giúp nhận biết ma trận vuông có khả nghịch hay không.",
        content: [
          "Với A = [[a,b],[c,d]], định thức của A là ad - bc.",
          "Nếu det(A) ≠ 0 thì A có ma trận nghịch đảo.",
          "Nếu det(A) = 0 thì A không khả nghịch.",
          "Trị tuyệt đối của định thức cho biết hệ số thay đổi diện tích."
        ],
        example: "Tính det([[1,2],[3,4]]).",
        solution: "det = 1·4 - 2·3 = 4 - 6 = -2."
      },
      {
        id: "linear-system",
        topic: "Hệ phương trình",
        title: "Hệ phương trình tuyến tính",
        formula: "Ax = b",
        summary: "Hệ phương trình tuyến tính có thể viết gọn dưới dạng ma trận Ax=b.",
        content: [
          "A là ma trận hệ số, x là vector ẩn, b là vector vế phải.",
          "Hệ có thể có nghiệm duy nhất, vô nghiệm hoặc vô số nghiệm.",
          "Nếu A là ma trận vuông và det(A) ≠ 0 thì hệ Ax=b có nghiệm duy nhất.",
          "Khử Gauss là phương pháp biến đổi hệ về dạng đơn giản hơn để tìm nghiệm."
        ],
        example: "Giải hệ x+2y=5, 3x+4y=11.",
        solution: "Từ x+2y=5 suy ra x=5-2y. Thay vào 3x+4y=11 được 3(5-2y)+4y=11, suy ra y=2 và x=1. Nghiệm là (1,2)."
      },
      {
        id: "rank-basic",
        topic: "Không gian vector",
        title: "Rank và độc lập tuyến tính",
        formula: "rank(A)",
        summary: "Rank cho biết số hàng hoặc cột độc lập tuyến tính tối đa của ma trận.",
        content: [
          "Một tập vector độc lập tuyến tính nếu không vector nào viết được từ các vector còn lại.",
          "Rank của ma trận bằng số cột độc lập tuyến tính tối đa.",
          "Nếu một hàng là bội của hàng khác thì hai hàng đó phụ thuộc tuyến tính.",
          "Rank liên hệ trực tiếp với số nghiệm của hệ phương trình tuyến tính."
        ],
        example: "Tìm rank của A=[[1,2],[2,4]].",
        solution: "Hàng thứ hai bằng 2 lần hàng thứ nhất, nên hai hàng phụ thuộc tuyến tính. Vì ma trận không phải ma trận 0 nên rank(A)=1."
      },
      {
        id: "eigen-basic",
        topic: "Eigen",
        title: "Giá trị riêng và vector riêng",
        formula: "Av = λv",
        summary: "Vector riêng là vector không đổi hướng sau khi chịu tác động của ma trận.",
        content: [
          "Nếu Av = λv với v khác vector 0 thì v là vector riêng của A.",
          "Số λ gọi là giá trị riêng tương ứng với vector riêng v.",
          "Với ma trận chéo, các giá trị riêng chính là các phần tử trên đường chéo chính.",
          "Vector riêng giúp hiểu các hướng đặc biệt của biến đổi tuyến tính."
        ],
        example: "Tìm giá trị riêng của A=[[2,0],[0,3]].",
        solution: "A là ma trận chéo, nên các giá trị riêng là các phần tử trên đường chéo chính: 2 và 3."
      }
    ];

    const QUESTION_BANK = [
      {
        id: "q1",
        type: "mcq",
        topic: "Vector",
        level: "easy",
        question: "Cho u=(1,2), v=(3,4). Tính u+v.",
        options: ["(2,6)", "(4,6)", "(3,8)", "(4,2)"],
        answer: 1,
        explain: "u+v=(1+3,2+4)=(4,6)."
      },
      {
        id: "q2",
        type: "mcq",
        topic: "Vector",
        level: "easy",
        question: "Hai vector u và v vuông góc khi điều kiện nào đúng?",
        options: ["u+v=0", "u·v=0", "u=v", "u-v=0"],
        answer: 1,
        explain: "Hai vector vuông góc khi tích vô hướng bằng 0."
      },
      {
        id: "q3",
        type: "mcq",
        topic: "Vector",
        level: "easy",
        question: "Quan sát hình. Vector màu xanh có tọa độ nào?",
        image: { kind: "vector", vector: [3, 2], label: "v" },
        options: ["(2,3)", "(3,2)", "(-3,2)", "(3,-2)"],
        answer: 1,
        explain: "Điểm cuối của vector là (3,2), nên vector có tọa độ (3,2)."
      },
      {
        id: "q4",
        type: "mcq",
        topic: "Ma trận",
        level: "easy",
        question: "Cho A=[[1,2],[3,4]], I là ma trận đơn vị. A·I bằng gì?",
        options: ["I", "A", "0", "A²"],
        answer: 1,
        explain: "Nhân với ma trận đơn vị không làm thay đổi ma trận."
      },
      {
        id: "q5",
        type: "mcq",
        topic: "Định thức",
        level: "easy",
        question: "det([[1,2],[3,4]]) bằng bao nhiêu?",
        options: ["-2", "2", "10", "0"],
        answer: 0,
        explain: "det=1·4-2·3=-2."
      },
      {
        id: "q6",
        type: "mcq",
        topic: "Định thức",
        level: "medium",
        question: "Quan sát hình bình hành tạo bởi hai vector cột. Diện tích bằng bao nhiêu?",
        image: { kind: "parallelogram", a: [2, 1], b: [1, 3] },
        options: ["3", "4", "5", "6"],
        answer: 2,
        explain: "Diện tích bằng |det([[2,1],[1,3]])| = |2·3 - 1·1| = 5."
      },
      {
        id: "q7",
        type: "mcq",
        topic: "Hệ phương trình",
        level: "medium",
        question: "Hệ Ax=b có nghiệm duy nhất khi A vuông và điều kiện nào đúng?",
        options: ["det(A)=0", "det(A)≠0", "rank(A)=0", "A=0"],
        answer: 1,
        explain: "Nếu det(A) khác 0 thì A khả nghịch, hệ có nghiệm duy nhất."
      },
      {
        id: "q8",
        type: "fill",
        topic: "Vector",
        level: "easy",
        question: "Tính u+v với u=(2,5), v=(1,-3).",
        answers: ["(3,2)", "3,2", "3 2", "(3, 2)"],
        explain: "u+v=(2+1,5-3)=(3,2)."
      },
      {
        id: "q9",
        type: "fill",
        topic: "Vector",
        level: "easy",
        question: "Quan sát hình. Nhập tọa độ của vector v.",
        image: { kind: "vector", vector: [4, -2], label: "v" },
        answers: ["(4,-2)", "4,-2", "4 -2", "(4, -2)"],
        explain: "Vector đi từ gốc tọa độ đến điểm (4,-2)."
      },
      {
        id: "q10",
        type: "fill",
        topic: "Định thức",
        level: "easy",
        question: "Tính det([[2,5],[1,3]]).",
        answers: ["1"],
        explain: "det=2·3-5·1=1."
      },
      {
        id: "q11",
        type: "fill",
        topic: "Hệ phương trình",
        level: "medium",
        question: "Giải hệ x+2y=5, 3x+4y=11. Nhập nghiệm dạng (x,y).",
        answers: ["(1,2)", "1,2", "1 2", "(1, 2)"],
        explain: "Nghiệm là x=1, y=2."
      },
      {
        id: "q12",
        type: "fill",
        topic: "Không gian vector",
        level: "medium",
        question: "Tìm rank của A=[[1,2],[2,4]].",
        answers: ["1"],
        explain: "Hàng 2 = 2 lần hàng 1 nên rank(A)=1."
      },
      {
        id: "q13",
        type: "fill",
        topic: "Eigen",
        level: "medium",
        question: "Tìm các giá trị riêng của A=[[2,0],[0,3]]. Nhập dạng 2,3.",
        answers: ["2,3", "3,2", "2 3", "3 2"],
        explain: "Ma trận chéo có giá trị riêng là 2 và 3."
      },
      {
        id: "q14",
        type: "mcq",
        topic: "Định thức",
        level: "hard",
        question: "Nếu det(A)=5 và A là ma trận 2×2, det(2A) bằng bao nhiêu?",
        options: ["5", "10", "20", "25"],
        answer: 2,
        explain: "Với ma trận 2×2, det(kA)=k²det(A)=4·5=20."
      }
    ];

    // ==========================================
    // 2. STATE MANAGEMENT
    // ==========================================
    let currentView = "home";
    let currentTopic = "all";
    let selectedLessonId = THEORY[0].id;
    let currentTest = null;
    let currentTestSource = "normal";
    let lastTestSetup = null;
    let lastAISetup = null;

    const app = document.getElementById("app");
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");

    // ==========================================
    // 3. UTILITY & MATH RENDER ENGINE (Parser vạn năng tối ưu)
    // ==========================================
    function getScores() {
      try {
        return JSON.parse(localStorage.getItem("sagela_scores_clean") || "[]");
      } catch (e) {
        console.error("Lỗi parse localStorage:", e);
        return [];
      }
    }

    function setScores(data) {
      try {
        localStorage.setItem("sagela_scores_clean", JSON.stringify(data));
      } catch (e) {
        console.error("Lỗi set localStorage:", e);
      }
    }

    // Đệ quy phân tích sâu chuỗi ma trận và vector bất kỳ (n x m) để render chuẩn xác
    function parseMathBeauty(text) {
      if (!text) return "";
      
      // Khử định dạng ma trận dạng mảng sâu [[a,b,c],[d,e,f],...]
      let result = text.replace(/\[\[(.*?)\]\]/g, function(match, innerContent) {
        try {
          // Tách các hàng bằng cấu trúc phân tích mảng con ],[
          const rows = innerContent.split(/\],\[/);
          const matrixData = rows.map(r => r.split(','));
          const rowCount = matrixData.length;
          const colCount = Math.max(...matrixData.map(r => r.length));
          
          let gridItems = "";
          matrixData.forEach(row => {
            row.forEach(val => {
              gridItems += `<span>${val.trim()}</span>`;
            });
          });

          return `
            <span class="math-matrix">
              <span class="math-matrix-grid" style="grid-template-columns: repeat(${colCount}, 1fr)">
                ${gridItems}
              </span>
            </span>
          `;
        } catch (e) {
          return match;
        }
      });

      // Render vector dạng (x, y) hoặc (x, y, z)
      result = result.replace(/\((-?\w+),(-?\w+)(,(-?\w+))?\)/g, function(match, x, y, dummy, z) {
        const coords = z ? [x, y, z] : [x, y];
        return `
          <span class="math-matrix">
            <span class="math-matrix-grid" style="grid-template-columns: 1fr;">
              ${coords.map(c => `<span>${c}</span>`).join('')}
            </span>
          </span>
        `;
      });
      
      return result;
    }

    function cleanAnswer(text) {
      return String(text)
        .toLowerCase()
        .trim()
        .replaceAll(";", ",")
        .replace(/[()\[\]{}]/g, "")
        .replace(/\s+/g, ",")
        .replace(/,+/g, ",")
        .replace(/^,|,$/g, "");
    }

    function shuffle(array) {
      const a = [...array];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    function randInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randNonZero(min, max) {
      let x = 0;
      while (x === 0) x = randInt(min, max);
      return x;
    }

    function vecStr(v) {
      return "(" + v.join(",") + ")";
    }

    function matStr(A) {
      return "[[" + A[0].join(",") + "],[" + A[1].join(",") + "]]";
    }

    function det2(A) {
      return A[0][0] * A[1][1] - A[0][1] * A[1][0];
    }

    function setActive(key) {
      // Đồng bộ hóa class active cho cả sidebar và navigation chips
      document.querySelectorAll(".side-item").forEach((el) => {
        const value = el.dataset.view || el.dataset.topic;
        el.classList.toggle("active", value === key);
      });

      document.querySelectorAll(".chip").forEach((el) => {
        el.classList.toggle("active", el.dataset.view === key);
      });
    }

    function triggerViewAnimation() {
      app.classList.remove("animate-fade-in");
      void app.offsetWidth; // Trigger reflow
      app.classList.add("animate-fade-in");
    }

    function showView(view) {
      currentView = view;
      setActive(view);
      triggerViewAnimation();

      if (window.innerWidth <= 768) {
        sidebar.classList.remove("mobile-open");
      }

      if (view === "home") renderHome();
      if (view === "theory") renderTheory();
      if (view === "testSetup") renderTestSetup();
      if (view === "aiSetup") renderAISetup();
      if (view === "scores") renderScores();
    }

    function goBack() {
      if (currentView === "takingTest") {
        if (confirm("Quay lại sẽ hủy bài đang làm. Bạn chắc chắn?")) {
          currentTest = null;
          showView(currentTestSource === "ai" ? "aiSetup" : "testSetup");
        }
        return;
      }

      if (currentView === "testResult") {
        showView(currentTestSource === "ai" ? "aiSetup" : "testSetup");
        return;
      }

      showView("home");
    }

    function renderBackButton(label = "Quay lại") {
      return `<button class="secondary" onclick="goBack()">← ${label}</button>`;
    }

    function scoreStats() {
      const scores = getScores();
      const tests = scores.length;
      let total = 0;
      let correct = 0;

      scores.forEach((record) => {
        total += record.total;
        correct += record.correct;
      });

      const percent = total ? Math.round((correct / total) * 100) : 0;
      return { tests, percent };
    }

    // ==========================================
    // 4. GEOMETRY VISUALIZATION ENGINE (SVG Generators)
    // ==========================================
    function renderQuestionImage(image) {
      if (!image) return "";

      if (image.kind === "vector") {
        return `
          <div class="image-box">
            ${svgVector(image.vector, image.label || "v")}
          </div>
        `;
      }

      if (image.kind === "parallelogram") {
        return `
          <div class="image-box">
            ${svgParallelogram(image.a, image.b)}
          </div>
        `;
      }

      return "";
    }

    function svgVector(v, label) {
      const W = 420;
      const H = 260;
      const scale = 25;
      const cx = W / 2;
      const cy = H / 2;
      const x = cx + v[0] * scale;
      const y = cy - v[1] * scale;

      return `
        <svg viewBox="0 0 ${W} ${H}" style="background:#fff; border-radius:12px;">
          ${svgGrid(W, H, scale, cx, cy)}
          <defs>
            <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#2563eb"></path>
            </marker>
          </defs>
          <line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#2563eb" stroke-width="3" marker-end="url(#arrowBlue)"></line>
          <text x="${x + 8}" y="${y - 8}" fill="#2563eb" font-size="14" font-weight="900">${label}</text>
        </svg>
      `;
    }

    function svgParallelogram(a, b) {
      const W = 420;
      const H = 260;
      const scale = 25;
      const cx = W / 2;
      const cy = H / 2;

      const p0 = [cx, cy];
      const p1 = [cx + a[0] * scale, cy - a[1] * scale];
      const p2 = [cx + b[0] * scale, cy - b[1] * scale];
      const p3 = [p1[0] + b[0] * scale, p1[1] - b[1] * scale];

      return `
        <svg viewBox="0 0 ${W} ${H}" style="background:#fff; border-radius:12px;">
          ${svgGrid(W, H, scale, cx, cy)}
          <polygon
            points="${p0.join(",")} ${p1.join(",")} ${p3.join(",")} ${p2.join(",")}"
            fill="rgba(37,99,235,0.12)"
            stroke="#2563eb"
            stroke-width="2">
          </polygon>
          <line x1="${p0[0]}" y1="${p0[1]}" x2="${p1[0]}" y2="${p1[1]}" stroke="#ef4444" stroke-width="3"></line>
          <line x1="${p0[0]}" y1="${p0[1]}" x2="${p2[0]}" y2="${p2[1]}" stroke="#16a34a" stroke-width="3"></line>
          <text x="${p1[0] + 8}" y="${p1[1] - 8}" fill="#ef4444" font-size="13" font-weight="900">a</text>
          <text x="${p2[0] + 8}" y="${p2[1] - 8}" fill="#16a34a" font-size="13" font-weight="900">b</text>
        </svg>
      `;
    }

    function svgGrid(W, H, scale, cx, cy) {
      let lines = "";

      for (let x = cx % scale; x < W; x += scale) {
        lines += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="#f1f5f9" stroke-width="1"></line>`;
      }

      for (let y = cy % scale; y < H; y += scale) {
        lines += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="#f1f5f9" stroke-width="1"></line>`;
      }

      lines += `<line x1="0" y1="${cy}" x2="${W}" y2="${cy}" stroke="#94a3b8" stroke-width="1.5"></line>`;
      lines += `<line x1="${cx}" y1="0" x2="${cx}" y2="${H}" stroke="#94a3b8" stroke-width="1.5"></line>`;
      lines += `<text x="${cx + 5}" y="${cy - 5}" fill="#64748b" font-size="11" font-weight="700">O</text>`;

      return lines;
    }

    // ==========================================
    // 5. RENDERING CORE PAGES
    // ==========================================
    function renderHome() {
      const stats = scoreStats();

      app.innerHTML = `
        <section class="hero">
          <div>
            <h1>Đại số tuyến tính dễ học hơn bao giờ hết</h1>
            <p>
              Hệ thống ôn luyện lý thuyết tương tác trực quan, kết hợp công cụ sinh đề tự động bằng thuật toán toán học. Giúp bạn nắm chắc mọi khái niệm cốt lõi.
            </p>
            <div class="hero-actions">
              <button class="hero-btn" onclick="showView('testSetup')">Làm kiểm tra</button>
              <button class="hero-btn ghost" onclick="showView('aiSetup')">Tự tạo đề từ AI</button>
              <button class="hero-btn ghost" onclick="showView('theory')">Ôn lý thuyết</button>
            </div>
          </div>

          <div class="hero-panel">
            <div>
              <div class="big-formula">A · x = b</div>
              <div style="font-size: 13px; opacity:0.9;">Hệ phương trình, Vector, Ma trận, Định thức, Trị riêng...</div>
            </div>
          </div>
        </section>

        <div class="stats">
          <div class="stat">
            <strong>${THEORY.length}</strong>
            <span>Bài lý thuyết</span>
          </div>
          <div class="stat">
            <strong>${stats.tests}</strong>
            <span>Bài đã hoàn thành</span>
          </div>
          <div class="stat">
            <strong>${stats.percent}%</strong>
            <span>Tỉ lệ đúng</span>
          </div>
        </div>

        <div class="section-head">
          <div>
            <h2>Tính năng hệ thống</h2>
            <div class="muted">Khám phá phương pháp học tập tối ưu, trực quan bằng hình học.</div>
          </div>
        </div>

        <section class="grid">
          ${featureCard("📘", "Lý thuyết chuẩn hóa", "Hệ thống bài học tóm tắt súc tích kèm theo ví dụ giải chi tiết ngay cùng khung nhìn.", "#2563eb", "#06b6d4", "showView('theory')")}
          ${featureCard("📝", "Đề kiểm tra sẵn có", "Bộ câu hỏi chất lượng cao đa dạng các mức độ từ cơ bản đến nâng cao.", "#8b5cf6", "#ec4899", "showView('testSetup')")}
          ${featureCard("✨", "Sinh câu hỏi tự động (AI)", "Thuật toán tự động sinh số ngẫu nhiên theo công thức chuẩn hóa, không lo trùng lặp.", "#581c87", "#1d4ed8", "showView('aiSetup')")}
        </section>
      `;
    }

    function featureCard(icon, title, desc, c1, c2, action) {
      return `
        <article class="card">
          <div class="card-top" style="--c1:${c1};--c2:${c2};">
            <div class="tag">${icon}</div>
            <div class="formula">${title}</div>
          </div>
          <div class="card-body">
            <div class="card-desc">${desc}</div>
            <div class="btn-row">
              <button class="primary" onclick="${action}">Khám phá</button>
            </div>
          </div>
        </article>
      `;
    }

    // ==========================================
    // 6. THEORY SECTION
    // ==========================================
    function filteredTheory() {
      const searchInput = document.getElementById("searchInput");
      const keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";

      return THEORY.filter((item) => {
        const byTopic = currentTopic === "all" || item.topic === currentTopic;
        const bySearch =
          !keyword ||
          item.title.toLowerCase().includes(keyword) ||
          item.topic.toLowerCase().includes(keyword) ||
          item.summary.toLowerCase().includes(keyword);

        return byTopic && bySearch;
      });
    }

    function renderTheory() {
      const list = filteredTheory();
      const selected = THEORY.find((x) => x.id === selectedLessonId) || list[0] || THEORY[0];

      app.innerHTML = `
        <div class="section-head">
          <div>
            <h2>📘 Lý thuyết toán học trực quan</h2>
            <div class="muted">Nhấn chọn một bài học trong danh sách bên trái để học nhanh.</div>
          </div>
          ${renderBackButton()}
        </div>

        <div class="lesson-layout">
          <div class="lesson-list">
            ${
              list.map((item) => `
                <div class="lesson-item ${item.id === selected.id ? "active" : ""}" onclick="selectLesson('${item.id}')">
                  <h4>${item.title}</h4>
                  <div class="muted">${item.topic} • ${item.formula}</div>
                </div>
              `).join("") ||
              `<div class="empty"><h3>Không tìm thấy lý thuyết tương ứng</h3></div>`
            }
          </div>

          <div class="lesson-view">
            <span class="badge">${selected.topic}</span>
            <h2>${selected.title}</h2>
            <div class="math-box">${parseMathBeauty(selected.formula)}</div>
            <p class="muted">${selected.summary}</p>

            <h3 style="font-size:16px; font-weight:800; margin-top:20px;">Nội dung cốt lõi</h3>
            <ul style="padding-left: 20px; line-height: 1.6; font-size:14px; color: #334155;">
              ${selected.content.map((line) => `<li>${parseMathBeauty(line)}</li>`).join("")}
            </ul>

            <div class="example-solution">
              <h3 style="font-size: 14px; color: var(--blue);">Ví dụ minh họa & Giải pháp</h3>
              <b style="font-size:13px;">Bài toán:</b>
              <p style="font-size:14px; margin: 4px 0 10px;">${parseMathBeauty(selected.example)}</p>
              <div class="divider"></div>
              <b style="font-size:13px;">Hướng dẫn giải chi tiết:</b>
              <p style="font-size:14px; margin: 4px 0 0;">${parseMathBeauty(selected.solution)}</p>
            </div>
          </div>
        </div>
      `;
    }

    function selectLesson(id) {
      selectedLessonId = id;
      renderTheory();
    }

    // ==========================================
    // 7. SETUP GENERATING TEST
    // ==========================================
    function getTopics() {
      return ["Vector", "Ma trận", "Định thức", "Hệ phương trình", "Không gian vector", "Eigen"];
    }

    function renderTestSetup() {
      renderSetupPage({
        source: "normal",
        title: "📝 Tạo bài kiểm tra",
        subtitle: "Sinh đề thi ngẫu nhiên dựa trên kho câu hỏi có sẵn.",
        headClass: "",
        note: "Chọn số lượng câu và cấu hình mong muốn để hệ thống tự động lọc đề toán."
      });
    }

    function renderAISetup() {
      renderSetupPage({
        source: "ai",
        title: "✨ Tạo bài từ động bằng AI",
        subtitle: "Công nghệ sinh số ngẫu nhiên theo thuật toán ma trận.",
        headClass: "ai",
        note: "Mỗi lượt tạo mới sẽ cho ra đời các số liệu hoàn toàn khác biệt, rèn luyện kỹ năng tính toán."
      });
    }

    function renderSetupPage(config) {
      const setup = config.source === "ai" ? lastAISetup : lastTestSetup;
      const topics = getTopics();

      app.innerHTML = `
        <div class="section-head">
          <div>
            <h2>${config.title}</h2>
            <div class="muted">${config.subtitle}</div>
          </div>
          ${renderBackButton()}
        </div>

        <div class="test-shell">
          <div class="panel">
            <h3>Cấu hình bộ đề</h3>

            <div class="form-grid">
              <div class="field">
                <label>Số lượng câu</label>
                <select id="numQuestions">
                  ${[10, 20, 30, 40].map((n) => `
                    <option value="${n}" ${setup?.numQuestions === n ? "selected" : ""}>${n} câu</option>
                  `).join("")}
                </select>
              </div>

              <div class="field">
                <label>Dạng câu hỏi</label>
                <select id="questionType">
                  <option value="mixed" ${setup?.questionType === "mixed" ? "selected" : ""}>Hỗn hợp</option>
                  <option value="mcq" ${setup?.questionType === "mcq" ? "selected" : ""}>Trắc nghiệm</option>
                  <option value="fill" ${setup?.questionType === "fill" ? "selected" : ""}>Điền đáp án</option>
                </select>
              </div>

              <div class="field">
                <label>Độ khó</label>
                <select id="levelSelect">
                  <option value="easy" ${setup?.level === "easy" ? "selected" : ""}>Cơ bản</option>
                  <option value="medium" ${setup?.level === "medium" ? "selected" : ""}>Trung bình</option>
                  <option value="hard" ${setup?.level === "hard" ? "selected" : ""}>Nâng cao</option>
                </select>
              </div>
            </div>

            <h3 style="margin-top:18px;">Chọn nội dung kiểm tra</h3>

            <div class="check-grid">
              ${topics.map((topic) => `
                <label class="check-card">
                  <input type="checkbox" class="topic-check" value="${topic}" ${!setup || setup.topics.includes(topic) ? "checked" : ""}>
                  <span>${topic}</span>
                </label>
              `).join("")}
            </div>

            <div class="btn-row" style="margin-top:20px;">
              <button class="primary" onclick="createTest('${config.source}')">Bắt đầu làm bài</button>
              <button class="secondary" onclick="selectAllTopics(true)">Chọn tất cả</button>
              <button class="secondary" onclick="selectAllTopics(false)">Bỏ chọn</button>
            </div>

            <div id="setupResult" style="margin-top: 10px; font-weight:700;"></div>
          </div>

          <div class="test-box">
            <div class="test-head ${config.headClass}">
              <h3>Chế độ thi: ${config.source === "ai" ? "Sinh đề tự động" : "Kho đề cố định"}</h3>
              <div>${config.note}</div>
            </div>

            <div class="test-body">
              <div class="stats four" style="margin-bottom:14px;">
                <div class="stat"><strong>10-40</strong><span>Số câu</span></div>
                <div class="stat"><strong>3</strong><span>Cấp độ</span></div>
                <div class="stat"><strong>6</strong><span>Chủ đề</span></div>
                <div class="stat"><strong>Có</strong><span>SVG đồ họa</span></div>
              </div>

              <h4 style="margin: 0 0 4px; font-size:14px;">Quy chế làm bài:</h4>
              <p class="muted" style="margin-bottom:12px;">
                Hệ thống tự động ghi nhận điểm và đáp án chi tiết ngay sau khi nộp.
              </p>
              
              <h4 style="margin: 0 0 4px; font-size:14px;">Trực quan hóa đồ họa:</h4>
              <p class="muted">
                Các câu hỏi vector hay hình bình hành sẽ hiển thị bản vẽ lưới tọa độ hỗ trợ tư duy tính toán.
              </p>
            </div>
          </div>
        </div>
      `;
    }

    function selectAllTopics(checked) {
      document.querySelectorAll(".topic-check").forEach((cb) => {
        cb.checked = checked;
      });
    }

    function createTest(source) {
      const numQuestions = Number(document.getElementById("numQuestions").value);
      const questionType = document.getElementById("questionType").value;
      const level = document.getElementById("levelSelect").value;
      const topics = [...document.querySelectorAll(".topic-check:checked")].map((cb) => cb.value);
      const box = document.getElementById("setupResult");

      if (topics.length === 0) {
        box.style.color = "var(--red)";
        box.innerText = "⚠️ Lỗi: Bạn cần chọn ít nhất một nội dung kiểm tra.";
        return;
      }

      const setup = { numQuestions, questionType, level, topics };

      if (source === "ai") {
        lastAISetup = setup;
      } else {
        lastTestSetup = setup;
      }

      const questions =
        source === "ai"
          ? generateAIQuestions(numQuestions, questionType, level, topics)
          : generateNormalQuestions(numQuestions, questionType, level, topics);

      if (questions.length === 0) {
        box.style.color = "var(--red)";
        box.innerText = "⚠️ Không tìm thấy câu hỏi phù hợp với bộ lọc.";
        return;
      }

      currentTestSource = source;
      currentTest = questions.map((q, index) => ({
        ...q,
        testIndex: index,
        userAnswer: null
      }));

      currentView = "takingTest";
      setActive(source === "ai" ? "aiSetup" : "testSetup");
      renderTakingTest();
    }

    function generateNormalQuestions(n, questionType, level, topics) {
      let pool = QUESTION_BANK.filter((q) => topics.includes(q.topic));

      if (questionType === "mcq") {
        pool = pool.filter((q) => q.type === "mcq");
      }

      if (questionType === "fill") {
        pool = pool.filter((q) => q.type === "fill");
      }

      if (level === "easy") {
        pool = [...pool.filter((q) => q.level === "easy"), ...pool.filter((q) => q.level !== "easy")];
      } else if (level === "medium") {
        pool = [...pool.filter((q) => q.level === "medium" || q.level === "easy"), ...pool.filter((q) => q.level === "hard")];
      } else {
        pool = [...pool.filter((q) => q.level === "hard" || q.level === "medium"), ...pool.filter((q) => q.level === "easy")];
      }

      if (pool.length === 0) return [];

      const result = [];
      let source = shuffle(pool);

      while (result.length < n) {
        if (source.length === 0) source = shuffle(pool);
        const q = source.pop();
        result.push({ ...q, id: q.id + "_" + result.length });
      }

      return result;
    }

    // ==========================================
    // 8. AI ENGINE: THUẬT TOÁN SINH ĐỀ TOÁN HỌC NGẪU NHIÊN
    // ==========================================
    function generateAIQuestions(n, questionType, level, topics) {
      const generators = [];

      if (topics.includes("Vector")) {
        generators.push(genVectorAdd, genDotProduct, genVectorLength, genVectorImage);
      }

      if (topics.includes("Ma trận")) {
        generators.push(genMatrixVector);
      }

      if (topics.includes("Định thức")) {
        generators.push(genDeterminant, genDetImage);
      }

      if (topics.includes("Hệ phương trình")) {
        generators.push(genLinearSystem);
      }

      if (topics.includes("Không gian vector")) {
        generators.push(genRank);
      }

      if (topics.includes("Eigen")) {
        generators.push(genEigen);
      }

      if (generators.length === 0) return [];

      const result = [];
      let guard = 0;

      while (result.length < n && guard < n * 50) {
        guard++;
        const gen = generators[randInt(0, generators.length - 1)];
        const q = gen(level, questionType);

        if (questionType === "mcq" && q.type !== "mcq") continue;
        if (questionType === "fill" && q.type !== "fill") continue;

        // Sinh ID đảm bảo không bao giờ trùng lặp bằng việc kết hợp chỉ số ngẫu nhiên ngặt
        result.push({
          ...q,
          id: "ai_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7) + "_" + result.length
        });
      }

      return result;
    }

    function rangeByLevel(level) {
      if (level === "easy") return 5;
      if (level === "medium") return 9;
      return 15;
    }

    function chooseType(questionType) {
      if (questionType === "mixed") {
        return Math.random() < 0.5 ? "mcq" : "fill";
      }
      return questionType;
    }

    function makeMCQ(correct, wrongs) {
      const options = shuffle([String(correct), ...wrongs.map(String)]).slice(0, 4);
      return {
        options,
        answer: options.indexOf(String(correct))
      };
    }

    function genVectorAdd(level, questionType) {
      const r = rangeByLevel(level);
      const u = [randInt(-r, r), randInt(-r, r)];
      const v = [randInt(-r, r), randInt(-r, r)];
      const ans = [u[0] + v[0], u[1] + v[1]];
      const type = chooseType(questionType);

      if (type === "mcq") {
        return {
          type,
          topic: "Vector",
          level,
          question: `Cho u=${vecStr(u)}, v=${vecStr(v)}. Tính u+v.`,
          ...makeMCQ(vecStr(ans), [
            vecStr([ans[0] + 1, ans[1]]),
            vecStr([ans[0], ans[1] + 1]),
            vecStr([u[0] - v[0], u[1] - v[1]])
          ]),
          explain: `Cộng tương ứng từng cặp tọa độ: ${vecStr(ans)}.`
        };
      }

      return {
        type,
        topic: "Vector",
        level,
        question: `Cho u=${vecStr(u)}, v=${vecStr(v)}. Tính u+v.`,
        answers: [vecStr(ans), ans.join(","), ans.join(" ")],
        explain: `Cộng tương ứng từng cặp tọa độ: ${vecStr(ans)}.`
      };
    }

    function genVectorImage(level, questionType) {
      const r = level === "easy" ? 4 : level === "medium" ? 6 : 8;
      const v = [randNonZero(-r, r), randNonZero(-r, r)];
      const type = chooseType(questionType);

      if (type === "mcq") {
        return {
          type,
          topic: "Vector",
          level,
          question: "Quan sát bản vẽ hình học. Vector v có tọa độ nào?",
          image: { kind: "vector", vector: v, label: "v" },
          ...makeMCQ(vecStr(v), [
            vecStr([v[1], v[0]]),
            vecStr([-v[0], v[1]]),
            vecStr([v[0], -v[1]])
          ]),
          explain: `Đầu mút của vector nằm tại tọa độ ${vecStr(v)} trên lưới ô vuông.`
        };
      }

      return {
        type,
        topic: "Vector",
        level,
        question: "Quan sát bản vẽ hình học. Nhập tọa độ của vector v.",
        image: { kind: "vector", vector: v, label: "v" },
        answers: [vecStr(v), v.join(","), v.join(" ")],
        explain: `Đầu mút của vector nằm tại tọa độ ${vecStr(v)} trên lưới ô vuông.`
      };
    }

    function genDotProduct(level, questionType) {
      const r = rangeByLevel(level);
      const u = [randInt(-r, r), randInt(-r, r), randInt(-r, r)];
      const v = [randInt(-r, r), randInt(-r, r), randInt(-r, r)];
      const ans = u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
      const type = chooseType(questionType);

      if (type === "mcq") {
        return {
          type,
          topic: "Vector",
          level,
          question: `Tính tích vô hướng ${vecStr(u)} · ${vecStr(v)}.`,
          ...makeMCQ(ans, [ans + 1, ans - 1, -ans]),
          explain: `Tính tổng tích các phần tử tương ứng: ${u[0]}·${v[0]} + ${u[1]}·${v[1]} + ${u[2]}·${v[2]} = ${ans}.`
        };
      }

      return {
        type,
        topic: "Vector",
        level,
        question: `Tính tích vô hướng ${vecStr(u)} · ${vecStr(v)}.`,
        answers: [String(ans)],
        explain: `Tính tổng tích các phần tử tương ứng: ${u[0]}·${v[0]} + ${u[1]}·${v[1]} + ${u[2]}·${v[2]} = ${ans}.`
      };
    }

    function genVectorLength(level, questionType) {
      const triples = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17]];
      const t = triples[randInt(0, triples.length - 1)];
      const v = [t[0], t[1]];
      const ans = t[2];
      const type = chooseType(questionType);

      if (type === "mcq") {
        return {
          type,
          topic: "Vector",
          level,
          question: `Tính độ dài chuẩn hóa Euclidean của vector ${vecStr(v)}.`,
          ...makeMCQ(ans, [ans + 1, ans - 1, t[0] + t[1]]),
          explain: `Độ dài ||v|| = √(${v[0]}² + ${v[1]}²) = √(${v[0]**2 + v[1]**2}) = ${ans}.`
        };
      }

      return {
        type,
        topic: "Vector",
        level,
        question: `Tính độ dài chuẩn hóa Euclidean của vector ${vecStr(v)}.`,
        answers: [String(ans)],
        explain: `Độ dài ||v|| = √(${v[0]}² + ${v[1]}²) = √(${v[0]**2 + v[1]**2}) = ${ans}.`
      };
    }

    function genMatrixVector(level, questionType) {
      const r = level === "easy" ? 4 : level === "medium" ? 6 : 9;
      const A = [[randInt(-r, r), randInt(-r, r)], [randInt(-r, r), randInt(-r, r)]];
      const v = [randInt(-r, r), randInt(-r, r)];
      const ans = [A[0][0] * v[0] + A[0][1] * v[1], A[1][0] * v[0] + A[1][1] * v[1]];
      const type = chooseType(questionType);

      if (type === "mcq") {
        return {
          type,
          topic: "Ma trận",
          level,
          question: `Cho ma trận A=${matStr(A)} và vector v=${vecStr(v)}. Tính phép nhân Av.`,
          ...makeMCQ(vecStr(ans), [
            vecStr([ans[0] + 1, ans[1]]),
            vecStr([ans[0], ans[1] + 1]),
            vecStr(v)
          ]),
          explain: `Lấy hàng của A nhân cột v: [${A[0][0]}·${v[0]} + ${A[0][1]}·${v[1]}, ${A[1][0]}·${v[0]} + ${A[1][1]}·${v[1]}] = ${vecStr(ans)}.`
        };
      }

      return {
        type,
        topic: "Ma trận",
        level,
        question: `Cho ma trận A=${matStr(A)} và vector v=${vecStr(v)}. Tính phép nhân Av.`,
        answers: [vecStr(ans), ans.join(","), ans.join(" ")],
        explain: `Lấy hàng của A nhân cột v: [${A[0][0]}·${v[0]} + ${A[0][1]}·${v[1]}, ${A[1][0]}·${v[0]} + ${A[1][1]}·${v[1]}] = ${vecStr(ans)}.`
      };
    }

    function genDeterminant(level, questionType) {
      const r = level === "easy" ? 5 : level === "medium" ? 8 : 12;
      const A = [[randInt(-r, r), randInt(-r, r)], [randInt(-r, r), randInt(-r, r)]];
      const ans = det2(A);
      const type = chooseType(questionType);

      if (type === "mcq") {
        return {
          type,
          topic: "Định thức",
          level,
          question: `Tính định thức det(A) của ma trận A=${matStr(A)}.`,
          ...makeMCQ(ans, [ans + 1, ans - 1, -ans]),
          explain: `det(A) = ad - bc = ${A[0][0]}·${A[1][1]} - ${A[0][1]}·${A[1][0]} = ${ans}.`
        };
      }

      return {
        type,
        topic: "Định thức",
        level,
        question: `Tính định thức det(A) của ma trận A=${matStr(A)}.`,
        answers: [String(ans)],
        explain: `det(A) = ad - bc = ${A[0][0]}·${A[1][1]} - ${A[0][1]}·${A[1][0]} = ${ans}.`
      };
    }

    function genDetImage(level, questionType) {
      const a = [randInt(1, 4), randInt(0, 3)];
      const b = [randInt(0, 3), randInt(1, 4)];
      const ans = Math.abs(a[0] * b[1] - a[1] * b[0]);
      const type = chooseType(questionType);

      if (type === "mcq") {
        return {
          type,
          topic: "Định thức",
          level,
          question: "Quan sát hình bình hành tạo bởi hai vector a và b. Diện tích hình bình hành bằng bao nhiêu?",
          image: { kind: "parallelogram", a, b },
          ...makeMCQ(ans, [ans + 1, Math.max(0, ans - 1), ans + 2]),
          explain: `Diện tích bằng giá trị tuyệt đối định thức tạo bởi hai vector cột: |det([[${a[0]},${b[0]}],[${a[1]},${b[1]}]])| = |${a[0]}·${b[1]} - ${a[1]}·${b[0]}| = ${ans}.`
        };
      }

      return {
        type,
        topic: "Định thức",
        level,
        question: "Quan sát hình bình hành tạo bởi hai vector a và b. Tính diện tích.",
        image: { kind: "parallelogram", a, b },
        answers: [String(ans)],
        explain: `Diện tích bằng giá trị tuyệt đối định thức tạo bởi hai vector cột: |det([[${a[0]},${b[0]}],[${a[1]},${b[1]}]])| = |${a[0]}·${b[1]} - ${a[1]}·${b[0]}| = ${ans}.`
      };
    }

    function genLinearSystem(level, questionType) {
      const r = level === "easy" ? 4 : level === "medium" ? 7 : 10;
      let A, d;

      do {
        A = [[randInt(-r, r), randInt(-r, r)], [randInt(-r, r), randInt(-r, r)]];
        d = det2(A);
      } while (d === 0);

      const x = [randInt(-r, r), randInt(-r, r)];
      const b = [A[0][0] * x[0] + A[0][1] * x[1], A[1][0] * x[0] + A[1][1] * x[1]];
      const type = chooseType(questionType);

      if (type === "mcq") {
        return {
          type,
          topic: "Hệ phương trình",
          level,
          question: `Giải hệ phương trình Ax=b với A=${matStr(A)}, b=${vecStr(b)}. Tìm ẩn x.`,
          ...makeMCQ(vecStr(x), [
            vecStr([x[0] + 1, x[1]]),
            vecStr([x[0], x[1] + 1]),
            vecStr([-x[0], x[1]])
          ]),
          explain: `Giải hệ, ta tìm được duy nhất nghiệm đúng là x=${vecStr(x)}.`
        };
      }

      return {
        type,
        topic: "Hệ phương trình",
        level,
        question: `Giải hệ phương trình Ax=b với A=${matStr(A)}, b=${vecStr(b)}. Nhập nghiệm dạng (x,y).`,
        answers: [vecStr(x), x.join(","), x.join(" ")],
        explain: `Giải hệ, ta tìm được duy nhất nghiệm đúng là x=${vecStr(x)}.`
      };
    }

    function genRank(level, questionType) {
      const r = level === "easy" ? 4 : level === "medium" ? 7 : 10;
      const mode = randInt(0, 2);
      let A, ans;

      if (mode === 0) {
        A = [[0, 0], [0, 0]];
        ans = 0;
      } else if (mode === 1) {
        const row = [randNonZero(-r, r), randInt(-r, r)];
        const k = randNonZero(-3, 3);
        A = [row, [k * row[0], k * row[1]]];
        ans = 1;
      } else {
        do {
          A = [[randInt(-r, r), randInt(-r, r)], [randInt(-r, r), randInt(-r, r)]];
        } while (det2(A) === 0);
        ans = 2;
      }

      const type = chooseType(questionType);

      if (type === "mcq") {
        return {
          type,
          topic: "Không gian vector",
          level,
          question: `Tìm thứ hạng rank(A) của ma trận A=${matStr(A)}.`,
          options: ["0", "1", "2", "Không xác định"],
          answer: ans,
          explain: `rank(A) bằng số lượng các hàng/cột độc lập tuyến tính tối đa. Đáp số: rank(A) = ${ans}.`
        };
      }

      return {
        type,
        topic: "Không gian vector",
        level,
        question: `Tìm thứ hạng rank(A) của ma trận A=${matStr(A)}.`,
        answers: [String(ans)],
        explain: `rank(A) bằng số lượng các hàng/cột độc lập tuyến tính tối đa. Đáp số: rank(A) = ${ans}.`
      };
    }

    function genEigen(level, questionType) {
      const r = level === "easy" ? 5 : level === "medium" ? 9 : 15;
      const a = randInt(-r, r);
      const b = randInt(-r, r);
      const type = chooseType(questionType);

      if (type === "mcq") {
        return {
          type,
          topic: "Eigen",
          level,
          question: `Tìm giá trị riêng (eigenvalues) của ma trận chéo A=[[${a},0],[0,${b}]].`,
          ...makeMCQ(`${a},${b}`, [`${a + 1},${b}`, `${a},${b + 1}`, `${-a},${b}`]),
          explain: `Với ma trận đường chéo, các giá trị riêng chính là các phần tử trên đường chéo chính: ${a} và ${b}.`
        };
      }

      return {
        type,
        topic: "Eigen",
        level,
        question: `Tìm các giá trị riêng (eigenvalues) của ma trận chéo A=[[${a},0],[0,${b}]]. Nhập dạng a,b.`,
        answers: [`${a},${b}`, `${b},${a}`, `${a} ${b}`, `${b} ${a}`],
        explain: `Với ma trận đường chéo, các giá trị riêng chính là các phần tử trên đường chéo chính: ${a} và ${b}.`
      };
    }

    // ==========================================
    // 9. TAKING THE TEST UI & FUNCTIONALITY
    // ==========================================
    function renderTakingTest() {
      if (!currentTest) {
        showView(currentTestSource === "ai" ? "aiSetup" : "testSetup");
        return;
      }

      app.innerHTML = `
        <div class="section-head">
          <div>
            <h2>${currentTestSource === "ai" ? "✨ Bài kiểm tra tự động AI" : "📝 Bài kiểm tra tổng hợp"}</h2>
            <div class="muted">Đang làm bài: ${currentTest.length} câu hỏi toán học</div>
          </div>
          <div class="btn-row">
            ${renderBackButton("Hủy bài")}
            <button class="primary" onclick="submitTest()">Nộp bài thi</button>
          </div>
        </div>

        <div id="testQuestions">
          ${currentTest.map((q, idx) => renderQuestion(q, idx)).join("")}
        </div>

        <div class="panel" style="margin-top: 24px;">
          <div class="btn-row" style="justify-content: space-between;">
            ${renderBackButton("Hủy bài")}
            <button class="primary" style="padding:12px 24px;" onclick="submitTest()">Nộp bài & Chấm điểm</button>
          </div>
        </div>
      `;

      restoreAnswersToForm();
    }

    function renderQuestion(q, idx) {
      if (q.type === "mcq") {
        return `
          <div class="question-card">
            <div class="q-meta">
              <span class="badge">Câu ${idx + 1}</span>
              <span class="badge" style="background:#f1f5f9; color:#475569;">${q.topic}</span>
            </div>
            <div class="q-title">${parseMathBeauty(q.question)}</div>
            ${renderQuestionImage(q.image)}
            <div class="option-list">
              ${q.options.map((opt, i) => `
                <label class="option-label">
                  <input type="radio" name="q_${idx}" value="${i}" onchange="saveAnswer(${idx}, '${i}')">
                  <span>${String.fromCharCode(65 + i)}. ${parseMathBeauty(opt)}</span>
                </label>
              `).join("")}
            </div>
          </div>
        `;
      }

      return `
        <div class="question-card">
          <div class="q-meta">
            <span class="badge">Câu ${idx + 1}</span>
            <span class="badge" style="background:#f1f5f9; color:#475569;">${q.topic}</span>
          </div>
          <div class="q-title">${parseMathBeauty(q.question)}</div>
          ${renderQuestionImage(q.image)}
          
          <div style="font-size: 11px; font-weight:800; color:var(--muted); margin-top:8px;">HƯỚNG DẪN NHẬP ĐÁP ÁN:</div>
          <ul style="margin:4px 0 10px; padding-left:16px; font-size:12px; color:var(--muted);">
            <li>Số nguyên: Ví dụ: <code>-5</code> hoặc <code>2</code>.</li>
            <li>Tọa độ vector hoặc nghiệm: Ví dụ: <code>(3,2)</code> hoặc viết liền <code>3,2</code>.</li>
          </ul>

          <input class="answer-input" id="fill_${idx}" 
                 autocorrect="off" autocapitalize="off" spellcheck="false"
                 placeholder="Nhập đáp án của bạn tại đây..." oninput="saveAnswer(${idx}, this.value)">
        </div>
      `;
    }

    function saveAnswer(idx, value) {
      if (!currentTest || !currentTest[idx]) return;
      currentTest[idx].userAnswer = value;
    }

    function restoreAnswersToForm() {
      currentTest.forEach((q, idx) => {
        if (q.userAnswer === null) return;

        if (q.type === "mcq") {
          const input = document.querySelector(`input[name="q_${idx}"][value="${q.userAnswer}"]`);
          if (input) input.checked = true;
        }

        if (q.type === "fill") {
          const input = document.getElementById("fill_" + idx);
          if (input) input.value = q.userAnswer;
        }
      });
    }

    function questionScore(q) {
      if (q.type === "mcq") {
        return Number(q.userAnswer) === q.answer ? 1 : 0;
      }

      if (q.type === "fill") {
        return q.answers.map(cleanAnswer).includes(cleanAnswer(q.userAnswer || "")) ? 1 : 0;
      }
      return 0;
    }

    function getCorrectAnswerText(q) {
      if (q.type === "mcq") {
        return `${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}`;
      }
      return q.answers[0];
    }

    // ==========================================
    // 10. SUBMIT TEST & DISPLAY PERFORMANCE RESULT
    // ==========================================
    function submitTest() {
      if (!currentTest) return;

      const unanswered = currentTest.filter((q) => q.userAnswer === null || q.userAnswer === "").length;

      if (unanswered > 0) {
        const ok = confirm(`Bạn còn ${unanswered} câu chưa làm. Vẫn muốn nộp bài chứ?`);
        if (!ok) return;
      }

      const total = currentTest.length;
      const correct = currentTest.reduce((sum, q) => sum + questionScore(q), 0);
      const percent = Math.round((correct / total) * 100);

      const record = {
        id: String(Date.now()) + "_" + Math.random().toString(16).slice(2),
        source: currentTestSource,
        time: new Date().toLocaleString("vi-VN"),
        total,
        correct,
        percent,
        topics: [...new Set(currentTest.map((q) => q.topic))],
        questions: currentTest.map((q) => ({
          id: q.id,
          type: q.type,
          topic: q.topic,
          question: q.question,
          image: q.image || null,
          userAnswer: q.userAnswer,
          correct: questionScore(q) === 1,
          correctAnswer: getCorrectAnswerText(q),
          explain: q.explain || ""
        }))
      };

      const scores = getScores();
      scores.push(record);
      setScores(scores);

      currentView = "testResult";
      renderTestResult(record);
    }

    function formatUserAnswer(q) {
      if (q.userAnswer === null || q.userAnswer === "") return "<i>(Chưa hoàn thành)</i>";
      if (q.type === "mcq") return String.fromCharCode(65 + Number(q.userAnswer));
      return q.userAnswer;
    }

    function renderTestResult(record) {
      app.innerHTML = `
        <div class="section-head">
          <div>
            <h2>🏆 Đánh giá kết quả làm bài</h2>
            <div class="muted">${record.time} • ${record.source === "ai" ? "Sinh đề bởi AI" : "Bộ đề cố định"}</div>
          </div>
          <div class="btn-row">
            <button class="secondary" onclick="showView('${record.source === "ai" ? "aiSetup" : "testSetup"}')">← Quay lại cấu hình</button>
            <button class="primary" onclick="showView('scores')">Xem bảng điểm tích lũy</button>
          </div>
        </div>

        <div class="score-big">
          <div class="num">${record.correct}/${record.total}</div>
          <div class="label">Tổng điểm quy đổi: <b style="color:var(--blue); font-size:20px;">${record.percent}%</b></div>
        </div>

        <div class="stats">
          <div class="stat"><strong>${record.total}</strong><span>Tổng số câu hỏi</span></div>
          <div class="stat" style="border-color:#bbf7d0;"><strong>${record.correct}</strong><span style="color:var(--green)">Số câu chính xác</span></div>
          <div class="stat" style="border-color:#fecaca;"><strong>${record.total - record.correct}</strong><span style="color:var(--red)">Số câu chưa đúng</span></div>
        </div>

        <div class="section-head">
          <h2>Báo cáo chi tiết từng câu hỏi</h2>
        </div>

        ${record.questions.map((q, idx) => `
          <div class="question-card ${q.correct ? "review-ok" : "review-bad"}">
            <div class="q-meta">
              <span class="badge ${q.correct ? "ok" : "bad"}">Câu ${idx + 1}: ${q.correct ? "Chính xác" : "Chưa chính xác"}</span>
              <span class="badge" style="background:rgba(0,0,0,0.05); color:var(--text);">${q.topic}</span>
            </div>
            <div class="q-title">${parseMathBeauty(q.question)}</div>
            ${renderQuestionImage(q.image)}
            <div class="answer-line">
              <b>Câu trả lời của bạn:</b> ${parseMathBeauty(formatUserAnswer(q))}<br>
              <b>Đáp án chuẩn:</b> <span style="color:var(--green);">${parseMathBeauty(q.correctAnswer)}</span><br>
              <div class="divider"></div>
              <b>Giải thích chi tiết:</b> ${parseMathBeauty(q.explain) || "Không có giải thích tự động."}
            </div>
          </div>
        `).join("")}
      `;
    }

    // ==========================================
    // 11. CUMULATIVE BOARD (BẢNG ĐIỂM TÍCH LŨY)
    // ==========================================
    function renderScores() {
      const scores = getScores();
      const tests = scores.length;
      const avg = tests ? Math.round(scores.reduce((sum, x) => sum + x.percent, 0) / tests) : 0;
      const best = tests ? Math.max(...scores.map((x) => x.percent)) : 0;

      app.innerHTML = `
        <div class="section-head">
          <div>
            <h2>🏆 Nhật ký học tập & Bảng điểm</h2>
            <div class="muted">Nơi lưu trữ lịch sử và tiến trình tự học đại số tuyến tính của bạn.</div>
          </div>
          <div class="btn-row">
            ${renderBackButton()}
            <button class="danger" onclick="clearScores()">Xóa toàn bộ dữ liệu lịch sử</button>
          </div>
        </div>

        <div class="stats">
          <div class="stat"><strong>${tests}</strong><span>Số đề đã hoàn thành</span></div>
          <div class="stat"><strong>${avg}%</strong><span>Điểm số trung bình</span></div>
          <div class="stat"><strong>${best}%</strong><span>Thành tích cao nhất</span></div>
        </div>

        ${
          scores.length
            ? `
              <div class="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Thời gian</th>
                      <th>Dạng đề</th>
                      <th>Nội dung</th>
                      <th>Điểm</th>
                      <th>Tỉ lệ</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${scores.slice().reverse().map((item) => `
                      <tr>
                        <td>${item.time}</td>
                        <td>${item.source === "ai" ? "🌟 AI Tự Sinh" : "📁 Có sẵn"}</td>
                        <td><span style="font-size:12px; font-weight:600;">${item.topics.join(", ")}</span></td>
                        <td><span class="badge ${item.percent >= 70 ? "ok" : item.percent >= 40 ? "" : "bad"}">${item.percent}%</span></td>
                        <td><b>${item.correct}/${item.total}</b> câu đúng</td>
                        <td>
                          <div class="btn-row">
                            <button class="secondary" style="padding: 4px 10px; font-size:12px;" onclick="viewScore('${item.id}')">Xem lại</button>
                            <button class="danger" style="padding: 4px 10px; font-size:12px; background:transparent; border:1px solid #fee2e2;" onclick="deleteScore('${item.id}')">Xóa</button>
                          </div>
                        </td>
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
            `
            : `
              <div class="empty">
                <h3>Chưa có bất kỳ dữ liệu điểm số nào</h3>
                <p>Hãy hoàn thành bài kiểm tra đầu tiên để lưu thành tích vào đây!</p>
              </div>
            `
        }
      `;
    }

    function viewScore(id) {
      const record = getScores().find((x) => x.id === id);
      if (!record) return;

      currentView = "testResult";
      currentTestSource = record.source || "normal";
      renderTestResult(record);
    }

    function clearScores() {
      if (!confirm("Hành động này sẽ xóa vĩnh viễn toàn bộ lịch sử điểm số. Bạn chắc chắn?")) return;
      localStorage.removeItem("sagela_scores_clean");
      renderScores();
    }

    function deleteScore(id) {
      setScores(getScores().filter((x) => x.id !== id));
      renderScores();
    }

    // ==========================================
    // 12. ROUTING EVENTS & SYNCHRONIZATION
    // ==========================================
    function setTopic(topic) {
      currentTopic = topic;
      // Khi nhấn vào chủ đề toán ở sidebar, tự động đổi chip và view sang Lý thuyết tương ứng
      showView("theory");
    }

    // Sidebar đóng/mở chuẩn chỉnh (Sửa lỗi crash biến menuBtn trên mobile)
    const menuBtn = document.getElementById("menuBtn");
    if (menuBtn) {
      menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (window.innerWidth <= 768) {
          sidebar.classList.toggle("mobile-open");
        } else {
          sidebar.classList.toggle("collapsed");
          main.classList.toggle("expanded");
        }
      });
    }

    // Hỗ trợ click ngoài đóng sidebar di động
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 768 && !sidebar.contains(e.target) && e.target !== menuBtn) {
        sidebar.classList.remove("mobile-open");
      }
    });

    // Mount các sự kiện menu điều hướng chính
    document.querySelectorAll("[data-view]").forEach((el) => {
      el.addEventListener("click", () => showView(el.dataset.view));
    });

    document.querySelectorAll("[data-topic]").forEach((el) => {
      el.addEventListener("click", () => setTopic(el.dataset.topic));
    });

    // Real-time search bài lý thuyết toán học
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    if (searchInput) {
      searchInput.addEventListener("input", () => {
        if (currentView !== "theory") {
          showView("theory");
        } else {
          renderTheory();
        }
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        showView("theory");
      });
    }

    // Khởi chạy ứng dụng
    showView("home");