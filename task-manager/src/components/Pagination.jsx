export default function Pagination({ page, totalPages, onChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);
  return (
    <div className="flex gap-2 items-center mt-4">
      <button disabled={page <= 1} onClick={() => onChange(page - 1)} className="px-3 py-1 rounded border">Prev</button>
      {pages.map((p) => (
        <button key={p} onClick={() => onChange(p)} className={`px-3 py-1 rounded ${p === page ? 'bg-[var(--brand-1)] text-white' : 'border'}`}>{p}</button>
      ))}
      <button disabled={page >= totalPages} onClick={() => onChange(page + 1)} className="px-3 py-1 rounded border">Next</button>
    </div>
  );
}
