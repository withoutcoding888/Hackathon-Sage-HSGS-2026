const THEORY = [
  {
    id: "linear-system-concept",
    topic: "Hệ phương trình",
    category: "Chương 1: Hệ phương trình",
    title: "Khái niệm hệ phương trình tuyến tính",
    formula: "A · x = b",
    summary: "Hệ phương trình tuyến tính là tập hợp nhiều phương trình tuyến tính dùng chung một nhóm ẩn.",
    video: "videos/linear_system_concept.mp4",
    content: `
      <p>Đại số tuyến tính bắt đầu từ việc nghiên cứu các phương trình tuyến tính và hệ phương trình tuyến tính.</p>
      <p>Một phương trình tuyến tính có dạng:</p>
      <div class="math-box">a₁x₁ + a₂x₂ + ... + aₙxₙ = b</div>
      <p>Một hệ tuyến tính có thể có ba khả năng:</p>
      <ul>
        <li>Có đúng một nghiệm.</li>
        <li>Có vô số nghiệm.</li>
        <li>Không có nghiệm.</li>
      </ul>
      <p>Trong hình học, nghiệm của phương trình hai ẩn thường là một đường thẳng, còn nghiệm của phương trình ba ẩn thường là một mặt phẳng.</p>
    `,
    example: "Giải hệ x + 2y = 5 và 3x + 4y = 11.",
    solution: "Từ phương trình đầu: x = 5 - 2y. Thế vào phương trình hai: 3(5 - 2y) + 4y = 11, suy ra y = 2. Thế lại được x = 1. Vậy nghiệm là (1,2)."
  },
  {
    id: "gauss",
    topic: "Hệ phương trình",
    category: "Chương 1: Hệ phương trình",
    title: "Khử Gauss và ma trận mở rộng",
    formula: "[A | b]",
    summary: "Khử Gauss biến đổi hệ phương trình về dạng dễ đọc nghiệm hơn.",
    video:"videos/GaussAugmentedPro.mp4",
    content: `
      <p>Khử Gauss là phương pháp dùng các phép biến đổi hàng để giải hệ tuyến tính.</p>
      <p>Các phép biến đổi hàng sơ cấp không làm thay đổi tập nghiệm của hệ, mà chỉ biến hệ về dạng dễ giải hơn.</p>
      <p>Ba phép toán hàng sơ cấp:</p>
      <ul>
        <li>Đổi chỗ hai hàng.</li>
        <li>Nhân một hàng với số khác 0.</li>
        <li>Lấy một hàng cộng với bội của hàng khác.</li>
      </ul>
      <p>Ta thường viết hệ phương trình dưới dạng ma trận mở rộng:</p>
      <div class="math-box">[A | b]</div>
      <p>Mục tiêu là đưa ma trận về dạng bậc thang hoặc bậc thang rút gọn.</p>
    `,
    example: "Giải hệ x + 2y = 4, 2x + y = 5.",
    solution: "Ma trận mở rộng là [[1,2,4],[2,1,5]]. Lấy R2 = R2 - 2R1 được [[1,2,4],[0,-3,-3]]. Suy ra y=1, x=2."
  },
  {
    id: "rref",
    topic: "Hệ phương trình",
    category: "Chương 1: Hệ phương trình",
    title: "Dạng bậc thang rút gọn và biến tự do",
    formula: "RREF",
    summary: "Dạng bậc thang rút gọn giúp xác định nghiệm duy nhất, vô số nghiệm hoặc vô nghiệm.",
    video:"videos/RREFPivotVideo.mp4",
    content: `
      <p>Một ma trận ở dạng bậc thang rút gọn theo hàng nếu:</p>
      <ul>
        <li>Các hàng toàn số 0 nằm dưới cùng.</li>
        <li>Phần tử khác 0 đầu tiên của mỗi hàng là 1. Số 1 này gọi là pivot.</li>
        <li>Các pivot dịch sang phải khi đi từ trên xuống dưới.</li>
        <li>Trong mỗi cột chứa pivot, các phần tử còn lại đều bằng 0.</li>
      </ul>
      <p>Dựa vào pivot, ta có thể đọc nghiệm của hệ:</p>
      <ul>
          <li>Nếu mỗi biến đều có pivot và không có mâu thuẫn, hệ có nghiệm duy nhất.</li>
          <li>Nếu có biến không có pivot, biến đó là biến tự do, hệ thường có vô số nghiệm.</li>
          <li>Nếu có hàng dạng [0,0,0,1], tức là 0 = 1, hệ vô nghiệm.</li>
      </ul>
    `,
    example: "Ma trận [[1,0,2,3],[0,1,-1,0],[0,0,0,0]] có bao nhiêu nghiệm?",
    solution: "Có 3 biến nhưng chỉ có 2 pivot, nên có 1 biến tự do. Hệ có vô số nghiệm."
  },
  {
    id: "vectors",
    topic: "Vector",
    category: "Chương 2: Vector và tổ hợp tuyến tính",
    title: "Vector và các phép toán cơ bản",
    formula: "u + v",
    summary: "Vector có thể hiểu là một mũi tên có hướng, có độ dài và hướng di chuyển.",
    video:"videos/VectorIntroVideo.mp4",
    content: `
      <p>Trong tính toán, vector thường được viết dưới dạng một cột hoặc một cặp số. Ví dụ v = (2,1) nghĩa là đi 2 đơn vị theo trục x và 1 đơn vị theo trục y.</p>
      <p>Các số trong vector gọi là thành phần của vector.</p>
      <p>Các phép toán cơ bản:</p>
      <ul>
        <li>Cộng vector: cộng từng thành phần tương ứng.</li>
        <li>Nhân vector với số: nhân từng thành phần với số đó.</li>
      </ul>
      <p>Về hình học:</p>
      <ul>
        <li>Cộng vector nghĩa là đi theo vector thứ nhất rồi đi tiếp theo vector thứ hai.</li>
        <li>Nhân với số dương làm vector dài hơn hoặc ngắn hơn nhưng giữ hướng.</li>
        <li>Nhân với số âm làm vector đổi hướng.</li>
        <li>Nhân với 0 tạo ra vector 0.</li>
      </ul>
      
    `,
    example: "Cho u=(1,2), v=(3,4). Tính u+v.",
    solution: "u+v=(1+3,2+4)=(4,6)."
  },
  {
    id: "linear-combination",
    topic: "Vector",
    category: "Chương 2: Vector và tổ hợp tuyến tính",
    title: "Tổ hợp tuyến tính",
    formula: "c₁v₁ + c₂v₂ + ... + cₙvₙ",
    summary: "Tổ hợp tuyến tính là cách tạo vector mới từ các vector đã có.",
    video:"videos/LinearCombinationPro.mp4",
    content: `
      <p>Cho các vector v₁, v₂, ..., vₙ và các số c₁, c₂, ..., cₙ.</p>
      <p>Các số c₁, c₂, ..., cₙ được gọi là hệ số hoặc trọng số.</p>
      <p>Nếu hệ số dương, ta đi cùng hướng vector. Nếu hệ số âm, ta đi ngược hướng vector. Nếu hệ số bằng 0, vector đó không đóng góp vào kết quả.</p>
      <p>Vector:</p>
      <div class="math-box">c₁v₁ + c₂v₂ + ... + cₙvₙ</div>
      <p>được gọi là một tổ hợp tuyến tính của các vector đã cho.</p>
      <p>Ý nghĩa: ta đi theo nhiều hướng khác nhau với các trọng số khác nhau để tạo ra một vector mới.</p>
    `,
    example: "Cho v=(3,1), w=(-1,2). Tính -2v+w.",
    solution: "-2v+w = -2(3,1)+(-1,2)=(-6,-2)+(-1,2)=(-7,0)."
  },
  {
    id: "matrix-vector",
    topic: "Ma trận",
    category: "Chương 2: Ma trận",
    title: "Phép nhân ma trận với vector",
    formula: "A · x",
    summary: "Tích Ax là tổ hợp tuyến tính của các cột của ma trận A.",
    video: "videos/MatrixVectorPro.mp4",
    content: `
      <p>Nếu A là ma trận m×n và x là vector có n thành phần thì Ax xác định.</p>
      <p>Kết quả Ax là một vector có m thành phần.</p>
      <p>Có thể hiểu Ax theo hai cách:</p>
      <ul>
        <li>Lấy từng hàng của A nhân với vector x.</li>
        <li>Lấy tổ hợp tuyến tính các cột của A, với trọng số là các thành phần của x.</li>
      </ul>
    `,
    example: "Cho A=[[1,2],[3,4]], x=(1,1). Tính Ax.",
    solution: "Ax=(1·1+2·1,3·1+4·1)=(3,7)."
  },
  {
    id: "matrix-matrix",
    topic: "Ma trận",
    category: "Chương 2: Ma trận",
    title: "Tích hai ma trận",
    formula: "A · B",
    summary: "Muốn nhân AB, số cột của A phải bằng số hàng của B.",
    content: `
      <p>Nếu A có kích thước m×n và B có kích thước n×p thì AB xác định.</p>
      <p>Kết quả AB có kích thước m×p.</p>
      <p>Các cột của AB là kết quả lấy A nhân lần lượt với từng cột của B.</p>
      <p>Lưu ý quan trọng: phép nhân ma trận thường không giao hoán, nghĩa là AB thường khác BA.</p>
    `,
    example: "Nếu A là 2×3 và B là 3×4 thì AB có kích thước bao nhiêu?",
    solution: "AB xác định và có kích thước 2×4."
  },
  {
    id: "span",
    topic: "Không gian vector",
    category: "Chương 2: Không gian sinh",
    title: "Không gian sinh",
    formula: "span(v₁, v₂, ..., vₙ)",
    summary: "Không gian sinh là tập tất cả vector tạo được từ tổ hợp tuyến tính.",
    content: `
      <p>Không gian sinh của một tập vector là tập hợp tất cả các tổ hợp tuyến tính có thể tạo ra từ tập vector đó.</p>
      <div class="math-box">span(v₁,v₂,...,vₙ)</div>
      <p>Nếu một vector b có thể viết dưới dạng:</p>
      <div class="math-box">b = c₁v₁ + c₂v₂ + ... + cₙvₙ</div>
      <p>thì b thuộc không gian sinh của các vector v₁, v₂, ..., vₙ.</p>
      <p>Trong R², hai vector không cùng phương thường sinh ra toàn bộ mặt phẳng R².</p>
    `,
    example: "Hai vector (1,0) và (0,1) sinh ra không gian nào?",
    solution: "Chúng sinh ra toàn bộ R² vì mọi vector (x,y) đều viết được là x(1,0)+y(0,1)."
  },
  {
    id: "linear-independence",
    topic: "Không gian vector",
    category: "Chương 2: Độc lập tuyến tính",
    title: "Độc lập tuyến tính và phụ thuộc tuyến tính",
    formula: "c₁v₁ + ... + cₙvₙ = 0",
    summary: "Một tập vector độc lập tuyến tính nếu không vector nào dư thừa.",
    content: `
      <p>Một tập vector phụ thuộc tuyến tính nếu có một vector viết được bằng tổ hợp tuyến tính của các vector còn lại.</p>
      <p>Một tập vector độc lập tuyến tính nếu phương trình:</p>
      <div class="math-box">c₁v₁ + c₂v₂ + ... + cₙvₙ = 0</div>
      <p>chỉ có nghiệm c₁=c₂=...=cₙ=0.</p>
      <p>Dùng ma trận: các cột độc lập tuyến tính khi mỗi cột đều có pivot.</p>
    `,
    example: "Hai vector (2,2) và (1,1) có độc lập tuyến tính không?",
    solution: "Không. Vì (2,2)=2(1,1), nên chúng phụ thuộc tuyến tính."
  },
  {
    id: "matrix-transform",
    topic: "Biến đổi hình học",
    category: "Chương 2: Phép biến đổi ma trận",
    title: "Hình học của phép biến đổi ma trận",
    formula: "T(x) = A · x",
    summary: "Ma trận có thể biểu diễn phép quay, phản xạ, co giãn và biến dạng hình học.",
    content: `
      <p>Một ma trận có thể xem như một hàm biến vector đầu vào thành vector đầu ra.</p>
      <div class="math-box">T(x) = Ax</div>
      <p>Các phép biến đổi thường gặp:</p>
      <ul>
        <li>Phản xạ qua trục hoành.</li>
        <li>Quay quanh gốc tọa độ.</li>
        <li>Co giãn theo phương ngang hoặc phương dọc.</li>
        <li>Biến dạng hình học.</li>
      </ul>
      <p>Ví dụ phản xạ qua trục hoành biến (x,y) thành (x,-y).</p>
    `,
    example: "Phản xạ vector (2,4) qua trục hoành được gì?",
    solution: "Kết quả là (2,-4)."
  },
  {
    id: "inverse",
    topic: "Ma trận",
    category: "Chương 3: Tính khả nghịch",
    title: "Ma trận khả nghịch",
    formula: "A⁻¹",
    summary: "Ma trận khả nghịch là ma trận có ma trận nghịch đảo.",
    content: `
      <p>Một ma trận vuông A được gọi là khả nghịch nếu tồn tại ma trận B sao cho:</p>
      <div class="math-box">AB = I và BA = I</div>
      <p>Khi đó B được gọi là ma trận nghịch đảo của A, ký hiệu là A⁻¹.</p>
      <p>Nếu A khả nghịch thì phương trình Ax=b có nghiệm duy nhất:</p>
      <div class="math-box">x = A⁻¹b</div>
      <p>Với ma trận 2×2, nếu định thức khác 0 thì ma trận khả nghịch.</p>
    `,
    example: "Nếu det(A) ≠ 0 thì A có khả nghịch không?",
    solution: "Có. Ma trận vuông có định thức khác 0 thì khả nghịch."
  },
  {
    id: "basis",
    topic: "Không gian vector",
    category: "Chương 3: Cơ sở",
    title: "Cơ sở của không gian vector",
    formula: "basis",
    summary: "Cơ sở là tập vector vừa sinh ra không gian vừa độc lập tuyến tính.",
    content: `
      <p>Một tập vector là cơ sở của một không gian vector nếu thỏa mãn hai điều kiện:</p>
      <ul>
        <li>Sinh ra toàn bộ không gian đó.</li>
        <li>Độc lập tuyến tính.</li>
      </ul>
      <p>Trong R², cơ sở chuẩn là:</p>
      <div class="math-box">e₁=(1,0), e₂=(0,1)</div>
      <p>Mọi vector (x,y) trong R² đều viết được duy nhất dưới dạng:</p>
      <div class="math-box">(x,y)=x(1,0)+y(0,1)</div>
    `,
    example: "(1,0) và (0,1) có là cơ sở của R² không?",
    solution: "Có. Chúng độc lập tuyến tính và sinh ra toàn bộ R²."
  },
  {
    id: "coordinates",
    topic: "Không gian vector",
    category: "Chương 3: Hệ tọa độ",
    title: "Hệ tọa độ theo cơ sở",
    formula: "[v]ᵦ",
    summary: "Một vector có thể được biểu diễn bằng tọa độ theo một cơ sở khác.",
    content: `
      <p>Khi chọn một cơ sở B, ta có thể biểu diễn vector v bằng các trọng số theo cơ sở đó.</p>
      <p>Nếu B gồm các vector b₁,b₂,...,bₙ thì:</p>
      <div class="math-box">v = c₁b₁ + c₂b₂ + ... + cₙbₙ</div>
      <p>Khi đó vector tọa độ của v theo cơ sở B là:</p>
      <div class="math-box">[v]ᵦ = (c₁,c₂,...,cₙ)</div>
    `,
    example: "Nếu v=3b₁-2b₂ thì tọa độ của v theo cơ sở B là gì?",
    solution: "Tọa độ là (3,-2)."
  },
  {
    id: "determinant",
    topic: "Định thức",
    category: "Chương 3: Định thức",
    title: "Định thức ma trận 2×2",
    formula: "det(A)=ad-bc",
    summary: "Định thức giúp nhận biết ma trận khả nghịch và liên quan đến diện tích.",
    content: `
      <p>Với ma trận 2×2:</p>
      <div class="math-box">A = [[a,b],[c,d]]</div>
      <p>Định thức được tính bằng:</p>
      <div class="math-box">det(A)=ad-bc</div>
      <p>Nếu det(A)=0 thì ma trận không khả nghịch.</p>
      <p>Nếu det(A)≠0 thì ma trận khả nghịch.</p>
      <p>Giá trị tuyệt đối của định thức 2×2 cũng bằng diện tích hình bình hành tạo bởi hai vector cột.</p>
    `,
    example: "Tính det([[1,2],[3,4]]).",
    solution: "det=1·4-2·3=4-6=-2."
  },
  {
    id: "eigen",
    topic: "Giá trị riêng",
    category: "Chương 4: Giá trị riêng và vector riêng",
    title: "Giá trị riêng và vector riêng",
    formula: "Av = λv",
    summary: "Vector riêng là vector không đổi hướng sau khi nhân với ma trận.",
    content: `
      <p>Cho ma trận vuông A. Vector khác 0 v được gọi là vector riêng của A nếu tồn tại số λ sao cho:</p>
      <div class="math-box">Av = λv</div>
      <p>Số λ được gọi là giá trị riêng tương ứng với vector riêng v.</p>
      <p>Ý nghĩa hình học: sau khi nhân với A, vector v chỉ bị kéo dài, co ngắn hoặc đổi hướng, nhưng vẫn nằm trên cùng một đường thẳng.</p>
    `,
    example: "Nếu Av=3v thì v là gì và 3 là gì?",
    solution: "v là vector riêng của A, còn 3 là giá trị riêng tương ứng."
  },
  {
    id: "diagonalization",
    topic: "Giá trị riêng",
    category: "Chương 4: Chéo hóa",
    title: "Chéo hóa ma trận",
    formula: "A = PDP⁻¹",
    summary: "Chéo hóa giúp tính lũy thừa ma trận dễ hơn.",
    content: `
      <p>Một ma trận A có thể chéo hóa nếu viết được dưới dạng:</p>
      <div class="math-box">A = PDP⁻¹</div>
      <p>Trong đó D là ma trận đường chéo chứa các giá trị riêng, còn P chứa các vector riêng.</p>
      <p>Khi đó:</p>
      <div class="math-box">Aⁿ = PDⁿP⁻¹</div>
      <p>Điều này giúp tính lũy thừa ma trận nhanh hơn rất nhiều.</p>
    `,
    example: "Vì sao chéo hóa hữu ích?",
    solution: "Vì tính Dⁿ rất dễ: chỉ cần nâng từng phần tử trên đường chéo lên lũy thừa n."
  },
  {
    id: "markov",
    topic: "Giá trị riêng",
    category: "Chương 4: Markov và PageRank",
    title: "Ma trận Markov và PageRank",
    formula: "Mx = x",
    summary: "Ma trận Markov mô tả quá trình chuyển trạng thái và có ứng dụng trong PageRank.",
    content: `
      <p>Ma trận Markov thường dùng để mô tả xác suất chuyển từ trạng thái này sang trạng thái khác.</p>
      <p>Một vector ổn định x thỏa mãn:</p>
      <div class="math-box">Mx = x</div>
      <p>Điều này nghĩa là sau khi áp dụng ma trận chuyển M, trạng thái không đổi.</p>
      <p>PageRank của Google có liên hệ với ý tưởng này: trang quan trọng là trang nhận được nhiều liên kết từ các trang quan trọng khác.</p>
    `,
    example: "Phương trình Mx=x có ý nghĩa gì?",
    solution: "Nó mô tả trạng thái ổn định của hệ."
  },
  {
    id: "numerical-gauss",
    topic: "Phương pháp số",
    category: "Chương 5: Phương pháp số",
    title: "Xem lại khử Gauss trên máy tính",
    formula: "floating point",
    summary: "Máy tính dùng số gần đúng nên cần cẩn thận khi tính toán.",
    content: `
      <p>Máy tính không luôn biểu diễn số thực một cách chính xác tuyệt đối.</p>
      <p>Ví dụ trong nhiều ngôn ngữ lập trình:</p>
      <div class="math-box">0.1 + 0.2 = 0.30000000000000004</div>
      <p>Vì vậy khi dùng khử Gauss trên máy tính, sai số có thể xuất hiện.</p>
      <p>Một kỹ thuật giúp ổn định hơn là chọn trụ từng phần: chọn pivot có giá trị tuyệt đối lớn hơn để giảm sai số.</p>
    `,
    example: "Vì sao 0.1+0.2 trên máy tính đôi khi không bằng đúng 0.3?",
    solution: "Vì máy tính biểu diễn số thập phân bằng hệ nhị phân và thường phải dùng xấp xỉ."
  },
  {
    id: "lu",
    topic: "Phương pháp số",
    category: "Chương 5: Phân tích LU",
    title: "Phân tích LU",
    formula: "A = LU",
    summary: "Phân tích LU giúp giải nhiều hệ có cùng ma trận hệ số nhanh hơn.",
    content: `
      <p>Phân tích LU viết ma trận A dưới dạng:</p>
      <div class="math-box">A = LU</div>
      <p>Trong đó L là ma trận tam giác dưới, U là ma trận tam giác trên.</p>
      <p>Nếu cần giải nhiều hệ Ax=b với cùng A nhưng khác b, ta chỉ cần phân tích A một lần.</p>
      <p>Sau đó giải lần lượt:</p>
      <div class="math-box">Ly=b, sau đó Ux=y</div>
    `,
    example: "Phân tích LU có lợi khi nào?",
    solution: "Khi cần giải nhiều hệ tuyến tính có cùng ma trận hệ số A."
  },
  {
    id: "orthogonal",
    topic: "Trực giao",
    category: "Chương 6: Trực giao",
    title: "Tích vô hướng và trực giao",
    formula: "u · v = 0",
    summary: "Hai vector trực giao khi tích vô hướng của chúng bằng 0.",
    content: `
      <p>Tích vô hướng giúp đo quan hệ góc giữa hai vector.</p>
      <p>Hai vector u và v trực giao nếu:</p>
      <div class="math-box">u · v = 0</div>
      <p>Trong R², điều này nghĩa là hai vector vuông góc.</p>
      <p>Ví dụ: u=(-1,2), v=(2,1). Khi đó u·v=(-1)·2+2·1=0, nên chúng trực giao.</p>
    `,
    example: "Vector (-1,2) và (2,1) có trực giao không?",
    solution: "Có. Vì (-1)·2 + 2·1 = -2+2 = 0."
  },
  {
    id: "orthogonal-complement",
    topic: "Trực giao",
    category: "Chương 6: Phần bù trực giao",
    title: "Phần bù trực giao",
    formula: "W⊥",
    summary: "Phần bù trực giao gồm các vector vuông góc với mọi vector trong một không gian con.",
    content: `
      <p>Cho một không gian con W của Rᵐ.</p>
      <p>Phần bù trực giao của W, ký hiệu W⊥, là tập tất cả các vector trực giao với mọi vector trong W.</p>
      <div class="math-box">W⊥ = {x | x·w = 0 với mọi w thuộc W}</div>
      <p>Nếu W là một đường thẳng qua gốc trong R² thì W⊥ là đường thẳng vuông góc với nó.</p>
    `,
    example: "Nếu W là trục Ox trong R² thì W⊥ là gì?",
    solution: "W⊥ là trục Oy."
  }
];

