import type { PortfolioItem, Asset, ChartDataPoint } from './types'
import { Bitcoin, Waves, Xrp } from '@/components/icons'
import React from 'react';

export const assets: Asset[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 68123.45,
    change24h: 2.5,
    marketCap: 1.34 * 10 ** 12,
    logo: Bitcoin,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3540.56,
    change24h: -1.2,
    marketCap: 425.6 * 10 ** 9,
    logo: Waves,
  },
  {
    id: 'xrp',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.52,
    change24h: 0.8,
    marketCap: 28.7 * 10 ** 9,
    logo: Xrp,
  },
  {
    id: 'tether',
    name: 'Tether',
    symbol: 'USDT',
    price: 1.0,
    change24h: 0.01,
    marketCap: 112.5 * 10 ** 9,
    logo: () => React.createElement('div', { className: 'font-bold' }, 'T'),
  },
  {
    id: 'usd-coin',
    name: 'USD Coin',
    symbol: 'USDC',
    price: 1.0,
    change24h: -0.02,
    marketCap: 32.8 * 10 ** 9,
    logo: () => React.createElement('div', { className: 'font-bold' }, 'U'),
  },
  {
    id: 'dai',
    name: 'Dai',
    symbol: 'DAI',
    price: 1.0,
    change24h: 0.0,
    marketCap: 5.3 * 10 ** 9,
    logo: () => React.createElement('div', { className: 'font-bold' }, 'D'),
  },
]

export const portfolio: PortfolioItem[] = [
  {
    asset: assets.find((a) => a.symbol === 'BTC')!,
    quantity: 1.5,
  },
  {
    asset: assets.find((a) => a.symbol === 'ETH')!,
    quantity: 10,
  },
  {
    asset: assets.find((a) => a.symbol === 'XRP')!,
    quantity: 50000,
  },
]

export const stablecoins: Asset[] = assets.filter((a) =>
  ['USDT', 'USDC', 'DAI'].includes(a.symbol)
)

export const historicalData: { [symbol: string]: ChartDataPoint[] } = {
  BTC: [
    { date: '2023-01-01', price: 16547 },
    { date: '2023-02-01', price: 23145 },
    { date: '2023-03-01', price: 28476 },
    { date: '2023-04-01', price: 29232 },
    { date: '2023-05-01', price: 27218 },
    { date: '2023-06-01', price: 30476 },
    { date: '2023-07-01', price: 29231 },
    { date: '2023-08-01', price: 25934 },
    { date: '2023-09-01', price: 27958 },
    { date: '2023-10-01', price: 34502 },
    { date: '2023-11-01', price: 37718 },
    { date: '2023-12-01', price: 42265 },
    { date: '2024-01-01', price: 43900 },
    { date: '2024-02-01', price: 61199 },
    { date: '2024-03-01', price: 71229 },
    { date: '2024-04-01', price: 60599 },
    { date: '2024-05-01', price: 68123 },
  ],
}
