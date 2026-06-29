const THEORY = [
  {
    id: "linear-system-concept",
    topic: "Hệ phương trình",
    category: "Chương 1: Hệ phương trình & Thực hành",
    title: "Khái niệm và sự tồn tại nghiệm",
    formula: "A · x = b",
    videoTheory: "videos/he_phuong_trinh_ly_thuyet.mp4",
    videoExample: "videos/he_phuong_trinh_khai_niem.mp4",
    summary: "Nghiên cứu bản chất của hệ phương trình tuyến tính, câu hỏi về sự tồn tại và tính duy nhất của nghiệm.",
    sections: [
      {
        title: "Khái niệm Hệ phương trình tuyến tính",
        desc: "Một phương trình tuyến tính có dạng a<sub>1</sub>x<sub>1</sub> + a<sub>2</sub>x<sub>2</sub> + ... + a<sub>n</sub>x<sub>n</sub> = b."
      },
      {
        title: "Đại số và Hình học trực quan",
        desc: "Về hình học, nghiệm của một phương trình 2 ẩn tạo thành một đường thẳng, còn 3 ẩn tạo thành một mặt phẳng. Giao điểm của các đối tượng này chính là tập nghiệm của hệ."
      },
      {
        title: "Sự tồn tại và tính duy nhất",
        desc: "<ul><li><b>Sự tồn tại:</b> Hệ có ít nhất một nghiệm gọi là hệ tương thích.</li><li><b>Tính duy nhất:</b> Nếu hệ có nghiệm, nghiệm đó có thể là duy nhất hoặc vô số nghiệm.</li></ul>"
      }
    ],
    example: "Giải hệ phương trình: $x + 2y = 5$ và $3x + 4y = 11$.",
    solution: "Từ phương trình thứ nhất rút ra x = 5 - 2y. Thế vào phương trình thứ hai ta được 3(5 - 2y) + 4y = 11, suy ra y = 2. Thế ngược lại được x = 1. Vậy nghiệm của hệ là x = 1, y = 2."
  },
  {
    id: "gaussian-elimination-algo",
    topic: "Hệ phương trình",
    category: "Chương 1: Hệ phương trình & Thực hành",
    title: "Phương pháp khử Gauss và Ma trận mở rộng",
    formula: "[A | b]",
    videoTheory: "videos/VideoLyThuyetGauss.mp4",
    videoExample: "videos/gauss_ma_tran_mo_rong.mp4",
    summary: "Chuyển hệ phương trình sang ma trận mở rộng và dùng phép biến đổi hàng để giải hệ.",
    sections: [
      {
        title: "Ba phép toán hàng sơ cấp",
        desc: "<ul><li>Nhân một hàng với số khác 0.</li><li>Đổi chỗ hai hàng.</li><li>Lấy một hàng cộng với bội của hàng khác.</li></ul>"
      },
      {
        title: "Ma trận mở rộng",
        desc: "Ma trận mở rộng ghi lại hệ số của các biến và cột vế phải. Ví dụ hệ hai phương trình hai ẩn có thể viết thành dạng ma trận."
      },
      {
        title: "Dạng bậc thang rút gọn",
        desc: "Mục tiêu của khử Gauss là đưa ma trận về dạng dễ đọc nghiệm, thường là dạng bậc thang hoặc bậc thang rút gọn."
      }
    ],
    example: "Thiết lập ma trận mở rộng và giải hệ x + 2y = 4, 2x + y = 5 bằng phương pháp khử Gauss.",
    solution: "Ma trận mở rộng của hệ là [[1, 2, 4], [2, 1, 5]]. Ta thực hiện phép biến đổi hàng: R2 = R2 - 2R1, thu được [[1, 2, 4], [0, -3, -3]]. Tiếp theo chia hàng 2 cho -3, được [[1, 2, 4], [0, 1, 1]]. Cuối cùng lấy R1 = R1 - 2R2, thu được [[1, 0, 2], [0, 1, 1]]. Vậy nghiệm của hệ là x = 2, y = 1."
  },
  {
    id: "pivots-and-solspace",
    topic: "Hệ phương trình",
    category: "Chương 1: Hệ phương trình & Thực hành",
    title: "Các phần tử chốt và tính chất nghiệm",
    formula: "rank(A) và rank([A|b])",
    summary: "Dùng vị trí chốt để nhận biết hệ có nghiệm, vô nghiệm, nghiệm duy nhất hay vô số nghiệm.",
    sections: [
      {
        title: "Vị trí chốt",
        desc: "Vị trí chốt là vị trí của phần tử dẫn đầu trong một hàng sau khi đưa ma trận về dạng bậc thang."
      },
      {
        title: "Khi nào hệ vô nghiệm?",
        desc: "Nếu xuất hiện hàng dạng $0x + 0y + ... = 1$ thì hệ vô nghiệm."
      },
      {
        title: "Khi nào hệ có vô số nghiệm?",
        desc: "Nếu hệ có nghiệm nhưng tồn tại biến tự do, hệ sẽ có vô số nghiệm."
      }
    ],
    example: "Ma trận RREF là [[1, 0, 2, 3], [0, 1, -1, 0], [0, 0, 0, 0]]. Hệ có bao nhiêu nghiệm?",
    solution: "Ma trận có 3 biến nhưng chỉ có 2 vị trí chốt, nên còn 1 biến tự do. Hệ không có hàng mâu thuẫn dạng 0 = 1, vì vậy hệ có nghiệm. Do tồn tại biến tự do nên hệ có vô số nghiệm."
  },
  {
    id: "vector-r2-r3",
    topic: "Vector",
    category: "Chương 2: Vector, Ma trận & Phép biến đổi hình học",
    title: "Vector trong phẳng và không gian nhiều chiều",
    formula: "u + v",
    summary: "Vector được nhìn dưới dạng mũi tên có hướng hoặc dạng cột tọa độ.",
    sections: [
      {
        title: "Khái niệm Vector",
        desc: "Vector là đại lượng có hướng và độ lớn. Trong mặt phẳng, vector thường có dạng $(x,y)$."
      },
      {
        title: "Cộng vector",
        desc: "Cộng hai vector bằng cách cộng từng tọa độ tương ứng."
      },
      {
        title: "Nhân vector với số",
        desc: "Nhân vector với số làm thay đổi độ dài và có thể đổi hướng nếu số đó âm."
      }
    ],
    example: "Cho $u=(1,2)$ và $v=(3,4)$. Tính $u+v$.",
    solution: "$u+v=(1+3,2+4)=(4,6)$."
  },
  {
    id: "linear-combs-concept",
    topic: "Không gian vector",
    category: "Chương 2: Vector, Ma trận & Phép biến đổi hình học",
    title: "Tổ hợp tuyến tính và Không gian sinh",
    formula: "c1v1 + c2v2",
    summary: "Tổ hợp tuyến tính giúp mô tả các vector có thể tạo ra từ một tập vector ban đầu.",
    sections: [
      {
        title: "Tổ hợp tuyến tính",
        desc: "Biểu thức $c_1v_1 + c_2v_2 + ... + c_nv_n$ gọi là một tổ hợp tuyến tính."
      },
      {
        title: "Không gian sinh",
        desc: "Span là tập hợp tất cả các vector tạo được từ tổ hợp tuyến tính của các vector đã cho."
      },
      {
        title: "Liên hệ với hệ phương trình",
        desc: "Kiểm tra một vector có thuộc span hay không có thể đưa về việc giải một hệ phương trình tuyến tính."
      }
    ],
    example: "Vector $b$ có thuộc span của $v$ và $w$ không?",
    solution: "Ta lập hệ với các cột là $v,w$ và vế phải là $b$. Nếu hệ có nghiệm thì $b$ thuộc span."
  },
  {
    id: "matrix-vector-mult-linear",
    topic: "Ma trận",
    category: "Chương 2: Vector, Ma trận & Phép biến đổi hình học",
    title: "Phép nhân Ma trận - Vector",
    formula: "A · x",
    summary: "Nhân ma trận với vector bằng cách lấy từng hàng của ma trận nhân với vector.",
    sections: [
      {
        title: "Điều kiện nhân",
        desc: "Ma trận $A$ có kích thước $m \\times n$ nhân được với vector $x$ có $n$ thành phần."
      },
      {
        title: "Cách tính",
        desc: "Mỗi thành phần kết quả bằng tích vô hướng của một hàng trong ma trận với vector."
      },
      {
        title: "Ý nghĩa",
        desc: "Phép nhân ma trận-vector có thể hiểu như một phép biến đổi vector."
      }
    ],
    example: "Cho $A=[[1,2],[3,4]]$ và $x=(1,1)$. Tính $Ax$.",
    solution: "$Ax=(1·1+2·1,3·1+4·1)=(3,7)$."
  },
  {
    id: "matrix-multiplication-theory",
    topic: "Ma trận",
    category: "Chương 2: Vector, Ma trận & Phép biến đổi hình học",
    title: "Tích hai Ma trận",
    formula: "A · B",
    summary: "Phép nhân hai ma trận lấy hàng của ma trận thứ nhất nhân với cột của ma trận thứ hai.",
    sections: [
      {
        title: "Điều kiện nhân",
        desc: "Muốn nhân $AB$, số cột của $A$ phải bằng số hàng của $B$."
      },
      {
        title: "Kích thước kết quả",
        desc: "Nếu $A$ là $m \\times n$ và $B$ là $n \\times p$ thì $AB$ là $m \\times p$."
      },
      {
        title: "Lưu ý",
        desc: "Phép nhân ma trận thường không giao hoán, nghĩa là $AB$ thường khác $BA$."
      }
    ],
    example: "Nhân $A=[[1,2],[3,4]]$ với $B=[[1,0],[0,1]]$.",
    solution: "Vì $B$ là ma trận đơn vị nên $AB=A$."
  },
  {
    id: "determinant-basic",
    topic: "Định thức",
    category: "Chương 3: Định thức",
    title: "Định thức ma trận 2x2",
    formula: "det(A)",
    summary: "Định thức giúp nhận biết ma trận có khả nghịch hay không và liên quan đến diện tích.",
    sections: [
      {
        title: "Công thức",
        desc: "Với $A=[[a,b],[c,d]]$, ta có $det(A)=ad-bc$."
      },
      {
        title: "Ý nghĩa",
        desc: "Nếu $det(A) \\neq 0$, ma trận vuông $A$ khả nghịch."
      },
      {
        title: "Diện tích",
        desc: "Giá trị tuyệt đối của định thức 2x2 bằng diện tích hình bình hành tạo bởi hai vector cột."
      }
    ],
    example: "Tính $det([[1,2],[3,4]])$.",
    solution: "$det=1·4-2·3=-2$."
  },
  {
    id: "linear-independence-span",
    topic: "Không gian vector",
    category: "Chương 4: Không gian vector",
    title: "Độc lập tuyến tính và Phụ thuộc tuyến tính",
    formula: "c1v1 + c2v2 = 0",
    summary: "Một tập vector độc lập tuyến tính nếu không vector nào viết được từ các vector còn lại.",
    sections: [
      {
        title: "Phụ thuộc tuyến tính",
        desc: "Nếu một vector viết được thành tổ hợp tuyến tính của các vector còn lại thì tập vector phụ thuộc tuyến tính."
      },
      {
        title: "Độc lập tuyến tính",
        desc: "Nếu không vector nào dư thừa, tập vector độc lập tuyến tính."
      },
      {
        title: "Dùng rank để kiểm tra",
        desc: "Các cột độc lập tuyến tính khi ma trận có chốt ở mọi cột."
      }
    ],
    example: "Hai vector $(2,2)$ và $(1,1)$ có độc lập tuyến tính không?",
    solution: "Không. Vì $(2,2)=2(1,1)$ nên chúng phụ thuộc tuyến tính."
  },
  {
    id: "matrix-transformation-intro",
    topic: "Biến đổi hình học",
    category: "Chương 5: Biến đổi hình học",
    title: "Khái niệm Phép biến đổi ma trận",
    formula: "T(x) = A · x",
    summary: "Ma trận có thể được xem như một hàm biến đổi vector đầu vào thành vector đầu ra.",
    sections: [
      {
        title: "Phép biến đổi ma trận",
        desc: "Nếu $T(x)=Ax$ thì $T$ là một phép biến đổi ma trận."
      },
      {
        title: "Vector cơ sở",
        desc: "Ảnh của các vector cơ sở chính là các cột của ma trận biểu diễn phép biến đổi."
      },
      {
        title: "Ví dụ phép quay",
        desc: "Ma trận có thể biểu diễn phép quay, phản xạ, co giãn hoặc biến dạng hình học."
      }
    ],
    example: "Quay vector $(1,0)$ ngược chiều kim đồng hồ $90^\\circ$ được gì?",
    solution: "Kết quả là $(0,1)$."
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
    type: "mcq",
    topic: "Biến đổi hình học",
    level: "medium",
    question: "Quay điểm (1,0) ngược chiều kim đồng hồ 90 độ quanh gốc tọa độ được điểm nào?",
    options: ["(1,0)", "(0,1)", "(-1,0)", "(0,-1)"],
    answer: 1,
    explain: "Quay (1,0) góc 90 độ ngược chiều kim đồng hồ được (0,1)."
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

let currentView = "home";
let currentTopic = "all";
let selectedLessonId = THEORY[0].id;
let currentTest = null;
let currentTestSource = "normal";
let currentPracticeLessonId = null;
let currentPracticeLessonTitle = "";
let lastTestSetup = null;

const app = document.getElementById("app");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

function getScores() {
  try {
    return JSON.parse(localStorage.getItem("sagela_scores_clean") || "[]");
  } catch (e) {
    return [];
  }
}

function setScores(data) {
  localStorage.setItem("sagela_scores_clean", JSON.stringify(data));
}

function getLastPracticeRecord(lessonId) {
  const scores = getScores();

  return (
    scores
      .filter((item) => item.source === "practice" && item.practiceLessonId === lessonId)
      .sort((a, b) => String(b.id).localeCompare(String(a.id)))[0] || null
  );
}

function parseMathBeauty(text) {
  if (!text) return "";

  let result = String(text);

  result = result.replace(/\[\[(.*?)\]\]/g, function (match, innerContent) {
    try {
      const rows = innerContent.split(/\],\s*\[/);

      const matrixData = rows.map((r) =>
        r
          .replace(/^\[/, "")
          .replace(/\]$/, "")
          .split(",")
          .map((x) => x.trim())
      );

      const colCount = Math.max(...matrixData.map((r) => r.length));

      let gridItems = "";

      matrixData.forEach((row) => {
        row.forEach((val) => {
          gridItems += `<span>${val}</span>`;
        });
      });

      const columns = Array(colCount).fill("1fr").join(" ");

      return `
        <span class="math-matrix">
          <span class="math-matrix-grid" style="grid-template-columns: ${columns}">
            ${gridItems}
          </span>
        </span>
      `;
    } catch (e) {
      return match;
    }
  });

  result = result.replace(/\$([^$]+)\$/g, function (match, inner) {
    return `<code style="background: var(--soft); padding: 2px 6px; border-radius: 4px; font-family: Cambria, serif;">${inner}</code>`;
  });

  result = result.replace(/\((-?\d+),\s*(-?\d+)(,\s*(-?\d+))?\)/g, function (match, x, y, dummy, z) {
    const coords = z ? [x, y, z] : [x, y];

    return `
      <span class="math-matrix">
        <span class="math-matrix-grid" style="grid-template-columns: 1fr">
          ${coords.map((c) => `<span>${c}</span>`).join("")}
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

  while (x === 0) {
    x = randInt(min, max);
  }

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

function triggerViewAnimation() {
  app.classList.remove("animate-fade-in");
  void app.offsetWidth;
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
  if (view === "practice") renderPractice();
  if (view === "scores") renderScores();
}

function goBack() {
  if (currentView === "takingTest") {
    if (confirm("Quay lại sẽ hủy bài đang làm. Bạn chắc chắn?")) {
      currentTest = null;

      if (currentTestSource === "practice") {
        showView("practice");
      } else {
        showView("testSetup");
      }
    }

    return;
  }

  if (currentView === "testResult") {
    showView("scores");
    return;
  }

  if (currentView === "theoryDetail") {
    showView("theory");
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
    total += record.total || 0;
    correct += record.correct || 0;
  });

  const percent = total ? Math.round((correct / total) * 100) : 0;

  return { tests, percent };
}

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

function renderHome() {
  const stats = scoreStats();

  app.innerHTML = `
    <section class="hero">
      <div>
        <h1>Đại số tuyến tính dễ học hơn bao giờ hết</h1>
        <p>
          Hệ thống ôn luyện lý thuyết tương tác trực quan phân chia mục lục rõ ràng,
          kết hợp công cụ tạo đề kiểm tra và luyện tập theo từng phần lý thuyết.
        </p>

        <div class="hero-actions">
          <button class="hero-btn" onclick="showView('testSetup')">Làm kiểm tra</button>
          <button class="hero-btn ghost" onclick="showView('theory')">Ôn lý thuyết</button>
          <button class="hero-btn ghost" onclick="showView('practice')">Bài luyện tập</button>
        </div>
      </div>

      <div class="hero-panel">
        <div>
          <div class="big-formula">A · x = b</div>
          <div style="font-size: 13px; opacity:0.9;">
            Hệ phương trình, Vector, Ma trận, Định thức, Không gian vector...
          </div>
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
      ${featureCard(
        "📘",
        "Lý thuyết phân chia mục lục",
        "Hệ thống bài học tóm tắt theo chương, phân chia từng phần khái niệm, công thức và ví dụ giải.",
        "#2563eb",
        "#06b6d4",
        "showView('theory')"
      )}

      ${featureCard(
        "📝",
        "Tạo bài kiểm tra",
        "Tạo đề kiểm tra theo số câu, độ khó, dạng câu hỏi và chủ đề bạn muốn.",
        "#8b5cf6",
        "#ec4899",
        "showView('testSetup')"
      )}

      ${featureCard(
        "✨",
        "Bài luyện tập",
        "Luyện tập theo từng phần lý thuyết. Làm xong có thể xem điểm và xem lại bài.",
        "#581c87",
        "#1d4ed8",
        "showView('practice')"
      )}
    </section>
  `;
}

function filteredTheory() {
  const searchInput = document.getElementById("searchInput");
  const keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";

  return THEORY.filter((item) => {
    const byTopic = currentTopic === "all" || item.topic === currentTopic;

    const bySearch =
      !keyword ||
      item.title.toLowerCase().includes(keyword) ||
      item.topic.toLowerCase().includes(keyword) ||
      item.summary.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword);

    return byTopic && bySearch;
  });
}

function renderTheory() {
  const list = filteredTheory();

  app.innerHTML = `
    <div class="section-head">
      <div>
        <h2>📘 Lý thuyết toán</h2>
        <div class="muted">
          Chọn một phần lý thuyết bên dưới để xem nội dung chi tiết.
        </div>
      </div>

      ${renderBackButton()}
    </div>

    <section class="grid">
      ${
        list.map((item) => `
          <article class="card">
            <div class="card-top" style="--c1:#2563eb;--c2:#06b6d4;">
              <div class="tag">${item.topic}</div>
              <div class="formula">${item.title}</div>
            </div>

            <div class="card-body">
              <div class="card-desc">
                <b>${item.category}</b><br>
                ${item.summary}
              </div>

              <div class="btn-row">
                <button class="primary" onclick="renderTheoryDetail('${item.id}')">Xem lý thuyết</button>
                <button class="secondary" onclick="startPracticeByLesson('${item.id}')">Luyện tập ngay</button>
              </div>
            </div>
          </article>
        `).join("") ||
        `
          <div class="empty">
            <h3>Không tìm thấy bài lý thuyết</h3>
            <p>Hãy thử tìm kiếm bằng từ khóa khác.</p>
          </div>
        `
      }
    </section>
  `;
}

function renderTheoryDetail(id) {
  const selected = THEORY.find((item) => item.id === id) || THEORY[0];
  selectedLessonId = selected.id;
  currentView = "theoryDetail";

  app.innerHTML = `
    <div class="section-head">
      <div>
        <h2>📘 ${selected.title}</h2>
        <div class="muted">${selected.category}</div>
      </div>

      <div class="btn-row">
        <button class="secondary" onclick="showView('theory')">← Quay lại mục lục</button>
        <button class="primary" onclick="startPracticeByLesson('${selected.id}')">✨ Luyện tập phần này</button>
      </div>
    </div>

    <div class="lesson-view">
      <span class="badge" style="background: var(--blue); color: white;">${selected.category}</span>
      <span class="badge" style="margin-left: 6px;">${selected.topic}</span>

      <h2>${selected.title}</h2>

      <div class="math-box">${parseMathBeauty(selected.formula)}</div>

      <p class="muted" style="margin-bottom: 20px;">${selected.summary}</p>

      <h3 style="font-size:16px; font-weight:800; margin-top:20px; color: var(--dark);">
        Nội dung chính
      </h3>

      <div style="display: flex; flex-direction: column; gap: 14px;">
        ${
          selected.sections
            ? selected.sections.map((sec, sIdx) => `
              <div class="sub-section">
                <h4>💡 Mục ${sIdx + 1}: ${sec.title}</h4>
                <p class="sub-section-desc">${parseMathBeauty(sec.desc)}</p>
              </div>
            `).join("")
            : ""
        }
      </div>
              ${renderTheoryVideo(selected)}
      <div class="example-solution" style="margin-top: 24px;">
        <h3 style="font-size: 14px; color: var(--blue); font-weight:800;">📚 Bài toán ví dụ:</h3>

        <p style="font-size:14px; margin: 6px 0 10px; line-height: 1.6;">
          ${parseMathBeauty(selected.example)}
        </p>
              ${renderExampleVideo(selected)}
        <div class="divider"></div>

        <h3 style="font-size: 14px; color: var(--green); font-weight:800;">🔑 Lời giải:</h3>

        <p style="font-size:14px; margin: 6px 0 0; line-height: 1.6;">
          ${parseMathBeauty(selected.solution)}
        </p>
      </div>
    </div>
  `;
}

function getTopics() {
  return ["Hệ phương trình", "Vector", "Ma trận", "Định thức", "Không gian vector", "Biến đổi hình học"];
}

function renderPractice() {
  app.innerHTML = `
    <div class="section-head">
      <div>
        <h2>✨ Bài luyện tập</h2>
        <div class="muted">
          Phần lý thuyết có ${THEORY.length} bài thì phần luyện tập cũng có ${THEORY.length} bài tương ứng.
        </div>
      </div>

      ${renderBackButton()}
    </div>

    <section class="grid">
      ${THEORY.map((lesson) => {
        const last = getLastPracticeRecord(lesson.id);
        const buttonText = last ? "Làm lại" : "Bắt đầu luyện tập";
        const scoreHtml = last
          ? `<span class="score-chip">Điểm: ${last.correct}/${last.total} - ${last.percent}%</span>`
          : "";

        const reviewButton = last
          ? `<button class="secondary" onclick="viewPracticeReview('${lesson.id}')">Xem lại bài</button>`
          : "";

        return `
          <article class="card">
            <div class="card-top" style="--c1:#581c87;--c2:#1d4ed8;">
              <div class="tag">${lesson.topic}</div>
              <div class="formula">${lesson.title}</div>
            </div>

            <div class="card-body">
              <div class="card-desc">
                <b>${lesson.category}</b><br>
                Luyện tập riêng cho phần: ${lesson.title}.
              </div>

              <div class="btn-row">
                <button class="primary" onclick="startPracticeByLesson('${lesson.id}')">${buttonText}</button>
                ${reviewButton}
                ${scoreHtml}
              </div>
            </div>
          </article>
        `;
      }).join("")}
    </section>
  `;
}

function viewPracticeReview(lessonId) {
  const record = getLastPracticeRecord(lessonId);

  if (!record) {
    alert("Bạn chưa làm bài luyện tập này.");
    return;
  }

  currentView = "testResult";
  currentTestSource = "practice";
  renderTestResult(record);
}

function startPracticeByLesson(lessonId) {
  const lesson = THEORY.find((item) => item.id === lessonId);

  if (!lesson) {
    alert("Không tìm thấy phần luyện tập.");
    return;
  }

  const questions = generateNormalQuestions(10, "mixed", "easy", [lesson.topic]);

  if (!questions.length) {
    alert("Phần này hiện chưa có câu hỏi luyện tập.");
    return;
  }

  currentTestSource = "practice";
  currentPracticeLessonId = lesson.id;
  currentPracticeLessonTitle = lesson.title;

  currentTest = questions.map((q, index) => ({
    ...q,
    testIndex: index,
    userAnswer: null
  }));

  currentView = "takingTest";
  setActive("practice");
  renderTakingTest();
}

function renderTestSetup() {
  const setup = lastTestSetup;
  const topics = getTopics();

  app.innerHTML = `
    <div class="section-head">
      <div>
        <h2>📝 Tạo bài kiểm tra</h2>
        <div class="muted">Tạo đề kiểm tra theo chủ đề, số câu, dạng câu hỏi và độ khó.</div>
      </div>

      ${renderBackButton()}
    </div>

    <div class="test-shell">
      <div class="panel">
        <h3>Cấu hình bộ đề</h3>

        <div class="form-grid">
          <div class="field">
            <label>Kiểu đề</label>

            <select id="sourceSelect">
              <option value="normal" ${setup?.source === "normal" ? "selected" : ""}>Đề kiểm tra có sẵn</option>
              <option value="ai" ${setup?.source === "ai" ? "selected" : ""}>Sinh câu hỏi tự động</option>
            </select>
          </div>

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
          <button class="primary" onclick="createTest()">Bắt đầu làm bài</button>
          <button class="secondary" onclick="selectAllTopics(true)">Chọn tất cả</button>
          <button class="secondary" onclick="selectAllTopics(false)">Bỏ chọn</button>
        </div>

        <div id="setupResult" style="margin-top: 10px; font-weight:700;"></div>
      </div>

      <div class="test-box">
        <div class="test-head">
          <h3>Chế độ kiểm tra</h3>
          <div>Bạn có thể chọn câu hỏi có sẵn hoặc sinh tự động.</div>
        </div>

        <div class="test-body">
          <div class="stats four" style="margin-bottom:14px;">
            <div class="stat"><strong>10-40</strong><span>Số câu</span></div>
            <div class="stat"><strong>2</strong><span>Kiểu đề</span></div>
            <div class="stat"><strong>3</strong><span>Cấp độ</span></div>
            <div class="stat"><strong>6</strong><span>Chủ đề</span></div>
          </div>

          <h4 style="margin: 0 0 4px; font-size:14px;">Quy chế làm bài:</h4>

          <p class="muted" style="margin-bottom:12px;">
            Hệ thống tự động ghi nhận điểm và đáp án chi tiết ngay sau khi nộp.
          </p>

          <h4 style="margin: 0 0 4px; font-size:14px;">Hướng dẫn tự luận:</h4>

          <p class="muted">
            Với vector hoặc nghiệm hệ, có thể nhập dạng <b>(3,2)</b>, <b>3,2</b> hoặc <b>3 2</b>.
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

function createTest() {
  const selectedSource = document.getElementById("sourceSelect").value;
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

  const setup = {
    source: selectedSource,
    numQuestions,
    questionType,
    level,
    topics
  };

  lastTestSetup = setup;

  const questions =
    selectedSource === "ai"
      ? generateAIQuestions(numQuestions, questionType, level, topics)
      : generateNormalQuestions(numQuestions, questionType, level, topics);

  if (questions.length === 0) {
    box.style.color = "var(--red)";
    box.innerText = "⚠️ Không tìm thấy câu hỏi phù hợp với bộ lọc.";
    return;
  }

  currentTestSource = selectedSource;
  currentPracticeLessonId = null;
  currentPracticeLessonTitle = "";

  currentTest = questions.map((q, index) => ({
    ...q,
    testIndex: index,
    userAnswer: null
  }));

  currentView = "takingTest";
  setActive("testSetup");
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
    pool = [
      ...pool.filter((q) => q.level === "easy"),
      ...pool.filter((q) => q.level !== "easy")
    ];
  } else if (level === "medium") {
    pool = [
      ...pool.filter((q) => q.level === "medium" || q.level === "easy"),
      ...pool.filter((q) => q.level === "hard")
    ];
  } else {
    pool = [
      ...pool.filter((q) => q.level === "hard" || q.level === "medium"),
      ...pool.filter((q) => q.level === "easy")
    ];
  }

  if (pool.length === 0) return [];

  const result = [];
  let source = shuffle(pool);

  while (result.length < n) {
    if (source.length === 0) {
      source = shuffle(pool);
    }

    const q = source.pop();
    result.push({ ...q, id: q.id + "_" + result.length });
  }

  return result;
}

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

  if (topics.includes("Biến đổi hình học")) {
    generators.push(genTransform);
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
      explain: `Đầu mút của vector nằm tại tọa độ ${vecStr(v)}.`
    };
  }

  return {
    type,
    topic: "Vector",
    level,
    question: "Quan sát bản vẽ hình học. Nhập tọa độ của vector v.",
    image: { kind: "vector", vector: v, label: "v" },
    answers: [vecStr(v), v.join(","), v.join(" ")],
    explain: `Đầu mút của vector nằm tại tọa độ ${vecStr(v)}.`
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
      explain: `Tích vô hướng là ${u[0]}·${v[0]} + ${u[1]}·${v[1]} + ${u[2]}·${v[2]} = ${ans}.`
    };
  }

  return {
    type,
    topic: "Vector",
    level,
    question: `Tính tích vô hướng ${vecStr(u)} · ${vecStr(v)}.`,
    answers: [String(ans)],
    explain: `Tích vô hướng là ${u[0]}·${v[0]} + ${u[1]}·${v[1]} + ${u[2]}·${v[2]} = ${ans}.`
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
      question: `Tính độ dài vector ${vecStr(v)}.`,
      ...makeMCQ(ans, [ans + 1, ans - 1, t[0] + t[1]]),
      explain: `Độ dài là √(${v[0]}² + ${v[1]}²) = ${ans}.`
    };
  }

  return {
    type,
    topic: "Vector",
    level,
    question: `Tính độ dài vector ${vecStr(v)}.`,
    answers: [String(ans)],
    explain: `Độ dài là √(${v[0]}² + ${v[1]}²) = ${ans}.`
  };
}

