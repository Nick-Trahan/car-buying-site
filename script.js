let getStartedButton = document.querySelector('#get-started');
let questionBox = document.querySelector('#question-box');
let bodyTitle = document.querySelector('#body-title');
let introText = document.querySelector('#intro-text');

getStartedButton.addEventListener('click', askQuestions);

function askQuestions() {
  getStartedButton.style.display = 'none';
  introText.style.display = 'none';
  bodyTitle.innerHTML = 'This is a test. IT WORKED!';
  questionBox.innerHTML = 'Lots of words go here.';

}