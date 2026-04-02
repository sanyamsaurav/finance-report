export default function HeroStatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Balance */}
      <div className="bg-surface-container-lowest p-6 rounded-xl ghost-border flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">account_balance</span>
            </div>
            <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded tracking-wider">
              +12.4%
            </span>
          </div>
          <p className="text-sm font-bold text-tertiary mb-1">TOTAL NET WORTH</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">$1,284,592.00</h2>
        </div>
      </div>
          
      {/* Monthly Income */}
      <div className="bg-surface-container-lowest p-6 rounded-xl ghost-border">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">trending_up</span>
          </div>
          <span className="text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded tracking-wider">
            ON TRACK
          </span>
        </div>
        <p className="text-sm font-bold text-tertiary mb-1">MONTHLY INCOME</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-primary">$42,910.45</h2>
        <p className="text-xs text-slate-400 mt-2 font-medium">85% of monthly goal achieved</p>
      </div>
          
      {/* Monthly Expenses */}
      <div className="bg-surface-container-lowest p-6 rounded-xl ghost-border">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary">trending_down</span>
          </div>
          <span className="text-[10px] font-bold text-secondary bg-secondary/5 px-2 py-1 rounded tracking-wider">
            -4.2%
          </span>
        </div>
        <p className="text-sm font-bold text-tertiary mb-1">MONTHLY EXPENSES</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-secondary">$18,244.12</h2>
        <p className="text-xs text-slate-400 mt-2 font-medium">Top category: Real Estate Maintenance</p>
      </div>
    </div>
  );
}
