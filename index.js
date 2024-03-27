/**
 * Represents a class for finding the maximum subarray using Depth-First Search (DFS) algorithm.
 */
class MaximumSubarrayDFS {
  constructor(data) {
    this.data = data
  }
  /**
   * Finds the maximum subarray in the given data.
   * @returns {Object} The result object containing the maximum subarray information.
   */
  findMaxSubarray() {
    let maxSum = -Infinity
    let maxStartIndex = 0
    let maxEndIndex = 0
    let currentSum = 0
    let startIndex = 0
    for (let i = 0; i < this.data.length; i++) {
      const closingPrice = parseFloat(this.data[i][4])
      currentSum += closingPrice
      if (currentSum > maxSum) {
        maxSum = currentSum
        maxStartIndex = startIndex
        maxEndIndex = i
      }
      if (currentSum < 0) {
        currentSum = 0
        startIndex = i + 1
      }
    }
    const result = {
      price: parseFloat(this.data[maxEndIndex][4]),
      timestamp: parseInt(this.data[maxEndIndex][0]),
      direction: maxSum > 0 ? 'bullish' : 'bearish'
    }
    return result
  }
}

/**
 * Exports the MaximumSubarrayDFS class.
 */
export default MaximumSubarrayDFS