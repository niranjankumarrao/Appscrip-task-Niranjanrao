// Simple header component
export default function Header() {
  return (
    <header className="site-header">
      <header class="main-header">
        <!-- Top header section with logo and user icons -->
        <div class="header-top">
          <div class="header-logo">
            <a href="#">LOGO</a>
          </div>
          <div class="header-icons">
            <!-- These would be icon fonts or SVG images -->
            <a href="#"><span class="icon">🔍</span></a>
            <a href="#"><span class="icon">🛒</span></a>
            <a href="#"><span class="icon">👤</span></a>
            <div class="language-selector">
              <span>ENG</span>
            </div>
          </div>
        </div>
      
        <!-- Bottom header section with navigation links -->
        <nav class="header-nav">
          <ul>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">SKILLS</a></li>
            <li><a href="#">STORIES</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </nav>
      </header>
      <div>
          <h2 className="subheading">DISCOVER OUR PRODUCTS</h2>
          <p className="subpara">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
       </div>

        <style jsx>{`
          .site-header { border-bottom:1px solid #eee; background:#fff; }
          .inner { max-width:1100px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; padding:14px; }
          .logo { font-weight:700; letter-spacing:1px; }
          .nav a { margin:0 8px; color:#333; font-size:14px; }
        `}</style>
    </header>
   );
}
