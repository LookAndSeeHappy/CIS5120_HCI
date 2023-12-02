function onClick() {
  location.href = '../../pages/Page_5_Money_1/Page_5_Money_1.html';
}
function onClick_Schedule() {
  location.href = '../../pages/Page_2_Schedule/Page_2_Schedule.html';
}

function onClick_Friends() {
  location.href = '../../pages/Page_3_Add_Friends/Page_3_Add_Friends.html';
}

function onClick_Home() {
  location.href = '../../../Final_part1/pages/Page_1_Main_Page/Page_1_Main_Page.html';
}

function onClick_Map() {
  location.href = '../../pages/Page_4_Map_A/Page_4_Map_A.html';
}

function onClick_Money() {
  location.href = '../../pages/Page_5_Money/Page_5_Money.html';
}

function onClickDelete(index) {
  var moneyArr = JSON.parse(localStorage.getItem('money'));
  if (moneyArr.length === 1) {
    localStorage.removeItem('money');
  } else {
    moneyArr.splice(index, 1); 
    localStorage.setItem('money', JSON.stringify(moneyArr));
  }
  localStorage.removeItem('moneyInfo');
  location.reload();
}

document.addEventListener('DOMContentLoaded', function() {
  // split result
  const dialog = document.getElementById('myDialog');
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');

  openBtn.addEventListener('click', () => {
    dialog.showModal(); // 打开弹窗
  });

  closeBtn.addEventListener('click', () => {
    dialog.close(); // 关闭弹窗
  });
});

