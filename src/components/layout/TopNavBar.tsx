export default function TopNavBar() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-[#f8f9ff]/80 dark:bg-slate-950/80 backdrop-blur-xl z-40 shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center px-8 w-full h-full">
        
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              search
            </span>
            <input 
              type="text"
              className="w-full bg-white/40 dark:bg-slate-800 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#10b981]/20 placeholder:text-slate-400 transition-all font-medium" 
              placeholder="Search transactions, accounts, or tags..." 
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 border-r border-outline-variant/20 pr-6">
            <button className="p-2 text-slate-500 hover:text-[#006c49] hover:bg-white/40 rounded-lg relative transition-all">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-white"></span>
            </button>
            <button className="p-2 text-slate-500 hover:text-[#006c49] hover:bg-white/40 rounded-lg transition-all">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
              Export
            </button>
            <button className="emerald-gradient text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:scale-[0.98] transition-transform active:opacity-80 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">add</span>
              Add Transaction
            </button>
            {/* Using a regular img here since next/image needs absolute domain authorization implicitly */}
            <img 
              alt="User avatar" 
              className="w-9 h-9 rounded-full bg-surface-container-high border-2 border-white shadow-sm ml-2 object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALNjFwyz-1sRlYOQOjI8BlIERXLmnQnHD2lTuMHIGje-85u-TZz8oQfU31q7fhADdju15skJySChcTYem9UtVvolhY9t2DHMyghw6gJIPl9b9vtl3pNm1DG1NbHNLZRW4cVfZxfq84pgu21DN6fOJAK2wv7Wnu5R3i1sJXW9YWU4r8wsAlvaFipHE2-TBEgHPl4qCGIp98nnlgNbxruIIeQ18kgsQvOpirB8WrLL7E6oKm7sgcC_fPfy0_ul6WYfhdm2tocv1wUw"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
