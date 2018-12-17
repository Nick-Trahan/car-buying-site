let getStartedButton = document.querySelector('#get-started');
let bodyTitle = document.querySelector('#body-title');
let bodyText = document.querySelector('#intro-text');
let btnRow = document.querySelector('#btn-row');

let userPrefs = [];

getStartedButton.addEventListener('click', askBudget);

function askBudget() {
  clearOldButtons();

  bodyTitle.innerHTML = 'What\'s Your Budget?';
  bodyText.innerHTML = 'Lots of words go here.';
  
  let btn1 = document.createElement('button');
  let btn2 = document.createElement('button');
  let btn3 = document.createElement('button');

  let lessThanFive = document.createTextNode('$4,999 and Below');
  let fiveToFifteen = document.createTextNode('$5,000 to $14,999');
  let fifteenAndUp = document.createTextNode('$15,000 and Up');

  btn1.appendChild(lessThanFive);
  btn2.appendChild(fiveToFifteen);
  btn3.appendChild(fifteenAndUp);

  btn1.id = 'btnBudgetLo';
  btn2.id = 'btnBudgetMid';
  btn3.id = 'btnBudgetHi';
  
  btnRow.appendChild(btn1);
  btnRow.appendChild(btn2);
  btnRow.appendChild(btn3);
}

btnRow.addEventListener('click', saveBudget);

function saveBudget(event) {
  let clickedElement = event.target;
  
  if(clickedElement.id === 'btnBudgetLo') {
    userPrefs.push('lo bgt');
    buildEffortPage();
  } else if(clickedElement.id === 'btnBudgetMid') {
    userPrefs.push('mid bgt');
    buildEffortPage();
  } else if(clickedElement.id === 'btnBudgetHi') {
    userPrefs.push('hi bgt');
    buildEffortPage();
  }
}

function buildEffortPage() {
  clearOldButtons();

  bodyTitle.innerHTML = 'How much work are you willing to put into this?';
  bodyText.innerHTML = 'Words about effort';

  let btn6 = document.createElement('button');
  let btn7 = document.createElement('button');

  let labelLoEff = document.createTextNode('Won\'t Travel');
  let labelHiEff = document.createTextNode('Will Travel');

  btn6.appendChild(labelLoEff);
  btn7.appendChild(labelHiEff);

  btn6.id = 'btnLoEff';
  btn7.id = 'btnHiEff';

  btnRow.appendChild(btn6);
  btnRow.appendChild(btn7);
}

btnRow.addEventListener('click', saveEffort);

function saveEffort(event) {
  let clickedElement = event.target;

  if(clickedElement.id === 'btnLoEff') {
    userPrefs.push('lo eff');
    buildConditionPage();
  } else if(clickedElement.id === 'btnHiEff') {
    userPrefs.push('hi eff');
    buildConditionPage();
  } 
}

function buildConditionPage() {
  clearOldButtons();

  let btn4 = document.createElement('button');
  let btn5 = document.createElement('button');

  let labelNew = document.createTextNode('Shop New');
  let labelUsed = document.createTextNode('Shop Pre-Owned');

  btn4.appendChild(labelUsed);
  btn5.appendChild(labelNew);

  btn4.id = 'btnUsed';
  btn5.id = 'btnNew';

  if(userPrefs[0] === 'lo bgt') {
    bodyTitle.innerHTML = 'Below $5,000';
    bodyText.innerHTML = 'Even more words! LO';
    btnRow.appendChild(btn4);
  } else if(userPrefs[0] === 'mid bgt') {
    bodyTitle.innerHTML = '$5,000 to $15,000';
    bodyText.innerHTML = 'Even more words! MID';
    btnRow.appendChild(btn4);
    btnRow.appendChild(btn5);
  } else if(userPrefs[0] === 'hi bgt') {
    bodyTitle.innerHTML = '$15,000 or More';
    bodyText.innerHTML = 'Even more words! HI';
    btnRow.appendChild(btn4);
    btnRow.appendChild(btn5);
  }
}

btnRow.addEventListener('click', saveCondition);

function saveCondition(event) {
  let clickedElement = event.target;

  if(clickedElement.id === 'btnUsed') {
    userPrefs.push('used');
    console.log(userPrefs);
  } else if(clickedElement.id ==='btnNew') {
    userPrefs.push('new');
    console.log(userPrefs);
  }
}

/*function buildOptionsPage() {
  clearOldButtons();

  if(userPrefs[0] === 'lo bgt' && userPrefs[2] === 'lo eff') {
    bodyTitle.innerHTML = 'lo bgt lo eff';
    bodyText.innerHTML = 'Words about lo bgt lo eff options';
  } else if(userPrefs[0] === 'lo bgt' && userPrefs[2] === 'hi eff') {
    bodyTitle.innerHTML = 'lo bgt hi eff';
    bodyText.innerHTML = 'Words about lo hi eff options';
  } else if(userPrefs[0] === )
  
}*/

function clearOldButtons() {
  let prevButtons = btnRow.querySelectorAll('button');

  for (let i = 0; i < prevButtons.length; i++) {
    const element = prevButtons[i];
    element.classList.add('hidden');
  }
}
