'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: 'dashboard' },
    { name: 'Transactions', path: '/transactions', icon: 'receipt_long' },
    { name: 'Budgets', path: '/budgets', icon: 'account_balance_wallet' },
    { name: 'Insights', path: '/insights', icon: 'insights' },
  ];

  return (
    <aside className="h-screen w-64 border-r-0 fixed left-0 top-0 bg-[#eff4ff] dark:bg-slate-900 flex flex-col py-8 z-50">
      <div className="px-6 mb-10">
        <h1 className="text-lg font-bold tracking-tighter text-[#0b1c30] dark:text-white">FinanceTrack</h1>
        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold opacity-70">
          Elite Ledger
        </p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 py-3 px-4 transition-all duration-200 ${
                isActive
                  ? 'text-[#006c49] font-bold border-l-[3px] border-[#006c49] bg-white/50 dark:bg-white/5'
                  : 'text-slate-500 hover:text-[#006c49] hover:bg-[#f8f9ff] dark:hover:bg-slate-800'
              }`}
            >
              <span 
                className="material-symbols-outlined" 
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className="font-medium text-sm antialiased tracking-tight">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-4 space-y-1">
        <div className="px-4 py-2 mb-4">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold bg-primary/10 text-primary uppercase">
            Role: Admin
          </span>
        </div>
        <a className="flex items-center gap-3 py-3 px-4 text-slate-500 hover:text-[#006c49] transition-colors" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-sm">Settings</span>
        </a>
        <a className="flex items-center gap-3 py-3 px-4 text-slate-500 hover:text-[#006c49] transition-colors" href="#">
          <span className="material-symbols-outlined">contact_support</span>
          <span className="text-sm">Support</span>
        </a>
      </div>
    </aside>
  );
}
