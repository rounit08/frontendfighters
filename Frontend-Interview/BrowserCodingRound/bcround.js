const input = document.querySelector("#cricketer");
const suggestions = document.querySelector(".suggestions");

const cricketers = [
  "MS Dhoni",
  "Virat Kohli",
  "Rohit Sharma",
  "Mohammed Shami",
  "Manish Pandey",
  "Shikhar Dhawan",
  "Jasprit Bumrah	",
  "Shreyas Iyer	",
  "KL Rahul",
  "Hardik Pandya",
  "Kuldeep Yadav",
  "Shardul Thakur",
  "Shubman Gill",
  "Navdeep Saini",
  "Ajinkya Rahane",
  "Ravichandran Ashwin",
  "Umesh Yadav",
  "Wriddhiman Saha",
  "Hanuma Vihari",
  "Rishabh Pant",
  "Cheteshwar Pujara",
  "Mohammed Siraj",
  "Prithvi Shaw",
];

function search(str) {
  let results = [];
  const val = str.toLowerCase();
  console.log(str);
  for (let i = 0; i < cricketers.length; i++) {
    if (cricketers[i].toLowerCase().indexOf(val) > -1) {
      results.push(cricketers[i]);
    }
  }

  return results;
}

function searchHandler(e) {
  const inputVal = e.currentTarget.value;
  let results = [];
  if (inputVal.length > 0) {
    results = search(inputVal);
  }
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";

  if (results.length > 0) {
    for (let i = 0; i < results.length; i++) {
      let item = results[i];
      const match = item.match(new RegExp(inputVal, "i"));
      item = item.replace(match[0], `<strong>${match[0]}</strong>`);
      suggestions.innerHTML += `<p>${item}</p>`;
    }
    console.log("asd");
    suggestions.classList.add("has-suggestions");
  } else {
    results = [];
    suggestions.innerHTML = "";
    //suggestions.classList.remove("has-suggestions");
  }
}

function useSuggestion(e) {
  input.value = e.target.innerText;
  input.focus();
  suggestions.innerHTML = "";
  suggestions.classList.remove("has-suggestions");
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
