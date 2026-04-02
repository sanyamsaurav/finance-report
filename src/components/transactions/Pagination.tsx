export default function Pagination() {
  return (
    <div className="mt-8 flex justify-between items-center text-sm">
      <p className="text-slate-500 font-medium">
        Showing <span className="text-on-surface font-bold">1-5</span> of <span className="text-on-surface font-bold">128</span> transactions
      </p>
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center bg-white border border-outline-variant/15 rounded-lg text-slate-400 hover:bg-surface-container transition-colors shadow-sm">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-lg font-bold shadow-md">1</button>
        <button className="w-10 h-10 flex items-center justify-center bg-white border border-outline-variant/15 rounded-lg text-slate-600 font-bold hover:bg-surface-container transition-colors shadow-sm">2</button>
        <button className="w-10 h-10 flex items-center justify-center bg-white border border-outline-variant/15 rounded-lg text-slate-600 font-bold hover:bg-surface-container transition-colors shadow-sm">3</button>
        <span className="px-2 text-slate-400">...</span>
        <button className="w-10 h-10 flex items-center justify-center bg-white border border-outline-variant/15 rounded-lg text-slate-600 font-bold hover:bg-surface-container transition-colors shadow-sm">24</button>
        <button className="w-10 h-10 flex items-center justify-center bg-white border border-outline-variant/15 rounded-lg text-slate-400 hover:bg-surface-container transition-colors shadow-sm">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
