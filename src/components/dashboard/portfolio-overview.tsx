import { ArrowUp, ArrowDown, Wallet } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { portfolio } from '@/lib/data'

export default function PortfolioOverview() {
  const totalValue = portfolio.reduce(
    (acc, item) => acc + item.quantity * item.asset.price,
    0
  )
  const totalValue24hAgo = portfolio.reduce((acc, item) => {
    const price24hAgo =
      item.asset.price / (1 + item.asset.change24h / 100)
    return acc + item.quantity * price24hAgo
  }, 0)

  const change24h = totalValue - totalValue24hAgo
  const change24hPercent = (change24h / totalValue24hAgo) * 100

  const isPositive = change24h >= 0

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          <Wallet className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${totalValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}
          </div>
          <p
            className={`text-xs ${
              isPositive ? 'text-[hsl(var(--chart-2))]' : 'text-destructive'
            }`}
          >
            {isPositive ? '+' : ''}
            {change24h.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}{' '}
            ({change24hPercent.toFixed(2)}%)
          </p>
        </CardContent>
      </Card>
       <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">24h Change</CardTitle>
          {isPositive ? (
             <ArrowUp className="h-4 w-4 text-[hsl(var(--chart-2))]" />
          ) : (
            <ArrowDown className="h-4 w-4 text-destructive" />
          )}
        </CardHeader>
        <CardContent>
           <div className={`text-2xl font-bold ${
              isPositive ? 'text-[hsl(var(--chart-2))]' : 'text-destructive'
            }`}>
              {isPositive ? '+' : ''}
              {change24hPercent.toFixed(2)}%
            </div>
            <p className="text-xs text-muted-foreground">
              vs. last 24 hours
            </p>
        </CardContent>
      </Card>
      {/* Additional cards can be added here */}
    </>
  )
}
