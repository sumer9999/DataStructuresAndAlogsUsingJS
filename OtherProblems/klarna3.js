obj = [
  {
    id: 3,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:34:30.000Z"
  },
  {
    id: 1,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:33:00.000Z"
  },
  {
    id: 6,
    sourceAccount: "A",
    targetAccount: "C",
    amount: 250,
    category: "other",
    time: "2018-03-02T10:33:05.000Z"
  },
  {
    id: 4,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:36:00.000Z"
  },
  {
    id: 2,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:33:50.000Z"
  },
  {
    id: 5,
    sourceAccount: "A",
    targetAccount: "C",
    amount: 250,
    category: "other",
    time: "2018-03-02T10:33:00.000Z"
  }
];

function findDuplicateTransactions(transactions = []) {
  let map = new Map(),
    resultArray = [];

  transactions.forEach(transaction => {
    let tempKey = {
      sourceAccount: transaction.sourceAccount,
      targetAccount: transaction.targetAccount,
      category: transaction.category,
      amount: transaction.amount
      //time: transaction.time,
    };

    if (map.has(tempKey)) {
      let tempDate = new Date(transaction.time),
        tempMilliSecs = tempDate.getTime(),
        alreadyStoredDateString = map.get(tempKey)[0].time,
        alreadyStoredTempDate = new Date(alreadyStoredDateString),
        alreadyStoredTempMilliSecs = alreadyStoredTempDate.getTime();

      if (Math.abs(alreadyStoredTempMilliSecs - tempMilliSecs) <= 60000) {
        map.get(tempKey).push(transaction);
      }
    } else {
      map.set(tempKey, [transaction]);
    }
  });
  console.log(map);

  //   for (let key in compareObject) {
  //     resultArray.push(compareObject[key]);
  //   }

  //   return resultArray;
}

console.log(findDuplicateTransactions(obj));
