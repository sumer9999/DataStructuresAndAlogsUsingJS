//import fetch from "node-fetch";
const fetch = require("node-fetch");

fetch("https://github.com/")
  .then(res => res.text())
  .then(body => console.log(body));

// fetch("https://www.w3schools.com/js/ajax_info.txt").then(response =>
//   console.log(response.json)
// );