function genMatrixVector(level, questionType) {
  const r = level === "easy" ? 4 : level === "medium" ? 6 : 9;

  const A = [
    [randInt(-r, r), randInt(-r, r)],
    [randInt(-r, r), randInt(-r, r)]
  ];

  const v = [randInt(-r, r), randInt(-r, r)];

  const ans = [
    A[0][0] * v[0] + A[0][1] * v[1],
    A[1][0] * v[0] + A[1][1] * v[1]
  ];

  const type = chooseType(questionType);

  if (type === "mcq") {
    return {
      type,
      topic: "Ma trận",
      level,
      question: `Cho A=${matStr(A)} và v=${vecStr(v)}. Tính Av.`,
      ...makeMCQ(vecStr(ans), [
        vecStr([ans[0] + 1, ans[1]]),
        vecStr([ans[0], ans[1] + 1]),
        vecStr(v)
      ]),
      explain: `Lấy hàng của A nhân với cột v, kết quả là ${vecStr(ans)}.`
    };
  }

  return {
    type,
    topic: "Ma trận",
    level,
    question: `Cho A=${matStr(A)} và v=${vecStr(v)}. Tính Av.`,
    answers: [vecStr(ans), ans.join(","), ans.join(" ")],
    explain: `Lấy hàng của A nhân với cột v, kết quả là ${vecStr(ans)}.`
  };
}

