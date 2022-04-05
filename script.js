var nameInput
var nameEnter
var outputUserName
var outputBotName
var nameButton
var rockButton
var scissorButton
var paperButton
var userHand
var botHand
const prefix = ['Sire', 'Mistress', 'Lord', 'Lady', 'Dr', 'Chancellor', ];
const suffix = ['The Absurd', 'The Show-Off', 'The Clown', 'The Trickster',
'The Goober', 'The Quirky'];
const botName = ['Alice', 'Joanna', 'Halie', 'Kronos', 'Lester', 'Oreo', 'Mari', 'Taco']


document.addEventListener('DOMContentLoaded', function(){
  nameInput = document.getElementById('myName')
  nameEnter = document.getElementById('nameButton')
  outputUserName = document.getElementById('userName')
  outputBotName = document.getElementById('botName')
  nameButton = document.getElementById('nameButton')
  rockButton = document.getElementById('rockButton')
  scissorButton = document.getElementById('scissorButton')
  paperButton = document.getElementById('paperButton')
  userHand = document.getElementById('myHand')
  botHand = document.getElementById('botHand')

  nameButton.addEventListener('click', userNameFunc)
  nameButton.addEventListener('click', botNameFunc)
  rockButton.addEventListener('click', resultFuncRock)
  paperButton.addEventListener('click', resultFuncPaper)
  scissorButton.addEventListener('click', resultFuncScissor)
});

function userNameFunc() {
  var pre = Math.floor(Math.random() * prefix.length);
  var suf = Math.floor(Math.random() * suffix.length);
  var userName = nameInput.value
  outputUserName.innerText = prefix[pre] +' '+ userName +' '+ suffix[suf]
}

function botNameFunc() {
  outputBotName.innerText = 'Bot ' + botName[Math.floor(Math.random() * botName.length)]
}


//1 represents rock, 2 represents paper, 3 represents scissors

function resultFuncRock() {
  userHand.innerHTML = '&#9994'
  pick = botChoice()
  if(pick == 1) {
    botHand.innerHTML = '&#9994'
    alert("It's a tie!")
  } else if (pick == 2) {
    botHand.innerHTML = '&#128400'
    alert('You Lose!')
  } else {
    botHand.innerHTML = '&#9996'
    alert('You Win!')
  }
}

function resultFuncPaper() {
  userHand.innerHTML = '&#128400'
  pick = botChoice()
  if(pick == 1) {
    botHand.innerHTML = '&#9994'
    alert('You Win!')
  } else if (pick == 2) {
    botHand.innerHTML = '&#128400'
    alert("It's a tie!")
  } else {
    botHand.innerHTML = '&#9996'
    alert('You Lose!')
  }
}

function resultFuncScissor() {
  userHand.innerHTML = '&#9996'
  pick = botChoice()
  if(pick == 1) {
    botHand.innerHTML = '&#9994'
    alert('You Lose!')
  } else if (pick == 2) {
    botHand.innerHTML = '&#128400'
    alert('You Win!')
  } else {
    botHand.innerHTML = '&#9996'
    alert("It's a tie!")
  }
}

function botChoice() {
  return(Math.floor(Math.random() * 3)+1)
}
