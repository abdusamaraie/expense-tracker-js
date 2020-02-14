const balance = document.getElementById("balance"),
  money_plus = document.getElementById("money-plus"),
  money_minus = document.getElementById("money-minus"),
  list = document.getElementById("list"),
  form = document.getElementById("form"),
  text = document.getElementById("text"),
  amount = document.getElementById("amount");

//data
const data = [
  { id: 1, text: "Flowers", amount: -20 },
  { id: 2, text: "salary", amount: 200 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 }
];

let transactions = data;

// functions
function addTransactionDOM(transaction) {
  const sign = transaction.amount > 0 ? "+" : "-";

  const item = document.createElement("li");

  //add class based on value
  item.classList.add(transaction.amount > 0 ? "plus" : "minus");

  item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span>
  <button class='delete-btn'>x</button>
  `;
  list.appendChild(item);
}

// updated balance, income and expense valuse
function updatevalues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item) * -1)
    .toFixed(2);

  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}

//init app

function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactionDOM);
  updatevalues();
}

init();
// event listners