function genDeterminant(level, questionType) {
  const r = level === "easy" ? 5 : level === "medium" ? 8 : 12;

  const A = [
    [randInt(-r, r), randInt(-r, r)],
    [randInt(-r, r), randInt(-r, r)]
  ];

  const ans = det2(A);
  const type = chooseType(questionType);

  if (type === "mcq") {
    return {
      type,
      topic: "Định thức",
      level,
      question: `Tính det(A) của A=${matStr(A)}.`,
      ...makeMCQ(ans, [ans + 1, ans - 1, -ans]),
      explain: `det(A) = ad - bc = ${A[0][0]}·${A[1][1]} - ${A[0][1]}·${A[1][0]} = ${ans}.`
    };
  }

  return {
    type,
    topic: "Định thức",
    level,
    question: `Tính det(A) của A=${matStr(A)}.`,
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
      question: "Quan sát hình bình hành tạo bởi hai vector a và b. Diện tích bằng bao nhiêu?",
      image: { kind: "parallelogram", a, b },
      ...makeMCQ(ans, [ans + 1, Math.max(0, ans - 1), ans + 2]),
      explain: `Diện tích bằng |det| = |${a[0]}·${b[1]} - ${a[1]}·${b[0]}| = ${ans}.`
    };
  }

  return {
    type,
    topic: "Định thức",
    level,
    question: "Quan sát hình bình hành tạo bởi hai vector a và b. Tính diện tích.",
    image: { kind: "parallelogram", a, b },
    answers: [String(ans)],
    explain: `Diện tích bằng |det| = |${a[0]}·${b[1]} - ${a[1]}·${b[0]}| = ${ans}.`
  };
}

