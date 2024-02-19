document.getElementById('buy-btn').addEventListener('click', function () {
  const busTicket = document.getElementById('seat-section');
  busTicket.scrollIntoView('seat-section');
});
let buttons = document.querySelectorAll('.green-btn');

for (const button of buttons) {
  button.addEventListener('click', function () {
    button.style.backgroundColor = 'green';
  });
}
// seat selection
const allbtn = document.getElementsByClassName('green-btn');
let count = 8;
for (const btn of allbtn) {
  btn.addEventListener('click', function (e) {
    count = count - 1;
    setInnerText('seat-count', count);
    console.log(e.target.parentNodee);
  });
}

// ticket tk
const tickets = document.getElementById('ticket');
for (const ticket of tickets) {
  cons;
}

// funtion call
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
