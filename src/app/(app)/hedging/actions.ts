'use server'

import { suggestOptimalHedge } from '@/ai/flows/suggest-optimal-hedge'
import type { SuggestOptimalHedgeOutput } from '@/ai/flows/suggest-optimal-hedge'
import { z } from 'zod'

const HedgeFormSchema = z.object({
  portfolio: z.record(z.coerce.number()),
  stablecoins: z.array(z.string()).min(1, 'Please select at least one stablecoin.'),
});

export type HedgeFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: SuggestOptimalHedgeOutput;
} | null;

export async function getHedgeSuggestion(
  prevState: HedgeFormState,
  formData: FormData
): Promise<HedgeFormState> {
  const portfolioEntries = Array.from(formData.entries()).filter(([key]) => key.startsWith('portfolio.'))
  const portfolio = portfolioEntries.reduce((acc, [key, value]) => {
    const symbol = key.replace('portfolio.', '');
    acc[symbol] = parseFloat(value as string);
    return acc;
  }, {} as Record<string, number>);

  const stablecoins = formData.getAll('stablecoins') as string[];

  const validatedFields = HedgeFormSchema.safeParse({
    portfolio,
    stablecoins
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data.',
      issues: validatedFields.error.flatten().fieldErrors.stablecoins,
    };
  }

  try {
    const result = await suggestOptimalHedge(validatedFields.data)
    return { message: 'success', data: result }
  } catch (error) {
    console.error(error)
    return { message: 'An error occurred while getting the suggestion.' }
  }
}
