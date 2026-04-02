export default function AssetCorrelationMatrix() {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-2xl ghost-border">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-on-surface">Asset Correlation Matrix</h3>
        <select className="bg-surface-container px-4 py-2 rounded-lg text-sm font-bold text-slate-600 border-none outline-none cursor-pointer">
          <option>Trailing 12 Months</option>
          <option>Trailing 6 Months</option>
          <option>Year to Date</option>
        </select>
      </div>
            
      <div className="relative h-64 w-full bg-slate-50/50 rounded-xl flex items-center justify-center chart-grid">
        {/* Minimalistic Chart Placeholder */}
        <div className="absolute inset-0 flex items-end px-10 pb-6 pt-10 justify-between">
          <div className="w-12 bg-primary/20 rounded-t-sm h-[40%] hover:bg-primary/40 transition-colors"></div>
          <div className="w-12 bg-primary/40 rounded-t-sm h-[65%] hover:bg-primary/60 transition-colors"></div>
          <div className="w-12 bg-primary rounded-t-sm h-[85%] shadow-lg transition-transform hover:-translate-y-2"></div>
          <div className="w-12 bg-primary/60 rounded-t-sm h-[50%] hover:bg-primary/80 transition-colors"></div>
          <div className="w-12 bg-secondary/80 rounded-t-sm h-[30%] shadow-lg hover:bg-secondary transition-colors"></div>
          <div className="w-12 bg-primary/30 rounded-t-sm h-[70%] hover:bg-primary/50 transition-colors"></div>
        </div>
        <p className="absolute text-slate-400 font-bold tracking-widest text-[10px] uppercase opacity-50 z-0">Correlational Delta Visualization</p>
      </div>
    </div>
  );
}
