const { response } = require("express");

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");




var raw = JSON.stringify({
  "Name": "?",
  "Secret": "?",
  "Prompt ID": "1648599202269x693769025531412500",
  "Input 1": "get element by div id zoeman post on submit and fetch api ",
  "n": 4
});
function search(searchTerm) {
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("https://prompts.riku.ai/webhook/run", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


fetch("https://prompts.riku.ai/webhook/run", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
var searchResults = document.createElement("div");
searchResults.id = "searchResults";
searchResults.className = "searchResults";
search.appendChild(searchResults);
var search = document.getElementById("search");
searchResults = document.getElementById("searchResults");
searchResults.innerHTML = "";

var results = document.createElement
searchResults.innerHTML = result;
console.log(result);
console.log(response);
console.log(response.text());
console.log(response.json());
console.log(response.json().then(data => console.log(data)));
console.log(response.json().then(data => console.log(data.length)));
console.log(response.json().then(data => console.log(data[1].length)));
console.log(response.json().then(data => console.log(data[1][0])));
console.log(response.json().then(data => console.log(data[1][1])));
console.log(response.json().then(data => console.log(data[1][2])));
console.log(response.json().then(data => console.log(data[1][3])));
console.log(response.json().then(data => console.log(data[1][4])));
onsole.log(response.json().then(data => console.log(data[1][5])));
console.log(response.json().then(data => console.log(data[1][6])));
console.log(response.json().then(data => console.log(data[1][7])));
console.log(response.json().then(data => console.log(data[1][8])));
console.log(response.json().then(data => console.log(data[1][9])));
console.log(response.json().then(data => console.log(data[1][10])));
console.log(response.json().then(data => console.log(data[1][11])));
console.log(response.json().then(data => console.log(data[1][12])));




