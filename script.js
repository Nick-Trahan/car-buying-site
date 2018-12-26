let getStartedButton = document.querySelector('#get-started');
let bodyTitle = document.querySelector('#body-title');
let bodyText = document.querySelector('#intro-text');
let btnRow = document.querySelector('#btn-row');
let resetBtn = document.querySelector('#reset-btn');
let backBtn = document.querySelector('#back-btn');

let userPrefs = {};

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
  
  switch(clickedElement.id) {
    case 'btnBudgetLo':
      userPrefs.budget = 'low';
      buildEffortPage();
      break;

    case 'btnBudgetMid':
      userPrefs.budget = 'mid';
      buildEffortPage();
      break;

    case 'btnBudgetHi':
      userPrefs.budget = 'high';
      buildEffortPage();
      break;
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

  switch(clickedElement.id) {
    case 'btnLoEff':
      userPrefs.effort = 'won\'t';
      buildConditionPage();
      break;

    case 'btnHiEff':
      userPrefs.effort = 'will';
      buildConditionPage();
      break;
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

  switch(userPrefs.budget) { 
    case 'low':
      bodyTitle.innerHTML = 'Below $5,000';
      bodyText.innerHTML = 'Even more words! LO';
      btnRow.appendChild(btn6);
      break;

    case 'mid':
      bodyTitle.innerHTML = '$5,000 to $14,999';
      bodyText.innerHTML = 'Even more words! MID';
      btnRow.appendChild(btn6);
      btnRow.appendChild(btn7);
      break;

    case 'high':
      bodyTitle.innerHTML = '$15,000 or More';
      bodyText.innerHTML = 'Even more words! HI';
      btnRow.appendChild(btn6);
      btnRow.appendChild(btn7);
      break;
  }
}

btnRow.addEventListener('click', saveCondition);

function saveCondition(event) {
  let clickedElement = event.target;

  switch(clickedElement.id) {
    case 'btnUsed':
      userPrefs.condition = 'used';
      buildUsedOptionsPage();
      break;

    case 'btnNew':
      userPrefs.condition = 'new';
      buildNewOptionsPage();
      break;
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

  if(userPrefs.effort === 'will') {
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

  if(userPrefs.effort === 'will') {
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

  switch(clickedElement.id) {

    case 'btnCpo':
      userPrefs.option = 'cpo';
      buildRequestedPage();
      break;

    case 'btnUsedLot':
      userPrefs.option = 'used lot';
      buildRequestedPage();
      break;

    case 'btnBhphLot':
      userPrefs.option = 'bhph lot';
      buildRequestedPage();
      break;

    case 'btnPrivateSale':
      userPrefs.option = 'private sale';
      buildRequestedPage();
      break;
    
    case 'btnInternetUsed':
      userPrefs.option = 'internet used';
      buildRequestedPage();
      break;

    case 'btnNewLot':
      userPrefs.option = 'new lot';
      buildRequestedPage();
      break;
    
    case 'btnInternetNew':
      userPrefs.option = 'internet new';
      buildRequestedPage();
      break;
  }
}

function buildRequestedPage() {
  clearOldButtons();

  switch(userPrefs.option) {
    case 'cpo':
      bodyTitle.innerHTML = 'Shopping for Certified Pre-Owned';
      bodyText.innerHTML = 'Words about shopping for Certified Pre-Owned cars and trucks.';
      break;

    case 'used lot':  
      bodyTitle.innerHTML = 'Shopping at Used Car Dealer Lots';
      bodyText.innerHTML = 'Words about shopping at used car dealer lots.';
      break;

    case 'bhph lot':
      bodyTitle.innerHTML = 'Shopping at Buy-Here, Pay-Here Lots';
      bodyText.innerHTML = 'Words about shopping at BHPH lots.';
      break;
    
    case 'private sale':
      bodyTitle.innerHTML = 'The Private Sale Buying Experience';
      bodyText.innerHTML = 'Words about buying a car or truck from an individual.';
      break;

    case 'internet used':
      bodyTitle.innerHTML = 'Shopping for a Used Car Online';
      bodyText.innerHTML = 'Words about buying a used car over The Internet.';
      break;

    case 'new lot':
      bodyTitle.innerHTML = 'Shopping at a New Car Dealership';
      bodyText.innerHTML = 'Words about the new car buying experience.';
      break;

    case 'internet new':
      bodyTitle.innerHTML = 'Shopping for a New Car Online';
      bodyText.innerHTML = 'Words about buying a new car over The Internet.';
      break;
  }
}

function clearOldButtons() {
  let prevButtons = btnRow.querySelectorAll('button');

  for(let i = 0; i < prevButtons.length; i++) {
    const element = prevButtons[i];

    element.parentNode.removeChild(element);
  }
}

resetBtn.addEventListener('click', resetPage);

function resetPage() {
  buildBudgetPage();
  userPrefs = {};
}

backBtn.addEventListener('click', goBack);

function goBack() {
  let userValues = Object.keys(userPrefs).map(function (key) {
    return userPrefs[key];
    }); // COPY/PASTE from StackOverflow. This is a little beyond my current studies, but I think I get it. I get an array made up of the keys from the userPrefs object, then the .map() method runs a function on each element within that array that returns the value of each key as a new array.
  
  // let userValues = Object.values(userPrefs); //Object.values is not compatible with IE, look for alt method.
  let lastValue = userValues[userValues.length - 1];

  switch (lastValue) {
    case 'low':
    case 'mid':
    case 'high':
      buildBudgetPage();
      delete userPrefs.budget;
      break;

    case 'won\'t':
    case 'will':
      buildEffortPage();
      delete userPrefs.effort;
      break;

    case 'used':
    case 'new':
      buildConditionPage();
      delete userPrefs.condition;
      break;

    case 'cpo':
    case 'used lot':
    case 'bhph lot':
    case 'private sale':
    case 'internet used':
      buildUsedOptionsPage();
      delete userPrefs.option;
      break;

    case 'new lot':
    case 'internet new':
      buildNewOptionsPage();
      delete userPrefs.option;
      break;
  
    default:
      resetPage();
      console.log('It broke :(');
      break;
  }
}
