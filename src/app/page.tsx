import HeroStatsGrid from "@/components/dashboard/HeroStatsGrid";
import PortfolioGrowthChart from "@/components/dashboard/PortfolioGrowthChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import SpendingAnalysis from "@/components/dashboard/SpendingAnalysis";
import QuickInsights from "@/components/dashboard/QuickInsights";

export default function DashboardPage() {
  return (
    <main className="ml-64 pt-24 px-8 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <HeroStatsGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <PortfolioGrowthChart />
          <RecentActivity />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SpendingAnalysis />
          <QuickInsights />
        </div>
      </div>
    </main>
  );
}
