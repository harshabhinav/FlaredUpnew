'use server';

/**
 * @fileOverview A flow that uses generative AI to suggest optimal hedging strategies using stablecoins.
 *
 * - suggestOptimalHedge - A function that suggests optimal hedging strategies.
 * - SuggestOptimalHedgeInput - The input type for the suggestOptimalHedge function.
 * - SuggestOptimalHedgeOutput - The return type for the suggestOptimalHedge function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestOptimalHedgeInputSchema = z.object({
  portfolio: z
    .record(z.number())
    .describe(
      'A record (object) where the keys are cryptocurrency symbols (e.g., BTC, ETH, XRP) and the values are the amount held.  For example: `{BTC: 1.5, ETH: 3.2, XRP: 1000}`'
    ),
  stablecoins: z
    .array(z.string())
    .describe(
      'An array of stablecoin symbols to consider for hedging strategies (e.g., ["USDT", "USDC", "DAI"]).'
    ),
});
export type SuggestOptimalHedgeInput = z.infer<typeof SuggestOptimalHedgeInputSchema>;

const SuggestOptimalHedgeOutputSchema = z.object({
  strategy: z.string().describe('A description of the suggested hedging strategy.'),
  reasons: z.string().describe('The reasons why this strategy is optimal.'),
  risks: z.string().describe('The risks associated with this hedging strategy.'),
});
export type SuggestOptimalHedgeOutput = z.infer<typeof SuggestOptimalHedgeOutputSchema>;

export async function suggestOptimalHedge(input: SuggestOptimalHedgeInput): Promise<SuggestOptimalHedgeOutput> {
  return suggestOptimalHedgeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestOptimalHedgePrompt',
  input: {schema: SuggestOptimalHedgeInputSchema},
  output: {schema: SuggestOptimalHedgeOutputSchema},
  prompt: `You are an AI assistant specializing in providing optimal hedging strategies for cryptocurrency portfolios.

You are provided with the user's current portfolio holdings and a list of stablecoins available for hedging.

Based on this information, suggest an optimal hedging strategy to mitigate potential losses on the user's assets, using the stablecoins provided.

Portfolio: {{{JSON.stringify portfolio}}}
Stablecoins: {{{JSON.stringify stablecoins}}}

Consider the current market conditions, the volatility of the assets in the portfolio, and the stability of the stablecoins.

Provide a clear and concise hedging strategy, explain the reasons why this strategy is optimal, and outline the risks associated with this strategy.

Output the strategy, reasons, and risks in a structured format.`,
});

const suggestOptimalHedgeFlow = ai.defineFlow(
  {
    name: 'suggestOptimalHedgeFlow',
    inputSchema: SuggestOptimalHedgeInputSchema,
    outputSchema: SuggestOptimalHedgeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
