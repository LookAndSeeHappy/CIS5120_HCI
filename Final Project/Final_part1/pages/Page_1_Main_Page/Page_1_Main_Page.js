function onClick() {
  location.href = '../Page_1_Main_Page_Add_Event/Page_1_Main_Page_Add_Event.html';
}
function onClickDelete() {
  localStorage.removeItem('tripInfo');
  //location.href = '../Page_1_Main_Page/Page_1_Main_Page.html';
  location.reload();
}
function redirectToAnotherPage(index) {
  // 获取保存的数据
  // var selectedData = savedArr[index];
  location.href = "../../../Final_part2/pages/Page_2_Schedule/Page_2_Schedule.html";
}

// var data = {
//   destination: 'Philly Zoo',
//   leftDays: '3 days',
//   date: 'Oct. 17th - Oct. 18th\n',
//   people: 'Alice, Bob, Alex',
// }
// myArr = []
// myArr.push(data)

var savedArr = JSON.parse(localStorage.getItem('tripInfo'));
if (savedArr) {} else {savedArr = []}

// 获取要重复的部分的父容器
var container = document.getElementById('container');

// 使用循环动态生成和插入重复的 HTML 代码块
for (var i = 0; i < savedArr.length; i++) {
    var divElement = document.createElement('div');
    divElement.innerHTML = `
    <div class="flex-col list-item section space-y-46">
      <div class="flex-row justify-between group_2">
        <div class="group_3">
        <span class="font_2 text" style="cursor: pointer;" onclick="redirectToAnotherPage(${i})">${savedArr[i].date}<br /></span>
        <span class="font_2" style="cursor: pointer;" onclick="redirectToAnotherPage(${i})">${savedArr[i].people}</span>
        </div>
        <img
          class="self-start image_3"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/653acced5a7e3f031015c764/654433c1f9a7df0012213db5/16989693416580899674.png"
          style="cursor: pointer;"
          onclick="onClickDelete()"
        />
      </div>
      <div class="flex-row justify-between items-baseline">
        <span class="font_1 text text_4" style="cursor: pointer;" onclick="redirectToAnotherPage(${i})">${savedArr[i].destination}</span>
        <span class="font_3 text text_5" style="cursor: pointer;" onclick="redirectToAnotherPage(${i})">${savedArr[i].leftDays}</span>
      </div>
    </div>
    `;

    container.appendChild(divElement);
}