import Script from 'next/script';

export default function Home() {
  return (
    <>
      <header className="topbar">
        <button className="menu-btn" id="menuBtn">☰</button>
        <div className="brand">
          <div className="logo">Σ</div>
          <span>SageLA Math</span>
          <small>Full JSON</small>
        </div>
        <div className="search">
          <div className="search-box">
            <input type="text" id="searchInput" placeholder="Tìm kiếm bài lý thuyết toán..." />
            <button id="searchBtn">🔍</button>
          </div>
        </div>
        <div className="top-actions">
          <div className="top-pill">🇻🇳 Tiếng Việt</div>
        </div>
      </header>

      <aside className="sidebar" id="sidebar">
        <div className="side-block">
          <div className="side-item active" data-view="home">
            <div className="side-icon">⌂</div>
            <div className="side-text">Trang chủ</div>
          </div>
          <div className="side-item" data-view="theory">
            <div className="side-icon">📘</div>
            <div className="side-text">Lý thuyết toán</div>
          </div>
          <div className="side-item" data-view="testSetup">
            <div className="side-icon">📝</div>
            <div className="side-text">Tạo bài kiểm tra</div>
          </div>
          <div className="side-item" data-view="practice">
            <div className="side-icon">✨</div>
            <div className="side-text">Bài luyện tập</div>
          </div>
          <div className="side-item" data-view="scores">
            <div className="side-icon">🏆</div>
            <div className="side-text">Xem điểm</div>
          </div>
        </div>
        <div className="side-block">
          <div className="side-title">Chủ đề toán</div>
          <div id="topicList"></div>
        </div>
      </aside>

      <main id="main">
        <nav className="chips">
          <button className="chip active" data-view="home">Tổng quan</button>
          <button className="chip" data-view="theory">Lý thuyết toán</button>
          <button className="chip" data-view="testSetup">Tạo bài kiểm tra</button>
          <button className="chip" data-view="practice">Bài luyện tập</button>
          <button className="chip" data-view="scores">Xem điểm</button>
        </nav>
        <div id="app" className="animate-fade-in"></div>
      </main>

      {/* Cấu hình MathJax */}
      <Script id="mathjax-config" strategy="beforeInteractive">
        {`
          window.MathJax = {
            tex: {
              inlineMath: [['\\\\(', '\\\\)'], ['$', '$']],
              displayMath: [['\\\\[', '\\\\]']]
            },
            svg: {
              fontCache: 'global'
            }
          };
        `}
      </Script>

      {/* Tải thư viện MathJax */}
      <Script 
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" 
        strategy="beforeInteractive" 
      />

      {/* Tải logic chính của web tĩnh (đặt strategy="lazyOnload" để web tải giao diện trước) */}
      <Script 
        src="/javascript.js" 
        strategy="lazyOnload" 
      />
    </>
  );
}