// Filters panel - simple and clear for a fresher
export default function FiltersPanel({ categories = [], activeCategory, onSelectCategory, query, setQuery, showIdealFor, setShowIdealFor }) {
  return (
    <div className="filters">
      <div className="search">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products..." />
      </div>

      <div className="section">
        <h4>Category</h4>
        <ul>
          {categories.map(cat => (
            <li key={cat}>
              <button className={cat === activeCategory ? 'active' : ''} onClick={() => onSelectCategory(cat)}>
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="section ideal">
        <h4 onClick={() => setShowIdealFor(s => !s)} style={{cursor:'pointer'}}>Ideal For {showIdealFor ? '▲' : '▼'}</h4>
        {showIdealFor && (
          <div className="ideal-list">
            <label><input type="checkbox" /> Travel</label><br/>
            <label><input type="checkbox" /> Work</label><br/>
            <label><input type="checkbox" /> Gifts</label>
          </div>
        )}
      </div>

      <style jsx>{`
        .filters { background:#fff; border:1px solid #eee; padding:12px; }
        .search input { width:100%; padding:8px; border:1px solid #ddd; margin-bottom:12px; }
        .section h4 { font-size:14px; margin:8px 0; }
        ul { list-style:none; padding:0; margin:0; }
        li + li { margin-top:6px; }
        button { background:none; border:1px solid transparent; padding:6px 8px; width:100%; text-align:left; cursor:pointer; }
        .active { border-left:3px solid #000; padding-left:6px; font-weight:700; }
        .ideal-list { padding-left:6px; color:#444; margin-top:8px; }
      `}</style>
    </div>
);
}
