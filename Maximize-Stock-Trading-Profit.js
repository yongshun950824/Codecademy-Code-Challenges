function maxProfitDays(stockPrices) {
  let pair = [];

  for (let i = 0; i < stockPrices.length - 1; i++) {
    let cur = stockPrices[i];
    let max = stockPrices[i + 1];

    for (let j = i + 1; j < stockPrices.length; j++) {
      if (stockPrices[j] > max) {
        max = stockPrices[j];
      }
    }

    if (max - cur > 0)
      pair.push({
        buy: cur,
        sell: max,
        profit: max - cur
      });
  }

  pair.sort((a, b) => a.profit < b.profit ? 1 : 0);

  return [
    stockPrices.findIndex(x => x == pair[0].buy),
    stockPrices.findIndex(x => x == pair[0].sell)
  ];
}

// Leave this so we can test your code:
module.exports = maxProfitDays;
