const THEORY = [
  {
    id: "sage-computation",
    topic: "Hệ phương trình",
    category: "Chương 1: Tính toán với Sage",
    title: "Tính toán ma trận bằng phần mềm",
    formula: "A.rref()",
    summary: "Với hệ lớn, ta có thể dùng phần mềm để tính RREF, giải hệ và kiểm tra kết quả.",
    content: `
      <p>Trong đại số tuyến tính, các phép tính như khử Gauss, tìm RREF, nhân ma trận hoặc tìm nghiệm hệ phương trình có thể rất dài nếu làm bằng tay.</p>
      <p>Vì vậy, tài liệu tham khảo giới thiệu việc dùng công cụ tính toán như Sage để hỗ trợ.</p>
      <p>Ý tưởng không phải là bỏ qua lý thuyết, mà là dùng máy tính để xử lý phép tính lớn hơn.</p>
      <p>Một số việc phần mềm có thể hỗ trợ:</p>
      <ul>
        <li>Tạo ma trận và vector.</li>
        <li>Tính dạng bậc thang rút gọn.</li>
        <li>Giải hệ phương trình tuyến tính.</li>
        <li>Kiểm tra hạng, định thức, trị riêng và vector riêng.</li>
      </ul>
      <p>Khi học, ta vẫn cần hiểu ý nghĩa của kết quả thay vì chỉ bấm máy.</p>
    `,
    example: "Vì sao nên hiểu lý thuyết dù dùng phần mềm tính toán?",
    solution: "Vì phần mềm cho kết quả, còn người học phải hiểu kết quả đó có ý nghĩa gì."
  },

  {
    id: "pivot-position-solution-space",
    topic: "Hệ phương trình",
    category: "Chương 1: Pivot và không gian nghiệm",
    title: "Pivot ảnh hưởng đến không gian nghiệm",
    formula: "số biến tự do = số biến - số pivot",
    summary: "Vị trí pivot giúp xác định hệ có nghiệm duy nhất, vô số nghiệm hay vô nghiệm.",
    content: `
      <p>Khi đưa ma trận mở rộng về dạng bậc thang, các pivot cho biết biến nào bị ràng buộc bởi hệ phương trình.</p>
      <p>Biến có pivot gọi là biến cơ bản.</p>
      <p>Biến không có pivot gọi là biến tự do.</p>
      <p>Nếu hệ không có mâu thuẫn và không có biến tự do, hệ có nghiệm duy nhất.</p>
      <p>Nếu hệ không có mâu thuẫn và có biến tự do, hệ có vô số nghiệm.</p>
      <p>Nếu có hàng dạng:</p>
      <div class="math-box">[0 0 ... 0 | c], c ≠ 0</div>
      <p>thì hệ vô nghiệm vì hàng đó biểu diễn phương trình 0 = c.</p>
    `,
    example: "Một hệ có 4 biến, 3 pivot và không mâu thuẫn thì có bao nhiêu biến tự do?",
    solution: "Có 1 biến tự do, nên hệ có vô số nghiệm."
  },

  {
    id: "linear-transformation-definition",
    topic: "Biến đổi tuyến tính",
    category: "Chương 2: Biến đổi ma trận",
    title: "Biến đổi tuyến tính",
    formula: "T(cu + dv) = cT(u) + dT(v)",
    summary: "Biến đổi tuyến tính là phép biến đổi giữ cấu trúc cộng vector và nhân vector với số.",
    content: `
      <p>Một biến đổi T được gọi là tuyến tính nếu nó giữ được hai phép toán cơ bản của vector.</p>
      <ul>
        <li>T(u + v) = T(u) + T(v)</li>
        <li>T(cv) = cT(v)</li>
      </ul>
      <p>Hai tính chất này có thể gộp lại thành:</p>
      <div class="math-box">T(cu + dv) = cT(u) + dT(v)</div>
      <p>Điều này nghĩa là biến đổi tuyến tính giữ nguyên cách tổ hợp tuyến tính hoạt động.</p>
      <p>Trong đại số tuyến tính, phép nhân ma trận Ax là ví dụ quan trọng nhất của biến đổi tuyến tính.</p>
    `,
    example: "Nếu T là tuyến tính thì T(2u+3v) bằng gì?",
    solution: "T(2u+3v)=2T(u)+3T(v)."
  },

  {
    id: "standard-matrix-transformation",
    topic: "Biến đổi tuyến tính",
    category: "Chương 2: Biến đổi ma trận",
    title: "Ma trận chuẩn của một biến đổi",
    formula: "A = [T(e₁) T(e₂) ... T(eₙ)]",
    summary: "Một biến đổi tuyến tính được xác định bởi ảnh của các vector cơ sở chuẩn.",
    content: `
      <p>Giả sử T là một biến đổi tuyến tính từ Rⁿ sang Rᵐ.</p>
      <p>Để biết T tác động lên mọi vector, ta chỉ cần biết T tác động lên các vector cơ sở chuẩn e₁, e₂, ..., eₙ.</p>
      <p>Ma trận chuẩn của T được tạo bằng cách đặt các vector T(e₁), T(e₂), ..., T(eₙ) làm các cột:</p>
      <div class="math-box">A = [T(e₁) T(e₂) ... T(eₙ)]</div>
      <p>Khi đó với mọi vector x, ta có:</p>
      <div class="math-box">T(x)=Ax</div>
      <p>Vì vậy, ma trận không chỉ là bảng số, mà còn mô tả một phép biến đổi hình học hoặc đại số.</p>
    `,
    example: "Nếu T(e₁)=(1,2) và T(e₂)=(3,4), ma trận chuẩn của T là gì?",
    solution: "A=[[1,3],[2,4]], vì T(e₁) và T(e₂) là hai cột của A."
  },

  {
    id: "matrix-image-and-kernel",
    topic: "Biến đổi tuyến tính",
    category: "Chương 2: Biến đổi ma trận",
    title: "Ảnh và hạt nhân của biến đổi ma trận",
    formula: "T(x)=Ax",
    summary: "Ảnh cho biết các đầu ra có thể tạo được, còn hạt nhân cho biết các vector bị đưa về 0.",
    content: `
      <p>Với biến đổi T(x)=Ax, ta thường quan tâm đến hai tập vector quan trọng.</p>
      <p>Ảnh của T là tập tất cả vector đầu ra có thể tạo ra:</p>
      <div class="math-box">Image(T) = Col(A)</div>
      <p>Hạt nhân của T là tập các vector đầu vào bị biến thành vector 0:</p>
      <div class="math-box">Ker(T) = Null(A)</div>
      <p>Ảnh liên quan đến câu hỏi Ax=b có nghiệm hay không.</p>
      <p>Hạt nhân liên quan đến câu hỏi nghiệm của Ax=b có duy nhất hay không.</p>
    `,
    example: "Nếu x thuộc Ker(T) thì T(x) bằng gì?",
    solution: "T(x)=0."
  },

  {
    id: "floating-point-error",
    topic: "Phương pháp số",
    category: "Chương 5: Phép khử Gauss được xem lại",
    title: "Sai số số thực trên máy tính",
    formula: "π ≈ 3.141592653589793",
    summary: "Máy tính thường lưu số thực dưới dạng xấp xỉ nên phép tính có thể có sai số nhỏ.",
    content: `
      <p>Máy tính chỉ có bộ nhớ hữu hạn, nên không thể lưu mọi số thực với độ chính xác tuyệt đối.</p>
      <p>Nhiều số thập phân hoặc số vô tỉ chỉ được lưu gần đúng.</p>
      <p>Thông thường sai số rất nhỏ, nhưng khi thực hiện nhiều phép tính, sai số có thể tích lũy.</p>
      <p>Trong khử Gauss, sai số có thể bị khuếch đại nếu ta chia cho pivot quá nhỏ.</p>
      <p>Vì vậy, tính toán đại số tuyến tính thực tế cần quan tâm đến độ ổn định số học.</p>
    `,
    example: "Vì sao kết quả tính bằng máy đôi khi chỉ là gần đúng?",
    solution: "Vì máy tính lưu số thực bằng xấp xỉ với số chữ số hữu hạn."
  },

  {
    id: "partial-pivoting",
    topic: "Phương pháp số",
    category: "Chương 5: Phép khử Gauss được xem lại",
    title: "Pivoting một phần",
    formula: "chọn pivot có trị tuyệt đối lớn nhất",
    summary: "Pivoting một phần giúp khử Gauss ổn định hơn bằng cách đổi hàng để chọn pivot tốt.",
    content: `
      <p>Khi khử Gauss, ta cần chọn pivot để loại bỏ các phần tử bên dưới.</p>
      <p>Nếu pivot quá nhỏ, phép chia cho pivot có thể làm sai số tăng mạnh.</p>
      <p>Pivoting một phần là kỹ thuật đổi hàng sao cho phần tử có trị tuyệt đối lớn nhất trong cột được chọn làm pivot.</p>
      <div class="math-box">pivot = phần tử có |giá trị| lớn nhất trong cột đang xét</div>
      <p>Kỹ thuật này không làm thay đổi bản chất nghiệm của hệ, nhưng giúp tính toán ổn định hơn trên máy tính.</p>
    `,
    example: "Vì sao pivot quá nhỏ không tốt trong tính toán?",
    solution: "Vì chia cho số quá nhỏ có thể làm sai số bị khuếch đại."
  },

  {
    id: "permutation-matrix",
    topic: "Phương pháp số",
    category: "Chương 5: Phép khử Gauss được xem lại",
    title: "Ma trận hoán vị",
    formula: "PA = LU",
    summary: "Ma trận hoán vị ghi lại các phép đổi hàng trong quá trình khử Gauss.",
    content: `
      <p>Khi dùng pivoting, ta thường phải đổi chỗ các hàng.</p>
      <p>Các phép đổi hàng này có thể được biểu diễn bằng một ma trận hoán vị P.</p>
      <p>Vì vậy, trong thực tế phân tích LU thường được viết là:</p>
      <div class="math-box">PA = LU</div>
      <p>Trong đó P ghi lại các phép đổi hàng, L là ma trận tam giác dưới và U là ma trận tam giác trên.</p>
    `,
    example: "Trong PA=LU, P có vai trò gì?",
    solution: "P ghi lại các phép hoán đổi hàng."
  },

  {
    id: "solve-with-lu",
    topic: "Phương pháp số",
    category: "Chương 5: Phân tích LU",
    title: "Giải hệ Ax=b bằng LU",
    formula: "Lc = Pb, Ux = c",
    summary: "Sau khi có PA=LU, ta giải hệ bằng hai hệ tam giác đơn giản hơn.",
    content: `
      <p>Giả sử ta có phân tích:</p>
      <div class="math-box">PA = LU</div>
      <p>Muốn giải Ax=b, ta nhân hai vế với P:</p>
      <div class="math-box">PAx = Pb</div>
      <p>Vì PA=LU nên:</p>
      <div class="math-box">LUx = Pb</div>
      <p>Đặt c = Ux, ta giải hai bước:</p>
      <ul>
        <li>Giải Lc = Pb bằng thế tiến.</li>
        <li>Giải Ux = c bằng thế ngược.</li>
      </ul>
      <p>Do L và U là ma trận tam giác, hai hệ này dễ giải hơn hệ ban đầu.</p>
    `,
    example: "Nếu PA=LU, ta giải Ax=b bằng hai hệ nào?",
    solution: "Giải Lc=Pb trước, sau đó giải Ux=c."
  },

  {
    id: "forward-back-substitution",
    topic: "Phương pháp số",
    category: "Chương 5: Phân tích LU",
    title: "Thế tiến và thế ngược",
    formula: "Lc = d, Ux = c",
    summary: "Hệ tam giác dưới giải bằng thế tiến, hệ tam giác trên giải bằng thế ngược.",
    content: `
      <p>Với ma trận tam giác dưới L, ta giải từ hàng đầu xuống hàng cuối. Cách này gọi là thế tiến.</p>
      <div class="math-box">Lc = d</div>
      <p>Với ma trận tam giác trên U, ta giải từ hàng cuối ngược lên hàng đầu. Cách này gọi là thế ngược.</p>
      <div class="math-box">Ux = c</div>
      <p>Hai kỹ thuật này xuất hiện nhiều trong phân tích LU và giúp giải hệ nhanh hơn.</p>
    `,
    example: "Hệ Ux=c với U tam giác trên nên giải bằng cách nào?",
    solution: "Dùng thế ngược, bắt đầu từ biến cuối cùng."
  },

  {
    id: "lu-many-right-sides",
    topic: "Phương pháp số",
    category: "Chương 5: Phân tích LU",
    title: "LU khi có nhiều vế phải",
    formula: "Ax=b₁, Ax=b₂, ...",
    summary: "LU hữu ích khi cần giải nhiều hệ có cùng ma trận A nhưng khác vector b.",
    content: `
      <p>Nếu phải giải nhiều hệ có cùng ma trận A:</p>
      <div class="math-box">Ax=b₁, Ax=b₂, Ax=b₃, ...</div>
      <p>ta không cần khử Gauss lại từ đầu cho từng hệ.</p>
      <p>Ta phân tích A một lần:</p>
      <div class="math-box">PA = LU</div>
      <p>Sau đó với mỗi b mới, chỉ cần giải hai hệ tam giác.</p>
      <p>Điều này tiết kiệm rất nhiều thời gian khi A lớn hoặc số lượng vế phải nhiều.</p>
    `,
    example: "Khi nào phân tích LU đặc biệt hữu ích?",
    solution: "Khi cần giải nhiều hệ Ax=b có cùng A nhưng khác b."
  },

  {
    id: "determinant-from-pivots",
    topic: "Phương pháp số",
    category: "Chương 5: Phép khử Gauss được xem lại",
    title: "Định thức từ các pivot",
    formula: "det(U) = tích đường chéo",
    summary: "Sau khử Gauss, định thức liên quan đến tích các pivot trên đường chéo của U.",
    content: `
      <p>Trong phân tích LU, U là ma trận tam giác trên.</p>
      <p>Định thức của ma trận tam giác bằng tích các phần tử trên đường chéo.</p>
      <div class="math-box">det(U)=u₁₁u₂₂...uₙₙ</div>
      <p>Nếu không có đổi hàng và L có đường chéo chính toàn 1, thì det(A)=det(U).</p>
      <p>Nếu có đổi hàng, dấu của định thức thay đổi tùy số lần đổi hàng.</p>
      <p>Nếu một pivot bằng 0, ma trận có thể không khả nghịch.</p>
    `,
    example: "U có đường chéo 2, -1, 3. det(U) bằng bao nhiêu?",
    solution: "det(U)=2·(-1)·3=-6."
  },

  {
    id: "power-method",
    topic: "Phương pháp số",
    category: "Chương 5: Tìm vector riêng một cách số học",
    title: "Phương pháp lũy thừa",
    formula: "xₖ₊₁ = Axₖ",
    summary: "Phương pháp lũy thừa dùng phép nhân lặp với A để xấp xỉ vector riêng trội.",
    content: `
      <p>Phương pháp lũy thừa là cách tìm gần đúng giá trị riêng và vector riêng của ma trận.</p>
      <p>Ta bắt đầu với một vector khác 0, rồi lặp lại:</p>
      <div class="math-box">xₖ₊₁ = Axₖ</div>
      <p>Nếu ma trận có một giá trị riêng trội rõ ràng, hướng của xₖ thường tiến gần đến vector riêng ứng với giá trị riêng đó.</p>
      <p>Phương pháp này hữu ích khi ma trận lớn và ta chỉ cần giá trị riêng quan trọng nhất.</p>
    `,
    example: "Phương pháp lũy thừa thường tìm vector riêng ứng với giá trị riêng nào?",
    solution: "Giá trị riêng có trị tuyệt đối lớn nhất."
  },

  {
    id: "dominant-eigenvalue",
    topic: "Phương pháp số",
    category: "Chương 5: Tìm vector riêng một cách số học",
    title: "Giá trị riêng trội",
    formula: "|λ₁| > |λ₂| ≥ ...",
    summary: "Giá trị riêng trội là giá trị riêng có trị tuyệt đối lớn nhất.",
    content: `
      <p>Giá trị riêng trội là giá trị riêng có trị tuyệt đối lớn nhất.</p>
      <div class="math-box">|λ₁| > |λ₂| ≥ |λ₃| ≥ ...</div>
      <p>Khi nhân lặp với A, thành phần theo hướng vector riêng của λ₁ thường chiếm ưu thế.</p>
      <p>Đó là lý do phương pháp lũy thừa thường tìm được hướng của vector riêng trội.</p>
    `,
    example: "Nếu |λ₁| lớn hơn các trị tuyệt đối còn lại thì λ₁ gọi là gì?",
    solution: "λ₁ là giá trị riêng trội."
  },

  {
    id: "normalization-power-method",
    topic: "Phương pháp số",
    category: "Chương 5: Tìm vector riêng một cách số học",
    title: "Chuẩn hóa khi lặp",
    formula: "xₖ / ||xₖ||",
    summary: "Chuẩn hóa giúp vector không quá lớn hoặc quá nhỏ khi dùng phương pháp lũy thừa.",
    content: `
      <p>Khi lặp xₖ₊₁=Axₖ nhiều lần, độ dài vector có thể tăng rất lớn hoặc giảm rất nhỏ.</p>
      <p>Ta thường chuẩn hóa vector sau mỗi bước.</p>
      <div class="math-box">xₖ mới = xₖ / ||xₖ||</div>
      <p>Chuẩn hóa giữ cho độ dài vector ổn định và giúp dễ quan sát hướng hội tụ.</p>
      <p>Khi quá trình hội tụ, vector chuẩn hóa tiến gần đến vector riêng.</p>
    `,
    example: "Vì sao cần chuẩn hóa trong phương pháp lũy thừa?",
    solution: "Để tránh vector quá lớn hoặc quá nhỏ và giữ tính ổn định."
  },

  {
    id: "inverse-power-method",
    topic: "Phương pháp số",
    category: "Chương 5: Tìm vector riêng một cách số học",
    title: "Phương pháp lũy thừa nghịch đảo",
    formula: "A⁻¹xₖ",
    summary: "Lũy thừa nghịch đảo giúp tìm giá trị riêng có trị tuyệt đối nhỏ nhất.",
    content: `
      <p>Nếu λ là giá trị riêng của A, thì 1/λ là giá trị riêng của A⁻¹.</p>
      <p>Vì vậy, giá trị riêng nhỏ nhất theo trị tuyệt đối của A sẽ trở thành giá trị riêng lớn nhất theo trị tuyệt đối của A⁻¹.</p>
      <p>Ta có thể dùng ý tưởng này để tìm giá trị riêng nhỏ.</p>
      <p>Trong thực tế, ta thường không tính A⁻¹ trực tiếp mà giải các hệ tuyến tính liên quan đến A.</p>
    `,
    example: "Muốn tìm giá trị riêng nhỏ nhất theo trị tuyệt đối của A, ta có thể dùng ý tưởng gì?",
    solution: "Dùng phương pháp lũy thừa cho A⁻¹ hoặc giải hệ tương ứng."
  },

  {
    id: "shifted-inverse-power",
    topic: "Phương pháp số",
    category: "Chương 5: Tìm vector riêng một cách số học",
    title: "Tìm giá trị riêng gần một số cho trước",
    formula: "(A - sI)⁻¹",
    summary: "Dịch chuyển giúp tìm giá trị riêng của A gần số s.",
    content: `
      <p>Đôi khi ta muốn tìm giá trị riêng gần một số s thay vì giá trị riêng lớn nhất.</p>
      <p>Khi đó ta xét:</p>
      <div class="math-box">(A - sI)⁻¹</div>
      <p>Nếu λ là giá trị riêng của A, thì 1/(λ-s) là giá trị riêng của (A-sI)⁻¹.</p>
      <p>Giá trị riêng λ gần s làm |λ-s| nhỏ, nên 1/|λ-s| lớn.</p>
      <p>Vì vậy phương pháp lũy thừa trên (A-sI)⁻¹ sẽ hướng đến giá trị riêng của A gần s nhất.</p>
    `,
    example: "Muốn tìm giá trị riêng gần s, ta xét ma trận nào?",
    solution: "Xét (A - sI)⁻¹."
  },

  {
    id: "power-method-limitations",
    topic: "Phương pháp số",
    category: "Chương 5: Tìm vector riêng một cách số học",
    title: "Hạn chế của phương pháp lũy thừa",
    formula: "|λ₁| > |λ₂|",
    summary: "Phương pháp lũy thừa hoạt động tốt nhất khi có một giá trị riêng trội rõ ràng.",
    content: `
      <p>Phương pháp lũy thừa không phải lúc nào cũng hội tụ nhanh.</p>
      <p>Nếu hai giá trị riêng lớn nhất theo trị tuyệt đối gần bằng nhau, quá trình hội tụ có thể chậm.</p>
      <p>Nếu ma trận có giá trị riêng phức hoặc giá trị riêng lặp, cần thận trọng khi áp dụng.</p>
      <p>Nếu vector ban đầu không có thành phần theo hướng vector riêng trội, phương pháp cũng có thể thất bại.</p>
    `,
    example: "Khi nào phương pháp lũy thừa hội tụ chậm?",
    solution: "Khi hai giá trị riêng lớn nhất theo trị tuyệt đối gần bằng nhau."
  },

  {
    id: "norm-and-distance",
    topic: "Trực giao",
    category: "Chương 6: Tích vô hướng",
    title: "Độ dài vector và khoảng cách",
    formula: "||v|| = √(v·v)",
    summary: "Tích vô hướng giúp đo độ dài vector và khoảng cách giữa hai vector.",
    content: `
      <p>Tích vô hướng không chỉ dùng để nhân hai vector, mà còn giúp đo độ dài.</p>
      <div class="math-box">||v|| = √(v·v)</div>
      <p>Khoảng cách giữa hai vector u và v là độ dài của hiệu u-v:</p>
      <div class="math-box">dist(u,v)=||u-v||</div>
      <p>Ý tưởng này rất quan trọng vì nó cho phép ta nói một nghiệm gần đúng tốt hay không.</p>
      <p>Trong bình phương nhỏ nhất, ta tìm vector Ax gần b nhất theo khoảng cách này.</p>
    `,
    example: "Độ dài của v=(3,4) là bao nhiêu?",
    solution: "||v||=√(3²+4²)=5."
  },

  {
    id: "angle-cosine-dot-product",
    topic: "Trực giao",
    category: "Chương 6: Tích vô hướng",
    title: "Góc giữa hai vector",
    formula: "u·v = ||u||||v||cosθ",
    summary: "Tích vô hướng cho biết góc giữa hai vector.",
    content: `
      <p>Với hai vector u và v khác vector 0, tích vô hướng liên hệ với góc θ giữa chúng:</p>
      <div class="math-box">u·v = ||u||||v||cosθ</div>
      <p>Nếu u·v > 0, góc giữa hai vector là góc nhọn.</p>
      <p>Nếu u·v < 0, góc giữa hai vector là góc tù.</p>
      <p>Nếu u·v = 0, hai vector vuông góc.</p>
    `,
    example: "Nếu u·v=0 và u,v khác 0 thì hai vector có quan hệ gì?",
    solution: "Hai vector vuông góc với nhau."
  },

  {
    id: "transpose-matrix",
    topic: "Trực giao",
    category: "Chương 6: Phần bù trực giao và chuyển vị",
    title: "Ma trận chuyển vị",
    formula: "Aᵀ",
    summary: "Ma trận chuyển vị đổi hàng thành cột và cột thành hàng.",
    content: `
      <p>Ma trận chuyển vị của A, ký hiệu Aᵀ, được tạo bằng cách đổi hàng thành cột.</p>
      <p>Nếu A là ma trận m×n thì Aᵀ là ma trận n×m.</p>
      <p>Chuyển vị xuất hiện nhiều trong tích vô hướng và phương trình chuẩn.</p>
      <p>Một tính chất quan trọng:</p>
      <div class="math-box">(Ax)·b = x·(Aᵀb)</div>
      <p>Nhờ chuyển vị, ta có thể viết các điều kiện vuông góc dưới dạng phương trình ma trận.</p>
    `,
    example: "Nếu A có kích thước 2×3 thì Aᵀ có kích thước bao nhiêu?",
    solution: "Aᵀ có kích thước 3×2."
  },

  {
    id: "fundamental-subspaces-transpose",
    topic: "Trực giao",
    category: "Chương 6: Phần bù trực giao và chuyển vị",
    title: "Liên hệ giữa Col(A), Null(Aᵀ)",
    formula: "Col(A)⊥ = Null(Aᵀ)",
    summary: "Phần bù trực giao của không gian cột liên hệ với không gian null của ma trận chuyển vị.",
    content: `
      <p>Không gian cột Col(A) gồm tất cả tổ hợp tuyến tính của các cột của A.</p>
      <p>Một vector y vuông góc với mọi cột của A khi và chỉ khi:</p>
      <div class="math-box">Aᵀy = 0</div>
      <p>Vì vậy:</p>
      <div class="math-box">Col(A)⊥ = Null(Aᵀ)</div>
      <p>Quan hệ này rất quan trọng trong bình phương nhỏ nhất, vì sai số b-Ax phải vuông góc với Col(A).</p>
    `,
    example: "Nếu y vuông góc với mọi cột của A thì y thuộc không gian nào?",
    solution: "y thuộc Null(Aᵀ)."
  },

  {
    id: "orthonormal-set",
    topic: "Trực giao",
    category: "Chương 6: Cơ sở vuông góc và phép chiếu",
    title: "Tập trực chuẩn",
    formula: "qᵢ·qⱼ = 0, ||qᵢ||=1",
    summary: "Tập trực chuẩn gồm các vector đôi một vuông góc và đều có độ dài bằng 1.",
    content: `
      <p>Một tập vector được gọi là trực giao nếu các vector khác nhau trong tập vuông góc với nhau.</p>
      <p>Nếu ngoài ra mỗi vector đều có độ dài bằng 1, ta gọi đó là tập trực chuẩn.</p>
      <div class="math-box">qᵢ·qⱼ = 0 khi i≠j, và ||qᵢ||=1</div>
      <p>Cơ sở trực chuẩn giúp tính tọa độ và phép chiếu đơn giản hơn rất nhiều.</p>
    `,
    example: "Hai vector q₁, q₂ trực chuẩn thì q₁·q₂ bằng bao nhiêu?",
    solution: "q₁·q₂ = 0."
  },

  {
    id: "orthogonal-projection-vector",
    topic: "Trực giao",
    category: "Chương 6: Cơ sở vuông góc và phép chiếu",
    title: "Phép chiếu lên một vector",
    formula: "proj_w(b) = (b·w / w·w)w",
    summary: "Phép chiếu tìm phần của vector b nằm theo hướng vector w.",
    content: `
      <p>Cho vector b và một vector w khác 0.</p>
      <p>Phép chiếu của b lên hướng w là:</p>
      <div class="math-box">proj_w(b) = (b·w / w·w)w</div>
      <p>Vector này nằm trên đường thẳng sinh bởi w.</p>
      <p>Hiệu b - proj_w(b) vuông góc với w.</p>
      <p>Đây là nền tảng để xây dựng phép chiếu lên không gian con lớn hơn.</p>
    `,
    example: "Nếu b vuông góc với w thì proj_w(b) bằng gì?",
    solution: "Bằng vector 0."
  },

  {
    id: "projection-onto-subspace",
    topic: "Trực giao",
    category: "Chương 6: Cơ sở vuông góc và phép chiếu",
    title: "Phép chiếu lên không gian con",
    formula: "b̂ = Σ (b·wᵢ / wᵢ·wᵢ)wᵢ",
    summary: "Nếu có cơ sở trực giao, ta chiếu vector lên từng hướng cơ sở rồi cộng lại.",
    content: `
      <p>Giả sử W có cơ sở trực giao w₁, w₂, ..., wₙ.</p>
      <p>Phép chiếu trực giao của b lên W là:</p>
      <div class="math-box">b̂ = Σ (b·wᵢ / wᵢ·wᵢ)wᵢ</div>
      <p>Vector b̂ là vector trong W gần b nhất.</p>
      <p>Sai số b - b̂ vuông góc với mọi vector trong W.</p>
      <p>Nếu cơ sở là trực chuẩn, công thức đơn giản hơn vì wᵢ·wᵢ = 1.</p>
    `,
    example: "b̂ có ý nghĩa gì trong phép chiếu lên W?",
    solution: "b̂ là vector trong W gần b nhất."
  },

  {
    id: "orthogonal-matrix",
    topic: "Trực giao",
    category: "Chương 6: Cơ sở vuông góc và phép chiếu",
    title: "Ma trận trực giao",
    formula: "QᵀQ = I",
    summary: "Ma trận trực giao có các cột tạo thành một cơ sở trực chuẩn.",
    content: `
      <p>Một ma trận Q được gọi là trực giao nếu các cột của nó tạo thành một cơ sở trực chuẩn.</p>
      <p>Điều kiện đại số là:</p>
      <div class="math-box">QᵀQ = I</div>
      <p>Khi Q vuông, ta có:</p>
      <div class="math-box">Q⁻¹ = Qᵀ</div>
      <p>Điều này làm việc đổi tọa độ và tính toán với Q trở nên đơn giản và ổn định.</p>
    `,
    example: "Nếu Q trực giao thì Q⁻¹ bằng gì?",
    solution: "Q⁻¹ = Qᵀ."
  },

  {
    id: "gram-schmidt",
    topic: "Trực giao",
    category: "Chương 6: Tìm cơ sở vuông góc",
    title: "Quy trình Gram-Schmidt",
    formula: "v₂ = x₂ - proj_v₁(x₂)",
    summary: "Gram-Schmidt biến một cơ sở bất kỳ thành cơ sở trực giao cho cùng không gian.",
    content: `
      <p>Gram-Schmidt là quy trình tạo cơ sở trực giao từ một tập vector độc lập tuyến tính.</p>
      <p>Ý tưởng là giữ vector đầu tiên, rồi lần lượt loại bỏ khỏi các vector sau phần đã nằm theo hướng trước đó.</p>
      <p>Ví dụ với hai vector x₁, x₂:</p>
      <div class="math-box">v₁ = x₁</div>
      <div class="math-box">v₂ = x₂ - proj_v₁(x₂)</div>
      <p>Khi đó v₂ vuông góc với v₁.</p>
      <p>Lặp lại quá trình này, ta được một cơ sở trực giao cho cùng không gian sinh ban đầu.</p>
    `,
    example: "Gram-Schmidt dùng để làm gì?",
    solution: "Dùng để tạo cơ sở trực giao hoặc trực chuẩn từ các vector độc lập tuyến tính."
  },

  {
    id: "qr-decomposition",
    topic: "Trực giao",
    category: "Chương 6: Tìm cơ sở vuông góc",
    title: "Phân tích QR",
    formula: "A = QR",
    summary: "QR viết ma trận thành tích của ma trận có cột trực chuẩn và ma trận tam giác trên.",
    content: `
      <p>Từ Gram-Schmidt, ta có thể phân tích một ma trận A thành:</p>
      <div class="math-box">A = QR</div>
      <p>Trong đó:</p>
      <ul>
        <li>Q có các cột trực chuẩn.</li>
        <li>R là ma trận tam giác trên.</li>
      </ul>
      <p>Phân tích QR hữu ích trong tính toán số và đặc biệt trong bài toán bình phương nhỏ nhất.</p>
    `,
    example: "Trong A=QR, Q có tính chất gì?",
    solution: "Các cột của Q là trực chuẩn."
  },

  {
    id: "least-squares",
    topic: "Trực giao",
    category: "Chương 6: Bình phương nhỏ nhất",
    title: "Bài toán bình phương nhỏ nhất",
    formula: "min ||Ax - b||",
    summary: "Khi Ax=b vô nghiệm, ta tìm x sao cho Ax gần b nhất.",
    content: `
      <p>Nhiều hệ Ax=b trong thực tế không có nghiệm chính xác.</p>
      <p>Khi đó ta tìm x sao cho Ax gần b nhất theo khoảng cách Euclid.</p>
      <div class="math-box">min ||Ax - b||</div>
      <p>Vector Ax nằm trong Col(A), nên bài toán trở thành tìm điểm trong Col(A) gần b nhất.</p>
      <p>Điểm gần nhất chính là phép chiếu trực giao của b lên Col(A).</p>
      <p>Phương pháp này là nền tảng của hồi quy tuyến tính trong khoa học dữ liệu.</p>
    `,
    example: "Bình phương nhỏ nhất dùng khi Ax=b có nghiệm chính xác không?",
    solution: "Thường dùng khi Ax=b vô nghiệm hoặc dữ liệu có sai số."
  },

  {
    id: "normal-equations",
    topic: "Trực giao",
    category: "Chương 6: Bình phương nhỏ nhất",
    title: "Phương trình chuẩn",
    formula: "AᵀAx = Aᵀb",
    summary: "Nghiệm bình phương nhỏ nhất thỏa mãn phương trình chuẩn.",
    content: `
      <p>Trong bình phương nhỏ nhất, ta muốn sai số:</p>
      <div class="math-box">r = b - Ax</div>
      <p>vuông góc với không gian cột Col(A).</p>
      <p>Điều đó tương đương với:</p>
      <div class="math-box">Aᵀ(b - Ax)=0</div>
      <p>Sắp xếp lại ta được phương trình chuẩn:</p>
      <div class="math-box">AᵀAx = Aᵀb</div>
      <p>Giải phương trình này cho ta nghiệm bình phương nhỏ nhất.</p>
    `,
    example: "Phương trình chuẩn của bài toán Ax≈b là gì?",
    solution: "AᵀAx = Aᵀb."
  },

  {
    id: "least-squares-line",
    topic: "Trực giao",
    category: "Chương 6: Bình phương nhỏ nhất",
    title: "Hồi quy tuyến tính bằng bình phương nhỏ nhất",
    formula: "y ≈ mx + c",
    summary: "Bình phương nhỏ nhất giúp tìm đường thẳng phù hợp nhất với dữ liệu.",
    content: `
      <p>Giả sử ta có nhiều điểm dữ liệu và muốn tìm đường thẳng gần các điểm đó nhất.</p>
      <div class="math-box">y ≈ mx + c</div>
      <p>Thông thường không có đường thẳng đi qua tất cả các điểm.</p>
      <p>Ta chọn m và c sao cho tổng bình phương sai số là nhỏ nhất.</p>
      <p>Đây là một ứng dụng quan trọng của phương trình chuẩn và phép chiếu trực giao.</p>
    `,
    example: "Trong hồi quy y≈mx+c, ta cần tìm những hệ số nào?",
    solution: "Ta cần tìm m và c."
  },

  {
    id: "symmetric-matrix",
    topic: "PCA và SVD",
    category: "Chương 7: Ma trận đối xứng và phương sai",
    title: "Ma trận đối xứng",
    formula: "Aᵀ = A",
    summary: "Ma trận đối xứng bằng chính chuyển vị của nó và có nhiều tính chất tốt về trị riêng.",
    content: `
      <p>Ma trận vuông A được gọi là đối xứng nếu:</p>
      <div class="math-box">Aᵀ = A</div>
      <p>Ma trận đối xứng có các giá trị riêng thực.</p>
      <p>Các vector riêng ứng với các giá trị riêng khác nhau vuông góc với nhau.</p>
      <p>Đặc biệt, ma trận đối xứng có thể chéo hóa bằng một ma trận trực giao.</p>
      <p>Tính chất này là nền tảng cho PCA và phân tích dữ liệu.</p>
    `,
    example: "Điều kiện để A là ma trận đối xứng là gì?",
    solution: "Aᵀ = A."
  },

  {
    id: "orthogonal-diagonalization",
    topic: "PCA và SVD",
    category: "Chương 7: Ma trận đối xứng và phương sai",
    title: "Chéo hóa trực giao",
    formula: "A = QDQᵀ",
    summary: "Ma trận đối xứng có thể viết bằng cơ sở trực chuẩn gồm các vector riêng.",
    content: `
      <p>Nếu A là ma trận đối xứng, ta có thể viết:</p>
      <div class="math-box">A = QDQᵀ</div>
      <p>Trong đó:</p>
      <ul>
        <li>Q là ma trận trực giao, có các cột là vector riêng trực chuẩn.</li>
        <li>D là ma trận đường chéo chứa các giá trị riêng.</li>
      </ul>
      <p>Vì Q⁻¹=Qᵀ nên dạng này rất tiện cho tính toán.</p>
      <p>Chéo hóa trực giao giúp hiểu ma trận như phép co giãn theo các trục vuông góc.</p>
    `,
    example: "Trong A=QDQᵀ, Q có tính chất gì?",
    solution: "Q là ma trận trực giao."
  },

  {
    id: "variance-covariance",
    topic: "PCA và SVD",
    category: "Chương 7: Ma trận đối xứng và phương sai",
    title: "Phương sai và hiệp phương sai",
    formula: "Cov(X,Y)",
    summary: "Phương sai đo độ phân tán của một biến, hiệp phương sai đo hai biến thay đổi cùng nhau thế nào.",
    content: `
      <p>Phương sai cho biết dữ liệu của một biến phân tán mạnh hay yếu quanh giá trị trung bình.</p>
      <p>Hiệp phương sai cho biết hai biến có xu hướng tăng giảm cùng nhau hay không.</p>
      <ul>
        <li>Hiệp phương sai dương: hai biến thường tăng cùng nhau.</li>
        <li>Hiệp phương sai âm: một biến tăng thì biến kia thường giảm.</li>
        <li>Hiệp phương sai gần 0: hai biến ít liên hệ tuyến tính.</li>
      </ul>
      <p>Trong PCA, phương sai và hiệp phương sai được gom vào ma trận hiệp phương sai.</p>
    `,
    example: "Hiệp phương sai dương nghĩa là gì?",
    solution: "Hai biến có xu hướng tăng hoặc giảm cùng nhau."
  },

  {
    id: "covariance-matrix",
    topic: "PCA và SVD",
    category: "Chương 7: Ma trận đối xứng và phương sai",
    title: "Ma trận hiệp phương sai",
    formula: "S = (1/(n-1))XᵀX",
    summary: "Ma trận hiệp phương sai ghi lại phương sai và hiệp phương sai của dữ liệu.",
    content: `
      <p>Ma trận hiệp phương sai là ma trận chứa thông tin về độ phân tán và mối quan hệ giữa các biến.</p>
      <p>Đường chéo chính chứa phương sai của từng biến.</p>
      <p>Các phần tử ngoài đường chéo chứa hiệp phương sai giữa các cặp biến.</p>
      <p>Ma trận hiệp phương sai là ma trận đối xứng.</p>
      <p>Trong PCA, ta tìm trị riêng và vector riêng của ma trận này để xác định các hướng dữ liệu biến thiên mạnh nhất.</p>
    `,
    example: "Đường chéo chính của ma trận hiệp phương sai chứa gì?",
    solution: "Chứa phương sai của từng biến."
  },

  {
    id: "quadratic-form",
    topic: "PCA và SVD",
    category: "Chương 7: Dạng bình phương bậc hai",
    title: "Dạng bình phương bậc hai",
    formula: "q(x)=xᵀAx",
    summary: "Dạng bình phương bậc hai dùng ma trận để mô tả một hàm có các số hạng bậc hai.",
    content: `
      <p>Với ma trận đối xứng A, biểu thức:</p>
      <div class="math-box">q(x)=xᵀAx</div>
      <p>được gọi là dạng bình phương bậc hai.</p>
      <p>Dạng này xuất hiện trong hình học, tối ưu hóa và phân tích dữ liệu.</p>
      <p>Khi chéo hóa trực giao A, ta có thể đổi hệ tọa độ để dạng bình phương trở nên đơn giản hơn.</p>
      <p>Các giá trị riêng cho biết mức độ co giãn theo những hướng chính.</p>
    `,
    example: "Dạng bình phương bậc hai thường có dạng công thức nào?",
    solution: "q(x)=xᵀAx."
  },

  {
    id: "principal-axes",
    topic: "PCA và SVD",
    category: "Chương 7: Dạng bình phương bậc hai",
    title: "Các trục chính",
    formula: "A = QDQᵀ",
    summary: "Các vector riêng của ma trận đối xứng cho ta các trục chính vuông góc.",
    content: `
      <p>Khi A là ma trận đối xứng, các vector riêng trực chuẩn tạo thành các hướng đặc biệt gọi là trục chính.</p>
      <p>Trong hệ trục chính, dạng bình phương bậc hai không còn các số hạng trộn như xy.</p>
      <p>Điều này giúp ta nhìn rõ hình dạng của dữ liệu hoặc đồ thị.</p>
      <p>Trong PCA, các trục chính chính là các hướng dữ liệu có phương sai lớn nhất.</p>
    `,
    example: "Các trục chính thường được tạo từ loại vector nào?",
    solution: "Từ các vector riêng trực chuẩn của ma trận đối xứng."
  },

  {
    id: "pca-idea",
    topic: "PCA và SVD",
    category: "Chương 7: Phân tích thành phần chính",
    title: "Ý tưởng PCA",
    formula: "thành phần chính",
    summary: "PCA tìm các hướng quan trọng nhất của dữ liệu để giảm chiều mà vẫn giữ nhiều thông tin.",
    content: `
      <p>PCA, hay phân tích thành phần chính, là phương pháp tìm các hướng mà dữ liệu biến thiên nhiều nhất.</p>
      <p>Các hướng đó gọi là thành phần chính.</p>
      <p>Thành phần chính thứ nhất là hướng có phương sai lớn nhất.</p>
      <p>Thành phần chính thứ hai vuông góc với thành phần thứ nhất và có phương sai lớn tiếp theo.</p>
      <p>Nhờ đó, ta có thể giảm số chiều dữ liệu mà vẫn giữ lại nhiều thông tin quan trọng.</p>
    `,
    example: "PCA dùng để làm gì?",
    solution: "Dùng để tìm các hướng quan trọng của dữ liệu và giảm chiều dữ liệu."
  },

  {
    id: "pca-steps",
    topic: "PCA và SVD",
    category: "Chương 7: Phân tích thành phần chính",
    title: "Các bước cơ bản của PCA",
    formula: "covariance → eigenvectors",
    summary: "PCA thường gồm chuẩn hóa dữ liệu, lập ma trận hiệp phương sai, rồi tìm trị riêng và vector riêng.",
    content: `
      <p>Các bước cơ bản của PCA thường là:</p>
      <ul>
        <li>Đưa dữ liệu về dạng ma trận.</li>
        <li>Trừ đi giá trị trung bình để dữ liệu được tâm hóa.</li>
        <li>Lập ma trận hiệp phương sai.</li>
        <li>Tìm giá trị riêng và vector riêng của ma trận hiệp phương sai.</li>
        <li>Chọn các vector riêng ứng với giá trị riêng lớn nhất.</li>
        <li>Chiếu dữ liệu lên các hướng đã chọn để giảm chiều.</li>
      </ul>
      <p>Giá trị riêng càng lớn thì hướng tương ứng giữ càng nhiều phương sai của dữ liệu.</p>
    `,
    example: "Trong PCA, ta thường chọn vector riêng ứng với giá trị riêng lớn hay nhỏ?",
    solution: "Chọn các vector riêng ứng với giá trị riêng lớn."
  },

  {
    id: "svd-introduction",
    topic: "PCA và SVD",
    category: "Chương 7: Phân tích giá trị kỳ dị",
    title: "Phân tích giá trị kỳ dị SVD",
    formula: "A = UΣVᵀ",
    summary: "SVD viết mọi ma trận thành tích của hai ma trận trực giao và một ma trận đường chéo.",
    content: `
      <p>SVD là viết tắt của Singular Value Decomposition, tức phân tích giá trị kỳ dị.</p>
      <p>Mọi ma trận A, kể cả không vuông, đều có thể viết dưới dạng:</p>
      <div class="math-box">A = UΣVᵀ</div>
      <p>Trong đó:</p>
      <ul>
        <li>U có các cột trực chuẩn ở không gian đầu ra.</li>
        <li>V có các cột trực chuẩn ở không gian đầu vào.</li>
        <li>Σ là ma trận đường chéo chứa các giá trị kỳ dị không âm.</li>
      </ul>
      <p>SVD giống như một phiên bản mở rộng của chéo hóa, nhưng áp dụng được cho nhiều loại ma trận hơn.</p>
    `,
    example: "Dạng chuẩn của SVD là gì?",
    solution: "A = UΣVᵀ."
  },

  {
    id: "singular-values",
    topic: "PCA và SVD",
    category: "Chương 7: Phân tích giá trị kỳ dị",
    title: "Giá trị kỳ dị",
    formula: "σᵢ = √λᵢ",
    summary: "Giá trị kỳ dị là các hệ số co giãn chính của ma trận.",
    content: `
      <p>Các số trên đường chéo của Σ trong SVD gọi là giá trị kỳ dị.</p>
      <p>Chúng luôn không âm và thường được sắp xếp từ lớn đến nhỏ.</p>
      <p>Giá trị kỳ dị cho biết ma trận A co giãn dữ liệu mạnh thế nào theo các hướng chính.</p>
      <p>Nếu λᵢ là giá trị riêng của AᵀA, thì giá trị kỳ dị tương ứng là:</p>
      <div class="math-box">σᵢ = √λᵢ</div>
      <p>Giá trị kỳ dị lớn giữ nhiều thông tin quan trọng hơn.</p>
    `,
    example: "Giá trị kỳ dị có thể âm không?",
    solution: "Không. Giá trị kỳ dị luôn không âm."
  },

  {
    id: "low-rank-approximation",
    topic: "PCA và SVD",
    category: "Chương 7: Sử dụng SVD",
    title: "Xấp xỉ hạng thấp",
    formula: "A ≈ A_k",
    summary: "Giữ lại vài giá trị kỳ dị lớn nhất giúp xấp xỉ ma trận bằng dữ liệu ít hơn.",
    content: `
      <p>SVD cho phép ta xấp xỉ ma trận A bằng một ma trận đơn giản hơn.</p>
      <p>Ta giữ lại k giá trị kỳ dị lớn nhất và bỏ các giá trị nhỏ hơn.</p>
      <div class="math-box">A ≈ A_k</div>
      <p>Ma trận A_k có hạng thấp hơn A nhưng vẫn giữ nhiều thông tin quan trọng.</p>
      <p>Ý tưởng này dùng trong nén ảnh, giảm nhiễu dữ liệu và hệ thống gợi ý.</p>
    `,
    example: "Trong xấp xỉ hạng thấp, ta giữ giá trị kỳ dị lớn hay nhỏ?",
    solution: "Giữ các giá trị kỳ dị lớn nhất."
  },

  {
    id: "svd-image-compression-theory",
    topic: "PCA và SVD",
    category: "Chương 7: Sử dụng SVD",
    title: "Nén ảnh bằng SVD",
    formula: "A ≈ U_kΣ_kV_kᵀ",
    summary: "SVD có thể nén ảnh bằng cách giữ lại các thành phần quan trọng nhất của ma trận ảnh.",
    content: `
      <p>Một ảnh xám có thể xem là một ma trận, trong đó mỗi phần tử biểu diễn độ sáng của một điểm ảnh.</p>
      <p>Khi áp dụng SVD:</p>
      <div class="math-box">A = UΣVᵀ</div>
      <p>ta có thể giữ lại k giá trị kỳ dị lớn nhất để tạo ảnh xấp xỉ:</p>
      <div class="math-box">A ≈ U_kΣ_kV_kᵀ</div>
      <p>Nếu k nhỏ hơn nhiều so với kích thước ảnh, ta lưu ít dữ liệu hơn nhưng vẫn giữ được hình ảnh gần giống ban đầu.</p>
    `,
    example: "Vì sao SVD giúp nén ảnh?",
    solution: "Vì ta có thể giữ vài giá trị kỳ dị lớn nhất và bỏ phần ít quan trọng hơn."
  },

  {
    id: "moore-penrose-pseudoinverse",
    topic: "PCA và SVD",
    category: "Chương 7: Sử dụng SVD",
    title: "Nghịch đảo giả Moore-Penrose",
    formula: "A⁺",
    summary: "Nghịch đảo giả mở rộng ý tưởng ma trận nghịch đảo cho ma trận không vuông hoặc không khả nghịch.",
    content: `
      <p>Không phải ma trận nào cũng có nghịch đảo thông thường.</p>
      <p>Với ma trận không vuông hoặc không khả nghịch, ta có thể dùng nghịch đảo giả Moore-Penrose, ký hiệu:</p>
      <div class="math-box">A⁺</div>
      <p>SVD cung cấp một cách tự nhiên để xây dựng A⁺.</p>
      <p>Nghịch đảo giả đặc biệt hữu ích trong bài toán bình phương nhỏ nhất và xử lý dữ liệu.</p>
      <p>Nó giúp tìm nghiệm gần đúng hoặc nghiệm có độ dài nhỏ nhất trong nhiều tình huống.</p>
    `,
    example: "A⁺ thường dùng khi nào?",
    solution: "Khi A không vuông hoặc không có nghịch đảo thông thường."
  },
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
          <li>Nếu hệ không có hàng mâu thuẫn và có ít nhất một biến tự do thì hệ có vô số nghiệm.</li>
          <li>Nếu có hàng dạng [0 0 ... 0 | c] với c ≠ 0 thì hệ vô nghiệm.</li>
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
    video: "videos/MatrixMatrixProductProVN.mp4",
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
    video: "videos/SpanProVN.mp4",
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
    video: "videos/LinearIndependenceProVN.mp4",
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
    video: "videos/MatrixTransformProVN.mp4",
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
      <p>Với ma trận vuông 2×2, nếu det(A) ≠ 0 thì A khả nghịch.</p>
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
    id: "inverse-rref",
    topic: "Ma trận",
    category: "Chương 3: Tính khả nghịch",
    title: "Tìm ma trận nghịch đảo bằng RREF",
    formula: "[A | I] → [I | A⁻¹]",
    summary: "Có thể tìm ma trận nghịch đảo bằng cách ghép A với ma trận đơn vị rồi khử Gauss.",
    content: `
      <p>Nếu A là ma trận vuông khả nghịch, ta có thể tìm A⁻¹ bằng cách ghép A với ma trận đơn vị I.</p>
      <div class="math-box">[A | I]</div>
      <p>Sau đó dùng các phép biến đổi hàng sơ cấp để đưa vế trái về ma trận đơn vị.</p>
      <div class="math-box">[A | I] → [I | A⁻¹]</div>
      <p>Nếu không thể đưa A về I thì A không khả nghịch.</p>
      <p>Ý tưởng chính: các phép biến đổi hàng biến A thành I, và cùng lúc biến I thành A⁻¹.</p>
    `,
    example: "Nếu [A | I] sau khi khử Gauss thành [I | B] thì B là gì?",
    solution: "B chính là ma trận nghịch đảo của A, tức là B = A⁻¹."
  },

  {
    id: "inverse-conditions",
    topic: "Ma trận",
    category: "Chương 3: Tính khả nghịch",
    title: "Các điều kiện nhận biết ma trận khả nghịch",
    formula: "A ~ I",
    summary: "Ma trận vuông khả nghịch khi dạng bậc thang rút gọn của nó là ma trận đơn vị.",
    content: `
      <p>Với ma trận vuông A, có nhiều cách để nhận biết A có khả nghịch hay không.</p>
      <ul>
        <li>A khả nghịch nếu dạng bậc thang rút gọn của A là ma trận đơn vị I.</li>
        <li>A khả nghịch nếu A có pivot ở mọi hàng và mọi cột.</li>
        <li>A khả nghịch nếu phương trình Ax=b có nghiệm duy nhất với mọi vector b phù hợp.</li>
        <li>A khả nghịch nếu các cột của A độc lập tuyến tính và sinh ra toàn bộ không gian.</li>
      </ul>
      <p>Nói ngắn gọn: nếu A bị thiếu pivot thì A không có đủ thông tin để đảo ngược phép biến đổi.</p>
    `,
    example: "Nếu RREF(A) = I thì A có khả nghịch không?",
    solution: "Có. Vì A hàng tương đương với ma trận đơn vị nên A khả nghịch."
  },

  {
    id: "basis-rref-test",
    topic: "Không gian vector",
    category: "Chương 3: Cơ sở và hệ tọa độ",
    title: "Kiểm tra cơ sở bằng ma trận",
    formula: "A = [v₁ v₂ ... vₙ]",
    summary: "Một tập vector là cơ sở nếu ma trận tạo bởi các vector đó có đủ pivot.",
    content: `
      <p>Để kiểm tra các vector v₁, v₂, ..., vₙ có tạo thành cơ sở hay không, ta đặt chúng làm các cột của một ma trận.</p>
      <div class="math-box">A = [v₁ v₂ ... vₙ]</div>
      <p>Sau đó đưa A về dạng bậc thang rút gọn.</p>
      <ul>
        <li>Nếu các cột có đủ pivot để vừa sinh ra không gian vừa độc lập tuyến tính, chúng tạo thành cơ sở.</li>
        <li>Trong R², một cơ sở cần đúng 2 vector độc lập tuyến tính.</li>
        <li>Trong R³, một cơ sở cần đúng 3 vector độc lập tuyến tính.</li>
        <li>Trong Rᵐ, một cơ sở cần đúng m vector độc lập tuyến tính.</li>
      </ul>
      <p>Cơ sở chuẩn của Rᵐ là e₁, e₂, ..., eₘ, tức là các cột của ma trận đơn vị.</p>
    `,
    example: "Hai vector (1,0) và (0,1) có tạo thành cơ sở của R² không?",
    solution: "Có. Khi đặt làm cột, ta được ma trận đơn vị I, nên chúng tạo thành cơ sở chuẩn của R²."
  },

  {
    id: "coordinate-change",
    topic: "Không gian vector",
    category: "Chương 3: Cơ sở và hệ tọa độ",
    title: "Chuyển đổi tọa độ theo cơ sở",
    formula: "x = c₁b₁ + c₂b₂ + ... + cₙbₙ",
    summary: "Tọa độ theo cơ sở cho biết cần bao nhiêu lần mỗi vector cơ sở để tạo ra vector ban đầu.",
    content: `
      <p>Một cơ sở B = {b₁, b₂, ..., bₙ} tạo ra một hệ tọa độ mới.</p>
      <p>Nếu vector x được viết dưới dạng:</p>
      <div class="math-box">x = c₁b₁ + c₂b₂ + ... + cₙbₙ</div>
      <p>thì tọa độ của x theo cơ sở B là:</p>
      <div class="math-box">[x]ᵦ = (c₁, c₂, ..., cₙ)</div>
      <p>Muốn đổi từ tọa độ theo cơ sở B sang tọa độ chuẩn, ta lấy tổ hợp tuyến tính của các vector cơ sở.</p>
      <p>Muốn tìm tọa độ của x theo B, ta giải hệ phương trình có các cột là các vector cơ sở.</p>
    `,
    example: "Nếu B={b₁,b₂} và x=4b₁-3b₂ thì [x]ᵦ bằng gì?",
    solution: "[x]ᵦ = (4,-3), vì 4 và -3 là hai hệ số trước b₁ và b₂."
  },

  {
    id: "image-compression-basis",
    topic: "Ứng dụng",
    category: "Chương 3: Nén hình ảnh",
    title: "Nén hình ảnh và cơ sở phù hợp",
    formula: "dữ liệu ảnh → tọa độ theo cơ sở mới",
    summary: "Nén ảnh dùng ý tưởng đổi hệ tọa độ để biểu diễn dữ liệu ảnh gọn hơn.",
    content: `
      <p>Một hình ảnh trên máy tính có thể được lưu bằng các con số. Ví dụ, màu sắc có thể biểu diễn bằng các giá trị đỏ, xanh lá và xanh lam.</p>
      <p>Tuy nhiên, để nén ảnh tốt hơn, ta có thể đổi sang một cách biểu diễn khác phù hợp hơn với thị giác và dữ liệu ảnh.</p>
      <p>Ý tưởng đại số tuyến tính ở đây là:</p>
      <ul>
        <li>Biểu diễn dữ liệu ảnh bằng vector hoặc ma trận.</li>
        <li>Chọn một cơ sở mới phù hợp hơn với dữ liệu.</li>
        <li>Trong cơ sở mới, nhiều tọa độ có thể rất nhỏ hoặc ít quan trọng.</li>
        <li>Ta giữ phần quan trọng và bỏ bớt phần ít quan trọng để giảm dung lượng.</li>
      </ul>
      <p>Vì vậy, nén ảnh không chỉ là giảm chất lượng ngẫu nhiên, mà là chọn cách biểu diễn thông minh để giữ lại nhiều thông tin quan trọng nhất.</p>
    `,
    example: "Vì sao đổi cơ sở có thể giúp nén ảnh?",
    solution: "Vì trong cơ sở phù hợp, dữ liệu ảnh có thể được mô tả bằng ít tọa độ quan trọng hơn."
  },

  {
    id: "determinant-geometry",
    topic: "Định thức",
    category: "Chương 3: Định thức",
    title: "Ý nghĩa hình học của định thức",
    formula: "|det(A)|",
    summary: "Định thức cho biết phép biến đổi ma trận làm thay đổi diện tích như thế nào.",
    content: `
      <p>Với ma trận 2×2, hai cột của ma trận có thể xem là hai vector trong mặt phẳng.</p>
      <p>Hai vector này tạo thành một hình bình hành.</p>
      <p>Giá trị tuyệt đối của định thức chính là diện tích của hình bình hành đó.</p>
      <div class="math-box">diện tích = |det(A)|</div>
      <p>Nếu det(A) = 0, hình bình hành bị ép thành một đường thẳng hoặc một điểm, nên diện tích bằng 0.</p>
      <p>Điều này cho thấy phép biến đổi A đã làm “sập” không gian, nên A không thể đảo ngược.</p>
    `,
    example: "Nếu det(A)=0 thì hình bình hành tạo bởi hai cột của A có diện tích bao nhiêu?",
    solution: "Diện tích bằng 0, nên hai cột phụ thuộc tuyến tính và A không khả nghịch."
  },

  {
    id: "determinant-properties",
    topic: "Định thức",
    category: "Chương 3: Định thức",
    title: "Một số tính chất quan trọng của định thức",
    formula: "det(AB)=det(A)det(B)",
    summary: "Định thức có các quy tắc giúp tính nhanh và kiểm tra tính khả nghịch.",
    content: `
      <p>Định thức có một số tính chất rất quan trọng:</p>
      <ul>
        <li>Định thức của ma trận tam giác bằng tích các phần tử trên đường chéo chính.</li>
        <li>Khi đổi chỗ hai hàng, dấu của định thức đổi.</li>
        <li>Khi nhân một hàng với số k, định thức cũng bị nhân với k.</li>
        <li>Khi cộng bội của một hàng vào hàng khác, định thức không đổi.</li>
        <li>Với hai ma trận vuông cùng kích thước: det(AB)=det(A)det(B).</li>
      </ul>
      <p>Các tính chất này giúp ta tính định thức bằng khử Gauss thay vì phải dùng công thức dài.</p>
    `,
    example: "Ma trận tam giác có đường chéo chính là 2, 3, -1 thì định thức bằng bao nhiêu?",
    solution: "det = 2·3·(-1) = -6."
  },

  {
    id: "determinant-invertible",
    topic: "Định thức",
    category: "Chương 3: Định thức",
    title: "Định thức và tính khả nghịch",
    formula: "A khả nghịch ⇔ det(A) ≠ 0",
    summary: "Định thức khác 0 là dấu hiệu quan trọng cho biết ma trận vuông khả nghịch.",
    content: `
      <p>Định thức cho ta một cách kiểm tra nhanh ma trận vuông có khả nghịch hay không.</p>
      <div class="math-box">A khả nghịch ⇔ det(A) ≠ 0</div>
      <p>Nếu det(A)=0 thì A không khả nghịch.</p>
      <p>Nếu det(A)≠0 thì A khả nghịch.</p>
      <p>Về hình học, det(A)=0 nghĩa là phép biến đổi A làm mất chiều hoặc làm sập diện tích/thể tích về 0.</p>
      <p>Về đại số, det(A)=0 thường đi cùng với việc các cột của A phụ thuộc tuyến tính.</p>
    `,
    example: "Nếu det(A)=-5 thì A có khả nghịch không?",
    solution: "Có. Vì det(A) khác 0 nên A khả nghịch."
  },

  {
    id: "cofactor-expansion",
    topic: "Định thức",
    category: "Chương 3: Định thức",
    title: "Khai triển định thức theo phần bù",
    formula: "det(A)=a₁₁C₁₁+a₁₂C₁₂+...",
    summary: "Khai triển theo phần bù là một cách tính định thức cho ma trận lớn hơn 2×2.",
    content: `
      <p>Với ma trận lớn hơn 2×2, ta có thể tính định thức bằng cách khai triển theo một hàng hoặc một cột.</p>
      <p>Ý tưởng là tách định thức lớn thành nhiều định thức nhỏ hơn.</p>
      <div class="math-box">det(A)=a₁₁C₁₁+a₁₂C₁₂+...+a₁ₙC₁ₙ</div>
      <p>Trong đó Cᵢⱼ là phần bù đại số ứng với phần tử aᵢⱼ.</p>
      <p>Khi mới học, cách dễ hơn thường là dùng biến đổi hàng để đưa ma trận về dạng tam giác rồi nhân đường chéo.</p>
    `,
    example: "Vì sao ma trận tam giác dễ tính định thức?",
    solution: "Vì định thức của ma trận tam giác bằng tích các phần tử trên đường chéo chính."
  },

  {
    id: "subspace",
    topic: "Không gian vector",
    category: "Chương 3: Không gian con",
    title: "Không gian con",
    formula: "S = span(v₁,v₂,...,vₙ)",
    summary: "Không gian con là một tập vector có thể tạo ra từ tổ hợp tuyến tính của một số vector.",
    content: `
      <p>Một không gian con của Rᵖ là một tập con có thể viết dưới dạng span của một tập vector.</p>
      <div class="math-box">S = span(v₁,v₂,...,vₙ)</div>
      <p>Điều này nghĩa là mọi vector trong S đều có thể tạo ra bằng tổ hợp tuyến tính của các vector v₁, v₂, ..., vₙ.</p>
      <p>Một không gian con luôn chứa vector 0.</p>
      <p>Ví dụ trong R²:</p>
      <ul>
        <li>Chỉ riêng vector 0 là một không gian con.</li>
        <li>Một đường thẳng đi qua gốc tọa độ là một không gian con.</li>
        <li>Toàn bộ R² cũng là một không gian con.</li>
      </ul>
      <p>Một đường thẳng không đi qua gốc tọa độ không phải là không gian con.</p>
    `,
    example: "Đường thẳng y=x trong R² có là không gian con không?",
    solution: "Có. Vì nó đi qua gốc tọa độ và có thể viết là span((1,1))."
  },

  {
    id: "subspace-basis-dimension",
    topic: "Không gian vector",
    category: "Chương 3: Không gian con",
    title: "Cơ sở và chiều của không gian con",
    formula: "dim(S)",
    summary: "Chiều của không gian con là số vector trong một cơ sở của không gian con đó.",
    content: `
      <p>Một cơ sở của không gian con S là một tập vector thỏa mãn hai điều kiện:</p>
      <ul>
        <li>Các vector đó sinh ra S.</li>
        <li>Các vector đó độc lập tuyến tính.</li>
      </ul>
      <p>Chiều của S, ký hiệu dim(S), là số vector trong một cơ sở của S.</p>
      <p>Ví dụ:</p>
      <ul>
        <li>{0} có chiều 0.</li>
        <li>Một đường thẳng qua gốc trong R³ có chiều 1.</li>
        <li>Một mặt phẳng qua gốc trong R³ có chiều 2.</li>
        <li>Toàn bộ R³ có chiều 3.</li>
      </ul>
    `,
    example: "Nếu S = span((1,0,0),(0,1,0)) thì dim(S) bằng bao nhiêu?",
    solution: "dim(S)=2, vì hai vector này độc lập tuyến tính và sinh ra một mặt phẳng qua gốc."
  },

  {
    id: "column-space",
    topic: "Không gian vector",
    category: "Chương 3: Không gian con",
    title: "Không gian cột của ma trận",
    formula: "Col(A)",
    summary: "Không gian cột là span của các cột trong ma trận A.",
    content: `
      <p>Nếu A là ma trận m×n, các cột của A là các vector trong Rᵐ.</p>
      <p>Không gian cột của A, ký hiệu Col(A), là tập tất cả tổ hợp tuyến tính của các cột của A.</p>
      <div class="math-box">Col(A) = span(các cột của A)</div>
      <p>Không gian cột cho biết những vector b nào có thể xuất hiện ở vế phải để hệ Ax=b có nghiệm.</p>
      <p>Nếu b thuộc Col(A), phương trình Ax=b có nghiệm.</p>
      <p>Nếu b không thuộc Col(A), phương trình Ax=b vô nghiệm.</p>
      <p>Một cơ sở của Col(A) được lấy từ các cột gốc của A có chứa pivot.</p>
    `,
    example: "Nếu b thuộc Col(A) thì Ax=b có nghiệm không?",
    solution: "Có. Vì b là tổ hợp tuyến tính của các cột của A nên tồn tại x sao cho Ax=b."
  },

  {
    id: "rank",
    topic: "Ma trận",
    category: "Chương 3: Không gian con",
    title: "Hạng của ma trận",
    formula: "rank(A)",
    summary: "Hạng của ma trận là số vị trí pivot, cũng là chiều của không gian cột.",
    content: `
      <p>Hạng của ma trận A, ký hiệu rank(A), là số lượng vị trí pivot của A.</p>
      <div class="math-box">rank(A) = số pivot của A</div>
      <p>Hạng cũng bằng chiều của không gian cột:</p>
      <div class="math-box">dim Col(A) = rank(A)</div>
      <p>Nếu rank(A) lớn, các cột của A tạo ra được nhiều hướng hơn.</p>
      <p>Nếu rank(A) nhỏ, nhiều cột của A là dư thừa vì chúng có thể viết từ các cột khác.</p>
    `,
    example: "Nếu A có 3 pivot thì rank(A) bằng bao nhiêu?",
    solution: "rank(A)=3."
  },

  {
    id: "null-space",
    topic: "Không gian vector",
    category: "Chương 3: Không gian con",
    title: "Không gian null của ma trận",
    formula: "Null(A) = {x | Ax = 0}",
    summary: "Không gian null là tập nghiệm của phương trình thuần nhất Ax=0.",
    content: `
      <p>Không gian null của ma trận A, ký hiệu Null(A), là tập tất cả vector x sao cho:</p>
      <div class="math-box">Ax = 0</div>
      <p>Nói cách khác:</p>
      <div class="math-box">Null(A) = {x | Ax = 0}</div>
      <p>Không gian null cho biết những vector nào bị A biến thành vector 0.</p>
      <p>Để tìm cơ sở của Null(A), ta giải hệ Ax=0, viết nghiệm dưới dạng tham số, rồi lấy các vector sinh từ các tham số đó.</p>
      <p>Nếu Null(A) chỉ có vector 0 thì các cột của A độc lập tuyến tính.</p>
    `,
    example: "Vector x thuộc Null(A) khi nào?",
    solution: "Khi Ax=0."
  },

  {
    id: "rank-nullity",
    topic: "Ma trận",
    category: "Chương 3: Không gian con",
    title: "Liên hệ giữa hạng và không gian null",
    formula: "dim Col(A) + dim Null(A) = n",
    summary: "Số cột của A được chia thành số pivot và số biến tự do.",
    content: `
      <p>Nếu A là ma trận m×n thì n là số cột của A.</p>
      <p>Số cột này được chia thành hai phần:</p>
      <ul>
        <li>Số cột có pivot: rank(A).</li>
        <li>Số cột không có pivot: số biến tự do.</li>
      </ul>
      <p>Chiều của Null(A) bằng số biến tự do:</p>
      <div class="math-box">dim Null(A) = n - rank(A)</div>
      <p>Vì dim Col(A)=rank(A), ta có công thức:</p>
      <div class="math-box">dim Col(A) + dim Null(A) = n</div>
      <p>Công thức này giúp liên hệ giữa không gian cột, không gian null, pivot và biến tự do.</p>
    `,
    example: "A có 5 cột và rank(A)=3. Tính dim Null(A).",
    solution: "dim Null(A)=5-3=2."
  },
  {
    id: "eigen",
    topic: "Giá trị riêng",
    category: "Chương 4: Giá trị riêng và vector riêng",
    title: "Giá trị riêng và vector riêng",
    formula: "Av = λv",
    summary: "Vector riêng là vector khác 0 mà sau khi nhân với ma trận, ảnh của nó vẫn nằm trên cùng một đường thẳng với vector ban đầu.",
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
    id: "eigen-geometric-meaning",
    topic: "Giá trị riêng",
    category: "Chương 4: Giá trị riêng và vector riêng",
    title: "Ý nghĩa hình học của vector riêng",
    formula: "Av = λv",
    summary: "Vector riêng là hướng đặc biệt không bị lệch khỏi đường thẳng ban đầu sau biến đổi.",
    content: `
      <p>Khi nhân ma trận A với một vector bất kỳ, vector đó thường bị đổi cả độ dài lẫn hướng.</p>
      <p>Tuy nhiên, có một số vector đặc biệt sau khi nhân với A vẫn nằm trên cùng một đường thẳng với ban đầu.</p>
      <p>Các vector đặc biệt đó gọi là vector riêng.</p>
      <div class="math-box">Av = λv</div>
      <p>Trong đó:</p>
      <ul>
        <li>v là vector riêng và v không được là vector 0.</li>
        <li>λ là giá trị riêng tương ứng với v.</li>
      </ul>
      <p>Nếu λ dương, vector giữ cùng chiều và bị kéo dài hoặc co ngắn.</p>
      <p>Nếu λ âm, vector bị đổi chiều.</p>
      <p>Nếu |λ| lớn hơn 1, vector dài ra. Nếu |λ| nhỏ hơn 1, vector ngắn lại.</p>
    `,
    example: "Nếu Av = -2v thì điều gì xảy ra với vector v?",
    solution: "Vector v là vector riêng. Sau biến đổi, nó bị kéo dài gấp 2 lần và đổi chiều."
  },

  {
    id: "find-eigenvalues",
    topic: "Giá trị riêng",
    category: "Chương 4: Tìm giá trị riêng và vector riêng",
    title: "Tìm giá trị riêng bằng phương trình đặc trưng",
    formula: "det(A - λI) = 0",
    summary: "Giá trị riêng của ma trận A là nghiệm của phương trình det(A - λI)=0.",
    content: `
      <p>Để tìm giá trị riêng của ma trận vuông A, ta bắt đầu từ công thức:</p>
      <div class="math-box">Av = λv</div>
      <p>Chuyển vế:</p>
      <div class="math-box">Av - λv = 0</div>
      <p>Vì λv = λIv nên:</p>
      <div class="math-box">(A - λI)v = 0</div>
      <p>Để có vector riêng v khác 0, ma trận A - λI phải không khả nghịch.</p>
      <p>Vì vậy ta giải phương trình:</p>
      <div class="math-box">det(A - λI) = 0</div>
      <p>Phương trình này gọi là phương trình đặc trưng.</p>
      <p>Các nghiệm λ của phương trình đặc trưng chính là các giá trị riêng của A.</p>
    `,
    example: "Muốn tìm giá trị riêng của A, ta giải phương trình nào?",
    solution: "Ta giải phương trình đặc trưng det(A - λI) = 0."
  },

  {
    id: "characteristic-polynomial",
    topic: "Giá trị riêng",
    category: "Chương 4: Tìm giá trị riêng và vector riêng",
    title: "Đa thức đặc trưng",
    formula: "p(λ)=det(A - λI)",
    summary: "Đa thức đặc trưng chứa thông tin để tìm các giá trị riêng của ma trận.",
    content: `
      <p>Với ma trận vuông A kích thước n×n, biểu thức:</p>
      <div class="math-box">p(λ)=det(A - λI)</div>
      <p>được gọi là đa thức đặc trưng của A.</p>
      <p>Đa thức này thường có bậc n.</p>
      <p>Để tìm giá trị riêng, ta giải:</p>
      <div class="math-box">p(λ)=0</div>
      <p>Nếu λ là nghiệm của đa thức đặc trưng thì λ là một giá trị riêng của A.</p>
      <p>Đa thức đặc trưng rất quan trọng vì nó biến bài toán tìm vector đặc biệt thành bài toán giải phương trình.</p>
    `,
    example: "Nếu p(λ)=(λ-2)(λ+1) thì các giá trị riêng là gì?",
    solution: "Các giá trị riêng là λ=2 và λ=-1."
  },

  {
    id: "find-eigenvectors",
    topic: "Giá trị riêng",
    category: "Chương 4: Tìm giá trị riêng và vector riêng",
    title: "Tìm vector riêng",
    formula: "(A - λI)v = 0",
    summary: "Sau khi tìm được λ, vector riêng được tìm bằng cách giải hệ thuần nhất.",
    content: `
      <p>Sau khi tìm được một giá trị riêng λ, ta tìm vector riêng tương ứng bằng cách giải hệ:</p>
      <div class="math-box">(A - λI)v = 0</div>
      <p>Đây là một hệ phương trình tuyến tính thuần nhất.</p>
      <p>Tập nghiệm khác vector 0 của hệ này chính là các vector riêng ứng với λ.</p>
      <p>Các bước thường làm:</p>
      <ul>
        <li>Bước 1: Tính A - λI.</li>
        <li>Bước 2: Giải hệ (A - λI)v = 0.</li>
        <li>Bước 3: Lấy các nghiệm khác vector 0 làm vector riêng.</li>
      </ul>
      <p>Lưu ý: vector 0 không được gọi là vector riêng, dù nó luôn thỏa mãn phương trình.</p>
    `,
    example: "Sau khi biết λ=3 là giá trị riêng của A, ta tìm vector riêng bằng cách nào?",
    solution: "Ta giải hệ (A - 3I)v = 0 và lấy nghiệm v khác vector 0."
  },

  {
    id: "eigenspace",
    topic: "Giá trị riêng",
    category: "Chương 4: Tìm giá trị riêng và vector riêng",
    title: "Không gian riêng",
    formula: "Eλ = Null(A - λI)",
    summary: "Không gian riêng là tập các vector riêng ứng với cùng một giá trị riêng, kèm vector 0.",
    content: `
      <p>Với một giá trị riêng λ của ma trận A, tập nghiệm của hệ:</p>
      <div class="math-box">(A - λI)v = 0</div>
      <p>được gọi là không gian riêng ứng với λ.</p>
      <div class="math-box">Eλ = Null(A - λI)</div>
      <p>Không gian riêng gồm:</p>
      <ul>
        <li>vector 0,</li>
        <li>tất cả vector riêng ứng với λ.</li>
      </ul>
      <p>Nói đơn giản, không gian riêng là tập tất cả các hướng bị ma trận A biến đổi theo cùng một hệ số λ.</p>
      <p>Vì là nghiệm của một hệ thuần nhất, không gian riêng là một không gian con.</p>
    `,
    example: "E₂ = Null(A - 2I) có nghĩa là gì?",
    solution: "Đó là không gian riêng ứng với giá trị riêng λ=2."
  },

  {
    id: "algebraic-multiplicity",
    topic: "Giá trị riêng",
    category: "Chương 4: Tìm giá trị riêng và vector riêng",
    title: "Bội của giá trị riêng",
    formula: "(λj - λ)^mj",
    summary: "Bội cho biết một giá trị riêng xuất hiện bao nhiêu lần trong đa thức đặc trưng.",
    content: `
      <p>Khi phân tích đa thức đặc trưng, một giá trị riêng có thể xuất hiện nhiều hơn một lần.</p>
      <p>Nếu thừa số ứng với λ xuất hiện m lần, ta nói λ có bội bằng m.</p>
      <p>Ví dụ:</p>
      <div class="math-box">p(λ)=(λ-2)²(λ+1)</div>
      <p>Ở đây λ=2 có bội 2, còn λ=-1 có bội 1.</p>
      <p>Bội giúp ta hiểu cấu trúc của ma trận và liên quan đến việc ma trận có chéo hóa được hay không.</p>
      <p>Nếu một ma trận n×n có n giá trị riêng thực khác nhau, thì thường ta có đủ vector riêng để tạo thành một cơ sở.</p>
    `,
    example: "p(λ)=(λ-4)³(λ+2) thì λ=4 có bội bao nhiêu?",
    solution: "λ=4 có bội 3."
  },

  {
    id: "eigenbasis",
    topic: "Giá trị riêng",
    category: "Chương 4: Chéo hóa",
    title: "Cơ sở gồm các vector riêng",
    formula: "B = {v₁, v₂, ..., vₙ}",
    summary: "Nếu có đủ vector riêng độc lập tuyến tính, ta có thể dùng chúng làm một cơ sở mới.",
    content: `
      <p>Một ý tưởng quan trọng của chương 4 là dùng vector riêng để tạo cơ sở.</p>
      <p>Nếu ma trận A có n vector riêng độc lập tuyến tính trong Rⁿ, ta có thể tạo cơ sở:</p>
      <div class="math-box">B = {v₁, v₂, ..., vₙ}</div>
      <p>Trong cơ sở này, phép biến đổi bởi A trở nên rất đơn giản.</p>
      <p>Mỗi vector riêng chỉ bị nhân với giá trị riêng tương ứng:</p>
      <div class="math-box">Avᵢ = λᵢvᵢ</div>
      <p>Vì vậy, thay vì xem A như một phép biến đổi phức tạp, ta xem nó như phép co giãn theo các hướng riêng.</p>
    `,
    example: "Nếu A có 3 vector riêng độc lập tuyến tính trong R³ thì các vector đó có thể tạo thành gì?",
    solution: "Chúng có thể tạo thành một cơ sở của R³."
  },

  {
    id: "similar-matrices",
    topic: "Giá trị riêng",
    category: "Chương 4: Chéo hóa",
    title: "Ma trận tương tự",
    formula: "B = P⁻¹AP",
    summary: "Hai ma trận tương tự biểu diễn cùng một phép biến đổi nhưng trong hai hệ tọa độ khác nhau.",
    content: `
      <p>Hai ma trận A và B được gọi là tương tự nếu tồn tại ma trận khả nghịch P sao cho:</p>
      <div class="math-box">B = P⁻¹AP</div>
      <p>Ý nghĩa: A và B mô tả cùng một phép biến đổi tuyến tính, nhưng được nhìn trong hai hệ tọa độ khác nhau.</p>
      <p>Ma trận P thường được dùng để đổi tọa độ.</p>
      <p>Nếu chọn P gồm các vector riêng của A, thì B có thể trở thành ma trận đường chéo.</p>
      <p>Đây chính là ý tưởng dẫn đến chéo hóa.</p>
    `,
    example: "Công thức B=P⁻¹AP thường dùng để mô tả điều gì?",
    solution: "Nó mô tả hai ma trận tương tự, tức là cùng một phép biến đổi trong hai hệ tọa độ khác nhau."
  },

  {
    id: "diagonalization-condition",
    topic: "Giá trị riêng",
    category: "Chương 4: Chéo hóa",
    title: "Điều kiện chéo hóa",
    formula: "A = PDP⁻¹",
    summary: "Ma trận chéo hóa được khi có đủ vector riêng độc lập tuyến tính.",
    content: `
      <p>Một ma trận vuông A chéo hóa được nếu ta có thể viết:</p>
      <div class="math-box">A = PDP⁻¹</div>
      <p>Trong đó:</p>
      <ul>
        <li>P là ma trận có các cột là vector riêng của A.</li>
        <li>D là ma trận đường chéo chứa các giá trị riêng tương ứng.</li>
        <li>P phải khả nghịch.</li>
      </ul>
      <p>Điều kiện quan trọng nhất: A phải có đủ vector riêng độc lập tuyến tính để tạo thành P.</p>
      <p>Nếu thiếu vector riêng độc lập tuyến tính, A không chéo hóa được.</p>
    `,
    example: "Nếu A là ma trận 3×3 nhưng chỉ có 2 vector riêng độc lập tuyến tính thì A có chéo hóa được không?",
    solution: "Không. Ma trận 3×3 cần 3 vector riêng độc lập tuyến tính để chéo hóa."
  },

  {
    id: "matrix-powers-diagonalization",
    topic: "Giá trị riêng",
    category: "Chương 4: Chéo hóa",
    title: "Tính lũy thừa ma trận bằng chéo hóa",
    formula: "Aⁿ = PDⁿP⁻¹",
    summary: "Chéo hóa giúp tính Aⁿ nhanh hơn vì D là ma trận đường chéo.",
    content: `
      <p>Nếu A chéo hóa được:</p>
      <div class="math-box">A = PDP⁻¹</div>
      <p>thì lũy thừa của A được tính bằng:</p>
      <div class="math-box">Aⁿ = PDⁿP⁻¹</div>
      <p>Điểm tiện lợi là D là ma trận đường chéo.</p>
      <p>Muốn tính Dⁿ, ta chỉ cần nâng từng phần tử trên đường chéo lên lũy thừa n.</p>
      <p>Cách này đặc biệt hữu ích khi cần tính Aⁿ với n lớn, ví dụ trong hệ thống động hoặc chuỗi Markov.</p>
    `,
    example: "Nếu D = [[2,0],[0,3]] thì D³ bằng gì?",
    solution: "D³ = [[8,0],[0,27]], vì 2³=8 và 3³=27."
  },

  {
    id: "dynamical-system",
    topic: "Giá trị riêng",
    category: "Chương 4: Hệ thống động",
    title: "Hệ thống động tuyến tính",
    formula: "xₖ₊₁ = Axₖ",
    summary: "Hệ thống động mô tả trạng thái thay đổi theo thời gian bằng phép nhân ma trận.",
    content: `
      <p>Một hệ thống động tuyến tính mô tả sự thay đổi của một trạng thái theo thời gian.</p>
      <p>Trạng thái tại thời điểm k được viết là xₖ.</p>
      <p>Nếu A là ma trận mô tả cách hệ thay đổi, ta có:</p>
      <div class="math-box">xₖ₊₁ = Axₖ</div>
      <p>Nghĩa là trạng thái tiếp theo được tạo bằng cách nhân trạng thái hiện tại với ma trận A.</p>
      <p>Từ trạng thái ban đầu x₀, ta có:</p>
      <div class="math-box">x₁ = Ax₀, x₂ = A²x₀, ..., xₖ = Aᵏx₀</div>
      <p>Vì vậy, hiểu Aᵏ giúp ta dự đoán hành vi lâu dài của hệ.</p>
    `,
    example: "Nếu xₖ₊₁ = Axₖ thì x₃ bằng gì theo x₀?",
    solution: "x₃ = A³x₀."
  },

  {
    id: "long-term-behavior",
    topic: "Giá trị riêng",
    category: "Chương 4: Hệ thống động",
    title: "Dự đoán dài hạn bằng giá trị riêng",
    formula: "xₖ = c₁λ₁ᵏv₁ + c₂λ₂ᵏv₂ + ...",
    summary: "Giá trị riêng cho biết thành phần nào tăng, giảm hoặc giữ ổn định theo thời gian.",
    content: `
      <p>Nếu trạng thái ban đầu x₀ được viết theo cơ sở các vector riêng:</p>
      <div class="math-box">x₀ = c₁v₁ + c₂v₂ + ... + cₙvₙ</div>
      <p>và Avᵢ = λᵢvᵢ, thì sau k bước:</p>
      <div class="math-box">xₖ = c₁λ₁ᵏv₁ + c₂λ₂ᵏv₂ + ... + cₙλₙᵏvₙ</div>
      <p>Điều này giúp ta dự đoán dài hạn:</p>
      <ul>
        <li>Nếu |λ| > 1, thành phần đó lớn dần.</li>
        <li>Nếu |λ| < 1, thành phần đó nhỏ dần về 0.</li>
        <li>Nếu λ = 1, thành phần đó giữ ổn định.</li>
        <li>Nếu λ âm, thành phần đó có thể đổi chiều qua từng bước.</li>
      </ul>
    `,
    example: "Nếu một thành phần có giá trị riêng λ=0.5 thì lâu dài thành phần đó ra sao?",
    solution: "Nó nhỏ dần về 0 vì 0.5ᵏ tiến về 0 khi k lớn."
  },

  {
    id: "probability-vector",
    topic: "Giá trị riêng",
    category: "Chương 4: Markov và PageRank",
    title: "Vector xác suất",
    formula: "x₁ + x₂ + ... + xₙ = 1",
    summary: "Vector xác suất biểu diễn tỉ lệ hoặc xác suất ở các trạng thái khác nhau.",
    content: `
      <p>Một vector xác suất là vector có các thành phần không âm và tổng các thành phần bằng 1.</p>
      <div class="math-box">x₁ + x₂ + ... + xₙ = 1</div>
      <p>Vector xác suất thường dùng để biểu diễn phân bố của một hệ.</p>
      <p>Ví dụ: một thành phố có 30% dân ở khu A và 70% dân ở khu B có thể viết:</p>
      <div class="math-box">x = (0.3, 0.7)</div>
      <p>Trong chuỗi Markov, vector xác suất cho biết hệ đang nằm ở các trạng thái với tỉ lệ bao nhiêu.</p>
    `,
    example: "Vector (0.2, 0.5, 0.3) có phải vector xác suất không?",
    solution: "Có. Các thành phần không âm và tổng bằng 1."
  },

  {
    id: "stochastic-matrix",
    topic: "Giá trị riêng",
    category: "Chương 4: Markov và PageRank",
    title: "Ma trận ngẫu nhiên",
    formula: "các cột là vector xác suất",
    summary: "Ma trận ngẫu nhiên mô tả xác suất chuyển giữa các trạng thái.",
    content: `
      <p>Một ma trận ngẫu nhiên là ma trận vuông mà mỗi cột là một vector xác suất.</p>
      <p>Nghĩa là các phần tử trong mỗi cột không âm và tổng mỗi cột bằng 1.</p>
      <p>Ma trận ngẫu nhiên thường dùng để mô tả xác suất chuyển từ trạng thái này sang trạng thái khác.</p>
      <p>Ví dụ, nếu hệ có hai trạng thái A và B, ma trận chuyển cho biết từ A sang A, từ A sang B, từ B sang A và từ B sang B với xác suất bao nhiêu.</p>
      <p>Khi nhân ma trận ngẫu nhiên với một vector xác suất, kết quả vẫn là một vector xác suất.</p>
    `,
    example: "Một ma trận ngẫu nhiên cần điều kiện gì ở mỗi cột?",
    solution: "Mỗi cột phải có các phần tử không âm và tổng bằng 1."
  },

  {
    id: "markov-chain",
    topic: "Giá trị riêng",
    category: "Chương 4: Markov và PageRank",
    title: "Chuỗi Markov",
    formula: "xₖ₊₁ = Axₖ",
    summary: "Chuỗi Markov mô tả quá trình chuyển trạng thái theo xác suất qua từng bước.",
    content: `
      <p>Chuỗi Markov được tạo từ một ma trận ngẫu nhiên A và một vector xác suất ban đầu x₀.</p>
      <p>Quy tắc thay đổi là:</p>
      <div class="math-box">xₖ₊₁ = Axₖ</div>
      <p>Trong đó:</p>
      <ul>
        <li>xₖ là phân bố trạng thái ở bước k.</li>
        <li>A là ma trận xác suất chuyển trạng thái.</li>
      </ul>
      <p>Chuỗi Markov có thể dùng để mô tả nhiều hệ thống như dân số, xe thuê, người dùng web hoặc trạng thái thời tiết.</p>
      <p>Câu hỏi quan trọng là: sau nhiều bước, xₖ có tiến tới một trạng thái ổn định không?</p>
    `,
    example: "Trong chuỗi Markov xₖ₊₁ = Axₖ, A biểu diễn gì?",
    solution: "A biểu diễn xác suất chuyển từ trạng thái này sang trạng thái khác."
  },

  {
    id: "steady-state-vector",
    topic: "Giá trị riêng",
    category: "Chương 4: Markov và PageRank",
    title: "Vector trạng thái ổn định",
    formula: "Aq = q",
    summary: "Vector trạng thái ổn định là phân bố không thay đổi sau khi nhân với ma trận chuyển.",
    content: `
      <p>Một vector trạng thái ổn định của ma trận ngẫu nhiên A là vector xác suất q thỏa mãn:</p>
      <div class="math-box">Aq = q</div>
      <p>Điều này có nghĩa là sau một bước chuyển, phân bố vẫn giữ nguyên.</p>
      <p>Vì Aq = q cũng có thể viết là:</p>
      <div class="math-box">Aq = 1q</div>
      <p>nên q là vector riêng của A ứng với giá trị riêng λ = 1.</p>
      <p>Vector trạng thái ổn định giúp mô tả hành vi lâu dài của một chuỗi Markov.</p>
    `,
    example: "Nếu Aq=q thì q có ý nghĩa gì?",
    solution: "q là vector trạng thái ổn định của hệ."
  },

  {
    id: "perron-frobenius",
    topic: "Giá trị riêng",
    category: "Chương 4: Markov và PageRank",
    title: "Ý tưởng định lý Perron-Frobenius",
    formula: "Aq = q",
    summary: "Với ma trận ngẫu nhiên dương, chuỗi Markov hội tụ về một trạng thái ổn định duy nhất.",
    content: `
      <p>Định lý Perron-Frobenius là một kết quả quan trọng khi nghiên cứu ma trận ngẫu nhiên.</p>
      <p>Ở mức cơ bản, định lý nói rằng nếu A là ma trận ngẫu nhiên dương, thì tồn tại một vector trạng thái ổn định duy nhất và dương.</p>
      <div class="math-box">Aq = q</div>
      <p>Ngoài ra, các chuỗi Markov bắt đầu từ nhiều trạng thái ban đầu khác nhau sẽ hội tụ về vector ổn định này.</p>
      <p>Điều này rất quan trọng vì nó cho phép ta dự đoán dài hạn mà không cần mô phỏng mãi mãi.</p>
      <p>Ý tưởng này cũng là nền tảng cho PageRank.</p>
    `,
    example: "Định lý Perron-Frobenius giúp ta biết điều gì về ma trận ngẫu nhiên dương?",
    solution: "Nó cho biết hệ có một vector trạng thái ổn định duy nhất và các chuỗi Markov sẽ hội tụ về đó."
  },

  {
    id: "pagerank-idea",
    topic: "Giá trị riêng",
    category: "Chương 4: Markov và PageRank",
    title: "Ý tưởng PageRank",
    formula: "Gq = q",
    summary: "PageRank xếp hạng trang web bằng trạng thái ổn định của một chuỗi Markov.",
    content: `
      <p>PageRank là một ứng dụng nổi tiếng của giá trị riêng và chuỗi Markov.</p>
      <p>Ý tưởng đơn giản: một trang web quan trọng nếu nó được nhiều trang quan trọng khác liên kết đến.</p>
      <p>Ta có thể tưởng tượng một người dùng đang lướt web ngẫu nhiên từ trang này sang trang khác qua các liên kết.</p>
      <p>Ma trận Google G mô tả xác suất chuyển giữa các trang web.</p>
      <p>Vector PageRank q là trạng thái ổn định:</p>
      <div class="math-box">Gq = q</div>
      <p>Thành phần qᵢ càng lớn thì trang i càng quan trọng trong mạng liên kết.</p>
    `,
    example: "Trong PageRank, phương trình Gq=q biểu diễn điều gì?",
    solution: "Nó biểu diễn vector xếp hạng ổn định của các trang web."
  },

  {
    id: "modified-pagerank",
    topic: "Giá trị riêng",
    category: "Chương 4: Markov và PageRank",
    title: "PageRank sửa đổi và vấn đề trang web",
    formula: "G sửa đổi",
    summary: "PageRank cần sửa ma trận chuyển để tránh các vấn đề như trang cụt hoặc nhóm trang bị kẹt.",
    content: `
      <p>Khi xây dựng PageRank thực tế, không phải mạng web nào cũng hoạt động đẹp.</p>
      <p>Có thể xuất hiện các vấn đề như:</p>
      <ul>
        <li>Trang không có liên kết đi ra.</li>
        <li>Một nhóm trang chỉ liên kết qua lại với nhau, khiến người dùng bị kẹt.</li>
      </ul>
      <p>Để xử lý, PageRank dùng một ma trận Google đã sửa đổi.</p>
      <p>Ý tưởng là cho phép người dùng đôi khi nhảy ngẫu nhiên đến một trang bất kỳ, thay vì chỉ đi theo liên kết.</p>
      <p>Cách sửa này giúp ma trận phù hợp hơn với điều kiện của định lý Perron-Frobenius, từ đó tạo ra vector PageRank ổn định và đáng tin cậy hơn.</p>
    `,
    example: "Vì sao PageRank cần cho phép nhảy ngẫu nhiên đến trang bất kỳ?",
    solution: "Để tránh bị kẹt trong trang cụt hoặc nhóm trang khép kín, giúp hệ hội tụ về xếp hạng ổn định."
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
  },
  {
    id: "pagerank-google-matrix",
    topic: "ĐSTT trong kỉ nguyên số",
    category: "ĐSTT trong kỉ nguyên số",
    title: "Thuật toán PageRank - Ma trận định hình Google",
    formula: "x = P · x",
    summary: "PageRank dùng ma trận, vector xác suất và vector riêng để xếp hạng trang web.",
    content: `
      <p>PageRank là một thuật toán nổi tiếng giúp Google đánh giá mức độ quan trọng của các trang web.</p>
      <p>Ý tưởng chính là: một trang web quan trọng nếu nó được nhiều trang web quan trọng khác trỏ liên kết đến.</p>
      <p>Ta mô hình Internet thành một đồ thị có hướng. Mỗi trang web là một đỉnh, mỗi liên kết là một cạnh.</p>
      <p>Ma trận chuyển trạng thái P mô tả xác suất người dùng đi từ trang này sang trang khác.</p>
      <div class="math-box">x = P · x</div>
      <p>Vector x ổn định chính là điểm PageRank của các trang web.</p>
    `,
    example: "Vì sao PageRank không chỉ đếm số lượng liên kết?",
    solution: "Vì liên kết từ trang uy tín có giá trị cao hơn liên kết từ trang kém uy tín."
  },

  {
    id: "chatgpt-llm-word-vectors",
    topic: "ĐSTT trong kỉ nguyên số",
    category: "ĐSTT trong kỉ nguyên số",
    title: "ChatGPT và mô hình ngôn ngữ lớn - Khi từ ngữ là vector",
    formula: "word → vector",
    summary: "Mô hình ngôn ngữ biểu diễn từ ngữ bằng vector để máy tính hiểu quan hệ giữa các từ.",
    content: `
      <p>Trong AI hiện đại, từ ngữ không chỉ được lưu dưới dạng chữ, mà thường được biểu diễn thành vector số.</p>
      <p>Các vector này giúp máy tính đo được độ gần nhau về ý nghĩa giữa các từ.</p>
      <p>Ví dụ, vector của “vua” và “nữ hoàng” có thể gần nhau vì chúng có quan hệ về nghĩa.</p>
      <p>Mô hình ngôn ngữ lớn như ChatGPT xử lý rất nhiều vector và ma trận để dự đoán từ tiếp theo.</p>
      <div class="math-box">text → vector → matrix computation → output</div>
    `,
    example: "Vì sao AI cần biến từ thành vector?",
    solution: "Vì máy tính xử lý số tốt hơn chữ, và vector giúp biểu diễn ý nghĩa của từ."
  },

  {
    id: "facebook-friend-recommendation-matrix-power",
    topic: "ĐSTT trong kỉ nguyên số",
    category: "ĐSTT trong kỉ nguyên số",
    title: "Gợi ý kết bạn Facebook - Sức mạnh của lũy thừa ma trận",
    formula: "A²",
    summary: "Ma trận kề giúp tìm bạn chung và gợi ý kết bạn trong mạng xã hội.",
    content: `
      <p>Mạng xã hội có thể được mô hình bằng đồ thị. Mỗi người là một đỉnh, quan hệ bạn bè là một cạnh.</p>
      <p>Ta dùng ma trận kề A để biểu diễn mối quan hệ bạn bè.</p>
      <p>Nếu Aij = 1 thì người i và người j là bạn. Nếu Aij = 0 thì chưa phải bạn.</p>
      <p>Ma trận A² có thể cho biết số bạn chung giữa hai người.</p>
      <div class="math-box">A² = A · A</div>
      <p>Nếu hai người có nhiều bạn chung, hệ thống có thể gợi ý họ kết bạn với nhau.</p>
    `,
    example: "A² giúp tìm điều gì trong mạng xã hội?",
    solution: "A² giúp tìm số bạn chung giữa hai người."
  },

  {
    id: "netflix-recommendation-matrix-factorization",
    topic: "ĐSTT trong kỉ nguyên số",
    category: "ĐSTT trong kỉ nguyên số",
    title: "Hệ thống gợi ý phim Netflix - Phân rã ma trận",
    formula: "R ≈ U · Vᵀ",
    summary: "Netflix có thể dùng ma trận để dự đoán người dùng thích bộ phim nào.",
    content: `
      <p>Netflix có rất nhiều người dùng và rất nhiều bộ phim. Ta có thể tạo một ma trận R.</p>
      <p>Hàng của ma trận là người dùng, cột là phim, phần tử là điểm đánh giá hoặc mức độ yêu thích.</p>
      <p>Vì người dùng chưa xem hết mọi phim nên ma trận này có rất nhiều ô trống.</p>
      <p>Phân rã ma trận giúp tìm các sở thích ẩn của người dùng và đặc điểm ẩn của phim.</p>
      <div class="math-box">R ≈ U · Vᵀ</div>
    `,
    example: "Vì sao ma trận đánh giá phim thường có nhiều ô trống?",
    solution: "Vì mỗi người dùng chỉ xem một phần nhỏ trong toàn bộ kho phim."
  },

  {
    id: "eigenfaces-face-recognition-pca",
    topic: "ĐSTT trong kỉ nguyên số",
    category: "ĐSTT trong kỉ nguyên số",
    title: "Nhận diện khuôn mặt Eigenfaces - PCA và không gian con",
    formula: "PCA",
    summary: "Ảnh khuôn mặt có thể được nén và nhận diện bằng vector riêng và giảm chiều dữ liệu.",
    content: `
      <p>Mỗi ảnh khuôn mặt có thể xem như một vector rất dài chứa các giá trị pixel.</p>
      <p>Nếu ảnh có nhiều pixel, số chiều của vector sẽ rất lớn.</p>
      <p>PCA giúp tìm các hướng quan trọng nhất trong dữ liệu khuôn mặt.</p>
      <p>Các hướng này được gọi là eigenfaces, tức các khuôn mặt cơ sở.</p>
      <p>Một khuôn mặt mới có thể được biểu diễn bằng tổ hợp của các eigenfaces.</p>
    `,
    example: "PCA giúp gì trong nhận diện khuôn mặt?",
    solution: "PCA giúp giảm số chiều dữ liệu nhưng vẫn giữ thông tin quan trọng."
  },

  {
    id: "instagram-filters-image-convolution",
    topic: "ĐSTT trong đồ họa máy tính",
    category: "ĐSTT trong đồ họa máy tính",
    title: "Bộ lọc Instagram và xử lý ảnh số",
    formula: "new pixel = kernel · image",
    summary: "Bộ lọc ảnh dùng ma trận nhỏ để làm mờ, làm nét hoặc phát hiện cạnh.",
    content: `
      <p>Một bức ảnh số thực chất là một ma trận các pixel.</p>
      <p>Mỗi pixel có thể chứa giá trị màu đỏ, xanh lá và xanh dương.</p>
      <p>Bộ lọc ảnh thường dùng một ma trận nhỏ gọi là kernel.</p>
      <p>Kernel trượt qua ảnh và tính giá trị pixel mới từ các pixel xung quanh.</p>
      <p>Cách này có thể tạo hiệu ứng làm mờ, làm nét, tăng sáng hoặc phát hiện cạnh.</p>
    `,
    example: "Ảnh số có thể xem như đối tượng toán học nào?",
    solution: "Ảnh số có thể xem như một hoặc nhiều ma trận pixel."
  },

  {
    id: "icloud-google-drive-image-compression-svd",
    topic: "ĐSTT trong đồ họa máy tính",
    category: "ĐSTT trong đồ họa máy tính",
    title: "Nén ảnh bằng SVD",
    formula: "A = UΣVᵀ",
    summary: "SVD giúp nén ảnh bằng cách giữ lại các thành phần quan trọng nhất.",
    content: `
      <p>Một ảnh xám có thể được biểu diễn bằng một ma trận A.</p>
      <p>Phân rã SVD viết ma trận A thành tích của ba ma trận.</p>
      <div class="math-box">A = UΣVᵀ</div>
      <p>Các giá trị lớn trong Σ chứa nhiều thông tin quan trọng của ảnh.</p>
      <p>Khi chỉ giữ lại một số giá trị lớn nhất, ta có thể giảm dung lượng ảnh nhưng vẫn giữ hình ảnh tương đối rõ.</p>
    `,
    example: "SVD nén ảnh bằng cách nào?",
    solution: "SVD giữ lại các thành phần quan trọng nhất và bỏ bớt phần ít quan trọng."
  },

  {
    id: "game-engine-3d-homogeneous-coordinates",
    topic: "ĐSTT trong đồ họa máy tính",
    category: "ĐSTT trong đồ họa máy tính",
    title: "Engine game 3D và tọa độ thuần nhất",
    formula: "[x, y, z, 1]",
    summary: "Game 3D dùng ma trận để quay, tịnh tiến, co giãn và chiếu vật thể lên màn hình.",
    content: `
      <p>Trong game 3D, mỗi vật thể được tạo từ rất nhiều điểm trong không gian.</p>
      <p>Để di chuyển, quay hoặc phóng to vật thể, máy tính dùng phép nhân ma trận.</p>
      <p>Tọa độ thuần nhất thêm một thành phần thứ tư vào vector.</p>
      <div class="math-box">[x, y, z, 1]</div>
      <p>Cách này giúp biểu diễn cả phép tịnh tiến bằng ma trận.</p>
    `,
    example: "Vì sao đồ họa 3D dùng ma trận?",
    solution: "Vì ma trận giúp biến đổi hàng nghìn điểm rất nhanh và thống nhất."
  },

  {
    id: "smartphone-panorama-homography",
    topic: "ĐSTT trong đồ họa máy tính",
    category: "ĐSTT trong đồ họa máy tính",
    title: "Ghép ảnh Panorama trên smartphone",
    formula: "x' = Hx",
    summary: "Panorama dùng ma trận biến đổi để ghép nhiều ảnh thành một ảnh rộng.",
    content: `
      <p>Khi chụp panorama, điện thoại chụp nhiều ảnh liên tiếp rồi ghép chúng lại.</p>
      <p>Các ảnh này có góc nhìn hơi khác nhau nên cần được căn chỉnh.</p>
      <p>Ma trận homography H giúp biến đổi điểm từ ảnh này sang ảnh khác.</p>
      <div class="math-box">x' = Hx</div>
      <p>Sau khi căn chỉnh, các ảnh được ghép thành một ảnh toàn cảnh.</p>
    `,
    example: "Ma trận H trong panorama dùng để làm gì?",
    solution: "Nó dùng để biến đổi và căn chỉnh các điểm giữa các ảnh."
  },

  {
    id: "ct-scan-linear-system-reconstruction",
    topic: "ĐSTT trong đời sống",
    category: "ĐSTT trong đời sống",
    title: "Máy chụp CT và hệ phương trình tuyến tính",
    formula: "A · x = b",
    summary: "Máy CT tái tạo ảnh bên trong cơ thể bằng cách giải hệ phương trình lớn.",
    content: `
      <p>Máy CT gửi tia X qua cơ thể từ nhiều góc khác nhau.</p>
      <p>Mỗi phép đo cho biết mức độ tia X bị hấp thụ trên một đường đi.</p>
      <p>Cơ thể được chia thành nhiều ô nhỏ, mỗi ô có một giá trị hấp thụ chưa biết.</p>
      <p>Các phép đo tạo thành một hệ phương trình tuyến tính lớn.</p>
      <div class="math-box">A · x = b</div>
      <p>Giải hệ này giúp tái tạo ảnh lát cắt bên trong cơ thể.</p>
    `,
    example: "Trong chụp CT, x biểu diễn điều gì?",
    solution: "x biểu diễn các giá trị hấp thụ tia X của các vùng nhỏ trong cơ thể."
  },

  {
    id: "leontief-input-output-economy",
    topic: "ĐSTT trong đời sống",
    category: "ĐSTT trong đời sống",
    title: "Mô hình kinh tế Leontief",
    formula: "x = Ax + d",
    summary: "Mô hình Leontief dùng ma trận để mô tả sự phụ thuộc giữa các ngành kinh tế.",
    content: `
      <p>Trong nền kinh tế, các ngành sản xuất phụ thuộc lẫn nhau.</p>
      <p>Ví dụ ngành ô tô cần thép, điện, cao su và nhiều dịch vụ khác.</p>
      <p>Ma trận A biểu diễn lượng đầu vào mỗi ngành cần từ các ngành khác.</p>
      <div class="math-box">x = Ax + d</div>
      <p>Trong đó x là tổng sản lượng cần sản xuất, còn d là nhu cầu cuối cùng.</p>
    `,
    example: "Ma trận A trong mô hình Leontief biểu diễn gì?",
    solution: "A biểu diễn mức đầu vào mà mỗi ngành cần từ các ngành khác."
  },

  {
    id: "hill-cipher-modular-matrix-cryptography",
    topic: "ĐSTT trong đời sống",
    category: "ĐSTT trong đời sống",
    title: "Mật mã Hill Cipher và ma trận đồng dư",
    formula: "C = K · P mod 26",
    summary: "Hill Cipher mã hóa chữ cái bằng phép nhân ma trận trong số học modulo.",
    content: `
      <p>Hill Cipher là một phương pháp mã hóa cổ điển dùng đại số tuyến tính.</p>
      <p>Ta biến các chữ cái thành số, ví dụ A = 0, B = 1, ..., Z = 25.</p>
      <p>Một nhóm chữ được xem như vector P.</p>
      <p>Khóa mã hóa là ma trận K.</p>
      <div class="math-box">C = K · P mod 26</div>
      <p>Muốn giải mã, ma trận K cần có nghịch đảo modulo 26.</p>
    `,
    example: "Điều kiện quan trọng để giải mã Hill Cipher là gì?",
    solution: "Ma trận khóa K phải có nghịch đảo modulo 26."
  },

  {
    id: "leslie-matrix-population-growth",
    topic: "ĐSTT trong đời sống",
    category: "ĐSTT trong đời sống",
    title: "Ma trận Leslie và tăng trưởng dân số",
    formula: "x(t+1) = Lx(t)",
    summary: "Ma trận Leslie dự báo số lượng cá thể theo từng nhóm tuổi qua thời gian.",
    content: `
      <p>Trong sinh học, một quần thể có thể được chia thành các nhóm tuổi.</p>
      <p>Vector x(t) biểu diễn số cá thể ở từng nhóm tuổi tại thời điểm t.</p>
      <p>Ma trận Leslie L chứa tỉ lệ sinh sản và tỉ lệ sống sót.</p>
      <div class="math-box">x(t+1) = Lx(t)</div>
      <p>Lặp công thức này nhiều lần giúp dự báo sự tăng hoặc giảm của quần thể.</p>
    `,
    example: "Vector x(t) trong ma trận Leslie biểu diễn gì?",
    solution: "Nó biểu diễn số cá thể ở từng nhóm tuổi tại thời điểm t."
  },

  {
    id: "markowitz-portfolio-covariance-optimization",
    topic: "ĐSTT trong đời sống",
    category: "ĐSTT trong đời sống",
    title: "Tối ưu hóa danh mục đầu tư Markowitz",
    formula: "wᵀΣw",
    summary: "Mô hình Markowitz dùng ma trận hiệp phương sai để đo rủi ro danh mục đầu tư.",
    content: `
      <p>Nhà đầu tư thường muốn lợi nhuận cao nhưng rủi ro thấp.</p>
      <p>Vector w biểu diễn tỉ lệ tiền đầu tư vào từng tài sản.</p>
      <p>Ma trận Σ chứa phương sai và hiệp phương sai giữa các tài sản.</p>
      <div class="math-box">risk = wᵀΣw</div>
      <p>Biểu thức này giúp đo rủi ro của toàn bộ danh mục.</p>
      <p>Đại số tuyến tính giúp tìm cách phân bổ vốn hợp lý hơn.</p>
    `,
    example: "Ma trận Σ trong Markowitz chứa thông tin gì?",
    solution: "Nó chứa phương sai từng tài sản và hiệp phương sai giữa các cặp tài sản."
  },

  {
    id: "finite-element-method-global-stiffness-matrix",
    topic: "ĐSTT trong đời sống",
    category: "ĐSTT trong đời sống",
    title: "Kỹ thuật kết cấu xây dựng và ma trận độ cứng",
    formula: "K · u = F",
    summary: "Phương pháp phần tử hữu hạn dùng hệ phương trình tuyến tính để mô phỏng công trình.",
    content: `
      <p>Khi thiết kế cầu, nhà cao tầng hoặc đường hầm, kỹ sư cần dự đoán biến dạng và lực bên trong công trình.</p>
      <p>Phương pháp phần tử hữu hạn chia công trình thành nhiều phần tử nhỏ.</p>
      <p>Mỗi phần tử có ma trận độ cứng riêng.</p>
      <p>Các ma trận nhỏ được ghép lại thành ma trận độ cứng toàn cục K.</p>
      <div class="math-box">K · u = F</div>
      <p>Trong đó u là chuyển vị chưa biết, F là lực tác dụng.</p>
    `,
    example: "Trong phương trình K · u = F, u là gì?",
    solution: "u là vector chuyển vị của các nút trong công trình."
  }
];
// ===============================
// GỘP THEORY THÀNH ÍT CHỦ ĐỀ HƠN
// Bỏ phần phần mềm / phương pháp số
// Giữ ứng dụng thực tiễn nhưng gộp lại
// Dán ngay sau: const THEORY = [ ... ];
// ===============================

