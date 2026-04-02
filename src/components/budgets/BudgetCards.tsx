export default function BudgetCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Card: Food */}
      <div className="bg-surface-container-lowest ghost-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-surface-container-low text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">restaurant</span>
          </div>
          <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">On Track</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface mb-1">Food & Groceries</h3>
        <p className="text-sm text-slate-500 mb-6">Organic supplies & dining out</p>
        <div className="flex justify-between text-sm font-bold mb-2">
          <span className="text-on-surface">$850.00</span>
          <span className="text-slate-400">$1,200.00</span>
        </div>
        <div className="w-full h-1.5 bg-surface-container-low rounded-full mb-6">
          <div className="h-full bg-primary rounded-full w-[70%]"></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400">70% CONSUMED</span>
          <button className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </div>

      {/* Card: Travel */}
      <div className="bg-surface-container-lowest ghost-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-surface-container-low text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">flight</span>
          </div>
          <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full uppercase tracking-wider">Near Limit</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface mb-1">Travel & Transport</h3>
        <p className="text-sm text-slate-500 mb-6">Commutes and weekend trips</p>
        <div className="flex justify-between text-sm font-bold mb-2">
          <span className="text-on-surface">$1,420.00</span>
          <span className="text-slate-400">$1,500.00</span>
        </div>
        <div className="w-full h-1.5 bg-surface-container-low rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-secondary rounded-full w-[94.6%]"></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400">94% CONSUMED</span>
          <button className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </div>

      {/* Card: Rent */}
      <div className="bg-surface-container-lowest ghost-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-surface-container-low text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">home</span>
          </div>
          <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">On Track</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface mb-1">Rent & Utilities</h3>
        <p className="text-sm text-slate-500 mb-6">Fixed monthly residence costs</p>
        <div className="flex justify-between text-sm font-bold mb-2">
          <span className="text-on-surface">$3,200.00</span>
          <span className="text-slate-400">$3,200.00</span>
        </div>
        <div className="w-full h-1.5 bg-surface-container-low rounded-full mb-6">
          <div className="h-full bg-primary rounded-full w-full"></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400">100% CONSUMED</span>
          <button className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </div>

      {/* Card: Entertainment */}
      <div className="bg-surface-container-lowest ghost-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-surface-container-low text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">movie</span>
          </div>
          <span className="px-3 py-1 bg-error/10 text-error text-[10px] font-bold rounded-full uppercase tracking-wider">Over Budget</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface mb-1">Entertainment</h3>
        <p className="text-sm text-slate-500 mb-6">Leisure, cinema, & subscriptions</p>
        <div className="flex justify-between text-sm font-bold mb-2">
          <span className="text-error">$640.00</span>
          <span className="text-slate-400">$500.00</span>
        </div>
        <div className="w-full h-1.5 bg-surface-container-low rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-error rounded-full w-full"></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-error">+$140.00 OVER</span>
          <button className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </div>

      {/* Card: Health */}
      <div className="bg-surface-container-lowest ghost-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-surface-container-low text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">medical_services</span>
          </div>
          <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">On Track</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface mb-1">Health & Fitness</h3>
        <p className="text-sm text-slate-500 mb-6">Gym, insurance, & pharmacy</p>
        <div className="flex justify-between text-sm font-bold mb-2">
          <span className="text-on-surface">$210.00</span>
          <span className="text-slate-400">$800.00</span>
        </div>
        <div className="w-full h-1.5 bg-surface-container-low rounded-full mb-6">
          <div className="h-full bg-primary rounded-full w-[26%]"></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-slate-400">26% CONSUMED</span>
          <button className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </div>

      {/* Empty/Add New State */}
      <div className="bg-surface-container-low border-2 border-dashed border-outline-variant/30 rounded-xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container-high transition-all">
        <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:scale-110 transition-all mb-4">
          <span className="material-symbols-outlined text-3xl">add_circle</span>
        </div>
        <h3 className="text-lg font-bold text-on-surface">Create New Category</h3>
        <p className="text-xs text-slate-500 max-w-[150px] mt-2">Define custom tracking for your special projects</p>
      </div>
    </div>
  );
}
