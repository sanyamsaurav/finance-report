export default function TransactionTable() {
  return (
    <div className="bg-surface-container-low rounded-xl overflow-hidden p-1">
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead>
          <tr className="text-slate-500">
            <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest">Date</th>
            <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest">Description</th>
            <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-right">Amount</th>
            <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest">Category</th>
            <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest">Type</th>
            <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="space-y-4">
          {/* Row 1 */}
          <tr className="bg-white hover:bg-surface-container-high transition-colors group">
            <td className="px-6 py-4 text-sm font-medium text-slate-600 rounded-l-xl">Oct 24, 2023</td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-lg">cloud_queue</span>
                </div>
                <span className="text-sm font-bold text-on-surface">Amazon Web Services</span>
              </div>
            </td>
            <td className="px-6 py-4 text-right">
              <span className="text-sm font-extrabold text-secondary">-$12,450.00</span>
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 uppercase">Cloud Infra</span>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-1.5 text-secondary">
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
                <span className="text-xs font-bold uppercase tracking-wider">Expense</span>
              </div>
            </td>
            <td className="px-6 py-4 rounded-r-xl">
              <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">edit</span>
                </button>
                <button className="p-1.5 text-slate-400 hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-lg">delete</span>
                </button>
              </div>
            </td>
          </tr>

          {/* Row 2 */}
          <tr className="bg-white hover:bg-surface-container-high transition-colors group">
            <td className="px-6 py-4 text-sm font-medium text-slate-600 rounded-l-xl">Oct 23, 2023</td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-lg">payments</span>
                </div>
                <span className="text-sm font-bold text-on-surface">Stripe Payout: STR-8821</span>
              </div>
            </td>
            <td className="px-6 py-4 text-right">
              <span className="text-sm font-extrabold text-primary">+$45,200.00</span>
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary/10 text-primary uppercase">Revenue</span>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-1.5 text-primary">
                <span className="material-symbols-outlined text-sm">arrow_upward</span>
                <span className="text-xs font-bold uppercase tracking-wider">Income</span>
              </div>
            </td>
            <td className="px-6 py-4 rounded-r-xl">
              <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">edit</span>
                </button>
                <button className="p-1.5 text-slate-400 hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-lg">delete</span>
                </button>
              </div>
            </td>
          </tr>

          {/* Row 3 */}
          <tr className="bg-white hover:bg-surface-container-high transition-colors group">
            <td className="px-6 py-4 text-sm font-medium text-slate-600 rounded-l-xl">Oct 22, 2023</td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                  <span className="material-symbols-outlined text-lg">apartment</span>
                </div>
                <span className="text-sm font-bold text-on-surface">WeWork Monthly Rent</span>
              </div>
            </td>
            <td className="px-6 py-4 text-right">
              <span className="text-sm font-extrabold text-secondary">-$2,800.00</span>
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 uppercase">Office</span>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-1.5 text-secondary">
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
                <span className="text-xs font-bold uppercase tracking-wider">Expense</span>
              </div>
            </td>
            <td className="px-6 py-4 rounded-r-xl">
              <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">edit</span>
                </button>
                <button className="p-1.5 text-slate-400 hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-lg">delete</span>
                </button>
              </div>
            </td>
          </tr>

          {/* Row 4 */}
          <tr className="bg-white hover:bg-surface-container-high transition-colors group">
            <td className="px-6 py-4 text-sm font-medium text-slate-600 rounded-l-xl">Oct 20, 2023</td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                  <span className="material-symbols-outlined text-lg">badge</span>
                </div>
                <span className="text-sm font-bold text-on-surface">Deel Payroll Services</span>
              </div>
            </td>
            <td className="px-6 py-4 text-right">
              <span className="text-sm font-extrabold text-secondary">-$35,600.00</span>
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 uppercase">Payroll</span>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-1.5 text-secondary">
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
                <span className="text-xs font-bold uppercase tracking-wider">Expense</span>
              </div>
            </td>
            <td className="px-6 py-4 rounded-r-xl">
              <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">edit</span>
                </button>
                <button className="p-1.5 text-slate-400 hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-lg">delete</span>
                </button>
              </div>
            </td>
          </tr>

          {/* Row 5 */}
          <tr className="bg-white hover:bg-surface-container-high transition-colors group">
            <td className="px-6 py-4 text-sm font-medium text-slate-600 rounded-l-xl">Oct 19, 2023</td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-lg">campaign</span>
                </div>
                <span className="text-sm font-bold text-on-surface">Google Ads Credit Refund</span>
              </div>
            </td>
            <td className="px-6 py-4 text-right">
              <span className="text-sm font-extrabold text-primary">+$1,120.00</span>
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary/10 text-primary uppercase">Marketing</span>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-1.5 text-primary">
                <span className="material-symbols-outlined text-sm">arrow_upward</span>
                <span className="text-xs font-bold uppercase tracking-wider">Income</span>
              </div>
            </td>
            <td className="px-6 py-4 rounded-r-xl">
              <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">edit</span>
                </button>
                <button className="p-1.5 text-slate-400 hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-lg">delete</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
