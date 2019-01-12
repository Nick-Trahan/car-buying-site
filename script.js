const getStartedButton = document.querySelector('#get-started');
const bodyTitle = document.querySelector('#body-title');
const bodyText = document.querySelector('#intro-text');
const btnDiv = document.querySelector('#btn-div');
const resetBtn = document.querySelector('#reset-btn');
const backBtn = document.querySelector('#back-btn');

let userPrefs = {};

getStartedButton.addEventListener('click', buildBudgetPage);

function buildBudgetPage() {
  clearOldButtons();
  
  toggleBackResetDiv('none');

  bodyTitle.textContent = 'What\'s Your Budget?';
  bodyText.textContent = 'Lots of words go here.';

  const budgetOptions = [
    ['$4,999 and Below', 'btnBudgetLo'], 
    ['$5,000 to $14,999', 'btnBudgetMid'], 
    ['$15,000 and Up', 'btnBudgetHi']
  ];

  addButtons(budgetOptions);
}

btnDiv.addEventListener('click', saveBudget);

function saveBudget(event) {
  const clickedElement = event.target;
  
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

  toggleBackResetDiv('flex');

  bodyTitle.textContent = 'How much work are you willing to put into this?';
  bodyText.textContent = 'Words about effort';

  const effortOptions= [
    ['Won\'t Travel', 'btnLoEff'],
    [ 'Will Travel', 'btnHiEff']
  ];
  
  addButtons(effortOptions);
}

btnDiv.addEventListener('click', saveEffort);

function saveEffort(event) {
  const clickedElement = event.target;

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
  
  const conditionOptions = [
    ['Shop Pre-Owned', 'btnUsed'],
    ['Shop New', 'btnNew']
  ];

  addButtons(conditionOptions);

  switch(userPrefs.budget) { 
    case 'low':
      bodyTitle.textContent = 'Below $5,000';
      bodyText.textContent = 'Even more words! LO';
      const unneededButton = document.getElementById('btnNew');
      unneededButton.remove();
      break;

    case 'mid':
      bodyTitle.textContent = '$5,000 to $14,999';
      bodyText.textContent = 'Even more words! MID';
      break;

    case 'high':
      bodyTitle.textContent = '$15,000 or More';
      bodyText.textContent = 'Even more words! HI';
      break;
  }
}

btnDiv.addEventListener('click', saveCondition);

function saveCondition(event) {
  const clickedElement = event.target;

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

  bodyTitle.textContent = 'Used car buying options';
  bodyText.textContent = 'Words used car shopping';

  const usedOptions = [
    ['Certified Pre-Owned', 'btnCpo'],
    ['Used Dealer Lot', 'btnUsedLot'],
    ['Buy Here; Pay Here Lot', 'btnBhphLot'],
    ['Private Sale', 'btnPrivateSale']
  ];

  addButtons(usedOptions);

  if(userPrefs.effort === 'will') {
    const btn = document.createElement('button');
    btn.textContent = 'The Internet';
    btn.id = 'btnInternetUsed';
    btnDiv.appendChild(btn);
  }
}

function buildNewOptionsPage() {
  clearOldButtons();

  bodyTitle.textContent = 'New car buying options';
  bodyText.textContent = 'Words new car shopping';

  const newOptions = [
    ['New Car Dealership', 'btnNewLot']
  ];

  addButtons(newOptions);

  if(userPrefs.effort === 'will') {
    const btn = document.createElement('button');
    btn.textContent = 'The Internet';
    btn.id = 'btnInternetNew';
    btnDiv.appendChild(btn);
  }
}

btnDiv.addEventListener('click', saveBuyingOption);

function saveBuyingOption(event) {
  const clickedElement = event.target;

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
      bodyTitle.textContent = 'Shopping for Certified Pre-Owned';
      bodyText.textContent = 'Words about shopping for Certified Pre-Owned cars and trucks.';
      break;

    case 'used lot':  
      bodyTitle.textContent = 'Shopping at Used Car Dealer Lots';
      bodyText.textContent = 'Words about shopping at used car dealer lots.';
      break;

    case 'bhph lot':
      bodyTitle.textContent = 'Shopping at Buy-Here, Pay-Here Lots';
      bodyText.textContent = 'Words about shopping at BHPH lots.';
      break;
    
    case 'private sale':
      bodyTitle.textContent = 'The Private Sale Buying Experience';
      bodyText.textContent = 'Words about buying a car or truck from an individual.';
      break;

    case 'internet used':
      bodyTitle.textContent = 'Shopping for a Used Car Online';
      bodyText.textContent = 'Words about buying a used car over The Internet.';
      break;

    case 'new lot':
      bodyTitle.textContent = 'Shopping at a New Car Dealership';
      bodyText.textContent = 'Words about the new car buying experience.';
      break;

    case 'internet new':
      bodyTitle.textContent = 'Shopping for a New Car Online';
      bodyText.textContent = 'Words about buying a new car over The Internet.';
      break;
  }
}

function addButtons(array) {
  for(let i = 0; i < array.length; i++) {
    const btn = document.createElement('button');

    btn.textContent = array[i][0];
    btn.id = array[i][1];
    btnDiv.appendChild(btn);
  }
}

function toggleBackResetDiv(value) {
  const backResetDiv = document.querySelector('#back-reset-div');
  
  backResetDiv.style.display = value;
}

function clearOldButtons() {
  const prevButtons = btnDiv.querySelectorAll('button');

  prevButtons.forEach((button) => {
    button.parentNode.removeChild(button);
  });
}

resetBtn.addEventListener('click', resetPage);

function resetPage() {
  buildBudgetPage();
  userPrefs = {};
}

backBtn.addEventListener('click', goBack);

function goBack() {
  const userValues = Object.keys(userPrefs).map(function (key) {
    return userPrefs[key];
    }); // COPY/PASTE from StackOverflow. This is a little beyond my current studies, but I think I get it. I get an array made up of the keys from the userPrefs object, then the .map() method runs a function on each element within that array that returns the value of each key as a new array.
  
  // let userValues = Object.values(userPrefs); //Object.values is not compatible with IE, look for alt method.
  const lastValue = userValues[userValues.length - 1];

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
