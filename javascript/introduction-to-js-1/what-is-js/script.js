function createParagraph1() {
  const para = document.createElement('p');
  para.textContent = 'You clicked the 1st button!';
  document.body.appendChild(para);
}
function createParagraph2() {
  const para = document.createElement('p');
  para.textContent = 'You clicked the 2nd button!';
  document.body.appendChild(para);
}
function createParagraph3() {
  const para = document.createElement('p');
  para.textContent = 'You clicked the 3rd button!';
  document.body.appendChild(para);
}

const buttons1 = document.querySelectorAll('.button1');
const buttons2 = document.querySelectorAll('.button2');
const buttons3 = document.querySelectorAll('.button3');

for (const button of buttons1) {
  button.addEventListener('click', createParagraph1);
}
for (const button of buttons2) {
  button.addEventListener('click', createParagraph2);
}
for (const button of buttons3) {
  button.addEventListener('click', createParagraph3);
}