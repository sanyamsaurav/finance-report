import ExecutiveSummary from "@/components/insights/ExecutiveSummary";
import AssetCorrelationMatrix from "@/components/insights/AssetCorrelationMatrix";
import ActionableRecommendations from "@/components/insights/ActionableRecommendations";
import PeerBenchmarking from "@/components/insights/PeerBenchmarking";

export default function InsightsPage() {
  return (
    <main className="ml-64 pt-24 px-8 pb-12 min-h-screen">
      <section className="mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">Financial Insights</h2>
        <p className="text-tertiary">AI-driven analysis of your portfolio performance & trends.</p>
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-8">
          <ExecutiveSummary />
          <AssetCorrelationMatrix />
        </div>

        <div className="space-y-8">
          <ActionableRecommendations />
          <PeerBenchmarking />
        </div>
      </div>
    </main>
  );
}
