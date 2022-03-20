import { tradingAlgorithmTypes } from '../models';

export const tradingAlgorithmsConfig = {
  heading: `Select trading algorithm`,
  algorithms: [
    {
      label: tradingAlgorithmTypes.slow,
      isDefault: false,
      value: tradingAlgorithmTypes.slow,
      color: '#ff0084',
      content: `Places limit orders (best bid/best ask) and waits for them to get filled.`
    },
    {
      label: tradingAlgorithmTypes.medium,
      isDefault: true,
      value: tradingAlgorithmTypes.medium,
      color: '#843ea1',
      content: `Time weighted average price(TWAP) algorithm, trades fixed amount of assets over fixed period of time.`
    },
    {
      label: tradingAlgorithmTypes.fast,
      isDefault: false,
      value: tradingAlgorithmTypes.fast,
      color: '#01e2dc',
      content: `Places multiple limit orders at best market price over shorter period of time.`
    }
  ]
};
