import {
  strategyTypes,
  rebalancingTypes,
  holdTermTypes,
  buyTypes
} from '../models';
import { environment } from '../../../../environments/environment';

export const portfolios = [
  {
    id: 1001,
    title: `Defi Bucket`,
    type: `AGGRESSIVE`,
    percentage: 92.61,
    isTrending: true,
    content: `Exposure to top crypto projects in DeFi disruptng the financial industry`,
    annualFees: 2.5,
    topHoldings: `ENJ, MANA, AXS`,
    marketSegment: `NFT, Defi Bucket`,
    categories: [3001, 3003]
  },
  {
    id: 1002,
    title: `Metaverse Bucket`,
    type: `AGGRESSIVE`,
    percentage: 2.61,
    isTrending: false,
    content: `Exposure to the metaverse, gaming and virtual world assets`,
    annualFees: 4.1,
    topHoldings: `ENJ, AXS, MANA`,
    marketSegment: `Metaverse Bucket`,
    categories: [3003, 3004]
  },
  {
    id: 1003,
    title: `Infra Bucket`,
    type: `AGGRESSIVE`,
    percentage: 92.61,
    isTrending: true,
    content: `Promising crypto projects building on layer 2, web 3.0 and challenging the blockchain industry`,
    annualFees: 0.75,
    topHoldings: `ENJ, MANA`,
    marketSegment: `NFT, Defi Bucket II`,
    categories: [3001, 3002, 3003]
  },
  {
    id: 1004,
    title: `Bluechip`,
    type: `AGGRESSIVE`,
    percentage: 2.61,
    isTrending: false,
    content: `Top crypto projects with a proven track record of success and stable growth for inflation hedge`,
    annualFees: 3.25,
    topHoldings: `ENJ, MANA, AXS`,
    marketSegment: `Metaverse Bucket III`,
    categories: [3004]
  },
  {
    id: 1005,
    title: `Alpha Exclusive`,
    type: `AGGRESSIVE`,
    percentage: 92.61,
    isTrending: true,
    content: `Curated projects with very high potential of return and access at very early stages`,
    annualFees: 2.5,
    topHoldings: `ENJ, MANA, AXS`,
    marketSegment: `NFT, Defi Bucket`,
    categories: [3001, 3003]
  }
];

export const coinHoldingsConfig = [
  {
    id: 1001,
    coinHoldings: [
      {
        id: 2001,
        icon: 'assets/icons/2001.svg',
        title: `Enjin Coin(ENJ)`,
        percentage: 40,
        abbr: `ENJ`
      },
      {
        id: 2002,
        icon: 'assets/icons/2002.svg',
        title: `Decentraland(MANA)`,
        percentage: 30,
        abbr: `MANA`
      },
      {
        id: 2003,
        icon: 'assets/icons/2003.svg',
        title: `Axie Infinity(AXS)`,
        percentage: 30,
        abbr: `AXS`
      }
    ]
  },
  {
    id: 1002,
    coinHoldings: [
      {
        id: 2001,
        icon: 'assets/icons/2001.svg',
        title: `Enjin Coin(ENJ)`,
        percentage: 10,
        abbr: `ENJ`
      },
      {
        id: 2003,
        icon: 'assets/icons/2003.svg',
        title: `Axie Infinity(AXS)`,
        percentage: 20,
        abbr: `AXS`
      },
      {
        id: 2002,
        icon: 'assets/icons/2002.svg',
        title: `Decentraland(MANA)`,
        percentage: 70,
        abbr: `MANA`
      }
    ]
  },
  {
    id: 1003,
    coinHoldings: [
      {
        id: 2001,
        icon: 'assets/icons/2001.svg',
        title: `Enjin Coin(ENJ)`,
        percentage: 50,
        abbr: `ENJ`
      },
      {
        id: 2002,
        icon: 'assets/icons/2002.svg',
        title: `Decentraland(MANA)`,
        percentage: 50,
        abbr: `MANA`
      }
    ]
  },
  {
    id: 1004,
    coinHoldings: [
      {
        id: 2001,
        icon: 'assets/icons/2001.svg',
        title: `Enjin Coin(ENJ)`,
        percentage: 33.33,
        abbr: `ENJ`
      },
      {
        id: 2002,
        icon: 'assets/icons/2002.svg',
        title: `Decentraland(MANA)`,
        percentage: 33.33,
        abbr: `MANA`
      },
      {
        id: 2003,
        icon: 'assets/icons/2003.svg',
        title: `Axie Infinity(AXS)`,
        percentage: 33.34,
        abbr: `AXS`
      }
    ]
  },
  {
    id: 1005,
    coinHoldings: [
      {
        id: 2001,
        icon: 'assets/icons/2001.svg',
        title: `Enjin Coin(ENJ)`,
        percentage: 80,
        abbr: `ENJ`
      },
      {
        id: 2002,
        icon: 'assets/icons/2002.svg',
        title: `Decentraland(MANA)`,
        percentage: 15,
        abbr: `MANA`
      },
      {
        id: 2003,
        icon: 'assets/icons/2003.svg',
        title: `Axie Infinity(AXS)`,
        percentage: 5,
        abbr: `AXS`
      }
    ]
  }
];

export const customPortfolioAdditionalDetailsConfig = {
  strategyTypes,
  rebalancingTypes,
  holdTermTypes,
  buyTypes
};

export const transformPortfolioDetails = (data: any) => {
  const portfolio = {
    ...data,
    type: data.strategyType,
    isTrending: data.totalCreatedPrice < data.totalCurrentPrice,
    coinHoldings: data.protfolioCoin.map((holding: any) => ({
      id: holding.coinId,
      thumbnail: getPortfolioThumbnail(holding?.coin),
      name: holding.coin.name,
      percentage: holding.percentage,
      abbr: holding.coin.symbol
    }))
  };

  return portfolio;
};

export const getPortfolioThumbnail = (coin: any): string => {
  let thumbnail = coin?.thumbnail;
  if (coin?.name) {
    thumbnail = `${environment.baseUrl}crypto-coin-image/${coin?.name
      .split(' ')
      .join('-')
      .toLowerCase()}`;
  }

  return thumbnail;
};
