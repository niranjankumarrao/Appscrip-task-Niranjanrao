// Footer with simple layout
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="col">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates.</p>
        </div>
        <div className="col right">
          <h4>CONTACT</h4>
          <p>customercare@example.com</p>
        </div>
      </div>

      <style jsx>{`
        .site-footer { background:#111; color:#fff; padding:30px 0; margin-top:30px; }
        .wrap { max-width:1100px; margin:0 auto; display:flex; justify-content:space-between; padding:0 18px; }
        .col { width:48%; }
        .right { text-align:right; }
        @media (max-width:768px) {
          .wrap { flex-direction:column; gap:12px; }
          .right { text-align:left; }
        }
      `}</style>
    </footer>
  );
}
