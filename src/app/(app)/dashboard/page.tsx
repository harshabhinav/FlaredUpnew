import PortfolioOverview from '@/components/dashboard/portfolio-overview'
import MainChart from '@/components/dashboard/main-chart'
import PortfolioTable from '@/components/dashboard/portfolio-table'
import LivePrices from '@/components/dashboard/live-prices'
import AlertsPanel from '@/components/dashboard/alerts-panel'

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <PortfolioOverview />
        </div>
        <MainChart />
        <PortfolioTable />
      </div>
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-1">
        <LivePrices />
        <AlertsPanel />
      </div>
    </div>
  )
}
