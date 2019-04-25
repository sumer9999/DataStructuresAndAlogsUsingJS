objects = [
  {
    id: 38,
    sourceAccount: "my_account",
    targetAccount: "restaurant",
    amount: -970,
    category: "eating_out",
    time: "2018-05-17T19:52:46.000Z"
  },
  {
    id: 6,
    sourceAccount: "my_account",
    targetAccount: "internet_shop",
    amount: -250,
    category: "other",
    time: "2018-03-01T22:16:40.000Z"
  },
  {
    id: 8,
    sourceAccount: "my_account",
    targetAccount: "restaurant",
    amount: -670,
    category: "eating_out",
    time: "2018-03-02T18:54:45.000Z"
  }
];

result = objects.map(obj =>
  Object.keys(obj)
    .sort()
    .map(key => obj[key])
);

console.log(result);
