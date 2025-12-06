import { Bell, Info, ShieldAlert } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const alerts = [
  {
    id: 1,
    icon: ShieldAlert,
    title: 'BTC Volatility High',
    description: 'BTC price dropped 5% in the last hour. Consider hedging.',
    time: '5m ago',
  },
  {
    id: 2,
    icon: Info,
    title: 'New Stablecoin Pair',
    description: 'XRP/USDC pair is now available for hedging strategies.',
    time: '2h ago',
  },
  {
    id: 3,
    icon: Bell,
    title: 'ETH Price Alert',
    description: 'ETH has reached your target price of $3,600.',
    time: '1d ago',
  },
]

export default function AlertsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
        <CardDescription>Notifications on market movements.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              <alert.icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="font-medium">{alert.title}</p>
              <p className="text-sm text-muted-foreground">
                {alert.description}
              </p>
            </div>
            <div className="text-xs text-muted-foreground">{alert.time}</div>
          </div>
        ))}
         <Button variant="outline" className="w-full">View All Alerts</Button>
      </CardContent>
    </Card>
  )
}
