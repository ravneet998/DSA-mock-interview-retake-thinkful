function combineMonthlyRainfallTotals(firstMonthTotals, secondMonthTotals) {
  
  const ll1 = firstMonthTotals.asArray();
  const ll2 = secondMonthTotals.asArray();
  const array = [...ll1, ...ll2];
  
  const obj = {};
  
  array.forEach(({ city, rainfall }) => {
    if (obj[city]) {
      obj[city] += rainfall;
    } else {
      obj[city] = rainfall;
    }  
  });
  console.log(obj)
  let result = Object.entries(obj).map(([city, rainfall]) => {
    return { city, rainfall };
  });
console.log(result)
  return result
};  



module.exports = combineMonthlyRainfallTotals;