function genLinearSystem(level, questionType) {
  const r = level === "easy" ? 4 : level === "medium" ? 7 : 10;
  let A;
  let d;

  do {
    A = [
      [randInt(-r, r), randInt(-r, r)],
      [randInt(-r, r), randInt(-r, r)]
    ];

    d = det2(A);
  } while (d === 0);

  const x = [randInt(-r, r), randInt(-r, r)];

  const b = [
    A[0][0] * x[0] + A[0][1] * x[1],
    A[1][0] * x[0] + A[1][1] * x[1]
  ];

  const type = chooseType(questionType);

  if (type === "mcq") {
    return {
      type,
      topic: "Hệ phương trình",
      level,
      question: `Giải hệ Ax=b với A=${matStr(A)}, b=${vecStr(b)}. Tìm x.`,
      ...makeMCQ(vecStr(x), [
        vecStr([x[0] + 1, x[1]]),
        vecStr([x[0], x[1] + 1]),
        vecStr([-x[0], x[1]])
      ]),
      explain: `Giải hệ, nghiệm đúng là x=${vecStr(x)}.`
    };
  }

  return {
    type,
    topic: "Hệ phương trình",
    level,
    question: `Giải hệ Ax=b với A=${matStr(A)}, b=${vecStr(b)}. Nhập nghiệm dạng (x,y).`,
    answers: [vecStr(x), x.join(","), x.join(" ")],
    explain: `Giải hệ, nghiệm đúng là x=${vecStr(x)}.`
  };
}