const MERGE_GROUPS = [
  // =========================
  // CHƯƠNG 1
  // =========================
  {
    id: "ch1-linear-systems-and-solutions",
    topic: "Hệ phương trình",
    category: "Chương 1: Hệ phương trình",
    title: "Hệ phương trình tuyến tính và không gian nghiệm",
    formula: "a₁x₁ + a₂x₂ + ... + aₙxₙ = b",
    summary: "Học khái niệm hệ tuyến tính, nghiệm, không gian nghiệm, pivot và biến tự do.",
    sourceIds: [
      "linear-system-concept",
      "pivot-position-solution-space"
    ],
    example: "Một hệ có 4 biến, 3 pivot và không có hàng mâu thuẫn thì có bao nhiêu biến tự do?",
    solution: "Có 1 biến tự do. Vì hệ không mâu thuẫn và có biến tự do nên hệ có vô số nghiệm."
  },

  {
    id: "ch1-gauss-rref",
    topic: "Hệ phương trình",
    category: "Chương 1: Khử Gauss và RREF",
    title: "Khử Gauss, ma trận mở rộng và RREF",
    formula: "[A | b] → RREF",
    summary: "Dùng phép biến đổi hàng để đưa hệ về dạng dễ đọc nghiệm.",
    sourceIds: [
      "gauss",
      "rref"
    ],
    example: "Nếu ma trận RREF có hàng [0 0 0 | 5] thì hệ có nghiệm không?",
    solution: "Không. Vì hàng đó tương ứng với phương trình 0 = 5, đây là mâu thuẫn."
  },

  // =========================
  // CHƯƠNG 2
  // =========================
  {
    id: "ch2-vectors-span-independence",
    topic: "Vector",
    category: "Chương 2: Vector và không gian sinh",
    title: "Vector, tổ hợp tuyến tính, span và độc lập tuyến tính",
    formula: "c₁v₁ + c₂v₂ + ... + cₙvₙ",
    summary: "Gộp các ý tưởng nền tảng về vector, tổ hợp tuyến tính, không gian sinh và độc lập tuyến tính.",
    sourceIds: [
      "vectors",
      "linear-combination",
      "span",
      "linear-independence"
    ],
    example: "Hai vector (1,0) và (0,1) có sinh ra R² không?",
    solution: "Có. Mọi vector (x,y) đều viết được là x(1,0)+y(0,1)."
  },

  {
    id: "ch2-matrix-products",
    topic: "Ma trận",
    category: "Chương 2: Ma trận và phép nhân",
    title: "Phép nhân ma trận với vector và ma trận",
    formula: "Ax, AB",
    summary: "Hiểu Ax như tổ hợp tuyến tính của các cột và hiểu điều kiện để nhân hai ma trận.",
    sourceIds: [
      "matrix-vector",
      "matrix-matrix"
    ],
    example: "Nếu A là 2×3 và B là 3×4 thì AB có kích thước bao nhiêu?",
    solution: "AB xác định và có kích thước 2×4."
  },

  {
    id: "ch2-linear-transformations",
    topic: "Biến đổi tuyến tính",
    category: "Chương 2: Biến đổi tuyến tính",
    title: "Biến đổi tuyến tính và hình học của ma trận",
    formula: "T(x)=Ax",
    summary: "Ma trận có thể xem là một phép biến đổi tuyến tính trong hình học và đại số.",
    sourceIds: [
      "linear-transformation-definition",
      "standard-matrix-transformation",
      "matrix-transform",
      "matrix-image-and-kernel"
    ],
    example: "Nếu T là tuyến tính thì T(2u+3v) bằng gì?",
    solution: "T(2u+3v)=2T(u)+3T(v)."
  },

  // =========================
  // CHƯƠNG 3
  // =========================
  {
    id: "ch3-invertible-matrices",
    topic: "Ma trận",
    category: "Chương 3: Tính khả nghịch",
    title: "Ma trận khả nghịch và ma trận nghịch đảo",
    formula: "AA⁻¹ = I",
    summary: "Gộp định nghĩa ma trận khả nghịch, cách tìm nghịch đảo và các điều kiện nhận biết.",
    sourceIds: [
      "inverse",
      "inverse-rref",
      "inverse-conditions"
    ],
    example: "Nếu RREF(A)=I thì A có khả nghịch không?",
    solution: "Có. Vì A hàng tương đương với ma trận đơn vị nên A khả nghịch."
  },

  {
    id: "ch3-basis-coordinates",
    topic: "Không gian vector",
    category: "Chương 3: Cơ sở và hệ tọa độ",
    title: "Cơ sở và hệ tọa độ",
    formula: "v = c₁b₁ + c₂b₂ + ... + cₙbₙ",
    summary: "Gộp cơ sở, kiểm tra cơ sở và tọa độ của vector theo cơ sở.",
    sourceIds: [
      "basis",
      "coordinates",
      "basis-rref-test",
      "coordinate-change"
    ],
    example: "Nếu v=3b₁-2b₂ thì tọa độ của v theo cơ sở B là gì?",
    solution: "Tọa độ là (3,-2)."
  },

  {
    id: "ch3-determinants",
    topic: "Định thức",
    category: "Chương 3: Định thức",
    title: "Định thức và ý nghĩa của định thức",
    formula: "det(A)",
    summary: "Gộp công thức định thức, ý nghĩa hình học, tính chất và liên hệ với tính khả nghịch.",
    sourceIds: [
      "determinant",
      "determinant-geometry",
      "determinant-properties",
      "determinant-invertible",
      "cofactor-expansion"
    ],
    example: "Nếu det(A)=0 thì A có khả nghịch không?",
    solution: "Không. det(A)=0 nghĩa là A không khả nghịch."
  },

  {
    id: "ch3-subspaces-rank-null",
    topic: "Không gian vector",
    category: "Chương 3: Không gian con",
    title: "Không gian con, Col(A), Null(A) và hạng ma trận",
    formula: "rank(A) + dim Null(A) = n",
    summary: "Gộp không gian con, không gian cột, không gian null, hạng và định lý rank-nullity.",
    sourceIds: [
      "subspace",
      "subspace-basis-dimension",
      "column-space",
      "rank",
      "null-space",
      "rank-nullity"
    ],
    example: "A có 5 cột và rank(A)=3. Tính dim Null(A).",
    solution: "dim Null(A)=5-3=2."
  },

  {
    id: "ch3-image-compression-basis",
    topic: "Ứng dụng",
    category: "Chương 3: Nén hình ảnh",
    title: "Nén hình ảnh và cơ sở phù hợp",
    formula: "dữ liệu ảnh → tọa độ theo cơ sở mới",
    summary: "Nén ảnh dùng ý tưởng đổi hệ tọa độ để biểu diễn dữ liệu gọn hơn.",
    sourceIds: [
      "image-compression-basis"
    ],
    example: "Vì sao đổi cơ sở có thể giúp nén ảnh?",
    solution: "Vì trong cơ sở phù hợp, dữ liệu ảnh có thể được mô tả bằng ít tọa độ quan trọng hơn."
  },

  // =========================
  // CHƯƠNG 4
  // =========================
  {
    id: "ch4-eigenvalues-eigenvectors",
    topic: "Giá trị riêng",
    category: "Chương 4: Giá trị riêng và vector riêng",
    title: "Giá trị riêng, vector riêng và cách tìm",
    formula: "Av = λv",
    summary: "Gộp ý nghĩa, phương trình đặc trưng, đa thức đặc trưng, vector riêng và không gian riêng.",
    sourceIds: [
      "eigen",
      "eigen-geometric-meaning",
      "find-eigenvalues",
      "characteristic-polynomial",
      "find-eigenvectors",
      "eigenspace",
      "algebraic-multiplicity"
    ],
    example: "Muốn tìm giá trị riêng của A, ta giải phương trình nào?",
    solution: "Ta giải phương trình đặc trưng det(A - λI)=0."
  },

  {
    id: "ch4-diagonalization",
    topic: "Giá trị riêng",
    category: "Chương 4: Chéo hóa",
    title: "Chéo hóa, ma trận tương tự và lũy thừa ma trận",
    formula: "A = PDP⁻¹",
    summary: "Gộp cơ sở vector riêng, ma trận tương tự, điều kiện chéo hóa và cách tính Aⁿ.",
    sourceIds: [
      "diagonalization",
      "eigenbasis",
      "similar-matrices",
      "diagonalization-condition",
      "matrix-powers-diagonalization"
    ],
    example: "Ma trận 3×3 cần bao nhiêu vector riêng độc lập tuyến tính để chéo hóa?",
    solution: "Cần 3 vector riêng độc lập tuyến tính."
  },

  {
    id: "ch4-dynamical-systems",
    topic: "Giá trị riêng",
    category: "Chương 4: Hệ thống động",
    title: "Hệ thống động tuyến tính",
    formula: "xₖ₊₁ = Axₖ",
    summary: "Gộp hệ động tuyến tính và cách dùng giá trị riêng để dự đoán dài hạn.",
    sourceIds: [
      "dynamical-system",
      "long-term-behavior"
    ],
    example: "Nếu xₖ₊₁ = Axₖ thì x₃ bằng gì theo x₀?",
    solution: "x₃ = A³x₀."
  },

  {
    id: "ch4-markov-pagerank",
    topic: "Giá trị riêng",
    category: "Chương 4: Markov và PageRank",
    title: "Chuỗi Markov và PageRank",
    formula: "Aq = q",
    summary: "Gộp vector xác suất, ma trận ngẫu nhiên, trạng thái ổn định, Markov và PageRank.",
    sourceIds: [
      "markov",
      "probability-vector",
      "stochastic-matrix",
      "markov-chain",
      "steady-state-vector",
      "perron-frobenius",
      "pagerank-idea",
      "modified-pagerank"
    ],
    example: "Nếu Aq=q thì q có ý nghĩa gì?",
    solution: "q là vector trạng thái ổn định của hệ."
  },

  // =========================
  // CHƯƠNG 6
  // =========================
  {
    id: "ch6-dot-norm-angle-orthogonal",
    topic: "Trực giao",
    category: "Chương 6: Tích vô hướng và trực giao",
    title: "Tích vô hướng, độ dài, góc và trực giao",
    formula: "u·v = ||u||||v||cosθ",
    summary: "Gộp tích vô hướng, độ dài vector, khoảng cách, góc và điều kiện vuông góc.",
    sourceIds: [
      "orthogonal",
      "norm-and-distance",
      "angle-cosine-dot-product"
    ],
    example: "Nếu u·v=0 và u,v khác 0 thì hai vector có quan hệ gì?",
    solution: "Hai vector vuông góc với nhau."
  },

  {
    id: "ch6-transpose-orthogonal-complement",
    topic: "Trực giao",
    category: "Chương 6: Chuyển vị và phần bù trực giao",
    title: "Ma trận chuyển vị và phần bù trực giao",
    formula: "Col(A)⊥ = Null(Aᵀ)",
    summary: "Gộp ma trận chuyển vị, phần bù trực giao và liên hệ giữa Col(A), Null(Aᵀ).",
    sourceIds: [
      "transpose-matrix",
      "orthogonal-complement",
      "fundamental-subspaces-transpose"
    ],
    example: "Nếu y vuông góc với mọi cột của A thì y thuộc không gian nào?",
    solution: "y thuộc Null(Aᵀ)."
  },

  {
    id: "ch6-projection-orthonormal",
    topic: "Trực giao",
    category: "Chương 6: Phép chiếu và trực chuẩn",
    title: "Phép chiếu, tập trực chuẩn và ma trận trực giao",
    formula: "proj_w(b) = (b·w / w·w)w",
    summary: "Gộp phép chiếu lên vector, phép chiếu lên không gian con, tập trực chuẩn và ma trận trực giao.",
    sourceIds: [
      "orthonormal-set",
      "orthogonal-projection-vector",
      "projection-onto-subspace",
      "orthogonal-matrix"
    ],
    example: "Nếu Q là ma trận trực giao thì Q⁻¹ bằng gì?",
    solution: "Q⁻¹ = Qᵀ."
  },

  {
    id: "ch6-gram-schmidt-qr",
    topic: "Trực giao",
    category: "Chương 6: Gram-Schmidt và QR",
    title: "Gram-Schmidt và phân tích QR",
    formula: "A = QR",
    summary: "Gộp quy trình Gram-Schmidt và phân tích QR.",
    sourceIds: [
      "gram-schmidt",
      "qr-decomposition"
    ],
    example: "Gram-Schmidt dùng để làm gì?",
    solution: "Dùng để tạo cơ sở trực giao hoặc trực chuẩn từ các vector độc lập tuyến tính."
  },

  {
    id: "ch6-least-squares",
    topic: "Trực giao",
    category: "Chương 6: Bình phương nhỏ nhất",
    title: "Bình phương nhỏ nhất và hồi quy tuyến tính",
    formula: "AᵀAx = Aᵀb",
    summary: "Gộp bài toán bình phương nhỏ nhất, phương trình chuẩn và hồi quy tuyến tính.",
    sourceIds: [
      "least-squares",
      "normal-equations",
      "least-squares-line"
    ],
    example: "Phương trình chuẩn của bài toán Ax≈b là gì?",
    solution: "AᵀAx = Aᵀb."
  },

  // =========================
  // CHƯƠNG 7
  // =========================
  {
    id: "ch7-symmetric-matrices",
    topic: "PCA và SVD",
    category: "Chương 7: Ma trận đối xứng",
    title: "Ma trận đối xứng và chéo hóa trực giao",
    formula: "A = QDQᵀ",
    summary: "Gộp ma trận đối xứng và chéo hóa trực giao.",
    sourceIds: [
      "symmetric-matrix",
      "orthogonal-diagonalization"
    ],
    example: "Điều kiện để A là ma trận đối xứng là gì?",
    solution: "Aᵀ = A."
  },

  {
    id: "ch7-variance-covariance",
    topic: "PCA và SVD",
    category: "Chương 7: Phương sai và hiệp phương sai",
    title: "Phương sai, hiệp phương sai và ma trận hiệp phương sai",
    formula: "S = (1/(n-1))XᵀX",
    summary: "Gộp phương sai, hiệp phương sai và ma trận hiệp phương sai.",
    sourceIds: [
      "variance-covariance",
      "covariance-matrix"
    ],
    example: "Đường chéo chính của ma trận hiệp phương sai chứa gì?",
    solution: "Chứa phương sai của từng biến."
  },

  {
    id: "ch7-quadratic-form-principal-axes",
    topic: "PCA và SVD",
    category: "Chương 7: Dạng bình phương bậc hai",
    title: "Dạng bình phương bậc hai và các trục chính",
    formula: "q(x)=xᵀAx",
    summary: "Gộp dạng bình phương bậc hai và ý tưởng trục chính.",
    sourceIds: [
      "quadratic-form",
      "principal-axes"
    ],
    example: "Dạng bình phương bậc hai thường có dạng công thức nào?",
    solution: "q(x)=xᵀAx."
  },

  {
    id: "ch7-pca",
    topic: "PCA và SVD",
    category: "Chương 7: PCA",
    title: "Phân tích thành phần chính PCA",
    formula: "covariance → eigenvectors",
    summary: "Gộp ý tưởng PCA và các bước cơ bản của PCA.",
    sourceIds: [
      "pca-idea",
      "pca-steps"
    ],
    example: "Trong PCA, ta thường chọn vector riêng ứng với giá trị riêng lớn hay nhỏ?",
    solution: "Chọn các vector riêng ứng với giá trị riêng lớn."
  },

  {
    id: "ch7-svd",
    topic: "PCA và SVD",
    category: "Chương 7: SVD",
    title: "SVD, giá trị kỳ dị và xấp xỉ hạng thấp",
    formula: "A = UΣVᵀ",
    summary: "Gộp SVD, giá trị kỳ dị, xấp xỉ hạng thấp, nén ảnh và nghịch đảo giả.",
    sourceIds: [
      "svd-introduction",
      "singular-values",
      "low-rank-approximation",
      "svd-image-compression-theory",
      "moore-penrose-pseudoinverse"
    ],
    example: "Dạng chuẩn của SVD là gì?",
    solution: "A = UΣVᵀ."
  },

  // =========================
  // ỨNG DỤNG THỰC TIỄN
  // =========================
  {
    id: "app-digital-age",
    topic: "Ứng dụng",
    category: "Ứng dụng thực tiễn: Kỉ nguyên số",
    title: "Ứng dụng đại số tuyến tính trong kỉ nguyên số",
    formula: "vector, ma trận, PCA, PageRank",
    summary: "Gộp PageRank, ChatGPT, Facebook, Netflix và Eigenfaces.",
    sourceIds: [
      "pagerank-google-matrix",
      "chatgpt-llm-word-vectors",
      "facebook-friend-recommendation-matrix-power",
      "netflix-recommendation-matrix-factorization",
      "eigenfaces-face-recognition-pca"
    ],
    example: "Vì sao PageRank liên quan đến đại số tuyến tính?",
    solution: "Vì PageRank dùng ma trận chuyển trạng thái và vector trạng thái ổn định để xếp hạng trang web."
  },

  {
    id: "app-computer-graphics",
    topic: "Ứng dụng",
    category: "Ứng dụng thực tiễn: Đồ họa máy tính",
    title: "Ứng dụng đại số tuyến tính trong đồ họa và xử lý ảnh",
    formula: "ma trận biến đổi, SVD, homography",
    summary: "Gộp bộ lọc ảnh, nén ảnh, game 3D và ghép ảnh panorama.",
    sourceIds: [
      "instagram-filters-image-convolution",
      "icloud-google-drive-image-compression-svd",
      "game-engine-3d-homogeneous-coordinates",
      "smartphone-panorama-homography"
    ],
    example: "Vì sao ảnh có thể xem là ma trận?",
    solution: "Vì mỗi điểm ảnh có thể được biểu diễn bằng một hoặc nhiều con số, tạo thành bảng số giống ma trận."
  },

  {
    id: "app-real-life",
    topic: "Ứng dụng",
    category: "Ứng dụng thực tiễn: Đời sống",
    title: "Ứng dụng đại số tuyến tính trong đời sống và khoa học",
    formula: "Ax=b, ma trận, vector",
    summary: "Gộp CT scan, kinh tế Leontief, mật mã Hill, dân số Leslie, tài chính Markowitz và kỹ thuật kết cấu.",
    sourceIds: [
      "ct-scan-linear-system-reconstruction",
      "leontief-input-output-economy",
      "hill-cipher-modular-matrix-cryptography",
      "leslie-matrix-population-growth",
      "markowitz-portfolio-covariance-optimization",
      "finite-element-method-global-stiffness-matrix"
    ],
    example: "Trong CT scan, đại số tuyến tính thường xuất hiện dưới dạng gì?",
    solution: "Dưới dạng hệ phương trình tuyến tính dùng để tái tạo hình ảnh bên trong cơ thể."
  }
];

