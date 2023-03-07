const LinkedList = require("../src/lib/linkedList");
const combineMonthlyRainfallTotals = require("../src/combinedLists");
const { januaryTotals, februaryTotals } = require("../src/data");

describe.only("Rainfall Totals", () => {
  let combinedTotals = [];
  beforeAll(() => {
    combinedTotals = combineMonthlyRainfallTotals(
      januaryTotals,
      februaryTotals
    );
  });

  it("should not have duplicates", () => {
    const arrayOfCities = combinedTotals.map((item) => item.city);
    const hasDuplicates = new Set(arrayOfCities).size !== arrayOfCities.length;
    expect(hasDuplicates).toEqual(false);
  });

  it("should be the correct length", () => {
    expect(combinedTotals.length).toEqual(24);
  });

  it("should combine the arrays correctly", () => {
    const austinRainfall = combinedTotals.filter(
      (item) => item.city === "Austin"
    );
    const atlantaRainfall = combinedTotals.filter(
      (item) => item.city === "Atlanta"
    );
    expect(austinRainfall[0].rainfall).toEqual(3);
    expect(atlantaRainfall[0].rainfall).toEqual(3.9);
  });
});
