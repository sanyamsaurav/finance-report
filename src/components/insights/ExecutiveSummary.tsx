export default function ExecutiveSummary() {
  return (
    <div className="bg-gradient-to-br from-surface-container-lowest to-[#f1f6ff] p-8 rounded-2xl ghost-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="w-10 h-10 rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center text-white">
          <span className="material-symbols-outlined">auto_awesome</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface">Executive Summary</h3>
      </div>
            
      <div className="relative z-10">
        <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
          Your portfolio has outperformed the baseline index by <span className="font-bold text-primary">12.4%</span> this quarter. The strongest contributor was your Tech Equity ETF allocation, while Fixed Income dragged yields down by 1.2%. We predict an upcoming liquidity squeeze if Real Estate reinvestments continue at the current pace without corresponding dividend yields.
        </p>
              
        <div className="flex gap-4">
          <button className="emerald-gradient text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-primary/20 hover:scale-[0.98] transition-transform flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">download</span>
            Download Q3 Report
          </button>
          <button className="bg-white text-on-surface px-5 py-2.5 rounded-xl text-sm font-bold border border-outline-variant/30 hover:shadow-md hover:border-outline-variant/50 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">summarize</span>
            Regenerate Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
