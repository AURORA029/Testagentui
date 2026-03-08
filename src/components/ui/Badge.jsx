export default function Badge({ children, showIndicator = true }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-4 py-2">
      {showIndicator && <span className="h-2 w-2 rounded-full bg-red-600" />}
      <span className="text-xs font-extrabold uppercase tracking-wide text-red-600">
        {children}
      </span>
    </div>
  );
}
