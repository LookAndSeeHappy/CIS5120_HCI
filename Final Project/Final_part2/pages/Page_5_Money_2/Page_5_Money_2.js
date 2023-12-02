// function onClick() {
//   location.href = '../../pages/Page_5_Money_4/Page_5_Money_4.html';
// }

// Part one: temporary store, for choose split method
var savedArr_money = JSON.parse(localStorage.getItem('moneyInfo'));
if (savedArr_money) {} else {savedArr_money = []}

function saveTextForSplit() {
  var data = {
    split: 'You paid, split equally.',
    description: document.getElementById('Description').value,
    money: document.getElementById('Money').value,
    date: document.getElementById('Date').value,
  }
  savedArr_money.push(data)
  localStorage.setItem('moneyInfo', JSON.stringify(savedArr_money));
  location.href = '../../pages/Page_5_Money_4/Page_5_Money_4.html';
}

// Part two: final data store
var moneyArr = JSON.parse(localStorage.getItem('money'));
if (moneyArr) {} else {moneyArr = []}

function saveText() {
  var data = {
    split: JSON.parse(localStorage.getItem('moneyInfo'))[JSON.parse(localStorage.getItem('moneyInfo')).length - 1].split,
    description: document.getElementById('Description').value,
    money: document.getElementById('Money').value,
    date: document.getElementById('Date').value,
  }
  moneyArr.push(data)
  localStorage.setItem('money', JSON.stringify(moneyArr));
  location.href = '../../pages/Page_5_Money/Page_5_Money.html';
}

document.addEventListener('DOMContentLoaded', function() {

  var savedArr_money = JSON.parse(localStorage.getItem('moneyInfo'));
  const show_money_A = `<span class="text_10">${savedArr_money[savedArr_money.length - 1].split}</span>`;
  
  // 获取要插入消息的容器
  const messageContainer_A = document.getElementById('splitMode');

  // 将message变量的内容插入到页面中
  if (messageContainer_A) {
    messageContainer_A.innerHTML = show_money_A;
  } else {
    console.error("Element with ID 'messageContainer' not found.");
  }
  
  });
