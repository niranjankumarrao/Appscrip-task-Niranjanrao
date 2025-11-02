// Simple header component
export default function Header() {
  return (
    <header className="site-header">
      <div className="inner">
        <div><h1>icon</h1></div>
        <div className="logo">Logo</div>
        <div className="icons">🔍 🧡 🛒</div>
        <div>
          <nav className="nav">
            <a>Shop</a>
            <a>Design</a>
            <a>About</a>
            <a>Contact</a>
          </nav>
       </div> 
      </div>
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
