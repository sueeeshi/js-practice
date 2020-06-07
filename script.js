var userName;
var userQuestion;

function getValueName() {
  userName = document.getElementById('userName').value;
}
function getQuestion() {
  userQuestion = document.getElementById('userQuestion').value;
}

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain!';
  break;
  case 1:
    eightBall = 'It is decidedly so!';
  break;
  case 2:
    eightBall = 'Reply hazy try again!';
  break;
  case 3:
    eightBall = 'Cannot predict now!';
  break;
  case 4:
    eightBall = 'Do not count on it!';
  break;
  case 5:
    eightBall = 'My sources say no!';
  break;
  case 6:
    eightBall = 'Outlook not so good!';
  break;
  case 7:
    eightBall = 'Sights point to yes!';
  break;
  default:
    eightBall = 'Try again!';
}

function showResult() {
  document.getElementById('yourResult').innerHTML = (`Hello, ${userName}! <br /><br />
    You asked: ${userQuestion} <br /><br />
    The Eight Ball answered: ${eightBall}`);
};

function refreshPage(){
    window.location.reload();
}

document.querySelector("button").addEventListener("click", function(event) {
      showResult();
      event.preventDefault();
  }, false);
