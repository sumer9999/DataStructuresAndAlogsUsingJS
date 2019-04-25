console.log("1 before\n");

//Below is example of async/await

(async () => {
  user = await trial();
  console.log("2 ", user);
})();

//Below is example of Promises then
// trial()
//   .then(_ => console.log("RESOLVED:" + _))
//   .catch(_ => console.log("REJECTED:" + _));
// user = await trial();

console.log("\n3 After");

function trial() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("\n2.5 Executed the timeout");
      resolve(99);
    }, 2000);
  });
}