function genRank(level, questionType) {
  const r = level === "easy" ? 4 : level === "medium" ? 7 : 10;
  const mode = randInt(0, 2);
  let A;
  let ans;

  if (mode === 0) {
    A = [
      [0, 0],
      [0, 0]
    ];

    ans = 0;
  } else if (mode === 1) {
    const row = [randNonZero(-r, r), randInt(-r, r)];
    const k = randNonZero(-3, 3);

    A = [
      row,
      [k * row[0], k * row[1]]
    ];

    ans = 1;
  } else {
    do {
      A = [
        [randInt(-r, r), randInt(-r, r)],
        [randInt(-r, r), randInt(-r, r)]
      ];
    } while (det2(A) === 0);

    ans = 2;
  }

  const type = chooseType(questionType);

  if (type === "mcq") {
    return {
      type,
      topic: "Không gian vector",
      level,
      question: `Tìm rank(A) của A=${matStr(A)}.`,
      options: ["0", "1", "2", "Không xác định"],
      answer: ans,
      explain: `rank(A)=${ans}.`
    };
  }

  return {
    type,
    topic: "Không gian vector",
    level,
    question: `Tìm rank(A) của A=${matStr(A)}.`,
    answers: [String(ans)],
    explain: `rank(A)=${ans}.`
  };
}