const REMOVE_WHEN_MERGING_IDS = new Set([
  // Phần phần mềm / tính toán số không cần cho web học lý thuyết để thi
  "sage-computation",
  "numerical-gauss",
  "floating-point-error",
  "partial-pivoting",
  "permutation-matrix",
  "solve-with-lu",
  "forward-back-substitution",
  "lu-many-right-sides",
  "determinant-from-pivots",
  "power-method",
  "dominant-eigenvalue",
  "normalization-power-method",
  "inverse-power-method",
  "shifted-inverse-power",
  "power-method-limitations",
  "lu"
]);

function getBestTheoryItems(theoryArray) {
  const map = new Map();

  theoryArray.forEach((item, index) => {
    if (!item || !item.id) return;
    if (REMOVE_WHEN_MERGING_IDS.has(item.id)) return;

    const copy = {
      ...item,
      __originalIndex: index
    };

    // Nếu trùng id thì ưu tiên bản có video, còn không thì giữ bản xuất hiện trước
    if (!map.has(item.id)) {
      map.set(item.id, copy);
    } else {
      const oldItem = map.get(item.id);

      if (!oldItem.video && copy.video) {
        map.set(item.id, copy);
      }
    }
  });

  return map;
}

function makeMergedContent(parts) {
  return parts.map((item, index) => {
    return `
      <div class="merged-section">
        <h4>${index + 1}. ${item.title}</h4>
        ${item.formula ? `<div class="math-box">${item.formula}</div>` : ""}
        ${item.content || ""}
      </div>
    `;
  }).join("");
}

