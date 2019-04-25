//Loop through numbers
//Check every number and print accordingly

function evenOdd(number) {
  if (!Number.isInteger(number)) console.log("Invalid Input");

  for (let i = 0; i <= number; i++) {
    let result = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(`${i} ${result}`);
  }
}

evenOdd(5);