function genTransform(level, questionType) {
  const type = chooseType(questionType);

  if (type === "mcq") {
    return {
      type,
      topic: "Biến đổi hình học",
      level,
      question: "Tìm ảnh của điểm (1,0) qua phép quay ngược chiều kim đồng hồ góc 90 độ.",
      options: ["(1,0)", "(0,1)", "(-1,0)", "(0,-1)"],
      answer: 1,
      explain: "Quay điểm (1,0) góc 90 độ ngược chiều kim đồng hồ quanh gốc tọa độ thu được điểm (0,1)."
    };
  }

  return {
    type,
    topic: "Biến đổi hình học",
    level,
    question: "Tính ảnh của vector (x,y) qua phép phản xạ qua trục hoành.",
    answers: ["(x,-y)", "x,-y", "x, -y"],
    explain: "Phép phản xạ qua trục hoành giữ nguyên x và đổi y thành -y."
  };
}

function renderTakingTest() {
  if (!currentTest) {
    showView("testSetup");
    return;
  }

  app.innerHTML = `
    <div class="section-head">
      <div>
        <h2>${
          currentTestSource === "practice"
            ? "✨ Bài luyện tập"
            : currentTestSource === "ai"
              ? "✨ Bài tự động"
              : "📝 Bài kiểm tra tổng hợp"
        }</h2>

        <div class="muted">
          ${
            currentTestSource === "practice"
              ? "Phần luyện tập: " + currentPracticeLessonTitle
              : "Đang làm bài: " + currentTest.length + " câu hỏi toán học"
          }
        </div>
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

      <div style="font-size: 11px; font-weight:800; color:var(--muted); margin-top:8px;">
        HƯỚNG DẪN NHẬP ĐÁP ÁN:
      </div>

      <ul style="margin:4px 0 10px; padding-left:16px; font-size:12px; color:var(--muted);">
        <li>Số nguyên: Ví dụ: <code>-5</code> hoặc <code>2</code>.</li>
        <li>Tọa độ vector hoặc nghiệm: Ví dụ: <code>(3,2)</code> hoặc <code>3,2</code>.</li>
      </ul>

      <input
        class="answer-input"
        id="fill_${idx}"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        placeholder="Nhập đáp án của bạn tại đây..."
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

      if (input) {
        input.checked = true;
      }
    }

    if (q.type === "fill") {
      const input = document.getElementById("fill_" + idx);

      if (input) {
        input.value = q.userAnswer;
      }
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
    const ok = confirm(`Bạn còn ${unanswered} câu chưa làm. Vẫn muốn nộp bài chứ?`);

    if (!ok) return;
  }

  const total = currentTest.length;
  const correct = currentTest.reduce((sum, q) => sum + questionScore(q), 0);
  const percent = Math.round((correct / total) * 100);

  const record = {
    id: String(Date.now()) + "_" + Math.random().toString(16).slice(2),
    source: currentTestSource,
    practiceLessonId: currentTestSource === "practice" ? currentPracticeLessonId : null,
    practiceLessonTitle: currentTestSource === "practice" ? currentPracticeLessonTitle : "",
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

  if (q.type === "mcq") {
    return String.fromCharCode(65 + Number(q.userAnswer));
  }

  return q.userAnswer;
}

function formatSource(source) {
  if (source === "practice") return "✨ Bài luyện tập";
  if (source === "ai") return "🌟 Tự động";
  return "📁 Kiểm tra có sẵn";
}

function renderTestResult(record) {
  app.innerHTML = `
    <div class="section-head">
      <div>
        <h2>🏆 Đánh giá kết quả làm bài</h2>
        <div class="muted">
          ${record.time} • ${formatSource(record.source)}
          ${record.practiceLessonTitle ? " • " + record.practiceLessonTitle : ""}
        </div>
      </div>

      <div class="btn-row">
        <button class="secondary" onclick="showView('${record.source === "practice" ? "practice" : "testSetup"}')">← Quay lại</button>
        <button class="primary" onclick="showView('scores')">Xem bảng điểm</button>
      </div>
    </div>

    <div class="score-big">
      <div class="num">${record.correct}/${record.total}</div>
      <div class="label">Tổng điểm quy đổi: <b style="color:var(--blue); font-size:20px;">${record.percent}%</b></div>
    </div>

    <div class="stats">
      <div class="stat">
        <strong>${record.total}</strong>
        <span>Tổng số câu hỏi</span>
      </div>

      <div class="stat" style="border-color:#bbf7d0;">
        <strong>${record.correct}</strong>
        <span style="color:var(--green)">Số câu chính xác</span>
      </div>

      <div class="stat" style="border-color:#fecaca;">
        <strong>${record.total - record.correct}</strong>
        <span style="color:var(--red)">Số câu chưa đúng</span>
      </div>
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
          <b>Đáp án chuẩn:</b> <span style="color:var(--green);">${parseMathBeauty(q.correctAnswer)}</span>

          <div class="divider"></div>

          <b>Giải thích chi tiết:</b> ${parseMathBeauty(q.explain) || "Không có giải thích tự động."}
        </div>
      </div>
    `).join("")}
  `;
}

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
      <div class="stat">
        <strong>${tests}</strong>
        <span>Số đề đã hoàn thành</span>
      </div>

      <div class="stat">
        <strong>${avg}%</strong>
        <span>Điểm số trung bình</span>
      </div>

      <div class="stat">
        <strong>${best}%</strong>
        <span>Thành tích cao nhất</span>
      </div>
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
                    <td>${formatSource(item.source)}</td>
                    <td>
                      <span style="font-size:12px; font-weight:600;">
                        ${item.practiceLessonTitle || item.topics.join(", ")}
                      </span>
                    </td>

                    <td>
                      <span class="badge ${item.percent >= 70 ? "ok" : item.percent >= 40 ? "" : "bad"}">
                        ${item.percent}%
                      </span>
                    </td>

                    <td><b>${item.correct}/${item.total}</b> câu đúng</td>

                    <td>
                      <div class="btn-row">
                        <button class="secondary" style="padding: 4px 10px; font-size:12px;" onclick="viewScore('${item.id}')">Xem lại</button>
                        <button class="danger" style="padding: 4px 10px; font-size:12px;" onclick="deleteScore('${item.id}')">Xóa</button>
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

