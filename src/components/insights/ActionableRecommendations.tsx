export default function ActionableRecommendations() {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-2xl ghost-border">
      <h3 className="text-xl font-bold text-on-surface mb-6">Suggested Actions</h3>
            
      <div className="space-y-4">
        <div className="p-4 rounded-xl border border-secondary/20 bg-secondary/5 group hover:bg-secondary/10 transition-colors cursor-pointer">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2 text-secondary">
              <span className="material-symbols-outlined text-sm">warning</span>
              <h4 className="text-sm font-bold">Rebalance Required</h4>
            </div>
            <span className="material-symbols-outlined text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </div>
          <p className="text-xs text-slate-600 mb-3">Tech equity is currently 42% of portfolio (Target: 30%). Suggest liquidating $85k.</p>
          <div className="text-[10px] font-bold text-secondary uppercase tracking-wider">High Priority</div>
        </div>

        <div className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-colors cursor-pointer group">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2 text-on-surface">
              <span className="material-symbols-outlined text-sm text-primary">savings</span>
              <h4 className="text-sm font-bold">Tax Harvesting</h4>
            </div>
            <span className="material-symbols-outlined text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </div>
          <p className="text-xs text-slate-500 mb-3">Realize $12,400 in minor losses from Q1 bonds to offset recent capital gains.</p>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Medium Priority</div>
        </div>
              
        <div className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-colors cursor-pointer group">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2 text-on-surface">
              <span className="material-symbols-outlined text-sm text-primary">insights</span>
              <h4 className="text-sm font-bold">Yield Optimization</h4>
            </div>
            <span className="material-symbols-outlined text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </div>
          <p className="text-xs text-slate-500 mb-3">Move $45,000 from checking to High-Yield Savings (Current APY 4.85%).</p>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Low Priority</div>
        </div>
      </div>
    </div>
  );
}
