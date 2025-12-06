import { ShieldCheck } from "lucide-react";
import HedgingTool from "@/components/hedging/hedging-tool";

export default function HedgingPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="p-3 mb-4 bg-primary/10 rounded-full border-8 border-background">
          <ShieldCheck className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">AI Hedging Assistant</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
          Get AI-powered recommendations to protect your portfolio against market volatility using stablecoins.
        </p>
      </div>
      
      <HedgingTool />
    </div>
  );
}
