console.log("Show Ticket User 1");
console.log("Show Ticket User 2");

(async () => {
  const wifeBringingTickets = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User 3 Tickets Avialable Now");
    }, 2000);
  });
  console.log(wifeBringingTickets);

  const wifeNeedsPopcorn = new Promise(resolve => {
    setTimeout(() => {
      resolve("Brought Popcorn for Hungry Wife");
    }, 2000);
  });

  const wifeNeedsColdDrink = new Promise(resolve => {
    setTimeout(() => {
      resolve("Wife Thirsty and Needs ColdDrink");
    }, 4000);
  });

  result = await Promise.race([wifeNeedsPopcorn, wifeNeedsColdDrink]);
  console.log(result);
  //console.log("pop:" + popcorn + "  <>   " + "cold:" + colddrink);
})();

console.log("Show Ticket User 3");
console.log("Show Ticket User 4");
