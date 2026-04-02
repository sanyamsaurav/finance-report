export default function TransactionFilters() {
  return (
    <section className="mb-8 p-6 bg-surface-container-low rounded-xl flex flex-wrap items-center gap-6">
      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] font-bold text-slate-500 tracking-wider uppercase ml-1">Date Range</label>
        <div className="flex items-center bg-white rounded-lg px-3 py-2 text-sm shadow-sm cursor-pointer">
          <span className="material-symbols-outlined text-slate-400 text-lg mr-2">calendar_today</span>
          <span className="font-medium">Oct 01, 2023 - Oct 31, 2023</span>
          <span className="material-symbols-outlined text-slate-400 text-lg ml-3">expand_more</span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] font-bold text-slate-500 tracking-wider uppercase ml-1">Category</label>
        <div className="flex items-center bg-white rounded-lg px-3 py-2 text-sm shadow-sm min-w-[160px] cursor-pointer">
          <span className="font-medium">All Categories</span>
          <span className="material-symbols-outlined text-slate-400 text-lg ml-auto">expand_more</span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] font-bold text-slate-500 tracking-wider uppercase ml-1">Type</label>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-sm">All</button>
          <button className="px-4 py-2 bg-white text-slate-600 rounded-lg text-sm font-medium hover:bg-surface-container transition-colors shadow-sm">Income</button>
          <button className="px-4 py-2 bg-white text-slate-600 rounded-lg text-sm font-medium hover:bg-surface-container transition-colors shadow-sm">Expense</button>
        </div>
      </div>

      <div className="ml-auto flex items-end">
        <button className="flex items-center gap-2 px-4 py-2 text-slate-500 font-bold text-sm hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-lg">filter_alt_off</span>
          Clear Filters
        </button>
      </div>
    </section>
  );
}
