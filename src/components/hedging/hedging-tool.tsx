'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { Bot, Lightbulb, Loader, Shield, Sparkles, TriangleAlert } from 'lucide-react'

import { getHedgeSuggestion, type HedgeFormState } from '@/app/(app)/hedging/actions'
import { portfolio, stablecoins } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get Hedging Strategy
        </>
      )}
    </Button>
  )
}

function ResultCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 space-y-0">
        <div className="p-2 bg-primary/10 rounded-lg">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  )
}

export default function HedgingTool() {
  const initialState: HedgeFormState = null;
  const [state, formAction] = useFormState(getHedgeSuggestion, initialState);

  return (
    <div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold">Current Holdings</h3>
              {portfolio.map((item) => (
                <div key={item.asset.symbol} className="space-y-2">
                  <Label htmlFor={`portfolio.${item.asset.symbol}`}>{item.asset.name} ({item.asset.symbol})</Label>
                  <Input
                    id={`portfolio.${item.asset.symbol}`}
                    name={`portfolio.${item.asset.symbol}`}
                    type="number"
                    step="any"
                    defaultValue={item.quantity}
                    required
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Available Stablecoins for Hedging</h3>
              <div className="space-y-2">
                {stablecoins.map((coin) => (
                  <div key={coin.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`stablecoins.${coin.symbol}`}
                      name="stablecoins"
                      value={coin.symbol}
                      defaultChecked={true}
                    />
                    <Label htmlFor={`stablecoins.${coin.symbol}`}>{coin.name} ({coin.symbol})</Label>
                  </div>
                ))}
              </div>
              {state?.issues && <p className="text-sm text-destructive">{state.issues.join(', ')}</p>}
              <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>
      
      {state?.message === 'success' && state.data && (
        <div className="space-y-6">
          <Alert className="bg-green-50 border-green-200 text-green-900 dark:bg-green-950 dark:border-green-800 dark:text-green-200">
            <Bot className="h-4 w-4 stroke-current" />
            <AlertTitle className="font-semibold">AI Recommendation</AlertTitle>
            <AlertDescription>
              Here is the optimal hedging strategy based on your portfolio and current market analysis.
            </AlertDescription>
          </Alert>
          <div className="grid md:grid-cols-1 gap-6">
            <ResultCard
              icon={<Shield className="h-6 w-6 text-primary" />}
              title="Optimal Strategy"
              content={state.data.strategy}
            />
            <ResultCard
              icon={<Lightbulb className="h-6 w-6 text-primary" />}
              title="Reasoning"
              content={state.data.reasons}
            />
            <ResultCard
              icon={<TriangleAlert className="h-6 w-6 text-primary" />}
              title="Potential Risks"
              content={state.data.risks}
            />
          </div>
        </div>
      )}

      {state?.message && state.message !== 'success' && (
         <Alert variant="destructive">
            <TriangleAlert className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
      )}
    </div>
  )
}
