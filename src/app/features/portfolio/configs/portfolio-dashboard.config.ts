export const reportGenerationDetails = {
  id: null,
  title: `Report Generation`,
  type: null,
  percentage: null,
  isTrending: null,
  content: null,
  annualFees: null,
  topHoldings: null,
  marketSegment: null,
  categories: []
};

export const alphaVaultBucketHoldingsDetails = {
  id: null,
  title: `Alpha Vault Vaults`,
  type: null,
  percentage: null,
  isTrending: null,
  content: null,
  annualFees: null,
  topHoldings: null,
  marketSegment: null,
  categories: [],
  portfolios: [
    {
      id: 1002,
      title: `Metaverse Bucket`,
      percentage: 25,
      isTrending: true,
      amount: 400000
    },
    {
      id: 1001,
      title: `Defi Bucket`,
      percentage: 2,
      isTrending: true,
      amount: 200000
    },
    {
      id: 5001,
      title: `Custom Portfolio`,
      percentage: 2,
      isTrending: true,
      amount: 200000
    }
  ]
};

export const bucketHoldingsDetails = {
  id: null,
  title: `Custom Vaults`,
  type: null,
  percentage: null,
  isTrending: null,
  content: null,
  annualFees: null,
  topHoldings: null,
  marketSegment: null,
  categories: [],
  portfolios: [
    {
      id: 1002,
      title: `Metaverse Bucket`,
      percentage: 25,
      isTrending: true,
      amount: 400000
    },
    {
      id: 1001,
      title: `Defi Bucket`,
      percentage: 2,
      isTrending: true,
      amount: 200000
    },
    {
      id: 5001,
      title: `Custom Portfolio`,
      percentage: 2,
      isTrending: true,
      amount: 200000
    }
  ]
};

export const avxHoldingsDetails = {
  id: null,
  title: `AVX Holding`,
  type: null,
  percentage: 35,
  isTrending: true,
  content: null,
  annualFees: null,
  topHoldings: null,
  marketSegment: null,
  categories: [],
  amount: 100000,
  portfolios: [
    {
      id: 7001,
      title: `AVX Token`,
      percentage: null,
      isTrending: null,
      amount: 40000
    },
    {
      id: 7002,
      title: `USD Value`,
      percentage: null,
      isTrending: null,
      amount: `$40000`
    }
  ]
};

export const portfolioPerformanceDetails = {
  id: null,
  title: `Vault Performance`,
  type: null,
  percentage: 92.6,
  isTrending: true,
  content: null,
  annualFees: null,
  topHoldings: null,
  marketSegment: null,
  amount: 2000,
  categories: [],
  portfolios: []
};

export const portfolioAllocationDetails = {
  id: null,
  title: `Vault Allocation`,
  type: null,
  percentage: null,
  isTrending: null,
  content: null,
  annualFees: null,
  topHoldings: null,
  marketSegment: null,
  categories: [],
  allocations: [
    {
      title: `AVX Token Holding`,
      percentage: 75,
      color: `#ff0084`
    },
    {
      title: `Metaverse Bucket Holding`,
      percentage: 10,
      color: `#01e2dc`
    },
    {
      title: `Defi Bucket Holding`,
      percentage: 15,
      color: `#843ea1`
    }
  ]
};
