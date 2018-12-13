let getStartedButton = document.querySelector('#get-started');
let questionBox = document.querySelector('#question-box');
let bodyTitle = document.querySelector('#body-title');
let introText = document.querySelector('#intro-text');
let box = document.querySelector('#btn-row');

getStartedButton.addEventListener('click', askBudget);

function askBudget() {
  getStartedButton.style.display = 'none';
  introText.style.display = 'none';
  bodyTitle.innerHTML = 'What\'s Your Budget?';
  questionBox.innerHTML = 'Lots of words go here.<br>';
  
  let btn1 = document.createElement('button');
  let btn2 = document.createElement('button');
  let btn3 = document.createElement('button');
  let lessThanFive = document.createTextNode('$4,999 and Below');
  let fiveToFifteen = document.createTextNode('$5,000 to $14,999');
  let fifteenAndUp = document.createTextNode('$15,000 and Up');

  btn1.appendChild(lessThanFive);
  btn2.appendChild(fiveToFifteen);
  btn3.appendChild(fifteenAndUp);

  btn1.id = 'budgetLo';
  btn2.id = 'budgetMid';
  btn3.id = 'budgetHi';

  box.appendChild(btn1);
  box.appendChild(btn2);
  box.appendChild(btn3);
}
