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