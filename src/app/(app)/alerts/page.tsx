import { Bell, Info, PlusCircle, ShieldAlert } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const alerts = [
  {
    id: 1,
    icon: ShieldAlert,
    title: 'BTC Volatility High',
    description: 'BTC price dropped 5% in the last hour. Consider hedging.',
    time: '5m ago',
    type: 'Hedging'
  },
  {
    id: 2,
    icon: Info,
    title: 'New Stablecoin Pair',
    description: 'XRP/USDC pair is now available for hedging strategies.',
    time: '2h ago',
    type: 'System'
  },
  {
    id: 3,
    icon: Bell,
    title: 'ETH Price Alert',
    description: 'ETH has reached your target price of $3,600.',
    time: '1d ago',
    type: 'Price'
  },
  {
    id: 4,
    icon: ShieldAlert,
    title: 'ETH Risk Increased',
    description: 'ETH volatility has increased by 15%. Review your positions.',
    time: '2d ago',
    type: 'Hedging'
  },
]

export default function AlertsPage() {
  return (
    <div className="container mx-auto py-8">
       <div className="flex items-center justify-between mb-8">
        <div>
            <h1 className="text-4xl font-bold tracking-tight">Alerts</h1>
            <p className="mt-2 text-lg text-muted-foreground">
                Stay updated with market movements and opportunities.
            </p>
        </div>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Alert
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Alert History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Type</TableHead>
                <TableHead>Details</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell>
                    <Badge variant={alert.type === 'Hedging' ? 'destructive' : alert.type === 'Price' ? 'default' : 'secondary'}>{alert.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{alert.title}</div>
                    <div className="text-sm text-muted-foreground">{alert.description}</div>
                  </TableCell>
                  <TableCell className="text-right text-sm text-muted-foreground">{alert.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