function buildMergedTheory(theoryArray) {
  const sourceMap = getBestTheoryItems(theoryArray);

  const merged = MERGE_GROUPS.map((group) => {
    const parts = group.sourceIds
      .map((id) => sourceMap.get(id))
      .filter(Boolean);

    if (parts.length === 0) return null;

    return {
      id: group.id,
      topic: group.topic,
      category: group.category,
      title: group.title,
      formula: group.formula,
      summary: group.summary,
      content: makeMergedContent(parts),
      example: group.example || parts[0].example || "",
      solution: group.solution || parts[0].solution || ""
    };
  }).filter(Boolean);

  return merged;
}

// Vì THEORY là const nên không gán lại THEORY = ...
// Ta xóa nội dung cũ rồi đưa danh sách đã gộp vào.
const MERGED_THEORY = buildMergedTheory(THEORY);
THEORY.length = 0;
THEORY.push(...MERGED_THEORY);

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

  if (
    text.includes("ki nguyen so") ||
    text.includes("ky nguyen so") ||
    text.includes("pagerank") ||
    text.includes("google") ||
    text.includes("chatgpt") ||
    text.includes("llm") ||
    text.includes("facebook") ||
    text.includes("netflix") ||
    text.includes("eigenfaces")
  ) {
    return "ĐSTT trong kỉ nguyên số";
  }

  if (
    text.includes("do hoa may tinh") ||
    text.includes("đồ họa máy tính") ||
    text.includes("instagram") ||
    text.includes("filter") ||
    text.includes("svd") ||
    text.includes("game") ||
    text.includes("3d") ||
    text.includes("panorama") ||
    text.includes("homography")
  ) {
    return "ĐSTT trong đồ họa máy tính";
  }

  if (
    text.includes("doi song") ||
    text.includes("đời sống") ||
    text.includes("ct scan") ||
    text.includes("leontief") ||
    text.includes("hill cipher") ||
    text.includes("leslie") ||
    text.includes("markowitz") ||
    text.includes("fem") ||
    text.includes("phan tu huu han")
  ) {
    return "ĐSTT trong đời sống";
  }

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
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function ensureMathBeautyStyle() {
  if (document.getElementById("math-beauty-style")) return;

  const style = document.createElement("style");
  style.id = "math-beauty-style";

  style.textContent = `
    .math-matrix {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      margin: 0 4px;
      font-weight: 700;
    }

    .math-matrix-bracket {
      font-size: 2.35em;
      line-height: 1;
      font-weight: 400;
      color: currentColor;
    }

    .math-matrix-grid {
      display: grid;
      column-gap: 12px;
      row-gap: 4px;
      padding: 0 5px;
      align-items: center;
      justify-items: center;
      line-height: 1.15;
    }

    .math-matrix-grid span {
      white-space: nowrap;
      display: inline-block;
      min-width: 18px;
      text-align: center;
    }

    .math-vec {
      display: inline-block;
      position: relative;
      padding-top: 2px;
      font-weight: 800;
    }

    .math-vec::after {
      content: "→";
      position: absolute;
      left: 50%;
      top: -0.72em;
      transform: translateX(-50%);
      font-size: 0.72em;
      font-weight: 800;
      line-height: 1;
    }

    .math-cases {
      display: inline-grid;
      grid-template-columns: auto;
      gap: 4px;
      padding-left: 10px;
      border-left: 3px solid currentColor;
      vertical-align: middle;
      margin: 0 4px;
      line-height: 1.35;
    }

    .math-inline {
      white-space: nowrap;
    }

    .option-label .math-matrix {
      transform: scale(0.95);
      transform-origin: left center;
    }
  `;

  document.head.appendChild(style);
}

