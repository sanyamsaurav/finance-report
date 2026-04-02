export default function QuickInsights() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-primary p-6 rounded-xl text-white flex flex-col justify-between">
        <span className="material-symbols-outlined text-3xl opacity-50">auto_awesome</span>
        <div>
          <p className="text-[10px] font-bold opacity-70 uppercase mb-1">Tax Prediction</p>
          <h4 className="text-lg font-bold leading-tight">Projected savings: $4,200</h4>
        </div>
      </div>
      
      <div className="bg-surface-container-lowest p-6 rounded-xl ghost-border flex flex-col justify-between">
        <div className="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-secondary text-lg">warning</span>
        </div>
        <div>
          <p className="text-[10px] font-bold text-tertiary uppercase mb-1">Over-Budget</p>
          <h4 className="text-lg font-bold leading-tight">Dining exceeds limit by 12%</h4>
        </div>
      </div>
      
      <div className="col-span-2 bg-surface-container-low p-6 rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              alt="Advisor" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuALNjFwyz-1sRlYOQOjI8BlIERXLmnQnHD2lTuMHIGje-85u-TZz8oQfU31q7fhADdju15skJySChcTYem9UtVvolhY9t2DHMyghw6gJIPl9b9vtl3pNm1DG1NbHNLZRW4cVfZxfq84pgu21DN6fOJAK2wv7Wnu5R3i1sJXW9YWU4r8wsAlvaFipHE2-TBEgHPl4qCGIp98nnlgNbxruIIeQ18kgsQvOpirB8WrLL7E6oKm7sgcC_fPfy0_ul6WYfhdm2tocv1wUw"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold">Talk to Marcus</h4>
            <p className="text-xs text-tertiary">Your dedicated portfolio manager</p>
          </div>
        </div>
        <button className="bg-white text-on-surface px-4 py-2 rounded-lg text-[10px] font-bold border border-outline-variant/30 hover:shadow-md transition-all">
          Schedule Call
        </button>
      </div>
    </div>
  );
}
