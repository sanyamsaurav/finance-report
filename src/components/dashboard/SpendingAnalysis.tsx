export default function SpendingAnalysis() {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border relative overflow-hidden">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-on-surface">Spending Analysis</h3>
          <p className="text-sm text-tertiary">Categorized outflows for current period</p>
        </div>
        <div className="bg-surface-container px-3 py-1 rounded text-[10px] font-bold text-primary uppercase">Elite View</div>
      </div>
      <div className="flex items-center gap-12 mt-10">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50%" cy="50%" fill="transparent" r="40%" stroke="#eff4ff" strokeWidth="24"></circle>
            <circle cx="50%" cy="50%" fill="transparent" r="40%" stroke="#006c49" strokeDasharray="251.2" strokeDashoffset="100" strokeWidth="24"></circle>
            <circle cx="50%" cy="50%" fill="transparent" r="40%" stroke="#ba0035" strokeDasharray="251.2" strokeDashoffset="200" strokeWidth="24"></circle>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-[10px] font-bold text-slate-400">TOTAL</p>
            <p className="text-xl font-extrabold">$18.2k</p>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-sm font-medium">Investments</span>
            </div>
            <span className="text-sm font-bold">42%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <span className="text-sm font-medium">Real Estate</span>
            </div>
            <span className="text-sm font-bold">35%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              <span className="text-sm font-medium">Lifestyle</span>
            </div>
            <span className="text-sm font-bold">23%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
