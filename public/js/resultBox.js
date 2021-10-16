//hardcode testing , will use scraper data instead of hardcodded array

const resultBox = document.querySelector(".result");
console.log(resultBox);

let list = ["Jeffrey Dahmer", "Ted Bundy", "H.H. Holmes", "Ed Gein", "Otis Toole", "Richar Ramirez", "Andrei Chikatilo", "John Wayne Gacy", "Gary Ridgway"]// for testing purposes

list.forEach((killer) => {
  resultBox.innerHTML+=`<div class="box">${killer}</div> `
});
