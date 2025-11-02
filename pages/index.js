import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FiltersPanel from '../components/FiltersPanel';
import ProductCard from '../components/ProductCard';

const STATIC_CATEGORIES = ['All', 'Men', 'Women', 'Electronics', 'Jewellery'];

export default function Home({ products }) {
  const [showFilters, setShowFilters] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');

  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showIdealFor, setShowIdealFor] = useState(false);

  useEffect(() => {
    try {
      const mq = window.matchMedia('(min-width: 1024px)');
      setShowFilters(mq.matches);
    } catch (e) {
      setShowFilters(true);
    }
  }, []);

  const filtered = useMemo(() => {
    let list = Array.isArray(products) ? products.slice() : [];

    if (activeCategory && activeCategory !== 'All') {
      list = list.filter(p => {
        const cat = (p.category || '').toLowerCase();
        if (activeCategory === 'Men') return cat.includes('men');
        if (activeCategory === 'Women') return cat.includes('women') || cat.includes("women's");
        if (activeCategory === 'Electronics') return cat.includes('electronic');
        if (activeCategory === 'Jewellery') return cat.includes('jewel') || cat.includes('jewelry');
        return true;
      });
    }

    if (query && query.trim() !== '') {
      const q = query.trim().toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q));
    }

    if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'newest') {
      list.sort((a, b) => b.id - a.id);
    }

    return list;
  }, [products, activeCategory, query, sortBy]);

  return (
    <>
      <Head>
        <title>Product Listing - Niranjan</title>
        <meta name="description" content="Product Listing Page demo by Niranjan. Responsive PLP with filters and sorting." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: products.slice(0, 10).map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.title,
            url: `https://example.com/product/${p.id}`
          }))
        }) }} />
      </Head>

      <Header />

      <main className="container">
        <div className="top-actions">
          <button className="filter-btn" onClick={() => setShowFilters(s => !s)}>
            {showFilters ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>

          <div className="sort-block">
            <div className="sort-label">RECOMMENDED</div>
            <div className="sort-control">
              <button className="sort-toggle" onClick={() => setShowSortOptions(s => !s)}>
                {sortBy === 'recommended' ? 'Recommended' :
                 sortBy === 'price-low' ? 'Price: Low → High' :
                 sortBy === 'price-high' ? 'Price: High → Low' :
                 sortBy === 'newest' ? 'Newest' : 'Sort'}
              </button>
              {showSortOptions && (
                <ul className="sort-list">
                  <li><button onClick={() => { setSortBy('recommended'); setShowSortOptions(false); }}>Recommended</button></li>
                  <li><button onClick={() => { setSortBy('newest'); setShowSortOptions(false); }}>Newest</button></li>
                  <li><button onClick={() => { setSortBy('price-low'); setShowSortOptions(false); }}>Price: Low → High</button></li>
                  <li><button onClick={() => { setSortBy('price-high'); setShowSortOptions(false); }}>Price: High → Low</button></li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="layout">
          {showFilters && (
            <aside className="sidebar">
              <FiltersPanel
                categories={STATIC_CATEGORIES}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                query={query}
                setQuery={setQuery}
                showIdealFor={showIdealFor}
                setShowIdealFor={setShowIdealFor}
              />
            </aside>
          )}

          <section className="products">
            <div className="grid" role="list">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            {filtered.length === 0 && <div className="no-results">No products found.</div>}
          </section>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container { max-width:1100px; margin:0 auto; padding:18px; }
        .top-actions { display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; gap:12px; }
        .filter-btn { background:#fff; border:1px solid #ccc; padding:8px 12px; cursor:pointer; }
        .sort-block { display:flex; align-items:center; gap:10px; position:relative; }
        .sort-toggle { padding:8px 10px; border:1px solid #ccc; background:#fff; cursor:pointer; }
        .sort-list { position:absolute; background:#fff; border:1px solid #ddd; margin-top:6px; list-style:none; padding:6px; z-index:20; }
        .sort-list li { margin:6px 0; }

        .layout { display:flex; gap:20px; align-items:flex-start; }
        .sidebar { width:260px; min-width:220px; }
        .products { flex:1; }

        .grid { display:grid; grid-template-columns: repeat(4, 1fr); gap:18px; }
        @media (max-width: 1024px) {
          .grid { grid-template-columns: repeat(3, 1fr); }
          .sidebar { width:200px; }
        }
        @media (max-width: 768px) {
          .layout { flex-direction:column; }
          .sidebar { width:100%; order:2; }
          .grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .grid { grid-template-columns: repeat(1, 1fr); }
          .top-actions { flex-direction:column; align-items:stretch; }
          .sort-block { justify-content:space-between; }
        }

        .no-results { padding:20px; color:#555; }

      `}</style>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    const normalized = products.map(p => ({
      id: p.id,
      title: p.title || 'Untitled product',
      price: p.price || 0,
      category: p.category || '',
      image: p.image || ''
    }));

    return { props: { products: normalized } };
  } catch (e) {
    return { props: { products: [] } };
  }
}
