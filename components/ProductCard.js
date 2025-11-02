// Product card - keep it small and simple
export default function ProductCard({ product }) {
  return (
    <article className="card" role="listitem">
      <div className="thumb">
        <img src={product.image} alt={product.title} />
      </div>
      <h3 className="title">{product.title}</h3>
      <p className="price">${product.price.toFixed(2)}</p>

      <style jsx>{`
        .card { background:#fff; border:1px solid #f0f0f0; padding:10px; display:flex; flex-direction:column; min-height:240px; }
        .thumb { height:160px; display:flex; align-items:center; justify-content:center; background:#fafafa; margin-bottom:8px; overflow:hidden; }
        .thumb img { max-width:100%; max-height:100%; object-fit:contain; }
        .title { font-size:14px; margin:6px 0; color:#222; min-height:40px; }
        .price { color:#666; margin-top:auto; }
      `}</style>
    </article>
);
}
