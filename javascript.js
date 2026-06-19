// =========================
// 1. LÝ THUYẾT TOÁN
// =========================
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

// =========================
// 2. CÂU HỎI CÓ SẴN
// =========================

let QUESTION_BANK = [];
async function loadQuestions() {
    const index = await fetch("./problems/index.json")
        .then(r => r.json());

    const promises = [];

    for (const topic in index) {
        for (const file of index[topic]) {
          promises.push(
              fetch(`./problems/${topic}/${file}.json`)
                  .then(r => r.json())
                  .then(questions =>
                      questions.map(q => ({
                          ...q,
                          topic
                      }))
                  )
          );
        }
    }

    const data = await Promise.all(promises);
    

    QUESTION_BANK = data.flat();
}

async function init() {
    await loadQuestions();
}

init();


// =========================
// 3. BIẾN TRẠNG THÁI
// =========================
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

// =========================
// 4. HÀM TIỆN ÍCH
// =========================
function getScores() {
  return JSON.parse(localStorage.getItem("sagela_scores_clean") || "[]");
}

function setScores(data) {
  localStorage.setItem("sagela_scores_clean", JSON.stringify(data));
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
  document.querySelectorAll(".side-item").forEach((el) => {
    const value = el.dataset.view || el.dataset.topic;
    el.classList.toggle("active", value === key);
  });

  document.querySelectorAll(".chip").forEach((el) => {
    el.classList.toggle("active", el.dataset.view === key);
  });
}