let QUESTION_BANK = [];
let DATA_READY = false;
let currentView = "home";
let currentTopic = "all";
let currentTest = null;
let currentTestSource = "normal";
let currentPracticeLessonId = null;
let currentPracticeLessonTitle = "";
let lastTestSetup = null;

const app = document.getElementById("app");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const menuBtn = document.getElementById("menuBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

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


async function fetchJson(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error("Không tải được file: " + path);
  }

  return await response.json();
}
function letterToIndex(letter) {
  const map = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4
  };

  return map[String(letter).trim().toUpperCase()] ?? 0;
}

function cleanOptionPrefix(option) {
  return String(option)
    .replace(/^[A-E]\.\s*/i, "")
    .trim();
}
function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim();
}

function normalizeTopic(topicOrSubtopic) {
  const raw = String(topicOrSubtopic || "").trim();
  const text = normalizeText(raw);

  if (text.includes("gauss") || text.includes("rref") || text.includes("he phuong trinh")) {
    return "Hệ phương trình";
  }

  if (text.includes("dinh thuc") || text.includes("determinant") || text.includes("det")) {
    return "Định thức";
  }

  if (text.includes("ma tran") || text.includes("matrix") || text.includes("tich ax") || text.includes("nhan ma tran")) {
    return "Ma trận";
  }

  if (text.includes("vector") || text.includes("vecto")) {
    return "Vector";
  }

  if (
    text.includes("khong gian") ||
    text.includes("span") ||
    text.includes("co so") ||
    text.includes("doc lap") ||
    text.includes("phu thuoc")
  ) {
    return "Không gian vector";
  }

  if (text.includes("bien doi") || text.includes("hinh hoc") || text.includes("transform")) {
    return "Biến đổi hình học";
  }

  if (text.includes("gia tri rieng") || text.includes("vector rieng") || text.includes("eigen")) {
    return "Giá trị riêng";
  }

  if (text.includes("phuong phap so") || text.includes("lu") || text.includes("floating")) {
    return "Phương pháp số";
  }

  if (text.includes("truc giao") || text.includes("orthogonal")) {
    return "Trực giao";
  }

  return raw;
}

