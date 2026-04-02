import BudgetOverview from "@/components/budgets/BudgetOverview";
import BudgetCards from "@/components/budgets/BudgetCards";
import BudgetInsights from "@/components/budgets/BudgetInsights";

export default function BudgetsPage() {
  return (
    <main className="ml-64 pt-24 px-8 pb-12 min-h-screen">
      <BudgetOverview />
      <BudgetCards />
      <BudgetInsights />
    </main>
  );
}
