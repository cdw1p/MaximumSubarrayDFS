# MaximumSubarrayDFS
This project class is designed for predicting potential breakout patterns in historical financial market data. It utilizes the Maximum Subarray algorithm with Depth-First Search (DFS) to identify periods of significant price movement.

## Install
```
npm install ccxt
npm install maximumsubarraydfs
```

## Example
```js
import ccxt from 'ccxt'
import MaximumSubarrayDFS from 'maximumsubarraydfs'

/**
 * Fetch historical data
 */
const exchange = new ccxt.binance()
const symbol = 'BTC/USDT'
const timeframe = '1h'
const limit = 1000
const historicalData = await exchange.fetchOHLCV(symbol, timeframe, undefined, limit)

/**
 * Find maximum subarray
 */
const algoInit = new MaximumSubarrayDFS(historicalData)
const prediction = algoInit.findMaxSubarray()
console.log({ prediction })
```

## Results
```
{
  prediction: {
    price: 68625.96,
    timestamp: 1711562400000,
    direction: 'bullish'
  }
}
```

## License
MIT