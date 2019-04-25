console.log("Before");

const user = getUser(1, user => {
  console.log(user);
  getRepositories(user.gitHubUsername, repos => {
    console.log(repos);
    getCommits(repos[0],(commit) =>{


    });
  });
});

console.log("After");

function displayCommits(repos)


function getUser(id, cb) {
  setTimeout(() => {
    console.log("Reading Datbase Finished");
    cb({ id, gitHubUsername: "mosh" });
    //return { id, gitHubUsername: "mosh" };
  }, 2000);
}

function getRepositories(username, cb) {
  setTimeout(() => {
    console.log("Fetching Git Repositories");
    cb(["repo1", "repo2", "Repo3"]);
  }, 2000);
}

function getCommits(repo, cb) {
  setTimeout(() => { 
      console.log("Got Commits For the Repo");
      cb("commits");
}, 2000);
}
