const LinkedList = require("./lib/linkedList");

const januaryTotals = new LinkedList();

januaryTotals.insert({
  city: "New York",
  rainfall: 8.4,
});

januaryTotals.insert({
  city: "Los Angeles",
  rainfall: 1.0,
});

januaryTotals.insert({
  city: "Chicago",
  rainfall: 3,
});

januaryTotals.insert({
  city: "Houston",
  rainfall: 5.2,
});

januaryTotals.insert({
  city: "Phoenix",
  rainfall: 0.1,
});

januaryTotals.insert({
  city: "Philadelphia",
  rainfall: 4.5,
});

januaryTotals.insert({
  city: "San Antonio",
  rainfall: 2.5,
});

januaryTotals.insert({
  city: "San Diego",
  rainfall: 1.9,
});

januaryTotals.insert({
  city: "Dallas",
  rainfall: 1,
});

januaryTotals.insert({
  city: "San Jose",
  rainfall: 2,
});

januaryTotals.insert({
  city: "Austin",
  rainfall: 1,
});

januaryTotals.insert({
  city: "Kansas City",
  rainfall: 1.5,
});

januaryTotals.insert({
  city: "Memphis",
  rainfall: 3.3,
});

januaryTotals.insert({
  city: "Charlotte",
  rainfall: 6.4,
});

januaryTotals.insert({
  city: "Indianapolis",
  rainfall: 4,
});

januaryTotals.insert({
  city: "Baltimore",
  rainfall: 3.8,
});

januaryTotals.insert({
  city: "Nashville",
  rainfall: 4.2,
});

januaryTotals.insert({
  city: "Denver",
  rainfall: 1.7,
});

januaryTotals.insert({
  city: "San Francisco",
  rainfall: 2.0,
});

const februaryTotals = new LinkedList();

februaryTotals.insert({
  city: "New York",
  rainfall: 3.8,
});

februaryTotals.insert({
  city: "Portland",
  rainfall: 8.4,
});

februaryTotals.insert({
  city: "Chicago",
  rainfall: 2.1,
});

februaryTotals.insert({
  city: "Seattle",
  rainfall: 3.8,
});

februaryTotals.insert({
  city: "Phoenix",
  rainfall: 0.8,
});

februaryTotals.insert({
  city: "Omaha",
  rainfall: 2.4,
});

februaryTotals.insert({
  city: "San Antonio",
  rainfall: 1.1,
});

februaryTotals.insert({
  city: "San Diego",
  rainfall: 2.0,
});

februaryTotals.insert({
  city: "Atlanta",
  rainfall: 3.9,
});

februaryTotals.insert({
  city: "Dallas",
  rainfall: 3.3,
});

februaryTotals.insert({
  city: "San Jose",
  rainfall: 2.8,
});

februaryTotals.insert({
  city: "Austin",
  rainfall: 2.0,
});

februaryTotals.insert({
  city: "Kansas City",
  rainfall: 4.4,
});

februaryTotals.insert({
  city: "Charlotte",
  rainfall: 3.9,
});

februaryTotals.insert({
  city: "Minneapolis",
  rainfall: 5.7,
});

februaryTotals.insert({
  city: "Indianapolis",
  rainfall: 1.4,
});

februaryTotals.insert({
  city: "Baltimore",
  rainfall: 0.7,
});

februaryTotals.insert({
  city: "Nashville",
  rainfall: 2.3,
});

februaryTotals.insert({
  city: "Denver",
  rainfall: 0.8,
});

februaryTotals.insert({
  city: "San Francisco",
  rainfall: 1.7,
});

module.exports = { januaryTotals, februaryTotals };
