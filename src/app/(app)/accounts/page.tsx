import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Wallet } from "lucide-react"

export default function AccountsPage() {
  return (
    <div className="container mx-auto max-w-2xl py-8">
       <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Smart Accounts</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Manage your connected smart accounts for automated trading.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Connect Account</CardTitle>
          <CardDescription>
            Link a new smart account to enable automated hedging and trading.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="account-address">Account Address</Label>
                <Input id="account-address" placeholder="0x..." defaultValue="0x1234567890ABCDEF1234567890ABCDEF12345678" />
            </div>
            <div className="space-y-2">
                <Label>Status</Label>
                <div className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-[hsl(var(--chart-2))]"></div>
                    <span className="text-muted-foreground">Connected</span>
                </div>
            </div>
        </CardContent>
        <CardFooter>
          <Button>
            <Wallet className="mr-2 h-4 w-4" />
            Connect New Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
