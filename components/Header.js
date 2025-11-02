// Simple header component
export default function Header() {
  return (
    <header className="site-header">
      {/* Main header container */}
      <div className="main-header">
        
        {/* Top header section with logo and user icons */}
        <div className="header-top">
          <div className="header-logo">
            <a href="#">LOGO</a>
          </div>

          <div className="header-icons">
            {/* These would be icon fonts or SVG images */}
            <a href="#"><span className="icon">🔍</span></a>
            <a href="#"><span className="icon">🛒</span></a>
            <a href="#"><span className="icon">👤</span></a>

            <div className="language-selector">
              <span>ENG</span>
            </div>
          </div>
        </div>

        {/* Bottom header section with navigation links */}
        <nav className="header-nav">
          <ul>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">SKILLS</a></li>
            <li><a href="#">STORIES</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </nav>
      </div>

      {/* Subheading section */}
      <div>
        <h2 className="subheading">DISCOVER OUR PRODUCTS</h2>
        <p className="subpara">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>

      <style jsx>{`
        .site-header {
          border-bottom: 1px solid #eee;
          background: #fff;
        }
        .main-header {
          max-width: 1100px;
          margin: 0 auto;
          padding: 14px;
        }
        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-logo a {
          font-weight: 700;
          letter-spacing: 1px;
          color: #000;
          text-decoration: none;
        }
        .header-icons a {
          margin: 0 5px;
          font-size: 18px;
        }
        .header-nav ul {
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 0;
        }
        .header-nav a {
          margin: 0 10px;
          color: #333;
          text-decoration: none;
        }
        .subheading {
          text-align: center;
          font-size: 24px;
          margin-top: 20px;
        }
        .subpara {
          text-align: center;
          max-width: 600px;
          margin: 10px auto;
          color: #555;
        }
      `}</style>
    </header>
  );
}
