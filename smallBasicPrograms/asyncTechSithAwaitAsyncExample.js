console.log("Show Ticket User 1");
console.log("Show Ticket User 2");

const wifeBringingTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("User 3 Tickets Avialable Now");
  }, 2000);
});

// const wifeNeedsPopcorn = new Promise(resolve => {
//   setTimeout(() => {
//     resolve("Bringing Popcorn for Hungry Wife");
//   }, 2000);
// });

const wifeNeedsPopcorn = wifeBringingTickets.then(r => {
  console.log(r);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Brought Popcorn for Hungry Wife");
    }, 2000);
  });
});

const wifeNeedsMoreButter = wifeNeedsPopcorn.then(resolve => {
  console.log(resolve);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Wife Got More butter on PopCorn");
    }, 2000);
  });
});

wifeNeedsMoreButter.then(resolve => {
  console.log("Finally !!! " + resolve);
});

console.log("Show Ticket User 3");
console.log("Show Ticket User 4");
