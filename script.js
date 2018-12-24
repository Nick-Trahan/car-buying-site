let getStartedButton = document.querySelector('#get-started');
let bodyTitle = document.querySelector('#body-title');
let bodyText = document.querySelector('#intro-text');
let btnRow = document.querySelector('#btn-row');
let resetBtn = document.querySelector('#reset-btn');
let backBtn = document.querySelector('#back-btn');

let userPrefs = [];

getStartedButton.addEventListener('click', buildBudgetPage);

function buildBudgetPage() {
  clearOldButtons();
  
  document.querySelector('#back-reset-row').style.display = 'flex';

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

  let btn4 = document.createElement('button');
  let btn5 = document.createElement('button');

  let labelLoEff = document.createTextNode('Won\'t Travel');
  let labelHiEff = document.createTextNode('Will Travel');

  btn4.appendChild(labelLoEff);
  btn5.appendChild(labelHiEff);

  btn4.id = 'btnLoEff';
  btn5.id = 'btnHiEff';

  btnRow.appendChild(btn4);
  btnRow.appendChild(btn5);
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

  let btn6 = document.createElement('button');
  let btn7 = document.createElement('button');

  let labelUsed = document.createTextNode('Shop Pre-Owned');
  let labelNew = document.createTextNode('Shop New');

  btn6.appendChild(labelUsed);
  btn7.appendChild(labelNew);

  btn6.id = 'btnUsed';
  btn7.id = 'btnNew';

  if(userPrefs[0] === 'lo bgt') {
    bodyTitle.innerHTML = 'Below $5,000';
    bodyText.innerHTML = 'Even more words! LO';
    btnRow.appendChild(btn6);

  } else if(userPrefs[0] === 'mid bgt') {
    bodyTitle.innerHTML = '$5,000 to $14,999';
    bodyText.innerHTML = 'Even more words! MID';
    btnRow.appendChild(btn6);
    btnRow.appendChild(btn7);

  } else if(userPrefs[0] === 'hi bgt') {
    bodyTitle.innerHTML = '$15,000 or More';
    bodyText.innerHTML = 'Even more words! HI';
    btnRow.appendChild(btn6);
    btnRow.appendChild(btn7);
  }
}

btnRow.addEventListener('click', saveCondition);

function saveCondition(event) {
  let clickedElement = event.target;

  if(clickedElement.id === 'btnUsed') {
    userPrefs.push('used');
    buildUsedOptionsPage();

  } else if(clickedElement.id === 'btnNew') {
    userPrefs.push('new');
    buildNewOptionsPage();
  }
}

function buildUsedOptionsPage() {
  clearOldButtons();

  bodyTitle.innerHTML = 'Used car buying options';
  bodyText.innerHTML = 'Words used car shopping';

  let btn8 = document.createElement('button');
  let btn9 = document.createElement('button');
  let btn10 = document.createElement('button');
  let btn11 = document.createElement('button');

  let certifiedPreOwned = document.createTextNode('Certified Pre-Owned');
  let usedLot = document.createTextNode('Used Dealer Lot');
  let bhphLot = document.createTextNode('Buy Here; Pay Here Lot');
  let privateSale = document.createTextNode('Private Sale');

  btn8.appendChild(certifiedPreOwned);
  btn9.appendChild(usedLot);
  btn10.appendChild(bhphLot);
  btn11.appendChild(privateSale);

  btn8.id = 'btnCpo';
  btn9.id = 'btnUsedLot';
  btn10.id = 'btnBhphLot';
  btn11.id = 'btnPrivateSale';

  btnRow.appendChild(btn8);
  btnRow.appendChild(btn9);
  btnRow.appendChild(btn10);
  btnRow.appendChild(btn11);

  if(userPrefs[1] === 'hi eff') {
    let btn12 = document.createElement('button');
    let theInternetUsed = document.createTextNode('The Internet');

    btn12.appendChild(theInternetUsed);

    btn12.id = 'btnInternetUsed';

    btnRow.appendChild(btn12);
  }
}

function buildNewOptionsPage() {
  clearOldButtons();

  bodyTitle.innerHTML = 'New car buying options';
  bodyText.innerHTML = 'Words new car shopping';

  let btn13 = document.createElement('button');

  let newCarDealer = document.createTextNode('New Car Dealership');

  btn13.appendChild(newCarDealer);

  btn13.id = 'btnNewLot';

  btnRow.appendChild(btn13);

  if(userPrefs[1] === 'hi eff') {
    let btn14 = document.createElement('button');
    let theInternetNew = document.createTextNode('The Internet');

    btn14.appendChild(theInternetNew);

    btn14.id = 'btnInternetNew';

    btnRow.appendChild(btn14);
  }
}

btnRow.addEventListener('click', saveBuyingOption);

function saveBuyingOption(event) {
  let clickedElement = event.target;

  if(clickedElement.id === 'btnCpo') {
    console.log('CPO');
    userPrefs.push('cpo');

  } else if(clickedElement.id === 'btnUsedLot') {
    console.log('btnUsedLot');
    userPrefs.push('used lot');

  } else if(clickedElement.id === 'btnBhphLot') {
    console.log('btnBhphLot');
    userPrefs.push('bhph lot');

  } else if(clickedElement.id === 'btnPrivateSale') {
    console.log('btnPrivateSale');
    userPrefs.push('private sale');
    
  } else if(clickedElement.id === 'btnInternetUsed') {
    console.log('btnInternetUsed');
    userPrefs.push('internet used');

  } else if(clickedElement.id === 'btnNewLot') {
    console.log('btnNewLot');
    userPrefs.push('new lot');
    
  } else if(clickedElement.id === 'btnInternetNew') {
    console.log('btnInternetNew');
    userPrefs.push('internet new');
  }
}

function clearOldButtons() {
  let prevButtons = btnRow.querySelectorAll('button');

  for(let i = 0; i < prevButtons.length; i++) {
    const element = prevButtons[i];

    element.classList.add('hidden');
  }
}

resetBtn.addEventListener('click', resetPage);

function resetPage() {
  buildBudgetPage();
  userPrefs = [];
}

backBtn.addEventListener('click', goBack);

function goBack() {
  let lastPage = userPrefs[userPrefs.length - 1]; 

  switch (lastPage) {
    case 'lo bgt':
    case 'mid bgt':
    case 'hi bgt':
      buildBudgetPage();
      userPrefs.pop();
      break;

    case 'lo eff':
    case 'hi eff':
      buildEffortPage();
      userPrefs.pop();
      break;

    case 'used':
    case 'new':
      buildConditionPage();
      userPrefs.pop();
      break;
  
    default:
      resetPage();
      console.log('It broke :(');
      break;
  }
}