// 展示列表内容
document.addEventListener('DOMContentLoaded', function() {
var moneyArr = JSON.parse(localStorage.getItem('money'));
if (moneyArr) {} else {moneyArr = []}

// 获取要重复的部分的父容器
var container = document.getElementById('container');

var totalMoney = 105;
let splitResults = [35, 35]; // the frist is for red, the second is for green
// 使用循环动态生成和插入重复的 HTML 代码块
for (var i = 0; i < moneyArr.length; i++) {
  totalMoney = totalMoney + parseFloat(moneyArr[i].money); 
  var divElement = document.createElement('div');
    if (moneyArr[i].split === 'You paid, split equally.') {
      var payer = 'You Paid $ ';
      var mode = 'you lent';
      splitResults[1] = splitResults[1] + parseFloat(moneyArr[i].money)/2;
      var borrow_lent_denominator = 2;
      var color_green = true;
    } else if (moneyArr[i].split === 'You are owned the full amount.') {
      var payer = 'You Paid $ ';
      var mode = 'you lent';
      splitResults[1] = splitResults[1] + parseFloat(moneyArr[i].money);
      var borrow_lent_denominator = 1;
      var color_green = true;
    } else if (moneyArr[i].split === 'Alex paid, split equally.') {
      var payer = 'Alex Paid $ ';
      var mode = 'you borrowed';
      splitResults[0] = splitResults[0] + parseFloat(moneyArr[i].money)/2;
      var borrow_lent_denominator = 2;
      var color_green = false;
    } else if (moneyArr[i].split === 'Alex are owned the full amount.') {
      var payer = 'Alex Paid $ ';
      var mode = 'you borrowed';
      splitResults[0] = splitResults[0] + parseFloat(moneyArr[i].money);
      var borrow_lent_denominator = 1;
      var color_green = false;
    } else {
      console.log("split type error");
    }
    
    divElement.innerHTML = `<div class="mt-8 flex-row justify-between items-center">
    <div class="flex-row items-center self-stretch">
      <img
        class="shrink-0 image_5"
        src="../../../Images/9d7c4f973991006f30b533f8d27bbc0e.png"
      />
      <div class="ml-18 group_10 view_2">
        <span class="font text">
        ${moneyArr[i].description}
          <br />
        </span>
        <span class="font_11 text">${payer+moneyArr[i].money}</span>
      </div>
    </div>
    <div class="flex-col items-center group_20">
      <span id="openBtn_detail_${i}" class="${color_green ? 'font_9' : 'font_12'}" style="cursor: pointer;" ">${mode}</span>
      <span id="openBtn_detail_${i}" class="${color_green ? 'font_10' : 'font_13'} text" style="cursor: pointer;" ">$${parseFloat(moneyArr[i].money)/borrow_lent_denominator}</span>
    </div>
  </div>
  
  <dialog id="myDialog_detail_${i}"><div class="flex-col page_splitDetail">
      <div class="flex-col">
        <div class="flex-row ">
          <span class="font_SplitResult text_SplitResult">Split Details</span>
          <button id="closeBtn_detail_${i}" style="cursor: pointer;">
            <img
              class="self-end image_splitDetail"
              src="../../../Images/060c3031008560446a922197247fd4a3.png"
            />
          </button>
        </div>
        <div class="flex-row justify-between items-center mt-11_splitDetail">
          <span class="font_3_splitDetail text_splitDetail">Activity:</span>
          <span class="font_2_splitDetail text_splitDetail text_4_splitDetail">${moneyArr[i].description}</span>
        </div>
        <div class="flex-row justify-between items-center mt-11_splitDetail">
          <span class="font_3_splitDetail text_splitDetail">Date:</span>
          <span class="font_2_splitDetail text_splitDetail text_4_splitDetail">${moneyArr[i].date}</span>
        </div>
        <div class="flex-row justify-between items-center mt-11_splitDetail">
          <span class="font_3_splitDetail text_splitDetail">Amount:</span>
          <span class="font_2_splitDetail text_splitDetail text_4_splitDetail">$ ${moneyArr[i].money}</span>
        </div>
        <div class="flex-row justify-between items-center mt-11_splitDetail">
          <span class="font_3_splitDetail text_splitDetail">Participants:</span>
          <span class="font_2_splitDetail text_splitDetail text_4_splitDetail">You, Alex</span>
        </div>
        <div class="flex-row justify-between items-center mt-11_splitDetail">
          <span class="font_3_splitDetail text_splitDetail">Payer:</span>
          <span class="font_2_splitDetail text_splitDetail text_4_splitDetail">${payer.split(' ')[0]}</span>
        </div>
        <button id="closeBtn_detail_${i}" style="cursor: pointer;">
          <div class="justify-center">
          <img
            class="self-start image_delete"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/653acced5a7e3f031015c764/654433c1f9a7df0012213db5/16989693416580899674.png"
            style="cursor: pointer;"
            onclick="onClickDelete(${i})"
          />
          <span class="font_3_splitDetail text_splitDetail" style="cursor: pointer;" onclick="onClickDelete(${i})">Delete</span>
          </div>
        </button>
      </div>
    </div></dialog>`
  ;
    container.appendChild(divElement);
  }
  // <div class="flex-row mt-11_splitDetail">
  //         <span class="font_splitDetail text_splitDetail text_9_splitDetail">Split:</span>
  //         <span class="font_2_splitDetail text_splitDetail text_10_splitDetail ml-103_splitDetail">${moneyArr[i].split}</span>
  // </div>
  // 找到要更新的<span>元素: 
  let spanElement_transations = document.querySelector('.font_5.text.text_9');
  let spanElement_groupSpending = document.querySelector('.font_2.text.text_8');
  let spanElements = document.querySelectorAll('.font_SplitResult.text_2_SplitResult.ml-43_SplitResult');
  
  // 更新<span>元素的文本内容
  spanElement_transations.textContent = moneyArr.length + 3;
  spanElement_groupSpending.textContent = '$ ' + totalMoney;
  spanElements.forEach((spanElement, index) => {
    if (index === 0){
      spanElement.textContent = 'Your payment: $ ' + splitResults[0];
    }
    else{
      spanElement.textContent = 'Alex payment: $ ' + splitResults[1];
    }
  });
  
  var container_all = document.getElementById('container_all');
  var divElement_all = document.createElement('div');
  if (splitResults[0] < splitResults[1]){
    divElement_all.innerHTML = `<span class="font_3 text_17 mt-15">You are owed $ ${splitResults[1]- splitResults[0]} overall</span>`;
  }
  else{
    divElement_all.innerHTML = `<span class="font_3 text_17_red mt-15">You borrowed $ ${splitResults[0]- splitResults[1]} overall</span>`;
  }
  container_all.appendChild(divElement_all);
});

document.addEventListener('DOMContentLoaded', function() {
  // split detail
  var moneyArr = JSON.parse(localStorage.getItem('money'));
  if (moneyArr) {} else {moneyArr = []}
  for (var i = 0; i < moneyArr.length; i++) {
  const A = `_detail_${i}`
  const dialog = document.getElementById('myDialog'+A);
  const openBtn = document.getElementById('openBtn'+A);
  const closeBtn = document.getElementById('closeBtn'+A);

  openBtn.addEventListener('click', () => {
    dialog.showModal(); // 打开弹窗
  });

  closeBtn.addEventListener('click', () => {
    dialog.close(); // 关闭弹窗
  });}
});