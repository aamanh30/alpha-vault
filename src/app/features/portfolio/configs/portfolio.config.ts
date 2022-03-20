import {
  strategyTypes,
  rebalancingTypes,
  holdTermTypes,
  buyTypes
} from '../models';
import { environment } from '../../../../environments/environment';

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
      id: holding.id,
      thumbnail: getPortfolioThumbnail(holding?.coin),
      name: holding.coin.name,
      percentage: holding.percentage,
      abbr: holding.coin.symbol,
      coinId: holding?.coinId,
      createdPrice: holding?.createdPrice,
      currentPrice: holding?.currentPrice
    }))
  };

  return portfolio;
};

export const getPortfolioThumbnail = (coin: any): string => {
  let thumbnail = coin?.thumbnail;
  if (coin?.id) {
    thumbnail = `${environment.baseIp}images/${coin?.id
      .split(' ')
      .join('-')
      .toLowerCase()}-32.png`;
  }

  return thumbnail;
};
