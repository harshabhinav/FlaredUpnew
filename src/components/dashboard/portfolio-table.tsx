import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { portfolio, assets } from '@/lib/data'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'

export default function PortfolioTable() {
  const totalValue = portfolio.reduce(
    (acc, item) => acc + item.quantity * item.asset.price,
    0
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Assets</CardTitle>
        <CardDescription>
          A detailed view of your current holdings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Value</TableHead>
              <TableHead className="text-right">24h %</TableHead>
              <TableHead className="text-right">Allocation</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {portfolio.map((item) => {
              const value = item.quantity * item.asset.price
              const allocation = (value / totalValue) * 100
              const isPositive = item.asset.change24h >= 0
              return (
                <TableRow key={item.asset.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                           <item.asset.logo className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </Avatar>
                      <div>
                        <div className="font-medium">{item.asset.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.asset.symbol}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    {item.quantity.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    ${item.asset.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    ${value.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell
                    className={`text-right font-medium ${
                      isPositive ? 'text-[hsl(var(--chart-2))]' : 'text-destructive'
                    }`}
                  >
                    {item.asset.change24h.toFixed(2)}%
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary">{allocation.toFixed(2)}%</Badge>
                  </TableCell>
                   <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
