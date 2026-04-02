export default function TransactionMetrics() {
  return (
    <section className="mb-10 flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">Transactions</h2>
        <p className="text-tertiary text-sm max-w-lg">
          Manage and audit all financial movements across the organization&apos;s linked accounts.
        </p>
      </div>
      <div className="flex gap-4">
        <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border-l-4 border-primary min-w-[200px]">
          <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Monthly Inflow</p>
          <p className="text-xl font-extrabold text-primary">$142,850.00</p>
        </div>
        <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border-l-4 border-secondary min-w-[200px]">
          <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Monthly Outflow</p>
          <p className="text-xl font-extrabold text-secondary">$64,320.50</p>
        </div>
      </div>
    </section>
  );
}
