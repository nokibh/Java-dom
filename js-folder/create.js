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
  });
}

// ticket tk
const ticketClass = 'Economy';
function ticketName() {
  const ticket = document.getElementById('ticket-item').innerHTML;
  const ticketElement = document.createElement('div');
  ticket.appendChild('ticketElement');
  console.log(ticketElement);
  const p = document.createElement('p');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
}

// funtion call
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
  ticketName();
}
