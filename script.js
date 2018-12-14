let getStartedButton = document.querySelector('#get-started');
let questionBox = document.querySelector('#question-box');
let bodyTitle = document.querySelector('#body-title');
let introText = document.querySelector('#intro-text');
let btnRow = document.querySelector('#btn-row');
let userPrefs = [];

getStartedButton.addEventListener('click', askQuestions);

function askQuestions() {
  getStartedButton.style.display = 'none';
  introText.style.display = 'none';
  questionBox.style.display = 'initial' ;
  bodyTitle.innerHTML = 'What\'s Your Budget?';
  questionBox.innerHTML = 'Lots of words go here.';
  
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

  let budgetLo = document.querySelector('#btnBudgetLo');
  let budgetMid = document.querySelector('#btnBudgetMid');
  let budgetHi = document.querySelector('#btnBudgetHi');
  let labelNew = document.createTextNode('Shop New');
  let labelUsed = document.createTextNode('Shop Pre-Owned');

  budgetLo.addEventListener('click', loBudget);
  budgetMid.addEventListener('click', midBudget);
  budgetHi.addEventListener('click', hiBudget);

  function loBudget() {
    userPrefs.push('lo');
    buildConditionPage();
  }

  function midBudget() {
    userPrefs.push('mid');
    buildConditionPage();
  }

  function hiBudget() {
    userPrefs.push('hi');
    buildConditionPage();
  }

  function buildConditionPage() {
    budgetLo.style.display = 'none';
    budgetMid.style.display = 'none';
    budgetHi.style.display = 'none';

    let btn4 = document.createElement('button');
    let btn5 = document.createElement('button');

    btn4.appendChild(labelUsed);
    btn5.appendChild(labelNew);

    btn4.id = 'btnUsed';
    btn5.id = 'btnNew';

    if (userPrefs[0] === 'lo') {
      bodyTitle.innerHTML = 'Below $5,000';
      questionBox.innerHTML = 'Even more words! LO';
      btnRow.appendChild(btn4);
    } else if (userPrefs[0] === 'mid') {
      bodyTitle.innerHTML = '$5,000 to $15,000';
      questionBox.innerHTML = 'Even more words! MID';
      btnRow.appendChild(btn4);
      btnRow.appendChild(btn5);
    } else if (userPrefs[0] === 'hi') {
      bodyTitle.innerHTML = '$15,000 or More';
      questionBox.innerHTML = 'Even more words! HI';
      btnRow.appendChild(btn4);
      btnRow.appendChild(btn5);
    } else {
      bodyTitle.innerHTML = 'Something went wrong :(';
      questionBox.innerHTML = 'Refresh the page to try again.';
    }
  }

  /*function loBudget() {
    budgetLo.style.display = 'none';
    budgetMid.style.display = 'none';
    budgetHi.style.display = 'none';

    bodyTitle.innerHTML = 'Below $5,000';
    questionBox.innerHTML = 'Even more words!';

    let btn4 = document.createElement('button');

    btn4.appendChild(labelUsed);

    btn4.id = 'btnLoUsed';

    btnRow.appendChild(btn4);
  }

  function midBudget() {
    budgetLo.style.display = 'none';
    budgetMid.style.display = 'none';
    budgetHi.style.display = 'none';

    bodyTitle.innerHTML = '$5,000 to $15,000';
    questionBox.innerHTML = 'Even more words!';

    let btn5 = document.createElement('button');
    let btn6 = document.createElement('button');

    btn5.appendChild(labelUsed);
    btn6.appendChild(labelNew);

    btn5.id = 'btnMidUsed';
    btn6.id = 'btnMidNew';

    btnRow.appendChild(btn5);
    btnRow.appendChild(btn6);
  }

  function hiBudget() {
    budgetLo.style.display = 'none';
    budgetMid.style.display = 'none';
    budgetHi.style.display = 'none';

    bodyTitle.innerHTML = '$15,000 or More';
    questionBox.innerHTML = 'Even more words!';

    let btn7 = document.createElement('button');
    let btn8 = document.createElement('button');

    btn7.appendChild(labelUsed);
    btn8.appendChild(labelNew);

    btn7.id = 'btnHiUsed';
    btn8.id = 'btnHiNew';

    btnRow.appendChild(btn7);
    btnRow.appendChild(btn8);
  }*/
}
