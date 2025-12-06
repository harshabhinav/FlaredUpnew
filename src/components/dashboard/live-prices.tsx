import { assets } from '@/lib/data'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowUp, ArrowDown } from 'lucide-react'

export default function LivePrices() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle>Live Prices (FTSO)</CardTitle>
        <CardDescription>Real-time price data from FTSO.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {assets.slice(0, 5).map((asset) => {
          const isPositive = asset.change24h >= 0
          return (
            <div key={asset.id} className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <asset.logo className="h-6 w-6 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{asset.symbol}</p>
                <p className="text-sm text-muted-foreground">{asset.name}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold font-mono">
                  ${asset.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                </p>
                <div
                  className={cn(
                    'flex items-center justify-end text-xs',
                    isPositive ? 'text-[hsl(var(--chart-2))]' : 'text-destructive'
                  )}
                >
                  {isPositive ? (
                    <ArrowUp className="h-3 w-3" />
                  ) : (
                    <ArrowDown className="h-3 w-3" />
                  )}
                  <span>{Math.abs(asset.change24h).toFixed(2)}%</span>
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
