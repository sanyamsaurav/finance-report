export default function BudgetOverview() {
  return (
    <>
      <section className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">Monthly Budgets</h2>
          <p className="text-tertiary font-medium">Tracking your allocation for March 2024</p>
        </div>
        <button className="emerald-gradient px-6 py-3 rounded-xl text-on-primary font-bold shadow-xl shadow-primary/20 hover:scale-[0.98] transition-all flex items-center gap-2">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          Add Budget
        </button>
      </section>

      <div className="grid grid-cols-12 gap-6 mb-10">
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest ghost-border rounded-xl p-6 flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 block">Total Budgeted</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold tracking-tight text-on-surface">$12,450</span>
            <span className="text-sm font-semibold text-slate-400">/ mo</span>
          </div>
          <div className="mt-6 flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span className="text-xs font-bold">+5.2% from last month</span>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest ghost-border rounded-xl p-6">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 block">Total Spent</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold tracking-tight text-on-surface">$8,124</span>
            <span className="text-sm font-semibold text-slate-400">/ $12,450</span>
          </div>
          <div className="w-full h-2 bg-surface-container-low rounded-full mt-6 overflow-hidden">
            <div className="h-full emerald-gradient w-[65%]"></div>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest ghost-border rounded-xl p-6">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 block">Remaining Balance</span>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold tracking-tight text-primary">$4,326</span>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold">JD</div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">ML</div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold">+2</div>
            </div>
            <span className="text-xs text-slate-500 font-medium">Shared with family unit</span>
          </div>
        </div>
      </div>
    </>
  );
}
