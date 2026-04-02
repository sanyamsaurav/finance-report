export default function PortfolioGrowthChart() {
  return (
    <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl ghost-border">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-xl font-bold text-on-surface">Portfolio Growth Trend</h3>
          <p className="text-sm text-tertiary">Performance comparison across Q3 - Q4</p>
        </div>
        <div className="flex gap-2">
          <button className="text-xs font-bold px-3 py-1.5 rounded-lg bg-surface-container text-primary">
            6 Months
          </button>
          <button className="text-xs font-bold px-3 py-1.5 rounded-lg text-slate-500 hover:bg-surface-container">
            1 Year
          </button>
        </div>
      </div>
      
      <div className="relative h-[300px] w-full flex items-end justify-between px-4">
        {/* Simulated Chart Content */}
        <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
          <div className="border-b border-outline-variant/10 w-full"></div>
          <div className="border-b border-outline-variant/10 w-full"></div>
          <div className="border-b border-outline-variant/10 w-full"></div>
          <div className="border-b border-outline-variant/10 w-full"></div>
          <div className="border-b border-outline-variant/10 w-full"></div>
        </div>
        <div className="flex items-end gap-1 flex-1 h-full px-2">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#006c49" stopOpacity="0.1"></stop>
                <stop offset="100%" stopColor="#006c49" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
            <path d="M0,200 Q100,180 200,220 T400,140 T600,100 T800,50" fill="transparent" stroke="#006c49" strokeLinecap="round" strokeWidth="3"></path>
            <path d="M0,200 Q100,180 200,220 T400,140 T600,100 T800,50 L800,300 L0,300 Z" fill="url(#chartGradient)"></path>
            <path d="M0,250 Q150,220 300,240 T600,180 T800,160" fill="transparent" stroke="#ba0035" strokeDasharray="8,4" strokeLinecap="round" strokeOpacity="0.5" strokeWidth="2"></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-between mt-6 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        <span>July</span>
        <span>August</span>
        <span>September</span>
        <span>October</span>
        <span>November</span>
        <span>December</span>
      </div>
    </div>
  );
}