function normalizeQuestion(q) {
  const type = String(q.type || "").toLowerCase();

  const rawSubtopic = q.subtopic || q.topic || "";
  const finalTopic = normalizeTopic(rawSubtopic || q.topic);

  if (type === "mcq") {
    return {
      id: q.id || "json_" + Math.random().toString(16).slice(2),
      type: "mcq",
      topic: finalTopic,
      subtopic: rawSubtopic,
      level: q.level || "medium",
      question: q.question || "",
      options: (q.options || []).map(cleanOptionPrefix),
      answer: typeof q.answer === "number" ? q.answer : letterToIndex(q.correct_answer),
      explain: q.explain || q.explanation || ""
    };
  }

  if (type === "fill") {
    return {
      id: q.id || "json_" + Math.random().toString(16).slice(2),
      type: "fill",
      topic: finalTopic,
      subtopic: rawSubtopic,
      level: q.level || "medium",
      question: q.question || "",
      answers: q.answers || [],
      explain: q.explain || q.explanation || ""
    };
  }

  return {
    id: q.id || "json_" + Math.random().toString(16).slice(2),
    type: "mcq",
    topic: finalTopic,
    subtopic: rawSubtopic,
    level: q.level || "medium",
    question: q.question || "",
    options: (q.options || []).map(cleanOptionPrefix),
    answer: typeof q.answer === "number" ? q.answer : letterToIndex(q.correct_answer),
    explain: q.explain || q.explanation || ""
  };
}
async function loadQuestionBank() {
  try {
    const manifest = await fetchJson("data/question-files.json");
    const files = manifest.files || [];

    const jsonFiles = await Promise.all(
      files.map((path) => fetchJson(path))
    );

    QUESTION_BANK = jsonFiles
      .flatMap((file) => {
        if (Array.isArray(file)) return file;
        return file.questions || [];
      })
      .map(normalizeQuestion);

    DATA_READY = true;

    console.log("Đã tải databank:", QUESTION_BANK.length, "câu hỏi");
    console.log(QUESTION_BANK);
  } catch (error) {
    console.error(error);

    DATA_READY = false;

    app.innerHTML = `
      <div class="panel">
        <h3>Không tải được databank JSON</h3>
        <p class="muted">
          Hãy kiểm tra file <b>data/question-files.json</b> và đường dẫn các file JSON con.
        </p>
      </div>
    `;
  }
}
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function simpleLatexText(text) {
  return String(text || "")
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "$1/$2")
    .replace(/\\left/g, "")
    .replace(/\\right/g, "")
    .replace(/\\,/g, " ")
    .replace(/\\;/g, " ")
    .replace(/\\ /g, " ")
    .trim();
}

function convertLatexArrayToBracketMatrix(text) {
  return String(text || "").replace(
    /\\left\s*\(\\begin\{array\}\{[^}]*\}([\s\S]*?)\\end\{array\}\\right\s*\)/g,
    function (match, body) {
      const rows = body
        .trim()
        .split(/\\\\/)
        .map((row) => row.trim())
        .filter(Boolean);

      const matrixRows = rows.map((row) => {
        const cells = row
          .split("&")
          .map((cell) => simpleLatexText(cell).trim());

        return `[${cells.join(",")}]`;
      });

      return `[${matrixRows.join(",")}]`;
    }
  );
}

function matrixTextToHtml(matrixText) {
  try {
    const rows = matrixText
      .replace(/^\[\[/, "")
      .replace(/\]\]$/, "")
      .split(/\],\s*\[/);

    const matrixData = rows.map((row) =>
      row
        .replace(/^\[/, "")
        .replace(/\]$/, "")
        .split(",")
        .map((x) => simpleLatexText(x).trim())
    );

    const colCount = Math.max(...matrixData.map((row) => row.length));
    const columns = Array(colCount).fill("auto").join(" ");

    let html = "";

    matrixData.forEach((row) => {
      row.forEach((cell) => {
        html += `<span>${escapeHtml(cell)}</span>`;
      });
    });

    return `
      <span class="math-matrix">
        <span class="math-matrix-grid" style="grid-template-columns:${columns};">
          ${html}
        </span>
      </span>
    `;
  } catch (error) {
    return escapeHtml(matrixText);
  }
}

function parseMathBeauty(text) {
  if (!text) return "";

  let result = String(text);

  result = convertLatexArrayToBracketMatrix(result);

  result = simpleLatexText(result);

  result = result.replace(/\[\[([\s\S]*?)\]\]/g, function (match) {
    return matrixTextToHtml(match);
  });

  return result;
}

function renderMath() {
  if (window.MathJax && window.MathJax.typesetPromise && app) {
    MathJax.typesetPromise([app]).catch((err) => console.error(err));
  }
}

function setActive(key) {
  document.querySelectorAll(".side-item").forEach((el) => {
    const value = el.dataset.view || el.dataset.topic;
    el.classList.toggle("active", value === key || value === currentTopic);
  });

  document.querySelectorAll(".chip").forEach((el) => {
    el.classList.toggle("active", el.dataset.view === key);
  });
}

function triggerViewAnimation() {
  if (!app) return;

  app.classList.remove("animate-fade-in");
  void app.offsetWidth;
  app.classList.add("animate-fade-in");
}

