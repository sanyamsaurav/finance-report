export default function PeerBenchmarking() {
  return (
    <div className="bg-[#1a2332] p-8 rounded-2xl text-white relative overflow-hidden">
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            
      <h3 className="text-xl font-bold mb-6">Peer Benchmarking</h3>
            
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-medium text-slate-300">Your Portfolio</span>
            <span className="text-lg font-bold text-primary">+14.2%</span>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded-full">
            <div className="h-full bg-primary rounded-full w-[85%] shadow-[0_0_10px_#10b981]"></div>
          </div>
        </div>
              
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-medium text-slate-300">Top 10% HNWI</span>
            <span className="text-lg font-bold text-white">+11.8%</span>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded-full">
            <div className="h-full bg-white rounded-full w-[70%]"></div>
          </div>
        </div>
              
        <div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-medium text-slate-300">S&P 500 Index</span>
            <span className="text-lg font-bold text-white">+8.4%</span>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded-full">
            <div className="h-full bg-slate-500 rounded-full w-[50%]"></div>
          </div>
        </div>
      </div>
            
      <p className="text-xs text-slate-400 mt-6 pt-6 border-t border-slate-700/50">
        Your aggressive positioning in emerging markets accounts for the 2.4% outperformance vs your peer group.
      </p>
    </div>
  );
}