function setTopic(topic) {
  currentTopic = topic;
  showView("theory");
}

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

document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768 && !sidebar.contains(e.target) && e.target !== menuBtn) {
    sidebar.classList.remove("mobile-open");
  }
});

document.querySelectorAll("[data-view]").forEach((el) => {
  el.addEventListener("click", () => {
    currentTopic = "all";
    showView(el.dataset.view);
  });
});

document.querySelectorAll("[data-topic]").forEach((el) => {
  el.addEventListener("click", () => {
    setTopic(el.dataset.topic);
  });
});

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
function renderVideoBox(src, title, desc) {
  if (!src) return "";

  return `
    <div class="video-box">
      <h3>${title}</h3>
      <p>${desc}</p>

      <video controls>
        <source src="${src}" type="video/mp4">
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </div>
  `;
}

function renderTheoryVideo(selected) {
  return renderVideoBox(
    selected.videoTheory,
    "🎬 Video bài giảng lý thuyết",
    "Video này giúp bạn hiểu phần lý thuyết bằng hình ảnh trực quan."
  );
}

function renderExampleVideo(selected) {
  return renderVideoBox(
    selected.videoExample,
    "🧩 Video giải bài ví dụ",
    "Video này hướng dẫn cách giải bài ví dụ từng bước."
  );
}

showView("home");
showView("home");