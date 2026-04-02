export default function BudgetInsights() {
  return (
    <section className="mt-12 bg-surface-container-lowest ghost-border rounded-xl p-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
        <div>
          <h4 className="text-lg font-bold text-on-surface">Smart Insights</h4>
          <p className="text-sm text-slate-500">Based on your spending behavior this month</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex gap-4">
          <div className="w-1.5 h-full bg-secondary rounded-full"></div>
          <div>
            <p className="font-bold text-on-surface mb-1">Potential Overrun in Entertainment</p>
            <p className="text-sm text-slate-600 leading-relaxed">Your streaming subscriptions increased by 15% this month. Consider canceling unused trials to stay within limits.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="w-1.5 h-full bg-primary rounded-full"></div>
          <div>
            <p className="font-bold text-on-surface mb-1">Savings Opportunity in Food</p>
            <p className="text-sm text-slate-600 leading-relaxed">You&apos;ve spent $200 less than projected on groceries. Would you like to move this surplus to your Savings Goal?</p>
            <button className="mt-3 text-xs font-bold text-primary flex items-center gap-1 hover:underline">
              REALLOCATE FUNDS <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
