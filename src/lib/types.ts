export type Asset = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  logo: React.ComponentType<{ className?: string }>;
};

export type PortfolioItem = {
  asset: Asset;
  quantity: number;
};

export type ChartDataPoint = {
  date: string;
  price: number;
};