function toSuperscript(value) {
  const map = {
    "0": "⁰",
    "1": "¹",
    "2": "²",
    "3": "³",
    "4": "⁴",
    "5": "⁵",
    "6": "⁶",
    "7": "⁷",
    "8": "⁸",
    "9": "⁹",
    "+": "⁺",
    "-": "⁻",
    "n": "ⁿ",
    "T": "ᵀ"
  };

  return String(value)
    .split("")
    .map((ch) => map[ch] || ch)
    .join("");
}

function toSubscript(value) {
  const map = {
    "0": "₀",
    "1": "₁",
    "2": "₂",
    "3": "₃",
    "4": "₄",
    "5": "₅",
    "6": "₆",
    "7": "₇",
    "8": "₈",
    "9": "₉",
    "i": "ᵢ",
    "j": "ⱼ",
    "k": "ₖ",
    "n": "ₙ",
    "m": "ₘ",
    "A": "ₐ",
    "B": "ᵦ",
    "a": "ₐ",
    "b": "ᵦ"
  };

  return String(value)
    .split("")
    .map((ch) => map[ch] || ch)
    .join("");
}

function stripMathDelimiters(text) {
  return String(text ?? "")
    .replace(/\\\(/g, "")
    .replace(/\\\)/g, "")
    .replace(/\\\[/g, "")
    .replace(/\\\]/g, "")
    .replace(/\$/g, "");
}

function formatInlineMath(text) {
  let s = String(text ?? "");

  s = stripMathDelimiters(s);

  s = s
    .replace(/\\left/g, "")
    .replace(/\\right/g, "")
    .replace(/\\,/g, " ")
    .replace(/\\;/g, " ")
    .replace(/\\:/g, " ")
    .replace(/\\!/g, "")
    .replace(/\\ /g, " ");

  s = s
    .replace(/\\cdot/g, "·")
    .replace(/\\times/g, "×")
    .replace(/\\neq/g, "≠")
    .replace(/\\ne/g, "≠")
    .replace(/\\geq/g, "≥")
    .replace(/\\leq/g, "≤")
    .replace(/\\infty/g, "∞")
    .replace(/\\pm/g, "±")
    .replace(/\\lambda/g, "λ")
    .replace(/\\Sigma/g, "Σ")
    .replace(/\\theta/g, "θ")
    .replace(/\\alpha/g, "α")
    .replace(/\\beta/g, "β");

  s = s.replace(/\\mathbb\{R\}\s*\^\s*\{?([0-9]+)\}?/g, function (_, pow) {
    return "ℝ" + toSuperscript(pow);
  });

  s = s.replace(/\\mathbb\{R\}/g, "ℝ");

  s = s.replace(/\\vec\{([^{}]+)\}/g, function (_, value) {
    return `<span class="math-vec">${value}</span>`;
  });

  s = s.replace(/\\overrightarrow\{([^{}]+)\}/g, function (_, value) {
    return `<span class="math-vec">${value}</span>`;
  });

  s = s.replace(/\\mathbf\{([^{}]+)\}/g, function (_, value) {
    return `<b>${value}</b>`;
  });

  s = s.replace(/\\text\{([^{}]+)\}/g, "$1");

  s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, function (_, a, b) {
    return `(${formatInlineMath(a)})/(${formatInlineMath(b)})`;
  });

  s = s.replace(/\^\{([^{}]+)\}/g, function (_, value) {
    return `<sup>${formatInlineMath(value)}</sup>`;
  });

  s = s.replace(/_\{([^{}]+)\}/g, function (_, value) {
    return `<sub>${formatInlineMath(value)}</sub>`;
  });

  s = s.replace(/\^([0-9nT+-])/g, function (_, value) {
    return toSuperscript(value);
  });

  s = s.replace(/_([A-Za-z0-9])/g, function (_, value) {
    return `<sub>${value}</sub>`;
  });

  s = s
    .replace(/\\begin\{align\*\}/g, "")
    .replace(/\\end\{align\*\}/g, "")
    .replace(/\\begin\{align\}/g, "")
    .replace(/\\end\{align\}/g, "")
    .replace(/\\\\/g, "<br>")
    .replace(/&=/g, "=")
    .replace(/&/g, "");

  s = s.replace(/\s+/g, " ").trim();

  return s;
}

function matrixRowsToHtml(rows, leftBracket = "(", rightBracket = ")") {
  const cleanRows = rows
    .map((row) => row.trim())
    .filter(Boolean)
    .map((row) =>
      row
        .split("&")
        .map((cell) => formatInlineMath(cell).trim())
    );

  if (!cleanRows.length) return "";

  const colCount = Math.max(...cleanRows.map((row) => row.length));
  const columns = Array(colCount).fill("auto").join(" ");

  let html = "";

  cleanRows.forEach((row) => {
    for (let i = 0; i < colCount; i++) {
      html += `<span>${row[i] || ""}</span>`;
    }
  });

  return `
    <span class="math-matrix">
      <span class="math-matrix-bracket">${leftBracket}</span>
      <span class="math-matrix-grid" style="grid-template-columns:${columns};">
        ${html}
      </span>
      <span class="math-matrix-bracket">${rightBracket}</span>
    </span>
  `;
}

function convertLatexMatrices(text) {
  let result = String(text ?? "");

  result = result.replace(
    /\\left\s*\(\s*\\begin\{array\}\{[^}]*\}([\s\S]*?)\\end\{array\}\s*\\right\s*\)/g,
    function (_, body) {
      return matrixRowsToHtml(body.split(/\\\\/), "(", ")");
    }
  );

  result = result.replace(
    /\\left\s*\[\s*\\begin\{array\}\{[^}]*\}([\s\S]*?)\\end\{array\}\s*\\right\s*\]/g,
    function (_, body) {
      return matrixRowsToHtml(body.split(/\\\\/), "[", "]");
    }
  );

  result = result.replace(
    /\\begin\{pmatrix\}([\s\S]*?)\\end\{pmatrix\}/g,
    function (_, body) {
      return matrixRowsToHtml(body.split(/\\\\/), "(", ")");
    }
  );

  result = result.replace(
    /\\begin\{bmatrix\}([\s\S]*?)\\end\{bmatrix\}/g,
    function (_, body) {
      return matrixRowsToHtml(body.split(/\\\\/), "[", "]");
    }
  );

  result = result.replace(
    /\\begin\{matrix\}([\s\S]*?)\\end\{matrix\}/g,
    function (_, body) {
      return matrixRowsToHtml(body.split(/\\\\/), "(", ")");
    }
  );

  return result;
}

function convertLatexCases(text) {
  return String(text ?? "").replace(
    /\\begin\{cases\}([\s\S]*?)\\end\{cases\}/g,
    function (_, body) {
      const rows = body
        .split(/\\\\/)
        .map((row) => formatInlineMath(row).trim())
        .filter(Boolean)
        .map((row) => `<span>${row}</span>`)
        .join("");

      return `<span class="math-cases">${rows}</span>`;
    }
  );
}

function simpleLatexText(text) {
  return formatInlineMath(text);
}

function convertLatexArrayToBracketMatrix(text) {
  return convertLatexMatrices(text);
}

function matrixTextToHtml(matrixText) {
  try {
    let raw = String(matrixText ?? "").trim();

    raw = raw
      .replace(/^\s*\[\[/, "")
      .replace(/\]\]\s*$/, "");

    const rows = raw
      .split(/\],\s*\[/)
      .map((row) =>
        row
          .replace(/^\[/, "")
          .replace(/\]$/, "")
          .split(",")
          .map((cell) => formatInlineMath(cell).trim())
      );

    const colCount = Math.max(...rows.map((row) => row.length));
    const columns = Array(colCount).fill("auto").join(" ");

    let html = "";

    rows.forEach((row) => {
      for (let i = 0; i < colCount; i++) {
        html += `<span>${row[i] || ""}</span>`;
      }
    });

    return `
      <span class="math-matrix">
        <span class="math-matrix-bracket">[</span>
        <span class="math-matrix-grid" style="grid-template-columns:${columns};">
          ${html}
        </span>
        <span class="math-matrix-bracket">]</span>
      </span>
    `;
  } catch (error) {
    return formatInlineMath(matrixText);
  }
}

function parseMathBeauty(text) {
  if (text === null || text === undefined) return "";

  ensureMathBeautyStyle();

  let result = String(text);

  result = convertLatexMatrices(result);
  result = convertLatexCases(result);

  result = result.replace(/\[\[([\s\S]*?)\]\]/g, function (match) {
    return matrixTextToHtml(match);
  });

  result = formatInlineMath(result);

  return result;
}

