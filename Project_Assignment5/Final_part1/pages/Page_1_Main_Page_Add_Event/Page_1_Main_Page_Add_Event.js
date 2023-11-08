function onClick() {
  // localStorage.removeItem('tripInfo');
  history.back();
}

var savedArr = JSON.parse(localStorage.getItem('tripInfo'));
if (savedArr) {} else {savedArr = []}

function saveText() {
  var data = {
    newTripName: document.getElementById('newTripName').value,
    destination: document.getElementById('destination').value,
    leftDays: '3 days',
    date: document.getElementById('startDate').value + ' - ' +document.getElementById('endDate').value,
    people: 'Alice, Bob, Alex',
  }
  savedArr.push(data)
  localStorage.setItem('tripInfo', JSON.stringify(savedArr));
  history.back();
}

