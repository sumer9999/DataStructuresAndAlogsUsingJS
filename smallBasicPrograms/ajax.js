//import XMLHttpRequest from XMLHttpRequest;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhttp = new XMLHttpRequest();

xhttp.open("GET", "https://www.w3schools.com/js/ajax_info.txt", true);

xhttp.onreadystatechange = function() {
  console.log(this.readyState, " <> ", this.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

xhttp.send();