function showView(view) {
  currentView = view;
  setActive(view);

  if (window.innerWidth <= 900) {
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

// =========================
// 5. VẼ HÌNH MINH HỌA CÂU HỎI
// =========================
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
  const scale = 28;
  const cx = W / 2;
  const cy = H / 2;
  const x = cx + v[0] * scale;
  const y = cy - v[1] * scale;

  return `
    <svg viewBox="0 0 ${W} ${H}">
      ${svgGrid(W, H, scale, cx, cy)}
      <defs>
        <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#2563eb"></path>
        </marker>
      </defs>
      <line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#2563eb" stroke-width="4" marker-end="url(#arrowBlue)"></line>
      <text x="${x + 8}" y="${y - 8}" fill="#2563eb" font-size="16" font-weight="900">${label}</text>
    </svg>
  `;
}

function svgParallelogram(a, b) {
  const W = 420;
  const H = 260;
  const scale = 28;
  const cx = W / 2;
  const cy = H / 2;

  const p0 = [cx, cy];
  const p1 = [cx + a[0] * scale, cy - a[1] * scale];
  const p2 = [cx + b[0] * scale, cy - b[1] * scale];
  const p3 = [p1[0] + b[0] * scale, p1[1] - b[1] * scale];

  return `
    <svg viewBox="0 0 ${W} ${H}">
      ${svgGrid(W, H, scale, cx, cy)}
      <polygon
        points="${p0.join(",")} ${p1.join(",")} ${p3.join(",")} ${p2.join(",")}"
        fill="rgba(37,99,235,0.16)"
        stroke="#2563eb"
        stroke-width="3">
      </polygon>
      <line x1="${p0[0]}" y1="${p0[1]}" x2="${p1[0]}" y2="${p1[1]}" stroke="#ef4444" stroke-width="4"></line>
      <line x1="${p0[0]}" y1="${p0[1]}" x2="${p2[0]}" y2="${p2[1]}" stroke="#16a34a" stroke-width="4"></line>
      <text x="${p1[0] + 8}" y="${p1[1] - 8}" fill="#ef4444" font-size="15" font-weight="900">a</text>
      <text x="${p2[0] + 8}" y="${p2[1] - 8}" fill="#16a34a" font-size="15" font-weight="900">b</text>
    </svg>
  `;
}

function svgGrid(W, H, scale, cx, cy) {
  let lines = "";

  for (let x = cx % scale; x < W; x += scale) {
    lines += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="#e5e7eb" stroke-width="1"></line>`;
  }

  for (let y = cy % scale; y < H; y += scale) {
    lines += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="#e5e7eb" stroke-width="1"></line>`;
  }

  lines += `<line x1="0" y1="${cy}" x2="${W}" y2="${cy}" stroke="#111827" stroke-width="2"></line>`;
  lines += `<line x1="${cx}" y1="0" x2="${cx}" y2="${H}" stroke="#111827" stroke-width="2"></line>`;
  lines += `<text x="${cx + 5}" y="${cy - 5}" fill="#111827" font-size="13" font-weight="900">O</text>`;

  return lines;
}

// =========================
// 6. TRANG CHỦ
// =========================
function renderHome() {
  const stats = scoreStats();

  app.innerHTML = `
    <section class="hero">
      <div>
        <h1>Web kiểm tra Đại số tuyến tính</h1>
        <p>
          Ôn lý thuyết toán, tạo bài kiểm tra theo chủ đề, hoặc dùng mục
          <b>Bài từ AI</b> để sinh câu ngẫu nhiên bằng công thức. Một số bài có hình minh họa.
        </p>
        <div class="hero-actions">
          <button class="hero-btn" onclick="showView('testSetup')">Tạo bài kiểm tra</button>
          <button class="hero-btn ghost" onclick="showView('aiSetup')">Bài từ AI</button>
          <button class="hero-btn ghost" onclick="showView('theory')">Ôn lý thuyết</button>
        </div>
      </div>

      <div class="hero-panel">
        <div>
          <div class="big-formula">Ax = b</div>
          <div>Vector, ma trận, định thức, hệ phương trình, rank, eigen.</div>
        </div>
      </div>
    </section>

    <div class="stats">
      <div class="stat">
        <strong>${THEORY.length}</strong>
        <span>Số bài lý thuyết</span>
      </div>
      <div class="stat">
        <strong>${stats.tests}</strong>
        <span>Số bài kiểm tra đã làm</span>
      </div>
      <div class="stat">
        <strong>${stats.percent}%</strong>
        <span>Tỉ lệ đúng</span>
      </div>
    </div>

    <div class="section-head">
      <div>
        <h2>Chức năng chính</h2>
        <div class="muted">Giao diện đã bỏ phần vẽ đáp án. Một số câu vẫn có hình minh họa.</div>
      </div>
    </div>

    <section class="grid">
      ${featureCard("📘", "Lý thuyết toán", "Mỗi bài có công thức, nội dung chính, bài ví dụ và lời giải trong cùng một form.", "#2563eb", "#06b6d4", "showView('theory')")}
      ${featureCard("📝", "Tạo bài kiểm tra", "Chọn 10/20/30/40 câu, mức dễ/trung bình/khó và phần muốn kiểm tra.", "#7c3aed", "#ec4899", "showView('testSetup')")}
      ${featureCard("✨", "Bài từ AI", "Sinh bài ngẫu nhiên bằng công thức, có thể trộn nhiều phần đã chọn trong một bài.", "#581c87", "#1d4ed8", "showView('aiSetup')")}
      ${featureCard("🔘", "Trắc nghiệm", "Câu hỏi 4 đáp án, chọn A/B/C/D rồi nộp bài.", "#0f766e", "#14b8a6", "showView('testSetup')")}
      ${featureCard("✍", "Tự luận", "Người học nhập kết quả dạng số, vector, nghiệm hệ hoặc giá trị riêng.", "#334155", "#64748b", "showView('aiSetup')")}
      ${featureCard("🖼", "Bài có hình", "Một số bài có hình vector hoặc hình bình hành để quan sát và trả lời.", "#f97316", "#ef4444", "showView('testSetup')")}
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
          <button class="primary" onclick="${action}">Mở</button>
        </div>
      </div>
    </article>
  `;
}

// =========================
// 7. LÝ THUYẾT
// =========================
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
        <h2>📘 Lý thuyết Đại số tuyến tính</h2>
        <div class="muted">Lý thuyết chỉ chứa kiến thức toán. Ví dụ và lời giải nằm cùng một form.</div>
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
          `<div class="empty"><h3>Không tìm thấy lý thuyết</h3><p>Thử tìm chủ đề khác.</p></div>`
        }
      </div>

      <div class="lesson-view">
        <span class="badge">${selected.topic}</span>
        <h2>${selected.title}</h2>
        <div class="math-box">${selected.formula}</div>
        <p class="muted">${selected.summary}</p>

        <h3>Nội dung chính</h3>
        <ul>
          ${selected.content.map((line) => `<li>${line}</li>`).join("")}
        </ul>

        <div class="example-solution">
          <h3>Bài ví dụ và lời giải</h3>
          <b>Bài ví dụ:</b>
          <p>${selected.example}</p>
          <div class="divider"></div>
          <b>Lời giải:</b>
          <p>${selected.solution}</p>
        </div>
      </div>
    </div>
  `;
}

function selectLesson(id) {
  selectedLessonId = id;
  renderTheory();
}

// =========================
// 8. TẠO ĐỀ
// =========================
function getTopics() {
  return ["Vector", "Ma trận", "Định thức", "Hệ phương trình", "Không gian vector", "Eigen"];
}

function renderTestSetup() {
  renderSetupPage({
    source: "normal",
    title: "📝 Tạo bài kiểm tra",
    subtitle: "Tạo đề từ bộ câu hỏi có sẵn.",
    headClass: "",
    note: "Đề sẽ được lấy ngẫu nhiên theo phần, số câu, dạng câu hỏi và mức độ bạn chọn."
  });
}

function renderAISetup() {
  renderSetupPage({
    source: "ai",
    title: "✨ Bài từ AI",
    subtitle: "Sinh bài ngẫu nhiên bằng công thức toán học.",
    headClass: "ai",
    note: "Phần này tự sinh câu mới bằng công thức. Một bài có thể trộn nhiều phần đã chọn."
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
        <h3>Cài đặt đề</h3>

        <div class="form-grid">
          <div class="field">
            <label>Số câu</label>
            <select id="numQuestions">
              ${[10, 20, 30, 40].map((n) => `
                <option value="${n}" ${setup?.numQuestions === n ? "selected" : ""}>${n} câu</option>
              `).join("")}
            </select>
          </div>

          <div class="field">
            <label>Dạng câu hỏi</label>
            <select id="questionType">
              <option value="mixed" ${setup?.questionType === "mixed" ? "selected" : ""}>Trắc nghiệm + Tự luận</option>
              <option value="mcq" ${setup?.questionType === "mcq" ? "selected" : ""}>Trắc nghiệm</option>
              <option value="fill" ${setup?.questionType === "fill" ? "selected" : ""}>Tự luận</option>
            </select>
          </div>

          <div class="field">
            <label>Chế độ</label>
            <select id="levelSelect">
              <option value="easy" ${setup?.level === "easy" ? "selected" : ""}>Dễ</option>
              <option value="medium" ${setup?.level === "medium" ? "selected" : ""}>Trung bình</option>
              <option value="hard" ${setup?.level === "hard" ? "selected" : ""}>Khó</option>
            </select>
          </div>
        </div>

        <h3 style="margin-top:18px;">Chọn phần có trong bài</h3>

        <div class="check-grid">
          ${topics.map((topic) => `
            <label class="check-card">
              <input type="checkbox" class="topic-check" value="${topic}" ${!setup || setup.topics.includes(topic) ? "checked" : ""}>
              <span>${topic}</span>
            </label>
          `).join("")}
        </div>

        <div class="btn-row" style="margin-top:18px;">
          <button class="primary" onclick="createTest('${config.source}')">Tạo đề</button>
          <button class="secondary" onclick="selectAllTopics(true)">Chọn tất cả</button>
          <button class="secondary" onclick="selectAllTopics(false)">Bỏ chọn</button>
        </div>

        <div id="setupResult" class="result"></div>
      </div>

      <div class="test-box">
        <div class="test-head ${config.headClass}">
          <h3>${config.source === "ai" ? "Bài từ AI" : "Bài kiểm tra"}</h3>
          <div>${config.note}</div>
        </div>

        <div class="test-body">
          <div class="stats four">
            <div class="stat"><strong>10/20</strong><span>Mức ngắn</span></div>
            <div class="stat"><strong>30/40</strong><span>Mức dài</span></div>
            <div class="stat"><strong>3</strong><span>Chế độ</span></div>
            <div class="stat"><strong>6</strong><span>Chủ đề</span></div>
          </div>

          <h3>Quy tắc chấm</h3>
          <p class="muted">
            Mỗi câu đúng được 1 điểm. Sau khi nộp bài, hệ thống hiện điểm,
            tỉ lệ đúng và lời giải từng câu.
          </p>

          <h3>Bài có hình</h3>
          <p class="muted">
            Một số câu có hình minh họa để quan sát. Người học không cần vẽ,
            chỉ cần chọn đáp án hoặc nhập đáp án.
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
    box.className = "result bad";
    box.innerText = "Bạn cần chọn ít nhất một phần trong bài.";
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

  if (questions.length < numQuestions) {
    box.className = "result bad";
    box.innerText = "Không đủ câu hỏi phù hợp.";
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

// =========================
// 9. SINH BÀI TỪ AI BẰNG CÔNG THỨC
// =========================
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

    result.push({
      ...q,
      id: "ai_" + Date.now() + "_" + result.length
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
      explain: `Cộng từng tọa độ: ${vecStr(ans)}.`
    };
  }

  return {
    type,
    topic: "Vector",
    level,
    question: `Cho u=${vecStr(u)}, v=${vecStr(v)}. Tính u+v.`,
    answers: [vecStr(ans), ans.join(","), ans.join(" ")],
    explain: `Cộng từng tọa độ: ${vecStr(ans)}.`
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
      question: "Quan sát hình. Vector v có tọa độ nào?",
      image: { kind: "vector", vector: v, label: "v" },
      ...makeMCQ(vecStr(v), [
        vecStr([v[1], v[0]]),
        vecStr([-v[0], v[1]]),
        vecStr([v[0], -v[1]])
      ]),
      explain: `Điểm cuối của vector là ${vecStr(v)}.`
    };
  }

  return {
    type,
    topic: "Vector",
    level,
    question: "Quan sát hình. Nhập tọa độ của vector v.",
    image: { kind: "vector", vector: v, label: "v" },
    answers: [vecStr(v), v.join(","), v.join(" ")],
    explain: `Điểm cuối của vector là ${vecStr(v)}.`
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
      question: `Tính tích vô hướng ${vecStr(u)}·${vecStr(v)}.`,
      ...makeMCQ(ans, [ans + 1, ans - 1, -ans]),
      explain: `Tích vô hướng bằng tổng tích các tọa độ tương ứng, kết quả là ${ans}.`
    };
  }

  return {
    type,
    topic: "Vector",
    level,
    question: `Tính tích vô hướng ${vecStr(u)}·${vecStr(v)}.`,
    answers: [String(ans)],
    explain: `Tích vô hướng bằng tổng tích các tọa độ tương ứng, kết quả là ${ans}.`
  };
}

function genVectorLength(level, questionType) {
  const triples = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [7, 24, 25]];
  const t = triples[randInt(0, triples.length - 1)];
  const v = [t[0], t[1]];
  const ans = t[2];
  const type = chooseType(questionType);

  if (type === "mcq") {
    return {
      type,
      topic: "Vector",
      level,
      question: `Tính độ dài vector ${vecStr(v)}.`,
      ...makeMCQ(ans, [ans + 1, ans - 1, t[0] + t[1]]),
      explain: `Độ dài là √(${v[0]}²+${v[1]}²)=${ans}.`
    };
  }

  return {
    type,
    topic: "Vector",
    level,
    question: `Tính độ dài vector ${vecStr(v)}.`,
    answers: [String(ans)],
    explain: `Độ dài là √(${v[0]}²+${v[1]}²)=${ans}.`
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
      question: `Cho A=${matStr(A)}, v=${vecStr(v)}. Tính Av.`,
      ...makeMCQ(vecStr(ans), [
        vecStr([ans[0] + 1, ans[1]]),
        vecStr([ans[0], ans[1] + 1]),
        vecStr(v)
      ]),
      explain: `Nhân hàng với cột, kết quả Av=${vecStr(ans)}.`
    };
  }

  return {
    type,
    topic: "Ma trận",
    level,
    question: `Cho A=${matStr(A)}, v=${vecStr(v)}. Tính Av.`,
    answers: [vecStr(ans), ans.join(","), ans.join(" ")],
    explain: `Nhân hàng với cột, kết quả Av=${vecStr(ans)}.`
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
      question: `Tính det(${matStr(A)}).`,
      ...makeMCQ(ans, [ans + 1, ans - 1, -ans]),
      explain: `det = ${A[0][0]}·${A[1][1]} - ${A[0][1]}·${A[1][0]} = ${ans}.`
    };
  }

  return {
    type,
    topic: "Định thức",
    level,
    question: `Tính det(${matStr(A)}).`,
    answers: [String(ans)],
    explain: `det = ${A[0][0]}·${A[1][1]} - ${A[0][1]}·${A[1][0]} = ${ans}.`
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
      question: "Quan sát hình bình hành tạo bởi hai vector a và b. Diện tích bằng bao nhiêu?",
      image: { kind: "parallelogram", a, b },
      ...makeMCQ(ans, [ans + 1, Math.max(0, ans - 1), ans + 2]),
      explain: `Diện tích bằng |det([[${a[0]},${b[0]}],[${a[1]},${b[1]}]])| = ${ans}.`
    };
  }

  return {
    type,
    topic: "Định thức",
    level,
    question: "Quan sát hình bình hành tạo bởi hai vector a và b. Nhập diện tích.",
    image: { kind: "parallelogram", a, b },
    answers: [String(ans)],
    explain: `Diện tích bằng |det([[${a[0]},${b[0]}],[${a[1]},${b[1]}]])| = ${ans}.`
  };
}

function genLinearSystem(level, questionType) {
  const r = level === "easy" ? 4 : level === "medium" ? 7 : 10;
  let A;
  let d;

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
      question: `Giải hệ Ax=b với A=${matStr(A)}, b=${vecStr(b)}.`,
      ...makeMCQ(vecStr(x), [
        vecStr([x[0] + 1, x[1]]),
        vecStr([x[0], x[1] + 1]),
        vecStr([-x[0], x[1]])
      ]),
      explain: `Nghiệm đúng là x=${vecStr(x)}.`
    };
  }

  return {
    type,
    topic: "Hệ phương trình",
    level,
    question: `Giải hệ Ax=b với A=${matStr(A)}, b=${vecStr(b)}. Nhập nghiệm dạng (x,y).`,
    answers: [vecStr(x), x.join(","), x.join(" ")],
    explain: `Nghiệm đúng là x=${vecStr(x)}.`
  };
}

function genRank(level, questionType) {
  const r = level === "easy" ? 4 : level === "medium" ? 7 : 10;
  const mode = randInt(0, 2);
  let A;
  let ans;

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
      question: `Tìm rank của A=${matStr(A)}.`,
      options: ["0", "1", "2", "Không xác định"],
      answer: ans,
      explain: `rank(A)=${ans}.`
    };
  }

  return {
    type,
    topic: "Không gian vector",
    level,
    question: `Tìm rank của A=${matStr(A)}.`,
    answers: [String(ans)],
    explain: `rank(A)=${ans}.`
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
      question: `Tìm giá trị riêng của A=[[${a},0],[0,${b}]].`,
      ...makeMCQ(`${a},${b}`, [`${a + 1},${b}`, `${a},${b + 1}`, `${-a},${b}`]),
      explain: `Ma trận chéo có giá trị riêng là ${a} và ${b}.`
    };
  }

  return {
    type,
    topic: "Eigen",
    level,
    question: `Tìm giá trị riêng của A=[[${a},0],[0,${b}]]. Nhập dạng a,b.`,
    answers: [`${a},${b}`, `${b},${a}`, `${a} ${b}`, `${b} ${a}`],
    explain: `Ma trận chéo có giá trị riêng là ${a} và ${b}.`
  };
}

// =========================
// 10. LÀM BÀI
// =========================
function renderTakingTest() {
  if (!currentTest) {
    showView(currentTestSource === "ai" ? "aiSetup" : "testSetup");
    return;
  }

  app.innerHTML = `
    <div class="section-head">
      <div>
        <h2>${currentTestSource === "ai" ? "✨ Bài từ AI đang làm" : "📝 Bài kiểm tra đang làm"}</h2>
        <div class="muted">${currentTest.length} câu</div>
      </div>
      <div class="btn-row">
        ${renderBackButton("Quay lại")}
        <button class="primary" onclick="submitTest()">Nộp bài</button>
      </div>
    </div>

    <div id="testQuestions">
      ${currentTest.map((q, idx) => renderQuestion(q, idx)).join("")}
    </div>

    <div class="panel">
      <div class="btn-row">
        ${renderBackButton("Quay lại")}
        <button class="primary" onclick="submitTest()">Nộp bài và xem điểm</button>
      </div>
    </div>
  `;

  restoreAnswersToForm();
if (window.MathJax) {
    MathJax.typesetPromise()
      .then(() => console.log("Math rendered"))
      .catch(err => console.error(err));
}
}

function fillGuideHTML() {
  return `
    <div class="image-box">
      <b>Cách nhập đáp án để không bị sai oan:</b>
      <ul style="margin:8px 0 0 18px; padding:0; color:#475569; font-weight:750; line-height:1.6;">
        <li>Nếu đáp án là số: nhập đúng số, ví dụ <b>-2</b> hoặc <b>10</b>.</li>
        <li>Nếu đáp án là vector hoặc nghiệm: nhập <b>(3,2)</b>, <b>3,2</b> hoặc <b>3 2</b>.</li>
        <li>Nếu có nhiều giá trị riêng: nhập <b>2,3</b> hoặc <b>2 3</b>.</li>
        <li>Không cần viết thêm chữ như <b>x =</b>, <b>đáp án là</b>.</li>
      </ul>
    </div>
  `;
}

function renderQuestion(q, idx) {
  const question = q.question || "";

  if (q.type === "mcq") {
    return `
      <div class="question-card">
        <div class="q-meta">
          <span class="badge">Câu ${idx + 1}</span>
        </div>

        <div class="q-title">${question}</div>

        ${renderQuestionImage(q.image)}

        <div class="option-list">
          ${q.options.map((opt, i) => `
            <label class="option-label">
              <input
                type="radio"
                name="q_${idx}"
                value="${i}"
                onchange="saveAnswer(${idx}, '${i}')"
              >
              <span>${String.fromCharCode(65 + i)}. ${opt}</span>
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
      </div>

      <div class="q-title">${question}</div>

      ${renderQuestionImage(q.image)}

      ${fillGuideHTML()}

      <input
        class="answer-input"
        id="fill_${idx}"
        placeholder="Ví dụ: -2 hoặc (3,2) hoặc 3,2"
        oninput="saveAnswer(${idx}, this.value)"
      >
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

function submitTest() {
  if (!currentTest) return;

  const unanswered = currentTest.filter((q) => q.userAnswer === null || q.userAnswer === "").length;

  if (unanswered > 0) {
    const ok = confirm(`Bạn còn ${unanswered} câu chưa làm. Vẫn nộp bài?`);
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
  if (q.userAnswer === null || q.userAnswer === "") return "(chưa trả lời)";
  if (q.type === "mcq") return String.fromCharCode(65 + Number(q.userAnswer));
  return q.userAnswer;
}

function renderTestResult(record) {
  app.innerHTML = `
    <div class="section-head">
      <div>
        <h2>🏆 Kết quả</h2>
        <div class="muted">${record.time} • ${record.source === "ai" ? "Bài từ AI" : "Bài kiểm tra"} • ${record.topics.join(", ")}</div>
      </div>
      <div class="btn-row">
        <button class="secondary" onclick="showView('${record.source === "ai" ? "aiSetup" : "testSetup"}')">← Quay lại tạo đề</button>
        <button class="primary" onclick="showView('scores')">Xem bảng điểm</button>
      </div>
    </div>

    <div class="score-big">
      <div class="num">${record.correct}/${record.total}</div>
      <div class="label">Điểm: ${record.percent}%</div>
    </div>

    <div class="stats">
      <div class="stat"><strong>${record.total}</strong><span>Tổng số câu</span></div>
      <div class="stat"><strong>${record.correct}</strong><span>Số câu đúng</span></div>
      <div class="stat"><strong>${record.total - record.correct}</strong><span>Số câu sai</span></div>
    </div>

    <div class="section-head">
      <div>
        <h2>Xem lại bài làm</h2>
        <div class="muted">Các câu đúng/sai và lời giải thích.</div>
      </div>
    </div>

    ${record.questions.map((q, idx) => `
      <div class="question-card ${q.correct ? "review-ok" : "review-bad"}">
        <div class="q-meta">
          <span class="badge ${q.correct ? "ok" : "bad"}">Câu ${idx + 1}: ${q.correct ? "Đúng" : "Sai"}</span>
        </div>
        <div class="q-title">${q.question}</div>
        ${renderQuestionImage(q.image)}
        <div class="answer-line">
          <b>Đáp án của bạn:</b> ${formatUserAnswer(q)}<br>
          <b>Đáp án đúng:</b> ${q.correctAnswer}<br>
          <b>Giải thích:</b> ${q.explain || "Chưa có giải thích."}
        </div>
      </div>
    `).join("")}
  `;
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

// =========================
// 11. BẢNG ĐIỂM
// =========================
function renderScores() {
  const scores = getScores();
  const tests = scores.length;
  const avg = tests ? Math.round(scores.reduce((sum, x) => sum + x.percent, 0) / tests) : 0;
  const best = tests ? Math.max(...scores.map((x) => x.percent)) : 0;

  app.innerHTML = `
    <div class="section-head">
      <div>
        <h2>🏆 Bảng điểm</h2>
        <div class="muted">Lưu lịch sử các bài đã nộp.</div>
      </div>
      <div class="btn-row">
        ${renderBackButton()}
        <button class="danger" onclick="clearScores()">Xóa toàn bộ điểm</button>
      </div>
    </div>

    <div class="stats">
      <div class="stat"><strong>${tests}</strong><span>Số bài kiểm tra đã làm</span></div>
      <div class="stat"><strong>${avg}%</strong><span>Tỉ lệ đúng trung bình</span></div>
      <div class="stat"><strong>${best}%</strong><span>Cao nhất</span></div>
    </div>

    ${
      scores.length
        ? `
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Thời gian</th>
                  <th>Loại bài</th>
                  <th>Chủ đề</th>
                  <th>Điểm</th>
                  <th>Số câu</th>
                  <th>Xem</th>
                  <th>Xóa</th>
                </tr>
              </thead>
              <tbody>
                ${scores.slice().reverse().map((item) => `
                  <tr>
                    <td>${item.time}</td>
                    <td>${item.source === "ai" ? "Bài từ AI" : "Bài kiểm tra"}</td>
                    <td>${item.topics.join(", ")}</td>
                    <td><span class="badge ${item.percent >= 70 ? "ok" : item.percent >= 40 ? "" : "bad"}">${item.percent}%</span></td>
                    <td>${item.total}</td>
                    <td><button class="secondary" onclick="viewScore('${item.id}')">Xem lại</button></td>
                    <td><button class="danger" onclick="deleteScore('${item.id}')">Xóa</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `
        : `
          <div class="empty">
            <h3>Chưa có điểm</h3>
            <p>Tạo bài, làm bài và nộp để lưu điểm.</p>
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
  if (!confirm("Xóa toàn bộ điểm?")) return;
  localStorage.removeItem("sagela_scores_clean");
  renderScores();
}

function deleteScore(id) {
  setScores(getScores().filter((x) => x.id !== id));
  renderScores();
}

// =========================
// 12. SỰ KIỆN
// =========================
function setTopic(topic) {
  currentTopic = topic;
  showView("theory");
}

const menuBtn = document.getElementById("menuBtn");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      sidebar.classList.toggle("mobile-open");
    } else {
      sidebar.classList.toggle("collapsed");
      main.classList.toggle("expanded");
    }
  });
}

document.querySelectorAll("[data-view]").forEach((el) => {
  el.addEventListener("click", () => showView(el.dataset.view));
});

document.querySelectorAll("[data-topic]").forEach((el) => {
  el.addEventListener("click", () => setTopic(el.dataset.topic));
});

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    if (currentView === "theory") renderTheory();
  });
}

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    if (currentView === "theory") renderTheory();
  });
}

showView("home");