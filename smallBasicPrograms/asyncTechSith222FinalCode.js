console.log("Show Ticket User 1");
console.log("Show Ticket User 2");

(async () => {
  const wifeBringingTickets = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User 3 Tickets Avialable Now");
    }, 2000);
  });
  console.log(wifeBringingTickets);

  const wifeNeedsPopcorn = await new Promise(resolve => {
    setTimeout(() => {
      resolve("Brought Popcorn for Hungry Wife");
    }, 2000);
  });
  console.log(wifeNeedsPopcorn);

  const wifeNeedsMoreButter = await new Promise(resolve => {
    setTimeout(() => {
      resolve("Wife Got More butter on PopCorn");
    }, 2000);
  });
  console.log(wifeNeedsMoreButter);

  console.log(
    wifeBringingTickets +
      wifeNeedsPopcorn +
      wifeNeedsMoreButter +
      "All Things Done"
  );
})();

console.log("Show Ticket User 3");
console.log("Show Ticket User 4");
