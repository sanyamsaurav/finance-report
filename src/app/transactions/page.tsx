import TransactionMetrics from "@/components/transactions/TransactionMetrics";
import TransactionFilters from "@/components/transactions/TransactionFilters";
import TransactionTable from "@/components/transactions/TransactionTable";
import Pagination from "@/components/transactions/Pagination";

export default function TransactionsPage() {
  return (
    <main className="ml-64 pt-24 px-8 pb-12 min-h-screen">
      <TransactionMetrics />
      <TransactionFilters />
      <TransactionTable />
      <Pagination />
    </main>
  );
}