function showView(view) {
  currentView = view;
  setActive(view);
  renderSidebarFilters();
  triggerViewAnimation();

  if (window.innerWidth <= 768 && sidebar) {
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
    const ok = confirm("Quay lại sẽ hủy bài đang làm. Bạn chắc chắn?");

    if (!ok) return;

    currentTest = null;

    if (currentTestSource === "practice") {
      showView("practice");
    } else {
      showView("testSetup");
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

function getTopics() {
  return [...new Set(THEORY.map((item) => item.topic))];
}

function getTopicIcon(topic) {
  const icons = {
    "Hệ phương trình": "≡",
    "Vector": "➜",
    "Ma trận": "▦",
    "Định thức": "Δ",
    "Không gian vector": "◇",
    "Biến đổi hình học": "⧉",
    "Giá trị riêng": "λ",
    "Phương pháp số": "∑",
    "Trực giao": "⊥"
  };

  return icons[topic] || "📌";
}

function renderSidebarFilters() {
  const topicList = document.getElementById("topicList");

  if (!topicList) return;

  const topics = getTopics();

  topicList.innerHTML = `
    <div class="side-item filter-item ${currentTopic === "all" ? "active" : ""}" onclick="setTopic('all')">
      <div class="side-icon">📂</div>
      <div class="side-text">Tất cả chủ đề</div>
    </div>

    ${topics.map((topic) => `
      <div class="side-item filter-item ${currentTopic === topic ? "active" : ""}" onclick="setTopic('${topic}')">
        <div class="side-icon">${getTopicIcon(topic)}</div>
        <div class="side-text">${topic}</div>
      </div>
    `).join("")}
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

function renderHome() {
  const stats = scoreStats();

  app.innerHTML = `
    <section class="hero">
      <div>
        <h1>Đại số tuyến tính dễ học hơn bao giờ hết</h1>

        <p>
          Web học đại số tuyến tính với lý thuyết, ví dụ, luyện tập và kiểm tra.
          Nội dung được sắp xếp theo chương và chủ đề.
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
          <div style="font-size:13px; opacity:0.9;">
            Hệ phương trình, Vector, Ma trận, Định thức, Giá trị riêng...
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
        <div class="muted">Khám phá phương pháp học tập trực quan bằng hình học.</div>
      </div>
    </div>

    <section class="grid">
      ${featureCard(
        "📘",
        "Lý thuyết phân chia mục lục",
        "Bài học được chia theo chương, chủ đề, công thức, ví dụ và lời giải.",
        "#2563eb",
        "#06b6d4",
        "showView('theory')"
      )}

      ${featureCard(
        "📝",
        "Tạo bài kiểm tra",
        "Tạo đề kiểm tra theo số câu, độ khó, dạng câu hỏi và chủ đề.",
        "#8b5cf6",
        "#ec4899",
        "showView('testSetup')"
      )}

      ${featureCard(
        "✨",
        "Bài luyện tập",
        "Luyện tập theo từng bài lý thuyết và lưu điểm tự động.",
        "#581c87",
        "#1d4ed8",
        "showView('practice')"
      )}
    </section>
  `;
}

function filteredTheory() {
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
        <div class="muted">Chọn một bài lý thuyết bên dưới để xem nội dung chi tiết.</div>
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

  currentView = "theoryDetail";
  setActive("theory");

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
      <span class="badge" style="margin-left:6px;">${selected.topic}</span>

      <h2>${selected.title}</h2>

      <div class="math-box">${parseMathBeauty(selected.formula)}</div>

      <p class="muted" style="margin-bottom:20px;">${selected.summary}</p>

      ${selected.video ? `
        <div class="video-box">
          <div class="video-title">🎬 Video giải thích trực quan</div>

          <video controls preload="metadata">
            <source src="${selected.video}" type="video/mp4">
            Trình duyệt của bạn không hỗ trợ video.
          </video>
        </div>
      ` : ""}

      <h3 style="font-size:16px; font-weight:800; margin-top:20px; color:var(--dark);">
        Nội dung chính
      </h3>

      <div class="full-content">
        ${parseMathBeauty(selected.content)}
      </div>

      <div class="example-solution" style="margin-top:24px;">
        <h3 style="font-size:14px; color:var(--blue); font-weight:800;">📚 Bài toán ví dụ:</h3>

        <p style="font-size:14px; margin:6px 0 10px; line-height:1.6;">
          ${parseMathBeauty(selected.example)}
        </p>

        <div class="divider"></div>

        <h3 style="font-size:14px; color:var(--green); font-weight:800;">🔑 Lời giải:</h3>

        <p style="font-size:14px; margin:6px 0 0; line-height:1.6;">
          ${parseMathBeauty(selected.solution)}
        </p>
      </div>
    </div>
  `;
  renderMath();
}

function getLastPracticeRecord(lessonId) {
  return (
    getScores()
      .filter((item) => item.source === "practice" && item.practiceLessonId === lessonId)
      .sort((a, b) => String(b.id).localeCompare(String(a.id)))[0] || null
  );
}

function renderPractice() {
  app.innerHTML = `
    <div class="section-head">
      <div>
        <h2>✨ Bài luyện tập</h2>
        <div class="muted">
          Mỗi bài lý thuyết có một bài luyện tập tương ứng.
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
const PRACTICE_BANK = {
    "linear-system-concept": [
    {
      id: "practice_linear_system_1",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "easy",
      question: "Một hệ phương trình tuyến tính là gì?",
      options: [
        "Tập hợp nhiều phương trình tuyến tính dùng chung các ẩn",
        "Một phương trình chỉ có một nghiệm",
        "Một công thức tính diện tích",
        "Một phép nhân hai số"
      ],
      answer: 0,
      explain: "Hệ phương trình tuyến tính gồm nhiều phương trình tuyến tính có chung các ẩn."
    },
    {
      id: "practice_linear_system_2",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "easy",
      question: "Phương trình nào sau đây là phương trình tuyến tính?",
      options: [
        "x² + y = 3",
        "xy = 5",
        "2x - 3y = 7",
        "1/x + y = 2"
      ],
      answer: 2,
      explain: "Phương trình tuyến tính chỉ có biến bậc nhất, không có x², xy hoặc 1/x."
    },
    {
      id: "practice_linear_system_3",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "easy",
      question: "Hệ phương trình tuyến tính có thể có những khả năng nào về nghiệm?",
      options: [
        "Chỉ có đúng một nghiệm",
        "Chỉ vô nghiệm",
        "Có một nghiệm, vô số nghiệm hoặc vô nghiệm",
        "Luôn có vô số nghiệm"
      ],
      answer: 2,
      explain: "Một hệ tuyến tính có thể có nghiệm duy nhất, vô số nghiệm hoặc không có nghiệm."
    },
    {
      id: "practice_linear_system_4",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "easy",
      question: "Giải hệ x + y = 3 và x - y = 1. Nghiệm là gì?",
      options: [
        "(2,1)",
        "(1,2)",
        "(3,1)",
        "(0,3)"
      ],
      answer: 0,
      explain: "Cộng hai phương trình được 2x = 4 nên x = 2. Thay vào x + y = 3 được y = 1."
    },
    {
      id: "practice_linear_system_5",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Giải hệ x + 2y = 5 và 3x + 4y = 11. Nghiệm là gì?",
      options: [
        "(2,1)",
        "(1,2)",
        "(3,2)",
        "(1,1)"
      ],
      answer: 1,
      explain: "Từ x + 2y = 5 suy ra x = 5 - 2y. Thế vào phương trình hai được y = 2, x = 1."
    },
    {
      id: "practice_linear_system_6",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "easy",
      question: "Trong hình học, tập nghiệm của một phương trình tuyến tính hai ẩn thường là gì?",
      options: [
        "Một điểm",
        "Một đường thẳng",
        "Một hình tròn",
        "Một parabol"
      ],
      answer: 1,
      explain: "Một phương trình tuyến tính hai ẩn thường biểu diễn một đường thẳng."
    },
    {
      id: "practice_linear_system_7",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Nếu hai đường thẳng cắt nhau tại một điểm thì hệ hai phương trình hai ẩn có bao nhiêu nghiệm?",
      options: [
        "Vô nghiệm",
        "Vô số nghiệm",
        "Đúng một nghiệm",
        "Không xác định được"
      ],
      answer: 2,
      explain: "Hai đường thẳng cắt nhau tại một điểm thì hệ có đúng một nghiệm."
    },
    {
      id: "practice_linear_system_8",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Nếu hai đường thẳng song song và khác nhau thì hệ phương trình có bao nhiêu nghiệm?",
      options: [
        "Đúng một nghiệm",
        "Vô số nghiệm",
        "Vô nghiệm",
        "Luôn có hai nghiệm"
      ],
      answer: 2,
      explain: "Hai đường thẳng song song khác nhau không cắt nhau nên hệ vô nghiệm."
    },
    {
      id: "practice_linear_system_9",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Nếu hai phương trình biểu diễn cùng một đường thẳng thì hệ có bao nhiêu nghiệm?",
      options: [
        "Vô số nghiệm",
        "Vô nghiệm",
        "Đúng một nghiệm",
        "Chỉ có nghiệm (0,0)"
      ],
      answer: 0,
      explain: "Nếu hai phương trình là cùng một đường thẳng thì mọi điểm trên đường thẳng đều là nghiệm."
    },
    {
      id: "practice_linear_system_10",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Hệ nào sau đây là hệ phương trình tuyến tính?",
      options: [
        "x² + y = 1 và x - y = 2",
        "xy = 3 và x + y = 1",
        "2x + y = 4 và x - 3y = 5",
        "1/x + y = 2 và x + y = 3"
      ],
      answer: 2,
      explain: "Cả hai phương trình 2x + y = 4 và x - 3y = 5 đều là phương trình tuyến tính."
    }
  ],

  "gauss": [
    {
      id: "practice_gauss_1",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "easy",
      question: "Khử Gauss chủ yếu sử dụng phép biến đổi nào?",
      options: [
        "Phép biến đổi hàng",
        "Phép biến đổi cột",
        "Tính đạo hàm",
        "Tính xác suất"
      ],
      answer: 0,
      explain: "Khử Gauss dùng các phép biến đổi hàng sơ cấp để đưa hệ về dạng dễ giải hơn."
    },
    {
      id: "practice_gauss_2",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "easy",
      question: "Ma trận mở rộng của hệ Ax = b thường được viết dưới dạng nào?",
      options: [
        "[A | b]",
        "[b | A]",
        "A + b",
        "A - b"
      ],
      answer: 0,
      explain: "Ma trận mở rộng ghép ma trận hệ số A với cột vế phải b."
    },
    {
      id: "practice_gauss_3",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "easy",
      question: "Phép nào sau đây là phép biến đổi hàng sơ cấp?",
      options: [
        "Đổi chỗ hai hàng",
        "Đổi chỗ hai cột bất kỳ",
        "Xóa một biến khỏi hệ",
        "Bình phương cả hai vế"
      ],
      answer: 0,
      explain: "Một phép biến đổi hàng sơ cấp là đổi chỗ hai hàng."
    },
    {
      id: "practice_gauss_4",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "easy",
      question: "Phép nào sau đây cũng là phép biến đổi hàng sơ cấp?",
      options: [
        "Nhân một hàng với số khác 0",
        "Nhân một hàng với 0",
        "Xóa toàn bộ một hàng",
        "Đổi dấu tùy ý một biến"
      ],
      answer: 0,
      explain: "Ta được phép nhân một hàng với một số khác 0. Không được nhân với 0 vì sẽ làm mất thông tin."
    },
    {
      id: "practice_gauss_5",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Với ma trận mở rộng [[1,2,4],[2,1,5]], nếu lấy R2 = R2 - 2R1 thì hàng 2 mới là gì?",
      options: [
        "[0,-3,-3]",
        "[0,3,3]",
        "[1,0,1]",
        "[2,1,5]"
      ],
      answer: 0,
      explain: "R2 - 2R1 = [2,1,5] - 2[1,2,4] = [0,-3,-3]."
    },
    {
      id: "practice_gauss_6",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Sau khi biến đổi [[1,2,4],[2,1,5]] thành [[1,2,4],[0,-3,-3]], ta suy ra y bằng bao nhiêu?",
      options: [
        "1",
        "-1",
        "2",
        "3"
      ],
      answer: 0,
      explain: "Hàng 2 biểu diễn -3y = -3, nên y = 1."
    },
    {
      id: "practice_gauss_7",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Từ hệ x + 2y = 4 và 2x + y = 5, nghiệm của hệ là gì?",
      options: [
        "(2,1)",
        "(1,2)",
        "(3,1)",
        "(1,1)"
      ],
      answer: 0,
      explain: "Sau khi khử được y = 1. Thay vào x + 2y = 4 được x = 2."
    },
    {
      id: "practice_gauss_8",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Mục tiêu chính của khử Gauss là gì?",
      options: [
        "Đưa ma trận về dạng dễ đọc nghiệm hơn",
        "Làm cho tất cả số trong ma trận bằng 0",
        "Tính diện tích hình tròn",
        "Đổi hệ phương trình thành bài xác suất"
      ],
      answer: 0,
      explain: "Khử Gauss giúp đưa ma trận về dạng bậc thang hoặc dạng dễ giải hơn."
    },
    {
      id: "practice_gauss_9",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Khi thực hiện phép R2 = R2 - 2R1, mục đích thường là gì?",
      options: [
        "Khử hệ số dưới pivot",
        "Đổi số cột của ma trận",
        "Làm mất nghiệm của hệ",
        "Biến ma trận thành vector"
      ],
      answer: 0,
      explain: "Trong khử Gauss, ta thường dùng hàng pivot để tạo số 0 ở các vị trí bên dưới pivot."
    },
    {
      id: "practice_gauss_10",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Vì sao các phép biến đổi hàng sơ cấp được dùng khi giải hệ phương trình?",
      options: [
        "Vì chúng không làm thay đổi tập nghiệm của hệ",
        "Vì chúng luôn làm hệ vô nghiệm",
        "Vì chúng xóa hết các biến",
        "Vì chúng chỉ dùng để trang trí ma trận"
      ],
      answer: 0,
      explain: "Các phép biến đổi hàng sơ cấp tạo ra hệ tương đương, tức là có cùng tập nghiệm với hệ ban đầu."
    }
  ],

  "rref": [
    {
      id: "practice_rref_1",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "easy",
      question: "Trong RREF, phần tử khác 0 đầu tiên của mỗi hàng khác 0 phải là gì?",
      options: [
        "1",
        "0",
        "-1",
        "Bất kỳ số nào"
      ],
      answer: 0,
      explain: "Trong dạng bậc thang rút gọn, phần tử khác 0 đầu tiên của mỗi hàng phải là 1. Số 1 này gọi là pivot."
    },
    {
      id: "practice_rref_2",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "easy",
      question: "Pivot trong ma trận RREF là gì?",
      options: [
        "Số 1 dẫn đầu của một hàng khác 0",
        "Số 0 cuối cùng của mỗi hàng",
        "Một số bất kỳ trong ma trận",
        "Cột vế phải của hệ"
      ],
      answer: 0,
      explain: "Pivot là số 1 dẫn đầu trong một hàng khác 0."
    },
    {
      id: "practice_rref_3",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "easy",
      question: "Trong RREF, các hàng toàn số 0 phải nằm ở đâu?",
      options: [
        "Dưới cùng",
        "Trên cùng",
        "Ở giữa",
        "Ở cột cuối"
      ],
      answer: 0,
      explain: "Trong dạng bậc thang, các hàng toàn số 0 nằm dưới cùng."
    },
    {
      id: "practice_rref_4",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Nếu một hệ có 3 biến nhưng chỉ có 2 pivot thì thường có điều gì?",
      options: [
        "Một biến tự do",
        "Không có biến nào",
        "Luôn vô nghiệm",
        "Luôn có nghiệm duy nhất"
      ],
      answer: 0,
      explain: "Có 3 biến nhưng chỉ có 2 pivot nên còn 1 biến không có pivot. Biến đó là biến tự do."
    },
    {
      id: "practice_rref_5",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Biến tự do thường làm hệ có dạng nghiệm nào?",
      options: [
        "Vô số nghiệm",
        "Luôn vô nghiệm",
        "Luôn có nghiệm duy nhất",
        "Không có nghiệm nào"
      ],
      answer: 0,
      explain: "Khi có biến tự do, ta có thể chọn nhiều giá trị cho biến đó, nên hệ thường có vô số nghiệm."
    },
    {
      id: "practice_rref_6",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Hàng [0,0,0,1] trong ma trận mở rộng biểu diễn điều gì?",
      options: [
        "0 = 1, hệ vô nghiệm",
        "Hệ có nghiệm duy nhất",
        "Hệ có vô số nghiệm",
        "Biến đầu tiên bằng 1"
      ],
      answer: 0,
      explain: "Hàng [0,0,0,1] nghĩa là 0x + 0y + 0z = 1, tức là 0 = 1. Điều này vô lý nên hệ vô nghiệm."
    },
    {
      id: "practice_rref_7",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Ma trận [[1,0,2,3],[0,1,-1,0],[0,0,0,0]] có bao nhiêu pivot?",
      options: [
        "2",
        "1",
        "3",
        "0"
      ],
      answer: 0,
      explain: "Có pivot ở cột 1 và cột 2, nên ma trận có 2 pivot."
    },
    {
      id: "practice_rref_8",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Ma trận [[1,0,2,3],[0,1,-1,0],[0,0,0,0]] có 3 biến và 2 pivot. Kết luận nào đúng?",
      options: [
        "Hệ có một biến tự do và vô số nghiệm",
        "Hệ vô nghiệm",
        "Hệ có nghiệm duy nhất",
        "Hệ không phải hệ tuyến tính"
      ],
      answer: 0,
      explain: "Có 3 biến nhưng chỉ có 2 pivot nên có 1 biến tự do. Vì không có hàng mâu thuẫn nên hệ có vô số nghiệm."
    },
    {
      id: "practice_rref_9",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Ma trận [[1,0,0,2],[0,1,0,3],[0,0,1,-1]] cho biết nghiệm của hệ là gì?",
      options: [
        "x=2, y=3, z=-1",
        "x=3, y=2, z=-1",
        "x=2, y=-1, z=3",
        "Hệ vô nghiệm"
      ],
      answer: 0,
      explain: "Mỗi biến đều có pivot nên đọc trực tiếp được x=2, y=3, z=-1."
    },
    {
      id: "practice_rref_10",
      type: "mcq",
      topic: "Hệ phương trình",
      level: "medium",
      question: "Mục đích chính của RREF là gì?",
      options: [
        "Giúp đọc nghiệm của hệ dễ hơn",
        "Làm cho mọi hệ đều vô nghiệm",
        "Xóa toàn bộ ma trận",
        "Đổi hệ phương trình thành hình tròn"
      ],
      answer: 0,
      explain: "RREF giúp ta đọc nghiệm, nhận biết biến tự do, nghiệm duy nhất, vô số nghiệm hoặc vô nghiệm."
    }
  ],

"vectors": [
  {
    id: "practice_vectors_1",
    type: "mcq",
    topic: "Vector",
    level: "easy",
    question: "Cho u=(1,2), v=(3,4). Tính u+v.",
    options: [
      "(4,6)",
      "(3,8)",
      "(2,2)",
      "(1,4)"
    ],
    answer: 0,
    explain: "Cộng vector theo từng thành phần: u+v=(1+3,2+4)=(4,6)."
  },
  {
    id: "practice_vectors_2",
    type: "mcq",
    topic: "Vector",
    level: "easy",
    question: "Cho v=(2,-3). Tính 2v.",
    options: [
      "(4,-6)",
      "(2,-6)",
      "(4,-3)",
      "(-4,6)"
    ],
    answer: 0,
    explain: "Nhân vector với 2 nghĩa là nhân từng thành phần với 2: 2v=(4,-6)."
  },
  {
    id: "practice_vectors_3",
    type: "mcq",
    topic: "Vector",
    level: "easy",
    question: "Nhân vector với số âm sẽ làm vector như thế nào?",
    options: [
      "Đổi hướng",
      "Luôn thành vector 0",
      "Không đổi",
      "Biến thành ma trận"
    ],
    answer: 0,
    explain: "Nhân vector với số âm làm vector đổi hướng."
  },
  {
    id: "practice_vectors_4",
    type: "mcq",
    topic: "Vector",
    level: "easy",
    question: "Vector (2,1) có ý nghĩa hình học gần đúng là gì?",
    options: [
      "Đi 2 đơn vị theo trục x và 1 đơn vị theo trục y",
      "Đi 1 đơn vị theo trục x và 2 đơn vị theo trục y",
      "Chỉ là một số bình thường",
      "Một phương trình tuyến tính"
    ],
    answer: 0,
    explain: "Vector (2,1) có thành phần x là 2 và thành phần y là 1."
  },
  {
    id: "practice_vectors_5",
    type: "mcq",
    topic: "Vector",
    level: "easy",
    question: "Cho u=(5,2), v=(1,3). Tính u-v.",
    options: [
      "(4,-1)",
      "(6,5)",
      "(4,1)",
      "(5,6)"
    ],
    answer: 0,
    explain: "Trừ vector theo từng thành phần: u-v=(5-1,2-3)=(4,-1)."
  },
  {
    id: "practice_vectors_6",
    type: "mcq",
    topic: "Vector",
    level: "medium",
    question: "Cho v=(3,-1). Tính -v.",
    options: [
      "(-3,1)",
      "(3,1)",
      "(-3,-1)",
      "(0,0)"
    ],
    answer: 0,
    explain: "-v nghĩa là nhân v với -1, nên -v=(-3,1)."
  },
  {
    id: "practice_vectors_7",
    type: "mcq",
    topic: "Vector",
    level: "medium",
    question: "Cho u=(1,2), v=(3,-1). Tính 2u+v.",
    options: [
      "(5,3)",
      "(4,1)",
      "(2,4)",
      "(7,1)"
    ],
    answer: 0,
    explain: "2u=(2,4). Sau đó 2u+v=(2+3,4+(-1))=(5,3)."
  },
  {
    id: "practice_vectors_8",
    type: "mcq",
    topic: "Vector",
    level: "medium",
    question: "Vector 0 trong mặt phẳng thường được viết là gì?",
    options: [
      "(0,0)",
      "(1,0)",
      "(0,1)",
      "(1,1)"
    ],
    answer: 0,
    explain: "Vector 0 không di chuyển theo hướng nào, nên trong R² nó là (0,0)."
  },
  {
    id: "practice_vectors_9",
    type: "mcq",
    topic: "Vector",
    level: "medium",
    question: "Nếu nhân vector v với 0 thì kết quả là gì?",
    options: [
      "Vector 0",
      "Vector v",
      "Vector đổi hướng",
      "Một ma trận vuông"
    ],
    answer: 0,
    explain: "0v luôn bằng vector 0."
  },
  {
    id: "practice_vectors_10",
    type: "mcq",
    topic: "Vector",
    level: "medium",
    question: "Về hình học, cộng u+v có thể hiểu như thế nào?",
    options: [
      "Đi theo u rồi đi tiếp theo v",
      "Xóa cả hai vector",
      "Chỉ đổi hướng vector u",
      "Biến vector thành hệ phương trình"
    ],
    answer: 0,
    explain: "Cộng vector có thể hiểu là đi theo vector thứ nhất rồi đi tiếp theo vector thứ hai."
  }
],
  "linear-combination": [
  {
    id: "practice_linear_combination_1",
    type: "mcq",
    topic: "Vector",
    level: "easy",
    question: "Tổ hợp tuyến tính thường có dạng nào?",
    options: [
      "c₁v₁ + c₂v₂ + ... + cₙvₙ",
      "v₁ / v₂",
      "v₁ = v₂",
      "det(A)"
    ],
    answer: 0,
    explain: "Tổ hợp tuyến tính là tổng của các vector nhân với các hệ số."
  },
  {
    id: "practice_linear_combination_2",
    type: "mcq",
    topic: "Vector",
    level: "easy",
    question: "Trong biểu thức 2v - 3w, các hệ số của v và w lần lượt là gì?",
    options: [
      "2 và -3",
      "-3 và 2",
      "2 và 3",
      "và w"
    ],
    answer: 0,
    explain: "Trong 2v - 3w, vector v có hệ số 2, vector w có hệ số -3."
  },
  {
    id: "practice_linear_combination_3",
    type: "mcq",
    topic: "Vector",
    level: "medium",
    question: "Cho v=(1,2), w=(3,0). Tính 2v+w.",
    options: [
      "(5,4)",
      "(2,4)",
      "(4,2)",
      "(3,2)"
    ],
    answer: 0,
    explain: "2v=(2,4). Sau đó 2v+w=(2,4)+(3,0)=(5,4)."
  },
  {
    id: "practice_linear_combination_4",
    type: "mcq",
    topic: "Vector",
    level: "medium",
    question: "Cho v=(3,1), w=(-1,2). Tính -2v+w.",
    options: [
      "(-7,0)",
      "(7,0)",
      "(-5,4)",
      "(-6,2)"
    ],
    answer: 0,
    explain: "-2v=(-6,-2). Sau đó -2v+w=(-6,-2)+(-1,2)=(-7,0)."
  },
  {
    id: "practice_linear_combination_5",
    type: "mcq",
    topic: "Vector",
    level: "easy",
    question: "Vector b thuộc span(v₁,v₂) khi nào?",
    options: [
      "Khi b viết được dưới dạng c₁v₁+c₂v₂",
      "Khi b luôn bằng 0",
      "Khi b vuông góc với v₁",
      "Khi b là ma trận vuông"
    ],
    answer: 0,
    explain: "b thuộc span(v₁,v₂) nếu b có thể tạo ra từ tổ hợp tuyến tính của v₁ và v₂."
  },
  {
    id: "practice_linear_combination_6",
    type: "mcq",
    topic: "Vector",
    level: "medium",
    question: "Cho v=(1,0), w=(0,1). Tính 3v-2w.",
    options: [
      "(3,-2)",
      "(3,2)",
      "(-3,2)",
      "(1,1)"
    ],
    answer: 0,
    explain: "3v=(3,0), -2w=(0,-2), nên 3v-2w=(3,-2)."
  },
  {
    id: "practice_linear_combination_7",
    type: "mcq",
    topic: "Vector",
    level: "easy",
    question: "Nếu hệ số của một vector là số âm thì về hình học điều gì xảy ra?",
    options: [
      "Vector đổi hướng",
      "Vector biến thành ma trận",
      "Vector luôn bằng 0",
      "Vector không thay đổi"
    ],
    answer: 0,
    explain: "Nhân vector với số âm làm vector đổi hướng."
  },
  {
    id: "practice_linear_combination_8",
    type: "mcq",
    topic: "Vector",
    level: "easy",
    question: "Biểu thức nào sau đây là một tổ hợp tuyến tính của v và w?",
    options: [
      "5v - 2w",
      "v / w",
      "det(v)",
      "v = w"
    ],
    answer: 0,
    explain: "5v - 2w là tổ hợp tuyến tính vì nó có dạng hệ số nhân vector rồi cộng lại."
  },
  {
    id: "practice_linear_combination_9",
    type: "mcq",
    topic: "Vector",
    level: "medium",
    question: "Cho v=(1,0), w=(0,1), b=(4,5). Ta có b bằng tổ hợp nào?",
    options: [
      "4v + 5w",
      "5v + 4w",
      "4v - 5w",
      "v + w"
    ],
    answer: 0,
    explain: "4v+5w=4(1,0)+5(0,1)=(4,0)+(0,5)=(4,5)."
  },
  {
    id: "practice_linear_combination_10",
    type: "mcq",
    topic: "Vector",
    level: "medium",
    question: "Cho v=(2,1), w=(4,2). Vector w có viết được bằng tổ hợp tuyến tính của v không?",
    options: [
      "Có, vì w=2v",
      "Không, vì w khác v",
      "Không, vì w có hai thành phần",
      "Có, vì mọi vector đều bằng 0"
    ],
    answer: 0,
    explain: "Vì 2v=2(2,1)=(4,2)=w, nên w là một tổ hợp tuyến tính của v."
  }
],

  "matrix-vector": [
  {
    id: "practice_matrix_vector_1",
    type: "mcq",
    topic: "Ma trận",
    level: "easy",
    question: "Cho A=[[1,2],[3,4]], x=(1,1). Tính Ax.",
    options: [
      "(3,7)",
      "(1,3)",
      "(2,4)",
      "(4,6)"
    ],
    answer: 0,
    explain: "Ax=(1·1+2·1, 3·1+4·1)=(3,7)."
  },
  {
    id: "practice_matrix_vector_2",
    type: "mcq",
    topic: "Ma trận",
    level: "easy",
    question: "Nếu A là ma trận 3×2 và x có 2 thành phần thì Ax có mấy thành phần?",
    options: [
      "3",
      "2",
      "5",
      "6"
    ],
    answer: 0,
    explain: "Ma trận 3×2 nhân với vector có 2 thành phần sẽ cho kết quả là vector có 3 thành phần."
  },
  {
    id: "practice_matrix_vector_3",
    type: "mcq",
    topic: "Ma trận",
    level: "medium",
    question: "Tích Ax có thể hiểu là gì?",
    options: [
      "Tổ hợp tuyến tính của các cột của A",
      "Tổng các hàng của A",
      "Định thức của A",
      "Nghịch đảo của A"
    ],
    answer: 0,
    explain: "Nếu các thành phần của x là trọng số, thì Ax là tổ hợp tuyến tính của các cột trong A."
  },
  {
    id: "practice_matrix_vector_4",
    type: "mcq",
    topic: "Ma trận",
    level: "easy",
    question: "Cho A=[[2,0],[0,3]], x=(4,5). Tính Ax.",
    options: [
      "(8,15)",
      "(6,8)",
      "(4,5)",
      "(2,3)"
    ],
    answer: 0,
    explain: "Ax=(2·4+0·5, 0·4+3·5)=(8,15)."
  },
  {
    id: "practice_matrix_vector_5",
    type: "mcq",
    topic: "Ma trận",
    level: "medium",
    question: "Cho A=[[1,3],[2,4]], x=(2,1). Tính Ax.",
    options: [
      "(5,8)",
      "(4,6)",
      "(3,7)",
      "(8,5)"
    ],
    answer: 0,
    explain: "Ax=(1·2+3·1, 2·2+4·1)=(5,8)."
  },
  {
    id: "practice_matrix_vector_6",
    type: "mcq",
    topic: "Ma trận",
    level: "easy",
    question: "Muốn nhân Ax, số cột của A phải bằng gì?",
    options: [
      "Số thành phần của vector x",
      "Số hàng của A",
      "Số dòng của kết quả",
      "Định thức của A"
    ],
    answer: 0,
    explain: "Nếu A là ma trận m×n thì x phải có n thành phần để Ax xác định."
  },
  {
    id: "practice_matrix_vector_7",
    type: "mcq",
    topic: "Ma trận",
    level: "medium",
    question: "Cho A có các cột a₁=(1,3), a₂=(2,4), và x=(5,6). Ax bằng gì?",
    options: [
      "5a₁ + 6a₂",
      "6a₁ + 5a₂",
      "a₁ + a₂",
      "5a₁ - 6a₂"
    ],
    answer: 0,
    explain: "Các thành phần của x là trọng số cho các cột của A, nên Ax=5a₁+6a₂."
  },
  {
    id: "practice_matrix_vector_8",
    type: "mcq",
    topic: "Ma trận",
    level: "medium",
    question: "Cho A=[[1,0],[0,1]], x=(7,-2). Tính Ax.",
    options: [
      "(7,-2)",
      "(-2,7)",
      "(0,0)",
      "(1,1)"
    ],
    answer: 0,
    explain: "A là ma trận đơn vị nên Ax=x=(7,-2)."
  },
  {
    id: "practice_matrix_vector_9",
    type: "mcq",
    topic: "Ma trận",
    level: "medium",
    question: "Cho A=[[1,2,3],[4,5,6]], x=(1,0,1). Tính Ax.",
    options: [
      "(4,10)",
      "(3,9)",
      "(1,4)",
      "(6,15)"
    ],
    answer: 0,
    explain: "Ax=(1·1+2·0+3·1, 4·1+5·0+6·1)=(4,10)."
  },
  {
    id: "practice_matrix_vector_10",
    type: "mcq",
    topic: "Ma trận",
    level: "medium",
    question: "Nếu A là ma trận 2×3 và x=(x₁,x₂,x₃), thì Ax là tổ hợp tuyến tính của gì?",
    options: [
      "3 cột của A",
      "2 hàng của A",
      "Các đường chéo của A",
      "Định thức của A"
    ],
    answer: 0,
    explain: "A có 3 cột, nên Ax=x₁a₁+x₂a₂+x₃a₃, là tổ hợp tuyến tính của 3 cột của A."
  }
],

  "matrix-matrix": [
    {
      id: "practice_matrix_matrix_1",
      type: "mcq",
      topic: "Ma trận",
      level: "easy",
      question: "Nếu A là 2×3 và B là 3×4 thì AB có kích thước nào?",
      options: [
        "2×4",
        "3×3",
        "4×2",
        "2×3"
      ],
      answer: 0,
      explain: "Kết quả AB có số hàng của A và số cột của B, nên là 2×4."
    },
    {
      id: "practice_matrix_matrix_2",
      type: "mcq",
      topic: "Ma trận",
      level: "easy",
      question: "Muốn nhân AB, điều kiện nào phải đúng?",
      options: [
        "Số cột của A bằng số hàng của B",
        "Số hàng của A bằng số hàng của B",
        "A và B phải giống hệt nhau",
        "A phải là vector"
      ],
      answer: 0,
      explain: "Phép nhân AB xác định khi số cột của A bằng số hàng của B."
    },
    {
      id: "practice_matrix_matrix_3",
      type: "mcq",
      topic: "Ma trận",
      level: "medium",
      question: "Phép nhân ma trận thường có tính chất nào?",
      options: [
        "Không giao hoán",
        "Luôn giao hoán",
        "Luôn bằng 0",
        "Không cần điều kiện kích thước"
      ],
      answer: 0,
      explain: "Thông thường AB khác BA."
    }
  ],

  "span": [
    {
      id: "practice_span_1",
      type: "mcq",
      topic: "Không gian vector",
      level: "easy",
      question: "span(v1,v2) là gì?",
      options: [
        "Tập tất cả tổ hợp tuyến tính của v1 và v2",
        "Tích vô hướng của v1 và v2",
        "Định thức của v1 và v2",
        "Một số thực"
      ],
      answer: 0,
      explain: "Không gian sinh là tập tất cả vector tạo được từ tổ hợp tuyến tính."
    },
    {
      id: "practice_span_2",
      type: "mcq",
      topic: "Không gian vector",
      level: "easy",
      question: "Hai vector (1,0) và (0,1) sinh ra không gian nào?",
      options: [
        "R²",
        "R³",
        "Chỉ trục Ox",
        "Chỉ vector 0"
      ],
      answer: 0,
      explain: "Mọi vector (x,y) đều viết được là x(1,0)+y(0,1)."
    },
    {
      id: "practice_span_3",
      type: "mcq",
      topic: "Không gian vector",
      level: "medium",
      question: "Vector (3,5) có thuộc span((1,0),(0,1)) không?",
      options: [
        "Có",
        "Không",
        "Chỉ khi x=0",
        "Chỉ khi y=0"
      ],
      answer: 0,
      explain: "(3,5)=3(1,0)+5(0,1), nên thuộc span."
    }
  ],

  "linear-independence": [
    {
      id: "practice_linear_independence_1",
      type: "mcq",
      topic: "Không gian vector",
      level: "easy",
      question: "Hai vector (2,2) và (1,1) có độc lập tuyến tính không?",
      options: [
        "Không",
        "Có",
        "Không xác định được",
        "Chỉ độc lập trong R³"
      ],
      answer: 0,
      explain: "(2,2)=2(1,1), nên hai vector phụ thuộc tuyến tính."
    },
    {
      id: "practice_linear_independence_2",
      type: "mcq",
      topic: "Không gian vector",
      level: "easy",
      question: "Một tập vector độc lập tuyến tính khi phương trình c1v1+...+cnvn=0 có nghiệm nào?",
      options: [
        "Chỉ nghiệm c1=c2=...=cn=0",
        "Luôn có vô số nghiệm",
        "Luôn vô nghiệm",
        "Chỉ nghiệm âm"
      ],
      answer: 0,
      explain: "Độc lập tuyến tính nghĩa là chỉ có nghiệm tầm thường."
    },
    {
      id: "practice_linear_independence_3",
      type: "mcq",
      topic: "Không gian vector",
      level: "medium",
      question: "Nếu một vector viết được bằng tổ hợp tuyến tính của các vector còn lại thì tập đó như thế nào?",
      options: [
        "Phụ thuộc tuyến tính",
        "Độc lập tuyến tính",
        "Là cơ sở chuẩn",
        "Là ma trận khả nghịch"
      ],
      answer: 0,
      explain: "Khi có vector dư thừa, tập vector phụ thuộc tuyến tính."
    }
  ],

  "matrix-transform": [
    {
      id: "practice_matrix_transform_1",
      type: "mcq",
      topic: "Biến đổi hình học",
      level: "easy",
      question: "Ma trận có thể biểu diễn điều gì trong hình học?",
      options: [
        "Phép biến đổi vector",
        "Một bài văn",
        "Một xác suất",
        "Một biến cố"
      ],
      answer: 0,
      explain: "Ma trận có thể biểu diễn các phép biến đổi như quay, phản xạ, co giãn."
    },
    {
      id: "practice_matrix_transform_2",
      type: "mcq",
      topic: "Biến đổi hình học",
      level: "easy",
      question: "Phản xạ điểm (2,4) qua trục hoành được điểm nào?",
      options: [
        "(2,-4)",
        "(-2,4)",
        "(-2,-4)",
        "(4,2)"
      ],
      answer: 0,
      explain: "Phản xạ qua trục hoành biến (x,y) thành (x,-y)."
    },
    {
      id: "practice_matrix_transform_3",
      type: "mcq",
      topic: "Biến đổi hình học",
      level: "medium",
      question: "Công thức T(x)=Ax nghĩa là gì?",
      options: [
        "Ma trận A biến vector x thành vector mới",
        "A là định thức",
        "x là số nguyên tố",
        "T luôn bằng 0"
      ],
      answer: 0,
      explain: "T là phép biến đổi tuyến tính được biểu diễn bởi ma trận A."
    }
  ],

  "inverse": [
    {
      id: "practice_inverse_1",
      type: "mcq",
      topic: "Ma trận",
      level: "easy",
      question: "Ma trận khả nghịch là ma trận có gì?",
      options: [
        "Ma trận nghịch đảo",
        "Chỉ toàn số 0",
        "Không có định thức",
        "Không nhân được với ma trận khác"
      ],
      answer: 0,
      explain: "Ma trận khả nghịch là ma trận có ma trận nghịch đảo."
    },
    {
      id: "practice_inverse_2",
      type: "mcq",
      topic: "Ma trận",
      level: "easy",
      question: "Nếu A khả nghịch thì AA⁻¹ bằng gì?",
      options: [
        "I",
        "0",
        "A",
        "A²"
      ],
      answer: 0,
      explain: "Theo định nghĩa, AA⁻¹ = I."
    },
    {
      id: "practice_inverse_3",
      type: "mcq",
      topic: "Ma trận",
      level: "medium",
      question: "Với ma trận vuông 2×2, nếu det(A) khác 0 thì A như thế nào?",
      options: [
        "Khả nghịch",
        "Không khả nghịch",
        "Luôn bằng I",
        "Không phải ma trận"
      ],
      answer: 0,
      explain: "Ma trận vuông có định thức khác 0 thì khả nghịch."
    }
  ],

  "basis": [
    {
      id: "practice_basis_1",
      type: "mcq",
      topic: "Không gian vector",
      level: "easy",
      question: "Một cơ sở phải thỏa mãn điều kiện nào?",
      options: [
        "Sinh ra không gian và độc lập tuyến tính",
        "Chỉ cần có nhiều vector",
        "Chỉ cần có vector 0",
        "Chỉ cần phụ thuộc tuyến tính"
      ],
      answer: 0,
      explain: "Cơ sở vừa phải sinh ra không gian vừa phải độc lập tuyến tính."
    },
    {
      id: "practice_basis_2",
      type: "mcq",
      topic: "Không gian vector",
      level: "easy",
      question: "Cơ sở chuẩn của R² là gì?",
      options: [
        "(1,0) và (0,1)",
        "(1,1) và (2,2)",
        "(0,0) và (1,1)",
        "(2,0) và (4,0)"
      ],
      answer: 0,
      explain: "(1,0) và (0,1) sinh ra R² và độc lập tuyến tính."
    },
    {
      id: "practice_basis_3",
      type: "mcq",
      topic: "Không gian vector",
      level: "medium",
      question: "Hai vector trong R² cùng phương có thể là cơ sở của R² không?",
      options: [
        "Không",
        "Có",
        "Luôn có",
        "Chỉ khi cả hai bằng 0"
      ],
      answer: 0,
      explain: "Hai vector cùng phương không sinh được toàn bộ R²."
    }
  ],

  "coordinates": [
    {
      id: "practice_coordinates_1",
      type: "mcq",
      topic: "Không gian vector",
      level: "easy",
      question: "Nếu v = 3b1 - 2b2 thì tọa độ của v theo cơ sở B là gì?",
      options: [
        "(3,-2)",
        "(-2,3)",
        "(1,1)",
        "(3,2)"
      ],
      answer: 0,
      explain: "Các hệ số trước b1 và b2 chính là tọa độ theo cơ sở B."
    },
    {
      id: "practice_coordinates_2",
      type: "mcq",
      topic: "Không gian vector",
      level: "easy",
      question: "Tọa độ theo cơ sở cho biết điều gì?",
      options: [
        "Các trọng số để tạo ra vector từ cơ sở đó",
        "Độ dài của ma trận",
        "Định thức của vector",
        "Số hàng của ma trận"
      ],
      answer: 0,
      explain: "Tọa độ theo cơ sở là các hệ số trong tổ hợp tuyến tính của các vector cơ sở."
    },
    {
      id: "practice_coordinates_3",
      type: "mcq",
      topic: "Không gian vector",
      level: "medium",
      question: "Nếu B là cơ sở chuẩn của R², tọa độ của v=(5,7) theo B là gì?",
      options: [
        "(5,7)",
        "(7,5)",
        "(12,0)",
        "(0,12)"
      ],
      answer: 0,
      explain: "Với cơ sở chuẩn, tọa độ giữ nguyên."
    }
  ],

  "determinant": [
    {
      id: "practice_determinant_1",
      type: "mcq",
      topic: "Định thức",
      level: "easy",
      question: "Công thức định thức của [[a,b],[c,d]] là gì?",
      options: [
        "ad-bc",
        "ab-cd",
        "ac-bd",
        "a+b+c+d"
      ],
      answer: 0,
      explain: "Định thức ma trận 2×2 là ad-bc."
    },
    {
      id: "practice_determinant_2",
      type: "mcq",
      topic: "Định thức",
      level: "easy",
      question: "Tính det([[1,2],[3,4]]).",
      options: [
        "-2",
        "2",
        "10",
        "0"
      ],
      answer: 0,
      explain: "det=1·4-2·3=4-6=-2."
    },
    {
      id: "practice_determinant_3",
      type: "mcq",
      topic: "Định thức",
      level: "medium",
      question: "Nếu det(A)=0 thì ma trận vuông A thường như thế nào?",
      options: [
        "Không khả nghịch",
        "Khả nghịch",
        "Luôn bằng I",
        "Luôn có định thức 1"
      ],
      answer: 0,
      explain: "Ma trận vuông có định thức bằng 0 thì không khả nghịch."
    }
  ],

  "eigen": [
    {
      id: "practice_eigen_1",
      type: "mcq",
      topic: "Giá trị riêng",
      level: "easy",
      question: "Nếu Av = λv với v khác 0 thì v được gọi là gì?",
      options: [
        "Vector riêng",
        "Vector không",
        "Ma trận nghịch đảo",
        "Định thức"
      ],
      answer: 0,
      explain: "v là vector riêng, λ là giá trị riêng."
    },
    {
      id: "practice_eigen_2",
      type: "mcq",
      topic: "Giá trị riêng",
      level: "easy",
      question: "Trong Av = λv, λ được gọi là gì?",
      options: [
        "Giá trị riêng",
        "Định thức",
        "Cơ sở",
        "Không gian sinh"
      ],
      answer: 0,
      explain: "λ là giá trị riêng tương ứng với vector riêng v."
    },
    {
      id: "practice_eigen_3",
      type: "mcq",
      topic: "Giá trị riêng",
      level: "medium",
      question: "Ý nghĩa hình học của vector riêng là gì?",
      options: [
        "Không đổi hướng sau biến đổi",
        "Luôn thành vector 0",
        "Luôn vuông góc với chính nó",
        "Luôn đổi thành ma trận"
      ],
      answer: 0,
      explain: "Vector riêng sau khi nhân với A chỉ bị kéo dài, co ngắn hoặc đổi chiều, nhưng vẫn cùng phương."
    }
  ],

  "diagonalization": [
    {
      id: "practice_diagonalization_1",
      type: "mcq",
      topic: "Giá trị riêng",
      level: "easy",
      question: "Dạng chéo hóa của ma trận A thường viết là gì?",
      options: [
        "A = PDP⁻¹",
        "A = P + D",
        "A = D - P",
        "A = 0"
      ],
      answer: 0,
      explain: "Một ma trận chéo hóa được có thể viết dưới dạng A=PDP⁻¹."
    },
    {
      id: "practice_diagonalization_2",
      type: "mcq",
      topic: "Giá trị riêng",
      level: "easy",
      question: "Trong A=PDP⁻¹, D thường là ma trận gì?",
      options: [
        "Ma trận đường chéo",
        "Ma trận toàn số 1",
        "Ma trận không",
        "Ma trận mở rộng"
      ],
      answer: 0,
      explain: "D là ma trận đường chéo chứa các giá trị riêng."
    },
    {
      id: "practice_diagonalization_3",
      type: "mcq",
      topic: "Giá trị riêng",
      level: "medium",
      question: "Chéo hóa hữu ích vì giúp tính gì dễ hơn?",
      options: [
        "Lũy thừa ma trận",
        "Chu vi hình tròn",
        "Đạo hàm",
        "Xác suất"
      ],
      answer: 0,
      explain: "Nếu A=PDP⁻¹ thì Aⁿ=PDⁿP⁻¹, tính Dⁿ rất dễ."
    }
  ],

  "markov": [
    {
      id: "practice_markov_1",
      type: "mcq",
      topic: "Giá trị riêng",
      level: "easy",
      question: "Ma trận Markov thường dùng để mô tả điều gì?",
      options: [
        "Xác suất chuyển trạng thái",
        "Diện tích tam giác",
        "Định thức 2×2",
        "Phép chia hai vector"
      ],
      answer: 0,
      explain: "Ma trận Markov mô tả xác suất chuyển từ trạng thái này sang trạng thái khác."
    },
    {
      id: "practice_markov_2",
      type: "mcq",
      topic: "Giá trị riêng",
      level: "easy",
      question: "Phương trình Mx = x biểu diễn điều gì?",
      options: [
        "Trạng thái ổn định",
        "Vector bằng 0",
        "Định thức của M",
        "Ma trận nghịch đảo"
      ],
      answer: 0,
      explain: "Mx=x nghĩa là sau khi áp dụng M, trạng thái không đổi."
    },
    {
      id: "practice_markov_3",
      type: "mcq",
      topic: "Giá trị riêng",
      level: "medium",
      question: "PageRank có liên hệ với ý tưởng nào?",
      options: [
        "Ma trận Markov và trạng thái ổn định",
        "Tính đạo hàm",
        "Tính chu vi",
        "Phân số tối giản"
      ],
      answer: 0,
      explain: "PageRank có thể mô hình hóa bằng quá trình chuyển trạng thái và vector ổn định."
    }
  ],

  "numerical-gauss": [
    {
      id: "practice_numerical_gauss_1",
      type: "mcq",
      topic: "Phương pháp số",
      level: "easy",
      question: "Vì sao tính toán trên máy tính có thể có sai số?",
      options: [
        "Vì máy tính biểu diễn số thực bằng xấp xỉ",
        "Vì máy tính không biết cộng",
        "Vì mọi số đều là số nguyên",
        "Vì ma trận không tồn tại"
      ],
      answer: 0,
      explain: "Máy tính biểu diễn nhiều số thập phân bằng xấp xỉ nhị phân."
    },
    {
      id: "practice_numerical_gauss_2",
      type: "mcq",
      topic: "Phương pháp số",
      level: "easy",
      question: "Ví dụ 0.1 + 0.2 đôi khi không bằng đúng 0.3 là do đâu?",
      options: [
        "Sai số biểu diễn số thực",
        "Do phép cộng bị cấm",
        "Do ma trận nghịch đảo",
        "Do định thức bằng 0"
      ],
      answer: 0,
      explain: "0.1 và 0.2 không luôn được biểu diễn chính xác tuyệt đối trong hệ nhị phân."
    },
    {
      id: "practice_numerical_gauss_3",
      type: "mcq",
      topic: "Phương pháp số",
      level: "medium",
      question: "Chọn pivot có giá trị tuyệt đối lớn hơn giúp điều gì?",
      options: [
        "Giảm sai số tính toán",
        "Tăng số biến",
        "Biến ma trận thành vector",
        "Làm hệ vô nghiệm"
      ],
      answer: 0,
      explain: "Chọn pivot tốt hơn giúp quá trình khử Gauss ổn định hơn."
    }
  ],

  "lu": [
    {
      id: "practice_lu_1",
      type: "mcq",
      topic: "Phương pháp số",
      level: "easy",
      question: "Phân tích LU viết ma trận A dưới dạng nào?",
      options: [
        "A = LU",
        "A = L + U",
        "A = L - U",
        "A = 0"
      ],
      answer: 0,
      explain: "Phân tích LU viết A thành tích của ma trận tam giác dưới L và tam giác trên U."
    },
    {
      id: "practice_lu_2",
      type: "mcq",
      topic: "Phương pháp số",
      level: "easy",
      question: "Trong LU, L thường là ma trận gì?",
      options: [
        "Tam giác dưới",
        "Tam giác trên",
        "Ma trận đường chéo D",
        "Ma trận không"
      ],
      answer: 0,
      explain: "L là ma trận tam giác dưới."
    },
    {
      id: "practice_lu_3",
      type: "mcq",
      topic: "Phương pháp số",
      level: "medium",
      question: "Phân tích LU hữu ích nhất khi nào?",
      options: [
        "Giải nhiều hệ có cùng ma trận A nhưng khác b",
        "Chỉ giải một phép cộng",
        "Tính chu vi hình tròn",
        "Sắp xếp văn bản"
      ],
      answer: 0,
      explain: "Phân tích A một lần rồi dùng lại cho nhiều vế phải b khác nhau."
    }
  ],

  "orthogonal": [
    {
      id: "practice_orthogonal_1",
      type: "mcq",
      topic: "Trực giao",
      level: "easy",
      question: "Hai vector u và v trực giao khi nào?",
      options: [
        "u·v = 0",
        "u+v = 0",
        "u=v",
        "u·v = 1"
      ],
      answer: 0,
      explain: "Hai vector trực giao khi tích vô hướng bằng 0."
    },
    {
      id: "practice_orthogonal_2",
      type: "mcq",
      topic: "Trực giao",
      level: "easy",
      question: "Vector (-1,2) và (2,1) có tích vô hướng bằng bao nhiêu?",
      options: [
        "0",
        "1",
        "-1",
        "4"
      ],
      answer: 0,
      explain: "(-1)·2 + 2·1 = -2 + 2 = 0."
    },
    {
      id: "practice_orthogonal_3",
      type: "mcq",
      topic: "Trực giao",
      level: "medium",
      question: "Trong R², hai vector trực giao thường có ý nghĩa hình học gì?",
      options: [
        "Vuông góc",
        "Cùng hướng",
        "Cùng độ dài",
        "Luôn bằng nhau"
      ],
      answer: 0,
      explain: "Trong R², trực giao tương ứng với vuông góc."
    }
  ],

  "orthogonal-complement": [
    {
      id: "practice_orthogonal_complement_1",
      type: "mcq",
      topic: "Trực giao",
      level: "easy",
      question: "Phần bù trực giao W⊥ gồm những vector nào?",
      options: [
        "Các vector vuông góc với mọi vector trong W",
        "Các vector nằm trong W",
        "Các vector bằng 0 בלבד",
        "Các ma trận vuông"
      ],
      answer: 0,
      explain: "W⊥ là tập các vector trực giao với mọi vector thuộc W."
    },
    {
      id: "practice_orthogonal_complement_2",
      type: "mcq",
      topic: "Trực giao",
      level: "easy",
      question: "Nếu W là trục Ox trong R² thì W⊥ là gì?",
      options: [
        "Trục Oy",
        "Trục Ox",
        "Toàn bộ R²",
        "Không tồn tại"
      ],
      answer: 0,
      explain: "Các vector vuông góc với trục Ox nằm trên trục Oy."
    },
    {
      id: "practice_orthogonal_complement_3",
      type: "mcq",
      topic: "Trực giao",
      level: "medium",
      question: "Ký hiệu W⊥ đọc là gì?",
      options: [
        "Phần bù trực giao của W",
        "Định thức của W",
        "Nghịch đảo của W",
        "Cơ sở của W"
      ],
      answer: 0,
      explain: "W⊥ là phần bù trực giao của không gian con W."
    }
  ]
};

function stripHtml(text) {
  return String(text || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function shortText(text, maxLength = 120) {
  const clean = stripHtml(text);

  if (clean.length <= maxLength) return clean;

  return clean.slice(0, maxLength).trim() + "...";
}

function makeTopicWrongOptions(correctTopic) {
  const wrongTopics = getTopics().filter((topic) => topic !== correctTopic);

  return wrongTopics.slice(0, 3);
}

function makeFormulaWrongOptions(correctFormula) {
  const formulas = [
    "A · x = b",
    "[A | b]",
    "RREF",
    "u + v",
    "A · x",
    "A · B",
    "det(A)=ad-bc",
    "A⁻¹",
    "Av = λv",
    "A = PDP⁻¹",
    "u · v = 0"
  ];

  return formulas.filter((f) => f !== correctFormula).slice(0, 3);
}

function makeAutoPracticeQuestions(lesson) {
  const topicWrongs = makeTopicWrongOptions(lesson.topic);
  const formulaWrongs = makeFormulaWrongOptions(lesson.formula);

  const safeTopicOptions = [
    lesson.topic,
    topicWrongs[0] || "Vector",
    topicWrongs[1] || "Ma trận",
    topicWrongs[2] || "Định thức"
  ];

  const safeFormulaOptions = [
    lesson.formula,
    formulaWrongs[0] || "det(A)=ad-bc",
    formulaWrongs[1] || "Av = λv",
    formulaWrongs[2] || "u · v = 0"
  ];

  return [
    {
      id: `${lesson.id}_auto_1`,
      type: "mcq",
      topic: lesson.topic,
      level: "easy",
      question: `Bài "${lesson.title}" thuộc chủ đề nào?`,
      options: safeTopicOptions,
      answer: 0,
      explain: `Bài này thuộc chủ đề "${lesson.topic}".`
    },
    {
      id: `${lesson.id}_auto_2`,
      type: "mcq",
      topic: lesson.topic,
      level: "easy",
      question: `Ký hiệu hoặc công thức chính của bài "${lesson.title}" là gì?`,
      options: safeFormulaOptions,
      answer: 0,
      explain: `Công thức/ký hiệu chính của bài là ${lesson.formula}.`
    },
    {
      id: `${lesson.id}_auto_3`,
      type: "mcq",
      topic: lesson.topic,
      level: "easy",
      question: `Ý chính của bài "${lesson.title}" là gì?`,
      options: [
        lesson.summary,
        "Bài này chỉ nói về lập trình web.",
        "Bài này chỉ nói về xác suất nâng cao.",
        "Bài này không liên quan đến đại số tuyến tính."
      ],
      answer: 0,
      explain: lesson.summary
    },
    {
      id: `${lesson.id}_auto_4`,
      type: "mcq",
      topic: lesson.topic,
      level: "easy",
      question: `Bài "${lesson.title}" nằm trong phần nào?`,
      options: [
        lesson.category,
        "Chương phụ không xác định",
        "Phần luyện nghe tiếng Anh",
        "Phần lập trình C++"
      ],
      answer: 0,
      explain: `Bài này nằm trong ${lesson.category}.`
    },
    {
      id: `${lesson.id}_auto_5`,
      type: "mcq",
      topic: lesson.topic,
      level: "medium",
      question: `Ví dụ chính trong bài "${lesson.title}" là gì?`,
      options: [
        shortText(lesson.example),
        "Tính diện tích hình tròn.",
        "Sắp xếp một mảng số nguyên.",
        "Tìm từ vựng tiếng Anh phù hợp."
      ],
      answer: 0,
      explain: `Ví dụ của bài là: ${shortText(lesson.example, 160)}`
    },
    {
      id: `${lesson.id}_auto_6`,
      type: "mcq",
      topic: lesson.topic,
      level: "medium",
      question: `Lời giải ví dụ trong bài "${lesson.title}" nói về điều gì?`,
      options: [
        shortText(lesson.solution),
        "Không cần dùng kiến thức trong bài.",
        "Chỉ cần đoán đáp án.",
        "Chỉ cần đổi đơn vị đo."
      ],
      answer: 0,
      explain: `Lời giải đúng là: ${shortText(lesson.solution, 180)}`
    },
    {
      id: `${lesson.id}_auto_7`,
      type: "mcq",
      topic: lesson.topic,
      level: "medium",
      question: `Khi học bài "${lesson.title}", điều quan trọng nhất là gì?`,
      options: [
        "Hiểu định nghĩa, công thức và cách áp dụng vào ví dụ.",
        "Chỉ học thuộc tên bài.",
        "Bỏ qua ví dụ.",
        "Chỉ nhìn đáp án mà không cần hiểu."
      ],
      answer: 0,
      explain: "Mỗi bài luyện tập cần hiểu khái niệm, công thức và ví dụ áp dụng."
    },
    {
      id: `${lesson.id}_auto_8`,
      type: "mcq",
      topic: lesson.topic,
      level: "medium",
      question: `Chọn nhận xét đúng về bài "${lesson.title}".`,
      options: [
        `Bài này thuộc chủ đề ${lesson.topic} và có công thức/ký hiệu chính là ${lesson.formula}.`,
        "Bài này không có nội dung toán học.",
        "Bài này chỉ dùng để trang trí giao diện.",
        "Bài này không cần ví dụ minh họa."
      ],
      answer: 0,
      explain: `Bài này thuộc ${lesson.topic}, công thức/ký hiệu chính là ${lesson.formula}.`
    },
    {
      id: `${lesson.id}_auto_9`,
      type: "mcq",
      topic: lesson.topic,
      level: "easy",
      question: `Mục đích của phần ví dụ trong bài "${lesson.title}" là gì?`,
      options: [
        "Giúp người học biết cách áp dụng lý thuyết.",
        "Làm bài dài hơn nhưng không có tác dụng.",
        "Thay thế toàn bộ lý thuyết.",
        "Chỉ để kiểm tra giao diện."
      ],
      answer: 0,
      explain: "Ví dụ giúp người học hiểu cách dùng lý thuyết vào bài cụ thể."
    },
    {
      id: `${lesson.id}_auto_10`,
      type: "mcq",
      topic: lesson.topic,
      level: "easy",
      question: `Sau khi học bài "${lesson.title}", người học nên làm gì?`,
      options: [
        "Làm bài luyện tập để kiểm tra mức độ hiểu bài.",
        "Bỏ qua bài tập.",
        "Chỉ đọc tiêu đề.",
        "Chỉ học các đáp án sai."
      ],
      answer: 0,
      explain: "Làm bài luyện tập giúp kiểm tra xem mình đã hiểu bài chưa."
    }
  ];
}

function getFixedPracticeQuestions(lesson) {
  const manualQuestions = PRACTICE_BANK[lesson.id] || [];

  return manualQuestions.slice(0, 10).map((q, index) => ({
    ...q,
    id: q.id || `${lesson.id}_practice_${index + 1}`,
    topic: q.topic || lesson.topic,
    level: q.level || "easy",
    type: q.type || "mcq"
  }));
}
function startPracticeByLesson(lessonId) {
  const lesson = THEORY.find((item) => item.id === lessonId);

  if (!lesson) {
    alert("Không tìm thấy phần luyện tập.");
    return;
  }

  const questions = getFixedPracticeQuestions(lesson);

  if (!questions.length) {
    alert(`Bài "${lesson.title}" chưa có bài luyện tập cố định.`);
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
              <option value="normal" selected>Đề kiểm tra từ file JSON</option>
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

        <div id="setupResult" style="margin-top:10px; font-weight:700;"></div>
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
            <div class="stat"><strong>${topics.length}</strong><span>Chủ đề</span></div>
          </div>

          <h4 style="margin:0 0 4px; font-size:14px;">Hướng dẫn tự luận:</h4>

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
  if (!DATA_READY) {
    box.style.color = "var(--red)";
    box.innerText = "⏳ Databank câu hỏi chưa tải xong. Hãy chờ một chút.";
    return;
  }

  if (!topics.length) {
    box.style.color = "var(--red)";
    box.innerText = "⚠️ Bạn cần chọn ít nhất một nội dung kiểm tra.";
    return;
  }

  lastTestSetup = {
    source: selectedSource,
    numQuestions,
    questionType,
    level,
    topics
  };

  const questions = generateQuestions(numQuestions, questionType, level, topics);

  if (!questions.length) {
    box.style.color = "var(--red)";
    box.innerText = "⚠️ Không tìm thấy câu hỏi phù hợp trong file JSON.";
    return;
  }

  if (questions.length < numQuestions) {
    box.style.color = "var(--red)";
    box.innerText = `⚠️ Chỉ tìm thấy ${questions.length}/${numQuestions} câu phù hợp trong file JSON. Hãy thêm câu hỏi hoặc chọn ít câu hơn.`;
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

function levelOk(qLevel, selectedLevel) {
  if (selectedLevel === "easy") return true;
  if (selectedLevel === "medium") return qLevel === "easy" || qLevel === "medium";
  return true;
}

function generateQuestions(n, questionType, level, topics) {
  let pool = QUESTION_BANK.filter((q) => topics.includes(q.topic) && levelOk(q.level, level));

  if (questionType !== "mixed") {
    pool = pool.filter((q) => q.type === questionType);
  }

  return shuffle(pool).slice(0, n);
}


function renderTakingTest() {
  if (!currentTest) return;

  app.innerHTML = `
    <div class="section-head">
      <div>
        <h2>📝 Đang làm bài</h2>
        <div class="muted">
          ${currentTestSource === "practice" ? "Bài luyện tập" : "Bài kiểm tra"} • ${currentTest.length} câu
        </div>
      </div>

      <div class="btn-row">
        ${renderBackButton()}
        <button class="primary" onclick="submitTest()">Nộp bài</button>
      </div>
    </div>

    ${currentTest.map((q, idx) => renderQuestion(q, idx)).join("")}

    <div class="btn-row" style="justify-content:center; margin-top:20px;">
      <button class="primary" onclick="submitTest()">Nộp bài và xem kết quả</button>
    </div>
  `;

  restoreAnswersToForm();
  renderMath();
}

function renderQuestion(q, idx) {
  return `
    <div class="question-card">
      <div class="q-meta">
        <span class="badge">Câu ${idx + 1}</span>
        <span class="badge" style="background:rgba(0,0,0,0.05); color:var(--text);">${q.topic}</span>
        <span class="badge" style="background:rgba(0,0,0,0.05); color:var(--text);">${q.level || "easy"}</span>
      </div>

      <div class="q-title">${parseMathBeauty(q.question)}</div>

      ${
        q.type === "mcq"
          ? `
            <div class="option-list">
              ${q.options.map((op, opIdx) => `
                <label class="option-label">
                  <input type="radio" name="q_${idx}" value="${opIdx}" onchange="saveAnswer(${idx}, this.value)">
                  <span><b>${String.fromCharCode(65 + opIdx)}.</b> ${parseMathBeauty(op)}</span>
                </label>
              `).join("")}
            </div>
          `
          : `
            <input
              class="answer-input"
              id="fill_${idx}"
              placeholder="Nhập đáp án, ví dụ: (3,2) hoặc 3,2"
              oninput="saveAnswer(${idx}, this.value)"
            >
          `
      }
    </div>
  `;
}

function saveAnswer(idx, value) {
  if (!currentTest || !currentTest[idx]) return;

  currentTest[idx].userAnswer = value;
}

function restoreAnswersToForm() {
  if (!currentTest) return;

  currentTest.forEach((q, idx) => {
    if (q.userAnswer === null || q.userAnswer === "") return;

    if (q.type === "mcq") {
      const radio = document.querySelector(`input[name="q_${idx}"][value="${q.userAnswer}"]`);

      if (radio) radio.checked = true;
    }

    if (q.type === "fill") {
      const input = document.getElementById(`fill_${idx}`);

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
      level: q.level || "easy",
      question: q.question,
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

        <div class="answer-line">
          <b>Câu trả lời của bạn:</b> ${parseMathBeauty(formatUserAnswer(q))}<br>
          <b>Đáp án chuẩn:</b> <span style="color:var(--green);">${parseMathBeauty(q.correctAnswer)}</span>

          <div class="divider"></div>

          <b>Giải thích chi tiết:</b> ${parseMathBeauty(q.explain) || "Không có giải thích tự động."}
        </div>
      </div>
    `).join("")}
  `;
  renderMath();
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
                        <button class="secondary" style="padding:4px 10px; font-size:12px;" onclick="viewScore('${item.id}')">Xem lại</button>
                        <button class="danger" style="padding:4px 10px; font-size:12px;" onclick="deleteScore('${item.id}')">Xóa</button>
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
            <h3>Chưa có dữ liệu điểm số</h3>
            <p>Hãy hoàn thành bài kiểm tra đầu tiên để lưu thành tích vào đây.</p>
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
  if (window.innerWidth <= 768 && sidebar && menuBtn && !sidebar.contains(e.target) && e.target !== menuBtn) {
    sidebar.classList.remove("mobile-open");
  }
});

document.querySelectorAll("[data-view]").forEach((el) => {
  el.addEventListener("click", () => {
    currentTopic = "all";
    showView(el.dataset.view);
  });
});

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

async function initApp() {
  app.innerHTML = `
    <div class="panel">
      <h3>Đang tải databank câu hỏi...</h3>
      <p class="muted">Vui lòng chờ một chút.</p>
    </div>
  `;

  await loadQuestionBank();

  renderSidebarFilters();
  showView("home");
}

initApp();