function renderMath() {
  ensureMathBeautyStyle();

  if (window.MathJax && window.MathJax.typesetPromise && app) {
    try {
      if (window.MathJax.typesetClear) {
        window.MathJax.typesetClear([app]);
      }

      window.MathJax.typesetPromise([app]).catch((err) => console.error(err));
    } catch (err) {
      console.error(err);
    }
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
    "Trực giao": "⊥",
    "ĐSTT trong kỉ nguyên số": "AI",
    "ĐSTT trong đồ họa máy tính": "3D",
    "ĐSTT trong đời sống": "∞",
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
const PRACTICE_BANK = makeFixedPracticeBank();

function makeQuestion(id, topic, subtopic, level, question, options, answer, explain) {
  return {
    id,
    type: "mcq",
    topic,
    subtopic,
    level,
    question,
    options,
    answer,
    explain
  };
}

function makeFixedPracticeBank() {
  const bank = {};

  function add(lessonId, topic, subtopic, questions) {
    bank[lessonId] = questions.map((q, index) =>
      makeQuestion(
        `${lessonId}_practice_${index + 1}`,
        topic,
        subtopic,
        q.level,
        q.question,
        q.options,
        q.answer,
        q.explain
      )
    );
  }

  // =========================
  // CHƯƠNG 1
  // =========================

  add("ch1-linear-systems-and-solutions", "Hệ phương trình", "Hệ phương trình tuyến tính và không gian nghiệm", [
    {
      level: "easy",
      question: "Hệ phương trình tuyến tính là gì?",
      options: [
        "Tập hợp nhiều phương trình tuyến tính dùng chung các ẩn",
        "Một phương trình có biến bậc hai",
        "Một phép nhân hai ma trận",
        "Một công thức tính diện tích"
      ],
      answer: 0,
      explain: "Hệ phương trình tuyến tính gồm nhiều phương trình tuyến tính có chung các ẩn."
    },
    {
      level: "easy",
      question: "Biến có pivot được gọi là gì?",
      options: [
        "Biến cơ bản",
        "Biến tự do",
        "Biến sai số",
        "Biến phụ thuộc thời gian"
      ],
      answer: 0,
      explain: "Biến có pivot là biến cơ bản."
    },
    {
      level: "easy",
      question: "Biến không có pivot được gọi là gì?",
      options: [
        "Biến tự do",
        "Biến cơ bản",
        "Biến hằng",
        "Biến bị xóa"
      ],
      answer: 0,
      explain: "Biến không có pivot là biến tự do."
    },
    {
      level: "medium",
      question: "Một hệ có 4 biến, 3 pivot và không có mâu thuẫn thì có bao nhiêu biến tự do?",
      options: [
        "1",
        "3",
        "4",
        "0"
      ],
      answer: 0,
      explain: "Số biến tự do = số biến - số pivot = 4 - 3 = 1."
    },
    {
      level: "medium",
      question: "Nếu hệ không có mâu thuẫn và có biến tự do thì hệ có bao nhiêu nghiệm?",
      options: [
        "Vô số nghiệm",
        "Không có nghiệm",
        "Đúng một nghiệm",
        "Luôn có hai nghiệm"
      ],
      answer: 0,
      explain: "Có biến tự do nghĩa là có thể chọn giá trị tùy ý, nên hệ thường có vô số nghiệm."
    },
    {
      level: "medium",
      question: "Hàng [0 0 0 | 5] trong ma trận mở rộng biểu diễn điều gì?",
      options: [
        "0 = 5, nên hệ vô nghiệm",
        "5 = 0, nên hệ có nghiệm duy nhất",
        "Có một biến tự do",
        "Có một pivot ở cột cuối"
      ],
      answer: 0,
      explain: "Hàng [0 0 0 | 5] tương ứng với phương trình 0 = 5, đây là mâu thuẫn."
    },
    {
      level: "easy",
      question: "Nếu mỗi biến đều có pivot và hệ không mâu thuẫn thì hệ có bao nhiêu nghiệm?",
      options: [
        "Một nghiệm duy nhất",
        "Vô số nghiệm",
        "Không có nghiệm",
        "Không xác định được"
      ],
      answer: 0,
      explain: "Không có biến tự do và không mâu thuẫn thì hệ có nghiệm duy nhất."
    },
    {
      level: "medium",
      question: "Trong hệ phương trình tuyến tính, pivot giúp ta xác định điều gì?",
      options: [
        "Biến nào bị ràng buộc và biến nào tự do",
        "Màu của ma trận",
        "Số hàng luôn bằng số cột",
        "Hệ luôn vô nghiệm"
      ],
      answer: 0,
      explain: "Pivot cho biết biến cơ bản và giúp xác định số biến tự do."
    },
    {
      level: "hard",
      question: "Một hệ có 5 biến, 5 pivot và không mâu thuẫn thì kết luận đúng là gì?",
      options: [
        "Hệ có nghiệm duy nhất",
        "Hệ có vô số nghiệm",
        "Hệ vô nghiệm",
        "Hệ có 5 biến tự do"
      ],
      answer: 0,
      explain: "Có đủ pivot cho 5 biến và không mâu thuẫn nên hệ có nghiệm duy nhất."
    },
    {
      level: "hard",
      question: "Một hệ có 3 biến, 2 pivot và có hàng mâu thuẫn thì kết luận đúng là gì?",
      options: [
        "Hệ vô nghiệm",
        "Hệ có vô số nghiệm",
        "Hệ có nghiệm duy nhất",
        "Hệ có đúng 2 nghiệm"
      ],
      answer: 0,
      explain: "Chỉ cần có hàng mâu thuẫn thì hệ vô nghiệm, dù có biến tự do hay không."
    }
  ]);

  add("ch1-gauss-rref", "Hệ phương trình", "Khử Gauss, ma trận mở rộng và RREF", [
    {
      level: "easy",
      question: "Khử Gauss dùng phép biến đổi nào?",
      options: [
        "Phép biến đổi hàng",
        "Phép đổi màu ma trận",
        "Phép đạo hàm",
        "Phép lấy căn"
      ],
      answer: 0,
      explain: "Khử Gauss dùng các phép biến đổi hàng sơ cấp để đưa ma trận về dạng dễ đọc nghiệm."
    },
    {
      level: "easy",
      question: "Ma trận mở rộng thường được viết dưới dạng nào?",
      options: [
        "[A | b]",
        "A + b",
        "A - b",
        "det(A)"
      ],
      answer: 0,
      explain: "[A | b] gồm ma trận hệ số A và cột vế phải b."
    },
    {
      level: "easy",
      question: "Trong RREF, các hàng toàn số 0 phải nằm ở đâu?",
      options: [
        "Dưới cùng",
        "Trên cùng",
        "Ở giữa",
        "Ở cột đầu tiên"
      ],
      answer: 0,
      explain: "Trong dạng bậc thang rút gọn, các hàng toàn số 0 nằm dưới cùng."
    },
    {
      level: "medium",
      question: "Trong RREF, pivot phải có giá trị bằng bao nhiêu?",
      options: [
        "1",
        "0",
        "-1",
        "Bất kỳ số nào"
      ],
      answer: 0,
      explain: "Pivot trong RREF là số 1 đầu tiên khác 0 của mỗi hàng."
    },
    {
      level: "medium",
      question: "Trong một cột chứa pivot của RREF, các phần tử còn lại phải như thế nào?",
      options: [
        "Đều bằng 0",
        "Đều bằng 1",
        "Đều khác 0",
        "Đều âm"
      ],
      answer: 0,
      explain: "Trong RREF, mỗi cột chứa pivot phải có các phần tử còn lại bằng 0."
    },
    {
      level: "medium",
      question: "Nếu ma trận RREF có hàng [0 0 0 | 1] thì hệ như thế nào?",
      options: [
        "Vô nghiệm",
        "Có nghiệm duy nhất",
        "Có vô số nghiệm",
        "Có đúng 1 biến tự do"
      ],
      answer: 0,
      explain: "Hàng này biểu diễn 0 = 1, là mâu thuẫn nên hệ vô nghiệm."
    },
    {
      level: "easy",
      question: "Mục tiêu của khử Gauss là gì?",
      options: [
        "Đưa hệ về dạng dễ đọc nghiệm",
        "Làm ma trận lớn hơn",
        "Xóa toàn bộ hệ số",
        "Biến mọi ma trận thành ma trận đơn vị"
      ],
      answer: 0,
      explain: "Khử Gauss giúp đưa ma trận về dạng bậc thang hoặc RREF để đọc nghiệm."
    },
    {
      level: "hard",
      question: "Ma trận nào chắc chắn chưa phải RREF?",
      options: [
        "Có số khác 0 nằm trên pivot",
        "Có pivot bằng 1",
        "Có hàng 0 ở dưới cùng",
        "Có các pivot dịch sang phải"
      ],
      answer: 0,
      explain: "Trong RREF, các số trên và dưới pivot trong cùng cột phải bằng 0."
    },
    {
      level: "hard",
      question: "Nếu hệ có 3 biến, RREF có 2 pivot và không có hàng mâu thuẫn thì hệ có bao nhiêu nghiệm?",
      options: [
        "Vô số nghiệm",
        "Vô nghiệm",
        "Một nghiệm duy nhất",
        "Không đủ dữ kiện"
      ],
      answer: 0,
      explain: "Có 1 biến tự do và không mâu thuẫn nên hệ có vô số nghiệm."
    },
    {
      level: "medium",
      question: "Khi đọc nghiệm từ RREF, biến không có pivot được gọi là gì?",
      options: [
        "Biến tự do",
        "Biến cơ bản",
        "Biến sai",
        "Biến bị loại"
      ],
      answer: 0,
      explain: "Biến không có pivot là biến tự do."
    }
  ]);

  // =========================
  // CHƯƠNG 2
  // =========================

  add("ch2-vectors-span-independence", "Vector", "Vector, tổ hợp tuyến tính, span và độc lập tuyến tính", [
    {
      level: "easy",
      question: "Vector có thể hiểu đơn giản là gì?",
      options: [
        "Một mũi tên có hướng và độ dài",
        "Một số không đổi",
        "Một đoạn văn",
        "Một phép xác suất"
      ],
      answer: 0,
      explain: "Vector có thể hiểu là mũi tên có hướng và độ dài."
    },
    {
      level: "easy",
      question: "Cộng vector u=(1,2) và v=(3,4) được gì?",
      options: [
        "(4,6)",
        "(3,8)",
        "(2,2)",
        "(1,4)"
      ],
      answer: 0,
      explain: "Cộng từng thành phần: u+v=(1+3,2+4)=(4,6)."
    },
    {
      level: "easy",
      question: "Tổ hợp tuyến tính có dạng nào?",
      options: [
        "c₁v₁ + c₂v₂ + ... + cₙvₙ",
        "v₁/v₂",
        "det(v)",
        "v² + 1"
      ],
      answer: 0,
      explain: "Tổ hợp tuyến tính là tổng các vector đã nhân với hệ số."
    },
    {
      level: "medium",
      question: "span(v1,v2) là gì?",
      options: [
        "Tập tất cả tổ hợp tuyến tính của v1 và v2",
        "Tích vô hướng của v1 và v2",
        "Định thức của v1 và v2",
        "Một số thực"
      ],
      answer: 0,
      explain: "span là tập tất cả vector tạo được từ các tổ hợp tuyến tính."
    },
    {
      level: "medium",
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
      level: "medium",
      question: "Hai vector (2,2) và (1,1) có độc lập tuyến tính không?",
      options: [
        "Không",
        "Có",
        "Chỉ trong R³",
        "Không xác định được"
      ],
      answer: 0,
      explain: "(2,2)=2(1,1), nên chúng phụ thuộc tuyến tính."
    },
    {
      level: "easy",
      question: "Nhân vector với số âm thường làm gì với hướng của vector?",
      options: [
        "Đổi hướng",
        "Luôn giữ nguyên hướng",
        "Biến thành ma trận",
        "Biến thành định thức"
      ],
      answer: 0,
      explain: "Nhân với số âm làm vector đổi hướng."
    },
    {
      level: "hard",
      question: "Ba vector trong R² có thể độc lập tuyến tính không?",
      options: [
        "Không",
        "Có",
        "Chỉ khi cả ba khác 0",
        "Chỉ khi có vector 0"
      ],
      answer: 0,
      explain: "Trong R², tối đa chỉ có 2 vector độc lập tuyến tính."
    },
    {
      level: "medium",
      question: "Nếu một tập vector có vector 0 thì tập đó như thế nào?",
      options: [
        "Phụ thuộc tuyến tính",
        "Độc lập tuyến tính",
        "Luôn là cơ sở",
        "Luôn sinh ra R²"
      ],
      answer: 0,
      explain: "Có vector 0 thì tồn tại tổ hợp không tầm thường tạo ra vector 0."
    },
    {
      level: "hard",
      question: "Vector (6,9) có thuộc span((2,3)) không?",
      options: [
        "Có, vì (6,9)=3(2,3)",
        "Không, vì khác (2,3)",
        "Chỉ khi hệ số bằng 0",
        "Không thể biết"
      ],
      answer: 0,
      explain: "(6,9)=3(2,3), nên thuộc span((2,3))."
    }
  ]);

  add("ch2-matrix-products", "Ma trận", "Phép nhân ma trận với vector và ma trận", [
    {
      level: "easy",
      question: "Nếu A là ma trận m×n và x có n thành phần thì Ax có mấy thành phần?",
      options: [
        "m",
        "n",
        "m+n",
        "mn"
      ],
      answer: 0,
      explain: "Nếu A là m×n và x có n thành phần thì Ax là vector có m thành phần."
    },
    {
      level: "easy",
      question: "Muốn nhân AB, điều kiện kích thước là gì?",
      options: [
        "Số cột của A bằng số hàng của B",
        "Số hàng của A bằng số hàng của B",
        "A và B phải bằng nhau",
        "A phải là ma trận 0"
      ],
      answer: 0,
      explain: "AB xác định khi số cột của A bằng số hàng của B."
    },
    {
      level: "medium",
      question: "Nếu A là 2×3 và B là 3×4 thì AB có kích thước bao nhiêu?",
      options: [
        "2×4",
        "3×3",
        "4×2",
        "Không xác định"
      ],
      answer: 0,
      explain: "A(2×3) nhân B(3×4) được AB(2×4)."
    },
    {
      level: "medium",
      question: "Nếu A là 3×2 và x có 2 thành phần thì Ax có mấy thành phần?",
      options: [
        "3",
        "2",
        "5",
        "6"
      ],
      answer: 0,
      explain: "Kết quả Ax có số thành phần bằng số hàng của A."
    },
    {
      level: "easy",
      question: "Tích Ax có thể hiểu là gì?",
      options: [
        "Tổ hợp tuyến tính của các cột của A",
        "Định thức của A",
        "Nghịch đảo của x",
        "Tổng các hàng của A"
      ],
      answer: 0,
      explain: "Ax là tổ hợp tuyến tính của các cột của A với trọng số từ x."
    },
    {
      level: "medium",
      question: "Phép nhân ma trận có giao hoán không?",
      options: [
        "Thường không giao hoán",
        "Luôn giao hoán",
        "Không bao giờ xác định",
        "Chỉ giao hoán với vector 0"
      ],
      answer: 0,
      explain: "Thông thường AB khác BA, thậm chí BA có thể không xác định."
    },
    {
      level: "hard",
      question: "Nếu A là 2×3 và B là 3×2 thì AB có kích thước nào?",
      options: [
        "2×2",
        "3×3",
        "2×3",
        "Không xác định"
      ],
      answer: 0,
      explain: "A(2×3)B(3×2) cho kết quả 2×2."
    },
    {
      level: "hard",
      question: "Nếu A là 2×3 và B là 4×2 thì AB như thế nào?",
      options: [
        "Không xác định",
        "Có kích thước 2×2",
        "Có kích thước 4×3",
        "Luôn bằng 0"
      ],
      answer: 0,
      explain: "Số cột của A là 3, số hàng của B là 4, không bằng nhau nên AB không xác định."
    },
    {
      level: "medium",
      question: "A=[[1,2],[3,4]], x=(1,1). Ax bằng gì?",
      options: [
        "(3,7)",
        "(1,3)",
        "(2,4)",
        "(4,6)"
      ],
      answer: 0,
      explain: "Ax=(1+2,3+4)=(3,7)."
    },
    {
      level: "hard",
      question: "Nếu A là 4×2 và B là 2×5 thì AB có kích thước nào?",
      options: [
        "4×5",
        "2×2",
        "5×4",
        "Không xác định"
      ],
      answer: 0,
      explain: "A(4×2)B(2×5) cho kết quả 4×5."
    }
  ]);

  add("ch2-linear-transformations", "Biến đổi tuyến tính", "Biến đổi tuyến tính và hình học của ma trận", [
    {
      level: "easy",
      question: "Biến đổi tuyến tính giữ tính chất nào?",
      options: [
        "Cộng vector và nhân vector với số",
        "Chỉ giữ màu của hình",
        "Chỉ giữ độ dài",
        "Chỉ đổi tên vector"
      ],
      answer: 0,
      explain: "Biến đổi tuyến tính thỏa T(u+v)=T(u)+T(v) và T(cv)=cT(v)."
    },
    {
      level: "easy",
      question: "Nếu T tuyến tính thì T(2u+3v) bằng gì?",
      options: [
        "2T(u)+3T(v)",
        "T(u)+T(v)",
        "5T(u)",
        "T(6uv)"
      ],
      answer: 0,
      explain: "Theo tính tuyến tính, T(2u+3v)=2T(u)+3T(v)."
    },
    {
      level: "medium",
      question: "Công thức T(x)=Ax nghĩa là gì?",
      options: [
        "Ma trận A biến vector x thành vector mới",
        "A là định thức",
        "x là số nguyên tố",
        "T luôn bằng 0"
      ],
      answer: 0,
      explain: "T(x)=Ax nghĩa là dùng ma trận A tác động lên vector x."
    },
    {
      level: "medium",
      question: "Ma trận chuẩn của T được tạo từ đâu?",
      options: [
        "Các vector T(e₁), T(e₂), ... làm cột",
        "Các định thức của T",
        "Các hàng toàn số 0",
        "Các số ngẫu nhiên"
      ],
      answer: 0,
      explain: "Ma trận chuẩn của T có các cột là ảnh của các vector cơ sở chuẩn."
    },
    {
      level: "easy",
      question: "Phản xạ qua trục hoành biến (x,y) thành gì?",
      options: [
        "(x,-y)",
        "(-x,y)",
        "(-x,-y)",
        "(y,x)"
      ],
      answer: 0,
      explain: "Phản xạ qua trục hoành giữ x và đổi dấu y."
    },
    {
      level: "medium",
      question: "Ảnh của T, Image(T), cho biết điều gì?",
      options: [
        "Các vector đầu ra có thể tạo được",
        "Các vector bị đưa về 0",
        "Ma trận nghịch đảo của A",
        "Định thức của A"
      ],
      answer: 0,
      explain: "Image(T) là tập tất cả đầu ra có thể tạo được."
    },
    {
      level: "medium",
      question: "Hạt nhân Ker(T) gồm những vector nào?",
      options: [
        "Các vector bị T đưa về 0",
        "Các vector đầu ra bất kỳ",
        "Các hàng của ma trận",
        "Các giá trị riêng"
      ],
      answer: 0,
      explain: "Ker(T)=Null(A) là tập các vector x sao cho T(x)=0."
    },
    {
      level: "hard",
      question: "Nếu T(e₁)=(1,2) và T(e₂)=(3,4), ma trận chuẩn của T là gì?",
      options: [
        "[[1,3],[2,4]]",
        "[[1,2],[3,4]]",
        "[[3,1],[4,2]]",
        "[[2,1],[4,3]]"
      ],
      answer: 0,
      explain: "T(e₁) và T(e₂) được đặt làm các cột, nên A=[[1,3],[2,4]]."
    },
    {
      level: "hard",
      question: "Nếu x thuộc Ker(T) thì T(x) bằng gì?",
      options: [
        "0",
        "x",
        "1",
        "T"
      ],
      answer: 0,
      explain: "Theo định nghĩa, x thuộc Ker(T) khi T(x)=0."
    },
    {
      level: "easy",
      question: "Ma trận có thể biểu diễn phép biến đổi nào?",
      options: [
        "Quay, phản xạ, co giãn hoặc biến dạng",
        "Viết đoạn văn",
        "Đổi mật khẩu",
        "Tạo âm thanh"
      ],
      answer: 0,
      explain: "Trong hình học, ma trận có thể biểu diễn nhiều phép biến đổi vector."
    }
  ]);

  // =========================
  // CHƯƠNG 3
  // =========================

  add("ch3-invertible-matrices", "Ma trận", "Ma trận khả nghịch và ma trận nghịch đảo", [
    {
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
      level: "easy",
      question: "Nếu A khả nghịch thì AA⁻¹ bằng gì?",
      options: [
        "I",
        "0",
        "A",
        "A²"
      ],
      answer: 0,
      explain: "Theo định nghĩa, AA⁻¹=I và A⁻¹A=I."
    },
    {
      level: "medium",
      question: "Ma trận khả nghịch bắt buộc phải là loại ma trận nào?",
      options: [
        "Ma trận vuông",
        "Ma trận hàng",
        "Ma trận cột",
        "Ma trận không có kích thước"
      ],
      answer: 0,
      explain: "Chỉ ma trận vuông mới có thể có nghịch đảo."
    },
    {
      level: "medium",
      question: "Nếu A khả nghịch và Ax=b thì nghiệm x là gì?",
      options: [
        "x=A⁻¹b",
        "x=Ab",
        "x=A+b",
        "x=bA"
      ],
      answer: 0,
      explain: "Nhân hai vế với A⁻¹ được x=A⁻¹b."
    },
    {
      level: "medium",
      question: "Với ma trận vuông 2×2, nếu det(A) khác 0 thì A như thế nào?",
      options: [
        "Khả nghịch",
        "Không khả nghịch",
        "Luôn bằng I",
        "Không phải ma trận"
      ],
      answer: 0,
      explain: "det(A)≠0 thì A khả nghịch."
    },
    {
      level: "medium",
      question: "Nếu det(A)=0 thì A như thế nào?",
      options: [
        "Không khả nghịch",
        "Luôn khả nghịch",
        "Luôn bằng I",
        "Không thể nhân với vector"
      ],
      answer: 0,
      explain: "det(A)=0 nghĩa là A không khả nghịch."
    },
    {
      level: "hard",
      question: "Muốn tìm A⁻¹ bằng RREF, ta ghép ma trận nào?",
      options: [
        "[A | I]",
        "[I | A]",
        "[A | 0]",
        "[det(A) | A]"
      ],
      answer: 0,
      explain: "Ta ghép [A | I] rồi biến đổi về [I | A⁻¹]."
    },
    {
      level: "hard",
      question: "Nếu RREF(A)=I thì A có khả nghịch không?",
      options: [
        "Có",
        "Không",
        "Chỉ khi A toàn số 0",
        "Không đủ dữ kiện"
      ],
      answer: 0,
      explain: "Nếu A hàng tương đương với I thì A khả nghịch."
    },
    {
      level: "easy",
      question: "Ma trận đơn vị I có nghịch đảo là gì?",
      options: [
        "I",
        "0",
        "-I",
        "I² + A"
      ],
      answer: 0,
      explain: "Nghịch đảo của ma trận đơn vị vẫn là I."
    },
    {
      level: "hard",
      question: "Cho A=[[1,2],[3,4]]. A có khả nghịch không?",
      options: [
        "Có, vì det(A)=-2 khác 0",
        "Không, vì det(A)=0",
        "Có, vì A không vuông",
        "Không, vì A có số âm"
      ],
      answer: 0,
      explain: "det(A)=1·4-2·3=-2, khác 0 nên A khả nghịch."
    }
  ]);

  add("ch3-basis-coordinates", "Không gian vector", "Cơ sở và hệ tọa độ", [
    {
      level: "easy",
      question: "Một tập vector là cơ sở khi thỏa mãn điều kiện nào?",
      options: [
        "Vừa sinh ra không gian vừa độc lập tuyến tính",
        "Chỉ có một vector",
        "Chỉ gồm vector 0",
        "Chỉ có vector cùng phương"
      ],
      answer: 0,
      explain: "Cơ sở phải sinh ra không gian và độc lập tuyến tính."
    },
    {
      level: "easy",
      question: "Cơ sở chuẩn của R² là gì?",
      options: [
        "(1,0) và (0,1)",
        "(1,1) và (2,2)",
        "(0,0) và (1,1)",
        "(2,0) và (4,0)"
      ],
      answer: 0,
      explain: "Cơ sở chuẩn của R² là e₁=(1,0), e₂=(0,1)."
    },
    {
      level: "medium",
      question: "Nếu v=3b₁-2b₂ thì tọa độ của v theo cơ sở B là gì?",
      options: [
        "(3,-2)",
        "(-2,3)",
        "(3,2)",
        "(-3,2)"
      ],
      answer: 0,
      explain: "Các hệ số trước b₁ và b₂ là tọa độ của v theo B."
    },
    {
      level: "medium",
      question: "Nếu một tập sinh ra R² nhưng phụ thuộc tuyến tính thì có là cơ sở của R² không?",
      options: [
        "Không",
        "Có",
        "Chỉ khi có vector 0",
        "Luôn đúng"
      ],
      answer: 0,
      explain: "Cơ sở phải độc lập tuyến tính, nên tập phụ thuộc không phải cơ sở."
    },
    {
      level: "medium",
      question: "Nếu hai vector trong R² không cùng phương thì thường có thể tạo thành gì?",
      options: [
        "Một cơ sở của R²",
        "Một vector 0",
        "Một ma trận không vuông",
        "Một hệ vô nghiệm"
      ],
      answer: 0,
      explain: "Hai vector không cùng phương trong R² độc lập và sinh ra R²."
    },
    {
      level: "easy",
      question: "Tọa độ theo cơ sở cho biết điều gì?",
      options: [
        "Các trọng số để tạo ra vector từ cơ sở đó",
        "Định thức của vector",
        "Độ dài của ma trận",
        "Số nghiệm của hệ"
      ],
      answer: 0,
      explain: "Tọa độ theo cơ sở là các hệ số trong tổ hợp tuyến tính của cơ sở."
    },
    {
      level: "hard",
      question: "Trong R², tập {(1,0),(2,0)} có là cơ sở không?",
      options: [
        "Không, vì hai vector cùng phương",
        "Có, vì có hai vector",
        "Có, vì không có vector 0",
        "Không, vì có 3 vector"
      ],
      answer: 0,
      explain: "Hai vector cùng phương nên phụ thuộc tuyến tính và không sinh ra R²."
    },
    {
      level: "hard",
      question: "Một cơ sở của R³ cần bao nhiêu vector độc lập tuyến tính?",
      options: [
        "3",
        "2",
        "1",
        "4"
      ],
      answer: 0,
      explain: "R³ cần 3 vector độc lập tuyến tính để tạo thành cơ sở."
    },
    {
      level: "medium",
      question: "Nếu B gồm b₁,b₂ và [v]B=(4,1), v được viết như thế nào?",
      options: [
        "v=4b₁+b₂",
        "v=b₁+4b₂",
        "v=4b₁-b₂",
        "v=b₁-b₂"
      ],
      answer: 0,
      explain: "Tọa độ (4,1) nghĩa là v=4b₁+1b₂."
    },
    {
      level: "hard",
      question: "Nếu một tập vector là cơ sở thì biểu diễn của mỗi vector theo cơ sở đó như thế nào?",
      options: [
        "Duy nhất",
        "Luôn có vô số cách",
        "Luôn không tồn tại",
        "Luôn bằng 0"
      ],
      answer: 0,
      explain: "Vì cơ sở độc lập tuyến tính và sinh ra không gian, biểu diễn là duy nhất."
    }
  ]);

  add("ch3-determinants", "Định thức", "Định thức và ý nghĩa của định thức", [
    {
      level: "easy",
      question: "Công thức định thức của ma trận [[a,b],[c,d]] là gì?",
      options: [
        "ad-bc",
        "ab-cd",
        "a+b+c+d",
        "ac-bd"
      ],
      answer: 0,
      explain: "det([[a,b],[c,d]])=ad-bc."
    },
    {
      level: "easy",
      question: "Nếu det(A)=0 thì A có khả nghịch không?",
      options: [
        "Không",
        "Có",
        "Luôn bằng I",
        "Không xác định được"
      ],
      answer: 0,
      explain: "det(A)=0 thì A không khả nghịch."
    },
    {
      level: "medium",
      question: "Nếu det(A)≠0 thì A như thế nào?",
      options: [
        "Khả nghịch",
        "Không khả nghịch",
        "Luôn là ma trận 0",
        "Không phải ma trận vuông"
      ],
      answer: 0,
      explain: "Ma trận vuông có định thức khác 0 thì khả nghịch."
    },
    {
      level: "medium",
      question: "det([[1,2],[3,4]]) bằng bao nhiêu?",
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
      level: "easy",
      question: "Giá trị tuyệt đối của định thức 2×2 liên quan đến đại lượng hình học nào?",
      options: [
        "Diện tích hình bình hành",
        "Chu vi hình tròn",
        "Thể tích hình cầu",
        "Độ dài đường chéo"
      ],
      answer: 0,
      explain: "|det(A)| bằng diện tích hình bình hành tạo bởi hai vector cột."
    },
    {
      level: "medium",
      question: "Nếu đổi chỗ hai hàng của ma trận thì định thức thay đổi thế nào?",
      options: [
        "Đổi dấu",
        "Không đổi",
        "Luôn bằng 0",
        "Tăng gấp đôi"
      ],
      answer: 0,
      explain: "Đổi chỗ hai hàng làm định thức đổi dấu."
    },
    {
      level: "medium",
      question: "Nếu một hàng của ma trận toàn số 0 thì định thức bằng bao nhiêu?",
      options: [
        "0",
        "1",
        "-1",
        "Không xác định"
      ],
      answer: 0,
      explain: "Ma trận có hàng toàn 0 thì các cột/hàng phụ thuộc, định thức bằng 0."
    },
    {
      level: "hard",
      question: "Nếu hai hàng của ma trận giống nhau thì định thức bằng bao nhiêu?",
      options: [
        "0",
        "1",
        "-1",
        "2"
      ],
      answer: 0,
      explain: "Hai hàng giống nhau làm ma trận phụ thuộc, định thức bằng 0."
    },
    {
      level: "hard",
      question: "Định thức giúp nhận biết điều gì về ma trận vuông?",
      options: [
        "Tính khả nghịch",
        "Số chữ số trong ma trận",
        "Màu của vector",
        "Tên của biến"
      ],
      answer: 0,
      explain: "det(A) khác 0 thì A khả nghịch, det(A)=0 thì không khả nghịch."
    },
    {
      level: "hard",
      question: "Nếu det(A)=5 thì phép biến đổi bởi A làm diện tích thay đổi thế nào?",
      options: [
        "Gấp 5 lần",
        "Không đổi",
        "Bằng 0",
        "Gấp 25 lần"
      ],
      answer: 0,
      explain: "Trong R², |det(A)| cho biết hệ số thay đổi diện tích."
    }
  ]);

  add("ch3-subspaces-rank-null", "Không gian vector", "Không gian con, Col(A), Null(A) và hạng ma trận", [
    {
      level: "easy",
      question: "Không gian cột Col(A) được tạo bởi gì?",
      options: [
        "Các tổ hợp tuyến tính của các cột của A",
        "Các hàng của A cộng lại",
        "Định thức của A",
        "Các số trên đường chéo"
      ],
      answer: 0,
      explain: "Col(A) là span của các cột của A."
    },
    {
      level: "easy",
      question: "Null(A) gồm những vector x thỏa mãn điều gì?",
      options: [
        "Ax=0",
        "Ax=b với b bất kỳ",
        "det(A)=1",
        "A+x=0"
      ],
      answer: 0,
      explain: "Null(A) là tập nghiệm của phương trình Ax=0."
    },
    {
      level: "medium",
      question: "Hạng của ma trận liên quan đến số lượng gì?",
      options: [
        "Số pivot",
        "Số hàng toàn 0 ban đầu",
        "Số dấu cộng",
        "Số nghiệm âm"
      ],
      answer: 0,
      explain: "rank(A) bằng số pivot, cũng là số cột độc lập tuyến tính."
    },
    {
      level: "medium",
      question: "Định lý rank-nullity có dạng nào?",
      options: [
        "rank(A)+dim Null(A)=n",
        "rank(A)-dim Null(A)=0",
        "rank(A)=det(A)",
        "dim Null(A)=m+n"
      ],
      answer: 0,
      explain: "Với A có n cột, rank(A)+dim Null(A)=n."
    },
    {
      level: "medium",
      question: "Nếu A có 5 cột và rank(A)=3 thì dim Null(A) bằng bao nhiêu?",
      options: [
        "2",
        "3",
        "5",
        "8"
      ],
      answer: 0,
      explain: "dim Null(A)=5-3=2."
    },
    {
      level: "easy",
      question: "Col(A) liên quan đến câu hỏi nào?",
      options: [
        "Ax=b có nghiệm hay không",
        "A có bao nhiêu chữ số",
        "A có màu gì",
        "x có phải số nguyên không"
      ],
      answer: 0,
      explain: "Ax=b có nghiệm khi b thuộc Col(A)."
    },
    {
      level: "hard",
      question: "Nếu Null(A) chỉ chứa vector 0 thì các cột của A như thế nào?",
      options: [
        "Độc lập tuyến tính",
        "Phụ thuộc tuyến tính",
        "Luôn bằng 0",
        "Không thể nhân được"
      ],
      answer: 0,
      explain: "Null(A)={0} nghĩa là phương trình Ax=0 chỉ có nghiệm tầm thường, nên các cột độc lập tuyến tính."
    },
    {
      level: "hard",
      question: "Nếu b không thuộc Col(A), phương trình Ax=b như thế nào?",
      options: [
        "Vô nghiệm",
        "Có nghiệm duy nhất",
        "Có vô số nghiệm",
        "Luôn đúng"
      ],
      answer: 0,
      explain: "b không tạo được từ các cột của A nên Ax=b không có nghiệm."
    },
    {
      level: "medium",
      question: "Không gian con phải chứa vector nào?",
      options: [
        "Vector 0",
        "Vector có toàn số 1",
        "Chỉ vector âm",
        "Chỉ vector đơn vị"
      ],
      answer: 0,
      explain: "Mọi không gian con đều phải chứa vector 0."
    },
    {
      level: "hard",
      question: "Nếu A có 4 cột và 4 pivot thì Null(A) có số chiều bao nhiêu?",
      options: [
        "0",
        "1",
        "4",
        "8"
      ],
      answer: 0,
      explain: "dim Null(A)=n-rank(A)=4-4=0."
    }
  ]);

  add("ch3-image-compression-basis", "Ứng dụng", "Nén hình ảnh và cơ sở phù hợp", [
    {
      level: "easy",
      question: "Ảnh số có thể xem như đối tượng toán học nào?",
      options: [
        "Ma trận các pixel",
        "Một đoạn văn",
        "Một số nguyên tố",
        "Một phương trình bậc hai"
      ],
      answer: 0,
      explain: "Ảnh số thường được biểu diễn bằng ma trận pixel."
    },
    {
      level: "easy",
      question: "Nén ảnh nhằm mục đích gì?",
      options: [
        "Giảm dung lượng nhưng giữ thông tin quan trọng",
        "Làm ảnh biến mất",
        "Tăng số pixel vô hạn",
        "Xóa hết màu sắc"
      ],
      answer: 0,
      explain: "Nén ảnh giữ lại phần quan trọng và bỏ bớt phần ít quan trọng."
    },
    {
      level: "medium",
      question: "Cơ sở phù hợp giúp biểu diễn dữ liệu như thế nào?",
      options: [
        "Gọn hơn",
        "Dài hơn nhưng khó hiểu hơn",
        "Không liên quan đến dữ liệu",
        "Luôn biến dữ liệu thành 0"
      ],
      answer: 0,
      explain: "Một cơ sở phù hợp giúp dữ liệu được biểu diễn bằng ít hệ số quan trọng hơn."
    },
    {
      level: "medium",
      question: "Trong nén ảnh, hệ số nhỏ thường được xử lý thế nào?",
      options: [
        "Có thể bỏ bớt",
        "Luôn giữ tất cả",
        "Nhân lên vô hạn",
        "Biến thành ma trận đơn vị"
      ],
      answer: 0,
      explain: "Các hệ số nhỏ thường chứa ít thông tin quan trọng hơn nên có thể bỏ bớt."
    },
    {
      level: "easy",
      question: "Pixel trong ảnh xám thường biểu diễn điều gì?",
      options: [
        "Độ sáng",
        "Số nghiệm của hệ",
        "Tên của ảnh",
        "Định thức của ảnh"
      ],
      answer: 0,
      explain: "Ảnh xám có thể xem là ma trận các giá trị độ sáng."
    },
    {
      level: "medium",
      question: "Vì sao đại số tuyến tính hữu ích trong xử lý ảnh?",
      options: [
        "Vì ảnh có thể biểu diễn bằng vector và ma trận",
        "Vì ảnh không có dữ liệu",
        "Vì ảnh chỉ là văn bản",
        "Vì ảnh không cần tính toán"
      ],
      answer: 0,
      explain: "Ảnh số là dữ liệu dạng ma trận, nên đại số tuyến tính rất hữu ích."
    },
    {
      level: "hard",
      question: "Ý tưởng chính khi chọn cơ sở tốt để nén dữ liệu là gì?",
      options: [
        "Tập trung thông tin vào ít hệ số quan trọng",
        "Tạo thêm nhiều hệ số ngẫu nhiên",
        "Làm dữ liệu dài hơn",
        "Xóa toàn bộ dữ liệu"
      ],
      answer: 0,
      explain: "Cơ sở tốt giúp biểu diễn dữ liệu bằng ít thành phần quan trọng."
    },
    {
      level: "hard",
      question: "Nếu chỉ giữ phần thông tin quan trọng nhất của ảnh thì ảnh thu được thường như thế nào?",
      options: [
        "Gần giống ảnh ban đầu nhưng dung lượng nhỏ hơn",
        "Luôn giống hệt 100%",
        "Luôn biến thành màu đen",
        "Không thể mở được"
      ],
      answer: 0,
      explain: "Nén ảnh thường tạo ảnh xấp xỉ, giữ được phần quan trọng."
    },
    {
      level: "medium",
      question: "Trong xử lý ảnh, ma trận lớn thường tương ứng với điều gì?",
      options: [
        "Ảnh có nhiều pixel",
        "Ảnh có ít chữ",
        "Ảnh không có dữ liệu",
        "Ảnh không thể nén"
      ],
      answer: 0,
      explain: "Nhiều pixel tạo thành ma trận lớn."
    },
    {
      level: "hard",
      question: "Nén ảnh bằng đại số tuyến tính thường chấp nhận điều gì?",
      options: [
        "Mất một ít thông tin ít quan trọng",
        "Mất toàn bộ dữ liệu",
        "Không thay đổi dung lượng",
        "Không dùng ma trận"
      ],
      answer: 0,
      explain: "Nén thường đánh đổi một ít độ chính xác để giảm dung lượng."
    }
  ]);

  // =========================
  // CHƯƠNG 4
  // =========================

  add("ch4-eigenvalues-eigenvectors", "Giá trị riêng", "Giá trị riêng, vector riêng và cách tìm", [
    {
      level: "easy",
      question: "Công thức cơ bản của giá trị riêng và vector riêng là gì?",
      options: [
        "Av = λv",
        "A+v=λ",
        "det(v)=A",
        "v=0"
      ],
      answer: 0,
      explain: "Vector riêng v khác 0 thỏa Av=λv."
    },
    {
      level: "easy",
      question: "Vector riêng sau khi nhân với A thì điều gì xảy ra?",
      options: [
        "Không đổi hướng, chỉ co giãn hoặc đổi chiều",
        "Luôn thành vector 0",
        "Luôn đổi sang hướng vuông góc",
        "Luôn biến thành ma trận"
      ],
      answer: 0,
      explain: "Vector riêng chỉ bị nhân bởi hệ số λ nên vẫn nằm trên cùng đường thẳng."
    },
    {
      level: "medium",
      question: "Trong Av=λv, λ gọi là gì?",
      options: [
        "Giá trị riêng",
        "Vector riêng",
        "Định thức",
        "Pivot"
      ],
      answer: 0,
      explain: "λ là giá trị riêng ứng với vector riêng v."
    },
    {
      level: "medium",
      question: "Trong Av=λv, v phải thỏa điều kiện nào?",
      options: [
        "v khác vector 0",
        "v luôn bằng 0",
        "v phải là ma trận vuông",
        "v phải có định thức"
      ],
      answer: 0,
      explain: "Vector riêng không được là vector 0."
    },
    {
      level: "medium",
      question: "Nếu Av=3v thì 3 là gì?",
      options: [
        "Giá trị riêng",
        "Vector riêng",
        "Ma trận đơn vị",
        "Biến tự do"
      ],
      answer: 0,
      explain: "3 là giá trị riêng tương ứng với vector v."
    },
    {
      level: "easy",
      question: "Muốn tìm giá trị riêng thường xét phương trình nào?",
      options: [
        "det(A-λI)=0",
        "A+λ=0",
        "v=λ",
        "det(v)=0"
      ],
      answer: 0,
      explain: "Giá trị riêng thường được tìm từ phương trình đặc trưng det(A-λI)=0."
    },
    {
      level: "hard",
      question: "Nếu A=[[2,0],[0,3]], vector (1,0) có giá trị riêng tương ứng là bao nhiêu?",
      options: [
        "2",
        "3",
        "0",
        "5"
      ],
      answer: 0,
      explain: "A(1,0)=(2,0)=2(1,0), nên λ=2."
    },
    {
      level: "hard",
      question: "Nếu A=[[2,0],[0,3]], vector (0,1) có giá trị riêng tương ứng là bao nhiêu?",
      options: [
        "3",
        "2",
        "0",
        "-1"
      ],
      answer: 0,
      explain: "A(0,1)=(0,3)=3(0,1), nên λ=3."
    },
    {
      level: "medium",
      question: "Ý nghĩa hình học của vector riêng là gì?",
      options: [
        "Hướng không bị đổi sau biến đổi",
        "Hướng luôn vuông góc với ban đầu",
        "Vector luôn bị xóa",
        "Vector luôn có độ dài 1"
      ],
      answer: 0,
      explain: "Vector riêng giữ nguyên hướng đường thẳng, chỉ bị kéo dài, co ngắn hoặc đổi chiều."
    },
    {
      level: "hard",
      question: "Vì sao vector 0 không được xem là vector riêng?",
      options: [
        "Vì vector 0 thỏa Av=λv với mọi λ nên không cho hướng riêng có ý nghĩa",
        "Vì vector 0 không thể cộng",
        "Vì vector 0 không thuộc không gian vector",
        "Vì vector 0 luôn có định thức"
      ],
      answer: 0,
      explain: "Vector riêng phải cho một hướng đặc biệt, còn vector 0 không có hướng."
    }
  ]);

  add("ch4-diagonalization", "Giá trị riêng", "Chéo hóa, ma trận tương tự và lũy thừa ma trận", [
    {
      level: "easy",
      question: "Dạng chéo hóa thường viết là gì?",
      options: [
        "A = PDP⁻¹",
        "A = P + D",
        "A = D - P",
        "A = P/P"
      ],
      answer: 0,
      explain: "Chéo hóa viết A dưới dạng A=PDP⁻¹."
    },
    {
      level: "easy",
      question: "Trong A=PDP⁻¹, D là ma trận gì?",
      options: [
        "Ma trận đường chéo chứa các giá trị riêng",
        "Ma trận toàn số 1",
        "Ma trận hàng",
        "Ma trận không có số"
      ],
      answer: 0,
      explain: "D chứa các giá trị riêng trên đường chéo."
    },
    {
      level: "medium",
      question: "Trong A=PDP⁻¹, P thường chứa gì?",
      options: [
        "Các vector riêng",
        "Các số ngẫu nhiên",
        "Các hàng toàn 0",
        "Các định thức"
      ],
      answer: 0,
      explain: "P thường có các cột là vector riêng."
    },
    {
      level: "medium",
      question: "Chéo hóa giúp tính gì dễ hơn?",
      options: [
        "Lũy thừa ma trận Aⁿ",
        "Số chữ cái trong tên ma trận",
        "Diện tích hình tròn",
        "Đạo hàm của vector"
      ],
      answer: 0,
      explain: "Nếu A=PDP⁻¹ thì Aⁿ=PDⁿP⁻¹."
    },
    {
      level: "medium",
      question: "Nếu A=PDP⁻¹ thì A² bằng gì?",
      options: [
        "PD²P⁻¹",
        "P²D²",
        "D²P",
        "A+D"
      ],
      answer: 0,
      explain: "Aⁿ=PDⁿP⁻¹, nên A²=PD²P⁻¹."
    },
    {
      level: "easy",
      question: "Ma trận tương tự thường có dạng nào?",
      options: [
        "B=P⁻¹AP",
        "B=A+P",
        "B=AP+1",
        "B=det(A)"
      ],
      answer: 0,
      explain: "Các ma trận tương tự thường liên hệ qua B=P⁻¹AP."
    },
    {
      level: "hard",
      question: "Một ma trận n×n cần bao nhiêu vector riêng độc lập tuyến tính để chéo hóa được?",
      options: [
        "n",
        "1",
        "n-1",
        "n+1"
      ],
      answer: 0,
      explain: "Cần đủ n vector riêng độc lập tuyến tính để lập ma trận P khả nghịch."
    },
    {
      level: "hard",
      question: "Vì sao Dⁿ dễ tính?",
      options: [
        "Chỉ cần nâng từng phần tử trên đường chéo lên lũy thừa n",
        "Vì D không có số",
        "Vì D luôn bằng 0",
        "Vì D không phải ma trận"
      ],
      answer: 0,
      explain: "Lũy thừa của ma trận đường chéo được tính theo từng phần tử đường chéo."
    },
    {
      level: "medium",
      question: "Nếu A không có đủ vector riêng độc lập thì A có chéo hóa được không?",
      options: [
        "Không",
        "Có",
        "Luôn có",
        "Chỉ khi A=0"
      ],
      answer: 0,
      explain: "Không đủ vector riêng độc lập thì không lập được P khả nghịch."
    },
    {
      level: "hard",
      question: "Chéo hóa liên hệ chặt chẽ nhất với khái niệm nào?",
      options: [
        "Giá trị riêng và vector riêng",
        "Tích phân",
        "Xác suất rời rạc",
        "Đồ thị hàm bậc hai"
      ],
      answer: 0,
      explain: "Chéo hóa dùng các giá trị riêng và vector riêng của ma trận."
    }
  ]);

  add("ch4-dynamical-systems", "Giá trị riêng", "Hệ thống động tuyến tính", [
    {
      level: "easy",
      question: "Hệ thống động tuyến tính thường có dạng nào?",
      options: [
        "x(k+1)=Ax(k)",
        "x²+y²=1",
        "A+B=0",
        "det(x)=A"
      ],
      answer: 0,
      explain: "Dạng cơ bản là x(k+1)=Ax(k)."
    },
    {
      level: "easy",
      question: "Vector x(k) thường biểu diễn điều gì?",
      options: [
        "Trạng thái của hệ tại thời điểm k",
        "Tên của hệ",
        "Màu của ma trận",
        "Số hàng của A"
      ],
      answer: 0,
      explain: "x(k) là trạng thái của hệ ở bước thời gian k."
    },
    {
      level: "medium",
      question: "Ma trận A trong hệ x(k+1)=Ax(k) có vai trò gì?",
      options: [
        "Biến trạng thái hiện tại thành trạng thái tiếp theo",
        "Lưu tên biến",
        "Luôn biến hệ thành 0",
        "Chỉ dùng để tính định thức"
      ],
      answer: 0,
      explain: "A mô tả quy luật chuyển trạng thái."
    },
    {
      level: "medium",
      question: "Giá trị riêng giúp phân tích hệ thống động như thế nào?",
      options: [
        "Cho biết xu hướng tăng, giảm hoặc ổn định theo các hướng riêng",
        "Cho biết màu của đồ thị",
        "Cho biết số chữ số của nghiệm",
        "Cho biết hệ luôn vô nghiệm"
      ],
      answer: 0,
      explain: "Giá trị riêng kiểm soát sự thay đổi theo các hướng vector riêng."
    },
    {
      level: "medium",
      question: "Nếu |λ|<1 thì thành phần theo hướng vector riêng đó thường như thế nào khi lặp?",
      options: [
        "Giảm dần về 0",
        "Tăng vô hạn",
        "Không đổi",
        "Luôn đổi sang hướng vuông góc"
      ],
      answer: 0,
      explain: "|λ|<1 làm thành phần đó nhỏ dần qua các lần lặp."
    },
    {
      level: "medium",
      question: "Nếu |λ|>1 thì thành phần theo hướng vector riêng đó thường như thế nào?",
      options: [
        "Tăng lớn dần",
        "Giảm về 0",
        "Luôn bằng 1",
        "Biến mất ngay lập tức"
      ],
      answer: 0,
      explain: "|λ|>1 làm độ lớn tăng qua các lần lặp."
    },
    {
      level: "hard",
      question: "Nếu λ=1 thì thành phần theo hướng vector riêng đó thường như thế nào?",
      options: [
        "Giữ nguyên độ lớn",
        "Luôn về 0",
        "Luôn tăng gấp đôi",
        "Không tồn tại"
      ],
      answer: 0,
      explain: "λ=1 nghĩa là thành phần đó giữ nguyên sau mỗi bước."
    },
    {
      level: "hard",
      question: "Nếu λ âm thì hệ có thể có hiện tượng gì khi lặp?",
      options: [
        "Đổi dấu qua các bước",
        "Luôn đứng yên",
        "Không thể tính",
        "Luôn vô nghiệm"
      ],
      answer: 0,
      explain: "Giá trị riêng âm làm thành phần theo hướng đó đổi dấu khi nhân lặp."
    },
    {
      level: "easy",
      question: "Hệ thống động tuyến tính xuất hiện trong lĩnh vực nào?",
      options: [
        "Mô hình dân số, Markov, kinh tế và nhiều hệ lặp khác",
        "Chỉ trong văn học",
        "Chỉ trong đánh máy",
        "Chỉ trong màu sắc"
      ],
      answer: 0,
      explain: "Hệ lặp tuyến tính xuất hiện trong nhiều mô hình thực tế."
    },
    {
      level: "hard",
      question: "Nếu A chéo hóa được, việc tính x(k)=Aᵏx(0) sẽ như thế nào?",
      options: [
        "Dễ hơn nhờ tính Dᵏ",
        "Không thể tính",
        "Luôn bằng 0",
        "Không liên quan đến vector riêng"
      ],
      answer: 0,
      explain: "Chéo hóa giúp tính Aᵏ bằng PDᵏP⁻¹."
    }
  ]);

  add("ch4-markov-pagerank", "Giá trị riêng", "Chuỗi Markov và PageRank", [
    {
      level: "easy",
      question: "Ma trận Markov mô tả điều gì?",
      options: [
        "Xác suất chuyển từ trạng thái này sang trạng thái khác",
        "Định thức của ma trận",
        "Độ dài của một vector",
        "Một phép quay hình học"
      ],
      answer: 0,
      explain: "Ma trận Markov mô tả xác suất chuyển trạng thái."
    },
    {
      level: "easy",
      question: "Vector trạng thái trong Markov thường chứa gì?",
      options: [
        "Xác suất ở các trạng thái",
        "Tên các trạng thái",
        "Các màu của trạng thái",
        "Các số bất kỳ không cần tổng"
      ],
      answer: 0,
      explain: "Vector trạng thái lưu xác suất hệ ở từng trạng thái."
    },
    {
      level: "medium",
      question: "Trạng thái ổn định thường thỏa mãn phương trình nào?",
      options: [
        "Mx=x",
        "M+x=0",
        "det(M)=x",
        "x=0 luôn"
      ],
      answer: 0,
      explain: "Trạng thái ổn định không đổi sau khi nhân với M, nên Mx=x."
    },
    {
      level: "medium",
      question: "PageRank dùng ý tưởng chính nào?",
      options: [
        "Trang quan trọng nếu được nhiều trang quan trọng khác liên kết đến",
        "Trang quan trọng nếu tên dài",
        "Trang quan trọng nếu không có liên kết",
        "Trang quan trọng nếu màu nền đẹp"
      ],
      answer: 0,
      explain: "PageRank đánh giá chất lượng liên kết, không chỉ số lượng liên kết."
    },
    {
      level: "easy",
      question: "Trong PageRank, mạng web thường được mô hình bằng gì?",
      options: [
        "Đồ thị có hướng và ma trận chuyển",
        "Một đường thẳng",
        "Một ảnh pixel",
        "Một phân số"
      ],
      answer: 0,
      explain: "Trang web là đỉnh, liên kết là cạnh có hướng, rồi lập ma trận chuyển."
    },
    {
      level: "medium",
      question: "Nếu x là trạng thái ổn định của M thì sau khi áp dụng M, x như thế nào?",
      options: [
        "Không đổi",
        "Luôn bằng 0",
        "Luôn đổi dấu",
        "Không còn là vector"
      ],
      answer: 0,
      explain: "Mx=x nghĩa là trạng thái không đổi."
    },
    {
      level: "hard",
      question: "Phương trình Mx=x có thể xem là trường hợp giá trị riêng nào?",
      options: [
        "λ=1",
        "λ=0",
        "λ=-1",
        "λ=2"
      ],
      answer: 0,
      explain: "Mx=x tương đương Mx=1x, nên λ=1."
    },
    {
      level: "medium",
      question: "Tổng các xác suất trong vector trạng thái thường bằng bao nhiêu?",
      options: [
        "1",
        "0",
        "-1",
        "Số trạng thái bình phương"
      ],
      answer: 0,
      explain: "Vector xác suất thường có tổng các thành phần bằng 1."
    },
    {
      level: "hard",
      question: "Tại sao PageRank không chỉ đếm số liên kết?",
      options: [
        "Vì liên kết từ trang quan trọng có giá trị cao hơn",
        "Vì số liên kết không thể đếm được",
        "Vì trang web không có liên kết",
        "Vì ma trận không dùng được"
      ],
      answer: 0,
      explain: "Một liên kết từ trang uy tín có trọng số quan trọng hơn."
    },
    {
      level: "easy",
      question: "Chuỗi Markov thường dùng để mô tả quá trình nào?",
      options: [
        "Quá trình chuyển trạng thái theo xác suất",
        "Quá trình viết văn",
        "Quá trình đổi font chữ",
        "Quá trình tô màu hình"
      ],
      answer: 0,
      explain: "Markov mô tả sự chuyển trạng thái dựa trên xác suất."
    }
  ]);

  // =========================
  // CHƯƠNG 6
  // =========================

  add("ch6-dot-norm-angle-orthogonal", "Trực giao", "Tích vô hướng, độ dài, góc và trực giao", [
    {
      level: "easy",
      question: "Hai vector trực giao khi tích vô hướng bằng bao nhiêu?",
      options: [
        "0",
        "1",
        "-1",
        "2"
      ],
      answer: 0,
      explain: "Hai vector trực giao nếu u·v=0."
    },
    {
      level: "easy",
      question: "Độ dài vector v được tính bằng công thức nào?",
      options: [
        "||v|| = √(v·v)",
        "||v|| = v+v",
        "||v|| = det(v)",
        "||v|| = 0"
      ],
      answer: 0,
      explain: "Độ dài vector được tính bằng căn của tích vô hướng với chính nó."
    },
    {
      level: "medium",
      question: "Độ dài của vector (3,4) là bao nhiêu?",
      options: [
        "5",
        "7",
        "1",
        "25"
      ],
      answer: 0,
      explain: "||(3,4)||=√(3²+4²)=5."
    },
    {
      level: "medium",
      question: "Nếu u·v>0 thì góc giữa u và v thường là gì?",
      options: [
        "Góc nhọn",
        "Góc tù",
        "Góc vuông",
        "Không có góc"
      ],
      answer: 0,
      explain: "u·v=||u||||v||cosθ. Nếu tích vô hướng dương thì cosθ dương, góc nhọn."
    },
    {
      level: "medium",
      question: "Nếu u·v<0 thì góc giữa u và v thường là gì?",
      options: [
        "Góc tù",
        "Góc nhọn",
        "Góc vuông",
        "Góc 0 độ"
      ],
      answer: 0,
      explain: "Tích vô hướng âm nghĩa là cosθ âm, nên góc tù."
    },
    {
      level: "easy",
      question: "Khoảng cách giữa u và v được tính bằng gì?",
      options: [
        "||u-v||",
        "u·v",
        "det(u)",
        "u+v"
      ],
      answer: 0,
      explain: "Khoảng cách giữa hai vector là độ dài của hiệu u-v."
    },
    {
      level: "hard",
      question: "Vector (-1,2) và (2,1) có trực giao không?",
      options: [
        "Có, vì tích vô hướng bằng 0",
        "Không, vì tích vô hướng bằng 1",
        "Có, vì chúng bằng nhau",
        "Không thể tính"
      ],
      answer: 0,
      explain: "(-1)·2+2·1=-2+2=0 nên trực giao."
    },
    {
      level: "hard",
      question: "Công thức liên hệ tích vô hướng và góc là gì?",
      options: [
        "u·v = ||u||||v||cosθ",
        "u·v = ||u||+||v||",
        "u·v = det(A)",
        "u·v = sinθ"
      ],
      answer: 0,
      explain: "Công thức cơ bản là u·v = ||u||||v||cosθ."
    },
    {
      level: "medium",
      question: "Nếu u·v=0 và u,v khác 0 thì hai vector có quan hệ gì?",
      options: [
        "Vuông góc",
        "Cùng hướng",
        "Ngược hướng",
        "Luôn bằng nhau"
      ],
      answer: 0,
      explain: "Tích vô hướng bằng 0 nghĩa là hai vector vuông góc."
    },
    {
      level: "hard",
      question: "Tích vô hướng giúp đo điều gì?",
      options: [
        "Độ dài, góc và quan hệ trực giao",
        "Số hàng của ma trận",
        "Định thức của vector",
        "Màu của đồ thị"
      ],
      answer: 0,
      explain: "Tích vô hướng dùng để tính độ dài, góc và kiểm tra trực giao."
    }
  ]);

  add("ch6-transpose-orthogonal-complement", "Trực giao", "Ma trận chuyển vị và phần bù trực giao", [
    {
      level: "easy",
      question: "Ma trận chuyển vị Aᵀ được tạo bằng cách nào?",
      options: [
        "Đổi hàng thành cột và cột thành hàng",
        "Nhân toàn bộ ma trận với 0",
        "Chỉ giữ đường chéo",
        "Xóa cột cuối"
      ],
      answer: 0,
      explain: "Chuyển vị đổi hàng thành cột và cột thành hàng."
    },
    {
      level: "easy",
      question: "Nếu A có kích thước 2×3 thì Aᵀ có kích thước bao nhiêu?",
      options: [
        "3×2",
        "2×3",
        "2×2",
        "3×3"
      ],
      answer: 0,
      explain: "Chuyển vị đổi kích thước m×n thành n×m."
    },
    {
      level: "medium",
      question: "Phần bù trực giao W⊥ gồm những vector nào?",
      options: [
        "Các vector vuông góc với mọi vector trong W",
        "Các vector nằm trong W",
        "Các vector bằng 1",
        "Các ma trận vuông"
      ],
      answer: 0,
      explain: "W⊥ là tập các vector trực giao với mọi vector thuộc W."
    },
    {
      level: "medium",
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
      level: "medium",
      question: "Nếu y vuông góc với mọi cột của A thì y thỏa điều kiện nào?",
      options: [
        "Aᵀy=0",
        "Ay=1",
        "det(y)=0",
        "A+y=0"
      ],
      answer: 0,
      explain: "Vuông góc với mọi cột của A tương đương Aᵀy=0."
    },
    {
      level: "hard",
      question: "Quan hệ Col(A)⊥ bằng không gian nào?",
      options: [
        "Null(Aᵀ)",
        "Col(A)",
        "Null(A)",
        "Row(A) + Col(A)"
      ],
      answer: 0,
      explain: "Phần bù trực giao của Col(A) là Null(Aᵀ)."
    },
    {
      level: "hard",
      question: "Tính chất nào đúng với chuyển vị?",
      options: [
        "(Aᵀ)ᵀ = A",
        "Aᵀ luôn bằng 0",
        "Aᵀ chỉ tồn tại khi A vuông",
        "Aᵀ luôn là nghịch đảo của A"
      ],
      answer: 0,
      explain: "Chuyển vị hai lần sẽ trở lại ma trận ban đầu."
    },
    {
      level: "medium",
      question: "Chuyển vị xuất hiện nhiều trong nội dung nào?",
      options: [
        "Tích vô hướng và phương trình chuẩn",
        "Tính diện tích hình tròn",
        "Tìm ước chung",
        "Sắp xếp chữ cái"
      ],
      answer: 0,
      explain: "Chuyển vị rất quan trọng trong tích vô hướng, trực giao và bình phương nhỏ nhất."
    },
    {
      level: "hard",
      question: "Nếu A là 4×2 thì Aᵀ là gì?",
      options: [
        "2×4",
        "4×2",
        "4×4",
        "2×2"
      ],
      answer: 0,
      explain: "Chuyển vị đổi 4×2 thành 2×4."
    },
    {
      level: "easy",
      question: "Ký hiệu W⊥ đọc là gì?",
      options: [
        "Phần bù trực giao của W",
        "Định thức của W",
        "Nghịch đảo của W",
        "Cơ sở chuẩn của W"
      ],
      answer: 0,
      explain: "W⊥ là phần bù trực giao của W."
    }
  ]);

  add("ch6-projection-orthonormal", "Trực giao", "Phép chiếu, tập trực chuẩn và ma trận trực giao", [
    {
      level: "easy",
      question: "Tập trực chuẩn gồm các vector như thế nào?",
      options: [
        "Đôi một vuông góc và đều có độ dài 1",
        "Đều bằng vector 0",
        "Đều cùng phương",
        "Đều là ma trận vuông"
      ],
      answer: 0,
      explain: "Trực chuẩn nghĩa là trực giao và chuẩn hóa về độ dài 1."
    },
    {
      level: "easy",
      question: "Nếu q₁ và q₂ trực chuẩn thì q₁·q₂ bằng bao nhiêu?",
      options: [
        "0",
        "1",
        "-1",
        "2"
      ],
      answer: 0,
      explain: "Hai vector khác nhau trong tập trực chuẩn vuông góc nên tích vô hướng bằng 0."
    },
    {
      level: "medium",
      question: "Phép chiếu proj_w(b) tìm điều gì?",
      options: [
        "Phần của b nằm theo hướng w",
        "Định thức của b",
        "Nghịch đảo của w",
        "Số cột của b"
      ],
      answer: 0,
      explain: "Phép chiếu tìm thành phần của b theo hướng w."
    },
    {
      level: "medium",
      question: "Nếu b vuông góc với w thì proj_w(b) bằng gì?",
      options: [
        "Vector 0",
        "b",
        "w",
        "b+w"
      ],
      answer: 0,
      explain: "Nếu b không có thành phần theo hướng w thì hình chiếu lên w bằng 0."
    },
    {
      level: "medium",
      question: "Vector b̂ trong phép chiếu lên W có ý nghĩa gì?",
      options: [
        "Vector trong W gần b nhất",
        "Vector xa b nhất",
        "Vector luôn bằng 0",
        "Vector không thuộc W"
      ],
      answer: 0,
      explain: "b̂ là hình chiếu của b lên W, là vector trong W gần b nhất."
    },
    {
      level: "hard",
      question: "Sai số b-b̂ có quan hệ gì với W?",
      options: [
        "Vuông góc với mọi vector trong W",
        "Luôn nằm trong W",
        "Luôn bằng b",
        "Luôn cùng hướng với b̂"
      ],
      answer: 0,
      explain: "Trong phép chiếu trực giao, phần sai số vuông góc với không gian được chiếu."
    },
    {
      level: "medium",
      question: "Ma trận Q trực giao thỏa điều kiện nào?",
      options: [
        "QᵀQ=I",
        "Q+Q=0",
        "det(Q)=0 luôn",
        "Q không có cột"
      ],
      answer: 0,
      explain: "Ma trận trực giao có các cột trực chuẩn nên QᵀQ=I."
    },
    {
      level: "hard",
      question: "Nếu Q vuông và trực giao thì Q⁻¹ bằng gì?",
      options: [
        "Qᵀ",
        "Q",
        "0",
        "-Q"
      ],
      answer: 0,
      explain: "Với ma trận trực giao vuông, Q⁻¹=Qᵀ."
    },
    {
      level: "easy",
      question: "Nếu một vector có độ dài bằng 1 thì gọi là gì?",
      options: [
        "Vector đơn vị",
        "Vector 0",
        "Vector nghịch đảo",
        "Vector định thức"
      ],
      answer: 0,
      explain: "Vector có độ dài 1 là vector đơn vị."
    },
    {
      level: "hard",
      question: "Cơ sở trực chuẩn giúp tính toán dễ hơn vì sao?",
      options: [
        "Tích vô hướng giữa các vector khác nhau bằng 0 và độ dài mỗi vector bằng 1",
        "Mọi vector đều bằng nhau",
        "Không cần phép cộng",
        "Không thể chiếu vector"
      ],
      answer: 0,
      explain: "Tính trực chuẩn làm công thức tọa độ và phép chiếu đơn giản hơn."
    }
  ]);

  add("ch6-gram-schmidt-qr", "Trực giao", "Gram-Schmidt và phân tích QR", [
    {
      level: "easy",
      question: "Gram-Schmidt dùng để làm gì?",
      options: [
        "Tạo cơ sở trực giao hoặc trực chuẩn từ các vector độc lập tuyến tính",
        "Tính định thức 2×2",
        "Giải phương trình bậc hai",
        "Vẽ đồ thị hàm số"
      ],
      answer: 0,
      explain: "Gram-Schmidt biến một tập độc lập thành cơ sở trực giao cho cùng không gian."
    },
    {
      level: "medium",
      question: "Trong Gram-Schmidt với hai vector, công thức v₂ là gì?",
      options: [
        "v₂ = x₂ - proj_v₁(x₂)",
        "v₂ = x₂ + v₁",
        "v₂ = det(x₂)",
        "v₂ = 0"
      ],
      answer: 0,
      explain: "Ta loại khỏi x₂ phần nằm theo hướng v₁ để tạo v₂ vuông góc với v₁."
    },
    {
      level: "easy",
      question: "Mục tiêu của Gram-Schmidt là giữ lại không gian sinh nào?",
      options: [
        "Cùng không gian sinh ban đầu",
        "Không gian rỗng",
        "Chỉ trục Ox",
        "Không gian không liên quan"
      ],
      answer: 0,
      explain: "Gram-Schmidt tạo cơ sở mới cho cùng không gian sinh ban đầu."
    },
    {
      level: "medium",
      question: "Phân tích QR có dạng nào?",
      options: [
        "A=QR",
        "A=Q+R",
        "A=Q/R",
        "A=R-Q"
      ],
      answer: 0,
      explain: "QR viết A thành tích của Q và R."
    },
    {
      level: "medium",
      question: "Trong A=QR, Q có tính chất gì?",
      options: [
        "Các cột trực chuẩn",
        "Toàn số 0",
        "Luôn là ma trận đường chéo",
        "Không có cột"
      ],
      answer: 0,
      explain: "Q có các cột trực chuẩn."
    },
    {
      level: "medium",
      question: "Trong A=QR, R là ma trận gì?",
      options: [
        "Tam giác trên",
        "Tam giác dưới",
        "Ma trận 0",
        "Ma trận cột"
      ],
      answer: 0,
      explain: "R là ma trận tam giác trên."
    },
    {
      level: "hard",
      question: "Vì sao QR hữu ích trong bình phương nhỏ nhất?",
      options: [
        "Vì Q trực chuẩn giúp tính toán ổn định và đơn giản hơn",
        "Vì QR luôn làm hệ vô nghiệm",
        "Vì QR không dùng ma trận",
        "Vì R luôn bằng 0"
      ],
      answer: 0,
      explain: "QR giúp giải bài toán bình phương nhỏ nhất ổn định hơn về số học."
    },
    {
      level: "hard",
      question: "Sau khi Gram-Schmidt, các vector mới có quan hệ gì với nhau?",
      options: [
        "Vuông góc với nhau",
        "Luôn bằng nhau",
        "Luôn cùng hướng",
        "Luôn bằng 0"
      ],
      answer: 0,
      explain: "Gram-Schmidt tạo ra các vector trực giao."
    },
    {
      level: "easy",
      question: "Nếu muốn từ cơ sở trực giao thành trực chuẩn, ta cần làm gì?",
      options: [
        "Chuẩn hóa từng vector về độ dài 1",
        "Nhân tất cả với 0",
        "Đổi thứ tự tùy ý",
        "Tính định thức"
      ],
      answer: 0,
      explain: "Trực chuẩn cần các vector vừa trực giao vừa có độ dài 1."
    },
    {
      level: "hard",
      question: "Gram-Schmidt bắt đầu với loại tập vector nào?",
      options: [
        "Tập độc lập tuyến tính",
        "Tập toàn vector 0",
        "Tập phụ thuộc hoàn toàn",
        "Tập không có vector"
      ],
      answer: 0,
      explain: "Để tạo cơ sở, các vector đầu vào cần độc lập tuyến tính."
    }
  ]);

  add("ch6-least-squares", "Trực giao", "Bình phương nhỏ nhất và hồi quy tuyến tính", [
    {
      level: "easy",
      question: "Bình phương nhỏ nhất thường dùng khi Ax=b như thế nào?",
      options: [
        "Không có nghiệm chính xác hoặc dữ liệu có sai số",
        "Luôn có nghiệm chính xác",
        "Luôn có vô số nghiệm",
        "Không có ma trận"
      ],
      answer: 0,
      explain: "Bình phương nhỏ nhất tìm nghiệm gần đúng khi hệ không khớp hoàn toàn."
    },
    {
      level: "easy",
      question: "Mục tiêu của min ||Ax-b|| là gì?",
      options: [
        "Tìm x sao cho Ax gần b nhất",
        "Tìm x lớn nhất",
        "Tìm det(A)",
        "Tìm ma trận nghịch đảo của b"
      ],
      answer: 0,
      explain: "Ta chọn x để khoảng cách giữa Ax và b nhỏ nhất."
    },
    {
      level: "medium",
      question: "Trong bình phương nhỏ nhất, Ax nằm trong không gian nào?",
      options: [
        "Col(A)",
        "Null(A)",
        "W⊥ luôn",
        "Không gian rỗng"
      ],
      answer: 0,
      explain: "Ax là tổ hợp tuyến tính của các cột của A nên nằm trong Col(A)."
    },
    {
      level: "medium",
      question: "Điểm gần b nhất trong Col(A) là gì?",
      options: [
        "Hình chiếu trực giao của b lên Col(A)",
        "Vector 0 bất kỳ",
        "Vector xa nhất",
        "Định thức của A"
      ],
      answer: 0,
      explain: "Bình phương nhỏ nhất chính là bài toán chiếu b lên Col(A)."
    },
    {
      level: "medium",
      question: "Phương trình chuẩn là gì?",
      options: [
        "AᵀAx = Aᵀb",
        "Ax = Aᵀ",
        "A+b=0",
        "det(A)=b"
      ],
      answer: 0,
      explain: "Nghiệm bình phương nhỏ nhất thỏa AᵀAx=Aᵀb."
    },
    {
      level: "medium",
      question: "Sai số r trong bình phương nhỏ nhất thường là gì?",
      options: [
        "r=b-Ax",
        "r=A+b",
        "r=det(A)",
        "r=x-b"
      ],
      answer: 0,
      explain: "Sai số là phần chênh lệch giữa dữ liệu b và dự đoán Ax."
    },
    {
      level: "hard",
      question: "Trong nghiệm bình phương nhỏ nhất, r=b-Ax có quan hệ gì với Col(A)?",
      options: [
        "Vuông góc với Col(A)",
        "Nằm trong Col(A)",
        "Luôn bằng Ax",
        "Không liên quan"
      ],
      answer: 0,
      explain: "Điểm chiếu tốt nhất có sai số vuông góc với không gian cột."
    },
    {
      level: "easy",
      question: "Hồi quy tuyến tính đơn giản thường có dạng nào?",
      options: [
        "y ≈ mx + c",
        "y = x²",
        "det(A)=0",
        "Ax=0 luôn"
      ],
      answer: 0,
      explain: "Đường thẳng hồi quy thường có dạng y≈mx+c."
    },
    {
      level: "medium",
      question: "Trong y≈mx+c, ta cần tìm hệ số nào?",
      options: [
        "m và c",
        "A và b",
        "λ và v",
        "Q và R"
      ],
      answer: 0,
      explain: "Ta cần tìm độ dốc m và hệ số tự do c."
    },
    {
      level: "hard",
      question: "Bình phương nhỏ nhất là nền tảng của kỹ thuật nào?",
      options: [
        "Hồi quy tuyến tính",
        "Sắp xếp chữ cái",
        "Tạo màu nền",
        "Tính chu vi hình tròn"
      ],
      answer: 0,
      explain: "Hồi quy tuyến tính dùng bình phương nhỏ nhất để tìm mô hình phù hợp."
    }
  ]);

  // =========================
  // CHƯƠNG 7
  // =========================

  add("ch7-symmetric-matrices", "PCA và SVD", "Ma trận đối xứng và chéo hóa trực giao", [
    {
      level: "easy",
      question: "Ma trận đối xứng thỏa điều kiện nào?",
      options: [
        "Aᵀ = A",
        "A=0",
        "Aᵀ = -A",
        "det(A)=1 luôn"
      ],
      answer: 0,
      explain: "Ma trận đối xứng bằng chính chuyển vị của nó."
    },
    {
      level: "medium",
      question: "Ma trận đối xứng có giá trị riêng như thế nào?",
      options: [
        "Thực",
        "Luôn âm",
        "Luôn bằng 0",
        "Không tồn tại"
      ],
      answer: 0,
      explain: "Ma trận đối xứng thực có các giá trị riêng thực."
    },
    {
      level: "medium",
      question: "Vector riêng ứng với các giá trị riêng khác nhau của ma trận đối xứng thường như thế nào?",
      options: [
        "Vuông góc",
        "Cùng hướng",
        "Bằng nhau",
        "Không tồn tại"
      ],
      answer: 0,
      explain: "Ma trận đối xứng có các vector riêng ứng với giá trị riêng khác nhau vuông góc nhau."
    },
    {
      level: "easy",
      question: "Chéo hóa trực giao có dạng nào?",
      options: [
        "A=QDQᵀ",
        "A=PDP⁻¹",
        "A=Q+D",
        "A=0"
      ],
      answer: 0,
      explain: "Với ma trận đối xứng, ta có thể chéo hóa trực giao A=QDQᵀ."
    },
    {
      level: "medium",
      question: "Trong A=QDQᵀ, Q có tính chất gì?",
      options: [
        "Trực giao",
        "Toàn số 0",
        "Không vuông",
        "Không có cột"
      ],
      answer: 0,
      explain: "Q là ma trận trực giao, có các cột là vector riêng trực chuẩn."
    },
    {
      level: "medium",
      question: "Trong A=QDQᵀ, D chứa gì?",
      options: [
        "Các giá trị riêng trên đường chéo",
        "Các vector riêng trên hàng đầu",
        "Các số 0 ngẫu nhiên",
        "Các định thức"
      ],
      answer: 0,
      explain: "D là ma trận đường chéo chứa các giá trị riêng."
    },
    {
      level: "hard",
      question: "Vì Q trực giao nên Q⁻¹ bằng gì?",
      options: [
        "Qᵀ",
        "Q",
        "0",
        "-Q"
      ],
      answer: 0,
      explain: "Ma trận trực giao thỏa Q⁻¹=Qᵀ."
    },
    {
      level: "hard",
      question: "Chéo hóa trực giao giúp hiểu phép biến đổi như thế nào?",
      options: [
        "Co giãn theo các trục vuông góc",
        "Xóa mọi vector",
        "Luôn tạo hệ vô nghiệm",
        "Không có ý nghĩa hình học"
      ],
      answer: 0,
      explain: "Các vector riêng trực chuẩn tạo thành các trục vuông góc, còn giá trị riêng là hệ số co giãn."
    },
    {
      level: "easy",
      question: "Ma trận đối xứng phải là loại ma trận nào?",
      options: [
        "Ma trận vuông",
        "Ma trận hàng",
        "Ma trận cột",
        "Ma trận không có kích thước"
      ],
      answer: 0,
      explain: "Điều kiện Aᵀ=A chỉ có thể xảy ra với ma trận vuông."
    },
    {
      level: "hard",
      question: "Ma trận đối xứng là nền tảng quan trọng cho nội dung nào?",
      options: [
        "PCA và phân tích dữ liệu",
        "Viết đoạn văn",
        "Tính lịch âm",
        "Đổi màu giao diện"
      ],
      answer: 0,
      explain: "PCA dùng trị riêng và vector riêng của ma trận hiệp phương sai, vốn là ma trận đối xứng."
    }
  ]);

  add("ch7-variance-covariance", "PCA và SVD", "Phương sai, hiệp phương sai và ma trận hiệp phương sai", [
    {
      level: "easy",
      question: "Phương sai đo điều gì?",
      options: [
        "Mức độ dữ liệu phân tán quanh giá trị trung bình",
        "Số hàng của ma trận",
        "Định thức của dữ liệu",
        "Tên của biến"
      ],
      answer: 0,
      explain: "Phương sai cho biết dữ liệu phân tán mạnh hay yếu."
    },
    {
      level: "easy",
      question: "Hiệp phương sai dương nghĩa là gì?",
      options: [
        "Hai biến có xu hướng tăng hoặc giảm cùng nhau",
        "Một biến tăng thì biến kia luôn giảm",
        "Hai biến không liên quan bao giờ",
        "Hai biến luôn bằng 0"
      ],
      answer: 0,
      explain: "Hiệp phương sai dương cho thấy hai biến thay đổi cùng chiều."
    },
    {
      level: "medium",
      question: "Hiệp phương sai âm nghĩa là gì?",
      options: [
        "Một biến tăng thì biến kia thường giảm",
        "Hai biến luôn tăng cùng nhau",
        "Hai biến giống nhau hoàn toàn",
        "Không có dữ liệu"
      ],
      answer: 0,
      explain: "Hiệp phương sai âm cho thấy hai biến có xu hướng ngược chiều."
    },
    {
      level: "medium",
      question: "Ma trận hiệp phương sai chứa gì trên đường chéo chính?",
      options: [
        "Phương sai của từng biến",
        "Giá trị riêng luôn bằng 0",
        "Tên các biến",
        "Các vector 0"
      ],
      answer: 0,
      explain: "Đường chéo chính của ma trận hiệp phương sai chứa phương sai."
    },
    {
      level: "medium",
      question: "Các phần tử ngoài đường chéo của ma trận hiệp phương sai chứa gì?",
      options: [
        "Hiệp phương sai giữa các cặp biến",
        "Phương sai của chính biến đó",
        "Định thức",
        "Số pivot"
      ],
      answer: 0,
      explain: "Phần tử ngoài đường chéo ghi lại quan hệ giữa hai biến khác nhau."
    },
    {
      level: "easy",
      question: "Ma trận hiệp phương sai có tính chất gì?",
      options: [
        "Đối xứng",
        "Luôn không vuông",
        "Luôn toàn số 0",
        "Không có chuyển vị"
      ],
      answer: 0,
      explain: "Cov(X,Y)=Cov(Y,X), nên ma trận hiệp phương sai đối xứng."
    },
    {
      level: "hard",
      question: "Trong PCA, ta tìm trị riêng của ma trận nào?",
      options: [
        "Ma trận hiệp phương sai",
        "Ma trận toàn số 1",
        "Ma trận không có dữ liệu",
        "Ma trận hoán vị bất kỳ"
      ],
      answer: 0,
      explain: "PCA dùng trị riêng và vector riêng của ma trận hiệp phương sai."
    },
    {
      level: "hard",
      question: "Nếu hiệp phương sai gần 0 thì có thể hiểu đơn giản là gì?",
      options: [
        "Hai biến ít liên hệ tuyến tính",
        "Hai biến luôn giống nhau",
        "Hai biến luôn ngược dấu",
        "Dữ liệu không tồn tại"
      ],
      answer: 0,
      explain: "Hiệp phương sai gần 0 cho thấy ít quan hệ tuyến tính."
    },
    {
      level: "medium",
      question: "Ma trận hiệp phương sai giúp PCA tìm điều gì?",
      options: [
        "Các hướng dữ liệu biến thiên mạnh nhất",
        "Các hàng toàn số 0",
        "Các nghiệm nguyên",
        "Các biến không liên quan đến dữ liệu"
      ],
      answer: 0,
      explain: "PCA tìm hướng có phương sai lớn dựa trên ma trận hiệp phương sai."
    },
    {
      level: "hard",
      question: "Giá trị riêng lớn trong PCA thường biểu thị điều gì?",
      options: [
        "Hướng giữ nhiều phương sai của dữ liệu",
        "Hướng không có dữ liệu",
        "Hướng luôn bị loại bỏ",
        "Hướng có định thức bằng 0"
      ],
      answer: 0,
      explain: "Giá trị riêng càng lớn thì hướng tương ứng càng giữ nhiều phương sai."
    }
  ]);

  add("ch7-quadratic-form-principal-axes", "PCA và SVD", "Dạng bình phương bậc hai và các trục chính", [
    {
      level: "easy",
      question: "Dạng bình phương bậc hai thường có dạng nào?",
      options: [
        "q(x)=xᵀAx",
        "q(x)=Ax+b",
        "q(x)=det(A)",
        "q(x)=x+A"
      ],
      answer: 0,
      explain: "Dạng bình phương bậc hai thường viết q(x)=xᵀAx."
    },
    {
      level: "easy",
      question: "Trong q(x)=xᵀAx, A thường được xét là ma trận gì?",
      options: [
        "Đối xứng",
        "Hàng",
        "Cột",
        "Không có số"
      ],
      answer: 0,
      explain: "Dạng bình phương thường xét với ma trận đối xứng."
    },
    {
      level: "medium",
      question: "Các trục chính thường được tạo từ loại vector nào?",
      options: [
        "Vector riêng trực chuẩn",
        "Vector 0",
        "Vector cùng phương bất kỳ",
        "Vector không thuộc không gian"
      ],
      answer: 0,
      explain: "Trục chính đến từ các vector riêng trực chuẩn của ma trận đối xứng."
    },
    {
      level: "medium",
      question: "Trong hệ trục chính, dạng bình phương bậc hai trở nên thế nào?",
      options: [
        "Đơn giản hơn, không còn số hạng trộn",
        "Phức tạp hơn vô hạn",
        "Không thể viết được",
        "Luôn bằng 0"
      ],
      answer: 0,
      explain: "Đổi sang trục chính giúp loại các số hạng trộn như xy."
    },
    {
      level: "medium",
      question: "Các giá trị riêng trong dạng bình phương bậc hai cho biết điều gì?",
      options: [
        "Mức độ co giãn theo các hướng chính",
        "Số ký tự của công thức",
        "Màu của trục",
        "Số câu hỏi"
      ],
      answer: 0,
      explain: "Giá trị riêng cho biết hệ số theo từng hướng chính."
    },
    {
      level: "easy",
      question: "Trong PCA, trục chính là hướng có đặc điểm gì?",
      options: [
        "Dữ liệu có phương sai lớn",
        "Dữ liệu không tồn tại",
        "Dữ liệu luôn bằng 0",
        "Dữ liệu chỉ có một điểm"
      ],
      answer: 0,
      explain: "PCA chọn các hướng dữ liệu biến thiên mạnh nhất."
    },
    {
      level: "hard",
      question: "Chéo hóa trực giao A=QDQᵀ giúp dạng q(x)=xᵀAx như thế nào?",
      options: [
        "Đổi hệ tọa độ để dạng trở nên đơn giản",
        "Biến q(x) thành văn bản",
        "Làm A không còn là ma trận",
        "Xóa mọi giá trị riêng"
      ],
      answer: 0,
      explain: "Q tạo hệ trục chính, D giữ hệ số trên từng trục."
    },
    {
      level: "hard",
      question: "Nếu dạng bình phương có số hạng trộn xy, ta có thể dùng ý tưởng nào để đơn giản hóa?",
      options: [
        "Đổi sang hệ trục chính",
        "Xóa toàn bộ ma trận",
        "Nhân mọi thứ với 0",
        "Đổi tên biến"
      ],
      answer: 0,
      explain: "Các trục chính giúp loại bỏ số hạng trộn."
    },
    {
      level: "medium",
      question: "Dạng bình phương bậc hai xuất hiện trong lĩnh vực nào?",
      options: [
        "Hình học, tối ưu hóa và phân tích dữ liệu",
        "Chỉ trong viết văn",
        "Chỉ trong đổi font",
        "Chỉ trong lịch sử"
      ],
      answer: 0,
      explain: "Dạng này xuất hiện rộng rãi trong hình học, tối ưu hóa và dữ liệu."
    },
    {
      level: "hard",
      question: "Vì sao ma trận đối xứng quan trọng trong trục chính?",
      options: [
        "Vì có vector riêng trực chuẩn tạo thành các trục vuông góc",
        "Vì không có giá trị riêng",
        "Vì luôn không vuông",
        "Vì không thể chéo hóa"
      ],
      answer: 0,
      explain: "Ma trận đối xứng có cơ sở vector riêng trực chuẩn, phù hợp cho trục chính."
    }
  ]);

  add("ch7-pca", "PCA và SVD", "Phân tích thành phần chính PCA", [
    {
      level: "easy",
      question: "PCA dùng để làm gì?",
      options: [
        "Tìm các hướng quan trọng của dữ liệu và giảm chiều",
        "Tính chu vi hình tròn",
        "Giải phương trình bậc hai",
        "Đổi màu hình ảnh"
      ],
      answer: 0,
      explain: "PCA tìm các hướng dữ liệu biến thiên mạnh nhất để giảm chiều."
    },
    {
      level: "easy",
      question: "Thành phần chính thứ nhất là hướng như thế nào?",
      options: [
        "Có phương sai lớn nhất",
        "Có phương sai nhỏ nhất",
        "Luôn bằng 0",
        "Không liên quan đến dữ liệu"
      ],
      answer: 0,
      explain: "Thành phần chính đầu tiên giữ nhiều phương sai nhất."
    },
    {
      level: "medium",
      question: "Trong PCA, trước khi lập ma trận hiệp phương sai thường cần làm gì với dữ liệu?",
      options: [
        "Tâm hóa dữ liệu bằng cách trừ trung bình",
        "Nhân dữ liệu với 0",
        "Xóa hết dữ liệu",
        "Đổi dữ liệu thành văn bản"
      ],
      answer: 0,
      explain: "PCA thường tâm hóa dữ liệu trước khi tính hiệp phương sai."
    },
    {
      level: "medium",
      question: "Trong PCA, ta thường chọn vector riêng ứng với giá trị riêng như thế nào?",
      options: [
        "Lớn nhất",
        "Nhỏ nhất",
        "Bằng 0",
        "Âm nhất luôn"
      ],
      answer: 0,
      explain: "Giá trị riêng lớn ứng với hướng giữ nhiều phương sai."
    },
    {
      level: "medium",
      question: "PCA giúp giảm chiều bằng cách nào?",
      options: [
        "Chiếu dữ liệu lên một số hướng quan trọng nhất",
        "Xóa dữ liệu ngẫu nhiên",
        "Nhân dữ liệu với ma trận 0",
        "Chỉ giữ tên biến"
      ],
      answer: 0,
      explain: "PCA giữ các thành phần chính quan trọng nhất."
    },
    {
      level: "easy",
      question: "Ma trận nào thường được dùng để tìm các thành phần chính?",
      options: [
        "Ma trận hiệp phương sai",
        "Ma trận đơn vị bất kỳ",
        "Ma trận toàn số 0",
        "Ma trận không vuông ngẫu nhiên"
      ],
      answer: 0,
      explain: "PCA tìm trị riêng/vector riêng của ma trận hiệp phương sai."
    },
    {
      level: "hard",
      question: "Vì sao PCA có thể giữ nhiều thông tin sau khi giảm chiều?",
      options: [
        "Vì giữ các hướng có phương sai lớn nhất",
        "Vì xóa các hướng quan trọng",
        "Vì không dùng dữ liệu",
        "Vì mọi dữ liệu đều giống nhau"
      ],
      answer: 0,
      explain: "Các hướng phương sai lớn giữ nhiều cấu trúc quan trọng của dữ liệu."
    },
    {
      level: "hard",
      question: "Thành phần chính thứ hai có quan hệ gì với thành phần chính thứ nhất?",
      options: [
        "Vuông góc và có phương sai lớn tiếp theo",
        "Cùng hướng hoàn toàn",
        "Luôn bằng 0",
        "Không tồn tại"
      ],
      answer: 0,
      explain: "Các thành phần chính thường trực giao và được sắp theo phương sai giảm dần."
    },
    {
      level: "medium",
      question: "PCA liên hệ mạnh nhất với khái niệm nào?",
      options: [
        "Trị riêng và vector riêng",
        "Số nguyên tố",
        "Phép cộng văn bản",
        "Tích phân lượng giác"
      ],
      answer: 0,
      explain: "PCA dựa trên trị riêng và vector riêng của ma trận hiệp phương sai."
    },
    {
      level: "hard",
      question: "Nếu giữ quá ít thành phần chính thì điều gì có thể xảy ra?",
      options: [
        "Mất nhiều thông tin quan trọng",
        "Dữ liệu chính xác hơn tuyệt đối",
        "Không còn giảm chiều",
        "Ma trận tự biến mất"
      ],
      answer: 0,
      explain: "Giữ quá ít thành phần có thể làm mất thông tin đáng kể."
    }
  ]);

  add("ch7-svd", "PCA và SVD", "SVD, giá trị kỳ dị và xấp xỉ hạng thấp", [
    {
      level: "easy",
      question: "Dạng chuẩn của SVD là gì?",
      options: [
        "A=UΣVᵀ",
        "A=PDP⁻¹",
        "A=Q+R",
        "A=det(A)"
      ],
      answer: 0,
      explain: "SVD viết A=UΣVᵀ."
    },
    {
      level: "easy",
      question: "Các số trên đường chéo của Σ gọi là gì?",
      options: [
        "Giá trị kỳ dị",
        "Giá trị riêng âm",
        "Pivot",
        "Biến tự do"
      ],
      answer: 0,
      explain: "Các phần tử đường chéo của Σ là các giá trị kỳ dị."
    },
    {
      level: "medium",
      question: "Giá trị kỳ dị có thể âm không?",
      options: [
        "Không, luôn không âm",
        "Có, luôn âm",
        "Luôn bằng -1",
        "Không xác định"
      ],
      answer: 0,
      explain: "Giá trị kỳ dị luôn không âm."
    },
    {
      level: "medium",
      question: "SVD áp dụng cho loại ma trận nào?",
      options: [
        "Mọi ma trận, kể cả không vuông",
        "Chỉ ma trận vuông khả nghịch",
        "Chỉ ma trận 0",
        "Chỉ vector"
      ],
      answer: 0,
      explain: "SVD có thể áp dụng cho mọi ma trận."
    },
    {
      level: "medium",
      question: "Xấp xỉ hạng thấp giữ lại phần nào?",
      options: [
        "Một số giá trị kỳ dị lớn nhất",
        "Các giá trị kỳ dị nhỏ nhất",
        "Các giá trị âm",
        "Các hàng rỗng"
      ],
      answer: 0,
      explain: "Giữ các giá trị kỳ dị lớn nhất giúp giữ thông tin quan trọng."
    },
    {
      level: "easy",
      question: "SVD có thể dùng trong ứng dụng nào?",
      options: [
        "Nén ảnh",
        "Tính chu vi hình tròn",
        "Đổi màu chữ thủ công",
        "Viết đoạn văn"
      ],
      answer: 0,
      explain: "SVD dùng trong nén ảnh, giảm chiều, giảm nhiễu và hệ gợi ý."
    },
    {
      level: "hard",
      question: "A⁺ là ký hiệu của gì?",
      options: [
        "Nghịch đảo giả Moore-Penrose",
        "Ma trận chuyển vị",
        "Định thức",
        "Vector riêng"
      ],
      answer: 0,
      explain: "A⁺ là nghịch đảo giả Moore-Penrose."
    },
    {
      level: "hard",
      question: "Nghịch đảo giả hữu ích khi nào?",
      options: [
        "Khi A không vuông hoặc không có nghịch đảo thường",
        "Chỉ khi A là số nguyên",
        "Chỉ khi A=I",
        "Không bao giờ dùng"
      ],
      answer: 0,
      explain: "A⁺ mở rộng ý tưởng nghịch đảo cho ma trận không vuông hoặc suy biến."
    },
    {
      level: "medium",
      question: "Trong nén ảnh bằng SVD, A_k là gì?",
      options: [
        "Ảnh xấp xỉ hạng thấp",
        "Ma trận rỗng",
        "Ảnh bị xóa hoàn toàn",
        "Định thức của ảnh"
      ],
      answer: 0,
      explain: "A_k là xấp xỉ hạng thấp của ma trận ảnh."
    },
    {
      level: "hard",
      question: "Giá trị kỳ dị lớn thường có ý nghĩa gì?",
      options: [
        "Giữ nhiều thông tin quan trọng",
        "Không có ý nghĩa",
        "Luôn là nhiễu",
        "Luôn bị loại bỏ"
      ],
      answer: 0,
      explain: "Các giá trị kỳ dị lớn thường chứa phần thông tin chính của dữ liệu."
    }
  ]);

  // =========================
  // ỨNG DỤNG
  // =========================

  add("app-digital-age", "Ứng dụng", "Ứng dụng đại số tuyến tính trong kỉ nguyên số", [
    {
      level: "easy",
      question: "PageRank dùng đại số tuyến tính để làm gì?",
      options: [
        "Xếp hạng trang web",
        "Tính chu vi hình tròn",
        "Đổi font chữ",
        "Xóa dữ liệu"
      ],
      answer: 0,
      explain: "PageRank dùng ma trận và vector để đánh giá mức độ quan trọng của trang web."
    },
    {
      level: "easy",
      question: "Mô hình ngôn ngữ như ChatGPT thường biểu diễn từ ngữ bằng gì?",
      options: [
        "Vector",
        "Hình tròn",
        "Số nguyên duy nhất",
        "Ma trận 0"
      ],
      answer: 0,
      explain: "Từ ngữ được biểu diễn bằng vector để máy tính xử lý quan hệ ý nghĩa."
    },
    {
      level: "medium",
      question: "A² trong mạng xã hội có thể giúp tìm điều gì?",
      options: [
        "Số bạn chung",
        "Độ dài tên người dùng",
        "Màu ảnh đại diện",
        "Số lần mở web"
      ],
      answer: 0,
      explain: "Ma trận kề bình phương có thể cho biết số đường đi độ dài 2, tức bạn chung."
    },
    {
      level: "medium",
      question: "Netflix có thể dùng ma trận để làm gì?",
      options: [
        "Dự đoán người dùng thích phim nào",
        "Tính định thức của phim",
        "Xóa toàn bộ người dùng",
        "Đổi tên phim"
      ],
      answer: 0,
      explain: "Hệ gợi ý dùng ma trận người dùng-phim để dự đoán sở thích."
    },
    {
      level: "medium",
      question: "Eigenfaces liên quan đến kỹ thuật nào?",
      options: [
        "PCA và giảm chiều dữ liệu ảnh",
        "Khử Gauss bằng tay",
        "Tính chu vi",
        "Sắp xếp mảng"
      ],
      answer: 0,
      explain: "Eigenfaces dùng PCA để tìm các hướng quan trọng trong dữ liệu khuôn mặt."
    },
    {
      level: "easy",
      question: "Trong AI, vì sao cần biến văn bản thành vector?",
      options: [
        "Vì máy tính xử lý số tốt hơn chữ",
        "Vì vector làm mất hết ý nghĩa",
        "Vì chữ không tồn tại",
        "Vì vector không cần tính toán"
      ],
      answer: 0,
      explain: "Vector giúp máy tính biểu diễn và xử lý ý nghĩa của từ."
    },
    {
      level: "hard",
      question: "PageRank ổn định thường liên quan đến phương trình nào?",
      options: [
        "x=Px",
        "x=P+x",
        "det(x)=P",
        "x=0 luôn"
      ],
      answer: 0,
      explain: "Điểm PageRank ổn định là vector không đổi sau khi áp dụng ma trận chuyển."
    },
    {
      level: "hard",
      question: "Phân rã ma trận trong hệ gợi ý giúp tìm điều gì?",
      options: [
        "Sở thích ẩn của người dùng và đặc điểm ẩn của phim",
        "Số chữ trong tên phim",
        "Màu nền của ứng dụng",
        "Ngày phát hành duy nhất"
      ],
      answer: 0,
      explain: "Phân rã ma trận giúp mô hình hóa các yếu tố ẩn trong sở thích và phim."
    },
    {
      level: "medium",
      question: "Trong mạng xã hội, ma trận kề biểu diễn điều gì?",
      options: [
        "Quan hệ kết nối giữa các người dùng",
        "Điểm kiểm tra toán",
        "Màu giao diện",
        "Mật khẩu tài khoản"
      ],
      answer: 0,
      explain: "Ma trận kề mô tả ai liên kết hoặc kết bạn với ai."
    },
    {
      level: "hard",
      question: "Điểm chung của PageRank, ChatGPT và Netflix là gì?",
      options: [
        "Đều dùng vector, ma trận hoặc không gian nhiều chiều",
        "Đều chỉ dùng phép cộng số nguyên",
        "Đều không liên quan đến toán",
        "Đều không dùng dữ liệu"
      ],
      answer: 0,
      explain: "Các hệ thống hiện đại này đều dùng đại số tuyến tính để xử lý dữ liệu lớn."
    }
  ]);

  add("app-computer-graphics", "Ứng dụng", "Ứng dụng đại số tuyến tính trong đồ họa và xử lý ảnh", [
    {
      level: "easy",
      question: "Ảnh số có thể xem như gì?",
      options: [
        "Ma trận pixel",
        "Một phương trình vô nghiệm",
        "Một số nguyên tố",
        "Một đoạn văn"
      ],
      answer: 0,
      explain: "Ảnh số được lưu dưới dạng các giá trị pixel, có thể xem như ma trận."
    },
    {
      level: "easy",
      question: "Bộ lọc ảnh thường dùng ma trận nhỏ gọi là gì?",
      options: [
        "Kernel",
        "Pivot",
        "Vector riêng",
        "Định thức"
      ],
      answer: 0,
      explain: "Kernel là ma trận nhỏ trượt qua ảnh để tạo hiệu ứng xử lý ảnh."
    },
    {
      level: "medium",
      question: "SVD có thể dùng để làm gì với ảnh?",
      options: [
        "Nén ảnh",
        "Xóa mọi pixel",
        "Tạo hệ vô nghiệm",
        "Tính đạo hàm của màu"
      ],
      answer: 0,
      explain: "SVD giữ các thành phần quan trọng nhất để nén ảnh."
    },
    {
      level: "medium",
      question: "Trong game 3D, ma trận dùng để làm gì?",
      options: [
        "Quay, tịnh tiến, co giãn và chiếu vật thể",
        "Chỉ đổi tên nhân vật",
        "Chỉ phát âm thanh",
        "Chỉ lưu điểm số"
      ],
      answer: 0,
      explain: "Đồ họa 3D dùng ma trận để biến đổi điểm và vật thể."
    },
    {
      level: "medium",
      question: "Tọa độ thuần nhất thường thêm thành phần nào?",
      options: [
        "1",
        "0",
        "-1",
        "π"
      ],
      answer: 0,
      explain: "Tọa độ thuần nhất thường viết [x,y,z,1]."
    },
    {
      level: "easy",
      question: "Panorama trên điện thoại cần làm gì với nhiều ảnh?",
      options: [
        "Căn chỉnh và ghép lại",
        "Xóa toàn bộ ảnh",
        "Biến ảnh thành văn bản",
        "Chỉ giữ ảnh đầu tiên"
      ],
      answer: 0,
      explain: "Panorama căn chỉnh các ảnh rồi ghép thành ảnh toàn cảnh."
    },
    {
      level: "hard",
      question: "Ma trận homography H trong panorama dùng để làm gì?",
      options: [
        "Biến đổi điểm giữa các ảnh",
        "Tính âm lượng",
        "Tạo mật khẩu",
        "Xóa vector"
      ],
      answer: 0,
      explain: "Homography giúp chuyển tọa độ điểm từ ảnh này sang ảnh khác."
    },
    {
      level: "hard",
      question: "Vì sao game 3D dùng ma trận nhiều?",
      options: [
        "Vì cần biến đổi rất nhiều điểm nhanh và thống nhất",
        "Vì ma trận làm game không cần đồ họa",
        "Vì ma trận chỉ dùng cho âm thanh",
        "Vì vector không dùng được"
      ],
      answer: 0,
      explain: "Mỗi mô hình 3D có nhiều điểm, ma trận giúp biến đổi hàng loạt hiệu quả."
    },
    {
      level: "medium",
      question: "Kernel trong xử lý ảnh có thể tạo hiệu ứng nào?",
      options: [
        "Làm mờ, làm nét hoặc phát hiện cạnh",
        "Giải hệ phương trình",
        "Tìm giá trị riêng của người dùng",
        "Tạo điểm kiểm tra"
      ],
      answer: 0,
      explain: "Kernel được dùng cho nhiều bộ lọc ảnh như blur, sharpen, edge detection."
    },
    {
      level: "hard",
      question: "Nén ảnh bằng SVD thường giữ phần nào?",
      options: [
        "Các giá trị kỳ dị lớn nhất",
        "Các giá trị kỳ dị nhỏ nhất trước tiên",
        "Chỉ hàng cuối",
        "Chỉ cột đầu"
      ],
      answer: 0,
      explain: "Giá trị kỳ dị lớn chứa nhiều thông tin quan trọng của ảnh."
    }
  ]);

  add("app-real-life", "Ứng dụng", "Ứng dụng đại số tuyến tính trong đời sống và khoa học", [
    {
      level: "easy",
      question: "Máy chụp CT dùng đại số tuyến tính để làm gì?",
      options: [
        "Tái tạo ảnh bên trong cơ thể từ các phép đo",
        "Tính điểm bài kiểm tra",
        "Đổi màu màn hình",
        "Tạo âm thanh"
      ],
      answer: 0,
      explain: "CT tạo nhiều phép đo và giải hệ lớn để tái tạo ảnh."
    },
    {
      level: "medium",
      question: "Mô hình Leontief dùng ma trận để mô tả điều gì?",
      options: [
        "Sự phụ thuộc giữa các ngành kinh tế",
        "Màu của sản phẩm",
        "Số chữ trong tên ngành",
        "Thời tiết"
      ],
      answer: 0,
      explain: "Leontief mô tả đầu vào-đầu ra giữa các ngành."
    },
    {
      level: "easy",
      question: "Hill Cipher dùng đại số tuyến tính để làm gì?",
      options: [
        "Mã hóa chữ cái bằng ma trận",
        "Tính diện tích",
        "Tạo ảnh panorama",
        "Dự báo dân số"
      ],
      answer: 0,
      explain: "Hill Cipher dùng phép nhân ma trận modulo 26 để mã hóa."
    },
    {
      level: "medium",
      question: "Ma trận Leslie dùng để dự báo điều gì?",
      options: [
        "Tăng trưởng dân số theo nhóm tuổi",
        "Điểm học sinh",
        "Màu ảnh",
        "Số liên kết web"
      ],
      answer: 0,
      explain: "Ma trận Leslie mô hình quần thể theo nhóm tuổi qua thời gian."
    },
    {
      level: "medium",
      question: "Mô hình Markowitz dùng ma trận hiệp phương sai để đo gì?",
      options: [
        "Rủi ro danh mục đầu tư",
        "Độ dài vector ảnh",
        "Số nghiệm của hệ",
        "Màu của tài sản"
      ],
      answer: 0,
      explain: "Ma trận hiệp phương sai giúp đo rủi ro tổng thể của danh mục."
    },
    {
      level: "easy",
      question: "Trong phương trình K·u=F của kết cấu, u thường là gì?",
      options: [
        "Vector chuyển vị",
        "Định thức",
        "Giá trị riêng duy nhất",
        "Màu của công trình"
      ],
      answer: 0,
      explain: "u biểu diễn chuyển vị của các nút trong công trình."
    },
    {
      level: "hard",
      question: "Trong Hill Cipher, điều kiện quan trọng để giải mã là gì?",
      options: [
        "Ma trận khóa có nghịch đảo modulo 26",
        "Ma trận khóa phải toàn số 0",
        "Văn bản phải không có chữ",
        "Không được dùng modulo"
      ],
      answer: 0,
      explain: "Muốn giải mã, cần nghịch đảo của ma trận khóa trong modulo 26."
    },
    {
      level: "hard",
      question: "Trong chụp CT, vector x thường biểu diễn gì?",
      options: [
        "Các giá trị hấp thụ tia X của các vùng nhỏ",
        "Tên bệnh nhân",
        "Màu của máy",
        "Số ảnh đã xóa"
      ],
      answer: 0,
      explain: "x chứa các giá trị cần tìm để tái tạo ảnh bên trong."
    },
    {
      level: "medium",
      question: "Trong mô hình Leontief x=Ax+d, d thường biểu diễn gì?",
      options: [
        "Nhu cầu cuối cùng",
        "Ma trận chuyển vị",
        "Vector riêng",
        "Sai số ảnh"
      ],
      answer: 0,
      explain: "d là nhu cầu cuối cùng của nền kinh tế."
    },
    {
      level: "hard",
      question: "Điểm chung của CT, Leontief, Leslie và kết cấu xây dựng là gì?",
      options: [
        "Đều có thể mô hình bằng hệ phương trình, vector hoặc ma trận",
        "Đều chỉ dùng văn bản",
        "Đều không có dữ liệu",
        "Đều chỉ dùng phép cộng số nguyên"
      ],
      answer: 0,
      explain: "Các ứng dụng đời sống này đều dùng đại số tuyến tính để mô hình và tính toán."
    }
  ]);

  return bank;
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