export default function RecentActivity() {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-on-surface">Recent Activity</h3>
        <span className="material-symbols-outlined text-slate-400 cursor-pointer">more_horiz</span>
      </div>
      
      <div className="space-y-6 flex-1">
        {/* Activity Item */}
        <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-surface-container-low transition-colors group">
          <div className="w-10 h-10 rounded-full bg-[#f8f9ff] flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-lg">shopping_bag</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-on-surface">Apple Store Soho</h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Technology • 2h ago</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-secondary">-$1,499.00</p>
          </div>
        </div>

        {/* Activity Item */}
        <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-surface-container-low transition-colors group">
          <div className="w-10 h-10 rounded-full bg-[#f8f9ff] flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-lg">payments</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-on-surface">Dividend Payment</h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Investment • 5h ago</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-primary">+$842.20</p>
          </div>
        </div>

        {/* Activity Item */}
        <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-surface-container-low transition-colors group">
          <div className="w-10 h-10 rounded-full bg-[#f8f9ff] flex items-center justify-center text-on-surface">
            <span className="material-symbols-outlined text-lg">home_work</span>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-on-surface">Skyline Properties</h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Rent • Yesterday</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-secondary">-$4,200.00</p>
          </div>
        </div>
      </div>
      
      <button className="w-full mt-6 py-3 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors border border-primary/10">
        View Detailed History
      </button>
    </div>
  );
}
