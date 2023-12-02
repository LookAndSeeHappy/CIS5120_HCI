function onClick() {
  history.back();
}

var savedArr_money = JSON.parse(localStorage.getItem('moneyInfo'));

document.addEventListener('DOMContentLoaded', function() {
const show_money_A = `<span class="font_3"> You paid, split equally.<br /></span><span class="font_2">Alex owes you US $ ${parseFloat(savedArr_money[savedArr_money.length - 1].money)/2}<br /></span>`;
const show_money_B = `<span class="font_3">You are owned the full amount.<br /></span><span class="font_2">Alex owes you US $ ${parseFloat(savedArr_money[savedArr_money.length - 1].money)}<br /></span>`;
const show_money_C = `<span class="font_3">Alex paid, split equally.<br /></span><span class="font_4">You owe Alex US $ ${parseFloat(savedArr_money[savedArr_money.length - 1].money)/2}<br /></span>`;
const show_money_D = `<span class="font_3">Alex are owned the full amount.<br /></span><span class="font_4">You owe Alex US $ ${parseFloat(savedArr_money[savedArr_money.length - 1].money)}<br /></span>`;
// 获取要插入消息的容器
const messageContainer_A = document.getElementById('messageA');
const messageContainer_B = document.getElementById('messageB');
const messageContainer_C = document.getElementById('messageC');
const messageContainer_D = document.getElementById('messageD');
// 将message变量的内容插入到页面中
if (messageContainer_A) {
  messageContainer_A.innerHTML = show_money_A;
} else {
  console.error("Element with ID 'messageContainer' not found.");
}
if (messageContainer_B) {
  messageContainer_B.innerHTML = show_money_B;
} else {
  console.error("Element with ID 'messageContainer' not found.");
}
if (messageContainer_C) {
  messageContainer_C.innerHTML = show_money_C;
} else {
  console.error("Element with ID 'messageContainer' not found.");
}
if (messageContainer_D) {
  messageContainer_D.innerHTML = show_money_D;
} else {
  console.error("Element with ID 'messageContainer' not found.");
}
});

function A() {
  savedArr_money[savedArr_money.length - 1].split = 'You paid, split equally.';
  localStorage.setItem('moneyInfo', JSON.stringify(savedArr_money));
  history.back();
}

function B() {
  savedArr_money[savedArr_money.length - 1].split = 'You are owned the full amount.';
  localStorage.setItem('moneyInfo', JSON.stringify(savedArr_money));
  history.back();
}

function C() {
  savedArr_money[savedArr_money.length - 1].split = 'Alex paid, split equally.';
  localStorage.setItem('moneyInfo', JSON.stringify(savedArr_money));
  history.back();
}

function D() {
  savedArr_money[savedArr_money.length - 1].split = 'Alex are owned the full amount.';
  localStorage.setItem('moneyInfo', JSON.stringify(savedArr_money));
  history.back();
}
