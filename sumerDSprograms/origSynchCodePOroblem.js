console.log("Before");

const user = getUser(1);
console.log(user);

console.log("After");

function getUser(id) {
  setTimeout(() => {
    console.log("Reading Datbase Finished");
    return { id, gitHubUsername: "mosh" };
  }, 2000);
}
